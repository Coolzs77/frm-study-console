import os, subprocess, time, json, urllib.request, websocket, base64
from PIL import Image

def run():
    srv = subprocess.Popen(['npx', 'vite', 'preview', '--port', '4192', '--strictPort'], cwd=r'e:\workspace\frm-study-console', shell=True)
    time.sleep(3)

    chrome_bin = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
    user_data = r'c:\temp\chrome_all_jumps'
    os.makedirs(user_data, exist_ok=True)

    proc = subprocess.Popen([
        chrome_bin, '--headless=new', '--remote-debugging-port=9238', '--remote-allow-origins=*',
        f'--user-data-dir={user_data}', '--disable-gpu', '--no-first-run', '--window-size=1600,1050',
        'http://localhost:4192/'
    ])
    time.sleep(3)

    try:
        targets = json.loads(urllib.request.urlopen('http://localhost:9238/json').read())
        page = next(t for t in targets if t.get('type') == 'page')
        ws = websocket.create_connection(page['webSocketDebuggerUrl'], timeout=10)

        global_id = [0]
        def send(method, params=None):
            global_id[0] += 1
            mid = global_id[0]
            ws.send(json.dumps({'id': mid, 'method': method, 'params': params or {}}))
            while True:
                resp = json.loads(ws.recv())
                if resp.get('id') == mid:
                    return resp.get('result', {})

        send('Runtime.enable')
        time.sleep(2)

        # 1. Test clicking bookmark buttons
        jump_tests = ['P4', 'P7', 'P11', 'P14']
        jump_results = {}
        for j in jump_tests:
            res = send('Runtime.evaluate', {
                'expression': f'''(() => {{
                    const btns = Array.from(document.querySelectorAll('button')).filter(b => b.textContent.includes('{j}'));
                    if (btns.length > 0) btns[0].click();
                    return btns.length;
                }})()''',
                'returnByValue': True
            })
            time.sleep(1.2)
            src_info = send('Runtime.evaluate', {
                'expression': '''(() => {
                    const iframe = document.querySelector('iframe');
                    return iframe ? iframe.src : null;
                })()''',
                'returnByValue': True
            })
            url = src_info.get('result', {}).get('value', '')
            jump_results[j] = url
            print(f'Jump to {j}: {url}')
            assert f'p={j[1:]}' in url and f'page={j[1:]}' in url, f'Failed jump for {j}: {url}'

        print('All 4 bookmark jumps passed assertion!')

        # 2. Switch to Chapter 2.2.3 to check Greek concept cards
        send('Runtime.evaluate', {
            'expression': '''(() => {
                const navBtns = Array.from(document.querySelectorAll('button'));
                const chBtn = navBtns.find(b => b.textContent.includes('2.2 衍生品') || b.textContent.includes('2.2.3'));
                if (chBtn) chBtn.click();
            })()'''
        })
        time.sleep(2)

        # Scroll down to concept cards in Chapter 2.2.3
        send('Runtime.evaluate', {
            'expression': '''(() => {
                const aside = document.querySelector('aside');
                if (aside) aside.scrollTop = 900;
            })()'''
        })
        time.sleep(1)

        # Check for any raw asterisks in body text
        text_check = send('Runtime.evaluate', {
            'expression': '''(() => {
                const aside = document.querySelector('aside');
                const text = aside ? aside.innerText : '';
                return {
                    hasAsterisks: text.includes('**'),
                    textSnippet: text.slice(0, 300)
                };
            })()''',
            'returnByValue': True
        })
        print('Greek chapter text check:', json.dumps(text_check, indent=2, ensure_ascii=False))
        assert not text_check['result']['value']['hasAsterisks'], 'Found unparsed raw asterisks ** in aside!'

        # Capture screenshot of Chapter 2.2.3 Greek concepts
        shot = send('Page.captureScreenshot')
        shot_path = r'e:\workspace\frm-study-console\docs\images\v34_chapter2_greek_concepts.png'
        with open(shot_path, 'wb') as f:
            f.write(base64.b64decode(shot['data']))

        im = Image.open(shot_path)
        crop_cards = im.crop((1100, 100, 1580, 950))
        crop_cards.save(r'e:\workspace\frm-study-console\docs\images\v34_chapter2_greek_crop.png')
        print('All tests and screenshots successfully captured!')

    finally:
        proc.terminate()
        srv.terminate()

if __name__ == '__main__':
    run()
