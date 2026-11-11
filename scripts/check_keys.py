import re

with open(r'e:\workspace\frm-study-console\src\data\quizData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

m = re.search(r'export const SLIDE_NOTES[^{]+\{([\s\S]+?)\n\};', text)
if m:
    for line in m.group(1).split('\n'):
        line_s = line.strip()
        if line_s.endswith(':{') or line_s.endswith('{'):
            k = re.search(r'["\']([^"\']+)["\']\s*:', line_s)
            if k:
                print('Found key:', k.group(1))
