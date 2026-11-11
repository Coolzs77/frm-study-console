import subprocess
import time
import json
import urllib.request
import os
import websocket

brain_dir = r"C:\Users\86166\.gemini\antigravity\brain\3ae7902e-67ba-45de-b095-cc10e8bec239"
docs_dir = r"E:\workspace\frm-study-console\docs\images"
os.makedirs(docs_dir, exist_ok=True)

chrome = subprocess.Popen([
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    "--headless=new",
    "--remote-debugging-port=9222",
    "--remote-allow-origins=*",
    "--window-size=1600,1050",
    "--disable-gpu",
    "--no-sandbox",
    f"https://coolzs77.github.io/frm-study-console/?v={int(time.time())}"
])
time.sleep(4)

try:
    tabs = json.loads(urllib.request.urlopen("http://localhost:9222/json").read())
    page_tabs = [t for t in tabs if t.get("type") == "page"]
    ws_url = page_tabs[0]["webSocketDebuggerUrl"]
    ws = websocket.create_connection(ws_url)
    ws.send(json.dumps({"id": 1, "method": "Page.enable"}))
    ws.send(json.dumps({"id": 2, "method": "Runtime.enable"}))

    def capture_screenshot(filename):
        ws.send(json.dumps({"id": 10, "method": "Page.captureScreenshot", "params": {"format": "png"}}))
        while True:
            msg = json.loads(ws.recv())
            if msg.get("id") == 10:
                import base64
                data = base64.b64decode(msg["result"]["data"])
                brain_path = os.path.join(brain_dir, filename)
                docs_path = os.path.join(docs_dir, filename)
                with open(brain_path, "wb") as f:
                    f.write(data)
                with open(docs_path, "wb") as f:
                    f.write(data)
                print(f"✓ Saved {filename} ({len(data)} bytes)")
                break

    # 1. Capture Desktop with Embedded Slide Reader
    time.sleep(2)
    capture_screenshot("screenshot_v31_desktop_slides.png")

    # 2. Click Formula Tab & Capture
    ws.send(json.dumps({
        "id": 20,
        "method": "Runtime.evaluate",
        "params": {"expression": "Array.from(document.querySelectorAll('button')).find(b => b.textContent.includes('公式手册')).click()"}
    }))
    time.sleep(1.5)
    capture_screenshot("screenshot_v31_formula_manual.png")

    # 3. Switch to Practice mode, answer, and capture redo button & structured analysis
    ws.send(json.dumps({
        "id": 30,
        "method": "Runtime.evaluate",
        "params": {"expression": """
            (() => {
                // Click practice mode
                const mBtns = Array.from(document.querySelectorAll('button'));
                const pBtn = mBtns.find(b => b.textContent.includes('交互刷题'));
                if (pBtn) pBtn.click();
            })()
        """}
    }))
    time.sleep(1.5)
    capture_screenshot("screenshot_v31_interactive_practice.png")

finally:
    chrome.terminate()
