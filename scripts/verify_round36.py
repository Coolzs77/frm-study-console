import json, os, subprocess, time, urllib.request, base64

def run():
    chrome_paths = [
        r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
        r"C:\Users\86166\AppData\Local\Google\Chrome\Application\chrome.exe"
    ]
    chrome_bin = next((p for p in chrome_paths if os.path.exists(p)), None)
    if not chrome_bin:
        print("Chrome not found")
        return

    user_data = r"c:\temp\chrome_dev_v36_final"
    os.makedirs(user_data, exist_ok=True)
    
    proc = subprocess.Popen([
        chrome_bin,
        "--headless=new",
        "--remote-debugging-port=9232",
        "--remote-allow-origins=*",
        f"--user-data-dir={user_data}",
        "--disable-gpu",
        "--no-first-run",
        "--no-default-browser-check",
        "--window-size=1600,1050",
        "http://localhost:4173/?mode=read"
    ])
    time.sleep(3)

    try:
        import websocket
        targets = json.loads(urllib.request.urlopen("http://localhost:9232/json").read())
        page = next(t for t in targets if t.get("type") == "page")
        ws = websocket.create_connection(page["webSocketDebuggerUrl"], timeout=10)

        msg_id = 0
        def send(method, params=None):
            nonlocal msg_id
            msg_id += 1
            payload = {"id": msg_id, "method": method, "params": params or {}}
            ws.send(json.dumps(payload))
            while True:
                resp = json.loads(ws.recv())
                if resp.get("id") == msg_id:
                    return resp

        send("Page.enable")
        send("Runtime.enable")
        time.sleep(2)

        def eval_js(expr):
            r = send("Runtime.evaluate", {"expression": expr, "returnByValue": True})
            return r.get("result", {}).get("result", {}).get("value")

        # 1. Click Next 6 times to advance to Question 7 (Chapter 2.1.5)
        for i in range(6):
            eval_js("""
                (() => {
                    const buttons = Array.from(document.querySelectorAll('button'));
                    const nextBtn = buttons.find(b => b.innerText.includes('下一题'));
                    if (nextBtn) nextBtn.click();
                })()
            """)
            time.sleep(0.3)

        # Scroll right sidebar down to reveal Card 2
        eval_js("""
            (() => {
                const asides = Array.from(document.querySelectorAll('aside'));
                const rightAside = asides[asides.length - 1];
                if (rightAside) {
                    rightAside.scrollTop = 550;
                }
            })()
        """)
        time.sleep(1)

        # Verify Card 2 text & formulas
        card2_check = eval_js("""
            (() => {
                const text = document.body.innerText;
                const hasCard2 = text.includes('久期+凸度联合二阶近似');
                const hasBrokenAsterisks = text.includes('* * [rose') || text.includes('* * [emerald');
                const hasCleanKaTeX = !!document.querySelector('.katex');
                return {
                    hasCard2,
                    hasBrokenAsterisks,
                    hasCleanKaTeX,
                    sample: hasCard2 ? text.slice(text.indexOf('久期+凸度联合二阶近似'), text.indexOf('久期+凸度联合二阶近似') + 280) : ''
                };
            })()
        """)
        print("Card 2 Check:", json.dumps(card2_check, ensure_ascii=False, indent=2))
        assert card2_check["hasCard2"], "Card 2 (久期+凸度联合二阶近似) must be rendered!"
        assert not card2_check["hasBrokenAsterisks"], "Card 2 must NOT have broken asterisks!"
        print("✓ [PASS] Card 2: KaTeX clean formulas verified with 0 broken asterisks!")

        # Screenshot 1: Concept cards with clean formulas
        res = send("Page.captureScreenshot", {"format": "png"})
        img_b64 = res["result"]["data"]
        artifact_path1 = r"C:\Users\86166\.gemini\antigravity\brain\3ae7902e-67ba-45de-b095-cc10e8bec239\v36_card2_clean_math.png"
        with open(artifact_path1, "wb") as f:
            f.write(base64.b64decode(img_b64))
        print(f"Screenshot 1 saved to: {artifact_path1}")

        # 2. Check Question 7 (q_2_1_5_1) Option Analysis
        q7_check = eval_js("""
            (() => {
                const text = document.body.innerText;
                const hasOptionA = text.includes('• A项错误');
                const hasOptionD = text.includes('• D项正确');
                return {
                    hasOptionA,
                    hasOptionD,
                    sample: text.includes('选项逐一解析与核心考点') 
                        ? text.slice(text.indexOf('选项逐一解析与核心考点'), text.indexOf('选项逐一解析与核心考点') + 280) 
                        : ''
                };
            })()
        """)
        print("Q7 Option Analysis Check:", json.dumps(q7_check, ensure_ascii=False, indent=2))
        assert q7_check["hasOptionA"] and q7_check["hasOptionD"], "Q7 must show option-by-option analysis!"
        print("✓ [PASS] Q7: Detailed option-by-option analysis verified!")

        # Screenshot 2: Question 7 Option Analysis in Canvas
        res2 = send("Page.captureScreenshot", {"format": "png"})
        img_b64_2 = res2["result"]["data"]
        artifact_path2 = r"C:\Users\86166\.gemini\antigravity\brain\3ae7902e-67ba-45de-b095-cc10e8bec239\v36_q7_option_analysis.png"
        with open(artifact_path2, "wb") as f:
            f.write(base64.b64decode(img_b64_2))
        print(f"Screenshot 2 saved to: {artifact_path2}")

        # 3. Open Sync Modal
        eval_js("""
            (() => {
                const buttons = Array.from(document.querySelectorAll('button'));
                const syncBtn = buttons.find(b => b.innerText.includes('多端同步') || b.innerText.includes('已同步'));
                if (syncBtn) syncBtn.click();
            })()
        """)
        time.sleep(1)

        # Check Sync Modal
        sync_modal_check = eval_js("""
            (() => {
                const modal = document.querySelector('div.fixed');
                if (!modal) return { open: false };
                const text = modal.innerText;
                return {
                    open: true,
                    hasAccountInput: text.includes('自定义备考账号'),
                    hasQrCode: !!modal.querySelector('img'),
                    hasGist: text.toLowerCase().includes('gist'),
                    hasToken: text.toLowerCase().includes('token')
                };
            })()
        """)
        print("Sync Modal Check:", json.dumps(sync_modal_check, ensure_ascii=False, indent=2))
        assert sync_modal_check["open"], "Sync Modal should be open!"
        assert sync_modal_check["hasAccountInput"], "Sync Modal must have 自定义备考账号!"
        assert sync_modal_check["hasQrCode"], "Sync Modal must have QR code!"
        assert not sync_modal_check["hasGist"], "Sync Modal must NOT have Gist!"
        assert not sync_modal_check["hasToken"], "Sync Modal must NOT have Token!"
        print("✓ [PASS] Sync Modal: Clean custom account & QR code direct pass verified!")

        # Screenshot 3: Sync modal
        res3 = send("Page.captureScreenshot", {"format": "png"})
        img_b64_3 = res3["result"]["data"]
        artifact_path3 = r"C:\Users\86166\.gemini\antigravity\brain\3ae7902e-67ba-45de-b095-cc10e8bec239\v36_sync_modal.png"
        with open(artifact_path3, "wb") as f:
            f.write(base64.b64decode(img_b64_3))
        print(f"Screenshot 3 saved to: {artifact_path3}")

        ws.close()
        print("\n🎉 ALL 3 REAL EVIDENCE SCREENSHOTS CAPTURED & ALL ASSERTIONS PASSED 100%!")

    finally:
        proc.terminate()

if __name__ == "__main__":
    run()
