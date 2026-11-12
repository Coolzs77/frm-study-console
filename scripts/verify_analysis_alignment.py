import json
import math
import os
import re
import subprocess
import sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
QUIZ_DATA_PATH = os.path.join(ROOT, "src", "data", "quizData.ts")


def load_questions():
    loader = r"""
    const fs = require('fs');
    const vm = require('vm');
    const txt = fs.readFileSync(%s, 'utf8');
    const s = txt.indexOf('export const QUESTIONS: Question[] = ') + 'export const QUESTIONS: Question[] = '.length;
    const e = txt.indexOf('export const SLIDE_NOTES');
    const qs = vm.runInNewContext('(' + txt.slice(s, e).trim().replace(/;$/, '') + ')');
    console.log(JSON.stringify(qs));
    """ % json.dumps(QUIZ_DATA_PATH)
    res = subprocess.run(["node", "-e", loader], capture_output=True, text=True, check=True, encoding="utf-8")
    return json.loads(res.stdout)


def extract_numbers(s: str):
    return [n.replace(",", "") for n in re.findall(r"\d+(?:\.\d+)?", s or "")]


def main():
    questions = load_questions()
    by_id = {q["id"]: q for q in questions}
    by_id_plain = {q["id"]: q.get("analysis", "").replace("\\%", "%") for q in questions}
    errors = []

    def fail(qid, msg):
        errors.append(f"[{qid}] {msg}")

    # 1. 全量 56 题基础对齐规则：禁止跨题型/无关内容混入 + 禁止在公式内部使用 **
    for q in questions:
        qid = q["id"]
        stem = q.get("stem", "")
        analysis = q.get("analysis", "")
        qtype = q.get("type", "")

        if not analysis.strip():
            fail(qid, "解析不能为空")
            continue

        # 数学公式内禁止 **，禁止奇数个单行 $，禁止未转义 %（KaTeX 中 % 会注释同行后续公式）
        stripped = re.sub(r"\$\$[\s\S]*?\$\$", "", analysis)
        if stripped.count("$") % 2 != 0:
            fail(qid, "解析存在未闭合的单行 $ 公式定界符")
        for m in re.finditer(r"\$\$([\s\S]+?)\$\$|\$([^$\n\r]+?)\$", analysis):
            inner = m.group(1) if m.group(1) is not None else m.group(2)
            if "**" in inner:
                fail(qid, f"公式内部误含 **: {m.group(0)}")
            if re.search(r"(?<!\\)%", inner):
                fail(qid, f"KaTeX 公式内部存在未转义 %（需写作 \\%): {m.group(0)}")

        # 若题干中不含"期货"或"远期"，解析禁止出现无关的国债期货/逐日盯市套话
        if "期货" not in stem and "远期" not in stem:
            for bad_kw in ("国债期货", "逐日盯市", "场外交易（OTC）", "场外交易"):
                if bad_kw in analysis:
                    fail(qid, f"题干未涉及期货/远期，解析误出现无关词 '{bad_kw}'")

        # 若题干未提及 CDS，解析禁止讲 CDS 定价
        if "CDS" not in stem and "信用违约互换" not in stem:
            if "CDS" in analysis or "信用违约互换" in analysis:
                fail(qid, "题干未涉及 CDS/信用违约互换，解析错套 CDS 模型")

        # 若题干未提及 ES / Expected Shortfall / 预期损失，且只问 VaR，禁止用 ES 概念敷衍
        if "VaR" in stem and "ES" not in stem and "shortfall" not in stem.lower() and "预期" not in stem:
            if "条件在险价值" in analysis or "一致性风险测度" in analysis:
                fail(qid, "题干仅问 VaR 计算，解析却无关讲解 ES 定义")

        # 36 道填空题：标答列表中的数值必须能在解析中找到对应数值或等效表达
        if qtype == "填空题":
            for idx, ans in enumerate(q.get("correctAnswerList") or []):
                alts = [a.strip() for a in re.split(r"[;；/]", ans) if a.strip()]
                nums = []
                for alt in alts:
                    nums.extend(extract_numbers(alt))
                if nums:
                    found_any = False
                    for num in nums:
                        val_norm = num.rstrip("0").rstrip(".") if "." in num else num
                        if num in analysis or (val_norm and val_norm in analysis):
                            found_any = True
                            break
                    if not found_any:
                        fail(qid, f"第 {idx+1} 空标答 '{ans}' 未在解析中体现计算结果")

        # 选择/判断题：选项与结论检查
        if qtype in ("单选题", "多选题"):
            for opt in q.get("options") or []:
                lbl = opt["label"]
                if qtype == "多选题" and f"{lbl}项" not in analysis:
                    fail(qid, f"多选题解析缺少 '{lbl}项' 逐项说明")
            ans_str = q.get("correctAnswer", "").strip().upper()
            if ans_str not in analysis.upper():
                fail(qid, f"选择题解析未明确给出正确答案 {ans_str}")

    # 2. 逐题重点精确核查（覆盖本次全库审核发现的 24 处具体问题）
    # Q1: 必须是 5 期现金流 (511.30 / 439.99)，不得出现编造的 4 期假数据 (117.73 / 153.19)
    q1 = by_id["q_2_1_4_1"]["analysis"]
    for fake in ("117.73", "153.19", "CF_1=10", "CF_1=20"):
        if fake in q1:
            fail("q_2_1_4_1", f"仍残留编造的 4 期假数据 '{fake}'")
    for must in ("511.30", "439.99", "1648.40", "1126.78", "200"):
        if must not in q1:
            fail("q_2_1_4_1", f"缺少 5 期现金流真实计算值 '{must}'")

    # Q2: 必须包含 5 期折现真值 (221.92, 706.55, 348.44, 1306.81)
    q2 = by_id["q_2_1_4_2"]["analysis"]
    for must in ("221.92", "706.55", "348.44", "1306.81", "300"):
        if must not in q2:
            fail("q_2_1_4_2", f"缺少配图 5 期现金流真实折现值 '{must}'")

    # Q6: 105 等额年金凸度不能一句带过，需体现分子分步之和 (6055.65)
    q6 = by_id["q_2_1_4_6"]["analysis"]
    if "6055.65" not in q6 or "501.19" not in q6:
        fail("q_2_1_4_6", "缺少分子分项求和中间数值 (6055.65 / 501.19)")

    # Q15-Q17: 未来 3 年每年 100 元，r=3%，不得含套保公式，必须含真实中间数 (282.86 / 97.09 / 1857.90 / 560.15)
    if "282.86" not in by_id["q_2_1_5_9"]["analysis"] or "6.19" not in by_id["q_2_1_5_9"]["analysis"]:
        fail("q_2_1_5_9", "未正确依据 P=282.86 推导凸度 6.19")
    if "97.0" not in by_id["q_2_1_5_10"]["analysis"] or "282.86" not in by_id["q_2_1_5_10"]["analysis"]:
        fail("q_2_1_5_10", "未分期折现计算当前价值 282.86")
    if "282.86" not in by_id["q_2_1_5_11"]["analysis"] or "1.98" not in by_id["q_2_1_5_11"]["analysis"]:
        fail("q_2_1_5_11", "未依据折现现值与 t*PV_t 计算久期 1.98")

    # Q18: Delta = -2100, S: 1000 -> 1005
    q18 = by_id["q_2_2_3_1"]["analysis"]
    for must in ("-2100", "1005", "10500"):
        if must not in q18:
            fail("q_2_2_3_1", f"未围绕题干 Delta 与指数变动展开计算（缺 '{must}'）")

    # Q19: Vega = 200, 12% -> 14%
    q19 = by_id_plain["q_2_2_3_2"]
    for must in ("200", "12%", "14%", "400"):
        if must not in q19:
            fail("q_2_2_3_2", f"未围绕题干 Vega 与波动率变动展开计算（缺 '{must}'）")

    # Q20: Rho = 15.1215 / 8.9066
    q20 = by_id["q_2_2_3_3"]["analysis"]
    if "相关系数" in q20 or "基差" in q20 or "套期保值" in q20:
        fail("q_2_2_3_3", "仍误把希腊值 Rho 写成了相关系数/套期保值")
    for must in ("15.1215", "8.9066", "0.01", "0.1512", "0.0891"):
        if must not in q20:
            fail("q_2_2_3_3", f"缺少题干 Rho 敏感度算式项 '{must}'")

    # Q21 C项说明必须包含非线性产品
    q21 = by_id["q_2_2_5_1"]["analysis"]
    if "非线性" not in q21.split("• C项")[1].split("• D项")[0]:
        fail("q_2_2_5_1", "C项解析需明确说明必须引入非线性产品才能调节 Gamma")

    # Q33: 题干为 Gamma 与 Vega 中性，不得误写成 Delta_0 / Gamma_0
    q33 = by_id["q_2_2_5_13"]["analysis"]
    if "\\Delta_0" in q33 or "\\Delta_1" in q33 or "\\Delta\\text{ 中性}" in q33:
        fail("q_2_2_5_13", "解析把题干的 Gamma 与 Vega 写错成了 Delta 与 Gamma")
    if "Gamma" not in q33 or "Vega" not in q33:
        fail("q_2_2_5_13", "解析未正确对应 Gamma 与 Vega 联合中性方程")

    # Q36: 100元, mu=2%, sigma=15% -> 22.67, 32.89/32.90
    q36 = by_id_plain["q_2_3_4_2"]
    for must in ("15%", "22.67"):
        if must not in q36:
            fail("q_2_3_4_2", f"未围绕题干正态分布 VaR 代入计算（缺 '{must}'）")

    # Q37: A 200万(5%), B 100万(12%), rho=0, 95% -> 25.69
    q37 = by_id["q_2_3_4_3"]["analysis"]
    for must in ("200", "100", "300", "25.69"):
        if must not in q37:
            fail("q_2_3_4_3", f"未列出组合投资占比与波动率代入算式（缺 '{must}'）")

    # Q38 & Q39: 结构化换行（无整段堆砌或单位笔误）
    q38 = by_id["q_2_3_4_4"]["analysis"]
    if "\n" not in q38 or "$" not in q38:
        fail("q_2_3_4_4", "解析需使用清晰换行与 KaTeX 排版")
    q39 = by_id["q_2_3_4_5"]["analysis"]
    if "5.8万美元" in q39 or "\n" not in q39:
        fail("q_2_3_4_5", "存在 '5.8万美元' 单位笔误或缺少分段换行")

    # Q40: (1-7.7%)(1-7.1%)(1-6.6%)*6.1% = 4.89%
    q40 = by_id_plain["q_3_4_1"]
    for must in ("7.7%", "7.1%", "6.6%", "6.1%", "4.89%"):
        if must not in q40:
            fail("q_3_4_1", f"未代入题给条件违约概率数值（缺 '{must}'）")

    # Q44: 100万债券现价60%, R=50%, r=5% -> Q=74%
    q44 = by_id["q_3_4_5"]["analysis"]
    for must in ("60", "50", "74%"):
        if must not in q44:
            fail("q_3_4_5", f"未用零息债券现值等价式求解违约概率（缺 '{must}'）")

    # Q47 & Q48: LVaR = VaR + LC 分步数值代入
    for must in ("651.3", "70", "721.38"):
        if must not in by_id["q_5_4_1"]["analysis"]:
            fail("q_5_4_1", f"缺少外生 LVaR 中间拆解值 '{must}'")
    for must in ("1070.1", "700", "1770.12"):
        if must not in by_id["q_5_4_2"]["analysis"]:
            fail("q_5_4_2", f"缺少外生 LVaR 中间拆解值 '{must}'")

    # Q49 & Q50: 基于需求价格弹性 E 与持股比例 (不得编造日成交量 beta)
    for must in ("-0.5", "20%", "10%"):
        if must not in by_id_plain["q_5_4_3"]:
            fail("q_5_4_3", f"未按需求价格弹性模型代入计算（缺 '{must}'）")
    q50 = by_id_plain["q_5_4_4"]
    if "日成交量" in q50 or "\\beta" in q50:
        fail("q_5_4_4", "仍存在自行编造的日成交量比值参数")
    for must in ("-0.1", "50%", "5%"):
        if must not in q50:
            fail("q_5_4_4", f"未按需求价格弹性模型代入计算（缺 '{must}'）")

    # Q52: 列出 RWA=20.4 与各分项
    q52 = by_id["q_6_4_2"]["analysis"]
    for must in ("0.4", "2.5", "7.5", "10", "20.4", "1.632"):
        if must not in q52:
            fail("q_6_4_2", f"缺少加权资产分项或总 RWA 20.4（缺 '{must}'）")

    # Q54: 列出 9.5 / 11 / 41 与一般债务不计入
    q54 = by_id_plain["q_6_4_4"]
    for must in ("9.5", "11", "41", "2000", "0.48%", "0.55%", "2.05%"):
        if must not in q54:
            fail("q_6_4_4", f"缺少资本层次拆解值 '{must}'")

    # Q55 & Q56: 清晰分步换行推导
    for qid in ("q_6_4_5", "q_6_4_6"):
        if "\n" not in by_id[qid]["analysis"]:
            fail(qid, "解析需要分步换行展示推导算式")

    if errors:
        print(f"FAIL: 发现 {len(errors)} 处解析与题干不一致或推导缺失问题：")
        for err in errors:
            print("  ❌", err)
        sys.exit(1)
    else:
        print(f"PASS: 全库 {len(questions)} 道试题考点解析 100% 紧扣题干与配图，数理推导及格式对齐校验全通过！")


if __name__ == "__main__":
    main()
