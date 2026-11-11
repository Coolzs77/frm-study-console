import json

with open('scripts/questions_audit.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

with open('scripts/choice_html_audit.txt', 'w', encoding='utf-8') as out:
    for q in questions:
        if q['num'] in range(7, 15) or q['num'] in range(21, 33):
            out.write(f"=== Q{q['num']}: {q['id']} ({q['type']}) ===\n")
            out.write(f"Stem: {q['stem']}\n")
            out.write(f"Options: {q['options']}\n")
            out.write(f"Correct: {q['correctAnswer']}\n")
            out.write(f"Raw AnalysisHtml:\n{q.get('analysisHtml', '')}\n")
            out.write(f"Current Analysis:\n{q['analysis']}\n\n")

print("Wrote choice_html_audit.txt")
