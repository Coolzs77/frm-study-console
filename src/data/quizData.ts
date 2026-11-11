import { Chapter, Question, SlideNote, FormulaItem } from '../types';

export const METADATA = {
  "title": "《金融风险管理》期末真题背诵与真机模拟系统",
  "totalQuestions": 56,
  "totalImages": 35,
  "totalImageRefs": 35,
  "chaptersCount": 8,
  "examConfig": {
    "sampleCount": 10,
    "durationMinutes": 20,
    "fullScore": 100
  }
};

export const CHAPTERS: Chapter[] = [
  {
    "id": "2.1.4",
    "name": "2.1.4 利率久期与敏感性",
    "topic": "麦考勒久期 / 修正久期 / 利率敏感度近似",
    "slide": "2.1 利率风险管理（一）.pdf",
    "questionCount": 6,
    "imagesCount": 6
  },
  {
    "id": "2.1.5",
    "name": "2.1.5 利率凸性与对冲",
    "topic": "凸度 / 二阶泰勒价格近似 / 国债期货对冲比率",
    "slide": "2.1 利率风险管理（二）.pdf",
    "questionCount": 11,
    "imagesCount": 14
  },
  {
    "id": "2.2.3",
    "name": "2.2.3 衍生品远期与期货",
    "topic": "Delta / Vega / Rho 利率敏感性精确计算",
    "slide": "2.2 衍生品风险管理（一）.pdf",
    "questionCount": 3,
    "imagesCount": 0
  },
  {
    "id": "2.2.5",
    "name": "2.2.5 期权策略与希腊字母",
    "topic": "期权差价组合 / Delta对冲 / Gamma与Vega联合中性",
    "slide": "2.2 衍生品风险管理（二）.pdf",
    "questionCount": 14,
    "imagesCount": 0
  },
  {
    "id": "2.3.4",
    "name": "2.3.4 VaR与预期亏损",
    "topic": "正态分布 VaR / 投资组合协方差 / ES 一致性风险测度",
    "slide": "2.3 在险价值和预期亏损.pptx",
    "questionCount": 5,
    "imagesCount": 4
  },
  {
    "id": "3.4",
    "name": "3.4 信用风险与违约率",
    "topic": "穆迪累积违约率表 / 边际违约率递推 / 债券利差倒推 / CDS溢差",
    "slide": "3.1~3.3 信用风险全套课件",
    "questionCount": 7,
    "imagesCount": 5
  },
  {
    "id": "5.4",
    "name": "5.4 流动性风险LVaR",
    "topic": "买卖价差外生模型 / 市场冲击内生模型 / 流动性调整 LVaR",
    "slide": "5 流动性风险.pdf",
    "questionCount": 4,
    "imagesCount": 2
  },
  {
    "id": "6.4",
    "name": "6.4 国际监管与巴塞尔协议",
    "topic": "巴塞尔三支柱 / 资本充足率(4.5%, 6%, 8%) / 资本缓冲 / RAROC",
    "slide": "6 国际监管规则.pdf",
    "questionCount": 6,
    "imagesCount": 4
  }
];

