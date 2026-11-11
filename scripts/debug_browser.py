import json, os, subprocess, time, urllib.request, websocket

user_data = r"c:\temp\chrome_dev_debug"
proc = subprocess.Popen([
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    "--headless=new",
    "--remote-debugging-port=9231",
    "--remote-allow-origins=*",
    f"--user-data-dir={user_data}",
    "--window-size=1600,1050",
    "http://localhost:4173/?mode=read"
])
time.sleep(2)

try:
    targets = json.loads(urllib.request.urlopen("http://localhost:9231/json").read())
    page = next(t for t in targets if t.get("type") == "page")
    ws = websocket.create_connection(page["webSocketDebuggerUrl"], timeout=10)
    
    msg_id = 0
    def send(method, params=None):
        global msg_id
        msg_id += 1
        ws.send(json.dumps({"id": msg_id, "method": method, "params": params or {}}))
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

    print("Initial title:", eval_js("document.title"))
    
    # Click next button 6 times to reach Q7
    for i in range(6):
        eval_js("""
            (() => {
                const buttons = Array.from(document.querySelectorAll('button'));
                const nextBtn = buttons.find(b => b.innerText.includes('下一题'));
                if (nextBtn) nextBtn.click();
            })()
        """)
        time.sleep(0.3)

    print("After 6 clicks:")
    info = eval_js("""
        (() => {
            const h = Array.from(document.querySelectorAll('h1, h2, h3, h4')).map(e => e.innerText);
            return {
                headings: h,
                hasCard2: document.body.innerText.includes('久期+凸度联合二阶近似'),
                hasOptionA: document.body.innerText.includes('• A项错误'),
                hasBrokenAsterisks: document.body.innerText.includes('* * [rose')
            };
        })()
    """)
    print("Info:", json.dumps(info, ensure_ascii=False, indent=2))

finally:
    proc.terminate()
