import pymupdf
import os
import shutil
import json

CHAPTER_CONFIG = {
    "2.1.4": {
        "file": "c2_1_1_interest_rate_1.pdf",
        "keep_pages": [13, 14, 15, 16, 17, 18, 19, 28, 33, 34, 35, 36, 37, 38, 39],
        "bookmarks": [
            {"orig_page": 13, "label": "单期折现", "desc": "单期现金流价格计算模型"},
            {"orig_page": 16, "label": "多期折现", "desc": "多期现金流折现与资产负债价格"},
            {"orig_page": 19, "label": "价格规律", "desc": "利率与价格反向变动及期限规律"},
            {"orig_page": 28, "label": "期限影响", "desc": "资产负债期限对银行利润影响机制"},
            {"orig_page": 35, "label": "久期定义", "desc": "麦考勒久期标准数学定义与公式"},
            {"orig_page": 36, "label": "计算步骤", "desc": "离散现金流加权久期计算步骤"},
            {"orig_page": 38, "label": "真题1&2", "desc": "两现金流久期计算与风险研判 (题1/2)"}
        ]
    },
    "2.1.5": {
        "file": "c2_1_2_interest_rate_2.pdf",
        "keep_pages": [2, 5, 7, 10, 11, 12, 13, 14, 15, 18, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 38, 46],
        "bookmarks": [
            {"orig_page": 10, "label": "连续复利", "desc": "连续复利下久期与修正久期相等推导"},
            {"orig_page": 11, "label": "修正久期", "desc": "修正久期定义与价格变动一阶近似"},
            {"orig_page": 14, "label": "匹配规律", "desc": "利率变动对不同久期资产负债影响"},
            {"orig_page": 23, "label": "凸度定义", "desc": "债券价格二阶导数与凸度几何曲率"},
            {"orig_page": 24, "label": "二阶展开", "desc": "久期+凸度泰勒二阶展开联合近似"},
            {"orig_page": 25, "label": "真题3&4", "desc": "基点变动下债券价格变动百分比 (题3/4)"},
            {"orig_page": 26, "label": "凸度计算", "desc": "离散现金流凸度求和计算公式"},
            {"orig_page": 27, "label": "真题5&6", "desc": "5年期现金流凸度加权计算 (题5/6)"},
            {"orig_page": 31, "label": "组合久期", "desc": "资产组合久期加权与国债期货对冲"},
            {"orig_page": 38, "label": "免疫三条件", "desc": "雷丁顿免疫三大核心条件与价格曲线"}
        ]
    },
    "2.2.3": {
        "file": "c2_2_1_derivatives_1.pdf",
        "keep_pages": [4, 5, 6, 7, 8, 9, 10, 11, 13, 14, 15, 16, 17, 18, 28, 29, 30, 35, 36, 37, 38, 39, 40, 41, 44, 45, 46, 47, 48],
        "bookmarks": [
            {"orig_page": 4, "label": "远期定义", "desc": "远期合约基础与OTC场外定制特征"},
            {"orig_page": 5, "label": "套期保值", "desc": "远期锁定利润与锁定成本机制"},
            {"orig_page": 13, "label": "期货机制", "desc": "期货标准化与交易所撮合交易机制"},
            {"orig_page": 15, "label": "盯市结算", "desc": "逐日盯市 (Mark-to-Market) 与保证金"},
            {"orig_page": 29, "label": "互换原理", "desc": "利率互换 (Swap) 原理与比较优势"},
            {"orig_page": 35, "label": "期权基础", "desc": "期权多空头寸定义与权利金概念"},
            {"orig_page": 40, "label": "期权损益", "desc": "看涨/看跌期权到期损益折线图"},
            {"orig_page": 48, "label": "远期vs期权", "desc": "远期与期权核心特征对比矩阵"}
        ]
    },
    "2.2.5": {
        "file": "c2_2_2_derivatives_2.pdf",
        "keep_pages": [3, 5, 6, 7, 9, 10, 12, 13, 15, 16, 33, 35, 36, 40, 41, 42, 43, 44, 47, 48, 49, 50, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 67],
        "bookmarks": [
            {"orig_page": 5, "label": "Delta定义", "desc": "Delta偏导数数学定义与对冲比率"},
            {"orig_page": 9, "label": "线性对冲", "desc": "现货、远期、期货线性损益结构"},
            {"orig_page": 15, "label": "保完即忘", "desc": "线性产品一次性对冲策略机制"},
            {"orig_page": 35, "label": "期权Delta", "desc": "看涨看跌期权Delta求导公式"},
            {"orig_page": 40, "label": "动态对冲", "desc": "期权Delta中性对冲头寸安排与再平衡"},
            {"orig_page": 48, "label": "五大希腊值", "desc": "希腊值体系总览与敏感性关系表"},
            {"orig_page": 50, "label": "Gamma", "desc": "Gamma曲率特征与必须用期权对冲"},
            {"orig_page": 54, "label": "Vega", "desc": "Vega波动率敏感度与对冲比率"},
            {"orig_page": 57, "label": "Theta", "desc": "Theta时间衰减与买卖方损益"},
            {"orig_page": 60, "label": "Rho", "desc": "Rho无风险利率敏感性与基点换算"}
        ]
    },
    "2.3.4": {
        "file": "c2_3_var_es.pdf",
        "keep_pages": [2, 3, 4, 7, 19, 20, 21, 22, 23, 24, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 43],
        "bookmarks": [
            {"orig_page": 19, "label": "VaR定义", "desc": "在险价值 VaR 分布分位数方程定义"},
            {"orig_page": 20, "label": "正态VaR", "desc": "收益正态分布下 VaR 公式与分位数"},
            {"orig_page": 29, "label": "真题1&2", "desc": "练习题1：单资产 95%/99% VaR 计算"},
            {"orig_page": 30, "label": "组合VaR", "desc": "练习题2：双资产组合 VaR 与协方差"},
            {"orig_page": 33, "label": "ES定义", "desc": "预期亏损 Expected Shortfall 条件期望"},
            {"orig_page": 36, "label": "ES计算", "desc": "尾部极端损失均值与 CVaR 计算"},
            {"orig_page": 37, "label": "一致性测度", "desc": "一致性风险测度四大公理检验 (次可加性)"},
            {"orig_page": 38, "label": "真题5", "desc": "例题4：双笔贷款违约损失 VaR 与 ES"}
        ]
    },
    "3.4": {
        "file": "c3_2_default_risk.pdf",
        "keep_pages": [4, 7, 8, 9, 10, 11, 12, 20, 29, 30, 31, 32, 33, 38, 39, 40, 43, 44, 45, 46],
        "bookmarks": [
            {"orig_page": 7, "label": "穆迪大表", "desc": "各级别加权平均累积违约率表 (1983-2025)"},
            {"orig_page": 9, "label": "累积违约率", "desc": "累积违约概率定义与存活概率递推"},
            {"orig_page": 10, "label": "边际违约率", "desc": "条件边际违约率递推计算公式"},
            {"orig_page": 20, "label": "真题1", "desc": "练习题1：对冲基金b级债券违约评估"},
            {"orig_page": 31, "label": "信用利差", "desc": "债券收益率利差 = 收益率 - 无风险利率"},
            {"orig_page": 32, "label": "利差倒推", "desc": "一年期债券利差倒推违约概率公式"},
            {"orig_page": 33, "label": "真题4&5", "desc": "练习题2：零息债券利差与回收率算PD"},
            {"orig_page": 38, "label": "CDS机制", "desc": "信用违约互换参考实体与交割机制"},
            {"orig_page": 44, "label": "CDS倒推", "desc": "CDS利差估算违约率 lambda ≈ s / (1-R)"},
            {"orig_page": 45, "label": "真题6&7", "desc": "练习题3：CDS溢差与LGD估算违约概率"}
        ]
    },
    "5.4": {
        "file": "c5_liquidity_risk.pdf",
        "keep_pages": [2, 17, 18, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 47, 48, 49, 50],
        "bookmarks": [
            {"orig_page": 2, "label": "流动性分类", "desc": "融资流动性与交易流动性本质区别"},
            {"orig_page": 17, "label": "LCR指标", "desc": "流动性覆盖率 (LCR ≥ 100%) 与合格资产"},
            {"orig_page": 34, "label": "交易流动性", "desc": "买卖价差与资产快速变现损失"},
            {"orig_page": 36, "label": "买卖价差比", "desc": "买卖价差 s 与中间价公允价值"},
            {"orig_page": 38, "label": "外生流动性", "desc": "正常市场与受压市场的流动性成本"},
            {"orig_page": 40, "label": "LVaR公式", "desc": "经流动性调整的在险价值 LVaR 模型"},
            {"orig_page": 41, "label": "真题1&2", "desc": "练习题1：2亿美元投资组合 LVaR 计算"},
            {"orig_page": 42, "label": "内生流动性", "desc": "大额头寸清算的市场冲击成本模型"},
            {"orig_page": 43, "label": "真题3&4", "desc": "练习题2：Major Investments大额持股冲击"},
            {"orig_page": 48, "label": "流动性黑洞", "desc": "单边交易踩踏与正负反馈交易员机制"}
        ]
    },
    "6.4": {
        "file": "c6_basel_regulation.pdf",
        "keep_pages": [6, 12, 13, 16, 17, 18, 19, 20, 21, 48, 49, 50, 72, 73, 74, 75, 77, 78, 79, 80, 83, 85, 86, 88, 89, 90, 91, 92],
        "bookmarks": [
            {"orig_page": 6, "label": "巴塞尔I", "desc": "巴塞尔协议I统一口径与资本充足率8%"},
            {"orig_page": 12, "label": "库克比率", "desc": "资本金 / 风险加权资产 (RWA)"},
            {"orig_page": 16, "label": "核心资本", "desc": "第一类核心资本与第二类附属资本构成"},
            {"orig_page": 18, "label": "表内RWA", "desc": "表内资产敞口与其风险权重相乘加总"},
            {"orig_page": 20, "label": "真题1&2", "desc": "练习题1：银行各类资产 RWA 计算"},
            {"orig_page": 48, "label": "三大支柱", "desc": "巴塞尔II三大支柱：最低资本/监督检查/市场纪律"},
            {"orig_page": 72, "label": "巴塞尔III", "desc": "资本金三层结构：CET1 / AT1 / Tier 2"},
            {"orig_page": 73, "label": "四大红线", "desc": "CET1 ≥ 4.5%, Tier 1 ≥ 6.0%, CAR ≥ 8.0%"},
            {"orig_page": 77, "label": "真题3&4", "desc": "练习题2：金融机构所有者权益与充足率计算"},
            {"orig_page": 78, "label": "留存缓冲", "desc": "资本留存缓冲 CCB (2.5%) 与逆周期缓冲 CCyB"},
            {"orig_page": 80, "label": "杠杆比率", "desc": "杠杆比率 = 一级资本 / 风险敞口 ≥ 3%"},
            {"orig_page": 85, "label": "G-SIBs", "desc": "全球系统重要性银行附加资本分档"},
            {"orig_page": 91, "label": "RAROC公式", "desc": "风险调整后资本回报率 (收入-费用-EL)/经济资本"},
            {"orig_page": 92, "label": "真题5&6", "desc": "练习题3：交易员A/B投资策略与RAROC计算"}
        ]
    }
}

