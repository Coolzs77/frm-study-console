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

    # Start preview server on port 4180
    srv = subprocess.Popen(
        ["npx", "vite", "preview", "--port", "4180", "--strictPort"],
        cwd=r"e:\workspace\frm-study-console",
        shell=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE
    )
    time.sleep(3)

    user_data = r"c:\temp\chrome_dev_v33_clean"
    os.makedirs(user_data, exist_ok=True)
    
    proc = subprocess.Popen([
        chrome_bin,
        "--headless=new",
        "--remote-debugging-port=9228",
        "--remote-allow-origins=*",
        f"--user-data-dir={user_data}",
        "--disable-gpu",
        "--no-first-run",
        "--no-default-browser-check",
        "--window-size=1600,1000",
        "http://localhost:4180/"
    ])
    time.sleep(3)

    try:
        import websocket
        targets = json.loads(urllib.request.urlopen("http://localhost:9228/json").read())
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
            return send("Runtime.evaluate", {"expression": expr, "returnByValue": True})

        def take_screenshot(out_path):
            res = send("Page.captureScreenshot", {"format": "png"})
            data = base64.b64decode(res["result"]["data"])
            os.makedirs(os.path.dirname(os.path.abspath(out_path)), exist_ok=True)
            with open(out_path, "wb") as f:
                f.write(data)
            print(f"Captured: {out_path} ({len(data)} bytes)")

        # 1. Desktop PDF view with bookmarks and multiline concepts
        take_screenshot(r"e:\workspace\frm-study-console\docs\images\v33_desktop_pdf.png")
        take_screenshot(r"C:\Users\86166\.gemini\antigravity\brain\3ae7902e-67ba-45de-b095-cc10e8bec239\screenshot_v33_desktop_pdf.png")

        # 2. Switch to Formula Tab
        res_f = eval_js("""
            (() => {
                const btns = Array.from(document.querySelectorAll('button'));
                const b = btns.find(x => x.textContent.includes('公式手册'));
                if (b) { b.click(); return 'clicked formula'; }
                return 'not found';
            })()
        """)
        print("Formula click:", res_f)
        time.sleep(2)
        take_screenshot(r"e:\workspace\frm-study-console\docs\images\v33_formula_manual.png")
        take_screenshot(r"C:\Users\86166\.gemini\antigravity\brain\3ae7902e-67ba-45de-b095-cc10e8bec239\screenshot_v33_formula_manual.png")

        # 3. Switch to Basel Tab
        res_b = eval_js("""
            (() => {
                const tabs = document.querySelectorAll('aside .clay-inset-groove button');
                if (tabs && tabs[2]) {
                    tabs[2].click();
                    return 'clicked basel tab via index 2';
                }
                return 'not found';
            })()
        """)
        print("Basel click:", res_b)
        time.sleep(2)
        take_screenshot(r"e:\workspace\frm-study-console\docs\images\v33_basel_revision.png")
        take_screenshot(r"C:\Users\86166\.gemini\antigravity\brain\3ae7902e-67ba-45de-b095-cc10e8bec239\screenshot_v33_basel_revision.png")

        ws.close()
    finally:
        proc.kill()
        srv.kill()

if __name__ == "__main__":
    run()
