import os, subprocess, time, json, urllib.request, websocket, base64

def run():
    srv = subprocess.Popen(['npx', 'vite', 'preview', '--port', '4190', '--strictPort'], cwd=r'e:\workspace\frm-study-console', shell=True)
    time.sleep(3)

    chrome_bin = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
    user_data = r'c:\temp\chrome_r7_test'
    os.makedirs(user_data, exist_ok=True)

    proc = subprocess.Popen([
        chrome_bin, '--headless=new', '--remote-debugging-port=9235', '--remote-allow-origins=*',
        f'--user-data-dir={user_data}', '--disable-gpu', '--no-first-run', '--window-size=1600,1050',
        'http://localhost:4190/'
    ])
    time.sleep(3)

    try:
        targets = json.loads(urllib.request.urlopen('http://localhost:9235/json').read())
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

        # 1. Click P11 bookmark
        res1 = send('Runtime.evaluate', {
            'expression': '''(() => {
                const btns = Array.from(document.querySelectorAll('button')).filter(b => b.textContent.includes('P11'));
                if (btns.length > 0) btns[0].click();
                const iframe = document.querySelector('iframe');
                return { clicked: btns.length, src: iframe ? iframe.src : null };
            })()''',
            'returnByValue': True
        })
        print('Clicked P11:', json.dumps(res1, indent=2, ensure_ascii=False))
        time.sleep(2.5)

        # 2. Check concept cards rendering and asterisks
        res2 = send('Runtime.evaluate', {
            'expression': '''(() => {
                const text = document.body.innerText;
                const hasRawAsterisks = text.includes('**');
                const conceptCards = document.querySelectorAll('.clay-card-shadow h4').length;
                const definitionBoxes = Array.from(document.querySelectorAll('*')).filter(el => el.textContent && el.textContent.includes('【核心定义】')).length;
                const mathBoxes = Array.from(document.querySelectorAll('*')).filter(el => el.textContent && el.textContent.includes('【数理特征与计算关键】')).length;
                const trapBoxes = Array.from(document.querySelectorAll('*')).filter(el => el.textContent && el.textContent.includes('【考点运用与避坑指南】')).length;
                return {
                    hasRawAsterisks,
                    conceptCards,
                    definitionBoxes,
                    mathBoxes,
                    trapBoxes
                };
            })()''',
            'returnByValue': True
        })
        print('Concept Cards Check:', json.dumps(res2, indent=2, ensure_ascii=False))

        # Capture full screenshot
        shot = send('Page.captureScreenshot')
        shot_path = r'e:\workspace\frm-study-console\docs\images\v34_semantic_concepts_and_pdf_jump.png'
        with open(shot_path, 'wb') as f:
            f.write(base64.b64decode(shot['data']))
        print(f'Saved screenshot to {shot_path}')

        # Crop sidebar to examine both PDF jump and concept cards
        from PIL import Image
        im = Image.open(shot_path)
        # crop top right (PDF viewer with P11 jump)
        crop_pdf = im.crop((1100, 150, 1580, 800))
        crop_pdf.save(r'e:\workspace\frm-study-console\docs\images\v34_pdf_jump_p11_crop.png')
        
        # Now scroll down to concept cards and take screenshot
        send('Runtime.evaluate', {
            'expression': '''(() => {
                const aside = document.querySelector('aside');
                if (aside) aside.scrollTop = 700;
            })()'''
        })
        time.sleep(1)

        shot2 = send('Page.captureScreenshot')
        shot2_path = r'e:\workspace\frm-study-console\docs\images\v34_concept_cards_colored.png'
        with open(shot2_path, 'wb') as f:
            f.write(base64.b64decode(shot2['data']))
        print(f'Saved scrolled concept cards screenshot to {shot2_path}')

        im2 = Image.open(shot2_path)
        crop_cards = im2.crop((1100, 200, 1580, 950))
        crop_cards.save(r'e:\workspace\frm-study-console\docs\images\v34_concept_cards_crop.png')
        print('All screenshots saved!')

    finally:
        proc.terminate()
        srv.terminate()

if __name__ == '__main__':
    run()
