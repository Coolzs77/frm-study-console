import re, json

with open(r'e:\workspace\frm-study-console\src\data\quizData.ts', encoding='utf-8') as f:
    content = f.read()

# Let's inspect all formula names and descriptions
formula_block = re.search(r'export const FORMULA_DICT: FormulaItem\[\] = (\[[\s\S]*?\]);', content)
if formula_block:
    # Use json-like parse
    raw = formula_block.group(1)
    items = re.findall(r'\{\s*"category":\s*"([^"]*)",\s*"name":\s*"([^"]*)",\s*"tex":\s*"([^"]*)",\s*"desc":\s*"([^"]*)"\s*\}', raw)
    print(f'Total formulas: {len(items)}')
    for idx, (cat, name, tex, desc) in enumerate(items):
        print(f'{idx+1}. [{cat}] {name}')
        print(f'   Desc: {desc}')
