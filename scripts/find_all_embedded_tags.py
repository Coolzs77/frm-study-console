import re

with open('src/data/quizData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Let's find every occurrence where a $ contains ** inside it
pattern = re.compile(r'(\$[^\$\n]*?\*\*[^\$\n]*?\$|\$\$[^\$\n]*?\*\*[^\$\n]*?\$\$)')
matches = pattern.findall(text)
print(f"Total occurrences of ** inside single-line $: {len(matches)}")
for idx, m in enumerate(matches):
    print(f"{idx+1}. {m}")
