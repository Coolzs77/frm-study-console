import subprocess
import os
import time

chrome_path = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
live_url = 'https://coolzs77.github.io/frm-study-console/'
out_brain_dir = r'C:\Users\86166\.gemini\antigravity\brain\3ae7902e-67ba-45de-b095-cc10e8bec239'
docs_images_dir = r'e:\workspace\frm-study-console\docs\images'
os.makedirs(docs_images_dir, exist_ok=True)

targets = [
    {
        'name': 'screenshot_v3_desktop_overview.png',
        'width': 1560,
        'height': 980,
        'url': f'{live_url}?t={int(time.time())}'
    },
    {
        'name': 'screenshot_v3_darkmode.png',
        'width': 1560,
        'height': 980,
        'url': f'{live_url}?theme=dark&t={int(time.time())}'
    },
    {
        'name': 'screenshot_v3_mobile.png',
        'width': 390,
        'height': 844,
        'url': f'{live_url}?t={int(time.time())}'
    }
]

for t in targets:
    out_brain = os.path.join(out_brain_dir, t['name'])
    out_docs = os.path.join(docs_images_dir, t['name'])
    cmd = [
        chrome_path,
        '--headless=new',
        '--disable-gpu',
        '--no-sandbox',
        f"--window-size={t['width']},{t['height']}",
        '--virtual-time-budget=7000',
        f"--screenshot={out_brain}",
        t['url']
    ]
    print(f"Capturing {t['name']}...")
    res = subprocess.run(cmd, capture_output=True, text=True)
    if os.path.exists(out_brain):
        with open(out_brain, 'rb') as f_in, open(out_docs, 'wb') as f_out:
            f_out.write(f_in.read())
        print(f"✓ Saved {t['name']}, size: {os.path.getsize(out_brain)} bytes")
    else:
        print(f"❌ Failed to generate {out_brain}: {res.stderr}")
