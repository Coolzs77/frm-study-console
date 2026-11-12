import subprocess
import sys
import json
import time
import urllib.request
import os
import tempfile
import websocket
import base64


def find_chrome():
    candidates = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
        r"C:\Users\86166\AppData\Local\Google\Chrome\Application\chrome.exe",
    ]
    return next((p for p in candidates if os.path.exists(p)), None)


class CDPClient:
    def __init__(self, port=9240, window_size="1600,1050", profile_name="frm_r10"):
        chrome = find_chrome()
        if not chrome:
            raise RuntimeError("Chrome binary not found")
        user_data = os.path.join(tempfile.gettempdir(), f"chrome_{profile_name}_{port}")
        os.makedirs(user_data, exist_ok=True)
        self.proc = subprocess.Popen([
            chrome,
            f"--remote-debugging-port={port}",
            "--remote-allow-origins=*",
            f"--user-data-dir={user_data}",
            "--headless=new",
            "--disable-gpu",
            "--no-first-run",
            "--no-default-browser-check",
            f"--window-size={window_size}",
            "about:blank",
        ])
        time.sleep(2)
        tabs = json.loads(urllib.request.urlopen(f"http://127.0.0.1:{port}/json").read())
        page = next(t for t in tabs if t.get("type") == "page")
        self.ws = websocket.create_connection(page["webSocketDebuggerUrl"], timeout=20)
        self.msg_id = 0
        self.events = []

    def send(self, method, params=None):
        self.msg_id += 1
        cid = self.msg_id
        self.ws.send(json.dumps({"id": cid, "method": method, "params": params or {}}))
        while True:
            raw = self.ws.recv()
            data = json.loads(raw)
            if data.get("id") == cid:
                if "error" in data:
                    raise RuntimeError(f"CDP Error {method}: {data['error']}")
                return data.get("result", {})
            else:
                self.events.append(data)

    def pump_events(self, duration=0.5):
        end = time.time() + duration
        while True:
            rem = end - time.time()
            if rem <= 0:
                break
            self.ws.settimeout(min(0.25, rem))
            try:
                raw = self.ws.recv()
                self.events.append(json.loads(raw))
            except websocket.WebSocketTimeoutException:
                continue
        self.ws.settimeout(20)

    def eval_js(self, expr):
        res = self.send("Runtime.evaluate", {
            "expression": expr,
            "awaitPromise": True,
            "returnByValue": True,
        })
        if "exceptionDetails" in res:
            raise RuntimeError(f"JS Exception: {res['exceptionDetails']}")
        return res.get("result", {}).get("value")

    def screenshot(self, out_path):
        os.makedirs(os.path.dirname(out_path), exist_ok=True)
        res = self.send("Page.captureScreenshot", {"format": "png"})
        with open(out_path, "wb") as f:
            f.write(base64.b64decode(res["data"]))

    def close(self):
        try:
            self.ws.close()
        except Exception:
            pass
        try:
            self.proc.kill()
        except Exception:
            pass
        time.sleep(0.5)


def collect_network_log(events):
    reqs = {}
    resps = {}
    finished = {}
    failed = {}
    for ev in events:
        m = ev.get("method")
        p = ev.get("params", {})
        if m == "Network.requestWillBeSent":
            reqs[p["requestId"]] = {
                "url": p["request"]["url"],
                "type": p.get("type"),
                "ts": p.get("timestamp", 0),
            }
        elif m == "Network.responseReceived":
            resps[p["requestId"]] = {
                "status": p["response"]["status"],
                "url": p["response"]["url"],
                "ts": p.get("timestamp", 0),
            }
        elif m == "Network.loadingFinished":
            finished[p["requestId"]] = {"ts": p.get("timestamp", 0), "bytes": p.get("encodedDataLength", 0)}
        elif m == "Network.loadingFailed":
            failed[p["requestId"]] = {"error": p.get("errorText"), "canceled": p.get("canceled")}
    return reqs, resps, finished, failed


