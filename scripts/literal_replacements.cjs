const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, '../src/data/quizData.ts');
let content = fs.readFileSync(quizDataPath, 'utf8');

const replacements = [
  // 1. 久期+凸度联合二阶近似
  [
    '$\\frac{\\Delta P}{P} \\approx**[rose:-D^* \\Delta y]**+**[emerald:$\\frac{1}{2} C (\\Delta y)^2$]**',
    '$\\frac{\\Delta P}{P} \\approx$ **[rose:$-D^* \\Delta y$]** $+$ **[emerald:$\\frac{1}{2} C (\\Delta y)^2$]**'
  ],
  [
    '$\\frac{\\Delta P}{P} \\approx -4.76 \\times 0.02 + 0.5 \\times 28.5 \\times (0.02)^2 =**[rose:-0.0895]**',
    '$\\frac{\\Delta P}{P} \\approx -4.76 \\times 0.02 + 0.5 \\times 28.5 \\times (0.02)^2 =$ **[rose:$-0.0895$]**'
  ],
  [
    '对冲张数：$N =**[rose:$-\\frac{P \\cdot D^*_P}{F \\cdot D^*_F}$]** ，其中 $',
    '对冲张数：$N =$ **[rose:$-\\frac{P \\cdot D^*_P}{F \\cdot D^*_F}$]**，其中 $'
  ],
  [
    '$\\Delta f \\approx 15.1215 \\times 0.01 = **[amber:0.1512]**$',
    '$\\Delta f \\approx 15.1215 \\times 0.01 =$ **[amber:0.1512]**'
  ],
  [
    '$\\text{VaR} = **[amber:P \\cdot z_\\alpha \\cdot \\sigma \\sqrt{\\Delta t}]**$',
    '$\\text{VaR} =$ **[amber:$P \\cdot z_\\alpha \\cdot \\sigma \\sqrt{\\Delta t}$]**'
  ],
  [
    '$\\text{VaR} = 1000 \\times 1.645 \\times 0.02 \\times \\sqrt{10} = **[rose:104.04 万元]**$',
    '$\\text{VaR} = 1000 \\times 1.645 \\times 0.02 \\times \\sqrt{10} =$ **[rose:104.04 万元]**'
  ],
  [
    '$PD \\approx \\frac{0.02}{1 - 0.4} = **[amber:3.33%]**$',
    '$PD \\approx \\frac{0.02}{1 - 0.4} =$ **[amber:3.33%]**'
  ],
  [
    '$\\lambda = \\frac{0.012}{0.6} = **[amber:2.0%]**$',
    '$\\lambda = \\frac{0.012}{0.6} =$ **[amber:2.0%]**'
  ],
  [
    '$Q(5) = 1 - e^{-0.02 \\times 5} = **[rose:9.52%]**$',
    '$Q(5) = 1 - e^{-0.02 \\times 5} =$ **[rose:9.52%]**'
  ],
  [
    '$= 500 / 5000 = **[emerald:10.0%] \\ge 8.0\\% **$',
    '$= 500 / 5000 =$ **[emerald:10.0%]** $\\ge 8.0\\%$'
  ],
  [
    '$\\Delta_c \\in **[emerald:[0, 1]]**$',
    '$\\Delta_c \\in$ **[emerald:[0, 1]]**'
  ],
  [
    '$\\Delta_p \\in **[rose:[-1, 0]]**$',
    '$\\Delta_p \\in$ **[rose:[-1, 0]]**'
  ]
].map(([target, repl]) => {
  const t = target.replace(/\\/g, '\\\\');
  const r = repl.replace(/\\/g, '\\\\');
  return [t, r];
});

for (const [target, repl] of replacements) {
  if (content.includes(target)) {
    content = content.replace(target, repl);
    console.log('Replaced successfully!');
  } else {
    console.log('Not found (transformed):', target.slice(0, 50));
  }
}

fs.writeFileSync(quizDataPath, content, 'utf8');
console.log('Finished updating literal replacements!');
