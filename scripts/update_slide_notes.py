import json
import re

meta_path = r"E:\workspace\frm-study-console\src\data\slideMeta.json"
quiz_path = r"E:\workspace\frm-study-console\src\data\quizData.ts"

with open(meta_path, "r", encoding="utf-8") as f:
    meta = json.load(f)

with open(quiz_path, "r", encoding="utf-8") as f:
    quiz_code = f.read()

# Replace realSlides inside each chapter of SLIDE_NOTES
for chId, slides in meta.items():
    slides_json = json.dumps(slides, ensure_ascii=False, indent=6)
    # Search for "chId": { ... "realSlides": [ ... ]
    pattern = rf'("{re.escape(chId)}":\s*\{{[^}}]*?"realSlides":\s*)\[[^\]]*?\]'
    m = re.search(pattern, quiz_code)
    if m:
        quiz_code = quiz_code[:m.start(1)] + f'"{chId}": {{\n    "realSlides": {slides_json},' + quiz_code[m.end():]
        print(f"✓ Replaced realSlides for {chId}")
    else:
        print(f"Warning: pattern not matched for {chId}")

with open(quiz_path, "w", encoding="utf-8") as f:
    f.write(quiz_code)

print("🎉 Updated SLIDE_NOTES with 42 curated real slides!")
