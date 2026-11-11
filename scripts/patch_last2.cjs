const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, '../src/data/quizData.ts');
let content = fs.readFileSync(quizDataPath, 'utf8');

const q_3_4_2_analysis = `【考点解析与条件违约率推导】：
题给 A 级债券前三年累积违约概率：$Q(1) = 0.05\\%, Q(2) = 0.16\\%, Q(3) = 0.34\\%$。
1. 各年条件违约概率（边际违约率）计算：
   • 第 1 年条件违约概率：$d_1 = Q(1) = 0.05\\%$；
   • 第 2 年条件违约概率：$d_2 = \\frac{Q(2) - Q(1)}{1 - Q(1)} = \\frac{0.16\\% - 0.05\\%}{1 - 0.05\\%} = \\frac{0.11\\%}{99.95\\%} \\approx 0.11\\%$；
   • 第 3 年条件违约概率：$d_3 = \\frac{Q(3) - Q(2)}{1 - Q(2)} = \\frac{0.34\\% - 0.16\\%}{1 - 0.16\\%} = \\frac{0.18\\%}{99.84\\%} \\approx 0.18\\%$；
2. 前三年年化平均违约率 $\\bar{d}$ 计算：
   由公式 $(1 - \\bar{d})^3 = 1 - Q(3) = 1 - 0.0034 = 0.9966$，解得：
   $$\\bar{d} = 1 - (0.9966)^{1/3} \\approx 1 - 0.99886 = 0.001135 \\approx 0.11\\%$$
故四空依次填 **0.05%**、**0.11%**、**0.18%**、**0.11%**。`;

const q_3_4_6_analysis = `【考点解析与 CDS 违约概率推导】：
题给参数：CDS 年保费溢差 $s = 325\\text{ bps} = 0.0325$，违约损失率 $\\text{LGD} = 40\\% = 0.40$。
1. 计算年化违约危险率（Hazard Rate）$\\lambda$：
   $$\\lambda = \\frac{s}{\\text{LGD}} = \\frac{0.0325}{0.40} = 0.08125$$
2. 计算参考实体未来 2 年内累积违约概率 $Q(2)$：
   依据指数分布违约概率公式：
   $$Q(2) = 1 - e^{-2\\lambda} = 1 - e^{-2 \\times 0.08125} = 1 - e^{-0.1625} \\approx 1 - 0.84998 = 0.15002 \\approx 15\\%$$
故第一空填 **15%**。`;

content = content.replace(
  /("id":\s*"q_3_4_2"[\s\S]*?"analysis":\s*")[^"]*?("[,\\n])/,
  (m, prefix, suffix) => `${prefix}${q_3_4_2_analysis.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n')}${suffix}`
);

content = content.replace(
  /("id":\s*"q_3_4_6"[\s\S]*?"analysis":\s*")[^"]*?("[,\\n])/,
  (m, prefix, suffix) => `${prefix}${q_3_4_6_analysis.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n')}${suffix}`
);

fs.writeFileSync(quizDataPath, content, 'utf8');
console.log('Cleaned last 2 template questions!');