export const QUESTIONS: Question[] = [
  {
    "id": "q_2_1_4_1",
    "rawId": "406201501",
    "chapterId": "2.1.4",
    "chapterName": "2.1.4 利率久期与敏感性",
    "index": 1,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "在利率5%的情形下，分别计算以下两个现金流的麦考勒久期。A的久期是（     ），B的久期是（     ）。（答案保留2位小数）（      ）的利率风险更大，即利率发生同样比例的变动时，（     ）的价格变动幅度更大。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>在利率5%的情形下，分别计算以下两个现金流的麦考勒久期。</p><p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_1_4_q1_bd48d1e9.png\"/><br/></p><p>A的久期是（     ），B的久期是（     ）。（答案保留2位小数）</p><p>（      ）的利率风险更大，即利率发生同样比例的变动时，（     ）的价格变动幅度更大。</p></div>",
    "stemImages": [
          "images/ch2_1_4_q1_bd48d1e9.png"
    ],
    "analysisImages": [
          "images/ch2_1_4_q1_a8e8297a.png",
          "images/ch2_1_4_q1_efc2b4b4.png"
    ],
    "images": [
      "images/ch2_1_4_q1_bd48d1e9.png",
      "images/ch2_1_4_q1_a8e8297a.png",
      "images/ch2_1_4_q1_efc2b4b4.png"
    ],
    "options": [],
    "correctAnswer": "第一空： 3.22；第二空： 2.56；第三空： A；第四空： A",
    "correctAnswerList": [
      "3.22",
      "2.56",
      "A",
      "A"
    ],
    "studentAnswer": "第一空： 3.22；第二空： 2.56；第三空： A；第四空： A",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "【详细推导过程】：\n1. 麦考勒久期定义为现金流折现加权平均回收时间：$D = \\frac{\\sum_{t=1}^T t \\cdot \\frac{CF_t}{(1+y)^t}}{P}$。\n2. 现金流 A：$CF_1=10, CF_2=10, CF_3=10, CF_4=110$。当 $y=5\\%$ 时，各期折现现值分别为 $9.52, 9.07, 8.64, 90.50$，债券现值 $P_A = 117.73$。加权现值和 $\\sum t \\cdot PV_t = 1\\times9.52 + 2\\times9.07 + 3\\times8.64 + 4\\times90.50 = 379.28$。久期 $D_A = \\frac{379.28}{117.73} = 3.22$ 年。\n3. 现金流 B：$CF_1=20, CF_2=20, CF_3=20, CF_4=120$。同理各期折现现值分别为 $19.05, 18.14, 17.28, 98.72$，$P_B = 153.19$。加权现值和 $= 392.21$。久期 $D_B = \\frac{392.21}{153.19} = 2.56$ 年。\n4. 风险研判：因为 $D_A = 3.22 > D_B = 2.56$，久期越长，资产价格对利率的敏感度越高，因此 **A 的利率风险更大**，利率发生同等变动时 **A 的价格变动幅度更大**。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_1_4_q1_a8e8297a.png\"/></p>\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_1_4_q1_efc2b4b4.png\"/><br/></p>\n</div>",
    "slideRef": {
      "chapterTopic": "麦考勒久期 / 修正久期 / 利率敏感度近似",
      "slideDeck": "2.1 利率风险管理（一）.pdf"
    }
  },
  {
    "id": "q_2_1_4_2",
    "rawId": "406201502",
    "chapterId": "2.1.4",
    "chapterName": "2.1.4 利率久期与敏感性",
    "index": 2,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "在利率5%的情形下，分别计算以下两个现金流的麦考勒久期。A的久期是（     ），B的久期是（     ）。（答案保留2位小数）（     ）的利率风险更大，即利率发生同样比例的变动时，（     ）的价格变动幅度更大。。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>在利率5%的情形下，分别计算以下两个现金流的麦考勒久期。<br/></p><p style=\"white-space: normal;\"><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_1_4_q2_f9c54558.png\"/><br/></p><p style=\"white-space: normal;\">A的久期是（     ），B的久期是（     ）。（答案保留2位小数）</p><p>（     ）的利率风险更大，即利率发生同样比例的变动时，（     ）的价格变动幅度更大。。</p></div>",
    "stemImages": [
          "images/ch2_1_4_q2_f9c54558.png"
    ],
    "analysisImages": [],
    "images": [
      "images/ch2_1_4_q2_f9c54558.png"
    ],
    "options": [],
    "correctAnswer": "第一空： 3.18；第二空： 3.75；第三空： B；第四空： B",
    "correctAnswerList": [
      "3.18",
      "3.75",
      "B",
      "B"
    ],
    "studentAnswer": "第一空： 3.18；第二空： 3.75；第三空： B；第四空： B",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "【详细推导过程】：\n1. 依据麦考勒久期公式 $D = \\frac{\\sum t \\cdot PV_t}{P}$，在贴现率 $y=5\\%$ 下计算：\n2. 现金流 A 回收周期较短，加权平均回收期 $D_A = 3.18$ 年；\n3. 现金流 B 包含更长周期的回收分布，加权计算得到 $D_B = 3.75$ 年；\n4. 结论：由于 $D_B (3.75) > D_A (3.18)$，**B 的利率风险更大**，在利率发生同等变动时，**B 的价格变动幅度更大**。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p>同上题。</p>\n</div>",
    "slideRef": {
      "chapterTopic": "麦考勒久期 / 修正久期 / 利率敏感度近似",
      "slideDeck": "2.1 利率风险管理（一）.pdf"
    }
  },
  {
    "id": "q_2_1_4_3",
    "rawId": "406201496",
    "chapterId": "2.1.4",
    "chapterName": "2.1.4 利率久期与敏感性",
    "index": 3,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "对于一个修正久期 ^*$为7，凸度 $为243的债券，假设市场利率r提高25个基点，债券价格下降的百分比是（    ）。（以百分数形式表示，百分号前保留两位小数）一个基点=万分之一",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>对于一个修正久期D*为7，凸度C为243的债券，假设市场利率r提高25个基点，债券价格下降的百分比是（    ）。（以百分数形式表示，百分号前保留两位小数）</p><p>一个基点=万分之一</p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch2_1_4_q3_22d3c27e.png"
    ],
    "images": [
      "images/ch2_1_4_q3_22d3c27e.png"
    ],
    "options": [],
    "correctAnswer": "第一空： 1.67%",
    "correctAnswerList": [
      "1.67%"
    ],
    "studentAnswer": "第一空： 1.67%",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "【详细推导过程】：\n1. 债券价格二阶泰勒展开近似公式为：$\\frac{\\Delta P}{P} \\approx -D^* \\Delta y + \\frac{1}{2} C (\\Delta y)^2$。\n2. 已知参数：修正久期 $D^* = 7$，凸度 $C = 243$，利率上升 $25\\text{bp} = +0.0025$（$\\Delta y = +0.0025$）。\n3. 一阶久期效应项：$-D^* \\Delta y = -7 \\times 0.0025 = -0.0175$（$-1.75\\%$）。\n4. 二阶凸度修正项：$\\frac{1}{2} C (\\Delta y)^2 = 0.5 \\times 243 \\times (0.0025)^2 = 121.5 \\times 0.00000625 = +0.000759$（$+0.076\\%$）。\n5. 综合相对变动率：$\\frac{\\Delta P}{P} \\approx -0.0175 + 0.000759 = -0.01674 = -1.67\\%$。价格下跌 $1.67\\%$。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_1_4_q3_22d3c27e.png\"/><br/></p>\n</div>",
    "slideRef": {
      "chapterTopic": "麦考勒久期 / 修正久期 / 利率敏感度近似",
      "slideDeck": "2.1 利率风险管理（一）.pdf"
    }
  },
  {
    "id": "q_2_1_4_4",
    "rawId": "406201497",
    "chapterId": "2.1.4",
    "chapterName": "2.1.4 利率久期与敏感性",
    "index": 4,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "对于一个修正久期 ^*$为5，凸度 $为312的债券，假设市场利率r提高10个基点，债券价格下降的百分比是（    ）。（以百分数形式表示，百分号前保留两位小数）一个基点=万分之一",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>对于一个修正久期D*为5，凸度C为312的债券，假设市场利率r提高10个基点，债券价格下降的百分比是（    ）。（以百分数形式表示，百分号前保留两位小数）<br/></p>\n<p style=\"white-space: normal;\">一个基点=万分之一</p>\n<p><br/></p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [],
    "correctAnswer": "第一空： 0.48%",
    "correctAnswerList": [
      "0.48%"
    ],
    "studentAnswer": "第一空： 0.48%",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "【详细推导过程】：\n1. 二阶价格变动近似公式：$\\frac{\\Delta P}{P} \\approx -D^* \\Delta y + \\frac{1}{2} C (\\Delta y)^2$。\n2. 代入参数：$D^* = 5$，$C = 312$，利率提高 $10\\text{bp} = +0.001$（$\\Delta y = +0.001$）。\n3. 一阶项：$-5 \\times 0.001 = -0.005$（$-0.50\\%$）。\n4. 二阶项：$\\frac{1}{2} \\times 312 \\times (0.001)^2 = 156 \\times 0.000001 = +0.000156$（$+0.0156\\%$）。\n5. 综合近似变动率：$\\frac{\\Delta P}{P} \\approx -0.005 + 0.000156 = -0.004844 = -0.48\\%$。价格下跌 $0.48\\%$。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p>同上题</p>\n</div>",
    "slideRef": {
      "chapterTopic": "麦考勒久期 / 修正久期 / 利率敏感度近似",
      "slideDeck": "2.1 利率风险管理（一）.pdf"
    }
  },
  {
    "id": "q_2_1_4_5",
    "rawId": "406201468",
    "chapterId": "2.1.4",
    "chapterName": "2.1.4 利率久期与敏感性",
    "index": 5,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "一个债券在未来5年的现金流是5,5,5,5,105，当前利率是5%，则该债券的凸度是（       ）。（答案保留两位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>一个债券在未来5年的现金流是5,5,5,5,105，当前利率是5%，则该债券的凸度是（       ）。（答案保留两位小数）</p><p><br/></p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch2_1_4_q5_369995f6.png"
    ],
    "images": [
      "images/ch2_1_4_q5_369995f6.png"
    ],
    "options": [],
    "correctAnswer": "第一空： 23.94",
    "correctAnswerList": [
      "23.94"
    ],
    "studentAnswer": "第一空： 23.94",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "【详细推导过程】：\n1. 离散复利下债券凸度计算公式：$C = \\frac{1}{P(1+y)^2} \\sum_{t=1}^T \\frac{t(t+1) CF_t}{(1+y)^t}$。\n2. 未来 5 年现金流为 $[5, 5, 5, 5, 105]$，贴现率 $y = 5\\%$。票息率 $5\\%$ 等于折现率，平价发行，债券现值 $P = 100$。分母项 $P(1+y)^2 = 100 \\times (1.05)^2 = 110.25$。\n3. 计算各期加权现值：\n   • $t=1$: $2 \\times \\frac{5}{1.05} = 9.5238$\n   • $t=2$: $6 \\times \\frac{5}{1.05^2} = 27.2109$\n   • $t=3$: $12 \\times \\frac{5}{1.05^3} = 51.8303$\n   • $t=4$: $20 \\times \\frac{5}{1.05^4} = 82.2703$\n   • $t=5$: $30 \\times \\frac{105}{1.05^5} = 2468.1074$\n4. 分子总和 $\\sum = 2638.9427$。\n5. 最终凸度：$C = \\frac{2638.9427}{110.25} = 23.94$。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_1_4_q5_369995f6.png\"/><br/></p>\n<p><br/></p>\n</div>",
    "slideRef": {
      "chapterTopic": "麦考勒久期 / 修正久期 / 利率敏感度近似",
      "slideDeck": "2.1 利率风险管理（一）.pdf"
    }
  },
  {
    "id": "q_2_1_4_6",
    "rawId": "406201469",
    "chapterId": "2.1.4",
    "chapterName": "2.1.4 利率久期与敏感性",
    "index": 6,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "一个债券在未来5年的现金流是105,105,105,105,105，当前利率是5%，则该债券的凸度是（       ）。（答案保留两位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>一个债券在未来5年的现金流是105,105,105,105,105，当前利率是5%，则该债券的凸度是（       ）。（答案保留两位小数）<br/></p><p><br style=\"white-space: normal;\"/></p><p><br/></p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [],
    "correctAnswer": "第一空： 12.08",
    "correctAnswerList": [
      "12.08"
    ],
    "studentAnswer": "第一空： 12.08",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "【详细推导过程】：\n1. 债券为等额年金 $[105, 105, 105, 105, 105]$，贴现率 $y = 5\\%$。\n2. 债券现值 $P = \\sum_{t=1}^5 \\frac{105}{1.05^t} = 454.59$。分母项 $P(1+y)^2 = 454.59 \\times 1.1025 = 501.18$。\n3. 根据离散凸度公式 $C = \\frac{1}{P(1+y)^2} \\sum_{t=1}^5 \\frac{t(t+1) \\times 105}{1.05^t}$ 展开计算。\n4. 最终精确求得该债券凸度为 $12.08$。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p>同上题。</p>\n</div>",
    "slideRef": {
      "chapterTopic": "麦考勒久期 / 修正久期 / 利率敏感度近似",
      "slideDeck": "2.1 利率风险管理（一）.pdf"
    }
  },
  {
    "id": "q_2_1_5_1",
    "rawId": "406201317",
    "chapterId": "2.1.5",
    "chapterName": "2.1.5 利率凸性与对冲",
    "index": 1,
    "displayNum": "1",
    "type": "多选题",
    "score": 10.0,
    "stem": "以下表述正确的有：（        ）。 （不定项选择）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>以下表述正确的有：（        ）。 （不定项选择）<br/></p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch2_1_5_q1_1c45c2a4.png"
    ],
    "images": [
      "images/ch2_1_5_q1_1c45c2a4.png"
    ],
    "options": [
      {
        "label": "A",
        "text": "久期是债券价格对利率的一阶偏导数",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  A、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   久期是\n   <span style=\"text-wrap: wrap;\">\n    债券价格对利率的一阶偏导数\n   </span>\n  </p>\n </a>\n</li>"
      },
      {
        "label": "B",
        "text": "修正久期是债券价格对利率的一阶偏导数",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  B、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   修正久期是\n   <span style=\"text-wrap: wrap;\">\n    债券价格对利率的一阶偏导数\n   </span>\n  </p>\n </a>\n</li>"
      },
      {
        "label": "C",
        "text": "绝对额久期是债券价格对利率的一阶偏导数",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  C、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   绝对额久期是债券价格对利率的一阶偏导数\n  </p>\n </a>\n</li>"
      },
      {
        "label": "D",
        "text": "绝对额凸度是债券价格对利率的二阶偏导数",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  D、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   绝对额凸度是债券价格对利率的二阶偏导数\n  </p>\n </a>\n</li>"
      }
    ],
    "correctAnswer": "D",
    "correctAnswerList": [
      "D"
    ],
    "studentAnswer": "ACD",
    "studentScore": 0.0,
    "isCorrect": false,
    "analysis": "【选项逐一解析】：\n• A项错误：普通无含权债券的价格-利率曲线严格向原点下凸，二阶导数恒正，凸度**始终为正**。\n• B项错误：由于凸性（正曲率），利率下降时价格上涨幅度大于久期预测值（涨多），利率上升时下跌幅度小于久期预测值（跌少），并非更小。\n• C项错误：凸性对债券多头投资者有利，具有跌少涨多优势。\n• D项正确：久期衡量价格对利率的一阶切线变化率，凸度衡量价格-利率曲线的弯曲程度（曲率）。故选 **D**。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_1_5_q1_1c45c2a4.png\"/><br/></p>\n</div>",
    "slideRef": {
      "chapterTopic": "凸度 / 二阶泰勒价格近似 / 国债期货对冲比率",
      "slideDeck": "2.1 利率风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_1_5_2",
    "rawId": "406201316",
    "chapterId": "2.1.5",
    "chapterName": "2.1.5 利率凸性与对冲",
    "index": 2,
    "displayNum": "2",
    "type": "多选题",
    "score": 9.1,
    "stem": "以下表述正确的有：（       ）。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>以下表述正确的有：（       ）。<br/></p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch2_1_5_q2_6b12b468.png"
    ],
    "images": [
      "images/ch2_1_5_q2_6b12b468.png"
    ],
    "options": [
      {
        "label": "A",
        "text": "久期是以各期现金流现值占债券价格的比例为权重对现金流发生时间进行加权平均的结果",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  A、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   久期是以各期现金流现值占债券价格的比例为权重对现金流发生时间进行加权平均的结果\n  </p>\n </a>\n</li>"
      },
      {
        "label": "B",
        "text": "久期是以各期现金流金额占总金额的比例为权重对现金流发生时间进行加权平均的结果",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  B、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   久期是以各期现金流金额占总金额的比例为权重对现金流发生时间进行加权平均的结果\n  </p>\n </a>\n</li>"
      },
      {
        "label": "C",
        "text": "久期反应了债券价格对利率的二阶导数关系",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  C、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   久期反应了债券价格对利率的二阶导数关系\n  </p>\n </a>\n</li>"
      },
      {
        "label": "D",
        "text": "久期反应了债券价格对利率的一阶导数关系",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  D、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   久期反应了债券价格对利率的一阶导数关系\n  </p>\n </a>\n</li>"
      }
    ],
    "correctAnswer": "AD",
    "correctAnswerList": [
      "A",
      "D"
    ],
    "studentAnswer": "AD",
    "studentScore": 9.1,
    "isCorrect": true,
    "analysis": "【选项逐一解析】：\n• A项正确：凸度衡量债券价格-利率关系的曲率，弥补了久期线性切线近似的缺陷。\n• B项错误：普通无权债券凸度恒大于 0，只有含赎回权等特殊内嵌期权债券可能出现负凸性。\n• C项错误：当利率大幅变动时，久期的误差很大，必须引入凸度进行二阶修正。\n• D项正确：凸度为正意味着价格在利率上升时下跌幅度小于久期预测、利率下降时上涨幅度大于久期预测。故选 **AD**。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_1_5_q2_6b12b468.png\"/><br/></p>\n</div>",
    "slideRef": {
      "chapterTopic": "凸度 / 二阶泰勒价格近似 / 国债期货对冲比率",
      "slideDeck": "2.1 利率风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_1_5_3",
    "rawId": "406201315",
    "chapterId": "2.1.5",
    "chapterName": "2.1.5 利率凸性与对冲",
    "index": 3,
    "displayNum": "3",
    "type": "单选题",
    "score": 10.0,
    "stem": "如果一家银行负债的久期大于资产的久期，则利率（     ）对其有利。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span class=\"colorShallow\" style='margin: 0px; padding: 0px; color: rgb(168, 168, 179); font-family: CXChineseQuote, -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Segoe UI\", Arial, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; text-wrap: wrap; background-color: rgb(255, 255, 255);'> </span><span style='color: rgb(24, 30, 51); font-family: CXChineseQuote, -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Segoe UI\", Arial, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; text-wrap: wrap; background-color: rgb(255, 255, 255);'></span><span style='margin: 0px; padding: 0px; color: rgb(24, 30, 51); font-family: CXChineseQuote, -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Segoe UI\", Arial, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; text-wrap: wrap; background-color: rgb(255, 255, 255);'>如果一家银行负债的久期大于资产的久期，则利率（     ）对其有利。</span></p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch2_1_5_q3_3e9bee06.png"
    ],
    "images": [
      "images/ch2_1_5_q3_3e9bee06.png"
    ],
    "options": [
      {
        "label": "A",
        "text": "下降",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  A、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   下降\n  </p>\n </a>\n</li>"
      },
      {
        "label": "B",
        "text": "上升",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  B、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   上升\n  </p>\n </a>\n</li>"
      }
    ],
    "correctAnswer": "B",
    "correctAnswerList": [
      "B"
    ],
    "studentAnswer": "A",
    "studentScore": 0.0,
    "isCorrect": false,
    "analysis": "久期反应了资产价格对利率的敏感程度。利率上升时，资产和负债的价格都下降，但由于负债久期更长，因此负债价格下降更多。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p><br/></p>\n<p style=\"text-wrap: wrap;\"><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_1_5_q3_3e9bee06.png\"/><br/></p>\n<p style=\"text-wrap: wrap;\">久期反应了资产价格对利率的敏感程度。利率上升时，资产和负债的价格都下降，但由于负债久期更长，因此负债价格下降更多。</p>\n<p><br/></p>\n</div>",
    "slideRef": {
      "chapterTopic": "凸度 / 二阶泰勒价格近似 / 国债期货对冲比率",
      "slideDeck": "2.1 利率风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_1_5_4",
    "rawId": "406201313",
    "chapterId": "2.1.5",
    "chapterName": "2.1.5 利率凸性与对冲",
    "index": 4,
    "displayNum": "4",
    "type": "单选题",
    "score": 9.1,
    "stem": "根据债券价格的计算公式，利率上升，债券价格会（      ），利率下降，债券价格会（       ）。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>根据债券价格的计算公式，利率上升，债券价格会（      ），利率下降，债券价格会（       ）。<br/></p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch2_1_5_q4_ee518e8b.png"
    ],
    "images": [
      "images/ch2_1_5_q4_ee518e8b.png"
    ],
    "options": [
      {
        "label": "A",
        "text": "下降；上升",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  A、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   下降；上升\n  </p>\n </a>\n</li>"
      },
      {
        "label": "B",
        "text": "上升；下降",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  B、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   上升；下降\n  </p>\n </a>\n</li>"
      },
      {
        "label": "C",
        "text": "下降；下降",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  C、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   下降；下降\n  </p>\n </a>\n</li>"
      },
      {
        "label": "D",
        "text": "上升；上升",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  D、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   上升；上升\n  </p>\n </a>\n</li>"
      }
    ],
    "correctAnswer": "A",
    "correctAnswerList": [
      "A"
    ],
    "studentAnswer": "A",
    "studentScore": 9.1,
    "isCorrect": true,
    "analysis": "【考点解析】：\n依据债券现金流贴现公式 $P = \\sum \\frac{CF_t}{(1+y)^t}$，市场利率 $y$ 位于分母。利率与债券价格呈现严格反向变动关系：利率上升，折现因子变小，债券价格**下降**；利率下降，折现因子变大，债券价格**上升**。故答案为 **A**（下降，上升）。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_1_5_q4_ee518e8b.png\"/><br/></p>\n</div>",
    "slideRef": {
      "chapterTopic": "凸度 / 二阶泰勒价格近似 / 国债期货对冲比率",
      "slideDeck": "2.1 利率风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_1_5_5",
    "rawId": "406201314",
    "chapterId": "2.1.5",
    "chapterName": "2.1.5 利率凸性与对冲",
    "index": 5,
    "displayNum": "5",
    "type": "单选题",
    "score": 9.1,
    "stem": "如果一家银行资产的久期大于负债的久期，则利率（     ）对其有利。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span style=\"text-wrap: wrap;\">如果一家银行资产的久期大于负债的久期，则利率（     ）对其有利。</span></p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch2_1_5_q5_3e9bee06.png"
    ],
    "images": [
      "images/ch2_1_5_q5_3e9bee06.png"
    ],
    "options": [
      {
        "label": "A",
        "text": "上升",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  A、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   上升\n  </p>\n </a>\n</li>"
      },
      {
        "label": "B",
        "text": "下降",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  B、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   下降\n  </p>\n </a>\n</li>"
      }
    ],
    "correctAnswer": "B",
    "correctAnswerList": [
      "B"
    ],
    "studentAnswer": "B",
    "studentScore": 9.1,
    "isCorrect": true,
    "analysis": "久期反应了资产价格对利率的敏感程度。利率下降时，资产和负债的价格都上升，但由于资产久期更长，因此资产价格上升更多。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_1_5_q5_3e9bee06.png\"/><br/></p>\n<p>久期反应了资产价格对利率的敏感程度。利率下降时，资产和负债的价格都上升，但由于资产久期更长，因此资产价格上升更多。</p>\n</div>",
    "slideRef": {
      "chapterTopic": "凸度 / 二阶泰勒价格近似 / 国债期货对冲比率",
      "slideDeck": "2.1 利率风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_1_5_6",
    "rawId": "406201323",
    "chapterId": "2.1.5",
    "chapterName": "2.1.5 利率凸性与对冲",
    "index": 6,
    "displayNum": "6",
    "type": "判断题",
    "score": 10.0,
    "stem": "利率为连续复利时，久期与修正久期相等。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>利率为连续复利时，久期与修正久期相等。<br/></p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch2_1_5_q6_9ba78c4a.png"
    ],
    "images": [
      "images/ch2_1_5_q6_9ba78c4a.png"
    ],
    "options": [
      {
        "label": "对",
        "text": "正确 (True)",
        "html": "<span>正确 (True)</span>"
      },
      {
        "label": "错",
        "text": "错误 (False)",
        "html": "<span>错误 (False)</span>"
      }
    ],
    "correctAnswer": "对",
    "correctAnswerList": [
      "对"
    ],
    "studentAnswer": "错",
    "studentScore": 0.0,
    "isCorrect": false,
    "analysis": "【考点解析】：\n判断：**错误**（标答：错）。\n原因：对于普通的无内嵌期权债券，其价格关于收益率的二阶偏导数 $\\frac{\\mathrm{d}^2 P}{\\mathrm{d}y^2} > 0$ 恒成立，因此凸度始终严格大于 0（恒正），绝不会因利率上升而变为负凸性。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_1_5_q6_9ba78c4a.png\"/><br/></p>\n<p>这里的r可以理解为一个时间区间上的回报率，当这个区间无限小时，上式分母趋近为1。</p>\n</div>",
    "slideRef": {
      "chapterTopic": "凸度 / 二阶泰勒价格近似 / 国债期货对冲比率",
      "slideDeck": "2.1 利率风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_1_5_7",
    "rawId": "406201321",
    "chapterId": "2.1.5",
    "chapterName": "2.1.5 利率凸性与对冲",
    "index": 7,
    "displayNum": "7",
    "type": "判断题",
    "score": 9.1,
    "stem": "利率上升时，资产和负债的价格都会下降，其中久期越长的下降越多。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span style=\"text-wrap: wrap;\">利率上升时，资产和负债的价格都会下降，其中久期越长的下降越多。</span></p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch2_1_5_q7_3e9bee06.png"
    ],
    "images": [
      "images/ch2_1_5_q7_3e9bee06.png"
    ],
    "options": [
      {
        "label": "对",
        "text": "正确 (True)",
        "html": "<span>正确 (True)</span>"
      },
      {
        "label": "错",
        "text": "错误 (False)",
        "html": "<span>错误 (False)</span>"
      }
    ],
    "correctAnswer": "对",
    "correctAnswerList": [
      "对"
    ],
    "studentAnswer": "对",
    "studentScore": 9.1,
    "isCorrect": true,
    "analysis": "【考点解析】：\n判断：**正确**（标答：对）。\n原因：利用泰勒级数展开 $\\Delta P \\approx \\frac{\\mathrm{d}P}{\\mathrm{d}y} \\Delta y + \\frac{1}{2} \\frac{\\mathrm{d}^2 P}{\\mathrm{d}y^2} (\\Delta y)^2$，两边同除以现价 $P$，凸度项前的系数根据数学定理严格为 **1/2**。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p style=\"text-wrap: wrap;\"><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_1_5_q7_3e9bee06.png\"/><br/></p>\n<p style=\"text-wrap: wrap;\">久期反应了资产价格对利率的敏感程度。利率上升时，资产和负债的价格都下降，其中久期更长的价格下降更多。</p>\n<p><br style=\"text-wrap: wrap;\"/></p>\n<p><br/></p>\n</div>",
    "slideRef": {
      "chapterTopic": "凸度 / 二阶泰勒价格近似 / 国债期货对冲比率",
      "slideDeck": "2.1 利率风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_1_5_8",
    "rawId": "406201322",
    "chapterId": "2.1.5",
    "chapterName": "2.1.5 利率凸性与对冲",
    "index": 8,
    "displayNum": "8",
    "type": "判断题",
    "score": 9.1,
    "stem": "利率下降时，资产和负债的价格都会上升，其中久期越长的上升越少。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span style='color: rgb(24, 30, 51); font-family: CXChineseQuote, -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Segoe UI\", Arial, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; text-wrap: wrap; background-color: rgb(255, 255, 255);'>利率下降时，资产和负债的价格都会上升，其中久期越长的上升越少。</span></p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch2_1_5_q8_3e9bee06.png"
    ],
    "images": [
      "images/ch2_1_5_q8_3e9bee06.png"
    ],
    "options": [
      {
        "label": "对",
        "text": "正确 (True)",
        "html": "<span>正确 (True)</span>"
      },
      {
        "label": "错",
        "text": "错误 (False)",
        "html": "<span>错误 (False)</span>"
      }
    ],
    "correctAnswer": "错",
    "correctAnswerList": [
      "错"
    ],
    "studentAnswer": "错",
    "studentScore": 9.1,
    "isCorrect": true,
    "analysis": "【考点解析】：\n判断：**正确**（标答：对）。\n原因：绝对额久期定义为 $DD = P \\cdot D^*$（亦记作 $D_{\\text{dollar}}$），代表利率每变动 1 个单位时债券市值的绝对变动额。由于投资组合现值等于各成分资产现值之和，线性求导后组合绝对额久期恰好等于各成分资产绝对额久期的代数和，具有完全的可加性。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p style=\"text-wrap: wrap;\"><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_1_5_q8_3e9bee06.png\"/><br/></p>\n<p style=\"text-wrap: wrap;\">久期反应了资产价格对利率的敏感程度。利率下降时，资产和负债的价格都上升，其中久期更长的价格上升更多。</p>\n<p><br/></p>\n</div>",
    "slideRef": {
      "chapterTopic": "凸度 / 二阶泰勒价格近似 / 国债期货对冲比率",
      "slideDeck": "2.1 利率风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_1_5_9",
    "rawId": "406201320",
    "chapterId": "2.1.5",
    "chapterName": "2.1.5 利率凸性与对冲",
    "index": 9,
    "displayNum": "9",
    "type": "填空题",
    "score": 9.1,
    "stem": "假设市场利率是每年3%，一个现金流在未来3年里，每年末会有100元收入，则该现金流的凸度是（     ）。（答案保留2位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span style='color: rgb(24, 30, 51); font-family: CXChineseQuote, -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Segoe UI\", Arial, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; text-wrap: wrap; background-color: rgb(255, 255, 255);'>假设市场利率是每年3%，一个现金流在未来3年里，每年末会有100元收入，则该现金流的凸度是（     ）。（答案保留2位小数）</span></p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch2_1_5_q9_7d84a783.png",
          "images/ch2_1_5_q9_574c4661.png"
    ],
    "images": [
      "images/ch2_1_5_q9_7d84a783.png",
      "images/ch2_1_5_q9_574c4661.png"
    ],
    "options": [],
    "correctAnswer": "第一空： 6.19",
    "correctAnswerList": [
      "6.19"
    ],
    "studentAnswer": "第一空： 6.19",
    "studentScore": 9.1,
    "isCorrect": true,
    "analysis": "【详细推导过程】：\n1. 国债期货久期对冲原理：组合总绝对额久期为 0 达到久期免疫：$P \\cdot D^*_P + N \\cdot F \\cdot D^*_F = 0$。\n2. 解得最优对冲合约份数：$N = -\\frac{P \\cdot D^*_P}{F \\cdot D^*_F}$。\n3. 式中负号代表反向操作：持有现货多头（$P > 0$）必须做空期货合约（$N < 0$）。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p style=\"text-wrap: wrap;\"><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_1_5_q9_7d84a783.png\"/><br/></p>\n<p style=\"text-wrap: wrap;\"><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_1_5_q9_574c4661.png\"/></p>\n<p><br/></p>\n</div>",
    "slideRef": {
      "chapterTopic": "凸度 / 二阶泰勒价格近似 / 国债期货对冲比率",
      "slideDeck": "2.1 利率风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_1_5_10",
    "rawId": "406201318",
    "chapterId": "2.1.5",
    "chapterName": "2.1.5 利率凸性与对冲",
    "index": 10,
    "displayNum": "10",
    "type": "填空题",
    "score": 9.1,
    "stem": "假设市场利率是每年3%，一个现金流在未来3年里，每年末会有100元收入，则该现金流当前的价值是（     ）。（答案保留2位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>假设市场利率是每年3%，一个现金流在未来3年里，每年末会有100元收入，则该现金流当前的价值是（     ）。<span style='color: rgb(24, 30, 51); font-family: CXChineseQuote, -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Segoe UI\", Arial, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; text-wrap: wrap; background-color: rgb(255, 255, 255);'>（答案保留2位小数）</span></p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch2_1_5_q10_7d84a783.png",
          "images/ch2_1_5_q10_574c4661.png"
    ],
    "images": [
      "images/ch2_1_5_q10_7d84a783.png",
      "images/ch2_1_5_q10_574c4661.png"
    ],
    "options": [],
    "correctAnswer": "第一空： 282.86",
    "correctAnswerList": [
      "282.86"
    ],
    "studentAnswer": "第一空： 282.86",
    "studentScore": 9.1,
    "isCorrect": true,
    "analysis": "【详细推导过程】：\n根据国债期货对冲比率模型 $N = -\\frac{P \\cdot D^*_P}{F \\cdot D^*_F}$，代入资产组合市值与期货合约各参数，求得对应的空头对冲合约份数。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_1_5_q10_7d84a783.png\"/><br/></p>\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_1_5_q10_574c4661.png\"/><br/></p>\n</div>",
    "slideRef": {
      "chapterTopic": "凸度 / 二阶泰勒价格近似 / 国债期货对冲比率",
      "slideDeck": "2.1 利率风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_1_5_11",
    "rawId": "406201319",
    "chapterId": "2.1.5",
    "chapterName": "2.1.5 利率凸性与对冲",
    "index": 11,
    "displayNum": "11",
    "type": "填空题",
    "score": 9.1,
    "stem": "假设市场利率是每年3%，一个现金流在未来3年里，每年末会有100元收入，则该现金流的久期是（     ）。（答案保留2位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span style='color: rgb(24, 30, 51); font-family: CXChineseQuote, -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Segoe UI\", Arial, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; text-wrap: wrap; background-color: rgb(255, 255, 255);'>假设市场利率是每年3%，一个现金流在未来3年里，每年末会有100元收入，则该现金流的久期是（     ）。（答案保留2位小数）</span></p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch2_1_5_q11_7d84a783.png",
          "images/ch2_1_5_q11_574c4661.png"
    ],
    "images": [
      "images/ch2_1_5_q11_7d84a783.png",
      "images/ch2_1_5_q11_574c4661.png"
    ],
    "options": [],
    "correctAnswer": "第一空： 1.98",
    "correctAnswerList": [
      "1.98"
    ],
    "studentAnswer": "第一空： 1.98",
    "studentScore": 9.1,
    "isCorrect": true,
    "analysis": "【详细推导过程】：\n代入国债期货对冲公式 $N = -\\frac{P \\cdot D^*_P}{F \\cdot D^*_F}$，计算实现资产负债久期缺口免疫所需的具体期货合约份数。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p style=\"text-wrap: wrap;\"><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_1_5_q11_7d84a783.png\"/><br/></p>\n<p style=\"text-wrap: wrap;\"><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_1_5_q11_574c4661.png\"/></p>\n<p><br/></p>\n</div>",
    "slideRef": {
      "chapterTopic": "凸度 / 二阶泰勒价格近似 / 国债期货对冲比率",
      "slideDeck": "2.1 利率风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_2_3_1",
    "rawId": "406201498",
    "chapterId": "2.2.3",
    "chapterName": "2.2.3 衍生品远期与期货",
    "index": 1,
    "displayNum": "1",
    "type": "填空题",
    "score": 33.3,
    "stem": "某基于指数的衍生品交易组合的delta是-2100，指数价格现在是1000，当指数价格增长到1005，交易组合的价值将会下降（     ）。The $\\Delta$ of a derivatives portfolio dependent on an index is −2,100. The index is currently 1,000. When the index increases to 1,005,the value of the portfolio will decrease (    ).",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>某基于指数的衍生品交易组合的delta是-2100，指数价格现在是1000，当指数价格增长到1005，交易组合的价值将会下降（     ）。</p>\n<p><br/>The delta of a derivatives portfolio dependent on an index is −2,100. The index is currently 1,000. When the index increases to 1,005, <span style=\"text-wrap: wrap;\">the value of the portfolio will decrease (    ). </span></p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [],
    "correctAnswer": "第一空：10500",
    "correctAnswerList": [
      "10500"
    ],
    "studentAnswer": "第一空： 10500",
    "studentScore": 33.3,
    "isCorrect": true,
    "analysis": "【考点解析】：\n远期合约与期货合约的核心机制区别：远期为场外交易（OTC）非标准化合约，到期集中交割结算；期货为交易所集中交易标准化合约，实行严格的每日无负债结算（逐日盯市制度）。",
    "analysisHtml": "",
    "slideRef": {
      "chapterTopic": "Delta / Vega / Rho 利率敏感性精确计算",
      "slideDeck": "2.2 衍生品风险管理（一）.pdf"
    }
  },
  {
    "id": "q_2_2_3_2",
    "rawId": "406201499",
    "chapterId": "2.2.3",
    "chapterName": "2.2.3 衍生品远期与期货",
    "index": 2,
    "displayNum": "2",
    "type": "填空题",
    "score": 33.3,
    "stem": "某基于汇率的衍生品交易组合的vega是200（每1%波动率变动）。当汇率从12%变为14%，组合的价值会增加（      ）。The $\\text{Vega}$ of a derivatives portfolio dependent on the dollar–sterling exchange rate is 200 (per %). In the volatility of the exchange rate from 12% to 14%,the vlaue of the portfolio will increase (       ).",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span style='color: rgb(24, 30, 51); font-family: CXChineseQuote, -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Segoe UI\", Arial, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; text-wrap: wrap; background-color: rgb(255, 255, 255);'>某基于汇率的衍生品交易组合的vega是200（每1%波动率变动）。当汇率从12%变为14%，组合的价值会增加（      ）。</span></p>\n<p><br/>The vega of a derivatives portfolio dependent on the dollar–sterling exchange rate is 200 (per %). In the volatility of the exchange rate from 12% to 14%, <span style=\"text-wrap: wrap;\"> the vlaue of the portfolio will increase (       ). </span></p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [],
    "correctAnswer": "第一空：400",
    "correctAnswerList": [
      "400"
    ],
    "studentAnswer": "第一空： 400",
    "studentScore": 33.3,
    "isCorrect": true,
    "analysis": "【考点解析】：\n无套利定价模型表明，支付已知红利率 $q$ 的资产远期价格为 $F_0 = S_0 e^{(r-q)T}$。市场实际远期价格若脱离该均衡值，套利者将通过现货与远期头寸对锁套利使价格迅速复归。",
    "analysisHtml": "",
    "slideRef": {
      "chapterTopic": "Delta / Vega / Rho 利率敏感性精确计算",
      "slideDeck": "2.2 衍生品风险管理（一）.pdf"
    }
  },
  {
    "id": "q_2_2_3_3",
    "rawId": "406201500",
    "chapterId": "2.2.3",
    "chapterName": "2.2.3 衍生品远期与期货",
    "index": 3,
    "displayNum": "3",
    "type": "填空题",
    "score": 10.0,
    "stem": "$\\rho$=15.1215说明无风险利率每增长一个百分点，期权价格增加（     ）。（以小数形式表达，答案保留4位小数）$\\rho$=8.9066说明无风险利率每增长一个百分点，期权价格增加（     ）。（以小数形式表达，答案保留4位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><br/><span class=\"newZy_TItle\" style='margin: 0px; padding: 0px; float: left; font-family: \"Microsoft Yahei\", Arial, Helvetica, sans-serif; text-wrap: wrap; background-color: rgb(255, 255, 255);'><span style=\"color: rgb(19, 27, 38);\">rho=15.1215说明无风险利率每增长一个百分点，期权价格增加（     ）。（以小数形式表达，答案保留4位小数）</span></span></p>\n<p style='margin-top: 0px; margin-bottom: 0px; padding: 0px; color: rgb(19, 27, 38); font-family: \"Microsoft Yahei\", Arial, Helvetica, sans-serif; text-wrap: wrap; background-color: rgb(255, 255, 255);'><br/></p>\n<p style='margin-top: 0px; margin-bottom: 0px; padding: 0px; color: rgb(19, 27, 38); font-family: \"Microsoft Yahei\", Arial, Helvetica, sans-serif; text-wrap: wrap; background-color: rgb(255, 255, 255);'>rho=8.9066说明无风险利率每增长一个百分点，期权价格增加（     ）。（<span style='color: rgb(19, 27, 38); font-family: \"Microsoft Yahei\", Arial, Helvetica, sans-serif; text-wrap: wrap; background-color: rgb(255, 255, 255);'>以小数形式表达，</span>答案保留4位小数）</p>\n<p><br/></p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [],
    "correctAnswer": "第一空：0.1512；第二空：0.0891",
    "correctAnswerList": [
      "0.1512",
      "0.0891"
    ],
    "studentAnswer": "第一空： 15.1215；第二空： 8.9066",
    "studentScore": 0.0,
    "isCorrect": false,
    "analysis": "【考点解析】：\n最优套期保值比率由最小方差模型决定：$h^* = \\rho \\frac{\\sigma_S}{\\sigma_F}$。基差 $Basis = S - F$，基差走强或走弱直接决定了套期保值者的最终有效盈亏。",
    "analysisHtml": "",
    "slideRef": {
      "chapterTopic": "Delta / Vega / Rho 利率敏感性精确计算",
      "slideDeck": "2.2 衍生品风险管理（一）.pdf"
    }
  },
  {
    "id": "q_2_2_5_1",
    "rawId": "406201515",
    "chapterId": "2.2.5",
    "chapterName": "2.2.5 期权策略与希腊字母",
    "index": 1,
    "displayNum": "1",
    "type": "多选题",
    "score": 7.1,
    "stem": "关于衍生品风险对冲，以下表述正确的有（       ）。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>关于衍生品风险对冲，以下表述正确的有（       ）。<br/></p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [
      {
        "label": "A",
        "text": "对于线性产品的对冲策略只需要进行一次，不需要经常调整",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  A、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   对于线性产品的对冲策略只需要进行一次，不需要经常调整\n  </p>\n </a>\n</li>"
      },
      {
        "label": "B",
        "text": "为了使delta中性，可以买入或卖出适当份额的标的资产",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  B、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   为了使delta中性，可以买入或卖出适当份额的标的资产\n   <br/>\n  </p>\n </a>\n</li>"
      },
      {
        "label": "C",
        "text": "为使gamma中性，必须买入或卖出适当份额的非线性产品",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  C、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   为使gamma中性，必须买入或卖出适当份额的非线性产品\n  </p>\n </a>\n</li>"
      },
      {
        "label": "D",
        "text": "为使gamma和vega同时中性，至少要引入两种不同的非线性产品",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  D、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   为使gamma和vega同时中性，至少要引入两种不同的非线性产品\n  </p>\n </a>\n</li>"
      }
    ],
    "correctAnswer": "ABCD",
    "correctAnswerList": [
      "A",
      "B",
      "C",
      "D"
    ],
    "studentAnswer": "ABCD",
    "studentScore": 7.1,
    "isCorrect": true,
    "analysis": "【考点解析】：\n牛市看涨期权差价组合（Bull Call Spread）：买入较低行权价看涨期权 + 卖出较高行权价看涨期权，以卖出权利金冲抵买入成本，最大收益与最大损失均被锁定。",
    "analysisHtml": "",
    "slideRef": {
      "chapterTopic": "期权差价组合 / Delta对冲 / Gamma与Vega联合中性",
      "slideDeck": "2.2 衍生品风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_2_5_2",
    "rawId": "406201513",
    "chapterId": "2.2.5",
    "chapterName": "2.2.5 期权策略与希腊字母",
    "index": 2,
    "displayNum": "2",
    "type": "多选题",
    "score": 7.1,
    "stem": "以下属于线性损益结构产品的有（      ）。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>以下属于线性损益结构产品的有（      ）。<br/></p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [
      {
        "label": "A",
        "text": "期货",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  A、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   期货\n  </p>\n </a>\n</li>"
      },
      {
        "label": "B",
        "text": "互换",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  B、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   互换\n  </p>\n </a>\n</li>"
      },
      {
        "label": "C",
        "text": "远期",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  C、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   远期\n  </p>\n </a>\n</li>"
      },
      {
        "label": "D",
        "text": "期权",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  D、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   期权\n  </p>\n </a>\n</li>"
      }
    ],
    "correctAnswer": "ABC",
    "correctAnswerList": [
      "A",
      "B",
      "C"
    ],
    "studentAnswer": "ABC",
    "studentScore": 7.1,
    "isCorrect": true,
    "analysis": "【考点解析】：\n熊市看跌期权差价组合（Bear Put Spread）：买入较高行权价看跌期权 + 卖出较低行权价看跌期权，适用于温和看跌行情，锁定有限损失与收益。",
    "analysisHtml": "",
    "slideRef": {
      "chapterTopic": "期权差价组合 / Delta对冲 / Gamma与Vega联合中性",
      "slideDeck": "2.2 衍生品风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_2_5_3",
    "rawId": "406201514",
    "chapterId": "2.2.5",
    "chapterName": "2.2.5 期权策略与希腊字母",
    "index": 3,
    "displayNum": "3",
    "type": "多选题",
    "score": 3.5,
    "stem": "以下对衍生品希腊值的定义，正确的有（      ）。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>以下对衍生品希腊值的定义，正确的有（      ）。<br/></p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [
      {
        "label": "A",
        "text": "rho是衍生品价格对无风险收益率的一阶导数",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  A、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   rho是衍生品价格对无风险收益率的一阶导数\n  </p>\n </a>\n</li>"
      },
      {
        "label": "B",
        "text": "gamma是delta对标的资产价格的一阶导数",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  B、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   <span style=\"text-wrap: wrap;\">\n    gamma是delta对标的资产价格的一阶导数\n   </span>\n  </p>\n </a>\n</li>"
      },
      {
        "label": "C",
        "text": "delta是衍生品价格对标的资产价格的一阶导数",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  C、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   delta是衍生品价格对标的资产价格的一阶导数\n  </p>\n </a>\n</li>"
      },
      {
        "label": "D",
        "text": "theta是衍生品价格对时间的一阶导数",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  D、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   theta是衍生品价格对时间的一阶导数\n  </p>\n </a>\n</li>"
      },
      {
        "label": "E",
        "text": "vega是衍生品价格对标的资产价格波动率的一阶导数",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  E、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   vega是衍生品价格对标的资产价格波动率的一阶导数\n   <br/>\n  </p>\n </a>\n</li>"
      }
    ],
    "correctAnswer": "ABCDE",
    "correctAnswerList": [
      "A",
      "B",
      "C",
      "D",
      "E"
    ],
    "studentAnswer": "ABCD",
    "studentScore": 3.5,
    "isCorrect": true,
    "analysis": "【考点解析】：\n期权 Delta 为 $\\Delta = \\frac{\\partial V}{\\partial S}$。看涨期权多头 $\\Delta_c \\in [0, 1]$，看跌期权多头 $\\Delta_p \\in [-1, 0]$。对冲 1 份 $\\Delta=0.6$ 的看涨期权多头，需做空 $0.6$ 份标的资产实现 Delta 中性。",
    "analysisHtml": "",
    "slideRef": {
      "chapterTopic": "期权差价组合 / Delta对冲 / Gamma与Vega联合中性",
      "slideDeck": "2.2 衍生品风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_2_5_4",
    "rawId": "406201516",
    "chapterId": "2.2.5",
    "chapterName": "2.2.5 期权策略与希腊字母",
    "index": 4,
    "displayNum": "4",
    "type": "多选题",
    "score": 7.1,
    "stem": "某期权产品的delta是0.4，说明（      ）。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span style=\"text-wrap: wrap;\">某期权产品的delta是0.4，说明（      ）。</span></p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [
      {
        "label": "A",
        "text": "当标的资产价格下降1元，期权价格会下降0.4元",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  A、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   <span style='font-family: CXChineseQuote, -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Segoe UI\", Arial, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; font-size: 12px; text-wrap: wrap; background-color: rgb(255, 255, 255);'>\n    当标的资产价格下降1元，期权价格会下降0.4元\n   </span>\n  </p>\n </a>\n</li>"
      },
      {
        "label": "B",
        "text": "当标的资产价格上涨1元，期权价格会下降0.4元",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  B、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   <span style='font-family: CXChineseQuote, -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Segoe UI\", Arial, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; font-size: 12px; text-wrap: wrap; background-color: rgb(255, 255, 255);'>\n    当标的资产价格上涨1元，期权价格会下降0.4元\n   </span>\n  </p>\n </a>\n</li>"
      },
      {
        "label": "C",
        "text": "当标的资产价格上涨1元，期权价格会上涨0.4元",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  C、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   <span style=\"text-wrap: wrap;\">\n    当标的资产价格上涨1元，期权价格会上涨0.4元\n   </span>\n  </p>\n </a>\n</li>"
      },
      {
        "label": "D",
        "text": "当标的资产价格下降1元，期权价格会上涨0.4元",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  D、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   <span style='font-family: CXChineseQuote, -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Segoe UI\", Arial, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; font-size: 12px; text-wrap: wrap; background-color: rgb(255, 255, 255);'>\n    当标的资产价格下降1元，期权价格会上涨0.4元\n   </span>\n  </p>\n </a>\n</li>"
      }
    ],
    "correctAnswer": "AC",
    "correctAnswerList": [
      "A",
      "C"
    ],
    "studentAnswer": "AC",
    "studentScore": 7.1,
    "isCorrect": true,
    "analysis": "【考点解析】：\n标的资产现货的 Gamma 恒为 0。要实现 Gamma 中性，必须引入具有非零 Gamma 的期权合约构建对冲头寸，联立 Delta 和 Gamma 方程组求解。",
    "analysisHtml": "",
    "slideRef": {
      "chapterTopic": "期权差价组合 / Delta对冲 / Gamma与Vega联合中性",
      "slideDeck": "2.2 衍生品风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_2_5_5",
    "rawId": "406201511",
    "chapterId": "2.2.5",
    "chapterName": "2.2.5 期权策略与希腊字母",
    "index": 5,
    "displayNum": "5",
    "type": "单选题",
    "score": 7.1,
    "stem": "某期权产品的delta是0.4，为规避标的资产价格波动风险，使delta为0，以下对冲策略正确的有（       ）。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span style=\"text-wrap: wrap;\"></span><span style=\"text-wrap: wrap;\">某期权产品的delta是0.4，为规避标的资产价格波动风险，使delta为0，以下对冲策略正确的有（       ）。</span></p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [
      {
        "label": "A",
        "text": "投资者卖出100单位期权时，同时买入40单位标的资产",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  A、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   <span style=\"text-wrap: wrap;\">\n    投资者卖出100单位期权时，同时买入40单位标的资产\n   </span>\n  </p>\n </a>\n</li>"
      },
      {
        "label": "B",
        "text": "投资者卖出100单位期权时，同时卖出40单位标的资产",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  B、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   投资者卖出100单位期权时，同时卖出40单位标的资产\n  </p>\n </a>\n</li>"
      },
      {
        "label": "C",
        "text": "投资者卖出40单位期权时，同时买入100单位标的资产",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  C、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   <span style=\"text-wrap: wrap;\">\n    投资者卖出40单位期权时，同时买入100单位标的资产\n   </span>\n  </p>\n </a>\n</li>"
      },
      {
        "label": "D",
        "text": "投资者卖出40单位期权时，同时卖出100单位标的资产",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  D、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   <span style=\"text-wrap: wrap;\">\n    投资者卖出40单位期权时，同时卖出100单位标的资产\n   </span>\n  </p>\n </a>\n</li>"
      }
    ],
    "correctAnswer": "A",
    "correctAnswerList": [
      "A"
    ],
    "studentAnswer": "A",
    "studentScore": 7.1,
    "isCorrect": true,
    "analysis": "Delta是卖出1份期权，需要买入的标的资产的份数。看涨期权Delta为正，即卖出期权需要买入相应份额的标的资产对冲。看跌期权Delta为负，即卖出期权需要卖空相应份额的标的资产对冲。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p>Delta是卖出1份期权，需要买入的标的资产的份数。</p>\n<p>看涨期权Delta为正，即卖出期权需要买入相应份额的标的资产对冲。</p>\n<p>看跌期权Delta为负，即卖出期权需要卖空相应份额的标的资产对冲。</p>\n<p><br/></p>\n</div>",
    "slideRef": {
      "chapterTopic": "期权差价组合 / Delta对冲 / Gamma与Vega联合中性",
      "slideDeck": "2.2 衍生品风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_2_5_6",
    "rawId": "406201512",
    "chapterId": "2.2.5",
    "chapterName": "2.2.5 期权策略与希腊字母",
    "index": 6,
    "displayNum": "6",
    "type": "单选题",
    "score": 7.1,
    "stem": "某期权产品的delta是0.4，为规避标的资产价格波动风险，使delta为0，以下对冲策略正确的有（       ）。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span style=\"text-wrap: wrap;\">某期权产品的delta是0.4，为规避标的资产价格波动风险，使delta为0，以下对冲策略正确的有（       ）。</span><span style=\"text-wrap: wrap;\"></span></p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [
      {
        "label": "A",
        "text": "投资者卖出40单位期权时，同时卖出100单位标的资产",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  A、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   <span style=\"text-wrap: wrap;\">\n    投资者卖出40单位期权时，同时卖出100单位标的资产\n   </span>\n  </p>\n </a>\n</li>"
      },
      {
        "label": "B",
        "text": "投资者卖出40单位期权时，同时买入100单位标的资产",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  B、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   <span style=\"text-wrap: wrap;\">\n    投资者卖出40单位期权时，同时买入100单位标的资产\n   </span>\n  </p>\n </a>\n</li>"
      },
      {
        "label": "C",
        "text": "投资者卖出100单位期权时，同时卖出40单位标的资产",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  C、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   <span style=\"text-wrap: wrap;\">\n    投资者卖出100单位期权时，同时卖出40单位标的资产\n   </span>\n  </p>\n </a>\n</li>"
      },
      {
        "label": "D",
        "text": "投资者卖出100单位期权时，同时买入40单位标的资产",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  D、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   <span style=\"text-wrap: wrap;\">\n    投资者卖出100单位期权时，同时买入40单位标的资产\n   </span>\n  </p>\n </a>\n</li>"
      }
    ],
    "correctAnswer": "D",
    "correctAnswerList": [
      "D"
    ],
    "studentAnswer": "D",
    "studentScore": 7.1,
    "isCorrect": true,
    "analysis": "Delta是卖出1份期权，需要买入的标的资产的份数。看涨期权Delta为正，即卖出期权需要买入相应份额的标的资产对冲。看跌期权Delta为负，即卖出期权需要卖空相应份额的标的资产对冲。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p>Delta是卖出1份期权，需要买入的标的资产的份数。</p>\n<p>看涨期权Delta为正，即卖出期权需要买入相应份额的标的资产对冲。</p>\n<p>看跌期权Delta为负，即卖出期权需要卖空相应份额的标的资产对冲。</p>\n<p><br style=\"text-wrap: wrap;\"/></p>\n<p><br/></p>\n</div>",
    "slideRef": {
      "chapterTopic": "期权差价组合 / Delta对冲 / Gamma与Vega联合中性",
      "slideDeck": "2.2 衍生品风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_2_5_7",
    "rawId": "406201510",
    "chapterId": "2.2.5",
    "chapterName": "2.2.5 期权策略与希腊字母",
    "index": 7,
    "displayNum": "7",
    "type": "单选题",
    "score": 7.1,
    "stem": "投资者以3000美元/盎司的价格卖出30盎司黄金远期，为了规避黄金价格上涨的风险，投资者可以同时（          ）。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>投资者以3000美元/盎司的价格卖出30盎司黄金远期，为了规避黄金价格上涨的风险，投资者可以同时（          ）。<br/></p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [
      {
        "label": "A",
        "text": "卖出35盎司黄金现货",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  A、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   卖出35盎司黄金现货\n  </p>\n </a>\n</li>"
      },
      {
        "label": "B",
        "text": "买入35盎司黄金现货",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  B、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   买入35盎司黄金现货\n  </p>\n </a>\n</li>"
      },
      {
        "label": "C",
        "text": "买入30盎司黄金现货",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  C、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   买入30盎司黄金现货\n  </p>\n </a>\n</li>"
      },
      {
        "label": "D",
        "text": "卖出30盎司黄金现货",
        "html": "<li class=\"clearfix\">\n <i class=\"fl\">\n  D、\n </i>\n <a aria-hidden=\"true\" class=\"fl\" style=\"word-break: break-all;text-decoration: none;\">\n  <p>\n   卖出30盎司黄金现货\n  </p>\n </a>\n</li>"
      }
    ],
    "correctAnswer": "C",
    "correctAnswerList": [
      "C"
    ],
    "studentAnswer": "C",
    "studentScore": 7.1,
    "isCorrect": true,
    "analysis": "本题出自《2.2.5 期权策略与希腊字母》。核心考点对应【期权差价组合 / Delta对冲 / Gamma与Vega联合中性】。请查阅右侧课件知识点联动与公式速查卡片！",
    "analysisHtml": "",
    "slideRef": {
      "chapterTopic": "期权差价组合 / Delta对冲 / Gamma与Vega联合中性",
      "slideDeck": "2.2 衍生品风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_2_5_8",
    "rawId": "406201521",
    "chapterId": "2.2.5",
    "chapterName": "2.2.5 期权策略与希腊字母",
    "index": 8,
    "displayNum": "8",
    "type": "判断题",
    "score": 7.1,
    "stem": "delta对冲是指计算投资组合现有delta，并引入新交易，使新交易的delta与原有delta相加为0，即使delta达到中性。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>delta对冲是指计算投资组合现有delta，并引入新交易，使新交易的delta与原有delta相加为0，即使delta达到中性。<br/></p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [
      {
        "label": "对",
        "text": "正确 (True)",
        "html": "<span>正确 (True)</span>"
      },
      {
        "label": "错",
        "text": "错误 (False)",
        "html": "<span>错误 (False)</span>"
      }
    ],
    "correctAnswer": "对",
    "correctAnswerList": [
      "对"
    ],
    "studentAnswer": "对",
    "studentScore": 7.1,
    "isCorrect": true,
    "analysis": "本题出自《2.2.5 期权策略与希腊字母》。核心考点对应【期权差价组合 / Delta对冲 / Gamma与Vega联合中性】。请查阅右侧课件知识点联动与公式速查卡片！",
    "analysisHtml": "",
    "slideRef": {
      "chapterTopic": "期权差价组合 / Delta对冲 / Gamma与Vega联合中性",
      "slideDeck": "2.2 衍生品风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_2_5_9",
    "rawId": "406201523",
    "chapterId": "2.2.5",
    "chapterName": "2.2.5 期权策略与希腊字母",
    "index": 9,
    "displayNum": "9",
    "type": "判断题",
    "score": 7.2,
    "stem": "一个投资组合的gamma为-5000，可以通过卖出5000份标的资产以使其gamma为0。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>一个投资组合的gamma为-5000，可以通过卖出5000份标的资产以使其gamma为0。<br/></p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [
      {
        "label": "对",
        "text": "正确 (True)",
        "html": "<span>正确 (True)</span>"
      },
      {
        "label": "错",
        "text": "错误 (False)",
        "html": "<span>错误 (False)</span>"
      }
    ],
    "correctAnswer": "错",
    "correctAnswerList": [
      "错"
    ],
    "studentAnswer": "错",
    "studentScore": 7.2,
    "isCorrect": true,
    "analysis": "标的资产的delta为1，gamma为0，因此要对冲gamma风险，必须引入一个非线性产品，而不能采用包括现货在内的线性产品进行对冲。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p>标的资产的delta为1，gamma为0，因此要对冲gamma风险，必须引入一个非线性产品，而不能采用包括现货在内的线性产品进行对冲。</p>\n</div>",
    "slideRef": {
      "chapterTopic": "期权差价组合 / Delta对冲 / Gamma与Vega联合中性",
      "slideDeck": "2.2 衍生品风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_2_5_10",
    "rawId": "406201519",
    "chapterId": "2.2.5",
    "chapterName": "2.2.5 期权策略与希腊字母",
    "index": 10,
    "displayNum": "10",
    "type": "判断题",
    "score": 7.2,
    "stem": "现货产品的delta为1，gamma为0。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>现货产品的delta为1，gamma为0。</p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [
      {
        "label": "对",
        "text": "正确 (True)",
        "html": "<span>正确 (True)</span>"
      },
      {
        "label": "错",
        "text": "错误 (False)",
        "html": "<span>错误 (False)</span>"
      }
    ],
    "correctAnswer": "对",
    "correctAnswerList": [
      "对"
    ],
    "studentAnswer": "对",
    "studentScore": 7.2,
    "isCorrect": true,
    "analysis": "本题出自《2.2.5 期权策略与希腊字母》。核心考点对应【期权差价组合 / Delta对冲 / Gamma与Vega联合中性】。请查阅右侧课件知识点联动与公式速查卡片！",
    "analysisHtml": "",
    "slideRef": {
      "chapterTopic": "期权差价组合 / Delta对冲 / Gamma与Vega联合中性",
      "slideDeck": "2.2 衍生品风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_2_5_11",
    "rawId": "406201520",
    "chapterId": "2.2.5",
    "chapterName": "2.2.5 期权策略与希腊字母",
    "index": 11,
    "displayNum": "11",
    "type": "判断题",
    "score": 7.2,
    "stem": "远期多头的delta为1，远期空头的delta为-1。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>远期多头的delta为1，远期空头的delta为-1。<br/></p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [
      {
        "label": "对",
        "text": "正确 (True)",
        "html": "<span>正确 (True)</span>"
      },
      {
        "label": "错",
        "text": "错误 (False)",
        "html": "<span>错误 (False)</span>"
      }
    ],
    "correctAnswer": "对",
    "correctAnswerList": [
      "对"
    ],
    "studentAnswer": "对",
    "studentScore": 7.2,
    "isCorrect": true,
    "analysis": "本题出自《2.2.5 期权策略与希腊字母》。核心考点对应【期权差价组合 / Delta对冲 / Gamma与Vega联合中性】。请查阅右侧课件知识点联动与公式速查卡片！",
    "analysisHtml": "",
    "slideRef": {
      "chapterTopic": "期权差价组合 / Delta对冲 / Gamma与Vega联合中性",
      "slideDeck": "2.2 衍生品风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_2_5_12",
    "rawId": "406201522",
    "chapterId": "2.2.5",
    "chapterName": "2.2.5 期权策略与希腊字母",
    "index": 12,
    "displayNum": "12",
    "type": "判断题",
    "score": 7.2,
    "stem": "期权的delta对冲一旦完成，不需要随时调整，属于“保完即忘”策略。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>期权的delta对冲一旦完成，不需要随时调整，属于“保完即忘”策略。<br/></p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [
      {
        "label": "对",
        "text": "正确 (True)",
        "html": "<span>正确 (True)</span>"
      },
      {
        "label": "错",
        "text": "错误 (False)",
        "html": "<span>错误 (False)</span>"
      }
    ],
    "correctAnswer": "错",
    "correctAnswerList": [
      "错"
    ],
    "studentAnswer": "错",
    "studentScore": 7.2,
    "isCorrect": true,
    "analysis": "线性产品的delta对冲一旦完成，不需要随时调整，属于“保完即忘”策略。期权属于非线性产品，当标的资产价格发生变化，delta也会随之变化，因此需要随时调整投资组合以使delta保持中性。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p>线性产品<span style=\"text-wrap: wrap;\">的delta对冲一旦完成，不需要随时调整，属于“保完即忘”策略。</span></p>\n<p><span style=\"text-wrap: wrap;\">期权属于非线性产品，当标的资产价格发生变化，delta也会随之变化，因此需要随时调整投资组合以使delta保持中性。</span></p>\n</div>",
    "slideRef": {
      "chapterTopic": "期权差价组合 / Delta对冲 / Gamma与Vega联合中性",
      "slideDeck": "2.2 衍生品风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_2_5_13",
    "rawId": "406201518",
    "chapterId": "2.2.5",
    "chapterName": "2.2.5 期权策略与希腊字母",
    "index": 13,
    "displayNum": "13",
    "type": "填空题",
    "score": 7.2,
    "stem": "一个投资组合的gamma是-1000，vega是-2000，正在交易的一种期权产品gamma是0.5，vega是2（期权1），另一种期权产品gamma是0.8，vega是1.2（期权二），应分别购买（    ）份期权一和（    ）份期权二以使gamma和vega同时实现中性。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>一个投资组合的gamma是-1000，vega是-2000，正在交易的一种期权产品gamma是0.5，vega是2（期权1），另一种期权产品gamma是0.8，vega是1.2（期权二），应分别购买（    ）份期权一和（    ）份期权二以使gamma和vega同时实现中性。<br/></p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [],
    "correctAnswer": "第一空： 400；第二空： 1000",
    "correctAnswerList": [
      "400",
      "1000"
    ],
    "studentAnswer": "第一空： 400；第二空： 1000",
    "studentScore": 7.2,
    "isCorrect": true,
    "analysis": "本题出自《2.2.5 期权策略与希腊字母》。核心考点对应【期权差价组合 / Delta对冲 / Gamma与Vega联合中性】。请查阅右侧课件知识点联动与公式速查卡片！",
    "analysisHtml": "",
    "slideRef": {
      "chapterTopic": "期权差价组合 / Delta对冲 / Gamma与Vega联合中性",
      "slideDeck": "2.2 衍生品风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_2_5_14",
    "rawId": "406201517",
    "chapterId": "2.2.5",
    "chapterName": "2.2.5 期权策略与希腊字母",
    "index": 14,
    "displayNum": "14",
    "type": "填空题",
    "score": 7.2,
    "stem": "一个Delta中性的投资组合Gamma为-1000，另一个正在交易的期权产品Gamma为0.5，可以购买（    ）份该期权以使投资组合实现Gamma中性。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>一个Delta中性的投资组合Gamma为-1000，另一个正在交易的期权产品Gamma为0.5，可以购买（    ）份该期权以使投资组合实现Gamma中性。</p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [],
    "correctAnswer": "第一空： 2000",
    "correctAnswerList": [
      "2000"
    ],
    "studentAnswer": "第一空： 2000",
    "studentScore": 7.2,
    "isCorrect": true,
    "analysis": "本题出自《2.2.5 期权策略与希腊字母》。核心考点对应【期权差价组合 / Delta对冲 / Gamma与Vega联合中性】。请查阅右侧课件知识点联动与公式速查卡片！",
    "analysisHtml": "",
    "slideRef": {
      "chapterTopic": "期权差价组合 / Delta对冲 / Gamma与Vega联合中性",
      "slideDeck": "2.2 衍生品风险管理（二）.pdf"
    }
  },
  {
    "id": "q_2_3_4_1",
    "rawId": "406201404",
    "chapterId": "2.3.4",
    "chapterName": "2.3.4 VaR与预期亏损",
    "index": 1,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "假设某股票的初始价值是100元。日简单收益率服从平均值为10%，标准差为20%的正态分布。请分别在95%和99%的置信水平上，计算日VaR，即在95%的可能下股价损失不会超过（       ）元，在99%的可能下股价损失不会超过（      ）元。（答案保留两位小数）（标准正态分布0.01，0.05，0.95，0.99分位数分别为-2.3263，-1.6449，1.6449，2.3263）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>假设某股票的初始价值是100元。日简单收益率服从平均值为10%，标准差为20%的正态分布。请分别在95%和99%的置信水平上，计算日VaR，即在95%的可能下股价损失不会超过（       ）元，在99%的可能下股价损失不会超过（      ）元。（答案保留两位小数）</p>\n<p>（标准正态分布0.01，0.05，0.95，0.99分位数分别为-2.3263，-1.6449，1.6449，2.3263）</p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch2_3_4_q1_7eb3d622.png"
    ],
    "images": [
      "images/ch2_3_4_q1_7eb3d622.png"
    ],
    "options": [],
    "correctAnswer": "第一空： 22.90；第二空： 36.53",
    "correctAnswerList": [
      "22.90",
      "36.53"
    ],
    "studentAnswer": "第一空： 32.90；第二空： 46.53",
    "studentScore": 0.0,
    "isCorrect": false,
    "analysis": "【详细推导过程】：\n正态分布 VaR 公式：$VaR_{\\alpha} = Z_{\\alpha} \\sigma_P \\sqrt{\\Delta t}$。99% 置信度对应 $Z_{0.99} = 2.33$；97.5% 对应 $Z_{0.975} = 1.96$。将资金规模与日收益波动率代入即可精确得出最大期望损失。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p>mu=0.1,sigma=0.2,标准正态分布在alpha=0.05时的分位数为-1.6449，在alpha=0.01时的分位数为-2.3263，则VaR95=0.1-0.2*1.6449=-0.22897，VaR99=0.1-0.2*2.3263=-0.36527。初始价值是100的情况下，对应损失分别为22.90和36.53</p>\n<p><br/></p>\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_3_4_q1_7eb3d622.png\"/><br/></p>\n<p>t = 1</p>\n<p>mu_t = mu*t</p>\n<p>sigma_t = sigma*(t**0.5)</p>\n<p><br/></p>\n<p>from scipy import stats</p>\n<p>VaR1 = -s0*stats.norm(mu_t,sigma_t).ppf(1-c1)</p>\n<p>VaR2 = -s0*stats.norm(mu_t,sigma_t).ppf(1-c2)</p>\n<p><br/></p>\n<p>print('%.2f;%.2f;'%(VaR1, VaR2))</p>\n<p><br/></p>\n</div>",
    "slideRef": {
      "chapterTopic": "正态分布 VaR / 投资组合协方差 / ES 一致性风险测度",
      "slideDeck": "2.3 在险价值和预期亏损.pptx"
    }
  },
  {
    "id": "q_2_3_4_2",
    "rawId": "406201405",
    "chapterId": "2.3.4",
    "chapterName": "2.3.4 VaR与预期亏损",
    "index": 2,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "假设某股票的初始价值是100元。日简单收益率服从平均值为2%，标准差为15%的正态分布。请分别在95%和99%的置信水平上，计算日VaR，即在95%的可能下股价损失不会超过（       ）元，在99%的可能下股价损失不会超过（      ）元。（答案保留两位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>假设某股票的初始价值是100元。日简单收益率服从平均值为2%，标准差为15%的正态分布。请分别在95%和99%的置信水平上，计算日VaR，即在95%的可能下股价损失不会超过（       ）元，在99%的可能下股价损失不会超过（      ）元。（答案保留两位小数）</p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [],
    "correctAnswer": "第一空： 22.67；第二空： 32.90;32.89",
    "correctAnswerList": [
      "22.67",
      "32.90;32.89"
    ],
    "studentAnswer": "第一空： 24.67；第二空： 34.89",
    "studentScore": 0.0,
    "isCorrect": false,
    "analysis": "【考点解析】：\n条件在险价值（ES）度量损失超过 VaR 门槛后的条件平均值：$ES = E[L \\mid L > VaR]$。ES 满足次可加性公理，是一致性风险测度，能有效捕捉尾部肥尾风险。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p>同上题。</p>\n</div>",
    "slideRef": {
      "chapterTopic": "正态分布 VaR / 投资组合协方差 / ES 一致性风险测度",
      "slideDeck": "2.3 在险价值和预期亏损.pptx"
    }
  },
  {
    "id": "q_2_3_4_3",
    "rawId": "406201296",
    "chapterId": "2.3.4",
    "chapterName": "2.3.4 VaR与预期亏损",
    "index": 3,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "考虑含A,B两种股票的投资组合。这两种股票不相关且收益率的均值为0，A和B分别有5%和12%的波动性。该投资组合有200万投资于A，100万投资于B。则95%置信水平下的组合VaR为（      ）万元。（答案保留2位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>考虑含A,B两种股票的投资组合。这两种股票不相关且收益率的均值为0，A和B分别有5%和12%的波动性。该投资组合有200万投资于A，100万投资于B。则95%置信水平下的组合VaR为（      ）万元。（答案保留2位小数）</p>\n<p><br/></p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch2_3_4_q3_177f3fd9.png",
          "images/ch2_3_4_q3_a92d85ed.png"
    ],
    "images": [
      "images/ch2_3_4_q3_177f3fd9.png",
      "images/ch2_3_4_q3_a92d85ed.png"
    ],
    "options": [],
    "correctAnswer": "第一空： 25.69",
    "correctAnswerList": [
      "25.69"
    ],
    "studentAnswer": "第一空： 25.69",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "【详细推导过程】：\n组合方差 $\\sigma_P^2 = w_1^2 \\sigma_1^2 + w_2^2 \\sigma_2^2 + 2 w_1 w_2 \\rho \\sigma_1 \\sigma_2$。只要相关系数 $\\rho < 1$，分散化效应就能显著压低资产组合整体的风险暴露。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p>投资组合的mu=0，sigma=（0.05^2*(2/3)^2+0.12^2*(1/3)^2)^0.5=0.05，VaR=-300*(0-1.6449*0.05)=25.69</p>\n<p><br/></p>\n<p>计算出组合收益率的均值和方差，然后计算组合收益率的5%分位数，乘以组合初始价值即可。</p>\n<p>组合的均值</p>\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_3_4_q3_177f3fd9.png\"/><br/></p>\n<p>组合的方差</p>\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_3_4_q3_a92d85ed.png\"/><br/></p>\n<p>其中</p>\n<p>cov(A,B)=rho(A,B)*sigmaA*sigmaB</p>\n<p>W为权重矩阵</p>\n</div>",
    "slideRef": {
      "chapterTopic": "正态分布 VaR / 投资组合协方差 / ES 一致性风险测度",
      "slideDeck": "2.3 在险价值和预期亏损.pptx"
    }
  },
  {
    "id": "q_2_3_4_4",
    "rawId": "406201297",
    "chapterId": "2.3.4",
    "chapterName": "2.3.4 VaR与预期亏损",
    "index": 4,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "考虑含A,B两种股票的投资组合。这两种股票的相关系数为0.3，收益率的均值分别为1%和2%，A和B分别有5%和12%的波动性。该投资组合有200万投资于A，100万投资于B。则95%置信水平下的组合VaR为（      ）万元。（答案保留2位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>考虑含A,B两种股票的投资组合。这两种股票的相关系数为0.3，收益率的均值分别为1%和2%，A和B分别有5%和12%的波动性。该投资组合有200万投资于A，100万投资于B。则95%置信水平下的组合VaR为（      ）万元。（答案保留2位小数）<br/></p>\n<p><br style=\"white-space: normal;\"/></p>\n<p><br/></p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [],
    "correctAnswer": "第一空： 25.24",
    "correctAnswerList": [
      "25.24"
    ],
    "studentAnswer": "第一空： 25.24",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "投资组合的mu=0.01*2/3+0.02/3=0.013333，sigma=（0.05^2*(2/3)^2+0.12^2*(1/3)^2+2*(2/3)*(1/3)*0.05*0.12*0.3)^0.5=0.05925，VaR=-300*(0.013333-1.6449*0.05925)=25.24",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p><span style=\"text-wrap: wrap;\">投资组合的mu=0.01*2/3+0.02/3=0.013333，</span></p>\n<p><span style=\"text-wrap: wrap;\">sigma=（0.05^2*(2/3)^2+0.12^2*(1/3)^2+2*(2/3)*(1/3)*0.05*0.12*0.3)^0.5=0.05925，</span></p>\n<p><span style=\"text-wrap: wrap;\">VaR=-300*(0.013333-1.6449*0.05925)=25.24</span></p>\n</div>",
    "slideRef": {
      "chapterTopic": "正态分布 VaR / 投资组合协方差 / ES 一致性风险测度",
      "slideDeck": "2.3 在险价值和预期亏损.pptx"
    }
  },
  {
    "id": "q_2_3_4_5",
    "rawId": "406201300",
    "chapterId": "2.3.4",
    "chapterName": "2.3.4 VaR与预期亏损",
    "index": 5,
    "displayNum": "1",
    "type": "填空题",
    "score": 100.0,
    "stem": "A bank has two $10 million one-year loans. Possible outcomes are as followsOutcome                                                ProbabilityNeither loan defaults                                          97.5%Loan 1 defaults; Loan 2 does not default          1.25%Loan 2 defaults; Loan 1 does not default          1.25%Both loans default                                                 0%If a default occurs, losses between 0% and 100% are equally likely. If a loan does not default, a profit of 0.2 million is made.The 99% VaR of each project is (     )million;The expected shortfall of each project is (     )million;The 99% VaR for the portfolio is (      )million;The expected shortfall for the portfolio is (      )million.一家银行有两笔1000万美元的一年期贷款，可能的违约结果如下：结果                                  可能性两笔贷款都不违约                               97.5%贷款1违约，贷款2不违约                    1.25%贷款2违约，贷款1不违约                    1.25%两笔贷款都违约                                       0%如果发生了一笔违约，损失率在0%和100%之间的概率相等。如果一笔贷款不违约，会产生20万美元的利润。那么每个贷款项目的99%VaR是（    ）百万美元；每个贷款项目的预期损失是（    ）百万美元；投资组合的99%VaR是（     ）百万美元；投资组合的预期损失是（     ）百万美元。（答案保留1位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>A bank has two $10 million one-year loans. Possible outcomes are as follows<br/></p>\n<p>          Outcome                                                Probability</p>\n<p> Neither loan defaults                                          97.5%</p>\n<p> Loan 1 defaults; Loan 2 does not default          1.25%</p>\n<p> Loan 2 defaults; Loan 1 does not default          1.25%</p>\n<p> Both loans default                                                 0%</p>\n<p>If a default occurs, losses between 0% and 100% are equally likely. If a loan does not default, a profit of 0.2 million is made.</p>\n<p>The 99% VaR of each project is (     )million;</p>\n<p>The expected shortfall of each project is (     )<span style=\"text-wrap: wrap;\">million</span>;</p>\n<p>The 99% VaR for the portfolio is (      )<span style=\"text-wrap: wrap;\">million</span>;</p>\n<p>The expected shortfall for the portfolio is (      )<span style=\"text-wrap: wrap;\">million</span>.</p>\n<p><br/></p>\n<p>一家银行有两笔1000万美元的一年期贷款，可能的违约结果如下：<br/></p>\n<p>                 结果                                  可能性</p>\n<p>两笔贷款都不违约                               97.5%</p>\n<p>贷款1违约，贷款2不违约                    1.25%</p>\n<p>贷款2违约，贷款1不违约                    1.25%</p>\n<p>两笔贷款都违约                                       0%</p>\n<p>如果发生了一笔违约，损失率在0%和100%之间的概率相等。如果一笔贷款不违约，会产生20万美元的利润。那么</p>\n<p>每个贷款项目的99%VaR是（    ）百万美元；</p>\n<p>每个贷款项目的预期损失是（    ）百万美元；</p>\n<p>投资组合的99%VaR是（     ）百万美元；</p>\n<p>投资组合的预期损失是（     ）百万美元。</p>\n<p>（答案保留1位小数）</p>\n<p><br/></p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch2_3_4_q5_7843df86.jpg"
    ],
    "images": [
      "images/ch2_3_4_q5_7843df86.jpg"
    ],
    "options": [],
    "correctAnswer": "第一空： 2.0；第二空： 6.0；第三空： 5.8；第四空： 7.8",
    "correctAnswerList": [
      "2.0",
      "6.0",
      "5.8",
      "7.8"
    ],
    "studentAnswer": "第一空： 2.0；第二空： 6.0；第三空： 5.8；第四空： 7.8",
    "studentScore": 100.0,
    "isCorrect": true,
    "analysis": "以百万美元为计量单位单一贷款有98.75%的概率损失为-0.2（收益20万美元），剩余1.25%的可能性在0~10之间均匀分布（损失0至1000万美元）。因此，单一贷款损失金额的99%分位数位于0~10的1/5处（（1.25%-1%）/1.25%），即99%VaR为2百万美元。99%-98.75%=0.25%，0.25/1.25=1/5，VaR=2million。ES是尾部的均值，即2~10的均值，由于这一段服从均匀分布，因此2~10的均值为6。两项贷款有97.5%的概率损失为0.4（收益40万美元），剩余2.5%的概率在-0.2~9.8之间均匀分布（一项贷款违约，损失0至1000万美元，另一项贷款收益20万美元）。因此，两项贷款损失金额的99%分位数位于-0.2~9.8的3/5处（（2.5%-1%）/2.5%），即99%VaR为5.8万美元99%-97.5%=2.5%，1.5/2.5=3/5，VaR=5.8millionES是尾部的均值，即5.8~9.8的均值，由于这一段服从均匀分布，因此5.8~9.8的均值为7.8。VaR5.8>2+2ES7.8<6+6说明用VaR作为风险度量，不能体现风险汇聚的作用，即两项贷款共同的风险本应小于各自风险之和，但是用VaR度量的结果正好相反。用ES作为风险度量，则体现出风险汇聚的作用。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p>以百万美元为计量单位</p>\n<p><br/></p>\n<p>单一贷款有98.75%的概率损失为-0.2（收益20万美元），剩余1.25%的可能性在0~10之间均匀分布（损失0至1000万美元）。</p>\n<p>因此，单一贷款损失金额的99%分位数位于0~10的1/5处（（1.25%-1%）/1.25%），即99%VaR为2百万美元。</p>\n<p>99%-98.75%=0.25%，0.25/1.25=1/5，VaR=2million。</p>\n<p>ES是尾部的均值，即2~10的均值，由于这一段服从均匀分布，因此2~10的均值为6。</p>\n<p><br/></p>\n<p>两项贷款有97.5%的概率损失为0.4（收益40万美元），剩余2.5%的概率在-0.2~9.8之间均匀分布（一项贷款违约，损失0至1000万美元，另一项贷款收益20万美元）。</p>\n<p>因此，两项贷款损失金额的99%分位数位于-0.2~9.8的3/5处（（2.5%-1%）/2.5%），即99%VaR为5.8万美元</p>\n<p>99%-97.5%=2.5%，1.5/2.5=3/5，VaR=5.8million</p>\n<p>ES是尾部的均值，即5.8~9.8的均值，由于这一段服从均匀分布，因此5.8~9.8的均值为7.8。</p>\n<p><br/></p>\n<p>VaR</p>\n<p>5.8&gt;2+2</p>\n<p><br/></p>\n<p>ES</p>\n<p>7.8&lt;6+6</p>\n<p><br/></p>\n<p>说明用VaR作为风险度量，不能体现风险汇聚的作用，即两项贷款共同的风险本应小于各自风险之和，但是用VaR度量的结果正好相反。</p>\n<p><br/></p>\n<p>用ES作为风险度量，则体现出风险汇聚的作用。</p>\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_3_4_q5_7843df86.jpg\"/><br/></p>\n</div>",
    "slideRef": {
      "chapterTopic": "正态分布 VaR / 投资组合协方差 / ES 一致性风险测度",
      "slideDeck": "2.3 在险价值和预期亏损.pptx"
    }
  },
  {
    "id": "q_3_4_1",
    "rawId": "406201477",
    "chapterId": "3.4",
    "chapterName": "3.4 信用风险与违约率",
    "index": 1,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "一家中型对冲基金的风险分析师正在评估交易头寸的信用风险：• 该基金专门投资公司债，一项新交易是价值100亿日元的b级长期债券；• 分析师估计，b级债券在第1年的条件违约概率为7.7%；第2年7.1%；第 3年是6.6%；第4年是6.1%。• 问：该债券前3年存活且第4年违约的概率是多少？（答案以百分数形式表示，百分号前保留两位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>一家中型对冲基金的风险分析师正在评估交易头寸的信用风险： </p><p>• 该基金专门投资公司债，一项新交易是价值100亿日元的b级长期债券； </p><p>• 分析师估计，b级债券在第1年的条件违约概率为7.7%；第2年7.1%；第 3年是6.6%；第4年是6.1%。</p><p>• 问：该债券前3年存活且第4年违约的概率是多少？ </p><p>（答案以百分数形式表示，百分号前保留两位小数）</p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch3_4_q1_8efa3ebb.png"
    ],
    "images": [
      "images/ch3_4_q1_8efa3ebb.png"
    ],
    "options": [],
    "correctAnswer": "第一空： 4.89%",
    "correctAnswerList": [
      "4.89%"
    ],
    "studentAnswer": "第一空： 4.89%",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "【详细推导过程】：\n1. 累积违约率 $Q_t$：第 $t$ 年底前发生违约的概率。\n2. 边际违约率 $d_t$：在第 $t$ 年内发生的违约概率：$d_t = Q_t - Q_{t-1}$。\n3. 条件违约率 $q_t$：在存活到第 $t-1$ 年末的条件下，第 $t$ 年内违约的条件概率：$q_t = \\frac{Q_t - Q_{t-1}}{1 - Q_{t-1}}$。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch3_4_q1_8efa3ebb.png\"/><br/></p>\n</div>",
    "slideRef": {
      "chapterTopic": "穆迪累积违约率表 / 边际违约率递推 / 债券利差倒推 / CDS溢差",
      "slideDeck": "3.1~3.3 信用风险全套课件"
    }
  },
  {
    "id": "q_3_4_2",
    "rawId": "406201478",
    "chapterId": "3.4",
    "chapterName": "3.4 信用风险与违约率",
    "index": 2,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "根据穆迪各级别加权平均累积违约率表（1983-2020），A级债券前三年的累积违约概率分别为0.05%,0.16%,0.34%，这说明A级债券在前三年的条件违约概率分别是多少？前三年的年化违约率是多少？（答案以百分数形式表示，百分号前保留2位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>根据穆迪各级别加权平均累积违约率表（1983-2020），A级债券前三年的累积违约概率分别为0.05%,0.16%,0.34%，这说明A级债券在前三年的条件违约概率分别是多少？前三年的年化违约率是多少？（答案以百分数形式表示，百分号前保留2位小数）</p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch3_4_q2_040e0ae5.png",
          "images/ch3_4_q2_93343261.png"
    ],
    "images": [
      "images/ch3_4_q2_040e0ae5.png",
      "images/ch3_4_q2_93343261.png"
    ],
    "options": [],
    "correctAnswer": "第一空： 0.05%；第二空： 0.11%；第三空： 0.18%；第四空： 0.11%",
    "correctAnswerList": [
      "0.05%",
      "0.11%",
      "0.18%",
      "0.11%"
    ],
    "studentAnswer": "第一空： 0.05%；第二空： 0.11%；第三空： 0.18%；第四空： 0.11%",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "本题出自《3.4 信用风险与违约率》。核心考点对应【穆迪累积违约率表 / 边际违约率递推 / 债券利差倒推 / CDS溢差】。请查阅右侧课件知识点联动与公式速查卡片！",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch3_4_q2_040e0ae5.png\"/></p>\n<p><br/></p>\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch3_4_q2_93343261.png\"/><br/></p>\n</div>",
    "slideRef": {
      "chapterTopic": "穆迪累积违约率表 / 边际违约率递推 / 债券利差倒推 / CDS溢差",
      "slideDeck": "3.1~3.3 信用风险全套课件"
    }
  },
  {
    "id": "q_3_4_3",
    "rawId": "406201479",
    "chapterId": "3.4",
    "chapterName": "3.4 信用风险与违约率",
    "index": 3,
    "displayNum": "3",
    "type": "填空题",
    "score": 10.0,
    "stem": "根据穆迪各级别加权平均累积违约率表（1983-2020），Ba级债券前三年的累积违约概率分别为0.83%,2.35%,4.14%，这说明Ba级债券在前三年的条件违约概率分别是多少？前三年的年化违约率是多少？（答案以百分数形式表示，百分号前保留2位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span style=\"color: rgb(24, 30, 51); font-family: PingFangSC, 微软雅黑, 黑体, Arial, Helvetica, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255);\">根据穆迪各级别加权平均累积违约率表（1983-2020），Ba级债券前三年的累积违约概率分别为0.83%,2.35%,4.14%，这说明Ba级债券在前三年的条件违约概率分别是多少？前三年的年化违约率是多少？（答案以百分数形式表示，百分号前保留2位小数）</span></p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [],
    "correctAnswer": "第一空： 0.83%；第二空： 1.53%；第三空： 1.83%；第四空： 1.40%",
    "correctAnswerList": [
      "0.83%",
      "1.53%",
      "1.83%",
      "1.40%"
    ],
    "studentAnswer": "第一空： 0.83%；第二空： 1.53%；第三空： 1.83%；第四空： 1.40%",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "本题出自《3.4 信用风险与违约率》。核心考点对应【穆迪累积违约率表 / 边际违约率递推 / 债券利差倒推 / CDS溢差】。请查阅右侧课件知识点联动与公式速查卡片！",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p>同上题。</p>\n</div>",
    "slideRef": {
      "chapterTopic": "穆迪累积违约率表 / 边际违约率递推 / 债券利差倒推 / CDS溢差",
      "slideDeck": "3.1~3.3 信用风险全套课件"
    }
  },
  {
    "id": "q_3_4_4",
    "rawId": "406201503",
    "chapterId": "3.4",
    "chapterName": "3.4 信用风险与违约率",
    "index": 4,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "A公司发行面值为100万美元、违约回收率为0%的1年期零息债券，该债券目前的交易价格为面值的80%。假设无风险利率为每年5%，那么根据债券收益率溢差估计的该债券1年末的违约概率是多少？（答案用百分数表示，百分号前保留整数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>A公司发行面值为100万美元、违约回收率为0%的1年期零息债券，该债券目前的交易价格为面值的80%。假设无风险利率为每年5%，那么根据债券收益率溢差估计的该债券1年末的违约概率是多少？（答案用百分数表示，百分号前保留整数）</p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch3_4_q4_d072e9f7.png"
    ],
    "images": [
      "images/ch3_4_q4_d072e9f7.png"
    ],
    "options": [],
    "correctAnswer": "第一空： 16%",
    "correctAnswerList": [
      "16%"
    ],
    "studentAnswer": "第一空： 16%",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "【详细推导过程】：\n基于债券信用利差倒推公式：$PD \\approx \\frac{s}{1 - R}$，其中 $s$ 为信用利差，$R$ 为违约回收率，$1-R$ 为违约损失率（LGD）。代入已知利差与回收率直接求解违约概率。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch3_4_q4_d072e9f7.png\"/><br/></p>\n</div>",
    "slideRef": {
      "chapterTopic": "穆迪累积违约率表 / 边际违约率递推 / 债券利差倒推 / CDS溢差",
      "slideDeck": "3.1~3.3 信用风险全套课件"
    }
  },
  {
    "id": "q_3_4_5",
    "rawId": "406201504",
    "chapterId": "3.4",
    "chapterName": "3.4 信用风险与违约率",
    "index": 5,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "A公司发行面值为100万美元、违约回收率为50%的1年期零息债券，该债券目前的交易价格为面值的60%。假设无风险利率为每年5%，那么根据债券收益率溢差估计的该债券1年末的违约概率是多少？（答案用百分数表示，百分号前保留整数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>A公司发行面值为100万美元、违约回收率为50%的1年期零息债券，该债券目前的交易价格为面值的60%。假设无风险利率为每年5%，那么根据债券收益率溢差估计的该债券1年末的违约概率是多少？（答案用百分数表示，百分号前保留整数）</p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [],
    "correctAnswer": "第一空： 74%",
    "correctAnswerList": [
      "74%"
    ],
    "studentAnswer": "第一空： 74%",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "【考点解析】：\n信用违约互换（CDS）定价平衡式：CDS 每年保费溢差现值等于违约发生时的预期净损失现值，简化模型下 $s \\approx \\lambda (1 - R)$，其中 $\\lambda$ 为年违约强度。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p>同上题。</p>\n</div>",
    "slideRef": {
      "chapterTopic": "穆迪累积违约率表 / 边际违约率递推 / 债券利差倒推 / CDS溢差",
      "slideDeck": "3.1~3.3 信用风险全套课件"
    }
  },
  {
    "id": "q_3_4_6",
    "rawId": "406201406",
    "chapterId": "3.4",
    "chapterName": "3.4 信用风险与违约率",
    "index": 6,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "在5年以内所有年份中，某信用违约互换（CDS）每年的溢差s均为325个基点。该CDS的参考实体的违约损失率LGD为40%，计算参考实体在未来两年内某个时候违约的概率（累积违约概率）。（答案用百分数表示，百分号前保留整数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>在5年以内所有年份中，某信用违约互换（CDS）每年的溢差s均为325个基点。该CDS的参考实体的违约损失率LGD为40%，计算参考实体在未来两年内某个时候违约的概率（累积违约概率）。（答案用百分数表示，百分号前保留整数）</p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch3_4_q6_87b17499.png"
    ],
    "images": [
      "images/ch3_4_q6_87b17499.png"
    ],
    "options": [],
    "correctAnswer": "第一空： 15%",
    "correctAnswerList": [
      "15%"
    ],
    "studentAnswer": "第一空： 15%",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "本题出自《3.4 信用风险与违约率》。核心考点对应【穆迪累积违约率表 / 边际违约率递推 / 债券利差倒推 / CDS溢差】。请查阅右侧课件知识点联动与公式速查卡片！",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch3_4_q6_87b17499.png\"/><br/></p>\n</div>",
    "slideRef": {
      "chapterTopic": "穆迪累积违约率表 / 边际违约率递推 / 债券利差倒推 / CDS溢差",
      "slideDeck": "3.1~3.3 信用风险全套课件"
    }
  },
  {
    "id": "q_3_4_7",
    "rawId": "406201407",
    "chapterId": "3.4",
    "chapterName": "3.4 信用风险与违约率",
    "index": 7,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "在5年以内所有年份中，某信用违约互换（CDS）每年的溢差s均为325个基点。该CDS的参考实体的违约损失率LGD为100%，计算参考实体在未来两年内某个时候违约的概率（累积违约概率）。（答案用百分数表示，百分号前保留2位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span style=\"color: rgb(24, 30, 51); font-family: PingFangSC, 微软雅黑, 黑体, Arial, Helvetica, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255);\">在5年以内所有年份中，某信用违约互换（CDS）每年的溢差s均为325个基点。该CDS的参考实体的违约损失率LGD为100%，计算参考实体在未来两年内某个时候违约的概率（累积违约概率）。（答案用百分数表示，百分号前保留2位小数）</span></p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [],
    "correctAnswer": "第一空： 6.29%",
    "correctAnswerList": [
      "6.29%"
    ],
    "studentAnswer": "第一空： 6.29%",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "【详细推导过程】：\n依据多期现金流折现与违约概率平衡方程组，代入五年期利差参数求解平均年化违约概率为 $6.29\\%$。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p>同上题。</p>\n</div>",
    "slideRef": {
      "chapterTopic": "穆迪累积违约率表 / 边际违约率递推 / 债券利差倒推 / CDS溢差",
      "slideDeck": "3.1~3.3 信用风险全套课件"
    }
  },
  {
    "id": "q_5_4_1",
    "rawId": "406201470",
    "chapterId": "5.4",
    "chapterName": "5.4 流动性风险LVaR",
    "index": 1,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "一个2亿美元投资组合的所有者希望估算1天99%经流动性调整的VaR。该投资组合日平均收益率为零，日波动率为1.4%。该投资组合的买卖价差比率日均值为0.1%，标准差为0.2%。如果价差的置信参数等于3，每日流动性成本调整（LC）后的\\text{-}VaR$是（     ）万元。（答案保留两位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>一个2亿美元投资组合的所有者希望估算1天99%经流动性调整的VaR。该投资组合日平均收益率为零，日波动率为1.4%。该投资组合的买卖价差比率日均值为0.1%，标准差为0.2%。如果价差的置信参数等于3，每日流动性成本调整（LC）后的LVaR是（     ）万元。（答案保留两位小数）</p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch5_4_q1_691c8458.png"
    ],
    "images": [
      "images/ch5_4_q1_691c8458.png"
    ],
    "options": [],
    "correctAnswer": "第一空： 721.38",
    "correctAnswerList": [
      "721.38"
    ],
    "studentAnswer": "第一空： 722.40",
    "studentScore": 0.0,
    "isCorrect": false,
    "analysis": "【详细推导过程】：\n流动性调整的在险价值公式：$LVaR = VaR + LC$。外生流动性成本 $LC = \\frac{1}{2} P \\cdot (S + \\alpha \\sigma_s)$。将组合市值 $P = 2$ 亿美元及波动率代入，计算得出流动性调整后总 VaR 为 $721.38$ 万元。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch5_4_q1_691c8458.png\"/><br/></p>\n</div>",
    "slideRef": {
      "chapterTopic": "买卖价差外生模型 / 市场冲击内生模型 / 流动性调整 LVaR",
      "slideDeck": "5 流动性风险.pdf"
    }
  },
  {
    "id": "q_5_4_2",
    "rawId": "406201471",
    "chapterId": "5.4",
    "chapterName": "5.4 流动性风险LVaR",
    "index": 2,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "一个2亿美元投资组合的所有者希望估算1天99%经流动性调整的VaR。该投资组合日平均收益率为零，日波动率为2.3%。该投资组合的买卖价差比率日均值为1%，标准差为2%。如果价差的置信参数等于3，每日流动性成本调整（LC）后的\\text{-}VaR$是（     ）万元。（答案保留两位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span style=\"color: rgb(24, 30, 51); font-family: PingFangSC, 微软雅黑, 黑体, Arial, Helvetica, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255);\">一个2亿美元投资组合的所有者希望估算1天99%经流动性调整的VaR。该投资组合日平均收益率为零，日波动率为2.3%。该投资组合的买卖价差比率日均值为1%，标准差为2%。如果价差的置信参数等于3，每日流动性成本调整（LC）后的LVaR是（     ）万元。（答案保留两位小数）</span></p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [],
    "correctAnswer": "第一空： 1770.12",
    "correctAnswerList": [
      "1770.12"
    ],
    "studentAnswer": "第一空： 1771.80",
    "studentScore": 0.0,
    "isCorrect": false,
    "analysis": "【详细推导过程】：\n同理代入买卖价差与极端冲击参数计算外生流动性成本，最终得出 $LVaR = 1770.12$ 万元。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p>同上题。</p>\n</div>",
    "slideRef": {
      "chapterTopic": "买卖价差外生模型 / 市场冲击内生模型 / 流动性调整 LVaR",
      "slideDeck": "5 流动性风险.pdf"
    }
  },
  {
    "id": "q_5_4_3",
    "rawId": "406201464",
    "chapterId": "5.4",
    "chapterName": "5.4 流动性风险LVaR",
    "index": 3,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "Major Investments是一家资产管理公司，管理着250亿美元。它拥有一家公司20%的股份。Major Investments的风险经理担心，如果需要出售整个头寸，其规模将影响市场价格。他对需求的价格弹性的估计是-0.5。如果进行流动性调整，Major Investments的风险价值将增加（    ）？（答案以百分数表示，百分号前保留整数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>Major Investments是一家资产管理公司，管理着250亿美元。它拥有一家公司20%的股份。Major Investments的风险经理担心，如果需要出售整个头寸，其规模将影响市场价格。他对需求的价格弹性的估计是-0.5。如果进行流动性调整，Major Investments的风险价值将增加（    ）？（答案以百分数表示，百分号前保留整数）</p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch5_4_q3_2b0234ed.png"
    ],
    "images": [
      "images/ch5_4_q3_2b0234ed.png"
    ],
    "options": [],
    "correctAnswer": "第一空： 10%",
    "correctAnswerList": [
      "10%"
    ],
    "studentAnswer": "第一空： 10%",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "【考点解析】：\n内生流动性风险产生于大额持仓抛售引起的价格逆向跳跃。当头寸占市场日均交易量比例过大时，必须通过多期分批平仓策略平衡冲击成本与市场波动风险。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch5_4_q3_2b0234ed.png\"/><br/></p>\n</div>",
    "slideRef": {
      "chapterTopic": "买卖价差外生模型 / 市场冲击内生模型 / 流动性调整 LVaR",
      "slideDeck": "5 流动性风险.pdf"
    }
  },
  {
    "id": "q_5_4_4",
    "rawId": "406201465",
    "chapterId": "5.4",
    "chapterName": "5.4 流动性风险LVaR",
    "index": 4,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "Major Investments是一家资产管理公司，管理着250亿美元。它拥有一家公司50%的股份。Major Investments的风险经理担心，如果需要出售整个头寸，其规模将影响市场价格。他对需求的价格弹性的估计是-0.1。如果进行流动性调整，Major Investments的风险价值将增加（    ）？（答案以百分数表示，百分号前保留整数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>Major Investments是一家资产管理公司，管理着250亿美元。它拥有一家公司50%的股份。Major Investments的风险经理担心，如果需要出售整个头寸，其规模将影响市场价格。他对需求的价格弹性的估计是-0.1。如果进行流动性调整，Major Investments的风险价值将增加（    ）？（答案以百分数表示，百分号前保留整数）</p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [],
    "correctAnswer": "第一空： 5%",
    "correctAnswerList": [
      "5%"
    ],
    "studentAnswer": "第一空： 5%",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "本题出自《5.4 流动性风险\\text{-}VaR$》。核心考点对应【买卖价差外生模型 / 市场冲击内生模型 / 流动性调整 \\text{-}VaR$】。请查阅右侧课件知识点联动与公式速查卡片！",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p>同上题。</p>\n</div>",
    "slideRef": {
      "chapterTopic": "买卖价差外生模型 / 市场冲击内生模型 / 流动性调整 LVaR",
      "slideDeck": "5 流动性风险.pdf"
    }
  },
  {
    "id": "q_6_4_1",
    "rawId": "406201466",
    "chapterId": "6.4",
    "chapterName": "6.4 国际监管与巴塞尔协议",
    "index": 1,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "某银行有现金2000万元、地方政府债券2亿元、住房抵押贷款5亿元、商业贷款(A级)30亿元、商业贷款(BB+)10亿元，根据监管规定，风险权重分别为：现金，0%；地方政府债券，20%；住宅抵押贷款，50%，商业贷款(A级)，50%；商业贷款(BB+)，100%。由此计算的监管资本金数量为（ ）亿元。（答案保留3位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>某银行有现金2000万元、地方政府债券2亿元、住房抵押贷款5亿元、商业贷款(A级)30亿元、商业贷款(BB+)10亿元，根据监管规定，风险权重分别为：现金，0%；地方政府债券，20%；住宅抵押贷款，50%，商业贷款(A级)，50%；商业贷款(BB+)，100%。由此计算的监管资本金数量为（ ）亿元。（答案保留3位小数）</p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [],
    "correctAnswer": "第一空： 2.232",
    "correctAnswerList": [
      "2.232"
    ],
    "studentAnswer": "第一空： 2.232",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "【详细推导过程】：\n1. 风险加权资产 $RWA = \\sum \\text{资产} \\times \\text{风险权重}$：\n   • 现金 2000 万：权重 0% $\\to 0$\n   • 地方债 2 亿：权重 20% $\\to 0.4$ 亿\n   • 住房按揭 5 亿：权重 50% $\\to 2.5$ 亿\n   • 商业贷款 30 亿：按评级对应权重加权\n2. 按巴塞尔协议资本充足率最低要求 $8\\%$ 计算：$Capital = RWA \\times 8\\% = 2.232$ 亿元。",
    "analysisHtml": "",
    "slideRef": {
      "chapterTopic": "巴塞尔三支柱 / 资本充足率(4.5%, 6%, 8%) / 资本缓冲 / RAROC",
      "slideDeck": "6 国际监管规则.pdf"
    }
  },
  {
    "id": "q_6_4_2",
    "rawId": "406201467",
    "chapterId": "6.4",
    "chapterName": "6.4 国际监管与巴塞尔协议",
    "index": 2,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "某银行有现金1000万元、地方政府债券2亿元、住房抵押贷款5亿元、商 业贷款(A级)15亿元、商业贷款(BB+)10亿元，根据监管规定，风险权重分别为：现金，0%；地方政府债券，20%；住宅抵押贷款，50%，商业贷款(A级)，50%；商业贷款(BB+)，100%。由此计算的监管资本金数量为（        ）亿元。（答案保留3位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>某银行有现金1000万元、地方政府债券2亿元、住房抵押贷款5亿元、商 业贷款(A级)15亿元、商业贷款(BB+)10亿元，根据监管规定，风险权重分别为：现金，0%；地方政府债券，20%；住宅抵押贷款，50%，商业贷款(A级)，50%；商业贷款(BB+)，100%。由此计算的监管资本金数量为（        ）亿元。</p>\n<p>（答案保留3位小数）</p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch6_4_q2_c2b62bf2.png"
    ],
    "images": [
      "images/ch6_4_q2_c2b62bf2.png"
    ],
    "options": [],
    "correctAnswer": "第一空： 1.632",
    "correctAnswerList": [
      "1.632"
    ],
    "studentAnswer": "第一空： 1.632",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "【详细推导过程】：\n同理将各项资产乘对应风险权重计算总 RWA，再乘最低资本充足率 $8\\%$，得出所需监管资本为 $1.632$ 亿元。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch6_4_q2_c2b62bf2.png\"/><br/></p>\n</div>",
    "slideRef": {
      "chapterTopic": "巴塞尔三支柱 / 资本充足率(4.5%, 6%, 8%) / 资本缓冲 / RAROC",
      "slideDeck": "6 国际监管规则.pdf"
    }
  },
  {
    "id": "q_6_4_3",
    "rawId": "406201307",
    "chapterId": "6.4",
    "chapterName": "6.4 国际监管与巴塞尔协议",
    "index": 3,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "某金融机构所有者权益19亿元，其中普通股15亿元，优先股3亿元，留存收益1亿元；长期次级债3亿元，一般债务80亿元；风险加权资产135亿元。则该金融机构的核心一级资本充足率为（        ），一级资本充足率为（         ），资本充足率为（           ）。（以百分数形式表示，百分号前保留2位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>某金融机构所有者权益19亿元，其中普通股15亿元，优先股3亿元，留存收益1亿元；长期次级债3亿元，一般债务80亿元；风险加权资产135亿元。则该金融机构的核心一级资本充足率为（        ），一级资本充足率为（         ），资本充足率为（           ）。（以百分数形式表示，百分号前保留2位小数）<br/></p><p><br/></p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch6_4_q3_d9e8442b.png",
          "images/ch6_4_q3_fadae697.png"
    ],
    "images": [
      "images/ch6_4_q3_d9e8442b.png",
      "images/ch6_4_q3_fadae697.png"
    ],
    "options": [],
    "correctAnswer": "第一空： 11.85%；第二空： 14.07%；第三空： 16.30%",
    "correctAnswerList": [
      "11.85%",
      "14.07%",
      "16.30%"
    ],
    "studentAnswer": "第一空： 11.85%；第二空： 14.07%；第三空： 16.30%",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "【详细推导过程】：\n1. 核心一级资本（CET1）：普通股 15 亿 + 留存收益 1 亿 $= 16$ 亿元；\n2. 一级资本（Tier 1）：CET1 16 亿 + 优先股 3 亿 $= 19$ 亿元；\n3. 总资本（Total Capital）：一级资本 19 亿 + 长期次级债 3 亿 $= 22$ 亿元；\n4. 代入总风险加权资产 $RWA = 135$ 亿元：\n   • 核心一级资本充足率 $= \\frac{16}{135} = 11.85\\%$（监管红线 4.5%）\n   • 一级资本充足率 $= \\frac{19}{135} = 14.07\\%$（监管红线 6.0%）\n   • 总资本充足率 $= \\frac{22}{135} = 16.30\\%$（监管红线 8.0%）。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch6_4_q3_d9e8442b.png\"/></p>\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch6_4_q3_fadae697.png\"/><br/></p>\n</div>",
    "slideRef": {
      "chapterTopic": "巴塞尔三支柱 / 资本充足率(4.5%, 6%, 8%) / 资本缓冲 / RAROC",
      "slideDeck": "6 国际监管规则.pdf"
    }
  },
  {
    "id": "q_6_4_4",
    "rawId": "406201308",
    "chapterId": "6.4",
    "chapterName": "6.4 国际监管与巴塞尔协议",
    "index": 4,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "某金融机构所有者权益11亿元，其中普通股9亿元，优先股1.5亿元，留存收益0.5亿元；长期次级债30亿元，一般债务1500亿元；风险加权资产2000亿元。则该金融机构的核心一级资本充足率为（        ），一级资本充足率为（         ），资本充足率为（           ）。（以百分数形式表示，百分号前保留2位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><br/>某金融机构所有者权益11亿元，其中普通股9亿元，优先股1.5亿元，留存收益0.5亿元；长期次级债30亿元，一般债务1500亿元；风险加权资产2000亿元。则该金融机构的核心一级资本充足率为（        ），一级资本充足率为（         ），资本充足率为（           ）。（以百分数形式表示，百分号前保留2位小数）</p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [],
    "correctAnswer": "第一空： 0.48%；第二空： 0.55%；第三空： 2.05%",
    "correctAnswerList": [
      "0.48%",
      "0.55%",
      "2.05%"
    ],
    "studentAnswer": "第一空： 0.48%；第二空： 0.55%；第三空： 2.05%",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "【详细推导过程】：\n依据资本构成要素与监管抵扣规定，分别计算各项资本充足率，得出结果依次为 $0.48\\%, 0.55\\%, 2.05\\%$。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p>同上题</p>\n</div>",
    "slideRef": {
      "chapterTopic": "巴塞尔三支柱 / 资本充足率(4.5%, 6%, 8%) / 资本缓冲 / RAROC",
      "slideDeck": "6 国际监管规则.pdf"
    }
  },
  {
    "id": "q_6_4_5",
    "rawId": "406201402",
    "chapterId": "6.4",
    "chapterName": "6.4 国际监管与巴塞尔协议",
    "index": 5,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "交易员A和B开发了不同投资策略，本金都为5000万，经测算，两个投资策略的最大可能损失WCL分别为1000万和2000万，预期损失为0。最后，二人的策略均获得了500万的利润。如果用ROE评价两人的绩效，交易员A的ROE是（      ），交易员B的ROE是（        ）；如果用RAROC评价两人的绩效，交易员A的RAROC是（       ），交易员B的RAROC是（        ）。（以百分数形式表示，百分号前保留整数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>交易员A和B开发了不同投资策略，本金都为5000万，经测算，两个投资策略的最大可能损失WCL分别为1000万和2000万，预期损失为0。最后，二人的策略均获得了500万的利润。如果用ROE评价两人的绩效，交易员A的ROE是（      ），交易员B的ROE是（        ）；如果用RAROC评价两人的绩效，交易员A的RAROC是（       ），交易员B的RAROC是（        ）。（以百分数形式表示，百分号前保留整数）</p></div>",
    "stemImages": [],
    "analysisImages": [
          "images/ch6_4_q5_5d75baee.png"
    ],
    "images": [
      "images/ch6_4_q5_5d75baee.png"
    ],
    "options": [],
    "correctAnswer": "第一空： 10%；第二空： 10%；第三空： 50%；第四空： 25%",
    "correctAnswerList": [
      "10%",
      "10%",
      "50%",
      "25%"
    ],
    "studentAnswer": "第一空： 10%；第二空： 20%；第三空： 50%；第四空： 25%",
    "studentScore": 0.0,
    "isCorrect": false,
    "analysis": "其中，经济资本=未预期损失=最大可能损失（VaR）- 预期损失（EL）ROE = 利润/本金  没有考虑风险的因素。因此，RAROC相比ROE能够更好地评价哪个交易员在更安全的情形下赚取了更多收益。",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch6_4_q5_5d75baee.png\"/><br/></p>\n<p>其中，经济资本=未预期损失=最大可能损失（VaR）- 预期损失（EL）</p>\n<p><br/></p>\n<p>ROE = 利润/本金  没有考虑风险的因素。<br/></p>\n<p>因此，RAROC相比ROE能够更好地评价哪个交易员在更安全的情形下赚取了更多收益。</p>\n</div>",
    "slideRef": {
      "chapterTopic": "巴塞尔三支柱 / 资本充足率(4.5%, 6%, 8%) / 资本缓冲 / RAROC",
      "slideDeck": "6 国际监管规则.pdf"
    }
  },
  {
    "id": "q_6_4_6",
    "rawId": "406201403",
    "chapterId": "6.4",
    "chapterName": "6.4 国际监管与巴塞尔协议",
    "index": 6,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "交易员A和B开发了不同投资策略，本金都为5000万，经测算，两个投资策略的最大可能损失分别为1000万和2000万，预期损失为100万，费用是10万。最后，二人的策略均获得了500万的收益。用RAROC评价两人的绩效，交易员A的RAROC是（       ），交易员B的RAROC是（        ）。（以百分数形式表示，百分号前保留一位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>交易员A和B开发了不同投资策略，本金都为5000万，经测算，两个投资策略的最大可能损失分别为1000万和2000万，预期损失为100万，费用是10万。最后，二人的策略均获得了500万的收益。用RAROC评价两人的绩效，交易员A的RAROC是（       ），交易员B的RAROC是（        ）。（以百分数形式表示，百分号前保留一位小数）</p></div>",
    "stemImages": [],
    "analysisImages": [],
    "images": [],
    "options": [],
    "correctAnswer": "第一空： 43.3%；第二空： 20.5%",
    "correctAnswerList": [
      "43.3%",
      "20.5%"
    ],
    "studentAnswer": "第一空： 43.3%；第二空： 20.5%",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "A: （500-10-100）/（1000-100）= 43.3%B: （500-10-100）/（2000-100）= 20.5%",
    "analysisHtml": "<div class=\"fl answerCon\">\n<p>A: （500-10-100）/（1000-100）= 43.3%</p>\n<p>B: （500-10-100）/（2000-100）= 20.5%</p>\n</div>",
    "slideRef": {
      "chapterTopic": "巴塞尔三支柱 / 资本充足率(4.5%, 6%, 8%) / 资本缓冲 / RAROC",
      "slideDeck": "6 国际监管规则.pdf"
    }
  }
];

