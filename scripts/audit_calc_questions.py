import json

with open('scripts/questions_audit.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

with open('scripts/calc_questions_audit.txt', 'w', encoding='utf-8') as out:
    for q in questions:
        if q['num'] in [33, 34, 41, 42, 45, 50] or '请查阅右侧课件' in q['analysis'] or len(q['analysis']) < 80:
            out.write(f"=== Q{q['num']}: {q['id']} ({q['type']} - {q['chapter']}) ===\n")
            out.write(f"Stem: {q['stem']}\n")
            out.write(f"Correct: {q['correctAnswer']}\n")
            out.write(f"AnalysisHtml: {q.get('analysisHtml', '')}\n")
            out.write(f"Analysis: {q['analysis']}\n\n")

print("Wrote calc_questions_audit.txt")
