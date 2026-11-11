import json

with open('scripts/questions_audit.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

print(f"Loaded {len(questions)} questions.\n")

choice_questions = [q for q in questions if q['type'] in ['单选题', '多选题', '判断题']]
print(f"Total choice/judge questions: {len(choice_questions)}\n")

for q in choice_questions:
    print(f"=== Q{q['num']}: {q['id']} ({q['type']} - {q['chapter']}) ===")
    print(f"Stem: {q['stem'][:120]}")
    print(f"Options: {q['options']}")
    print(f"Correct: {q['correctAnswer']}")
    print(f"Analysis: {q['analysis'][:300]}")
    # print raw analysisHtml if present
    if q.get('analysisHtml'):
        clean_html = q['analysisHtml'].replace('\n', ' ')
        print(f"AnalysisHtml snippet: {clean_html[:200]}")
    print("-" * 60)
