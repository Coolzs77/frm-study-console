import json
import os
import re
import subprocess
import sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
QUIZ_DATA_PATH = os.path.join(ROOT, "src", "data", "quizData.ts")
MATH_TEXT_PATH = os.path.join(ROOT, "src", "components", "common", "MathText.tsx")


def load_questions():
    loader = r"""
    const fs = require('fs');
    const vm = require('vm');
    const txt = fs.readFileSync(process.argv[1], 'utf8');
    const s = txt.indexOf('export const QUESTIONS: Question[] = ') + 'export const QUESTIONS: Question[] = '.length;
    const e = txt.indexOf('export const SLIDE_NOTES');
    const qs = vm.runInNewContext('(' + txt.slice(s, e).trim().replace(/;$/, '') + ')');
    console.log(JSON.stringify(qs));
    """
    res = subprocess.run(
        ["node", "-e", loader, QUIZ_DATA_PATH],
        capture_output=True,
        text=True,
        check=True,
        encoding="utf-8",
    )
    return json.loads(res.stdout)


def strip_blank_parens(s: str) -> str:
    s = re.sub(r"（[\s\u00a0\u2007]*）", "（）", s)
    s = re.sub(r"\([\s\u00a0\u2007]*\)", "()", s)
    return s


def main():
    questions = load_questions()
    by_id = {q["id"]: q for q in questions}
    errors = []

    def fail(qid, msg):
        errors.append(f"[{qid}] {msg}")

    # 1. 全量 56 题题干基础排版规范检测
    for q in questions:
        qid = q["id"]
        stem = q.get("stem", "")
        if not stem.strip():
            fail(qid, "题干不能为空")
            continue

        if "\u2007" in stem or "\u00a0" in stem:
            fail(qid, "题干中残留非标准空白字符 (NBSP \\u00a0 或 Figure Space \\u2007)")

        cleaned = strip_blank_parens(stem)
        if re.search(r"[ \t]{4,}", cleaned):
            fail(qid, "题干中存在 4 个以上连续空格（疑为未结构化的伪空格表格）")

        if "。。" in stem:
            fail(qid, "题干存在重复中文句号 '。。'")

        if re.search(r"[,;][A-Za-z]", stem):
            fail(qid, "英文逗号或分号后缺少空格（词句粘连）")

        stripped = re.sub(r"\$\$[\s\S]*?\$\$", "", stem)
        if stripped.count("$") % 2 != 0:
            fail(qid, "题干存在未闭合的单行 $ 公式定界符")

    # 2. 重点题干可读性与结构化分段/表格校验
    q39 = by_id["q_2_3_4_5"]["stem"]
    for bad in ("followsOutcome", "97.5%Loan", "1.25%Loan", "1.25%Both", "0%If", ")million;", "如下：结果"):
        if bad in q39:
            fail("q_2_3_4_5", f"仍存在文本粘连 '{bad}'")
    for must_line in (
        "| Outcome | Probability |",
        "| :--- |",
        "| 违约结果 | 发生概率 |",
        "\n1. The 99% VaR of each project",
        "\n2. The expected shortfall of each project",
        "\n3. The 99% VaR for the portfolio",
        "\n4. The expected shortfall for the portfolio",
        "\n1. 每个贷款项目的 99% VaR",
        "\n2. 每个贷款项目的预期损失",
        "\n3. 投资组合的 99% VaR",
        "\n4. 投资组合的预期损失",
    ):
        if must_line not in q39:
            fail("q_2_3_4_5", f"缺少清晰表格或逐问换行结构: '{must_line.strip()}'")

    q40 = by_id["q_3_4_1"]["stem"]
    if "\n• " not in q40 or q40.count("\n• ") < 3:
        fail("q_3_4_1", "条件要点未逐条换行排列（需包含 3 条独立换行要点）")

    q20 = by_id["q_2_2_3_3"]["stem"]
    if "\n" not in q20 or "15.1215" not in q20.splitlines()[0] or "8.9066" in q20.splitlines()[0]:
        fail("q_2_2_3_3", "两道 rho 小题仍挤在同一行，未独立分段")

    for qid in ("q_2_2_3_1", "q_2_2_3_2"):
        s = by_id[qid]["stem"]
        if "\n\n" not in s or "）。The" in s:
            fail(qid, "中英文题干未分段隔开（存在 '）。The' 粘连）")

    for qid in ("q_2_1_4_1", "q_2_1_4_2"):
        s = by_id[qid]["stem"]
        if "2位小数）（" in s or "\n" not in s:
            fail(qid, "久期计算问与利率风险比较问未换行分隔")

    for qid in ("q_2_1_4_3", "q_2_1_4_4"):
        s = by_id[qid]["stem"]
        if "）一个基点" in s or "\n一个基点" not in s:
            fail(qid, "基点换算补充说明未换行独立显示")

    q35 = by_id["q_2_3_4_1"]["stem"]
    if "）（标准正态分布" in q35 or "\n（标准正态分布" not in q35:
        fail("q_2_3_4_1", "正态分位数提示语未换行独立显示")

    q52 = by_id["q_6_4_2"]["stem"]
    if "商 业贷款" in q52:
        fail("q_6_4_2", "存在多余空格错字 '商 业贷款'")

    # 3. MathText 组件表格渲染能力检验
    with open(MATH_TEXT_PATH, "r", encoding="utf-8") as f:
        mt = f.read()
    if "<table" not in mt or "parseMarkdownTable" not in mt:
        fail("MathText.tsx", "未实装 Markdown 管道表格解析与 <table 渲染支持")

    if errors:
        print(f"FAIL: 发现 {len(errors)} 处题干格式或渲染支持缺陷：")
        for err in errors:
            print("  ❌", err)
        sys.exit(1)
    else:
        print(f"PASS: 全库 {len(questions)} 道试题题干排版、表格结构化与渲染支持校验全部通过！")


if __name__ == "__main__":
    main()
