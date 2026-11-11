import os
import pymupdf

pdf_dir = r"E:\Downloads\文档类\第二学位\金融风险管理\课件"
output_dir = r"E:\workspace\frm-study-console\public\slides"
os.makedirs(output_dir, exist_ok=True)

# Curated core knowledge pages for each chapter (strictly excluding intro fluff, casual chats, filler)
CURATED_PAGES = {
    "2.1.4": {
        "pdf": "2.1 利率风险管理（一）.pdf",
        "slides": [
            {"page": 13, "title": "单期现金流资产价格折现计算模型"},
            {"page": 16, "title": "多期现金流折现与资产负债价格公式"},
            {"page": 19, "title": "利率与价格反向变动及期限敏感性规律"},
            {"page": 28, "title": "资产负债期限缺口对银行利润的影响机制"},
            {"page": 35, "title": "麦考勒久期 (Macaulay Duration) 定义与现值加权模型"},
            {"page": 36, "title": "麦考勒久期离散现金流加权计算步骤详解"}
        ]
    },
    "2.1.5": {
        "pdf": "2.1 利率风险管理（二）.pdf",
        "slides": [
            {"page": 10, "title": "离散复利与连续复利下的久期数学推导"},
            {"page": 11, "title": "修正久期与债券价格一阶敏感度近似"},
            {"page": 12, "title": "绝对额久期 Dollar Duration 与组合久期可加性"},
            {"page": 21, "title": "债券价格-收益率曲线凸度几何特征与二阶导数"},
            {"page": 23, "title": "离散复利下的债券凸度 (Convexity) 计算公式"},
            {"page": 24, "title": "债券价格变动与久期+凸度联合二阶泰勒展开近似"},
            {"page": 34, "title": "资产负债免疫策略 (Redington Immunization) 条件"}
        ]
    },
    "2.2.3": {
        "pdf": "2.2 衍生品风险管理（一）.pdf",
        "slides": [
            {"page": 4, "title": "远期合约 (Forward) 概念与多空双方到期损益结构"},
            {"page": 13, "title": "期货合约 (Future) 标准化条款与每日盯市结算"},
            {"page": 29, "title": "利率互换 (Interest Rate Swap) 现金流交换与比较优势"},
            {"page": 33, "title": "期权合约定义、看涨看跌期权损益对称性"}
        ]
    },
    "2.2.5": {
        "pdf": "2.2 衍生品风险管理（二）.pdf",
        "slides": [
            {"page": 5, "title": "Delta 敏感度定义与标的资产对冲比率"},
            {"page": 35, "title": "期权 Delta 随标的价格变化曲线与取值区间"},
            {"page": 50, "title": "Gamma 敏感度：Delta 的斜率与期权凸度特征"},
            {"page": 54, "title": "Vega 波动率风险敏感度与长期平价期权特征"},
            {"page": 58, "title": "Theta 时间衰减敏感度与期权时间价值损耗"},
            {"page": 62, "title": "Rho 无风险利率敏感度与 1% 利率变动换算"}
        ]
    },
    "2.3.4": {
        "pdf": "2.4 历史模拟法和极值理论.pdf",
        "slides": [
            {"page": 7, "title": "历史模拟法基本过程与经验分位数 VaR 计算"},
            {"page": 13, "title": "历史模拟法方法论标准计算步骤流程"},
            {"page": 21, "title": "历史模拟法时间权重衰减扩展模型"},
            {"page": 33, "title": "压力在险价值 (Stressed VaR) 与压力预期亏损 (ES)"}
        ]
    },
    "3.4": {
        "pdf": "3.2 违约风险估计.pdf",
        "slides": [
            {"page": 9, "title": "累积违约概率 (Cumulative Default Probability)"},
            {"page": 10, "title": "边际违约概率 (Marginal Default Probability)"},
            {"page": 14, "title": "条件违约概率递推公式与生存率关系"},
            {"page": 25, "title": "Altman Z 评分信用违约判别模型"},
            {"page": 32, "title": "利用债券信用利差倒推年化违约概率公式"}
        ]
    },
    "5.4": {
        "pdf": "5 流动性风险.pdf",
        "slides": [
            {"page": 18, "title": "流动性覆盖率 (LCR) 核心监管指标要求与计算"},
            {"page": 29, "title": "净稳定资金比率 (NSFR) 核心监管指标与可用资金"},
            {"page": 36, "title": "相对买卖价差 (Spread) 衡量市场交易流动性"},
            {"page": 38, "title": "外生流动性清算成本与流动性调整后在险价值 (LVaR)"}
        ]
    },
    "6.4": {
        "pdf": "6 国际监管规则.pdf",
        "slides": [
            {"page": 19, "title": "风险加权资产 (RWA) 与表外资产信用转换系数"},
            {"page": 48, "title": "巴塞尔协议三大支柱全面监管架构体系"},
            {"page": 73, "title": "巴塞尔协议 III 最低资本充足率监管红线 (CET1/Tier 1/CAR)"},
            {"page": 78, "title": "资本留存缓冲 (2.5%) 与逆周期缓冲 (0%~2.5%) 机制"},
            {"page": 80, "title": "杠杆比率 (Leverage Ratio ≥ 3%) 监管要求"},
            {"page": 91, "title": "风险调整资本收益率 (RAROC) 核心计算模型与经济资本"}
        ]
    }
}

generated_meta = {}

for chId, config in CURATED_PAGES.items():
    pdf_path = os.path.join(pdf_dir, config["pdf"])
    if not os.path.exists(pdf_path):
        print(f"Warning: PDF not found {pdf_path}")
        continue
    doc = pymupdf.open(pdf_path)
    ch_slides = []
    ch_clean = chId.replace(".", "_")

    for item in config["slides"]:
        p_num = item["page"]
        title = item["title"]
        if p_num > len(doc):
            print(f"Page {p_num} out of range in {config['pdf']}")
            continue
        page = doc[p_num - 1]
        
        # High resolution pixmap (2.0 scale)
        pix = page.get_pixmap(matrix=pymupdf.Matrix(2.0, 2.0))
        img_name = f"slide_{ch_clean}_p{p_num}.png"
        img_path = os.path.join(output_dir, img_name)
        pix.save(img_path)
        
        ch_slides.append({
            "pageNumber": p_num,
            "title": title,
            "image": f"slides/{img_name}",
            "coreTakeaway": title
        })
        print(f"✓ Rendered {chId} P{p_num}: {img_name}")

    generated_meta[chId] = ch_slides

import json
meta_path = r"E:\workspace\frm-study-console\src\data\slideMeta.json"
with open(meta_path, "w", encoding="utf-8") as f:
    json.dump(generated_meta, f, ensure_ascii=False, indent=2)

print(f"\n🎉 Successfully curated and extracted {sum(len(v) for v in generated_meta.values())} core slides across all 8 chapters!")
