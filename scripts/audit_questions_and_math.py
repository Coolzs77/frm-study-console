import re, json, os

def run():
    with open('src/data/quizData.ts', 'r', encoding='utf-8') as f:
        content = f.read()

    print("=== 1. Checking broken ** inside $ in quizData.ts ===")
    pattern_inside_math = re.compile(r'\$[^\$]*?\*\*[^\$]*?\$')
    matches = pattern_inside_math.findall(content)
    print(f"Found {len(matches)} occurrences of ** inside $:")
    for m in matches:
        print("  ->", repr(m))

    print("\n=== 2. Checking broken [color:...] or ** tags in quizData.ts ===")
    # Look for **[color:... where closing ** is missing or misformatted
    color_tags = re.findall(r'\*\*\[[a-zA-Z]+:[^\*]+?\*\*', content)
    print(f"Total valid **[color:...]** tags found: {len(color_tags)}")

    # Check for raw [color:... without **
    raw_color = re.findall(r'(?<!\*)\*?\[[a-zA-Z]+:[^\]]+\]\*?(?!\*)', content)
    print(f"Suspicious raw [color:...] tags: {len(raw_color)}")
    for r in raw_color[:10]:
        print("  raw ->", repr(r))

    print("\n=== 3. Extracting all 56 questions for analysis audit ===")
    # Let's extract QUESTIONS JSON array from content
    q_start = content.find('export const QUESTIONS: Question[] = [')
    s_end = content.find('export const SLIDE_NOTES:')
    q_str = content[q_start:s_end].strip()
    
    # We can parse the questions using a regex or simple evaluation
    # Let's extract question blocks
    q_blocks = re.findall(r'\{\s*"id":\s*"(q_[^"]+)"[\s\S]*?\n  \},', content)
    print(f"Found {len(q_blocks)} question IDs.")

    # Save details of each question into a readable text file for auditing
    questions_data = []
    # Let's use node to safely output QUESTIONS as JSON
    os.system('node -e "const { QUESTIONS } = require(\'./dist/assets/index.js\'); fs.writeFileSync(\'scripts/questions_dump.json\', JSON.stringify(QUESTIONS, null, 2));" 2>nul || node -e "import(\'./src/data/quizData.ts\')"')

if __name__ == '__main__':
    run()