def run_all(live=False):
    base_url = (
        "https://coolzs77.github.io/frm-study-console/?mode=read"
        if live
        else "http://127.0.0.1:4173/?mode=read"
    )
    wait_initial = 12.0 if live else 4.5
    wait_mobile = 8.0 if live else 3.5

    expected_js = None
    if os.path.exists("dist/index.html"):
        import re
        idx_html = open("dist/index.html", "r", encoding="utf-8").read()
        m = re.search(r"assets/(index-[A-Za-z0-9_-]+\.js)", idx_html)
        if m:
            expected_js = m.group(1)

    if live and expected_js:
        print(f"Waiting for live GitHub Pages CDN to serve {expected_js} ...")
        for attempt in range(12):
            probe = CDPClient(port=9240, window_size="1280,800", profile_name="cdn_probe")
            try:
                probe.send("Network.enable")
                probe.send("Runtime.enable")
                probe.send("Network.setCacheDisabled", {"cacheDisabled": True})
                probe.send("Page.navigate", {"url": f"https://coolzs77.github.io/frm-study-console/?_cb={int(time.time())}"})
                probe.pump_events(3.5)
                reqs_p, _, _, _ = collect_network_log(probe.events)
                loaded = [r["url"] for r in reqs_p.values() if "/assets/index-" in r["url"]]
                print(f"  CDN probe {attempt+1}: {loaded}")
                if any(expected_js in u for u in loaded):
                    break
            finally:
                probe.close()
            time.sleep(5)

    print(f"=== Test 1 ({'LIVE' if live else 'LOCAL'}): Desktop (1600x1050) priority order, body images, blob PDF & bookmark jump ===")
    c = CDPClient(port=9241, window_size="1600,1050", profile_name="desktop")
    try:
        c.send("Network.enable")
        c.send("Page.enable")
        c.send("Runtime.enable")
        c.send("Network.setCacheDisabled", {"cacheDisabled": True})
        c.send("Page.navigate", {"url": base_url})

        c.pump_events(wait_initial)
        reqs, resps, finished, failed = collect_network_log(c.events)

        console_errors = [
            ev.get("params")
            for ev in c.events
            if ev.get("method") == "Runtime.exceptionThrown"
            or (ev.get("method") == "Runtime.consoleAPICalled" and ev.get("params", {}).get("type") == "error")
        ]
        assert len(console_errors) == 0, f"Unexpected console/runtime errors: {console_errors}"

        urls_all = [r["url"] for r in reqs.values()]
        assert not any("qrserver.com" in u for u in urls_all), "External qrserver.com request detected!"
        js_urls = [u for u in urls_all if "/assets/index-" in u and u.endswith(".js")]
        print("  Loaded hashed bundle:", js_urls)

        img_reqs = [r for r in reqs.values() if "/images/" in r["url"]]
        q1_imgs = [rid for rid, r in reqs.items() if "ch2_1_4_q1_" in r["url"]]
        pdf_reqs = [r for r in reqs.values() if "/courseware/" in r["url"] and r["url"].endswith(".pdf")]
        assert len(q1_imgs) == 3, f"Expected 3 Q1 body images requested, got {len(q1_imgs)}"
        assert len(pdf_reqs) == 1, f"Expected 1 initial desktop PDF fetch, got {len(pdf_reqs)}"

        latest_img_done = max(
            finished[rid]["ts"]
            for rid in q1_imgs
            if rid in finished
        )
        pdf_start = min(r["ts"] for r in pdf_reqs)
        print(f"  Timing check: last Q1 body image finished at ts={latest_img_done:.3f}, PDF started at ts={pdf_start:.3f}")
        assert pdf_start > latest_img_done, "PDF fetch started BEFORE Q1 body images finished!"

        dom_check = c.eval_js("""
        (() => {
            const imgs = [...document.querySelectorAll('main img')];
            const iframe = document.querySelector('aside iframe');
            const bodyText = document.body.innerText;
            return {
                imgCount: imgs.length,
                imgs: imgs.map(i => ({ alt: i.alt, src: i.src, complete: i.complete, nw: i.naturalWidth, loading: i.loading })),
                iframeSrc: iframe ? iframe.src : null,
                hasCachedBadge: bodyText.includes('已本地缓存'),
                readyState: document.readyState,
            };
        })()
        """)
        print("  DOM check:", json.dumps(dom_check, ensure_ascii=False))
        assert dom_check["readyState"] == "complete"
        assert dom_check["imgCount"] == 3
        for im in dom_check["imgs"]:
            assert im["complete"] and im["nw"] > 0, f"Image failed to load: {im}"
        assert dom_check["iframeSrc"] and dom_check["iframeSrc"].startswith("blob:"), f"Iframe not using blob URL: {dom_check['iframeSrc']}"
        assert dom_check["hasCachedBadge"], "Missing cached badge"

        c.screenshot("docs/images/v37_body_images_loaded.png")

        # Test bookmark jump P14 uses 0 new HTTP requests
        c.events.clear()
        clicked = c.eval_js("""
        (() => {
            const btns = [...document.querySelectorAll('aside button')];
            const p14 = btns.find(b => b.innerText.includes('P14'));
            if (!p14) return false;
            p14.click();
            return true;
        })()
        """)
        assert clicked, "Could not find P14 bookmark button"
        c.pump_events(1.5)
        reqs_after, _, _, _ = collect_network_log(c.events)
        pdf_after = [r for r in reqs_after.values() if ".pdf" in r["url"]]
        assert len(pdf_after) == 0, f"Bookmark click re-fetched PDF over network: {pdf_after}"
        iframe_after = c.eval_js("document.querySelector('aside iframe')?.src || ''")
        assert iframe_after.endswith("#page=14"), f"Expected iframe src ending with #page=14, got {iframe_after}"
        print(f"  Bookmark jump check: 0 new PDF requests, iframe={iframe_after}")

        # Switch to 重点 PPT 图卡 mode and verify slide images load cleanly
        switched = c.eval_js("""
        (() => {
            const btn = [...document.querySelectorAll('aside button')].find(b => b.innerText.includes('重点 PPT 图卡'));
            if (!btn) return false;
            btn.click();
            return true;
        })()
        """)
        assert switched, "Could not switch to 重点 PPT 图卡"
        c.pump_events(2.0)
        slide_imgs = c.eval_js("""
        (() => [...document.querySelectorAll('aside img')].map(i => ({
            alt: i.alt,
            complete: i.complete,
            nw: i.naturalWidth,
            renderedHeight: Math.round(i.getBoundingClientRect().height)
        })))()
        """)
        assert len(slide_imgs) >= 4, f"Expected slide images in 重点 PPT 图卡, got {len(slide_imgs)}"
        for si in slide_imgs:
            assert si["complete"] and si["nw"] > 0 and si["renderedHeight"] >= 150, f"Slide image failed or collapsed: {si}"
        print(f"  Slide cards mode: {len(slide_imgs)} slide images loaded cleanly (heights={[s['renderedHeight'] for s in slide_imgs]})")
        c.screenshot("docs/images/v37_slide_fallback_and_pdf.png")

        # Open SyncModal and verify local DataURL QR generation (0 external calls)
        c.events.clear()
        c.eval_js("""
        (() => {
            const btn = [...document.querySelectorAll('header button')].find(b => b.innerText.includes('多端同步') || b.innerText.includes('已同步'));
            btn?.click();
        })()
        """)
        c.pump_events(1.0)
        reqs_sync, _, _, _ = collect_network_log(c.events)
        assert not any("qrserver" in r["url"] for r in reqs_sync.values()), "External QR request triggered!"
        qr_info = c.eval_js("""
        (() => {
            const img = document.querySelector('img[alt="手机同步二维码"]');
            return img ? { src: img.src.slice(0, 40), complete: img.complete, nw: img.naturalWidth } : null;
        })()
        """)
        print("  Offline QR Modal check:", qr_info)
        assert qr_info and qr_info["src"].startswith("data:image/png;base64,") and qr_info["nw"] > 0
        c.screenshot("docs/images/v37_offline_qr_sync.png")
    finally:
        c.close()

    print("\n=== Test 2: Mobile Viewport (390x844) loads body images cleanly with ZERO hidden PDF download ===")
    m = CDPClient(port=9242, window_size="390,844", profile_name="mobile")
    try:
        m.send("Network.enable")
        m.send("Page.enable")
        m.send("Runtime.enable")
        m.send("Emulation.setDeviceMetricsOverride", {"width": 390, "height": 844, "deviceScaleFactor": 2, "mobile": True})
        m.send("Page.navigate", {"url": base_url})
        m.pump_events(wait_mobile)
        reqs_m, _, _, _ = collect_network_log(m.events)
        pdf_m = [r for r in reqs_m.values() if ".pdf" in r["url"]]
        assert len(pdf_m) == 0, f"Mobile viewport downloaded hidden PDF: {pdf_m}"
        dom_m = m.eval_js("""
        (() => {
            const imgs = [...document.querySelectorAll('main img')];
            return imgs.map(i => ({ alt: i.alt, complete: i.complete, nw: i.naturalWidth }));
        })()
        """)
        assert len(dom_m) == 3 and all(i["complete"] and i["nw"] > 0 for i in dom_m), f"Mobile images failed: {dom_m}"
        print(f"  Mobile check PASS: {len(dom_m)} body images loaded, 0 hidden PDF requests.")
    finally:
        m.close()

    print("\n=== Test 3: Genuine Fault Injection -> Auto-Retry + Manual Retry Recovery & PDF Error Fallback ===")
    f = CDPClient(port=9243, window_size="1600,1050", profile_name="fault")
    try:
        f.send("Network.enable")
        f.send("Runtime.enable")
        f.send("Network.setCacheDisabled", {"cacheDisabled": True})
        f.send("Page.navigate", {"url": base_url})
        f.pump_events(7.0 if live else 2.0)

        # Enable Fetch interception to actively fail Q2 image AND Ch 2.2.5 PDF
        f.send("Fetch.enable", {
            "patterns": [
                {"urlPattern": "*ch2_1_4_q2_f9c54558.png*", "requestStage": "Request"},
                {"urlPattern": "*c2_2_1_derivatives_1.pdf*", "requestStage": "Request"},
            ]
        })

        # Switch to Q2 (clickable "下一题")
        f.eval_js("""
        (() => {
            const nextBtn = [...document.querySelectorAll('main button')].find(b => b.innerText.includes('下一题'));
            nextBtn?.click();
        })()
        """)

        # Pump and fail all intercepted requests for ~3.2s so initial + 2 auto retries exhaust cleanly
        t0 = time.time()
        intercepted_q2_urls = []
        while time.time() - t0 < 3.5:
            f.pump_events(0.25)
            remaining = []
            for ev in f.events:
                if ev.get("method") == "Fetch.requestPaused":
                    p = ev["params"]
                    url = p["request"]["url"]
                    if "ch2_1_4_q2_f9c54558" in url:
                        intercepted_q2_urls.append(url)
                    f.send("Fetch.failRequest", {"requestId": p["requestId"], "errorReason": "ConnectionReset"})
                else:
                    remaining.append(ev)
            f.events = remaining

        print(f"  Fault injection Q2 attempts intercepted: {len(intercepted_q2_urls)} -> {intercepted_q2_urls}")
        assert len(intercepted_q2_urls) >= 3, f"Expected initial + 2 auto-retries (>=3), got {intercepted_q2_urls}"

        err_ui = f.eval_js("""
        (() => {
            const txt = document.body.innerText;
            const retryBtn = [...document.querySelectorAll('main button')].find(b => b.innerText.includes('重试加载'));
            return {
                hasErrorMsg: txt.includes('配图暂未加载成功'),
                hasRetryBtn: !!retryBtn,
            };
        })()
        """)
        print("  Error UI shown after failed retries:", err_ui)
        assert err_ui["hasErrorMsg"] and err_ui["hasRetryBtn"], "Retry fallback UI did not appear on failed image!"

        # Now disable Fetch blocking and click '重试加载' to prove real recovery!
        f.send("Fetch.disable")
        f.eval_js("""
        (() => {
            const retryBtn = [...document.querySelectorAll('main button')].find(b => b.innerText.includes('重试加载'));
            retryBtn?.click();
        })()
        """)
        f.pump_events(4.0 if live else 1.5)
        recovered = f.eval_js("""
        (() => {
            const imgs = [...document.querySelectorAll('main img')];
            return imgs.map(i => ({ src: i.src, complete: i.complete, nw: i.naturalWidth }));
        })()
        """)
        print("  After clicking 重试加载:", recovered)
        assert len(recovered) == 1 and recovered[0]["complete"] and recovered[0]["nw"] > 0, "Manual retry did not recover Q2 image!"

        # Also test PDF network failure fallback -> jumps cleanly to error banner + realSlides!
        f.send("Fetch.enable", {
            "patterns": [{"urlPattern": "*c2_2_1_derivatives_1.pdf*", "requestStage": "Request"}]
        })
        f.eval_js("""
        (() => {
            const chBtn = [...document.querySelectorAll('aside button')].find(b => b.innerText.includes('2.2.3 衍生品远期与期货'));
            chBtn?.click();
        })()
        """)
        t1 = time.time()
        while time.time() - t1 < 2.5:
            f.pump_events(0.25)
            rem = []
            for ev in f.events:
                if ev.get("method") == "Fetch.requestPaused":
                    f.send("Fetch.failRequest", {"requestId": ev["params"]["requestId"], "errorReason": "TimedOut"})
                else:
                    rem.append(ev)
            f.events = rem
        f.send("Fetch.disable")
        pdf_fallback = f.eval_js("""
        (() => {
            const aside = document.querySelectorAll('aside')[1];
            const txt = aside ? aside.innerText : '';
            const imgs = aside ? [...aside.querySelectorAll('img')].map(i => ({ alt: i.alt, complete: i.complete, nw: i.naturalWidth })) : [];
            return {
                hasErrorBanner: txt.includes('原版 PDF 下载受阻或响应超时'),
                hasRetryPdfBtn: txt.includes('重试加载 PDF'),
                fallbackSlideCount: imgs.length,
                allSlidesOk: imgs.length > 0 && imgs.every(i => i.complete && i.nw > 0),
            };
        })()
        """)
        print("  PDF failure auto-fallback check:", pdf_fallback)
        assert pdf_fallback["hasErrorBanner"] and pdf_fallback["hasRetryPdfBtn"] and pdf_fallback["allSlidesOk"], f"PDF fallback failed: {pdf_fallback}"
    finally:
        f.close()

    print("\n=== Test 4: Real Two-Device Cross-Profile Cloud Sync & Silent Auto-Sync ===")
    test_account = f"Zsz_AutoTest_{int(time.time())}"
    cloud_key = None
    # Profile A (Desktop)
    pa = CDPClient(port=9244, window_size="1600,1050", profile_name=f"sync_pc_{int(time.time())}")
    # Profile B (Mobile separate profile)
    pb = CDPClient(port=9245, window_size="390,844", profile_name=f"sync_mb_{int(time.time())}")
    try:
        for cli in (pa, pb):
            cli.send("Network.enable")
            cli.send("Runtime.enable")
        pa.send("Page.navigate", {"url": base_url})
        pb.send("Page.navigate", {"url": base_url})
        pa.pump_events(4.5 if live else 2.0)
        pb.pump_events(4.5 if live else 2.0)

        # Desktop stars & memorizes Q1 (match exact button text inside QuestionCanvas, not LeftSidebar mode buttons!)
        pa.eval_js("""
        (() => {
            const btns = [...document.querySelectorAll('main button')];
            btns.find(b => b.innerText.trim() === '背会')?.click();
            btns.find(b => b.innerText.trim() === '收藏')?.click();
            const syncBtn = [...document.querySelectorAll('header button')].find(b => b.innerText.includes('多端同步') || b.innerText.includes('已同步'));
            syncBtn?.click();
        })()
        """)
        pa.pump_events(0.5)
        pa.eval_js(f"""
        (() => {{
            const inp = document.querySelector('input[placeholder*="输入你的账号"]');
            const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
            setter.call(inp, '{test_account}');
            inp.dispatchEvent(new Event('input', {{ bubbles: true }}));
        }})()
        """)
        pa.pump_events(0.3)
        pa.eval_js("""
        (() => {
            const btn = [...document.querySelectorAll('button')].find(b => b.innerText.includes('备份到云端'));
            btn?.click();
        })()
        """)
        # Wait for real POST to api.textdb.online
        t0 = time.time()
        backup_ok = False
        while time.time() - t0 < 10.0:
            pa.pump_events(0.4)
            txt = pa.eval_js("document.body.innerText")
            if "已备份到云端" in txt and "1 条收藏" in txt and "自动同步已开启" in txt:
                backup_ok = True
                break
        assert backup_ok, "Desktop 备份到云端 did not report 1 条收藏!"
        pa.screenshot("docs/images/v37_offline_qr_sync.png")
        print(f"  Desktop backed up account={test_account} to cloud successfully.")

        # Mobile (fresh isolated browser!) verifies Q1 is NOT starred initially, then syncs from cloud using lowercase!
        mb_initial = pb.eval_js("document.body.innerText")
        assert "已收藏" not in mb_initial, "Mobile fresh profile unexpectedly had starred state!"
        pb.eval_js("""
        (() => {
            const syncBtn = [...document.querySelectorAll('header button')].find(b => b.innerText.includes('多端同步') || b.innerText.includes('已同步'));
            syncBtn?.click();
        })()
        """)
        pb.pump_events(0.5)
        pb.eval_js(f"""
        (() => {{
            const inp = document.querySelector('input[placeholder*="输入你的账号"]');
            const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
            setter.call(inp, '{test_account.lower()}');
            inp.dispatchEvent(new Event('input', {{ bubbles: true }}));
        }})()
        """)
        pb.pump_events(0.3)
        pb.eval_js("""
        (() => {
            const btn = [...document.querySelectorAll('button')].find(b => b.innerText.includes('从云端同步'));
            btn?.click();
        })()
        """)
        t1 = time.time()
        pull_ok = False
        while time.time() - t1 < 10.0:
            pb.pump_events(0.4)
            txt = pb.eval_js("document.body.innerText")
            if "已从云端同步进度" in txt and "自动同步已开启" in txt:
                pull_ok = True
                break
        assert pull_ok, "Mobile 从云端同步 did not succeed!"

        # Close modal on Mobile and verify Q1 is now 已收藏 & 已背会, then toggle 收藏 on Q2 -> triggers 2.5s silent auto-backup!
        pb.eval_js("""
        (() => {
            const closeBtn = [...document.querySelectorAll('button')].find(b => b.innerText.trim() === '关闭');
            closeBtn?.click();
        })()
        """)
        pb.pump_events(0.3)
        mb_synced_main = pb.eval_js("document.querySelector('main')?.innerText || ''")
        assert "已收藏" in mb_synced_main and "已背会" in mb_synced_main, f"Mobile Q1 UI did not reflect synced progress!"
        print("  Mobile pulled Q1 star+memorized from cloud cleanly!")

        # Silent auto-backup check: Mobile goes to Q2, stars Q2, waits 3.5s for 2.5s debounce silent upload
        pb.eval_js("""
        (() => {
            const nextBtn = [...document.querySelectorAll('main button')].find(b => b.innerText.trim() === '下一题');
            nextBtn?.click();
        })()
        """)
        pb.pump_events(0.4)
        pb.eval_js("""
        (() => {
            const starBtn = [...document.querySelectorAll('main button')].find(b => b.innerText.trim() === '收藏');
            starBtn?.click();
        })()
        """)
        pb.pump_events(4.0)

        # Desktop reloads page cleanly -> startup auto-pull MUST silently fetch Q2 star from Mobile!
        pa.send("Page.reload")
        pa.pump_events(6.0 if live else 3.5)
        pc_progress = pa.eval_js("JSON.parse(localStorage.getItem('frm_user_progress') || '{}')")
        print("  Desktop auto-pulled progress after Mobile edit:", pc_progress.get("starredIds"))
        assert "q_2_1_4_2" in (pc_progress.get("starredIds") or []), "Silent auto-sync did not sync Q2 star from Mobile back to Desktop!"
        print("  Bidirectional silent auto-sync PASS!")
    finally:
        # Clean up test key in textdb via Python urllib so no junk left on textdb
        import hashlib, urllib.request, urllib.parse
        try:
            norm = f"frm-study-console-nwafu-v2:{test_account.lower()}".encode()
            ck = "frm_" + hashlib.sha256(norm).hexdigest()[:28]
            data = urllib.parse.urlencode({"key": ck, "value": ""}).encode()
            urllib.request.urlopen(urllib.request.Request("https://api.textdb.online/update/", data=data, method="POST", headers={"User-Agent": "Mozilla/5.0"}), timeout=8)
        except Exception:
            pass
        pa.close()
        pb.close()

    print("\nALL ROUND 10 CDP END-TO-END VERIFICATIONS PASSED!")


if __name__ == "__main__":
    run_all(live=("--live" in sys.argv))
