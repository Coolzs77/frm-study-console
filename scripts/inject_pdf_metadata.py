import json, re

metadata = {
    '2.1.4': {
        'pdfUrl': 'courseware/c2_1_1_interest_rate_1.pdf',
        'pdfFileName': '2.1 利率风险管理（一）.pdf',
        'totalPdfPages': 39,
        'keyBookmarks': [
            {'pageNumber': 13, 'label': 'P13 离散折现', 'description': '单期现金流资产价格折现计算模型'},
            {'pageNumber': 16, 'label': 'P16 多期收益', 'description': '多期现金流折现与资产负债价格公式'},
            {'pageNumber': 19, 'label': 'P19 价格规律', 'description': '利率与价格反向变动及期限敏感性规律'},
            {'pageNumber': 28, 'label': 'P28 久期缺口', 'description': '资产负债久期缺口模型与净资产免疫'},
            {'pageNumber': 35, 'label': 'P35 麦考勒久期', 'description': '麦考勒久期标准数学定义与计算步骤'},
            {'pageNumber': 36, 'label': 'P36 计算例题', 'description': '债券麦考勒久期标准例题拆解'},
        ]
    },
    '2.1.5': {
        'pdfUrl': 'courseware/c2_1_2_interest_rate_2.pdf',
        'pdfFileName': '2.1 利率风险管理（二）.pdf',
        'totalPdfPages': 46,
        'keyBookmarks': [
            {'pageNumber': 7, 'label': 'P7 凸度定义', 'description': '债券价格对利率二阶导与弯曲曲率'},
            {'pageNumber': 11, 'label': 'P11 凸度公式', 'description': '离散复利与连续复利凸度计算公式'},
            {'pageNumber': 15, 'label': 'P15 联合近似', 'description': '久期+凸度联合二阶泰勒展开近似模型'},
            {'pageNumber': 27, 'label': 'P27 国债期货', 'description': '国债期货对冲比率 N 核心计算公式'},
        ]
    },
    '2.2.3': {
        'pdfUrl': 'courseware/c2_2_1_derivatives_1.pdf',
        'pdfFileName': '2.2 衍生品风险管理（一）.pdf',
        'totalPdfPages': 58,
        'keyBookmarks': [
            {'pageNumber': 12, 'label': 'P12 远期定价', 'description': '无套利定价原理与无红利现货远期价格'},
            {'pageNumber': 21, 'label': 'P21 支付红利', 'description': '支付已知现金红利资产的远期合约理论价格'},
            {'pageNumber': 32, 'label': 'P32 最优对冲', 'description': '最小方差对冲比率与基差风险'},
        ]
    },
    '2.2.5': {
        'pdfUrl': 'courseware/c2_2_2_derivatives_2.pdf',
        'pdfFileName': '2.2 衍生品风险管理（二）.pdf',
        'totalPdfPages': 67,
        'keyBookmarks': [
            {'pageNumber': 8, 'label': 'P8 利率互换', 'description': '利率互换定价与浮动利率现值抵消机制'},
            {'pageNumber': 23, 'label': 'P23 期权希腊值', 'description': 'Delta / Gamma / Theta 核心定义'},
            {'pageNumber': 31, 'label': 'P31 Vega & Rho', 'description': '波动率敏感度与无风险利率敏感度'},
            {'pageNumber': 42, 'label': 'P42 希腊值对冲', 'description': 'Delta-Gamma 联合中性对冲方程组'},
        ]
    },
    '2.3.4': {
        'pdfUrl': 'courseware/c2_3_var_es.pdf',
        'pdfFileName': '2.3 在险价值和预期亏损.pdf',
        'totalPdfPages': 43,
        'keyBookmarks': [
            {'pageNumber': 6, 'label': 'P6 VaR定义', 'description': '在险价值 VaR 置信水平与持有期数学定义'},
            {'pageNumber': 15, 'label': 'P15 预期亏损ES', 'description': '条件在险价值 CVaR / ES 与次可加性证明'},
            {'pageNumber': 28, 'label': 'P28 一致性公理', 'description': '单调性、次可加性、正齐次性、平移不变性'},
        ]
    },
    '3.4': {
        'pdfUrl': 'courseware/c3_2_default_risk.pdf',
        'pdfFileName': '3.2 违约风险估计.pdf',
        'totalPdfPages': 61,
        'keyBookmarks': [
            {'pageNumber': 6, 'label': 'P6 穆迪违约表', 'description': '历史平均累计违约率转移矩阵表'},
            {'pageNumber': 18, 'label': 'P18 边际违约率', 'description': '边际违约率与条件违约概率递推公式'},
            {'pageNumber': 27, 'label': 'P27 债券利差倒推', 'description': '从债券利差倒推市场隐含违约概率'},
            {'pageNumber': 45, 'label': 'P45 CDS溢差', 'description': '信用违约互换 CDS 溢差定价与风险中性测度'},
        ]
    },
    '5.4': {
        'pdfUrl': 'courseware/c5_liquidity_risk.pdf',
        'pdfFileName': '5 流动性风险.pdf',
        'totalPdfPages': 56,
        'keyBookmarks': [
            {'pageNumber': 12, 'label': 'P12 买卖价差模型', 'description': '外生流动性风险与买卖价差成本'},
            {'pageNumber': 25, 'label': 'P25 市场冲击模型', 'description': '内生流动性风险与交易规模市场冲击函数'},
            {'pageNumber': 36, 'label': 'P36 LVaR模型', 'description': '流动性调整在险价值 LVaR 联合计算模型'},
        ]
    },
    '6.4': {
        'pdfUrl': 'courseware/c6_basel_regulation.pdf',
        'pdfFileName': '6 国际监管规则.pdf',
        'totalPdfPages': 92,
        'keyBookmarks': [
            {'pageNumber': 14, 'label': 'P14 巴塞尔三大支柱', 'description': '最低资本要求、监管审查、市场纪律'},
            {'pageNumber': 26, 'label': 'P26 资本充足率', 'description': '核心一级资本 4.5%、一级资本 6%、总资本 8%'},
            {'pageNumber': 42, 'label': 'P42 资本缓冲要求', 'description': '储备缓冲 2.5% 与逆周期资本缓冲 0~2.5%'},
            {'pageNumber': 68, 'label': 'P68 RAROC指标', 'description': '风险调整资本收益率 RAROC 绩效衡量模型'},
        ]
    }
}

