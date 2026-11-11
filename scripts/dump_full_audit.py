import json

with open('scripts/questions_audit.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

print(f"Total questions: {len(questions)}")

with open('scripts/full_56_questions_audit.txt', 'w', encoding='utf-8') as out:
    for q in questions:
        out.write(f"============================================================\n")
        out.write(f"Q{q['num']}: {q['id']} | Chapter: {q['chapter']} | Type: {q['type']}\n")
        out.write(f"Stem: {q['stem']}\n")
        if q['options']:
            out.write(f"Options: {q['options']}\n")
        out.write(f"Correct Answer: {q['correctAnswer']}\n")
        out.write(f"Current Analysis:\n{q['analysis']}\n")
        if q.get('analysisHtml'):
            out.write(f"Raw AnalysisHtml:\n{q['analysisHtml']}\n")
        out.write("\n")

print("Dumped all 56 questions to scripts/full_56_questions_audit.txt")
