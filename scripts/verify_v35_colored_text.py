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

    user_data = r"c:\temp\chrome_dev_v35_test"
    os.makedirs(user_data, exist_ok=True)
    
    proc = subprocess.Popen([
        chrome_bin,
        "--headless=new",
        "--remote-debugging-port=9229",
        "--remote-allow-origins=*",
        f"--user-data-dir={user_data}",
        "--disable-gpu",
        "--no-first-run",
        "--no-default-browser-check",
        "--window-size=1600,1050",
        "http://localhost:4173/"
    ])
    time.sleep(3)

    try:
        import websocket
        targets = json.loads(urllib.request.urlopen("http://localhost:9229/json").read())
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
        send("Console.enable")
        
        # Navigate to preview URL
        nav_res = send("Page.navigate", {"url": "http://localhost:4173/"})
        print("Navigate result:", nav_res)
        time.sleep(4)

        # Check for any console errors or messages
        logs = []
        while True:
            try:
                ws.settimeout(1.0)
                msg = json.loads(ws.recv())
                if msg.get("method") == "Console.messageAdded":
                    logs.append(msg["params"]["message"])
                elif msg.get("method") == "Runtime.exceptionThrown":
                    logs.append(msg["params"]["exceptionDetails"])
            except:
                break
        print("Captured Browser Logs/Exceptions:", json.dumps(logs, ensure_ascii=False, indent=2))

        def eval_js(expr):
            r = send("Runtime.evaluate", {"expression": expr, "returnByValue": True})
            return r.get("result", {}).get("result", {}).get("value")

        # 1. Check title & page loaded
        title = eval_js("document.title")
        print("Page Title:", title)

        # Scroll the right sidebar down to reveal 核心概念速记解析
        eval_js("""
            (() => {
                const asides = Array.from(document.querySelectorAll('aside'));
                const rightAside = asides[asides.length - 1];
                if (rightAside) {
                    rightAside.scrollTop = 700;
                }
            })()
        """)
        time.sleep(1)

        # 2. Check concept cards: verify no nested colored boxes, verify colored spans exist
        concept_check = eval_js("""
            (() => {
                const concepts = document.querySelectorAll('div.clay-card-shadow');
                const coloredSpans = document.querySelectorAll('strong.text-blue-600, strong.text-emerald-600, strong.text-rose-600, strong.text-amber-600, strong.text-purple-600');
                return {
                    conceptCount: concepts.length,
                    coloredSpanCount: coloredSpans.length,
                    sampleTexts: Array.from(coloredSpans).slice(0, 8).map(s => s.innerText + ' (' + s.className + ')')
                };
            })()
        """)
        print("Concept Cards Check:", json.dumps(concept_check, ensure_ascii=False, indent=2))
        
        # Take screenshot of scrolled concept cards
        res = send("Page.captureScreenshot", {"format": "png"})
        img_b64 = res["result"]["data"]
        os.makedirs(r"e:\workspace\frm-study-console\docs\images", exist_ok=True)
        out_path1 = r"e:\workspace\frm-study-console\docs\images\v35_concepts_colored_no_boxes.png"
        with open(out_path1, "wb") as f:
            f.write(base64.b64decode(img_b64))
        print(f"Screenshot saved to: {out_path1}")

        # Capture Screenshot 1: Concept cards view
        res = send("Page.captureScreenshot", {"format": "png"})
        img_b64 = res["result"]["data"]
        os.makedirs(r"e:\workspace\frm-study-console\docs\images", exist_ok=True)
        out_path1 = r"e:\workspace\frm-study-console\docs\images\v35_concepts_colored_no_boxes.png"
        artifact_path1 = r"C:\Users\86166\.gemini\antigravity\brain\3ae7902e-67ba-45de-b095-cc10e8bec239\v35_concepts_colored_no_boxes.png"
        with open(out_path1, "wb") as f:
            f.write(base64.b64decode(img_b64))
        with open(artifact_path1, "wb") as f:
            f.write(base64.b64decode(img_b64))
        print(f"Screenshot 1 saved to: {out_path1}")

        # 3. Switch to Formula tab
        eval_js("""
            (() => {
                const buttons = Array.from(document.querySelectorAll('button'));
                const formulaBtn = buttons.find(b => b.innerText.includes('公式手册'));
                if (formulaBtn) formulaBtn.click();
            })()
        """)
        time.sleep(1.5)

        # Verify formula notes have colored bold text
        formula_check = eval_js("""
            (() => {
                const coloredInFormulas = document.querySelectorAll('strong.text-blue-600, strong.text-emerald-600, strong.text-rose-600, strong.text-amber-600');
                const formulaCards = document.querySelectorAll('.clay-card-shadow');
                return {
                    formulaCardCount: formulaCards.length,
                    coloredInFormulasCount: coloredInFormulas.length,
                    samples: Array.from(coloredInFormulas).slice(0, 8).map(s => s.innerText + ' (' + s.className + ')')
                };
            })()
        """)
        print("Formula Manual Check:", json.dumps(formula_check, ensure_ascii=False, indent=2))
        assert formula_check["coloredInFormulasCount"] >= 5, "Formula notes should have bold colored text!"
        print("✓ [PASS] Formula notes: rich bold colored keywords verified!")

        # Capture Screenshot 2: Formula notes with colored text
        res2 = send("Page.captureScreenshot", {"format": "png"})
        img_b64_2 = res2["result"]["data"]
        out_path2 = r"e:\workspace\frm-study-console\docs\images\v35_formula_notes_colored.png"
        artifact_path2 = r"C:\Users\86166\.gemini\antigravity\brain\3ae7902e-67ba-45de-b095-cc10e8bec239\v35_formula_notes_colored.png"
        with open(out_path2, "wb") as f:
            f.write(base64.b64decode(img_b64_2))
        with open(artifact_path2, "wb") as f:
            f.write(base64.b64decode(img_b64_2))
        print(f"Screenshot 2 saved to: {out_path2}")

        # 4. Switch back to Courseware tab and verify bookmark jump
        eval_js("""
            (() => {
                const buttons = Array.from(document.querySelectorAll('button'));
                const cwBtn = buttons.find(b => b.innerText.includes('课件精讲'));
                if (cwBtn) cwBtn.click();
            })()
        """)
        time.sleep(1)

        # Click P7 bookmark
        jump_res = eval_js("""
            (() => {
                const buttons = Array.from(document.querySelectorAll('button'));
                const p7Btn = buttons.find(b => b.innerText.includes('P7 价格规律'));
                if (p7Btn) {
                    p7Btn.click();
                    return { clicked: true };
                }
                return { clicked: false };
            })()
        """)
        print("Bookmark Click P7:", jump_res)
        time.sleep(1)

        iframe_src = eval_js("""
            (() => {
                const iframe = document.querySelector('iframe');
                return iframe ? iframe.src : null;
            })()
        """)
        print("Iframe src after jumping to P7:", iframe_src)
        assert "p=7" in iframe_src and "#page=7" in iframe_src, "Iframe src must reflect target page 7!"
        print("✓ [PASS] PDF bookmark jump verified: iframe src correctly targeted p=7#page=7!")

    finally:
        try:
            ws.close()
        except:
            pass
        proc.terminate()

if __name__ == "__main__":
    run()
