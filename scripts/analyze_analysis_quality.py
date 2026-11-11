import json, re

with open('scripts/questions_audit.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

issues = []

for q in questions:
    q_id = q['id']
    num = q['num']
    stem = q['stem']
    q_type = q['type']
    ans = q['analysis']
    correct = q['correctAnswer']
    options = q['options']

    # 1. Check placeholder
    if '请查阅右侧课件' in ans or '本题出自' in ans:
        issues.append((num, q_id, q_type, 'PLACEHOLDER', 'Contains template placeholder boilerplate'))

    # 2. Check judgment mismatch
    if q_type == '判断题':
        if '判断：**错误**' in ans and correct == '对':
            issues.append((num, q_id, q_type, 'WRONG_JUDGMENT', f'Marked as 错误 in analysis but correct is 对'))
        elif '判断：**正确**' in ans and correct == '错':
            issues.append((num, q_id, q_type, 'WRONG_JUDGMENT', f'Marked as 正确 in analysis but correct is 错'))

    # 3. Check choice option mismatch
    if q_type in ['单选题', '多选题']:
        # If options are present, check if analysis mentions option labels or content
        # For instance, Q7, Q8, Q21, Q22, Q23, Q24
        if '差价组合' in ans and not any('差价' in o or '差价' in stem for o in options):
            issues.append((num, q_id, q_type, 'HALLUCINATED_TOPIC', 'Talks about spread/差价 when question is about something else'))
        if '普通无含权债券' in ans and '二阶偏导数' in stem and not any('普通无含权' in o for o in options):
            issues.append((num, q_id, q_type, 'HALLUCINATED_TOPIC', 'Talks about non-callable bond when question is about derivatives of bond price'))

    # 4. Check for broken math asterisks
    if re.search(r'\$[^\$]*?\*\*[^\$]*?\$', ans):
        issues.append((num, q_id, q_type, 'BROKEN_MATH_ASTERISK', 'Contains ** inside $ math delimiter'))

print(f"Total flagged questions: {len(issues)}")
for num, q_id, q_type, issue_type, desc in issues:
    print(f"Q{num} ({q_id}, {q_type}): [{issue_type}] {desc}")
