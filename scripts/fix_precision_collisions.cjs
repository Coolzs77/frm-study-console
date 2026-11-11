const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, '../src/data/quizData.ts');
let content = fs.readFileSync(quizDataPath, 'utf8');

// 1. 修复第 2.1.5 节核心概念 2、3、4
content = content.replace(
  /核心公式：\$\\frac\{\\Delta P\}\{P\} \\approx\*\*\[rose:-D\^\* \\Delta y\]\*\*\+\*\*\[emerald:\$\\frac\{1\}\{2\} C \(\\Delta y\)\^2\$\s*\]\*\*\s*。/g,
  '核心公式：$\\frac{\\Delta P}{P} \\approx$ **[rose:$-D^* \\Delta y$]** $+$ **[emerald:$\\frac{1}{2} C (\\Delta y)^2$]**。'
);

content = content.replace(
  /雷丁顿免疫三大定律：1\. \*\*\[blue:现值相等\]\*\*P_A = P_L\$/g,
  '雷丁顿免疫三大定律：1. **[blue:现值相等]** $P_A = P_L$'
);

content = content.replace(
  /对冲张数：\$N =\*\*\[rose:\$-\\frac\{P \\cdot D\^\*_P\}\{F \\cdot D\^\*_F\}\$\]\*\*\s*，其中 \$/g,
  '对冲张数：$N =$ **[rose:$-\\frac{P \\cdot D^*_P}{F \\cdot D^*_F}$]**，其中 $'
);

content = content.replace(
  /\$N = \\frac\{10000 \\times 5\}\{100 \\times 4\} =\s*\*\*\[amber:\$125 张\$\s*\]\*\*\s*。/g,
  '$N = \\frac{10000 \\times 5}{100 \\times 4} =$ **[amber:125 张]**。'
);

// 2. 修复希腊字母与 VaR 等地方的公式内嵌
content = content.replace(
  /\$\\Delta f \\approx 15\.1215 \\times 0\.01 = \*\*\[amber:0\.1512\]\*\*\$/g,
  '$\\Delta f \\approx 15.1215 \\times 0.01 =$ **[amber:0.1512]**'
);

content = content.replace(
  /\$\\text\{VaR\} = \*\*\[amber:P \\cdot z_\\alpha \\cdot \\sigma \\sqrt\{\\Delta t\}\]\*\*\$/g,
  '$\\text{VaR} =$ **[amber:$P \\cdot z_\\alpha \\cdot \\sigma \\sqrt{\\Delta t}$]**'
);

content = content.replace(
  /\$z = \*\*\[emerald:1\.645\]\*\*\$/g,
  '$z =$ **[emerald:1.645]**'
);

content = content.replace(
  /\$z = \*\*\[emerald:2\.326\]\*\*\$/g,
  '$z =$ **[emerald:2.326]**'
);

content = content.replace(
  /\$\\text\{VaR\} = 1000 \\times 1\.645 \\times 0\.02 \\times \\sqrt\{10\} = \*\*\[rose:104\.04 万元\]\*\*\$/g,
  '$\\text{VaR} = 1000 \\times 1.645 \\times 0.02 \\times \\sqrt{10} =$ **[rose:104.04 万元]**'
);

content = content.replace(
  /\$PD \\approx \\frac\{0\.02\}\{1 - 0\.4\} = \*\*\[amber:3\.33%\]\*\*\$/g,
  '$PD \\approx \\frac{0.02}{1 - 0.4} =$ **[amber:3.33%]**'
);

content = content.replace(
  /\$\\lambda = \\frac\{0\.012\}\{0\.6\} = \*\*\[amber:2\.0%\]\*\*\$/g,
  '$\\lambda = \\frac{0.012}{0.6} =$ **[amber:2.0%]**'
);

content = content.replace(
  /\$Q\(5\) = 1 - e\^\{-0\.02 \\times 5\} = \*\*\[rose:9\.52%\]\*\*\$/g,
  '$Q(5) = 1 - e^{-0.02 \\times 5} =$ **[rose:9.52%]**'
);

content = content.replace(
  /\$= 500 \/ 5000 = \*\*\[emerald:10\.0%\] \\ge 8\.0\\% \*\*\$/g,
  '$= 500 / 5000 =$ **[emerald:10.0%]** $\\ge 8.0\\%$'
);

content = content.replace(
  /\$\\Delta_c \\in \*\*\[emerald:\[0, 1\]\]\*\*\$/g,
  '$\\Delta_c \\in$ **[emerald:[0, 1]]**'
);

content = content.replace(
  /\$\\Delta_p \\in \*\*\[rose:\[-1, 0\]\]\*\*\$/g,
  '$\\Delta_p \\in$ **[rose:[-1, 0]]**'
);

content = content.replace(
  /\$V_L \*\*\[emerald:均值回归特征\]\*\*\s*\$/g,
  '$V_L$ **[emerald:均值回归特征]**'
);

fs.writeFileSync(quizDataPath, content, 'utf8');
console.log('Fixed precision collisions!');
