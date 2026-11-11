import re

with open('src/data/quizData.ts', 'r', encoding='utf-8') as f:
    text = f.read()

# Match every string literal
pattern = re.compile(r'"((?:[^"\\]|\\.)*)"')
strings = pattern.findall(text)
print(f"Total string literals: {len(strings)}")

odd_dollar = []
for idx, s in enumerate(strings):
    # Count $
    num_dollar = s.count('$')
    if num_dollar % 2 != 0:
        odd_dollar.append((idx, num_dollar, s))

print(f"Strings with ODD number of $ (unbalanced math delimiter): {len(odd_dollar)}")
for idx, cnt, s in odd_dollar:
    print(f"[{cnt} $] {repr(s[:120])}")
