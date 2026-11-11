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

    # 启动 preview 服务器
    srv = subprocess.Popen(
        ["npx", "vite", "preview", "--port", "4176", "--strictPort"],
        cwd=r"e:\workspace\frm-study-console",
        shell=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    time.sleep(3)

    user_data = r"c:\temp\chrome_dev_v32_clean"
    os.makedirs(user_data, exist_ok=True)
    
    proc = subprocess.Popen([
        chrome_bin,
        "--headless=new",
        "--remote-debugging-port=9224",
        "--remote-allow-origins=*",
        f"--user-data-dir={user_data}",
        "--disable-gpu",
        "--no-first-run",
        "--no-default-browser-check",
        "--window-size=1600,950",
        "http://localhost:4176/"
    ])
    time.sleep(3)

    import websocket
    targets = json.loads(urllib.request.urlopen("http://localhost:9224/json").read())
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
    
    # 等待页面主挂载点就绪
    for _ in range(10):
        time.sleep(1)
        chk = send("Runtime.evaluate", {
            "expression": "document.body.innerText.length"
        })
        text_len = chk.get("result", {}).get("value", 0)
        print("Body text length:", text_len)
        if text_len > 100:
            break

    # 1. 验证公式手册与五个希腊值
    print("Clicking formula tab...")
    eval_f = send("Runtime.evaluate", {
        "expression": """
        (function() {
            const btns = Array.from(document.querySelectorAll('button'));
            const b = btns.find(x => x.innerText && x.innerText.includes('公式手册'));
            if (b) b.click();
            return { foundBtn: !!b };
        })()
        """,
        "returnByValue": True
    })
    print("Formula tab click:", eval_f.get("result", {}).get("value"))
    time.sleep(1)

    eval_check_greek = send("Runtime.evaluate", {
        "expression": """
        (function() {
            const divs = Array.from(document.querySelectorAll('div'));
            const banner = divs.find(d => d.innerText && d.innerText.includes('全书公式手册'));
            if (!banner) return { error: 'Banner not found' };
            const html = banner.innerHTML;
            return {
                text: banner.innerText,
                hasDelta: html.includes('Δ'),
                hasGamma: html.includes('Γ'),
                hasTheta: html.includes('Θ'),
                hasV: html.includes('V'),
                hasRho: html.includes('ρ'),
                hasNewline: html.includes('newline')
            };
        })()
        """,
        "returnByValue": True
    })
    print("Greek check result:", eval_check_greek.get("result", {}).get("value"))

    out_dir = r"e:\workspace\frm-study-console\docs\images"
    shot1 = send("Page.captureScreenshot", {"format": "png"})
    with open(os.path.join(out_dir, "screenshot_v32_formula_greek.png"), "wb") as f:
        f.write(base64.b64decode(shot1["result"]["data"]))
    print("Captured formula manual screenshot, size:", len(shot1["result"]["data"]))

    # 2. 切换回课件精讲并点击一键展开半屏
    print("Clicking slide tab and half screen...")
    eval_slide = send("Runtime.evaluate", {
        "expression": """
        (function() {
            const btns = Array.from(document.querySelectorAll('button'));
            const sBtn = btns.find(x => x.innerText && x.innerText.includes('课件精讲'));
            if (sBtn) sBtn.click();
            return { foundSlideBtn: !!sBtn };
        })()
        """,
        "returnByValue": True
    })
    print("Slide tab click:", eval_slide.get("result", {}).get("value"))
    time.sleep(1)

    eval_expand = send("Runtime.evaluate", {
        "expression": """
        (function() {
            const btns = Array.from(document.querySelectorAll('button'));
            const expBtn = btns.find(x => x.getAttribute('title') && x.getAttribute('title').includes('展开半屏'));
            if (expBtn) expBtn.click();
            const aside = document.querySelector('aside');
            const iframe = document.querySelector('iframe');
            return {
                foundExpBtn: !!expBtn,
                asideWidth: aside ? aside.offsetWidth : null,
                windowWidth: window.innerWidth,
                iframeSrc: iframe ? iframe.getAttribute('src') : null
            };
        })()
        """,
        "returnByValue": True
    })
    print("Expand half-screen result:", eval_expand.get("result", {}).get("value"))
    time.sleep(1)

    shot2 = send("Page.captureScreenshot", {"format": "png"})
    with open(os.path.join(out_dir, "screenshot_v32_halfscreen_pdf.png"), "wb") as f:
        f.write(base64.b64decode(shot2["result"]["data"]))
    print("Captured half-screen screenshot, size:", len(shot2["result"]["data"]))

    # Copy to artifacts
    art_dir = r"C:\Users\86166\.gemini\antigravity\brain\3ae7902e-67ba-45de-b095-cc10e8bec239"
    import shutil
    shutil.copy2(os.path.join(out_dir, "screenshot_v32_formula_greek.png"), os.path.join(art_dir, "screenshot_v32_formula_greek.png"))
    shutil.copy2(os.path.join(out_dir, "screenshot_v32_halfscreen_pdf.png"), os.path.join(art_dir, "screenshot_v32_halfscreen_pdf.png"))

    ws.close()
    proc.terminate()
    srv.terminate()
    print("FINISHED ALL VERIFICATIONS!")

if __name__ == "__main__":
    run()
