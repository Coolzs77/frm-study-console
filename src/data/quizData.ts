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
    pdfUrl: "courseware/c2_1_1_interest_rate_1.pdf",
    pdfFileName: "2.1 利率风险管理（一）.pdf",
    totalPdfPages: 39,
    keyBookmarks: [
      {
            "pageNumber": 13,
            "label": "P13 离散折现",
            "description": "单期现金流资产价格折现计算模型"
      },
      {
            "pageNumber": 16,
            "label": "P16 多期收益",
            "description": "多期现金流折现与资产负债价格公式"
      },
      {
            "pageNumber": 19,
            "label": "P19 价格规律",
            "description": "利率与价格反向变动及期限敏感性规律"
      },
      {
            "pageNumber": 28,
            "label": "P28 久期缺口",
            "description": "资产负债久期缺口模型与净资产免疫"
      },
      {
            "pageNumber": 35,
            "label": "P35 麦考勒久期",
            "description": "麦考勒久期标准数学定义与计算步骤"
      },
      {
            "pageNumber": 36,
            "label": "P36 计算例题",
            "description": "债券麦考勒久期标准例题拆解"
      }
],
    "realSlides": [
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
    "keyPages": [
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
    "coreConcepts": [
      "【**麦考勒久期** (Macaulay Duration)】：现金流折现加权平均回收时间。衡量债券价格对市场利率敏感度的核心指标，$D = \\sum_{t=1}^T t \\cdot w_t$。",
      "【**修正久期** (Modified Duration)】：离散复利下 $D^* = \\frac{D}{1 + y}$，连续复利下 $D^* = D$。**度量价格相对变动百分比与利率变动的比例关系**。",
      "【**价格敏感度近似**】：$\\frac{\\Delta P}{P} \\approx -D^* \\cdot \\Delta y$。利率上升时价格下跌，**久期越长跌幅越大**；负号代表价格与利率的反向关系。",
      "【**绝对额久期** (Dollar Duration)】：$DD = P \\cdot D^*$（或记作 $D_{\\text{dollar}}$），度量利率变动 1 单位引起的债券市值绝对变动额：$\\Delta P \\approx -DD \\cdot \\Delta y$。"
    ],
    "formulas": [
      {
        "name": "麦考勒久期计算公式",
        "tex": "D = \\frac{\\sum_{t=1}^T t \\cdot \\frac{C_t}{(1+y)^t}}{P} = \\sum_{t=1}^T t \\cdot w_t",
        "desc": "其中 $w_t = \\frac{C_t / (1+y)^t}{P}$ 为第 $t$ 期现金流现值占债券总市值的权重，权重之和等于 1。"
      },
      {
        "name": "修正久期与价格变动百分比",
        "tex": "D^* = \\frac{D}{1 + y}, \\quad \\frac{\\Delta P}{P} \\approx -D^* \\cdot \\Delta y",
        "desc": "离散复利 $y$ 下修正久期为 $D/(1+y)$；若利率下降 0.5%，则 $\\Delta y = -0.005$，价格变动百分比为正（升值）。"
      },
      {
        "name": "绝对额久期与投资组合久期",
        "tex": "DD = P \\cdot D^*, \\quad D_{port}^* = \\sum_{i=1}^n w_i D_i^*",
        "desc": "资产负债组合总久期为各资产修正久期的市值加权平均值。"
      }
    ],
    "examTips": "重点计算：第 1 题与第 2 题在给定利率 (5% 或 10%) 下计算各期现金流折现并加权求久期；第 3 题与第 4 题利用修正久期快速近似求利率变动 ±0.5% 时的价格变动幅度。**久期越长，利率敏感性与价格波动幅度越大**！"
  },
  "2.1.5": {
    pdfUrl: "courseware/c2_1_2_interest_rate_2.pdf",
    pdfFileName: "2.1 利率风险管理（二）.pdf",
    totalPdfPages: 46,
    keyBookmarks: [
      {
            "pageNumber": 7,
            "label": "P7 凸度定义",
            "description": "债券价格对利率二阶导与弯曲曲率"
      },
      {
            "pageNumber": 11,
            "label": "P11 凸度公式",
            "description": "离散复利与连续复利凸度计算公式"
      },
      {
            "pageNumber": 15,
            "label": "P15 联合近似",
            "description": "久期+凸度联合二阶泰勒展开近似模型"
      },
      {
            "pageNumber": 27,
            "label": "P27 国债期货",
            "description": "国债期货对冲比率 N 核心计算公式"
      }
],
    "realSlides": [
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
    "keyPages": [
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
        "coreTakeaway": "$N = -\\frac{P \\cdot D^*_P}{F \cdot D^*_F}$，使组合总绝对额久期为 0 实现**久期完全免疫**。"
      }
    ],
    "coreConcepts": [
      "【**凸度** (Convexity)】：债券价格对利率的二阶偏导数除以价格（$C = \\frac{1}{P} \\frac{\\mathrm{d}^2 P}{\\mathrm{d}y^2}$）。反映价格-利率曲线的弯曲曲率。",
      "【**绝对额凸度** (Dollar Convexity)】：债券价格对利率的纯二阶偏导数 $\\frac{\\mathrm{d}^2 P}{\\mathrm{d}y^2}$，**不除以价格 $P$**。",
      "【**凸度的优良特性**】：对于普通非含权债券，**凸度恒大于 0**；在利率下降时价格上涨幅度大于久期预测值，在利率上升时价格下跌幅度小于久期预测值（**跌少涨多**）。",
      "【**久期+凸度联合二阶近似**】：$\\frac{\\Delta P}{P} \\approx -D^* \\cdot \\Delta y + \\frac{1}{2} C (\\Delta y)^2$，能够极大提高大幅利率变动时的预测精度。",
      "【**国债期货对冲比率**】：$N = -\\frac{P \\cdot D^*_P}{F \\cdot D^*_F}$，使组合总绝对额久期为 0 实现**久期免疫**。"
    ],
    "formulas": [
      {
        "name": "离散复利下的债券凸度公式",
        "tex": "C = \\frac{1}{P (1+y)^2} \\sum_{t=1}^T \\frac{t(t+1) C_t}{(1+y)^t}",
        "desc": "每一期现金流现值乘以 $t(t+1)$，求和后除以 $P(1+y)^2$。"
      },
      {
        "name": "久期与凸度二阶泰勒展开价格预测",
        "tex": "\\frac{\\Delta P}{P} \\approx -D^* \\cdot \\Delta y + \\frac{1}{2} C (\\Delta y)^2",
        "desc": "一阶项反映线性久期斜率，二阶修正项 $\\frac{1}{2} C (\\Delta y)^2$ 永远为正，抵消部分下跌或增加上涨。"
      },
      {
        "name": "国债期货利率对冲合约份数",
        "tex": "N = - \\frac{P \\cdot D^*_P}{F \\cdot D^*_F}",
        "desc": "$P$ 为现货资产市值，$F$ 为期货合约价值，$D^*_P$ 与 $D^*_F$ 分别为现货与期货的修正久期。"
      }
    ],
    "examTips": "易错陷阱：**久期是一阶敏感度，凸度是二阶敏感度**；绝对额久期与绝对额凸度分别对应一阶和二阶偏导数。资产负债缺口管理中：**若银行负债久期 > 资产久期，利率上升时负债贬值更多，净资产增加，对其有利**！"
  },
  "2.2.3": {
    pdfUrl: "courseware/c2_2_1_derivatives_1.pdf",
    pdfFileName: "2.2 衍生品风险管理（一）.pdf",
    totalPdfPages: 58,
    keyBookmarks: [
      {
            "pageNumber": 12,
            "label": "P12 远期定价",
            "description": "无套利定价原理与无红利现货远期价格"
      },
      {
            "pageNumber": 21,
            "label": "P21 支付红利",
            "description": "支付已知现金红利资产的远期合约理论价格"
      },
      {
            "pageNumber": 32,
            "label": "P32 最优对冲",
            "description": "最小方差对冲比率与基差风险"
      }
],
    "realSlides": [
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
    "keyPages": [
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
    "coreConcepts": [
      "【**Delta ($\\Delta$)**】：衍生品价格对标的资产价格的一阶导数（$\\Delta = \\frac{\\partial f}{\\partial S}$）。标的资产变化 1 单位，衍生品价值变化 $\\Delta$ 单位。",
      "【**Vega ($\\nu$)**】：衍生品价格对标的资产波动率的一阶偏导数（$\\nu = \\frac{\\partial f}{\\partial \\sigma}$）。波动率变动 1%，衍生品价值变动 $\\nu$ 单位。",
      "【**Rho ($\\rho$)**】：衍生品价格对无风险利率的一阶偏导数（$\\rho = \\frac{\\partial f}{\\partial r}$）。反映利率变动对期权价值的影响。",
      "【**Rho 变化百分比关键换算**】：无风险利率每变动 1 个百分点（即 $\\Delta r = 1\\% = 0.01$），期权价格变动额为 $\\Delta f \\approx \\rho \\cdot \\Delta r = 0.01 \\cdot \\rho$。**若 $\\rho = 15.1215$，则利率上升 1% 时期权价格增加 0.1512**！"
    ],
    "formulas": [
      {
        "name": "Delta 价格变动线性估计",
        "tex": "\\Delta \\Pi \\approx \\Delta \\cdot \\Delta S",
        "desc": "当 $\\Delta = -2100$，标的指数从 1000 上涨到 1005 ($\\Delta S = +5$)，组合价值变动 = $-2100 \\times 5 = -10500$（下降 10500）。"
      },
      {
        "name": "Vega 波动率变动价值估计",
        "tex": "\\Delta \\Pi \\approx \\nu \\cdot \\Delta \\sigma",
        "desc": "当 $\\text{Vega} = 200$，波动率从 12% 增至 14% ($\\Delta \\sigma = +2\\%$)，组合价值增加 = $200 \\times 2 = 400$。"
      },
      {
        "name": "Rho 利率变动百分比换算",
        "tex": "\\Delta f \\approx \\rho \\cdot \\Delta r = \\rho \\cdot 0.01",
        "desc": "无风险利率增长 1 个百分点时：$\\rho = 15.1215$ 时 $\\Delta f = 0.1512$；$\\rho = 8.9066$ 时 $\\Delta f = 0.0891$。"
      }
    ],
    "examTips": "高频考题（原题第 3 题）：注意题目明确要求“以小数形式表达，保留4位小数”。输入 15.1215 会得 0 分，**正确标准答案为 0.1512 与 0.0891**！"
  },
  "2.2.5": {
    pdfUrl: "courseware/c2_2_2_derivatives_2.pdf",
    pdfFileName: "2.2 衍生品风险管理（二）.pdf",
    totalPdfPages: 67,
    keyBookmarks: [
      {
            "pageNumber": 8,
            "label": "P8 利率互换",
            "description": "利率互换定价与浮动利率现值抵消机制"
      },
      {
            "pageNumber": 23,
            "label": "P23 期权希腊值",
            "description": "Delta / Gamma / Theta 核心定义"
      },
      {
            "pageNumber": 31,
            "label": "P31 Vega & Rho",
            "description": "波动率敏感度与无风险利率敏感度"
      },
      {
            "pageNumber": 42,
            "label": "P42 希腊值对冲",
            "description": "Delta-Gamma 联合中性对冲方程组"
      }
],
    "realSlides": [
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
    "keyPages": [
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
    "coreConcepts": [
      "【**经典差价期权策略**】：**牛市差价** (Bull Spread，买低卖高同类期权)、**熊市差价** (Bear Spread，买高卖低)、**蝶式差价** (Butterfly Spread，买两翼卖中间)、**跨式组合** (Straddle，同时买入相同执行价的看涨与看跌期权)。",
      "【**Delta 对冲机制**】：看涨期权 $\\Delta > 0$。卖出 100 份看涨期权（$\\Delta = -100 \\times 0.4 = -40$），需买入 40 单位标的资产以使总 Delta 为 0。",
      "【**标的资产的希腊字母特性**】：标的股票现货的 $\\Delta = 1, \\Gamma = 0, \\text{Vega} = 0$。**现货无法用于对冲 Gamma 与 Vega 风险**！",
      "【**动态对冲 (Dynamic Hedging)**】：期权是非线性产品，$\\Gamma \\neq 0$ 导致标的价格波动后 Delta 随之变化，因此 **Delta 对冲必须随标的价格变化不断动态调整**；线性期货产品的对冲则是“保完即忘”。",
      "【**Gamma 与 Vega 联合中性**】：必须至少引入 **2 种非线性期权产品**（$w_1, w_2$），联立二元一次方程组求解持有头寸，最后再用标的现货将总 Delta 补足为 0。"
    ],
    "formulas": [
      {
        "name": "Gamma 中性条件方程",
        "tex": "\\Gamma_{port} = \\Gamma_0 + w_1 \\Gamma_1 + w_2 \\Gamma_2 = 0",
        "desc": "标的现货 Gamma 为 0，必须依靠 2 种非线性期权产品消除总 Gamma。"
      },
      {
        "name": "Vega 中性条件方程",
        "tex": "\\mathcal{V}_{port} = \\mathcal{V}_0 + w_1 \\mathcal{V}_1 + w_2 \\mathcal{V}_2 = 0",
        "desc": "与 Gamma 方程联立解出期权 1 与期权 2 的持有头寸 $w_1$ 与 $w_2$。"
      },
      {
        "name": "Delta 最终补足方程",
        "tex": "\\Delta_{port} = \\Delta_0 + w_1 \\Delta_1 + w_2 \\Delta_2 + w_S = 0",
        "desc": "在确定 $w_1, w_2$ 后，通过买卖标的股票现货 $w_S$ 达到全维度中性。"
      }
    ],
    "examTips": "重点背诵：要想同时实现 Gamma 中性和 Vega 中性，**至少需要引入两份非线性的期权产品**！现货股票的 Gamma 和 Vega 恒等于 0，无法调节二阶风险。"
  },
  "2.3.4": {
    pdfUrl: "courseware/c2_3_var_es.pdf",
    pdfFileName: "2.3 在险价值和预期亏损.pdf",
    totalPdfPages: 43,
    keyBookmarks: [
      {
            "pageNumber": 6,
            "label": "P6 VaR定义",
            "description": "在险价值 VaR 置信水平与持有期数学定义"
      },
      {
            "pageNumber": 15,
            "label": "P15 预期亏损ES",
            "description": "条件在险价值 CVaR / ES 与次可加性证明"
      },
      {
            "pageNumber": 28,
            "label": "P28 一致性公理",
            "description": "单调性、次可加性、正齐次性、平移不变性"
      }
],
    "realSlides": [
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
    "keyPages": [
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
    "coreConcepts": [
      "【**在险价值 (VaR)**】：在给定的置信水平 $1-\\alpha$ (如 95% 或 99%) 和持有期 $T$ 内，投资组合可能遭受的最大潜在损失。$P(\\text{Loss} > \\text{VaR}) \\le \\alpha$。",
      "【**预期亏损 (ES / CVaR)**】：在损失超过 VaR 门限的极端尾部情形下，损失的期望平均值：$\\text{ES} = E[\\text{Loss} \\mid \\text{Loss} > \\text{VaR}]$。",
      "【**次可加性公理 (Subadditivity)**】：一致性风险测度必须满足 $\\rho(X + Y) \\le \\rho(X) + \\rho(Y)$（**分散投资降低风险**）。VaR 在肥尾非正态分布下可能违背次可加性，而 **ES 恒满足次可加性，是一致性风险测度**。",
      "【**分位数对应表**】：标准正态分布下，$\\alpha = 0.05$ 时 $z_\\alpha = -1.6449$ (对应双侧或单侧 95%)；$\\alpha = 0.01$ 时 $z_\\alpha = -2.3263$ (99% 置信度)。"
    ],
    "formulas": [
      {
        "name": "正态分布单资产 VaR 计算",
        "tex": "VaR_{1-\\alpha} = - (\\mu + z_\\alpha \\sigma) = - \\mu + |z_\\alpha| \\sigma",
        "desc": "当收益率服从 $N(\\mu, \\sigma^2)$ 时，损失分位数为 $-(\\mu + z_\\alpha \\sigma)$。当 $\\mu=0.1, \\sigma=0.2, \\alpha=0.01$ 时，$|z|=2.3263$，$\\text{VaR} = 2.3263 \\times 0.2 - 0.1 = 0.3653$ (36.53%)。"
      },
      {
        "name": "正态分布单资产 ES 计算",
        "tex": "ES_{1-\\alpha} = - \\mu + \\sigma \\frac{\\phi(z_\\alpha)}{\\alpha}",
        "desc": "$\\phi(z)$ 为标准正态概率密度函数。**ES 严格大于 VaR**，充分考虑了尾部灾难损失的深度。"
      },
      {
        "name": "投资组合协方差方差 VaR",
        "tex": "\\sigma_p = \\sqrt{w_1^2 \\sigma_1^2 + w_2^2 \\sigma_2^2 + 2 w_1 w_2 \\rho \\sigma_1 \\sigma_2}",
        "desc": "两资产等权重 (2/3 与 1/3) 无相关性 ($\\rho=0$) 时，$\\sigma_p = \\sqrt{(2/3)^2 \\times 0.05^2 + (1/3)^2 \\times 0.12^2} = 0.05207$。"
      }
    ],
    "examTips": "第 5 题贷款组合必考：单一贷款 98.75% 概率盈利 20 万（损失 -0.2），1.25% 概率损失 0~9.8 百万（均匀分布）。99% 置信度下两笔独立贷款 $\\text{VaR}(A+B) = 7.8 \\text{百万} > \\text{VaR}(A)+\\text{VaR}(B) = 5.8 \\text{百万}$，**直接证明了 VaR 不满足次可加性**！"
  },
  "3.4": {
    pdfUrl: "courseware/c3_2_default_risk.pdf",
    pdfFileName: "3.2 违约风险估计.pdf",
    totalPdfPages: 61,
    keyBookmarks: [
      {
            "pageNumber": 6,
            "label": "P6 穆迪违约表",
            "description": "历史平均累计违约率转移矩阵表"
      },
      {
            "pageNumber": 18,
            "label": "P18 边际违约率",
            "description": "边际违约率与条件违约概率递推公式"
      },
      {
            "pageNumber": 27,
            "label": "P27 债券利差倒推",
            "description": "从债券利差倒推市场隐含违约概率"
      },
      {
            "pageNumber": 45,
            "label": "P45 CDS溢差",
            "description": "信用违约互换 CDS 溢差定价与风险中性测度"
      }
],
    "realSlides": [
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
    "keyPages": [
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
    "coreConcepts": [
      "【**累积违约率** $Q(t)$】：借款人在期限 0 到 $t$ 内发生违约的概率。随着年限递增而**单调递增**。",
      "【**边际条件违约率** $d_t$】：在已存活到第 $t-1$ 年末的前提下，在第 $t$ 年发生违约的条件概率：$d_t = \\frac{Q_t - Q_{t-1}}{1 - Q_{t-1}}$。",
      "【**零息债券利差倒推违约率**】：在违约回收率为 $R$ 的假设下，违约风险债券收益率 $y$ 高于无风险收益率 $y^*$，利差补偿期望信用损失：$\\bar{\\lambda} \\approx \\frac{y - y^*}{1 - R}$。",
      "【**信用违约互换 (CDS)**】：信用保护买方向卖方支付固定季度年化溢差 (CDS Spread $s$)，当标的实体违约时**卖方赔付票面价值 $\\times (1 - R)$**。"
    ],
    "formulas": [
      {
        "name": "边际条件违约率递推公式",
        "tex": "d_t = \\frac{Q_t - Q_{t-1}}{1 - Q_{t-1}}",
        "desc": "$Q_t$ 为第 $t$ 年累积违约率。若 $Q_1=0.83\\%, Q_2=2.35\\%$，则第 2 年边际违约率 $d_2 = (2.35\\% - 0.83\\%)/(1 - 0.83\\%) = 1.53\\%$。"
      },
      {
        "name": "零息债券信用利差倒推平均违约率",
        "tex": "\\bar{\\lambda} = \\frac{y - y^*}{1 - R}",
        "desc": "$y$ 为企业债到期收益率，$y^*$ 为国债无风险利率，$R$ 为预期回收率 (Recovery Rate)。"
      },
      {
        "name": "CDS 盈亏平衡年化溢差公式",
        "tex": "s \\approx \\bar{\\lambda} (1 - R)",
        "desc": "基准 CDS 溢差等于年化违约概率乘以违约损失率 (LGD = $1 - R$)。"
      }
    ],
    "examTips": "重点背诵穆迪累积违约率表题：第 2 题与第 3 题连续考核根据累积违约概率计算各年度条件违约率 $d_1, d_2, d_3, d_4$；第 4~6 题通过零息债券价格或收益率利差计算平均年化违约概率。"
  },
  "5.4": {
    pdfUrl: "courseware/c5_liquidity_risk.pdf",
    pdfFileName: "5 流动性风险.pdf",
    totalPdfPages: 56,
    keyBookmarks: [
      {
            "pageNumber": 12,
            "label": "P12 买卖价差模型",
            "description": "外生流动性风险与买卖价差成本"
      },
      {
            "pageNumber": 25,
            "label": "P25 市场冲击模型",
            "description": "内生流动性风险与交易规模市场冲击函数"
      },
      {
            "pageNumber": 36,
            "label": "P36 LVaR模型",
            "description": "流动性调整在险价值 LVaR 联合计算模型"
      }
],
    "realSlides": [
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
    "keyPages": [
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
    "coreConcepts": [
      "【**外生流动性成本** (Exogenous Liquidity Cost)】：由市场买卖报价差 (Bid-Ask Spread) 引起的清算成本。与交易者的自身交易规模无关，**假定市场能够无摩擦吸收该头寸**：$\\text{Cost} = \\frac{1}{2} P \\cdot S$。",
      "【**内生流动性成本** (Endogenous Liquidity Cost)】：由于交易规模庞大（巨额清算），超出市场深度导致的**永久性与暂时性价格负面冲击** (Market Impact)。",
      "【**流动性调整在险价值 (LVaR)**】：在传统纯价格 VaR 基础上加上清算变现时的流动性摩擦成本：$\\text{LVaR} = \\text{VaR} + \\frac{1}{2} P (S + k \\cdot \\sigma_S)$。",
      "【**正态分布买卖价差**】：假定相对价差 $S \\sim N(\\mu_S, \\sigma_S^2)$，99% 置信度下清算成本为 $\\frac{1}{2} P (\\mu_S + 2.33 \\cdot \\sigma_S)$。"
    ],
    "formulas": [
      {
        "name": "外生流动性清算成本 (常数价差)",
        "tex": "Cost_{exogenous} = \\frac{1}{2} P \\cdot S",
        "desc": "$P$ 为头寸中间价总市值，$S$ 为相对买卖价差 $S = (P_{ask} - P_{bid}) / P_{mid}$。"
      },
      {
        "name": "随机买卖价差下的流动性调整 LVaR",
        "tex": "LVaR = VaR + \\frac{1}{2} P \\left( \\mu_S + z_\\alpha \\sigma_S \\right)",
        "desc": "在市场波动剧烈时期，买卖价差本身会急剧扩大，因此必须将价差的不确定性纳入风险总敞口。"
      },
      {
        "name": "内生流动性市场冲击模型",
        "tex": "\\Delta P = \\eta \\cdot \\left(\\frac{V}{ADV}\\right)^\\alpha",
        "desc": "$V$ 为清算头寸规模，$\text{ADV}$ 为日均交易量，$\eta$ 为市场冲击敏感系数。"
      }
    ],
    "examTips": "第 1 题与第 2 题计算：头寸总价值 $P = \\text{股数} \\times \\text{单价}$。计算外生清算成本 = $0.5 \\times P \\times S$；若考虑 99% 置信度随机价差，则附加项为 $0.5 \\times P \\times (\\mu_s + 2.3263 \\times \\sigma_s)$，两者相加得到 LVaR。"
  },
  "6.4": {
    pdfUrl: "courseware/c6_basel_regulation.pdf",
    pdfFileName: "6 国际监管规则.pdf",
    totalPdfPages: 92,
    keyBookmarks: [
      {
            "pageNumber": 14,
            "label": "P14 巴塞尔三大支柱",
            "description": "最低资本要求、监管审查、市场纪律"
      },
      {
            "pageNumber": 26,
            "label": "P26 资本充足率",
            "description": "核心一级资本 4.5%、一级资本 6%、总资本 8%"
      },
      {
            "pageNumber": 42,
            "label": "P42 资本缓冲要求",
            "description": "储备缓冲 2.5% 与逆周期资本缓冲 0~2.5%"
      },
      {
            "pageNumber": 68,
            "label": "P68 RAROC指标",
            "description": "风险调整资本收益率 RAROC 绩效衡量模型"
      }
],
    "realSlides": [
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
    "keyPages": [
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
    "coreConcepts": [
      "【**巴塞尔协议三大支柱**】：**第一支柱**：最低资本要求 (信用/市场/操作风险)；**第二支柱**：监管当局监督检查 (ICAAP)；**第三支柱**：市场纪律与信息披露。",
      "【**巴塞尔协议 III 最低资本比率指标**】：核心一级资本充足率 (**CET1 ≥ 4.5%**)；一级资本充足率 (**Tier 1 ≥ 6.0%**)；总资本充足率 (**Total Capital ≥ 8.0%**)。",
      "【**两大附加资本缓冲**】：**储备缓冲** (Capital Conservation Buffer, 2.5% 由核心一级资本构成)；**逆周期资本缓冲** (Countercyclical Buffer, 0% ~ 2.5%)。",
      "【**杠杆率与流动性监管**】：**杠杆率** (Tier 1 / 表内外总风险暴露) **≥ 3%**；**流动性覆盖率 (LCR) ≥ 100%**；**净稳定资金比率 (NSFR) ≥ 100%**。",
      "【**风险调整资本回报率 (RAROC)**】：$\\text{RAROC} = \\frac{\\text{收益} - \\text{经营成本} - \\text{预期损失 EL}}{\\text{经济资本 EC}}$。**经济资本代表未预期损失** ($UL = \\text{VaR} - \\text{EL}$)。"
    ],
    "formulas": [
      {
        "name": "资本充足率 (CAR) 计算公式",
        "tex": "CAR = \\frac{\\text{监管资本}}{\\text{风险加权资产 (RWA)}} = \\frac{\\text{总资本}}{\\sum \\text{资产}_i \\times \\text{风险权重}_i}",
        "desc": "现金与主权国债风险权重为 0%，同业拆借通常 20%，抵押贷款 50%，普通对公企业贷款 100%。"
      },
      {
        "name": "巴塞尔 III 综合最低资本门槛",
        "tex": "\\text{总资本要求} = 8.0\\% + 2.5\\% (\\text{储备缓冲}) = 10.5\\%",
        "desc": "当计入储备缓冲后，总资本要求提升至 10.5%，核心一级资本总要求提升至 7.0%。"
      },
      {
        "name": "RAROC 经济资本回报率模型",
        "tex": "RAROC = \\frac{\\text{收入} - \\text{费用} - \\text{预期损失 (EL)}}{\\text{经济资本 (EC)}}",
        "desc": "第 6 题原题计算：业务 A: $(500 - 10 - 100) / (1000 - 100) = 43.3\\%$；业务 B: $(500 - 10 - 100) / (2000 - 100) = 20.5\\%$。"
      }
    ],
    "examTips": "必背数字：**4.5% (CET1), 6% (Tier 1), 8% (Total), 2.5% (留存缓冲), 3% (杠杆率), 100% (LCR/NSFR)**。第 5 题区分 ROE 与 RAROC：传统 ROE 未考虑承担的非预期风险，而 **RAROC 引入经济资本衡量风险调整后的真实盈利能力**！"
  }
};

export const FORMULA_DICT: FormulaItem[] = [
  {
  "name": "期权 Delta (Δ)：价格变动敏感度与对冲比率",
  "category": "期权希腊值体系",
  "tex": "\\Delta = \\frac{\\partial V}{\\partial S}, \\quad \\Delta_c = N(d_1), \\quad \\Delta_p = N(d_1) - 1",
  "desc": "度量标的资产价格变动 1 单位时期权价值的变动量。看涨多头 $\\Delta \\in [0, 1]$，看跌多头 $\\Delta \\in [-1, 0]$。持有 1 手看涨期权多头需卖空 $\\Delta$ 份标的资产实现 Delta 中性。"
},
  {
  "name": "期权 Gamma (Γ)：Delta的斜率与凸度特征",
  "category": "期权希腊值体系",
  "tex": "\\Gamma = \\frac{\\partial^2 V}{\\partial S^2} = \\frac{\\partial \\Delta}{\\partial S} = \\frac{N'(d_1)}{S \\sigma \\sqrt{T}}",
  "desc": "度量标的资产价格变动对期权 Delta 的影响程度。平价期权（ATM）在到期前夕 Gamma 最大。期权买方 Gamma 恒为正（具备涨多跌少利好），期权卖方 Gamma 为负（极端行情下需承受剧烈动态对冲成本）。"
},
  {
  "name": "期权 Theta (Θ)：时间衰减敏感度",
  "category": "期权希腊值体系",
  "tex": "\\Theta = \\frac{\\partial V}{\\partial t} = -\\frac{S N'(d_1) \\sigma}{2 \\sqrt{T}} - r K e^{-rT} N(d_2)",
  "desc": "度量在其他条件不变下，时间每流逝 1 天期权价值的损耗额。由于期权时间价值必定随到期日临近而归零，期权多头的 Theta 几乎恒为负数（时间是买方的敌人、卖方的朋友）。"
},
  {
  "name": "期权 Vega (ν)：波动率敏感度",
  "category": "期权希腊值体系",
  "tex": "\\mathcal{V} = \\frac{\\partial V}{\\partial \\sigma} = S \\sqrt{T} N'(d_1)",
  "desc": "度量标的资产隐含波动率变动 1% 时期权价格的变动额。看涨期权与看跌期权的 Vega 完全相等且对买方恒为正。平价长期期权的 Vega 显著大于虚值/实值期权。"
},
  {
  "name": "期权 Rho (ρ)：无风险利率敏感度",
  "category": "期权希腊值体系",
  "tex": "\\rho_c = \\frac{\\partial c}{\\partial r} = K T e^{-rT} N(d_2), \\quad \\rho_p = \\frac{\\partial p}{\\partial r} = -K T e^{-rT} N(-d_2)",
  "desc": "度量无风险利率每变动 1 个百分点时期权价格的变动量。利率上升使看涨期权增值（$\\rho_c > 0$），看跌期权贬值（$\\rho_p < 0$）。"
},
  {
    "category": "久期与敏感性",
    "name": "麦考勒久期 (Macaulay Duration)",
    "tex": "D = \\frac{\\sum_{t=1}^T t \\cdot C_t (1+y)^{-t}}{P}",
    "usage": "计算债券现金流加权平均到期时间，衡量一阶利率风险"
  },
  {
    "category": "久期与敏感性",
    "name": "修正久期与价格敏感度",
    "tex": "D^* = \\frac{D}{1+y}, \\quad \\frac{\\Delta P}{P} \\approx -D^* \\Delta y",
    "usage": "估计利率微小变动时债券资产价格的百分比变动"
  },
  {
    "category": "凸度与对冲",
    "name": "债券凸度 (Convexity)",
    "tex": "C = \\frac{1}{P (1+y)^2} \\sum_{t=1}^T \\frac{t(t+1) C_t}{(1+y)^t}",
    "usage": "衡量价格-利率关系曲线弯曲程度的二阶指标"
  },
  {
    "category": "凸度与对冲",
    "name": "久期+凸度联合二阶近似",
    "tex": "\\frac{\\Delta P}{P} \\approx -D^* \\Delta y + \\frac{1}{2} C (\\Delta y)^2",
    "usage": "大幅度利率变动下精确预测债券价格变动"
  },
  {
    "category": "凸度与对冲",
    "name": "国债期货利率对冲比率",
    "tex": "N = - \\frac{P \\cdot D^*_P}{F \\cdot D^*_F}",
    "usage": "计算现货债券组合实现久期免疫所需的期货空头合约数"
  },
  {
    "category": "期权希腊字母",
    "name": "Delta 价格敏感度",
    "tex": "\\Delta = \\frac{\\partial f}{\\partial S}, \\quad \\Delta \\Pi = \\Delta \\cdot \\Delta S",
    "usage": "衡量标的资产价格变动对期权价值的影响与现货对冲股数"
  },
  {
    "category": "期权希腊字母",
    "name": "Vega 波动率敏感度",
    "tex": "\\nu = \\frac{\\partial f}{\\partial \\sigma}, \\quad \\Delta \\Pi = \\nu \\cdot \\Delta \\sigma",
    "usage": "标的资产波动率每变动 1 个百分点，期权价值的变动额"
  },
  {
    "category": "期权希腊字母",
    "name": "Rho 利率变动百分比换算",
    "tex": "\\Delta f \\approx \\rho \\cdot 0.01 \\quad (\\Delta r = 1\\%)",
    "usage": "无风险利率上升 1% 时期权价格增加 0.01 * rho"
  },
  {
    "category": "在险价值 VaR",
    "name": "单资产正态分布 VaR",
    "tex": "VaR_{1-\\alpha} = - (\\mu + z_\\alpha \\sigma) = |z_\\alpha| \\sigma - \\mu",
    "usage": "置信度 1-alpha 下资产在持有期内的最大可能损失"
  },
  {
    "category": "在险价值 VaR",
    "name": "预期亏损 (Expected Shortfall / CVaR)",
    "tex": "ES_{1-\\alpha} = E[L \\mid L > VaR_{1-\\alpha}]",
    "usage": "尾部极端损失的期望平均值，满足次可加性公理"
  },
  {
    "category": "信用风险",
    "name": "边际条件违约率递推",
    "tex": "d_t = \\frac{Q_t - Q_{t-1}}{1 - Q_{t-1}}",
    "usage": "由穆迪累积违约率 Q(t) 递推计算第 t 年发生的条件违约率"
  },
  {
    "category": "信用风险",
    "name": "债券信用利差倒推违约率",
    "tex": "\\bar{\\lambda} \\approx \\frac{y - y^*}{1 - R}",
    "usage": "根据企业债券与国债的收益率利差和违约回收率倒推年化违约概率"
  },
  {
    "category": "流动性风险",
    "name": "流动性调整后在险价值 (LVaR)",
    "tex": "LVaR = VaR + \\frac{1}{2} P \\left( \\mu_S + z_\\alpha \\sigma_S \\right)",
    "usage": "将资产清算时的买卖价差外生流动性成本整合到总风险价值"
  },
  {
    "category": "国际监管规则",
    "name": "巴塞尔资本充足率指标",
    "tex": "CAR = \\frac{\\text{资本总额}}{\\text{风险加权资产 (RWA)}} \\ge 8.0\\%",
    "usage": "商业银行总资本充足率 ≥ 8%，一级资本 ≥ 6%，核心一级 ≥ 4.5%"
  },
  {
    "category": "国际监管规则",
    "name": "风险调整资本收益率 (RAROC)",
    "tex": "RAROC = \\frac{\\text{净收入} - \\text{经营费用} - \\text{预期损失}}{\\text{经济资本 (VaR - EL)}}",
    "usage": "衡量扣除预期损失后每单位未预期风险资本创造的真实股东回报"
  }
];