orig_dir = "public/courseware_original"
dest_dir = "public/courseware"

os.makedirs(orig_dir, exist_ok=True)

# 1. Backup all original PDFs if not already in backup
for fname in os.listdir(dest_dir):
    if fname.endswith(".pdf"):
        src_path = os.path.join(dest_dir, fname)
        bk_path = os.path.join(orig_dir, fname)
        if not os.path.exists(bk_path):
            shutil.copy2(src_path, bk_path)
            print(f"Backed up {fname} to {bk_path}")

# 2. Extract and compress curated PDFs
results = {}

for ch_id, cfg in sorted(CHAPTER_CONFIG.items()):
    fname = cfg["file"]
    src_path = os.path.join(orig_dir, fname)
    out_path = os.path.join(dest_dir, fname)
    
    doc_orig = pymupdf.open(src_path)
    orig_total = len(doc_orig)
    keep_pages = cfg["keep_pages"]
    
    # Create new document
    doc_curated = pymupdf.open()
    
    # 0-indexed list
    zero_indexed = [p - 1 for p in keep_pages if 1 <= p <= orig_total]
    # Insert each kept page in order
    for p in zero_indexed:
        doc_curated.insert_pdf(doc_orig, from_page=p, to_page=p)
    
    # Save optimized
    doc_curated.save(out_path, garbage=4, deflate=True, clean=True)
    curated_size = os.path.getsize(out_path)
    curated_pages = len(doc_curated)
    
    # Calculate new bookmark page numbers
    new_bookmarks = []
    for bm in cfg["bookmarks"]:
        orig_p = bm["orig_page"]
        if orig_p in keep_pages:
            new_p = keep_pages.index(orig_p) + 1
            new_bookmarks.append({
                "pageNumber": new_p,
                "label": f"P{new_p} {bm['label']}",
                "description": bm["desc"]
            })
        else:
            print(f"Warning: bookmark {bm} not in keep_pages of {ch_id}")
            
    results[ch_id] = {
        "file": fname,
        "orig_pages": orig_total,
        "curated_pages": curated_pages,
        "size_kb": round(curated_size / 1024, 1),
        "bookmarks": new_bookmarks
    }
    print(f"Chapter {ch_id}: {orig_total} pages -> {curated_pages} pages | Size: {results[ch_id]['size_kb']} KB")

with open('scripts/curated_results.json', 'w', encoding='utf-8') as f:
    json.dump(results, f, ensure_ascii=False, indent=2)

print("\nDone! Results saved to scripts/curated_results.json")