file_path = r'e:\workspace\frm-study-console\src\data\quizData.ts'
with open(file_path, 'r', encoding='utf-8') as f:
    text = f.read()

# 首先清理掉之前可能重复注入的字段
for chId, data in metadata.items():
    # 找到 "chId": { ... } 的范围
    # 匹配 "chId": {
    pattern = rf'(\"{re.escape(chId)}\":\s*\{{)'
    m = re.search(pattern, text)
    if not m:
        print(f'Warning: {chId} not found')
        continue
    
    # 检查是否已经注入过 pdfUrl
    start_pos = m.end()
    # 提取接下来的 500 字符检查
    sub = text[start_pos:start_pos+1000]
    if 'pdfUrl:' in sub:
        # 已经有了，先移除现有的 pdfUrl, pdfFileName, totalPdfPages, keyBookmarks
        sub_cleaned = re.sub(r'\s*pdfUrl:\s*\"[^\"]*\",', '', sub)
        sub_cleaned = re.sub(r'\s*pdfFileName:\s*\"[^\"]*\",', '', sub_cleaned)
        sub_cleaned = re.sub(r'\s*totalPdfPages:\s*\d+,', '', sub_cleaned)
        sub_cleaned = re.sub(r'\s*keyBookmarks:\s*\[[\s\S]*?\],', '', sub_cleaned)
        text = text[:start_pos] + sub_cleaned + text[start_pos+1000:]
        # 重新定位
        m = re.search(pattern, text)
        start_pos = m.end()

    props = f'''\n    pdfUrl: {json.dumps(data['pdfUrl'])},
    pdfFileName: {json.dumps(data['pdfFileName'], ensure_ascii=False)},
    totalPdfPages: {data['totalPdfPages']},
    keyBookmarks: {json.dumps(data['keyBookmarks'], ensure_ascii=False, indent=6).strip()},'''

    text = text[:start_pos] + props + text[start_pos:]
    print(f'Successfully injected metadata into {chId}')

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(text)

print('All 8 chapters metadata injected!')
