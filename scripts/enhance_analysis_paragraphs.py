import re

quiz_path = r"E:\workspace\frm-study-console\src\data\quizData.ts"
with open(quiz_path, "r", encoding="utf-8") as f:
    code = f.read()

# Let's inspect each question's analysis and improve paragraph breaks
# Replace patterns like:
# "【考点解析】：\n..." or single continuous sentences with \n\n breaks
def beautify_analysis(match):
    prefix = match.group(1) # "analysis": "
    content = match.group(2)
    suffix = match.group(3) # ",

    # Unescape escaped newlines \n
    # Standardize section headers:
    # 1. Ensure \n\n before bold subheadings like **解题步骤** / **计算过程** / **核心结论** / **公式依据** / **结论** / **原因**
    s = content
    # Replace single \n with \n\n if followed by 【 or **
    s = re.sub(r'([^\n])\n(【[^\n]+?】|\*\*[^\n]+?\*\*[：:])', r'\1\n\n\2', s)
    s = re.sub(r'([。；;])\s*(【[^\n]+?】|\*\*[^\n]+?\*\*[：:])', r'\1\n\n\2', s)
    s = re.sub(r'([。；;])\s*(步骤\s*\d+[：:]|第\s*\d+\s*步[：:])', r'\1\n\n\2', s)
    s = re.sub(r'([。；;])\s*(公式依据[：:]|解题思路[：:]|计算过程[：:]|结论归纳[：:]|避坑要点[：:])', r'\1\n\n**\2**\n', s)

    # Avoid 3 or more consecutive newlines
    s = re.sub(r'\n{3,}', r'\n\n', s)

    return f'{prefix}{s}{suffix}'

new_code = re.sub(r'("analysis":\s*")(.*?)("(?=,\s*"analysisHtml"))', beautify_analysis, code, flags=re.DOTALL)

with open(quiz_path, "w", encoding="utf-8") as f:
    f.write(new_code)

print("🎉 Successfully enhanced all analysis paragraphs with clean double newlines and structured subheadings!")