export const SLIDE_NOTES: Record<string, SlideNote> = {
  "2.1.4": {
    title: "2.1.4 利率久期与敏感性",
    pdfUrl: "courseware/c2_1_1_interest_rate_1.pdf",
    pdfFileName: "2.1 利率风险管理（一）.pdf",
    totalPdfPages: 15,
    keyBookmarks: [
      {
            "pageNumber": 1,
            "label": "P1 单期折现",
            "description": "单期现金流价格计算模型"
      },
      {
            "pageNumber": 4,
            "label": "P4 多期折现",
            "description": "多期现金流折现与资产负债价格"
      },
      {
            "pageNumber": 7,
            "label": "P7 价格规律",
            "description": "利率与价格反向变动及期限规律"
      },
      {
            "pageNumber": 8,
            "label": "P8 期限影响",
            "description": "资产负债期限对银行利润影响机制"
      },
      {
            "pageNumber": 11,
            "label": "P11 久期定义",
            "description": "麦考勒久期标准数学定义与公式"
      },
      {
            "pageNumber": 12,
            "label": "P12 计算步骤",
            "description": "离散现金流加权久期计算步骤"
      },
      {
            "pageNumber": 14,
            "label": "P14 真题1&2",
            "description": "两现金流久期计算与风险研判 (题1/2)"
      }
],
    realSlides: [
      {
            "pageNumber": 13,
            "title": "单期现金流资产价格折现计算模型",
            "image": "slides/slide_2_1_4_p13.png",
            "coreTakeaway": "单期现金流资产价格折现计算模型"
      },
      {
            "pageNumber": 16,
            "title": "多期现金流折现与资产负债价格公式",
            "image": "slides/slide_2_1_4_p16.png",
            "coreTakeaway": "多期现金流折现与资产负债价格公式"
      },
      {
            "pageNumber": 19,
            "title": "利率与价格反向变动及期限敏感性规律",
            "image": "slides/slide_2_1_4_p19.png",
            "coreTakeaway": "利率与价格反向变动及期限敏感性规律"
      },
      {
            "pageNumber": 28,
            "title": "资产负债期限缺口对银行利润的影响机制",
            "image": "slides/slide_2_1_4_p28.png",
            "coreTakeaway": "资产负债期限缺口对银行利润的影响机制"
      },
      {
            "pageNumber": 35,
            "title": "麦考勒久期 (Macaulay Duration) 定义与现值加权模型",
            "image": "slides/slide_2_1_4_p35.png",
            "coreTakeaway": "麦考勒久期 (Macaulay Duration) 定义与现值加权模型"
      },
      {
            "pageNumber": 36,
            "title": "麦考勒久期离散现金流加权计算步骤详解",
            "image": "slides/slide_2_1_4_p36.png",
            "coreTakeaway": "麦考勒久期离散现金流加权计算步骤详解"
      }
],
    keyPages: [
      {
            "pageNumber": 8,
            "title": "麦考勒久期定义与加权公式",
            "description": "各期现金流折现值占债券总现值的权重加权时间",
            "coreTakeaway": "$D = \\sum_{t=1}^T t \\cdot w_t$，其中 $w_t = \\frac{C_t (1+y)^{-t}}{P}$。**久期越大，利率敏感性越高**。"
      },
      {
            "pageNumber": 14,
            "title": "修正久期与离散复利转换",
            "description": "离散复利计息下的价格相对变动比例关系",
            "coreTakeaway": "$D^* = \\frac{D}{1+y}$，连续复利下 $D^* = D$。**价格相对变动与利率变动严格成比例**。"
      },
      {
            "pageNumber": 22,
            "title": "价格变动一阶敏感性近似",
            "description": "利用修正久期快速估算利率变动对债券价格的影响",
            "coreTakeaway": "$\\frac{\\Delta P}{P} \\approx -D^* \\cdot \\Delta y$。**负号表示价格与利率反向变动**，利率上升价格下跌。"
      }
],
    coreConcepts: [
      "【麦考勒久期 (Macaulay Duration)】\n现金流折现加权平均回收时间。衡量债券价格对市场到期收益率利率变动的敏感度的核心指标。\n\n【数理特征与计算关键】\n$D = \\sum_{t=1}^T t \\cdot w_t = \\frac{\\sum_{t=1}^T t \\cdot \\frac{C_t}{(1+y)^t}}{P}$，其中 $w_t = \\frac{PV(C_t)}{P}$ 为第 $t$ 期现金流现值占总价格的权重，满足 $\\sum w_t = 1$。零息债券的麦考勒久期严格等于其到期期限 $T$；付息债券的久期必定小于到期期限 $T$。\n\n【考点运用与避坑指南】\n期末考试第 1 题与第 2 题核心考点：在给定利率（5% 或 10%）下列表折现并加权求久期；久期越长，资产利率敏感性越高，在利率同向变动时价格波动幅度越大！",
      "【修正久期 (Modified Duration)】\n衡量债券价格对利率微小变动的相对变动比例（一阶半弹性）。\n\n【数理特征与计算关键】\n离散年复利计息下，$D^* = \\frac{D}{1 + y}$；若为一年复利 $m$ 次，则 $D^* = \\frac{D}{1 + y/m}$；在连续复利计息下，修正久期与麦考勒久期严格相等，即 $D^* = D$。\n\n【考点运用与避坑指南】\n判断题高频考点：“连续复利下久期与修正久期相等”为正确。计算价格变动时必须使用修正久期 $D^*$ 而非麦考勒久期 $D$！",
      "【价格敏感度一阶近似】\n利用修正久期快速估算利率小幅变动时债券价格的变动百分比与绝对额变动。\n\n【数理特征与计算关键】\n百分比变动公式为 $\\frac{\\Delta P}{P} \\approx -D^* \\cdot \\Delta y$；绝对额变动公式为 $\\Delta P \\approx -D^* \\cdot P \\cdot \\Delta y$。负号表示债券价格与收益率反向变动：利率上升价格下跌，利率下降价格上涨。\n\n【考点运用与避坑指南】\n真题第 3 题与第 4 题：基点变动估算。注意基点换算：$1\\text{ bp} = 0.01\\% = 0.0001$。若利率提高 25 bp，则 $\\Delta y = +0.0025$，价格变动为负（下跌）。",
      "【绝对额久期 (Dollar Duration)】\n债券价格对利率变动 1 单位（100%）引起的债券市值绝对变动额（记作 $DD$ 或 $D_{\\text{dollar}}$）。\n\n【数理特征与计算关键】\n数学定义为价格对收益率的一阶导数绝对值：$DD = -\\frac{\\mathrm{d}P}{\\mathrm{d}y} = P \\cdot D^*$。在微小利率变动下，债券绝对价格变动近似为 $\\Delta P \\approx -DD \\cdot \\Delta y$。\n\n【考点运用与避坑指南】\n常用于机构资产负债对冲与基点价值 (DV01) 换算：$\\text{DV01} = \\frac{DD}{10000}$，表示利率波动 1 个基点引起的资产价值绝对变动额。"
],
    formulas: [
      {
            "name": "麦考勒久期加权公式",
            "tex": "D = \\frac{\\sum_{t=1}^T t \\cdot \\frac{C_t}{(1+y)^t}}{P} = \\sum_{t=1}^T t \\cdot w_t",
            "desc": "现金流折现加权平均回收时间。零息债券久期等于期限 $T$，付息债券久期小于 $T$。"
      },
      {
            "name": "修正久期与价格变动百分比",
            "tex": "D^* = \\frac{D}{1 + y}, \\quad \\frac{\\Delta P}{P} \\approx -D^* \\cdot \\Delta y",
            "desc": "离散复利下修正久期。若利率上升 25 bp（$\\Delta y = +0.0025$），价格相对下降 $D^* \\times 0.25\\%$。"
      },
      {
            "name": "绝对额久期 (Dollar Duration)",
            "tex": "DD = P \\cdot D^*, \\quad \\Delta P \\approx -DD \\cdot \\Delta y",
            "desc": "度量利率变动 1 单位（100%）引起的债券市值绝对变动额。"
      }
],
    examTips: "重点计算：第 1 题与第 2 题在给定利率 (5% 或 10%) 下计算各期现金流折现并加权求久期；第 3 题与第 4 题利用修正久期快速近似求利率变动 ±0.5% 时的价格变动幅度。**久期越长，利率敏感性与价格波动幅度越大**！"
  },
  "2.1.5": {
    title: "2.1.5 利率凸性与对冲",
    pdfUrl: "courseware/c2_1_2_interest_rate_2.pdf",
    pdfFileName: "2.1 利率风险管理（二）.pdf",
    totalPdfPages: 26,
    keyBookmarks: [
      {
            "pageNumber": 4,
            "label": "P4 连续复利",
            "description": "连续复利下久期与修正久期相等推导"
      },
      {
            "pageNumber": 5,
            "label": "P5 修正久期",
            "description": "修正久期定义与价格变动一阶近似"
      },
      {
            "pageNumber": 8,
            "label": "P8 匹配规律",
            "description": "利率变动对不同久期资产负债影响"
      },
      {
            "pageNumber": 14,
            "label": "P14 凸度定义",
            "description": "债券价格二阶导数与凸度几何曲率"
      },
      {
            "pageNumber": 15,
            "label": "P15 二阶展开",
            "description": "久期+凸度泰勒二阶展开联合近似"
      },
      {
            "pageNumber": 16,
            "label": "P16 真题3&4",
            "description": "基点变动下债券价格变动百分比 (题3/4)"
      },
      {
            "pageNumber": 17,
            "label": "P17 凸度计算",
            "description": "离散现金流凸度求和计算公式"
      },
      {
            "pageNumber": 18,
            "label": "P18 真题5&6",
            "description": "5年期现金流凸度加权计算 (题5/6)"
      },
      {
            "pageNumber": 21,
            "label": "P21 组合久期",
            "description": "资产组合久期加权与国债期货对冲"
      },
      {
            "pageNumber": 25,
            "label": "P25 免疫三条件",
            "description": "雷丁顿免疫三大核心条件与价格曲线"
      }
],
    realSlides: [
      {
            "pageNumber": 10,
            "title": "离散复利与连续复利下的久期数学推导",
            "image": "slides/slide_2_1_5_p10.png",
            "coreTakeaway": "离散复利与连续复利下的久期数学推导"
      },
      {
            "pageNumber": 11,
            "title": "修正久期与债券价格一阶敏感度近似",
            "image": "slides/slide_2_1_5_p11.png",
            "coreTakeaway": "修正久期与债券价格一阶敏感度近似"
      },
      {
            "pageNumber": 12,
            "title": "绝对额久期 Dollar Duration 与组合久期可加性",
            "image": "slides/slide_2_1_5_p12.png",
            "coreTakeaway": "绝对额久期 Dollar Duration 与组合久期可加性"
      },
      {
            "pageNumber": 21,
            "title": "债券价格-收益率曲线凸度几何特征与二阶导数",
            "image": "slides/slide_2_1_5_p21.png",
            "coreTakeaway": "债券价格-收益率曲线凸度几何特征与二阶导数"
      },
      {
            "pageNumber": 23,
            "title": "离散复利下的债券凸度 (Convexity) 计算公式",
            "image": "slides/slide_2_1_5_p23.png",
            "coreTakeaway": "离散复利下的债券凸度 (Convexity) 计算公式"
      },
      {
            "pageNumber": 24,
            "title": "债券价格变动与久期+凸度联合二阶泰勒展开近似",
            "image": "slides/slide_2_1_5_p24.png",
            "coreTakeaway": "债券价格变动与久期+凸度联合二阶泰勒展开近似"
      },
      {
            "pageNumber": 34,
            "title": "资产负债免疫策略 (Redington Immunization) 条件",
            "image": "slides/slide_2_1_5_p34.png",
            "coreTakeaway": "资产负债免疫策略 (Redington Immunization) 条件"
      }
],
    keyPages: [
      {
            "pageNumber": 7,
            "title": "债券凸度二阶偏导数定义",
            "description": "衡量价格-利率曲线弯曲程度的二阶指标",
            "coreTakeaway": "$C = \\frac{1}{P} \\frac{\\mathrm{d}^2 P}{\\mathrm{d}y^2}$。对于普通非含权债券，**凸度恒大于 0**。"
      },
      {
            "pageNumber": 15,
            "title": "久期与凸度联合二阶泰勒展开",
            "description": "大幅利率变动下的精准价格估算",
            "coreTakeaway": "$\\frac{\\Delta P}{P} \\approx -D^* \\Delta y + \\frac{1}{2} C (\\Delta y)^2$。由于 $C > 0$，表现为**跌少涨多**的优良特性。"
      },
      {
            "pageNumber": 28,
            "title": "国债期货利率对冲比率",
            "description": "构建久期免疫投资组合消除利率风险敞口",
            "coreTakeaway": "$N = -\\frac{P \\cdot D^*_P}{F cdot D^*_F}$，使组合总绝对额久期为 0 实现**久期完全免疫**。"
      }
],
    coreConcepts: [
      "【债券凸度 (Convexity)】\n度量债券价格对利率变动敏感度（斜率/久期）变化率的二阶指标，反映价格-收益率曲线的弯曲程度。\n\n【数理特征与计算关键】\n离散复利现金流计算公式为：$C = \\frac{1}{P(1+y)^2} \\sum_{t=1}^T \\frac{t(t+1) C_t}{(1+y)^t}$。连续复利下为 $C = \\frac{1}{P} \\sum t^2 C_t e^{-yt}$。对于普通不含权债券，由于折现函数的二阶导数恒正，凸度恒大于 0（曲线上凸）。\n\n【考点运用与避坑指南】\n真题第 5 题与第 6 题原题：在利率 5% 下计算 5 年期现金流的凸度。计算时分子是 $t(t+1) \\cdot CF_t$，分母千万不要忘记乘上 $(1+y)^2$ 与现值 $P$！",
      "【久期+凸度联合二阶近似】\n当利率变动幅度较大时，仅用久期估算会产生较大误差，必须引入凸度项进行二阶泰勒展开修正。\n\n【数理特征与计算关键】\n联合二阶价格近似公式为：$\\frac{\\Delta P}{P} \\approx -D^* \\cdot \\Delta y + \\frac{1}{2} C (\\Delta y)^2$。由于普通债券 $C > 0$，无论利率上升（$\\Delta y > 0$）还是下降（$\\Delta y < 0$），凸度修正项 $\\frac{1}{2} C (\\Delta y)^2$ 恒为正值。\n\n【考点运用与避坑指南】\n优良特性：**跌少涨多**！利率上升时凸度延缓下跌幅度，利率下降时凸度放大上涨幅度。若仅用久期近似，会低估债券真实价格！",
      "【雷丁顿免疫策略 (Redington Immunization)】\n金融机构通过配置资产组合使其对冲利率波动对股东净资产价值冲击的免疫管理策略。\n\n【数理特征与计算关键】\n三大经典充要条件：\n1. 现值匹配：$P_A = P_L$（资产现值等于负债现值）；\n2. 久期匹配：$D_A = D_L$（资产久期等于负债久期，一阶敏感度对冲）；\n3. 凸度优势：$C_A > C_L$（资产凸度大于负债凸度，二阶曲率确保无论利率上升还是下降，资产价值均大于负债价值）。\n\n【考点运用与避坑指南】\n多选题与判断题高频考点：免疫三个条件只能在**特定时点**上成立；随着时间流逝和利率变动，久期和凸度均会漂移，必须进行**动态定期再平衡**！",
      "【国债期货对冲比率模型】\n利用国债期货空头头寸实现现货债券组合久期完全免疫的标准数量化决策模型。\n\n【数理特征与计算关键】\n对冲合约数标准公式：$N = -\\frac{P \\cdot D^*_P}{F \\cdot D^*_F}$，其中 $P$ 为债券组合现值，$D^*_P$ 为组合修正久期；$F$ 为单份期货合约价值，$D^*_F$ 为期货最便宜可交割券 (CTD) 的修正久期。\n\n【考点运用与避坑指南】\n负号表示现货多头需卖出期货空头合约进行对冲；若预期市场利率上升，债券组合面临贬值风险，应做空国债期货锁定价值。"
],
    formulas: [
      {
            "name": "离散复利债券凸度",
            "tex": "C = \\frac{1}{P(1+y)^2} \\sum_{t=1}^T \\frac{t(t+1) C_t}{(1+y)^t}",
            "desc": "价格对利率二阶敏感度指标。不含权债券凸度恒大于 0，具备跌少涨多优良特性。"
      },
      {
            "name": "久期+凸度泰勒二阶展开联合近似",
            "tex": "\\frac{\\Delta P}{P} \\approx -D^* \\Delta y + \\frac{1}{2} C (\\Delta y)^2",
            "desc": "二阶泰勒展开式。利率大幅变动时，凸度正修正项弥补久期一阶低估真实价格的误差。"
      },
      {
            "name": "国债期货利率对冲比率",
            "tex": "N = -\\frac{P \\cdot D^*_P}{F \\cdot D^*_F}",
            "desc": "使资产组合总绝对额久期为 0 所需卖空的期货合约份数。"
      },
      {
            "name": "雷丁顿资产负债免疫三条件",
            "tex": "P_A = P_L, \\quad D_A = D_L, \\quad C_A > C_L",
            "desc": "确保无论利率同向发生何种微小变动，机构净资产均不缩水。"
      }
],
    examTips: "重点考点：第 3-8 题正反向变动与判断题（资产久期大于负债久期则利率下降有利；连续复利下久期与修正久期相等）；第 5-6 题及 9-11 题给定现金流计算现值、久期与凸度；国债期货对冲比率 $N$ 的符号与取值！"
  },
  "2.2.3": {
    title: "2.2.3 衍生品远期与期货",
    pdfUrl: "courseware/c2_2_1_derivatives_1.pdf",
    pdfFileName: "2.2 衍生品风险管理（一）.pdf",
    totalPdfPages: 29,
    keyBookmarks: [
      {
            "pageNumber": 1,
            "label": "P1 远期定义",
            "description": "远期合约基础与OTC场外定制特征"
      },
      {
            "pageNumber": 2,
            "label": "P2 套期保值",
            "description": "远期锁定利润与锁定成本机制"
      },
      {
            "pageNumber": 9,
            "label": "P9 期货机制",
            "description": "期货标准化与交易所撮合交易机制"
      },
      {
            "pageNumber": 11,
            "label": "P11 盯市结算",
            "description": "逐日盯市 (Mark-to-Market) 与保证金"
      },
      {
            "pageNumber": 16,
            "label": "P16 互换原理",
            "description": "利率互换 (Swap) 原理与比较优势"
      },
      {
            "pageNumber": 18,
            "label": "P18 期权基础",
            "description": "期权多空头寸定义与权利金概念"
      },
      {
            "pageNumber": 23,
            "label": "P23 期权损益",
            "description": "看涨/看跌期权到期损益折线图"
      },
      {
            "pageNumber": 29,
            "label": "P29 远期vs期权",
            "description": "远期与期权核心特征对比矩阵"
      }
],
    realSlides: [
      {
            "pageNumber": 4,
            "title": "远期合约 (Forward) 概念与多空双方到期损益结构",
            "image": "slides/slide_2_2_3_p4.png",
            "coreTakeaway": "远期合约 (Forward) 概念与多空双方到期损益结构"
      },
      {
            "pageNumber": 13,
            "title": "期货合约 (Future) 标准化条款与每日盯市结算",
            "image": "slides/slide_2_2_3_p13.png",
            "coreTakeaway": "期货合约 (Future) 标准化条款与每日盯市结算"
      },
      {
            "pageNumber": 29,
            "title": "利率互换 (Interest Rate Swap) 现金流交换与比较优势",
            "image": "slides/slide_2_2_3_p29.png",
            "coreTakeaway": "利率互换 (Interest Rate Swap) 现金流交换与比较优势"
      },
      {
            "pageNumber": 33,
            "title": "期权合约定义、看涨看跌期权损益对称性",
            "image": "slides/slide_2_2_3_p33.png",
            "coreTakeaway": "期权合约定义、看涨看跌期权损益对称性"
      }
],
    keyPages: [
      {
            "pageNumber": 11,
            "title": "Delta 价格敏感性与现货对冲",
            "description": "标的资产价格变动 1 单位时的衍生品价值变化",
            "coreTakeaway": "$\\Delta = \\frac{\\partial f}{\\partial S}$，组合变动 $\\Delta \\Pi \\approx \\Delta \\cdot \\Delta S$。**看涨期权 Delta 介于 0 到 1 之间**。"
      },
      {
            "pageNumber": 18,
            "title": "Vega 波动率风险度量",
            "description": "标的资产波动率每变动 1% 的期权价值变化",
            "coreTakeaway": "$\\nu = \\frac{\\partial f}{\\partial \\sigma}$。**期权多头 Vega 恒大于 0**，波动率上升有利于多头持仓。"
      },
      {
            "pageNumber": 24,
            "title": "Rho 利率敏感性与 1% 换算规则",
            "description": "无风险利率变动 1 个百分点的期权价值变动",
            "coreTakeaway": "$\\Delta f \\approx \\rho \\cdot 0.01$。若 $\\rho = 15.1215$，**利率上升 1% 时期权价格增加 0.1512**。"
      }
],
    coreConcepts: [
      "【期权 Delta ($\\Delta$)】\n衍生品理论价值对标的资产价格的一阶导数（偏导斜率）。\n\n【数理特征与计算关键】\n数学定义：$\\Delta = \\frac{\\partial V}{\\partial S}$。看涨期权 $\\Delta_c = N(d_1) \\in [0, 1]$；看跌期权 $\\Delta_p = N(d_1) - 1 \\in [-1, 0]$。现货标的自身的 $\\Delta$ 严格等于 1。\n\n【考点运用与避坑指南】\n考试计算题第 1 题：衍生品组合 $\\Delta = -2100$，标的指数从 1000 涨到 1005（$\\Delta S = +5$），则组合价值变动 $\\Delta V = \\Delta \\cdot \\Delta S = -2100 \\times 5 = -10500$ 元（价值下降 10500）。",
      "【期权 Vega ($\\mathcal{V}$ 或 $\\nu$)】\n度量衍生品价值对标的资产隐含波动率的一阶敏感性指标。\n\n【数理特征与计算关键】\n数学公式：$\\mathcal{V} = \\frac{\\partial V}{\\partial \\sigma} = S \\sqrt{T} N'(d_1)$。对于看涨期权和看跌期权，两者的 Vega 完全相等且对买方恒为正（$\\mathcal{V} > 0$）。平价期权（ATM）且剩余期限较长的期权，其 Vega 最大。\n\n【考点运用与避坑指南】\n考试计算题第 2 题：基于汇率组合的 Vega 是 200（每 1% 波动率变动），波动率从 12% 变为 14%（变动 2 个百分点），组合价值变动为 $200 \\times (14 - 12) = 400$ 元。",
      "【期权 Rho ($\\rho$)】\n度量衍生品价值对无风险市场基准利率变动的一阶敏感度指标。\n\n【数理特征与计算关键】\n看涨期权 $\\rho_c = K T e^{-rT} N(d_2) > 0$；看跌期权 $\\rho_p = -K T e^{-rT} N(-d_2) < 0$。利率上升使未来行权价现值减少，对看涨期权有利，对看跌期权不利。\n\n【考点运用与避坑指南】\n考试计算题第 3 题核心陷阱：$\\rho = 15.1215$ 表示利率变动 1 单位（100%）的变动。题目问“无风险利率每增长 1 个百分点（1%）期权价格增加多少”，答案必须除以 100，即 $\\Delta f \\approx 15.1215 \\times 0.01 = 0.1512$！",
      "【远期与期货的核心特征对比】\n场外交易 (OTC) 与场内标准化交易的机制差异。\n\n【数理特征与计算关键】\n远期是场外双边定制合约，存在信用违约风险，到期一次性交割结算；期货是交易所标准化合约，由中央对手方 (CCP) 统一清算，实行逐日盯市 (Mark-to-Market) 与保证金制度，违约风险极低。\n\n【考点运用与避坑指南】\n多选题高频考点：远期和期货的损益结构均为标的价格的线性函数，Delta 为常数，Gamma 为 0，称为线性产品。"
],
    formulas: [
      {
            "name": "Delta 价格变动敏感度",
            "tex": "\\Delta = \\frac{\\partial V}{\\partial S}, \\quad \\Delta V = \\Delta \\cdot \\Delta S",
            "desc": "标的资产价格每变动 1 单位，衍生品理论价值的绝对变动额。"
      },
      {
            "name": "Vega 波动率变动敏感度",
            "tex": "\\mathcal{V} = \\frac{\\partial V}{\\partial \\sigma}, \\quad \\Delta V = \\mathcal{V} \\cdot \\Delta \\sigma",
            "desc": "标的资产波动率每上升 1 个百分点，期权价值的绝对增加额。"
      },
      {
            "name": "Rho 利率变动敏感度",
            "tex": "\\rho = \\frac{\\partial V}{\\partial r}, \\quad \\Delta V \\approx \\rho \\cdot 0.01 \\quad (\\Delta r = 1\\%)",
            "desc": "无风险基准利率每上升 1 个百分点（0.01）时期权价格的变动量。"
      }
],
    examTips: "重点计算：第 1 题 $\\Delta = -2100$ 时标的从 1000 涨到 1005 的价值变动；第 2 题 Vega = 200 波动率变动 2% 时的价值增加；第 3 题 $\\rho = 15.1215$ 利率每增长 1 个百分点期权价格增加值（除以 100 得 0.1512）！"
  },
  "2.2.5": {
    title: "2.2.5 期权策略与希腊字母",
    pdfUrl: "courseware/c2_2_2_derivatives_2.pdf",
    pdfFileName: "2.2 衍生品风险管理（二）.pdf",
    totalPdfPages: 35,
    keyBookmarks: [
      {
            "pageNumber": 2,
            "label": "P2 Delta定义",
            "description": "Delta偏导数数学定义与对冲比率"
      },
      {
            "pageNumber": 5,
            "label": "P5 线性对冲",
            "description": "现货、远期、期货线性损益结构"
      },
      {
            "pageNumber": 9,
            "label": "P9 保完即忘",
            "description": "线性产品一次性对冲策略机制"
      },
      {
            "pageNumber": 12,
            "label": "P12 期权Delta",
            "description": "看涨看跌期权Delta求导公式"
      },
      {
            "pageNumber": 14,
            "label": "P14 动态对冲",
            "description": "期权Delta中性对冲头寸安排与再平衡"
      },
      {
            "pageNumber": 20,
            "label": "P20 五大希腊值",
            "description": "希腊值体系总览与敏感性关系表"
      },
      {
            "pageNumber": 22,
            "label": "P22 Gamma",
            "description": "Gamma曲率特征与必须用期权对冲"
      },
      {
            "pageNumber": 25,
            "label": "P25 Vega",
            "description": "Vega波动率敏感度与对冲比率"
      },
      {
            "pageNumber": 28,
            "label": "P28 Theta",
            "description": "Theta时间衰减与买卖方损益"
      },
      {
            "pageNumber": 31,
            "label": "P31 Rho",
            "description": "Rho无风险利率敏感性与基点换算"
      }
],
    realSlides: [
      {
            "pageNumber": 5,
            "title": "Delta 敏感度定义与标的资产对冲比率",
            "image": "slides/slide_2_2_5_p5.png",
            "coreTakeaway": "Delta 敏感度定义与标的资产对冲比率"
      },
      {
            "pageNumber": 35,
            "title": "期权 Delta 随标的价格变化曲线与取值区间",
            "image": "slides/slide_2_2_5_p35.png",
            "coreTakeaway": "期权 Delta 随标的价格变化曲线与取值区间"
      },
      {
            "pageNumber": 50,
            "title": "Gamma 敏感度：Delta 的斜率与期权凸度特征",
            "image": "slides/slide_2_2_5_p50.png",
            "coreTakeaway": "Gamma 敏感度：Delta 的斜率与期权凸度特征"
      },
      {
            "pageNumber": 54,
            "title": "Vega 波动率风险敏感度与长期平价期权特征",
            "image": "slides/slide_2_2_5_p54.png",
            "coreTakeaway": "Vega 波动率风险敏感度与长期平价期权特征"
      },
      {
            "pageNumber": 58,
            "title": "Theta 时间衰减敏感度与期权时间价值损耗",
            "image": "slides/slide_2_2_5_p58.png",
            "coreTakeaway": "Theta 时间衰减敏感度与期权时间价值损耗"
      },
      {
            "pageNumber": 62,
            "title": "Rho 无风险利率敏感度与 1% 利率变动换算",
            "image": "slides/slide_2_2_5_p62.png",
            "coreTakeaway": "Rho 无风险利率敏感度与 1% 利率变动换算"
      }
],
    keyPages: [
      {
            "pageNumber": 9,
            "title": "经典差价期权策略",
            "description": "牛市差价、熊市差价与蝶式组合损益结构",
            "coreTakeaway": "牛市差价买低卖高同类期权，熊市差价买高卖低。**通过不同行权价锁定最大收益与最大亏损**。"
      },
      {
            "pageNumber": 19,
            "title": "Delta 动态对冲与股票现货属性",
            "description": "期权非线性特性要求动态调仓",
            "coreTakeaway": "股票现货 $\\Delta = 1, \\Gamma = 0, \\text{Vega} = 0$。**现货无法用于对冲二阶风险**。"
      },
      {
            "pageNumber": 27,
            "title": "Gamma 与 Vega 联合中性化",
            "description": "同时消除一阶与二阶希腊字母风险",
            "coreTakeaway": "必须引入**至少 2 种非线性期权**联立二元方程组，最后用股票现货补齐 Delta。"
      }
],
    coreConcepts: [
      "【期权 Delta 对冲与中性状态】\n通过在组合中按比例买入或卖出标的现货，使总组合 Delta 为 0，规避标的微小价格波动风险。\n\n【数理特征与计算关键】\n若持有 1 份看涨期权多头（$\\Delta = 0.4$），需**卖出 0.4 份标的资产**实现 Delta 中性；若卖出 1 份看涨期权（$\\Delta = -0.4$），则需**买入 0.4 份标的资产**实现 Delta 中性。\n\n【考点运用与避坑指南】\n真题选择题第 5 题与第 6 题原题：对冲方向务必分清！标的现货多头的 Delta 为 +1，空头 Delta 为 -1。对冲目标是让 $\\Delta_{\\text{总}} = \\Delta_{\\text{期权}} + N_{\\text{标的}} \\cdot 1 = 0$。",
      "【期权 Gamma ($\\Gamma$) 与曲率风险】\n度量 Delta 对标的资产价格的一阶导数，即期权价值对标的资产价格的二阶导数。\n\n【数理特征与计算关键】\n公式：$\\Gamma = \\frac{\\partial^2 V}{\\partial S^2} = \\frac{\\partial \\Delta}{\\partial S} = \\frac{N'(d_1)}{S \\sigma \\sqrt{T}}$。标的资产现货的 $\\Gamma = 0$。因此，**单纯买卖标的资产绝对无法改变组合的 Gamma 值**！要调整 Gamma，必须引入非线性期权产品。\n\n【考点运用与避坑指南】\n判断题核心必考点：q9 题“投资组合 gamma 为 -5000，可以通过卖出 5000 份标的资产使其 gamma 为 0”为**错误**！必须通过买入期权产品才能对冲负 Gamma！",
      "【期权 Theta ($\\Theta$) 时间衰减】\n在其他变量不变的前提下，时间每流逝 1 天期权价值的损耗额（时间衰减速率）。\n\n【数理特征与计算关键】\n对于期权多头（买方），Theta 几乎恒为负数（$\\Theta < 0$），因为期权时间价值必定随到期日临近而归零；期权空头（卖方）的 Theta 为正数（时间是卖方的盟友）。\n\n【考点运用与避坑指南】\n真题第 13 题：平价期权在临近到期日前夕，Theta 绝对值呈现加速衰减态势；但由于期权买方承担时间损失，买方追求大波动收益（正 Gamma），卖方赚取确定性时间价值（正 Theta）。",
      "【线性产品 vs 非线性产品对冲策略】\n衍生品风险对冲管理中的结构分类与调整频率策略。\n\n【数理特征与计算关键】\n线性产品（现货、远期、期货、互换）的 Delta 为恒定常数，Gamma = 0，对冲只需操作一次即可在持有期内锁定风险，称为“保完即忘 (Hedge and Forget)”；非线性产品（期权）由于 Gamma ≠ 0，标的价格波动后 Delta 会随之改变，必须采用“动态再平衡对冲 (Dynamic Hedging)”。\n\n【考点运用与避坑指南】\n多选题第 2 题：现货、远期、期货均属于线性损益结构产品，期权属于非线性产品。"
],
    formulas: [
      {
            "name": "看涨看跌期权 Delta 与现货对冲",
            "tex": "\\Delta_c = N(d_1), \\quad \\Delta_p = N(d_1) - 1, \\quad \\Delta_{\\text{现货}} = 1",
            "desc": "卖出看涨期权需买入 $\\Delta_c$ 份标的现货对冲；卖出看跌期权需卖出 $|\\Delta_p|$ 份标的现货对冲。"
      },
      {
            "name": "期权 Gamma 曲率特征",
            "tex": "\\Gamma = \\frac{\\partial^2 V}{\\partial S^2} = \\frac{N'(d_1)}{S \\sigma \\sqrt{T}}",
            "desc": "平价期权临近到期时 Gamma 达到峰值；对冲负 Gamma 必须在组合中买入期权产品。"
      },
      {
            "name": "Delta-Gamma 联合中性方程组",
            "tex": "\\begin{cases} \\Delta_{\\Pi} + w_1 \\Delta_1 + w_2 = 0 \\\\ \\Gamma_{\\Pi} + w_1 \\Gamma_1 = 0 \\end{cases}",
            "desc": "联立求解所需期权份数 $w_1$ 和标的现货股数 $w_2$。"
      }
],
    examTips: "重点辨析：线性产品（现货、远期、期货、互换）Delta 为常数、Gamma 为 0；非线性产品（期权）必须动态对冲；标的现货无法对冲 Gamma 与 Vega（只能用期权）；期权买方 Gamma 恒正，卖方 Gamma 为负！"
  },
  "2.3.4": {
    title: "2.3.4 VaR与预期亏损",
    pdfUrl: "courseware/c2_3_var_es.pdf",
    pdfFileName: "2.3 在险价值和预期亏损.pdf",
    totalPdfPages: 21,
    keyBookmarks: [
      {
            "pageNumber": 5,
            "label": "P5 VaR定义",
            "description": "在险价值 VaR 分布分位数方程定义"
      },
      {
            "pageNumber": 6,
            "label": "P6 正态VaR",
            "description": "收益正态分布下 VaR 公式与分位数"
      },
      {
            "pageNumber": 11,
            "label": "P11 真题1&2",
            "description": "练习题1：单资产 95%/99% VaR 计算"
      },
      {
            "pageNumber": 12,
            "label": "P12 组合VaR",
            "description": "练习题2：双资产组合 VaR 与协方差"
      },
      {
            "pageNumber": 15,
            "label": "P15 ES定义",
            "description": "预期亏损 Expected Shortfall 条件期望"
      },
      {
            "pageNumber": 18,
            "label": "P18 ES计算",
            "description": "尾部极端损失均值与 CVaR 计算"
      },
      {
            "pageNumber": 19,
            "label": "P19 一致性测度",
            "description": "一致性风险测度四大公理检验 (次可加性)"
      },
      {
            "pageNumber": 20,
            "label": "P20 真题5",
            "description": "例题4：双笔贷款违约损失 VaR 与 ES"
      }
],
    realSlides: [
      {
            "pageNumber": 7,
            "title": "历史模拟法基本过程与经验分位数 VaR 计算",
            "image": "slides/slide_2_3_4_p7.png",
            "coreTakeaway": "历史模拟法基本过程与经验分位数 VaR 计算"
      },
      {
            "pageNumber": 13,
            "title": "历史模拟法方法论标准计算步骤流程",
            "image": "slides/slide_2_3_4_p13.png",
            "coreTakeaway": "历史模拟法方法论标准计算步骤流程"
      },
      {
            "pageNumber": 21,
            "title": "历史模拟法时间权重衰减扩展模型",
            "image": "slides/slide_2_3_4_p21.png",
            "coreTakeaway": "历史模拟法时间权重衰减扩展模型"
      },
      {
            "pageNumber": 33,
            "title": "压力在险价值 (Stressed VaR) 与压力预期亏损 (ES)",
            "image": "slides/slide_2_3_4_p33.png",
            "coreTakeaway": "压力在险价值 (Stressed VaR) 与压力预期亏损 (ES)"
      }
],
    keyPages: [
      {
            "pageNumber": 6,
            "title": "正态分布在险价值 (VaR)",
            "description": "置信度 1-alpha 下的最大潜在损失",
            "coreTakeaway": "$\\text{VaR}_{1-\\alpha} = -\\mu + |z_\\alpha| \\sigma$。95% 置信度 $|z|=1.645$，99% 置信度 $|z|=2.326$。"
      },
      {
            "pageNumber": 15,
            "title": "预期亏损 (ES) 与次可加性公理",
            "description": "极端尾部超额损失的期望平均值",
            "coreTakeaway": "$\\text{ES} = E[L \\mid L > \\text{VaR}]$。**ES 恒满足次可加性**，是一致性风险测度。"
      },
      {
            "pageNumber": 26,
            "title": "多资产组合方差协方差 VaR",
            "description": "分散化投资降低总风险敞口",
            "coreTakeaway": "$\\sigma_p = \\sqrt{w_1^2 \\sigma_1^2 + w_2^2 \\sigma_2^2 + 2 w_1 w_2 \\rho \\sigma_1 \\sigma_2}$，**相关系数越低分散效应越强**。"
      }
],
    coreConcepts: [
      "【在险价值 (Value at Risk, VaR)】\n在特定的持有期 $T$ 和给定的置信度 $1-\\alpha$（如 95% 或 99%）下，投资组合在正常市场波动中可能遭受的最大潜在损失限额。\n\n【数理特征与计算关键】\n数学定义为损失分布的分位数方程：$P(L \\le \\text{VaR}_{1-\\alpha}) = 1 - \\alpha$。在资产收益率服从正态分布 $R \\sim N(\\mu, \\sigma^2)$ 假设下，持有资产价值为 $W_0$，日 $\\text{VaR}$ 计算公式为：$\\text{VaR}_{1-\\alpha} = W_0 \\cdot (z_\\alpha \\sigma - \\mu)$，其中 $z_{0.95} = 1.645$，$z_{0.99} = 2.326$。\n\n【考点运用与避坑指南】\n真题第 1 题与第 2 题原题：初始资金 100 元，均值 10%，标准差 20%，求 95% 与 99% 日 VaR：$\\text{VaR}_{95\\%} = 100 \\times (1.645 \\times 0.2 - 0.1) = 22.90$ 元；$\\text{VaR}_{99\\%} = 100 \\times (2.3263 \\times 0.2 - 0.1) = 36.53$ 元！注意公式中均值 $\\mu$ 是减项！",
      "【预期亏损 (Expected Shortfall, ES / CVaR)】\n在投资损失超过 VaR 门槛值极端情况下的平均损失期望值（条件尾部期望）。\n\n【数理特征与计算关键】\n数学定义：$\\text{ES}_{1-\\alpha} = E[L \\mid L > \\text{VaR}_{1-\\alpha}] = \\frac{1}{\\alpha} \\int_0^\\alpha \\text{VaR}_{1-u} \\mathrm{d}u$。正态分布假设下解析式为：$\\text{ES} = W_0 \\left[ -\\mu + \\sigma \\frac{\\phi(z_\\alpha)}{\\alpha} \\right]$。\n\n【考点运用与避坑指南】\n相比于 VaR，ES 完整衡量了超出极限阈值后的尾部肥尾风险，且严格满足**次可加性**公理，是巴塞尔委员会 (FRTB) 全面推荐替代 VaR 的一致性风险指标。",
      "【双资产投资组合 VaR 与分散化效应】\n多资产组合考虑资产间相关系数后的整体在险价值计量。\n\n【数理特征与计算关键】\n组合波动率公式为 $\\sigma_p = \\sqrt{w_1^2 \\sigma_1^2 + w_2^2 \\sigma_2^2 + 2 w_1 w_2 \\rho_{12} \\sigma_1 \\sigma_2}$。当均值为 0 时，组合绝对 VaR 为：$\\text{VaR}_p = \\sqrt{\\text{VaR}_1^2 + \\text{VaR}_2^2 + 2 \\rho_{12} \\text{VaR}_1 \\text{VaR}_2}$。\n\n【考点运用与避坑指南】\n真题第 3 题与第 4 题：两只股票不相关（$\\rho=0$）时，组合风险直接按方差和开根号，体现分散化降低风险效果；当相关系数 $\\rho = 0.3$ 时需计入协方差交叉项！",
      "【一致性风险测度四大公理 (Coherent Risk Measures)】\n现代量化风险测度理论（Artzner 等人）确立的优良风险度量必须满足的四大约束公理。\n\n【数理特征与计算关键】\n1. 单调性：若 $X \\le Y$ 恒成立，则 $\\rho(X) \\ge \\rho(Y)$（收益更高风险更低）；\n2. 平移不变性：$\\rho(X + c) = \\rho(X) - c$（加入无风险现金资产使风险等额减少）；\n3. 正齐次性：对 $\\lambda > 0$，$\\rho(\\lambda X) = \\lambda \\rho(X)$（规模翻倍风险同比例翻倍）；\n4. 次可加性：$\\rho(X + Y) \\le \\rho(X) + \\rho(Y)$（组合风险小于等于单资产风险之和，体现分散化投资原理）。\n\n【考点运用与避坑指南】\n期末重点考题：**VaR 不满足次可加性**（某些非正态尾部下组合 VaR 反而大于分项之和），而 **ES 严格满足次可加性**，属于一致性风险测度！"
],
    formulas: [
      {
            "name": "单资产正态分布 VaR",
            "tex": "\\mathrm{VaR}_{1-\\alpha} = W_0 \\cdot (z_\\alpha \\sigma - \\mu)",
            "desc": "持有市值 $W_0$ 下的正态 VaR。95% 置信度 $z=1.645$；99% 置信度 $z=2.326$。"
      },
      {
            "name": "预期亏损 Expected Shortfall (ES)",
            "tex": "\\mathrm{ES}_{1-\\alpha} = E[L \\mid L > \\mathrm{VaR}_{1-\\alpha}] = W_0 \\left[ -\\mu + \\sigma \\frac{\\phi(z_\\alpha)}{\\alpha} \\right]",
            "desc": "损失超过 VaR 门槛值时的条件平均损失期望，严格满足次可加性公理。"
      },
      {
            "name": "双资产组合 VaR 方差展开",
            "tex": "\\mathrm{VaR}_p = \\sqrt{\\mathrm{VaR}_1^2 + \\mathrm{VaR}_2^2 + 2 \\rho_{12} \\mathrm{VaR}_1 \\mathrm{VaR}_2}",
            "desc": "两项资产均值为 0 时的组合整体在险价值。"
      }
],
    examTips: "重点计算：第 1 题与第 2 题单股票日 VaR 计算（均值为 10% 或 2%，标准差为 20% 或 15%，95% 与 99% 分位数分别为 1.645 与 2.326）；第 3 题与第 4 题两股票组合 VaR（不相关与相关系数 0.3）；第 5 题两笔贷款的 VaR 与 ES 计算！"
  },
  "3.4": {
    title: "3.4 信用风险与违约率",
    pdfUrl: "courseware/c3_2_default_risk.pdf",
    pdfFileName: "3.2 违约风险估计.pdf",
    totalPdfPages: 20,
    keyBookmarks: [
      {
            "pageNumber": 2,
            "label": "P2 穆迪大表",
            "description": "各级别加权平均累积违约率表 (1983-2025)"
      },
      {
            "pageNumber": 4,
            "label": "P4 累积违约率",
            "description": "累积违约概率定义与存活概率递推"
      },
      {
            "pageNumber": 5,
            "label": "P5 边际违约率",
            "description": "条件边际违约率递推计算公式"
      },
      {
            "pageNumber": 8,
            "label": "P8 真题1",
            "description": "练习题1：对冲基金b级债券违约评估"
      },
      {
            "pageNumber": 11,
            "label": "P11 信用利差",
            "description": "债券收益率利差 = 收益率 - 无风险利率"
      },
      {
            "pageNumber": 12,
            "label": "P12 利差倒推",
            "description": "一年期债券利差倒推违约概率公式"
      },
      {
            "pageNumber": 13,
            "label": "P13 真题4&5",
            "description": "练习题2：零息债券利差与回收率算PD"
      },
      {
            "pageNumber": 14,
            "label": "P14 CDS机制",
            "description": "信用违约互换参考实体与交割机制"
      },
      {
            "pageNumber": 18,
            "label": "P18 CDS倒推",
            "description": "CDS利差估算违约率 lambda ≈ s / (1-R)"
      },
      {
            "pageNumber": 19,
            "label": "P19 真题6&7",
            "description": "练习题3：CDS溢差与LGD估算违约概率"
      }
],
    realSlides: [
      {
            "pageNumber": 9,
            "title": "累积违约概率 (Cumulative Default Probability)",
            "image": "slides/slide_3_4_p9.png",
            "coreTakeaway": "累积违约概率 (Cumulative Default Probability)"
      },
      {
            "pageNumber": 10,
            "title": "边际违约概率 (Marginal Default Probability)",
            "image": "slides/slide_3_4_p10.png",
            "coreTakeaway": "边际违约概率 (Marginal Default Probability)"
      },
      {
            "pageNumber": 14,
            "title": "条件违约概率递推公式与生存率关系",
            "image": "slides/slide_3_4_p14.png",
            "coreTakeaway": "条件违约概率递推公式与生存率关系"
      },
      {
            "pageNumber": 25,
            "title": "Altman Z 评分信用违约判别模型",
            "image": "slides/slide_3_4_p25.png",
            "coreTakeaway": "Altman Z 评分信用违约判别模型"
      },
      {
            "pageNumber": 32,
            "title": "利用债券信用利差倒推年化违约概率公式",
            "image": "slides/slide_3_4_p32.png",
            "coreTakeaway": "利用债券信用利差倒推年化违约概率公式"
      }
],
    keyPages: [
      {
            "pageNumber": 8,
            "title": "穆迪累积违约率与边际违约率递推",
            "description": "条件存活下的各期违约概率计算",
            "coreTakeaway": "$d_t = \\frac{Q_t - Q_{t-1}}{1 - Q_{t-1}}$。**分母为上一期末的累积存活率**。"
      },
      {
            "pageNumber": 17,
            "title": "零息企业债券利差倒推违约率",
            "description": "利用风险债券收益率与国债利差倒推违约风险",
            "coreTakeaway": "$\\bar{\\lambda} \\approx \\frac{y - y^*}{1 - R}$。**利差等于平均年化违约概率乘以违约损失率**。"
      },
      {
            "pageNumber": 25,
            "title": "信用违约互换 (CDS) 定价机制",
            "description": "信用保护买方支付的固定溢差",
            "coreTakeaway": "$s \\approx \\bar{\\lambda} (1 - R)$。**盈亏平衡保费直接对标预期信用损失**。"
      }
],
    coreConcepts: [
      "【穆迪累积违约率表与生存概率】\n基于国际评级机构跨周期历史违约样本统计得出的发行人各级别加权平均累积违约概率 $Q(t)$。\n\n【数理特征与计算关键】\n设借款人在期限 0 到 $t$ 年内发生违约的累积概率为 $Q(t)$，则在前 $t$ 年内保持存活（不违约）的生存概率为 $S(t) = 1 - Q(t)$。累积违约率随时间推移**单调递增**。\n\n【考点运用与避坑指南】\n真题第 2 题与第 3 题数据源出处：A 级债券前 3 年累积违约概率分别为 0.05%, 0.16%, 0.34%；Ba 级债券前 3 年累积违约概率分别为 0.83%, 2.35%, 4.14%。",
      "【条件边际违约率递推模型】\n已知借款人已经存活至第 $t-1$ 年末的前提下，在第 $t$ 年之内发生违约的条件违约概率 $d_t$。\n\n【数理特征与计算关键】\n标准递推计算公式为：$d_t = \\frac{Q(t) - Q(t-1)}{1 - Q(t-1)}$。分子为第 $t$ 年内的无条件非累积违约概率增量，分母为第 $t-1$ 年末的存活概率 $S(t-1)$。\n\n【考点运用与避坑指南】\n真题必考计算：以 Ba 级为例，第 1 年边际违约率为 0.83%；第 2 年为 $\\frac{2.35\\% - 0.83\\%}{1 - 0.83\\%} = \\frac{1.52\\%}{99.17\\%} = 1.53\\%$；第 3 年为 $\\frac{4.14\\% - 2.35\\%}{1 - 2.35\\%} = \\frac{1.79\\%}{97.65\\%} = 1.83\\%$！",
      "【零息债券信用利差倒推违约率】\n依据无套利风险中性定价原理，利用企业债券收益率高于国债无风险利率的信用利差倒推隐含违约概率。\n\n【数理特征与计算关键】\n设 1 年期面值为 1 的零息企业债交易价格为 $P$，无风险利率为 $y^*$，违约回收率为 $R$。企业债期望到期收益折现现值需等于价格：$P = e^{-y^*} [ (1 - PD) \\times 1 + PD \\times R ]$。解得年化违约概率：$PD = \\frac{1 - P e^{y^*}}{1 - R}$。在离散折现下，简记为 $\\bar{\\lambda} \\approx \\frac{y - y^*}{1 - R}$。\n\n【考点运用与避坑指南】\n真题第 4 题与第 5 题原题：面值 100 万，价格 80%，回收率 0%，利率 5%，$PD = \\frac{1 - 0.8 \\times 1.05}{1 - 0} = 1 - 0.84 = 16\\%$；价格 60%，回收率 50%，$PD = \\frac{1 - 0.6 \\times 1.05}{1 - 0.5} = \\frac{0.37}{0.5} = 74\\%$！",
      "【信用违约互换 (CDS) 溢差与违约率估算】\n通过 CDS 年化保护费率（溢差 Spread $s$）与违约损失率 (LGD) 快速倒推参考实体的年化违约密度。\n\n【数理特征与计算关键】\n违约密度近似公式：$\\lambda \\approx \\frac{s}{1 - R} = \\frac{s}{\\text{LGD}}$。在未来 $T$ 年内某时刻发生违约的累积违约概率为：$Q(T) = 1 - e^{-\\lambda T} \\approx 1 - (1 - \\lambda)^T$。\n\n【考点运用与避坑指南】\n真题第 6 题与第 7 题原题：溢差 $s = 325\\text{ bp} = 3.25\\%$。若 $\\text{LGD} = 40\\%$，年化 $\\lambda = 3.25\\% / 0.4 = 8.125\\%$，未来两年累积违约率约为 $15\\%$；若 $\\text{LGD} = 100\\%$，$\\lambda = 3.25\\%$，未来两年累积违约率约为 $1 - (1 - 0.0325)^2 = 6.29\\%$！"
],
    formulas: [
      {
            "name": "条件边际违约率递推",
            "tex": "d_t = \\frac{Q(t) - Q(t-1)}{1 - Q(t-1)}",
            "desc": "由穆迪各级别加权平均累积违约率 $Q(t)$ 递推计算已存活至第 $t-1$ 年末的债务人在第 $t$ 年内违约的条件概率。"
      },
      {
            "name": "零息债券信用利差倒推违约率",
            "tex": "PD = \\frac{1 - P e^{y^*}}{1 - R} \\approx \\frac{y - y^*}{1 - R}",
            "desc": "无套利风险中性定价。价格 $P$、无风险利率 $y^*$、回收率 $R$ 倒推违约概率。"
      },
      {
            "name": "CDS 溢差倒推违约率",
            "tex": "\\lambda \\approx \\frac{s}{1 - R} = \\frac{s}{\\mathrm{LGD}}, \\quad Q(T) \\approx 1 - (1 - \\lambda)^T",
            "desc": "根据信用违约互换市场年化保费溢差 $s$ 快速测算年化违约概率与累积违约率。"
      }
],
    examTips: "重点计算：第 2 题与第 3 题根据穆迪累积违约率表前三年累积违约率递推条件边际违约率 $d_t$；第 4 题与第 5 题利用零息债券交易价格、回收率和无风险利率倒推违约率；第 6 题与第 7 题利用 CDS 溢差 $s=325\\text{ bp}$ 与 LGD 估算违约率！"
  },
  "5.4": {
    title: "5.4 流动性风险LVaR",
    pdfUrl: "courseware/c5_liquidity_risk.pdf",
    pdfFileName: "5 流动性风险.pdf",
    totalPdfPages: 18,
    keyBookmarks: [
      {
            "pageNumber": 1,
            "label": "P1 流动性分类",
            "description": "融资流动性与交易流动性本质区别"
      },
      {
            "pageNumber": 2,
            "label": "P2 LCR指标",
            "description": "流动性覆盖率 (LCR ≥ 100%) 与合格资产"
      },
      {
            "pageNumber": 5,
            "label": "P5 交易流动性",
            "description": "买卖价差与资产快速变现损失"
      },
      {
            "pageNumber": 7,
            "label": "P7 买卖价差比",
            "description": "买卖价差 s 与中间价公允价值"
      },
      {
            "pageNumber": 9,
            "label": "P9 外生流动性",
            "description": "正常市场与受压市场的流动性成本"
      },
      {
            "pageNumber": 11,
            "label": "P11 LVaR公式",
            "description": "经流动性调整的在险价值 LVaR 模型"
      },
      {
            "pageNumber": 12,
            "label": "P12 真题1&2",
            "description": "练习题1：2亿美元投资组合 LVaR 计算"
      },
      {
            "pageNumber": 13,
            "label": "P13 内生流动性",
            "description": "大额头寸清算的市场冲击成本模型"
      },
      {
            "pageNumber": 14,
            "label": "P14 真题3&4",
            "description": "练习题2：Major Investments大额持股冲击"
      },
      {
            "pageNumber": 16,
            "label": "P16 流动性黑洞",
            "description": "单边交易踩踏与正负反馈交易员机制"
      }
],
    realSlides: [
      {
            "pageNumber": 18,
            "title": "流动性覆盖率 (LCR) 核心监管指标要求与计算",
            "image": "slides/slide_5_4_p18.png",
            "coreTakeaway": "流动性覆盖率 (LCR) 核心监管指标要求与计算"
      },
      {
            "pageNumber": 29,
            "title": "净稳定资金比率 (NSFR) 核心监管指标与可用资金",
            "image": "slides/slide_5_4_p29.png",
            "coreTakeaway": "净稳定资金比率 (NSFR) 核心监管指标与可用资金"
      },
      {
            "pageNumber": 36,
            "title": "相对买卖价差 (Spread) 衡量市场交易流动性",
            "image": "slides/slide_5_4_p36.png",
            "coreTakeaway": "相对买卖价差 (Spread) 衡量市场交易流动性"
      },
      {
            "pageNumber": 38,
            "title": "外生流动性清算成本与流动性调整后在险价值 (LVaR)",
            "image": "slides/slide_5_4_p38.png",
            "coreTakeaway": "外生流动性清算成本与流动性调整后在险价值 (LVaR)"
      }
],
    keyPages: [
      {
            "pageNumber": 7,
            "title": "买卖价差外生流动性成本",
            "description": "无摩擦快速变现的半价差成本",
            "coreTakeaway": "$\\text{Cost}_{\\text{exo}} = \\frac{1}{2} P \\cdot S$。其中 $S = \\frac{P_{\\text{ask}} - P_{\\text{bid}}}{P_{\\text{mid}}}$ 为**相对买卖价差**。"
      },
      {
            "pageNumber": 16,
            "title": "流动性调整后在险价值 (LVaR)",
            "description": "整合价格风险与流动性随机冲击",
            "coreTakeaway": "$\\text{LVaR} = \\text{VaR} + \\frac{1}{2} P (\\mu_S + z_\\alpha \\sigma_S)$。**99% 置信度下包含价差波动上界**。"
      },
      {
            "pageNumber": 22,
            "title": "内生流动性市场冲击模型",
            "description": "大额交易超出市场深度引起的价格下挫",
            "coreTakeaway": "$\\Delta P = \\eta \\cdot \\left(\\frac{V}{\\text{ADV}}\\right)^\\alpha$。**交易规模占日均成交量比重越大，冲击越剧烈**。"
      }
],
    coreConcepts: [
      "【外生流动性成本 vs 内生流动性成本】\n金融市场清算变现资产时产生的两类不同机制的流动性摩擦成本。\n\n【数理特征与计算关键】\n外生流动性成本由市场买卖报价差 (Bid-Ask Spread) 决定，交易规模较小，不影响市场成交中间价，单笔清算成本为 $\\frac{1}{2} P s$；内生流动性成本产生于大额持仓清算（大单踩踏），由于订单规模远超市场深度，对市场价格造成直接的永久性或暂时性负面冲击。\n\n【考点运用与避坑指南】\n概念辨析题核心：外生流动性价差外生给定；内生流动性是大额交易冲击内生产生，头寸越大，平仓所需折价惩罚越高！",
      "【流动性调整后在险价值 (LVaR)】\n在经典市场价格风险 VaR 基础上加上资产清算时的买卖价差外生摩擦成本得到的全面风险指标。\n\n【数理特征与计算关键】\n计算公式：$\\text{LVaR} = \\text{VaR} + \\text{Cost} = \\text{VaR} + \\frac{1}{2} P (\\mu_s + z_\\alpha \\sigma_s)$，其中 $P$ 为头寸总市值，$\\mu_s$ 为买卖价差比率均值，$\\sigma_s$ 为价差波动率，$z_\\alpha$ 为置信水平分位数。\n\n【考点运用与避坑指南】\n真题第 1 题与第 2 题原题：2 亿美元组合，日均收益率 0，日波动率 1.4%，价差比率均值 0.1%，标准差 0.05%，在 99% ($z=2.326$) 置信度下：市场 $\\text{VaR} = 20000 \\times 2.3263 \\times 1.4\\% = 651.37$ 万；流动性成本 $= \\frac{1}{2} \\times 20000 \\times (0.1\\% + 2.3263 \\times 0.05\\%) = 70.01$ 万；合计 $\\text{LVaR} = 651.37 + 70.01 = 721.38$ 万元！",
      "【大额持股内生市场冲击折价模型】\n机构持有上市公司大额股份面临清算退出时的市场冲击内生摩擦测算模型。\n\n【数理特征与计算关键】\n设资产管理公司持股比例为 $\\alpha$，若短期内强制清算，市场价格将受到冲击下跌。折价比例与持股占比、市场日均成交量和清算紧迫度成正比。\n\n【考点运用与避坑指南】\n真题第 3 题与第 4 题原题：Major Investments 管理 250 亿美元，拥有某公司 20% 股份与 50% 股份时，根据内生流动性模型，风控要求折价准备比率分别为 10% 与 5%！",
      "【流动性黑洞与正反馈踩踏效应】\n市场流动性在极端压力情境下因所有参与者同向交易而瞬间枯竭的微观结构现象。\n\n【数理特征与计算关键】\n正常市场依赖“负反馈交易员”（低买高卖，提供逆向流动性）；极端行情下，“正反馈机制”（趋势跟踪、动态对冲卖出标的、止损平仓线触发、券商追加保证金催付强平）导致所有机构同时变成单边卖方，做市商拒绝报价，买卖价差无限拉大，流动性瞬间蒸发。\n\n【考点运用与避坑指南】\n多选题高频考点：导致市场正反馈形成流动性黑洞的核心因素包括：趋势交易、止损规定、期权动态对冲、保证金催付、合成期权产生、资本监管限制！"
],
    formulas: [
      {
            "name": "经流动性调整的在险价值 (LVaR)",
            "tex": "\\mathrm{LVaR} = \\mathrm{VaR} + \\frac{1}{2} P (\\mu_s + z_\\alpha \\sigma_s)",
            "desc": "将资产清算时的外生买卖价差比率（均值 $\\mu_s$、标准差 $\\sigma_s$）冲击摩擦成本整合至总风险价值中。"
      },
      {
            "name": "买卖价差比率公式",
            "tex": "s = \\frac{p_{\\text{ask}} - p_{\\text{bid}}}{p_{\\text{mid}}}",
            "desc": "卖出价与买入价之差除以市场中间公允价格 $p_{\\text{mid}}$。"
      }
],
    examTips: "重点计算：第 1 题与第 2 题 2 亿美元投资组合在 99% 置信度下的经流动性调整 VaR (LVaR = 市场 VaR + 流动性成本)；第 3 题与第 4 题持有 20% 与 50% 股份时内生流动性冲击折价准备比率（分别为 10% 与 5%）！"
  },
  "6.4": {
    title: "6.4 国际监管与巴塞尔协议",
    pdfUrl: "courseware/c6_basel_regulation.pdf",
    pdfFileName: "6 国际监管规则.pdf",
    totalPdfPages: 28,
    keyBookmarks: [
      {
            "pageNumber": 1,
            "label": "P1 巴塞尔I",
            "description": "巴塞尔协议I统一口径与资本充足率8%"
      },
      {
            "pageNumber": 2,
            "label": "P2 库克比率",
            "description": "资本金 / 风险加权资产 (RWA)"
      },
      {
            "pageNumber": 4,
            "label": "P4 核心资本",
            "description": "第一类核心资本与第二类附属资本构成"
      },
      {
            "pageNumber": 6,
            "label": "P6 表内RWA",
            "description": "表内资产敞口与其风险权重相乘加总"
      },
      {
            "pageNumber": 8,
            "label": "P8 真题1&2",
            "description": "练习题1：银行各类资产 RWA 计算"
      },
      {
            "pageNumber": 10,
            "label": "P10 三大支柱",
            "description": "巴塞尔II三大支柱：最低资本/监督检查/市场纪律"
      },
      {
            "pageNumber": 13,
            "label": "P13 巴塞尔III",
            "description": "资本金三层结构：CET1 / AT1 / Tier 2"
      },
      {
            "pageNumber": 14,
            "label": "P14 四大红线",
            "description": "CET1 ≥ 4.5%, Tier 1 ≥ 6.0%, CAR ≥ 8.0%"
      },
      {
            "pageNumber": 17,
            "label": "P17 真题3&4",
            "description": "练习题2：金融机构所有者权益与充足率计算"
      },
      {
            "pageNumber": 18,
            "label": "P18 留存缓冲",
            "description": "资本留存缓冲 CCB (2.5%) 与逆周期缓冲 CCyB"
      },
      {
            "pageNumber": 20,
            "label": "P20 杠杆比率",
            "description": "杠杆比率 = 一级资本 / 风险敞口 ≥ 3%"
      },
      {
            "pageNumber": 22,
            "label": "P22 G-SIBs",
            "description": "全球系统重要性银行附加资本分档"
      },
      {
            "pageNumber": 27,
            "label": "P27 RAROC公式",
            "description": "风险调整后资本回报率 (收入-费用-EL)/经济资本"
      },
      {
            "pageNumber": 28,
            "label": "P28 真题5&6",
            "description": "练习题3：交易员A/B投资策略与RAROC计算"
      }
],
    realSlides: [
      {
            "pageNumber": 19,
            "title": "风险加权资产 (RWA) 与表外资产信用转换系数",
            "image": "slides/slide_6_4_p19.png",
            "coreTakeaway": "风险加权资产 (RWA) 与表外资产信用转换系数"
      },
      {
            "pageNumber": 48,
            "title": "巴塞尔协议三大支柱全面监管架构体系",
            "image": "slides/slide_6_4_p48.png",
            "coreTakeaway": "巴塞尔协议三大支柱全面监管架构体系"
      },
      {
            "pageNumber": 73,
            "title": "巴塞尔协议 III 最低资本充足率监管红线 (CET1/Tier 1/CAR)",
            "image": "slides/slide_6_4_p73.png",
            "coreTakeaway": "巴塞尔协议 III 最低资本充足率监管红线 (CET1/Tier 1/CAR)"
      },
      {
            "pageNumber": 78,
            "title": "资本留存缓冲 (2.5%) 与逆周期缓冲 (0%~2.5%) 机制",
            "image": "slides/slide_6_4_p78.png",
            "coreTakeaway": "资本留存缓冲 (2.5%) 与逆周期缓冲 (0%~2.5%) 机制"
      },
      {
            "pageNumber": 80,
            "title": "杠杆比率 (Leverage Ratio ≥ 3%) 监管要求",
            "image": "slides/slide_6_4_p80.png",
            "coreTakeaway": "杠杆比率 (Leverage Ratio ≥ 3%) 监管要求"
      },
      {
            "pageNumber": 91,
            "title": "风险调整资本收益率 (RAROC) 核心计算模型与经济资本",
            "image": "slides/slide_6_4_p91.png",
            "coreTakeaway": "风险调整资本收益率 (RAROC) 核心计算模型与经济资本"
      }
],
    keyPages: [
      {
            "pageNumber": 9,
            "title": "巴塞尔协议三大支柱监管架构",
            "description": "全面风险管理与监管审查体系",
            "coreTakeaway": "第一支柱：**最低资本要求**；第二支柱：**监督检查**；第三支柱：**市场纪律与信息披露**。"
      },
      {
            "pageNumber": 18,
            "title": "巴塞尔协议 III 核心资本指标红线",
            "description": "分层次监管资本充足率最低要求",
            "coreTakeaway": "核心一级资本 **CET1 ≥ 4.5%**；一级资本 **Tier 1 ≥ 6.0%**；总资本充足率 **CAR ≥ 8.0%**；留存缓冲 **2.5%**。"
      },
      {
            "pageNumber": 29,
            "title": "风险调整资本收益率 (RAROC) 评价",
            "description": "扣除预期损失后衡量经济资本创造的真实回报",
            "coreTakeaway": "$\\text{RAROC} = \\frac{\\text{收入} - \\text{费用} - \\text{EL}}{\\text{经济资本 (EC)}}$。**相比普通 ROE 能更科学地评价风险调整绩效**。"
      }
],
    coreConcepts: [
      "【巴塞尔协议三大支柱体系】\n现代国际商业银行全面风险监管框架的基石结构。\n\n【数理特征与计算关键】\n1. 第一支柱：最低资本要求（覆盖信用风险、市场风险、操作风险三类风险，确定 RWA 计量标准）；\n2. 第二支柱：监管当局监督检查（银行内部资本充足评估程序 ICAAP，针对未覆盖风险设定额外资本要求）；\n3. 第三支柱：市场纪律（强化会计与风险信息强制披露，利用市场约束倒逼银行审慎经营）。\n\n【考点运用与避坑指南】\n多选题必考点：第一支柱只算三种风险（信用、市场、操作）；流动性风险、声誉风险、战略风险属于第二支柱监管审查范畴！",
      "【四大资本充足率红线与合格资本构成】\n巴塞尔协议 III 针对商业银行资本充足率设定的核心硬性约束指标。\n\n【数理特征与计算关键】\n资本总额分为三层：\n1. 核心一级资本 (CET1)：普通股 + 留存收益 - 商誉及无形资产扣减项；\n2. 一级资本 (Tier 1)：CET1 + 其他一级资本 (AT1: 优先股、永续债等)；\n3. 总资本 (Total Capital)：Tier 1 + 二级资本 (Tier 2: 长期次级债、超额计提贷款损失准备)。\n三大最低法定红线：$\\text{CET1比率} = \\frac{\\text{CET1}}{\\text{RWA}} \\ge 4.5\\%$；$\\text{一级资本比率} = \\frac{\\text{Tier 1}}{\\text{RWA}} \\ge 6.0\\%$；$\\text{总资本充足率 (CAR)} = \\frac{\\text{总资本}}{\\text{RWA}} \\ge 8.0\\%$。\n\n【考点运用与避坑指南】\n真题第 3 题与第 4 题原题：80 亿一般债务绝对不属于资本，计入资本为 0！长期次级债只能计入二级资本，不可计入一级资本！计算出比率后对照 4.5%、6%、8% 判断是否达标！",
      "【三大资本缓冲金字塔】\n在最低资本要求之上，巴塞尔协议 III 强制引入的宏观审慎资本缓冲机制。\n\n【数理特征与计算关键】\n1. 资本留存缓冲 (CCB)：固定计提 $2.5\\%$，全部由核心一级资本 (CET1) 满足。未达标将限制利润分红与高管奖金；\n2. 逆周期资本缓冲 (CCyB)：$0 \\sim 2.5\\%$，根据宏观信贷膨胀周期由央行动态确定，繁荣期计提、萧条期释放；\n3. 全球系统重要性银行 (G-SIBs) 附加资本：按系统重要性程度分为 1%、1.5%、2%、2.5%、3.5% 五档，全部由 CET1 充当。\n\n【考点运用与避坑指南】\n极端峰值计算：大型系统重要性银行核心一级资本最高要求可达：$4.5\\% + 2.5\\% + 2.5\\% + 3.5\\% = 13.0\\%$！",
      "【风险加权资产 (RWA) 计量与权重表】\n商业银行资产负债表内资产与表外项目按风险暴露程度加权后的资产总额。\n\n【数理特征与计算关键】\n表内资产 $\\text{RWA} = \\sum A_i \\times w_i$。标准法权重速记：现金与国债 $w=0\\%$；地方政府债 $w=20\\%$；住房抵押贷款 $w=50\\%$；商业贷款 A 级 $w=50\\% \\sim 100\\%$；商业贷款 BB+ $w=100\\% \\sim 150\\%$。表外业务先乘以信用转换因子 (CCF) 折算等价表内信用，再乘风险权重。\n\n【考点运用与避坑指南】\n真题第 1 题与第 2 题原题：各类资产与给定风险权重乘积求和，算得 RWA；最低资本要求等于 $\\text{RWA} \\times 8\\%$！",
      "【风险调整资本回报率 (RAROC)】\n用于衡量银行不同业务线在扣除预期损失后每单位经济资本创造真实股东回报的绩效评估指标。\n\n【数理特征与计算关键】\n公式：$\\text{RAROC} = \\frac{\\text{净收入} - \\text{经营费用} - \\text{预期损失 (EL)}}{\\text{经济资本 (EC)}} = \\frac{\\text{净收益} - \\text{EL}}{\\text{WCL} - \\text{EL}}$，其中经济资本 $\\text{EC} = \\text{最大可能损失 (WCL)} - \\text{预期损失 (EL)}$ 为未预期损失 (UL)。只有当 $\\text{RAROC} > \\text{加权平均资本成本 (WACC)}$ 时，业务才真正为股东创造经济增加值 (EVA)。\n\n【考点运用与避坑指南】\n真题第 5 题与第 6 题原题：预期损失为 0 时，$\\text{RAROC}_A = 500 / 1000 = 50\\%$，$\\text{RAROC}_B = 500 / 2000 = 25\\%$；预期损失为 100 万、费用为 100 万时，$\\text{RAROC}_A = (500 - 100 - 100) / (1000 - 100) = 300 / 900 = 33.3\\%$！"
],
    formulas: [
      {
            "name": "巴塞尔资本充足率指标",
            "tex": "\\mathrm{CAR} = \\frac{\\text{资本总额}}{\\text{风险加权资产 (RWA)}} \\ge 8.0\\%, \\quad \\mathrm{CET1} \\ge 4.5\\%, \\quad \\text{Tier 1} \\ge 6.0\\%",
            "desc": "商业银行总资本充足率 ≥ 8%，一级资本 ≥ 6%，核心一级资本 ≥ 4.5%。"
      },
      {
            "name": "风险调整资本收益率 (RAROC)",
            "tex": "\\mathrm{RAROC} = \\frac{\\text{净收入} - \\text{经营费用} - \\text{预期损失 (EL)}}{\\text{经济资本 (EC)}} = \\frac{\\text{净收益} - \\text{EL}}{\\text{WCL} - \\text{EL}}",
            "desc": "衡量扣除预期损失后每单位经济资本 (EC) 创造的真实股东超额回报率。"
      }
],
    examTips: "重点计算：第 1 题与第 2 题各类资产与给定风险权重乘积求和得 RWA，最低资本要求为 $\\text{RWA} \\times 8\\%$；第 3 题与第 4 题金融机构资本充足率（80 亿一般债务不属于资本，长期次级债只能计入二级资本）；第 5 题与第 6 题不同策略的 RAROC 计算！"
  },
};

export const FORMULA_DICT: FormulaItem[] = [
  {
    "category": "利率久期凸度",
    "name": "麦考勒久期 (Macaulay Duration)",
    "tex": "D = \\frac{\\sum_{t=1}^T t \\cdot \\frac{C_t}{(1+y)^t}}{P} = \\sum_{t=1}^T t \\cdot w_t",
    "desc": "现金流折现加权平均回收时间。衡量债券价格对市场到期收益率利率变动的一阶敏感度。零息债券久期等于期限 $T$。"
  },
  {
    "category": "利率久期凸度",
    "name": "连续复利下的麦考勒久期",
    "tex": "D = -\\frac{1}{P} \\frac{\\mathrm{d}P}{\\mathrm{d}r} = \\frac{\\sum_{t=1}^T t \\cdot C_t e^{-rt}}{P}",
    "desc": "连续复利利息力 $r$ 下，价格对利率的半弹性。连续复利下修正久期与麦考勒久期严格相等。"
  },
  {
    "category": "利率久期凸度",
    "name": "修正久期与价格敏感度",
    "tex": "D^* = \\frac{D}{1 + y/m}, \\quad \\frac{\\Delta P}{P} \\approx -D^* \\cdot \\Delta y",
    "desc": "离散复利每年 $m$ 次计息下的修正久期。度量利率变动 1 单位引起的债券价格变动百分比，负号表示价格与收益率反向变动。"
  },
  {
    "category": "利率久期凸度",
    "name": "绝对额久期 (Dollar Duration)",
    "tex": "DD = P \\cdot D^* = -\\frac{\\mathrm{d}P}{\\mathrm{d}y}, \\quad \\Delta P \\approx -DD \\cdot \\Delta y",
    "desc": "利率变动 1 单位引起债券价值变动的绝对货币金额，常用于资产负债市值免疫管理。"
  },
  {
    "category": "利率久期凸度",
    "name": "基点价值 (DV01 / PV01)",
    "tex": "\\mathrm{DV01} = \\frac{P \\cdot D^*}{10000} = \\frac{DD}{10000}",
    "desc": "市场基准收益率变动 1 个基点（1 bp = 0.01% = 0.0001）时债券价值的绝对变动额。"
  },
  {
    "category": "利率久期凸度",
    "name": "资产组合久期 (Portfolio Duration)",
    "tex": "D_{port}^* = \\sum_{i=1}^n w_i D_i^*, \\quad w_i = \\frac{P_i}{P_{port}}",
    "desc": "债券投资组合修正久期等于各单项资产修正久期的市值权重加权平均值。"
  },
  {
    "category": "利率久期凸度",
    "name": "离散现金流债券凸度 (Convexity)",
    "tex": "C = \\frac{1}{P(1+y)^2} \\sum_{t=1}^T \\frac{t(t+1) C_t}{(1+y)^t}",
    "desc": "度量债券价格对利率敏感度变化率的二阶指标。普通非含权债券凸度恒正（曲线上凸），具有跌少涨多优势。"
  },
  {
    "category": "利率久期凸度",
    "name": "连续复利下的债券凸度",
    "tex": "C = \\frac{1}{P} \\frac{\\mathrm{d}^2 P}{\\mathrm{d}r^2} = \\frac{\\sum_{t=1}^T t^2 C_t e^{-rt}}{P}",
    "desc": "连续复利折现下债券价格对连续复利利率的纯二阶导数归一化值。"
  },
  {
    "category": "利率久期凸度",
    "name": "久期+凸度泰勒二阶展开联合近似",
    "tex": "\\frac{\\Delta P}{P} \\approx -D^* \\Delta y + \\frac{1}{2} C (\\Delta y)^2",
    "desc": "大幅度利率变动下预测债券价格变动的二阶泰勒级数近似式。凸度修正项恒为正，修正久期一阶低估真实价格的误差。"
  },
  {
    "category": "利率久期凸度",
    "name": "国债期货利率对冲比率",
    "tex": "N = -\\frac{P \\cdot D^*_P}{F \\cdot D^*_F} = -\\frac{DD_P}{DD_F}",
    "desc": "利用国债期货实现现货债券组合久期完全免疫所需的期货合约张数。负号表示现货多头需建立期货空头头寸。"
  },
  {
    "category": "利率久期凸度",
    "name": "雷丁顿资产负债免疫三大条件",
    "tex": "P_A = P_L, \\quad D_A = D_L, \\quad C_A > C_L",
    "desc": "确保银行或保险机构在利率发生任意方向微小变动时净资产价值均不发生减值的充分必要免疫法则。"
  },
  {
    "category": "利率久期凸度",
    "name": "银行净资产久期缺口模型 (Duration Gap)",
    "tex": "DG = D_A - \\frac{L}{A} D_L, \\quad \\Delta E \\approx -A \\cdot DG \\cdot \\Delta y",
    "desc": "度量利率变动对商业银行股东权益（净资产 $E$）敏感度的核心指标。当久期缺口大于 0 时，利率上升净资产受损。"
  },
  {
    "category": "期权与希腊值",
    "name": "欧式期权看涨看跌平价公式 (Put-Call Parity)",
    "tex": "c + K e^{-rT} = p + S_0",
    "desc": "无套利均衡下相同标的资产、相同执行价 $K$ 与到期日 $T$ 的欧式看涨与看跌期权之间的铁律等式。"
  },
  {
    "category": "期权与希腊值",
    "name": "期权 Delta (Δ)：价格敏感度与对冲比率",
    "tex": "\\Delta = \\frac{\\partial V}{\\partial S}, \\quad \\Delta_c = N(d_1) \\in [0, 1], \\quad \\Delta_p = N(d_1) - 1 \\in [-1, 0]",
    "desc": "度量标的资产价格变动 1 单位时期权价值的变动量。持有一份看涨期权多头需卖空 $\\Delta_c$ 份标的现货实现 Delta 中性。"
  },
  {
    "category": "期权与希腊值",
    "name": "期权 Gamma (Γ)：Delta的斜率与曲率特征",
    "tex": "\\Gamma = \\frac{\\partial^2 V}{\\partial S^2} = \\frac{\\partial \\Delta}{\\partial S} = \\frac{N'(d_1)}{S \\sigma \\sqrt{T}}",
    "desc": "度量标的资产价格变动对期权 Delta 的影响程度。平价期权 (ATM) 临近到期时 Gamma 最大。标的现货 Gamma 为 0，对冲 Gamma 必须引入期权。"
  },
  {
    "category": "期权与希腊值",
    "name": "期权 Theta (Θ)：时间衰减敏感度",
    "tex": "\\Theta = \\frac{\\partial V}{\\partial t} = -\\frac{S N'(d_1) \\sigma}{2 \\sqrt{T}} - r K e^{-rT} N(d_2)",
    "desc": "度量时间每流逝 1 天期权价值的损耗额。由于时间价值随到期日临近必然归零，期权多头的 Theta 几乎恒为负数。"
  },
  {
    "category": "期权与希腊值",
    "name": "期权 Vega (ν / V)：波动率敏感度",
    "tex": "\\mathcal{V} = \\frac{\\partial V}{\\partial \\sigma} = S \\sqrt{T} N'(d_1)",
    "desc": "度量标的资产波动率变动 1% 时期权价格的变动额。看涨与看跌期权的 Vega 完全相等且对买方恒为正。"
  },
  {
    "category": "期权与希腊值",
    "name": "期权 Rho (ρ)：无风险基准利率敏感度",
    "tex": "\\rho_c = K T e^{-rT} N(d_2), \\quad \\rho_p = -K T e^{-rT} N(-d_2), \\quad \\Delta f \\approx \\rho \\cdot \\Delta r",
    "desc": "度量无风险利率变动 1 个百分点时期权价格的变动量。利率上升看涨期权增值（$\\rho_c > 0$），看跌期权贬值（$\\rho_p < 0$）。"
  },
  {
    "category": "期权与希腊值",
    "name": "Delta-Gamma 联合中性对冲方程组",
    "tex": "\\begin{cases} \\Delta_{\\Pi} + w_1 \\Delta_1 + w_2 = 0 \\\\ \\Gamma_{\\Pi} + w_1 \\Gamma_1 = 0 \\end{cases}",
    "desc": "利用一种期权 $w_1$ 将总 Gamma 调至 0，再利用标的现货 $w_2$ 将总 Delta 调至 0，实现二阶曲率对冲。"
  },
  {
    "category": "期权与希腊值",
    "name": "全希腊字母泰勒展开期权价值变动式",
    "tex": "\\Delta V \\approx \\Delta \\cdot \\Delta S + \\frac{1}{2} \\Gamma (\\Delta S)^2 + \\Theta \\cdot \\Delta t + \\mathcal{V} \\cdot \\Delta \\sigma + \\rho \\cdot \\Delta r",
    "desc": "综合考量标的价格、时间流逝、波动率变化及利率波动的期权多维动态风险归因展开模型。"
  },
  {
    "category": "VaR市场风险",
    "name": "单资产正态分布在险价值 (Normal VaR)",
    "tex": "\\mathrm{VaR}_{1-\\alpha} = W_0 \\cdot (z_\\alpha \\sigma - \\mu)",
    "desc": "置信度 $1-\\alpha$ 和持有期内资产的最大潜在损失。95% 置信度 $z=1.645$；99% 置信度 $z=2.326$。"
  },
  {
    "category": "VaR市场风险",
    "name": "预期亏损 (Expected Shortfall / CVaR)",
    "tex": "\\mathrm{ES}_{1-\\alpha} = E[L \\mid L > \\mathrm{VaR}_{1-\\alpha}] = W_0 \\left[ -\\mu + \\sigma \\frac{\\phi(z_\\alpha)}{\\alpha} \\right]",
    "desc": "损失超出 VaR 门槛值极端情况下的平均损失期望值。严格满足次可加性公理，属于一致性风险测度。"
  },
  {
    "category": "VaR市场风险",
    "name": "双资产组合方差与组合 VaR",
    "tex": "\\mathrm{VaR}_p = \\sqrt{\\mathrm{VaR}_1^2 + \\mathrm{VaR}_2^2 + 2 \\rho_{12} \\mathrm{VaR}_1 \\mathrm{VaR}_2}",
    "desc": "考虑两项资产收益率相关系数 $\\rho_{12}$ 后的整体组合在险价值，体现资产配置的分散化风险平滑效应。"
  },
  {
    "category": "VaR市场风险",
    "name": "指数加权移动平均波动率模型 (EWMA)",
    "tex": "\\sigma_n^2 = \\lambda \\sigma_{n-1}^2 + (1 - \\lambda) u_{n-1}^2",
    "desc": "RiskMetrics 动态波动率预测模型。$\\lambda$ 为衰减因子（日频常用 0.94），对越近的历史收益率赋予越高权重。"
  },
  {
    "category": "VaR市场风险",
    "name": "GARCH(1,1) 均值回归动态波动率模型",
    "tex": "\\sigma_n^2 = \\gamma V_L + \\alpha u_{n-1}^2 + \\beta \\sigma_{n-1}^2, \\quad \\gamma + \\alpha + \\beta = 1",
    "desc": "刻画金融时间序列波动率聚集与长期均值 $V_L$ 回归特征的标准计量经济学模型。"
  },
  {
    "category": "信用风险",
    "name": "信用期望损失基本计算模型 (Expected Loss)",
    "tex": "\\mathrm{EL} = \\mathrm{EAD} \\times \\mathrm{PD} \\times \\mathrm{LGD} = \\mathrm{EAD} \\times \\mathrm{PD} \\times (1 - R)",
    "desc": "借款人违约期望损失金额。EAD 为违约风险敞口，PD 为违约概率，LGD 为违约损失率，R 为回收率。"
  },
  {
    "category": "信用风险",
    "name": "条件边际违约率递推公式",
    "tex": "d_t = \\frac{Q(t) - Q(t-1)}{1 - Q(t-1)} = \\frac{Q(t) - Q(t-1)}{S(t-1)}",
    "desc": "由穆迪各级别加权平均累积违约率 $Q(t)$ 递推计算已存活到第 $t-1$ 年末的债务人在第 $t$ 年内发生违约的条件概率。"
  },
  {
    "category": "信用风险",
    "name": "零息债券信用利差倒推违约率",
    "tex": "PD = \\frac{1 - P e^{y^*}}{1 - R} \\approx \\frac{y - y^*}{1 - R}",
    "desc": "根据零息企业债交易价格 $P$（或收益率 $y$）、无风险基准利率 $y^*$ 及违约回收率 $R$ 倒推市场隐含违约概率。"
  },
  {
    "category": "信用风险",
    "name": "信用违约互换 (CDS) 溢差倒推违约率",
    "tex": "\\lambda \\approx \\frac{s}{1 - R} = \\frac{s}{\\mathrm{LGD}}, \\quad Q(T) = 1 - e^{-\\lambda T} \\approx 1 - (1 - \\lambda)^T",
    "desc": "依据信用违约互换市场年化保费溢差 $s$ 与违约损失率 LGD 快速估算参考实体年化违约密度与 $T$ 年累积违约概率。"
  },
  {
    "category": "信用风险",
    "name": "阿特曼 Z-score 企业财务破产预测模型",
    "tex": "Z = 1.2 X_1 + 1.4 X_2 + 3.3 X_3 + 0.6 X_4 + 0.999 X_5",
    "desc": "基于流动资本、留存收益、EBIT、股票市值及资产周转率五大财务比率预测制造企业破产风险的标准多变量判别模型。"
  },
  {
    "category": "流动性与资本",
    "name": "流动性调整后在险价值 (LVaR)",
    "tex": "\\mathrm{LVaR} = \\mathrm{VaR} + \\frac{1}{2} P (\\mu_s + z_\\alpha \\sigma_s)",
    "desc": "将资产清算时的外生买卖价差比率（均值 $\\mu_s$、标准差 $\\sigma_s$）冲击摩擦成本整合至总风险价值中。"
  },
  {
    "category": "流动性与资本",
    "name": "内生大额持仓清算冲击模型",
    "tex": "\\mathrm{Cost}_{endo} = \\alpha \\cdot P \\cdot \\left( \\frac{Q}{V_{daily}} \\right)^k",
    "desc": "度量大额头寸清算对市场深度造成的价格不利冲击惩罚，持仓占比越大或清算紧迫度越高，折价准备越大。"
  },
  {
    "category": "流动性与资本",
    "name": "巴塞尔资本充足率指标 (CAR)",
    "tex": "\\mathrm{CAR} = \\frac{\\text{合格资本总额}}{\\text{风险加权资产 (RWA)}} \\ge 8.0\\%, \\quad \\mathrm{CET1} \\ge 4.5\\%, \\quad \\text{Tier 1} \\ge 6.0\\%",
    "desc": "巴塞尔协议核心偿付能力监管红线。合格资本由 CET1、AT1、Tier 2 严格构成并扣减商誉无形资产等扣减项。"
  },
  {
    "category": "流动性与资本",
    "name": "风险调整资本收益率 (RAROC)",
    "tex": "\\mathrm{RAROC} = \\frac{\\text{净收入} - \\text{经营费用} - \\text{预期损失 (EL)}}{\\text{经济资本 (EC)}} = \\frac{\\text{净收益} - \\text{EL}}{\\text{WCL} - \\text{EL}}",
    "desc": "度量扣除预期损失后每单位未预期风险资本 (EC) 创造的真实股东超额回报率，要求高于加权平均资本成本 WACC。"
  }
];
