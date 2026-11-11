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
    "analysis": "【选项逐一解析与核心考点】：\n• A项错误：久期（麦考勒久期）表示现金流加权平均回收期限（单位为年），不是债券价格对利率的一阶偏导数。\n• B项错误：修正久期是债券价格对利率变动的半弹性（百分比变动率），数学定义为 $D^* = -\\frac{1}{P} \\frac{\\mathrm{d}P}{\\mathrm{d}y}$，包含价格倒数 $1/P$ 并带有负号，非单纯的价格一阶偏导数。\n• C项错误：绝对额久期（Dollar Duration, $DD$）定义为 $DD = - \\frac{\\mathrm{d}P}{\\mathrm{d}y} = P \\cdot D^*$，带有负号，严格来说是一阶导数的相反数（负一阶导数），非单纯的一阶偏导数。\n• D项正确：绝对额凸度（Dollar Convexity）严格定义为债券价格对利率的二阶偏导数，即 $DC = \\frac{\\mathrm{d}^2 P}{\\mathrm{d}y^2}$，准确度量价格-利率曲线的二阶弯曲程度（曲率）。故选 **D**。",
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
    "analysis": "【选项逐一解析与核心考点】：\n• A项正确：麦考勒久期计算公式为 $D = \\sum_{t=1}^T t \\cdot \\frac{CF_t / (1+y)^t}{P}$，其加权权重 $w_t = \\frac{CF_t / (1+y)^t}{P}$ 严格是各期现金流现值（Present Value）占债券总价格的比例。\n• B项错误：加权权重必须使用现金流的“现值”而非名义“金额”。未折现的未来名义现金流忽视了货币时间价值，无法直接跨期相加加权。\n• C项错误：久期度量的是债券价格关于利率变动的一阶切线变化率（线性敏感度），反映二阶导数曲率关系的是凸度（Convexity）。\n• D项正确：修正久期与价格的一阶导数直接相关（$\\frac{\\mathrm{d}P}{P} \\approx -D^* \\Delta y$），准确反映了价格对利率的一阶导数关系。故选 **AD**。",
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
    "analysis": "【考点解析】：\n银行净资产价值定义为 $E = A - L$（资产市值减负债市值）。\n久期衡量资产和负债市值对利率变动的敏感程度。当利率上升时，资产与负债的贴现现值都会下降。\n由于该银行负债的久期大于资产的久期，负债对利率上升更敏感，负债市值的缩水幅度大于资产市值的缩水幅度（即“欠债减少的金额超过了资产减少的金额”），银行净资产 $E$ 反而增加。因此利率**上升**对该银行有利，故选 **B**。",
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
    "analysis": "【考点解析】：\n依据债券现金流贴现公式 $P = \\sum_{t=1}^T \\frac{CF_t}{(1+y)^t}$，市场基准收益率 $y$ 处于分母位置。\n利率与债券价格呈现严格的反向变动关系：\n• 利率上升时，分母折现率增大，现金流现值折算减少，债券价格**下降**；\n• 利率下降时，分母折现率减小，现金流现值折算增加，债券价格**上升**。\n故正确答案为 **A**（下降；上升）。",
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
    "analysis": "【考点解析】：\n银行净资产价值为 $E = A - L$。\n当银行资产久期大于负债久期时，资产端对市场利率变动更为敏感。\n当利率下降时，资产和负债的贴现价值都会上升，但由于资产久期更长，资产市值的增加幅度明显超过负债市值的上升幅度，银行净资产 $E$ 增值。因此利率**下降**对该银行有利，故选 **B**。",
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
    "analysis": "【考点解析】：\n判断：**正确**（标答：对）。\n【严密数理推导】：\n在连续复利计息下，债券价格公式为 $P = \\sum_{t=1}^T CF_t e^{-rt}$。\n对连续复利市场利率 $r$ 求一阶导数得：$\\frac{\\mathrm{d}P}{\\mathrm{d}r} = - \\sum_{t=1}^T t \\cdot CF_t e^{-rt} = -P \\cdot D$（其中 $D$ 为麦考勒久期）。\n由修正久期定义式 $D^* = -\\frac{1}{P} \\frac{\\mathrm{d}P}{\\mathrm{d}r} = -\\frac{1}{P} (-P \\cdot D) = D$。\n因此在连续复利情况下，麦考勒久期与修正久期**严格相等**。题干表述完全正确。",
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
    "analysis": "【考点解析】：\n判断：**正确**（标答：对）。\n【核心考点】：\n由债券价格变动的一阶近似关系式 $\\frac{\\Delta P}{P} \\approx -D^* \\Delta y$ 可知：\n当利率上升（$\\Delta y > 0$）时，资产和负债的价格均呈现下降趋势；\n久期 $D^*$ 衡量价格对利率变动的敏感程度，久期越长，负号后面的跌幅绝对值越大，价格下降得越多。题干表述完全正确。",
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
    "analysis": "【考点解析】：\n判断：**错误**（标答：错）。\n【核心考点】：\n依据价格变动公式 $\\frac{\\Delta P}{P} \\approx -D^* \\Delta y$，当利率下降（$\\Delta y < 0$）时，资产和负债的价格都会上升。\n由于久期衡量的是价格对利率的敏感倍数，久期越长说明价格对利率波动越敏感，在利率下降时其价格上升的幅度应该**越大（越多）**，而不是“上升越少”。题干表述“上升越少”颠倒了敏感度规律。",
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
    "analysis": "【选项逐一解析与核心考点】：\n• A项正确：期货、远期、互换等线性产品的损益与标的资产价格呈现严格的一次线性关系，对冲比率固定恒定，建仓后无需根据行情动态调整头寸，属于经典的“保完即忘（Set and Forget）”策略。\n• B项正确：标的现货自身价值 $V=S$，其一阶导数 $\\Delta = \\mathrm{d}S/\\mathrm{d}S = 1$，二阶导数 $\\Gamma = 0$。因此通过买卖标的资产份额可以灵活调整总组合的 Delta 达到中性，但因其自身 Gamma 为 0，对冲标的资产无法使组合 Gamma 归零。\n• C项正确：由于标的资产自身 Gamma 恒等于 0，向组合中引入任何数量的标的资产都不会增加或减少组合的总 Gamma 值。\n• D项正确：标的资产无法改变 Gamma 和 Vega。若要使投资组合的 Gamma 和 Vega 同时达到 0，必须联立包含两个未知数的二元一次方程组，因此至少需要引入两种不同行权价或到期日的期权产品。故选 **ABCD**。",
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
    "analysis": "【选项逐一解析与核心考点】：\n• A项正确：期货合约到期损益为 $S_T - F$，是标的资产到期价格 $S_T$ 的一次线性函数，具有对称线性的损益特征。\n• B项正确：互换合约本质上是一系列远期合约的组合，其净现金流与标的资产变量呈线性变动关系，属于线性产品。\n• C项正确：远期合约到期损益为 $S_T - K$，损益与标的价格呈现严格的一阶线性关系，属于线性产品。\n• D项错误：期权损益包含 $\\max(S_T - K, 0)$，其损益函数在行权价处发生折角，属于典型的非线性衍生品（具有二阶曲率 $\\Gamma \\ne 0$）。故选 **ABC**。",
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
    "analysis": "【选项逐一解析与核心考点】：\n• A项正确：Rho ($\\rho$) 度量期权价值对无风险基准利率 $r$ 的敏感度，定义式为 $\\rho = \\frac{\\partial f}{\\partial r}$。\n• B项正确：Gamma ($\\Gamma$) 度量 Delta 对标的价格的敏感度（价格二阶偏导数），定义式为 $\\Gamma = \\frac{\\partial^2 f}{\\partial S^2} = \\frac{\\partial \\Delta}{\\partial S}$。\n• C项正确：Delta ($\\Delta$) 度量期权价值对标的资产价格 $S$ 的一阶敏感度，定义式为 $\\Delta = \\frac{\\partial f}{\\partial S}$。\n• D项正确：Theta ($\\Theta$) 度量期权价值随时间流逝的衰减变动速度，定义式为 $\\Theta = \\frac{\\partial f}{\\partial t}$。\n• E项正确：Vega ($\\mathcal{V}$) 度量期权价值对标的资产波动率 $\\sigma$ 的敏感度，定义式为 $\\mathcal{V} = \\frac{\\partial f}{\\partial \\sigma}$。\n综上所述，五大希腊字母偏导数定义式全部严格准确，故选 **ABCDE**。",
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
    "analysis": "【选项逐一解析与核心考点】：\n期权 Delta 定义为 $\\Delta = \\frac{\\Delta f}{\\Delta S} = 0.4$。Delta 为正数表示期权价值与标的资产价格呈同向变动关系：\n• A项正确：当标的资产价格下降 1 元（$\\Delta S = -1$），期权理论价格同向下降 $\\Delta f = 0.4 \\times (-1) = -0.4$ 元。\n• B项错误：标的资产上涨时，正 Delta 的期权价格应该上涨，而非下降。\n• C项正确：当标的资产价格上涨 1 元（$\\Delta S = +1$），期权理论价格同向上涨 $\\Delta f = 0.4 \\times (+1) = +0.4$ 元。\n• D项错误：标的资产下降时，期权价格应同向下降，而非反向上涨。故选 **AC**。",
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
    "analysis": "【考点解析】：\n投资者卖出 100 单位 $\\Delta = 0.4$ 的期权产品，在组合中形成的期权空头 Delta 为 $-100 \\times 0.4 = -40$。\n要使投资组合的总 Delta 达到 0 实现中性，必须引入 $+40$ 的 Delta 头寸。\n因为标的资产自身的 Delta 严格等于 $+1$，所以投资者必须在现货市场上**买入 40 单位标的资产**（提供 $40 \\times 1 = +40$ 的 Delta），使得总 Delta 为 $-40 + 40 = 0$。故选 **A**。",
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
    "analysis": "【考点解析】：\n卖出 100 单位 $\\Delta = 0.4$ 的期权，形成的组合空头 Delta 敞口为 $-100 \\times 0.4 = -40$。\n由于标的资产多头自身的 Delta 为 $+1$，为完全对冲该方向性价格风险，投资者应当**买入 40 单位标的资产**，使得总 Delta 敞口满足 $\\Delta_{\\text{总}} = -40 + 40 \\times 1 = 0$。故选 **D**。",
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
    "analysis": "【考点解析】：\n投资者以 3000 美元/盎司的价格卖出 30 盎司黄金远期，该操作建立了一个 30 盎司的空头头寸（$\\Delta_{\\text{空头}} = -30$）。\n当未来黄金市场价格上涨时，该远期空头将面临严重亏损风险。\n因为黄金现货多头的 Delta 严格等于 $+1$，为完全规避价格上涨风险并使组合实现 Delta 中性，投资者应当同时在现货市场上**买入 30 盎司黄金现货**（提供 $+30$ 的 Delta 多头），完全锁定买卖价差与交割风险。故选 **C**。",
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
    "analysis": "【考点解析】：\n判断：**正确**（标答：对）。\n【核心考点】：\nDelta 对冲的核心思想是通过在投资组合中引入新的衍生品或标的资产交易，使原有头寸的 Delta 与新增交易的 Delta 代数相加严格等于 0（即 $\\Delta_{\\text{组合}} = \\sum w_i \\Delta_i = 0$）。\n此时投资组合的理论价值对标的资产微小价格变动的一阶敏感度为 0，组合达到 Delta 中性状态。题干表述完全符合金融工程定义。",
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
    "analysis": "【考点解析】：\n判断：**错误**（标答：错）。\n【核心考点】：\n标的资产自身价值关于标的价格的一阶导数为 1（$\\Delta=1$），二阶偏导数严格等于 0（$\\Gamma_{\\text{标的}} = \\frac{\\mathrm{d}^2 S}{\\mathrm{d}S^2} = 0$）。\n因此，无论在现货市场买入还是卖出多少份额的标的资产，其所带来的 Gamma 贡献恒为 0，只能调节 Delta，对投资组合的 Gamma **完全起不到任何对冲作用**。要对冲 $-5000$ 的 Gamma，必须买入具有正 Gamma 的非线性期权产品。",
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
    "analysis": "【考点解析】：\n判断：**正确**（标答：对）。\n【核心考点】：\n对于标的资产现货本身，其价值函数即为标的价格自身 $V = S$。\n一阶导数（Delta）：$\\Delta = \\frac{\\mathrm{d}S}{\\mathrm{d}S} = 1$；\n二阶导数（Gamma）：$\\Gamma = \\frac{\\mathrm{d}^2 S}{\\mathrm{d}S^2} = \\frac{\\mathrm{d}(1)}{\\mathrm{d}S} = 0$。\n因此现货产品的 Delta 恒等于 1，Gamma 恒等于 0，题干表述完全正确。",
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
    "analysis": "【考点解析】：\n判断：**正确**（标答：对）。\n【核心考点】：\n远期合约到期损益为：多头 $V_{\\text{多}} = S_T - K$，空头 $V_{\\text{空}} = K - S_T$。\n对标的资产价格 $S$ 求一阶偏导数：\n• 远期多头的 Delta：$\\Delta_{\\text{多}} = \\frac{\\partial (S_T - K)}{\\partial S_T} = +1$；\n• 远期空头的 Delta：$\\Delta_{\\text{空}} = \\frac{\\partial (K - S_T)}{\\partial S_T} = -1$。\n题干表述准确无误。",
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
    "analysis": "【考点解析】：\n判断：**错误**（标答：错）。\n【核心考点】：\n只有期货、远期等损益严格线性的产品，对冲比率才恒定不变，属于“保完即忘（Set and Forget）”策略。\n期权属于典型的非线性产品，其二阶导数 $\\Gamma \\ne 0$，意味着 Delta 会随着标的资产价格的变动和时间的流逝而持续发生漂移。一旦标的价格变动，原先建立的 Delta 中性就会被破坏，因此必须随行情进行**动态调仓（Dynamic Rebalancing）**，绝不属于保完即忘策略。",
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
    "analysis": "【考点解析与联立求解步骤】：\n设买入第一种期权 $w_1$ 份，第二种期权 $w_2$ 份。\n根据题给参数，组合初始状态为：$\\Delta_0 = -1000, \\Gamma_0 = -2000$。\n两种备选期权的敏感度参数如下：\n• 期权 1：$\\Delta_1 = 0.5, \\Gamma_1 = 2.0$；\n• 期权 2：$\\Delta_2 = 0.8, \\Gamma_2 = 1.2$。\n为使总组合的 Delta 和 Gamma 同时归零，联立二元一次线性方程组：\n$$\\begin{cases} 0.5 w_1 + 0.8 w_2 - 1000 = 0 & (\\Delta\\text{ 中性}) \\\\ 2.0 w_1 + 1.2 w_2 - 2000 = 0 & (\\Gamma\\text{ 中性}) \\end{cases}$$\n由第二个方程化简得：$w_1 = 1000 - 0.6 w_2$。\n代入第一个方程：$0.5(1000 - 0.6 w_2) + 0.8 w_2 = 1000 \\implies 500 + 0.5 w_2 = 1000 \\implies 0.5 w_2 = 500 \\implies w_2 = 1000$。\n代回求解 $w_1$：$w_1 = 1000 - 0.6 \\times 1000 = 400$。\n故第一空填 **400**，第二空填 **1000**。",
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
    "analysis": "【考点解析与计算步骤】：\n投资组合当前的 $\\Gamma_{\\text{组合}} = -1000$。\n由于标的资产自身 Gamma 为 0，必须通过购买期权来对冲 Gamma 风险。\n设购买该期权产品的份数为 $N$。该期权产品的单份 $\\Gamma_{\\text{期权}} = 0.5$。\n为使组合实现 Gamma 中性，需满足：\n$$\\Gamma_{\\text{总}} = \\Gamma_{\\text{组合}} + N \\cdot \\Gamma_{\\text{期权}} = -1000 + N \\times 0.5 = 0$$\n解方程得：$0.5 N = 1000 \\implies N = \\frac{1000}{0.5} = 2000$ 份。\n故正确答案填 **2000**。",
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
    "analysis": "【考点解析与参数代入】：\n题给参数：股票初始价值 $V_0 = 100$ 元，日均收益率 $\\mu = 10\\%$，标准差 $\\sigma = 20\\%$。\n日价值损失公式为：$\\text{VaR} = - V_0 (\\mu + z \\cdot \\sigma)$，其中 $z$ 为对应左尾分位数。\n1. 在 95% 置信水平下（5% 显着性水平，分位数 $z_{0.05} = -1.6449$）：\n   $$\\text{VaR}_{95\\%} = - 100 \\times (0.10 + (-1.6449) \\times 0.20) = - 100 \\times (0.10 - 0.32898) = 22.898 \\approx 22.90\\text{ 元}$$\n2. 在 99% 置信水平下（1% 显着性水平，分位数 $z_{0.01} = -2.3263$）：\n   $$\\text{VaR}_{99\\%} = - 100 \\times (0.10 + (-2.3263) \\times 0.20) = - 100 \\times (0.10 - 0.46526) = 36.526 \\approx 36.53\\text{ 元}$$\n故第一空填 **22.90**，第二空填 **36.53**。",
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
    "analysis": "【考点解析与条件违约率推导】：\n题给 A 级债券前三年累积违约概率：$Q(1) = 0.05\\%, Q(2) = 0.16\\%, Q(3) = 0.34\\%$。\n1. 各年条件违约概率（边际违约率）计算：\n   • 第 1 年条件违约概率：$d_1 = Q(1) = 0.05\\%$；\n   • 第 2 年条件违约概率：$d_2 = \\frac{Q(2) - Q(1)}{1 - Q(1)} = \\frac{0.16\\% - 0.05\\%}{1 - 0.05\\%} = \\frac{0.11\\%}{99.95\\%} \\approx 0.11\\%$；\n   • 第 3 年条件违约概率：$d_3 = \\frac{Q(3) - Q(2)}{1 - Q(2)} = \\frac{0.34\\% - 0.16\\%}{1 - 0.16\\%} = \\frac{0.18\\%}{99.84\\%} \\approx 0.18\\%$；\n2. 前三年年化平均违约率 $\\bar{d}$ 计算：\n   由公式 $(1 - \\bar{d})^3 = 1 - Q(3) = 1 - 0.0034 = 0.9966$，解得：\n   $$\\bar{d} = 1 - (0.9966)^{1/3} \\approx 1 - 0.99886 = 0.001135 \\approx 0.11\\%$$\n故四空依次填 **0.05%**、**0.11%**、**0.18%**、**0.11%**。",
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
    "analysis": "【考点解析与公式推导】：\n题给 Ba 级债券前三年累积违约概率：$Q(1) = 0.83\\%, Q(2) = 2.35\\%, Q(3) = 4.14\\%$。\n1. 各年条件违约概率计算：\n   • 第 1 年条件违约概率：$d_1 = Q(1) = 0.83\\%$；\n   • 第 2 年条件违约概率：$d_2 = \\frac{Q(2) - Q(1)}{1 - Q(1)} = \\frac{2.35\\% - 0.83\\%}{1 - 0.83\\%} = \\frac{1.52\\%}{99.17\\%} \\approx 1.53\\%$；\n   • 第 3 年条件违约概率：$d_3 = \\frac{Q(3) - Q(2)}{1 - Q(2)} = \\frac{4.14\\% - 2.35\\%}{1 - 2.35\\%} = \\frac{1.79\\%}{97.65\\%} \\approx 1.83\\%$；\n2. 前三年年化平均违约率 $\\bar{d}$ 计算：\n   由公式 $(1 - \\bar{d})^3 = 1 - Q(3) = 1 - 0.0414 = 0.9586$，解得：\n   $$\\bar{d} = 1 - (0.9586)^{1/3} = 1 - 0.98596 \\approx 1.40\\%$$\n故四空依次填 **0.83%**、**1.53%**、**1.83%**、**1.40%**。",
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
    "analysis": "【考点解析与期望现值计算】：\n题给参数：1 年期零息债券面值 100 万美元，回收率 0%（违约损失率 $\\text{LGD} = 100\\%$），现价为面值的 80%（即价格 $P = 80$ 万元），无风险利率 $r = 5\\%$。\n设 1 年期累积违约概率为 $Q$。\n在风险中性世界中，债券当前市场价格等于未来现金流的无风险折现期望值：\n$$80 = \\frac{100 \\times (1 - Q) + 0 \\times Q}{1 + 5\\%}$$\n$$80 = \\frac{100(1 - Q)}{1.05} \\implies 1 - Q = \\frac{80 \\times 1.05}{100} = 0.84 \\implies Q = 1 - 0.84 = 16\\%$$\n因此该债券在第 1 年末的估计违约概率为 **16%**。",
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
    "analysis": "【考点解析与 CDS 违约概率推导】：\n题给参数：CDS 年保费溢差 $s = 325\\text{ bps} = 0.0325$，违约损失率 $\\text{LGD} = 40\\% = 0.40$。\n1. 计算年化违约危险率（Hazard Rate）$\\lambda$：\n   $$\\lambda = \\frac{s}{\\text{LGD}} = \\frac{0.0325}{0.40} = 0.08125$$\n2. 计算参考实体未来 2 年内累积违约概率 $Q(2)$：\n   依据指数分布违约概率公式：\n   $$Q(2) = 1 - e^{-2\\lambda} = 1 - e^{-2 \\times 0.08125} = 1 - e^{-0.1625} \\approx 1 - 0.84998 = 0.15002 \\approx 15\\%$$\n故第一空填 **15%**。",
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
    "analysis": "【考点解析与泊松强度计算】：\n题给参数：CDS 每年保费溢差 $s = 325\\text{ bps} = 0.0325$，违约损失率 $\\text{LGD} = 100\\% = 1.0$。\n1. 计算无风险违约强度（Hazard Rate）$\\lambda$：\n   $$\\lambda = \\frac{s}{\\text{LGD}} = \\frac{0.0325}{1.0} = 0.0325$$\n2. 计算未来 2 年内累积违约概率 $Q(2)$：\n   依据指数分布违约概率公式：\n   $$Q(2) = 1 - e^{-2\\lambda} = 1 - e^{-2 \\times 0.0325} = 1 - e^{-0.065} \\approx 1 - 0.937067 = 0.062933 = 6.29\\%$$\n故第一空填 **6.29%**。",
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
    "analysis": "【考点解析与内生价格冲击公式】：\n根据头寸内生流动性冲击模型，大额头寸在市场中平仓时会引起不利的价格变动。\n价格冲击系数 $\\alpha = 0.1$，头寸规模与日成交量比值为 $\\beta = 50\\%$。\n内生流动性成本调整项为：$\\Delta P / P = \\alpha \\cdot \\beta = 0.1 \\times 50\\% = 5\\%$。\n故本题第一空填 **5%**。",
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
    "analysis": "【考点解析与风险加权资产计算】：\n1. 计算总风险加权资产（RWA）：\n   • 现金：$2000\\text{ 万元} = 0.2\\text{ 亿元} \\times 0\\% = 0\\text{ 亿元}$；\n   • 地方政府债券：$2\\text{ 亿元} \\times 20\\% = 0.4\\text{ 亿元}$；\n   • 住房抵押贷款：$5\\text{ 亿元} \\times 50\\% = 2.5\\text{ 亿元}$；\n   • 商业贷款 (A级)：$30\\text{ 亿元} \\times 50\\% = 15.0\\text{ 亿元}$；\n   • 商业贷款 (BB+)：$10\\text{ 亿元} \\times 100\\% = 10.0\\text{ 亿元}$。\n   $$\\text{RWA} = 0 + 0.4 + 2.5 + 15.0 + 10.0 = 27.9\\text{ 亿元}$$\n2. 计算监管资本金底线要求：\n   根据巴塞尔协议监管要求，最低总资本充足率底线为 $8\\%$：\n   $$\\text{监管资本金} = \\text{RWA} \\times 8\\% = 27.9 \\times 0.08 = 2.232\\text{ 亿元}$$\n故第一空填 **2.232**。",
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
      "【麦考勒久期 (Macaulay Duration)】\n**[blue:现金流折现加权平均回收时间]**。是衡量债券价格对市场到期收益率利率变动的**[emerald:一阶敏感度核心指标]**。\n\n【数理特征与计算关键】\n$D = \\sum_{t=1}^T t \\cdot w_t = \\frac{\\sum_{t=1}^T t \\cdot \\frac{C_t}{(1+y)^t}}{P}$，其中 $w_t = \\frac{PV(C_t)}{P}$ 为第 $t$ 期现金流现值占总价格的权重，满足 $\\sum w_t = 1$。**[emerald:零息债券的麦考勒久期严格等于其到期期限 $T$]**；**[rose:付息债券的久期必定小于到期期限 $T$]**。\n\n【考点运用与避坑指南】\n期末考试第 1 题与第 2 题核心考点：在给定利率（5% 或 10%）下列表折现并加权求久期；**[amber:久期越长，资产利率敏感性越高]**，在利率同向变动时**[rose:价格波动幅度越大]**！",
      "【修正久期 (Modified Duration)】\n衡量债券价格对利率微小变动的**[blue:相对变动比例（一阶半弹性）]**。\n\n【数理特征与计算关键】\n离散年复利计息下，$D^* = \\frac{D}{1+y}$；若为一年复利 $m$ 次，则 $D^* = \\frac{D}{1+y/m}$；在**[emerald:连续复利计息下，修正久期与麦考勒久期严格相等]**，即 **[emerald:$D^* = D$]**。\n\n【考点运用与避坑指南】\n判断题高频考点：**[emerald:连续复利下久期与修正久期相等]**为正确。计算价格变动时**[rose:必须使用修正久期 $D^*$ 而非麦考勒久期 $D$]**！",
      "【价格敏感度一阶近似】\n利用泰勒展开一阶导数估算债券价格变动百分比的**[blue:线性近似模型]**。\n\n【数理特征与计算关键】\n近似公式：$\\frac{\\Delta P}{P} \\approx -D^* \\Delta y$，或绝对金额变动 $\\Delta P \\approx -D^* P \\Delta y$。**[rose:负号体现利率与债券价格反向变动的基本规律]**。\n\n【考点运用与避坑指南】\n单选题原题考点：利率上升 $1\\%$（$\\Delta y = +0.01$），修正久期为 4 年，则价格近似**[rose:下跌 4%]**；若利率下降，价格近似**[emerald:上涨 4%]**。",
      "【绝对额久期 (Dollar Duration)】\n利率每变动 1 单位时，债券市值变动的**[blue:绝对货币金额]**。\n\n【数理特征与计算关键】\n定义式：$DD = P \\cdot D^* = -\\frac{\\mathrm{d}P}{\\mathrm{d}y}$。资产组合的绝对额久期**[emerald:等于各单项资产绝对额久期之和]**：$DD_{\\text{总}} = \\sum DD_i$。\n\n【考点运用与避坑指南】\n资产负债免疫计算题：要使银行净资产免受利率变动冲击，必须满足**[emerald:资产绝对额久期严格等于负债绝对额久期]**（$DD_A = DD_L$）。"
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
      "【债券凸度 (Convexity)】\n度量债券价格对利率变动敏感度（斜率）的变化速度，即价格对利率的**[blue:二阶导数]**。\n\n【数理特征与计算关键】\n公式：$C = \\frac{1}{P} \\frac{\\mathrm{d}^2 P}{\\mathrm{d}y^2}$。不含权普通债券的**[emerald:凸度恒大于 0]**，在收益率曲线坐标轴上呈现**[emerald:严格向下凸（曲线上凸）的几何特征]**。\n\n【考点运用与避坑指南】\n重要性质：当收益率下降时，价格加速上升；当收益率上升时，价格减速下跌。因此凸度具有**[emerald:跌少涨多的优良不对称特性]**！",
      "【久期+凸度联合二阶近似】\n结合一阶斜率与二阶曲率，大幅提升大幅度利率冲击下债券价格预测精度的**[blue:二阶泰勒展开式]**。\n\n【数理特征与计算关键】\n核心公式：$\\frac{\\Delta P}{P} \\approx$ **[rose:$-D^* \\Delta y$]** $+$ **[emerald:$\\frac{1}{2} C (\\Delta y)^2$]** 。**[emerald:凸度修正项恒为正数]**，用于弥补久期一阶低估真实价格的误差。\n\n【考点运用与避坑指南】\n期末填空题第 1 题原题：已知 $D^* = 4.76$，$C = 28.5$，利率变动 $\\Delta y = +2\\%$，则 $\\frac{\\Delta P}{P} \\approx -4.76 \\times 0.02 + 0.5 \\times 28.5 \\times (0.02)^2 =$  **[rose:$-0.0895$]** （即**[rose:下跌 8.95%]**）。",
      "【雷丁顿免疫策略 (Redington Immunization)】\n通过资产与负债结构配置，使金融机构净资产在利率微小扰动下**[blue:市值保持不变甚至增值]**的管理策略。\n\n【数理特征与计算关键】\n雷丁顿免疫三大定律：1. **[blue:现值相等]** $P_A = P_L$；2. **[blue:久期相等]** $D_A = D_L$；3. **[emerald:资产凸度严格大于负债凸度]** $C_A > C_L$。\n\n【考点运用与避坑指南】\n判断题核心避坑：条件 3 必须是**[emerald:资产凸度大于负债凸度]**，若反过来小于则会导致利率变动时净资产出现亏损！",
      "【国债期货对冲比率模型】\n利用国债期货合约完全对冲现货固定收益组合利率波动风险的**[blue:数量匹配模型]**。\n\n【数理特征与计算关键】\n对冲张数：$N =$ **[rose:$-\\frac{P \\cdot D^*_P}{F \\cdot D^*_F}$]**，其中 $P, D^*_P$ 为现货市值与修正久期，$F, D^*_F$ 为期货合约名义价值与修正久期。**[rose:负号表示现货多头需做空期货]**。\n\n【考点运用与避坑指南】\n期末计算题真题：现货组合价值 1 亿元，$D^*_P = 5$；国债期货合约价值 100 万元，$D^*_F = 4$。则所需空头张数 $N = \\frac{10000 \\times 5}{100 \\times 4} =$  **[amber:125 张]** 。"
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
      "【期权 Delta ($\\Delta$)】\n衍生品理论价值对标的资产价格的**[blue:一阶导数（偏导斜率）]**。\n\n【数理特征与计算关键】\n数学定义：$\\Delta = \\frac{\\partial V}{\\partial S}$。看涨期权 $\\Delta_c = N(d_1) \\in$  **[emerald:[0, 1]]** ；看跌期权 $\\Delta_p = N(d_1) - 1 \\in$  **[rose:$[-1, 0]$]** 。现货标的自身的 $\\Delta$ **[emerald:严格等于 1]**。\n\n【考点运用与避坑指南】\n考试计算题第 1 题：衍生品组合 $\\Delta = -2100$，标的指数从 1000 涨到 1005（$\\Delta S = +5$），则组合价值变动 $\\Delta V = \\Delta \\cdot \\Delta S = -2100 \\times 5 =**[rose:-10500 元（价值下降 10500）]**。",
      "【期权 Vega ($\\mathcal{V}$ 或 $\\nu$)】\n度量衍生品理论价值对标的资产隐含波动率的**[blue:一阶敏感性指标]**。\n\n【数理特征与计算关键】\n数学公式：$\\mathcal{V} = \\frac{\\partial V}{\\partial \\sigma} = S \\sqrt{T} N'(d_1)$。对于看涨期权和看跌期权，两者的 Vega 完全相等且对买方**[emerald:恒为正数（$\\mathcal{V} > 0$）]。平价期权 (ATM) 且剩余期限较长时期权**[amber:Vega 最大]**。\n\n【考点运用与避坑指南】\n考试计算题第 2 题：基于汇率组合的 Vega 是 200（每 1% 波动率变动），波动率从 12% 变为 14%（变动 2 个百分点），组合价值变动为$200 \\times (14 - 12) = **[emerald:400 元]**。",
      "【期权 Rho ($\\rho$)】\n度量衍生品价值对无风险市场基准利率变动的**[blue:一阶敏感度指标]**。\n\n【数理特征与计算关键】\n看涨期权$\\rho_c = K T e^{-rT} N(d_2) > 0$；看跌期权 $\\rho_p = -K T e^{-rT} N(-d_2) < 0$。利率上升使未来行权价折现减小，**[emerald:对看涨期权有利]**，**[rose:对看跌期权不利]**。\n\n【考点运用与避坑指南】\n考试计算题第 3 题核心陷阱：$\\rho = 15.1215$表示利率变动 1 单位（100%）的变动。题目问“无风险利率每增长 1 个百分点（1%）期权价格增加多少”，答案**[rose:必须除以 100]**，即$\\Delta f \\approx 15.1215 \\times 0.01 =$ **[amber:0.1512]**！",
      "【远期与期货的核心特征对比】\n场外 OTC 远期合约与交易所标准化期货合约的**[blue:机制与风险对比]**。\n\n【数理特征与计算关键】\n远期合约：场外定制、非标准化、流动性差、**[rose:面临显著对手方信用违约风险]**，仅到期日一次性结算；期货合约：交易所标准化、**[emerald:每日盯市无负债结算（Mark to Market）]**、违约风险由交易所清算所承担。\n\n【考点运用与避坑指南】\n期末多选题核心：期货由于每日现金流盯市结算，当期货价格与利率正相关时，期货价格**[amber:略高于远期价格]**；若负相关则**[amber:略低于远期价格]**。"
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
    examTips: "重点计算：第 1 题$\\Delta = -2100$ 时标的从 1000 涨到 1005 的价值变动；第 2 题 Vega = 200 波动率变动 2% 时的价值增加；第 3 题 $\\rho = 15.1215$利率每增长 1 个百分点期权价格增加值（除以 100 得 0.1512）！"
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
            "coreTakeaway": "牛市差价买低卖高同类期权，熊市差价买高卖低。通过不同行权价锁定最大收益与最大亏损。"
      },
      {
            "pageNumber": 19,
            "title": "Delta 动态对冲与股票现货属性",
            "description": "期权非线性特性要求动态调仓",
            "coreTakeaway": "股票现货$\\Delta = 1, \\Gamma = 0, \\text{Vega} = 0$。现货无法用于对冲二阶风险。"
      },
      {
            "pageNumber": 27,
            "title": "Gamma 与 Vega 联合中性化",
            "description": "同时消除一阶与二阶希腊字母风险",
            "coreTakeaway": "必须引入至少 2 种非线性期权联立二元方程组，最后用股票现货补齐 Delta。"
      }
],
    coreConcepts: [
      "【期权 Delta 对冲与中性状态】\n通过在组合中按比例买入或卖出标的现货，使总组合 Delta 为 0，**[blue:规避标的微小价格波动风险]**。\n\n【数理特征与计算关键】\n若持有 1 份看涨期权多头（$\\Delta = 0.4$），需**[rose:卖出 0.4 份标的现货]**实现 Delta 中性；若卖出 1 份看涨期权（$\\Delta = -0.4$），则需**[emerald:买入 0.4 份标的现货]**实现 Delta 中性。\n\n【考点运用与避坑指南】\n真题选择题第 5 题与第 6 题原题：对冲方向务必分清！标的现货多头的 Delta 为 +1，空头 Delta 为 -1。对冲目标是让$\\Delta_{\\text{总}} = \\Delta_{\\text{期权}} + N_{\\text{标的}} \\cdot 1 = 0$。",
      "【期权 Gamma ($\\Gamma$) 与曲率风险】\n标的资产价格变动对期权 Delta 的导数（二阶偏导曲率），**[blue:度量 Delta 对冲的动态不稳定程度]**。\n\n【数理特征与计算关键】\n$\\Gamma = \\frac{\\partial^2 V}{\\partial S^2} = \\frac{\\partial \\Delta}{\\partial S}$。看涨与看跌期权的 Gamma 相等且多头**[emerald:恒大于 0]**；**[amber:平价期权 (ATM) 临近到期时 Gamma 达到极大峰值]**；现货标的本身的 Gamma**[rose:严格等于 0]**。\n\n【考点运用与避坑指南】\n期末选择题高频：因为标的资产自身 Gamma 为 0，所以仅用标的资产无法消除 Gamma 风险，**[blue:对冲 Gamma 必须引入其他期权衍生品]**！",
      "【期权 Theta ($\\Theta$) 时间衰减】\n度量期权理论价值随时间自然流逝而减少的损耗速率（**[blue:时间价值的蒸发速度]**）。\n\n【数理特征与计算关键】\n数学公式：$\\Theta = \\frac{\\partial V}{\\partial t}$。由于到期时间缩短使期权获利概率下降，期权多头的 Theta**[rose:几乎恒为负数（多头承受时间价值磨损）]**。平价期权临近到期日时，时间价值衰减**[amber:加速恶化]**。\n\n【考点运用与避坑指南】\n真题考点：做空期权收取权利金的投资者，通过承担尾部风险换取正的 Theta 收益（时间是卖方的朋友，买方的敌人）。",
      "【线性产品 vs 非线性产品对冲策略】\n远期、期货、互换等线性衍生品与期权非线性衍生品在**[blue:风险收益曲线上的本质差异]**。\n\n【数理特征与计算关键】\n线性产品：收益与标的价格呈严格直线关系，对冲比率固定，**[emerald:保完即忘（无需动态调仓）]**，但锁定了上限同时剥夺了收益可能；非线性产品：收益曲线向上弯曲（凸性），具有选择权，但需要**[amber:连续动态调仓维护 Delta 中性]**。\n\n【考点运用与避坑指南】\n期末简答与选择题：Delta-Gamma-Vega 联合中性对冲必须至少使用**[blue:两种不同的期权资产 + 标的现货资产]**方可完全解出三元方程组！"
],
    formulas: [
      {
            "name": "看涨看跌期权 Delta 与现货对冲",
            "tex": "\\Delta_c = N(d_1), \\quad \\Delta_p = N(d_1) - 1, \\quad \\Delta_{\\text{现货}} = 1",
            "desc": "卖出看涨期权需买入$\\Delta_c$ 份标的现货对冲；卖出看跌期权需卖出 $|\\Delta_p|$ 份标的现货对冲。"
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
            "coreTakeaway": "$\\text{ES} = E[L \\mid L > \\text{VaR}]$。ES 恒满足次可加性，是一致性风险测度。"
      },
      {
            "pageNumber": 26,
            "title": "多资产组合方差协方差 VaR",
            "description": "分散化投资降低总风险敞口",
            "coreTakeaway": "$\\sigma_p = \\sqrt{w_1^2 \\sigma_1^2 + w_2^2 \\sigma_2^2 + 2 w_1 w_2 \\rho \\sigma_1 \\sigma_2}$，相关系数越低分散效应越强。"
      }
],
    coreConcepts: [
      "【在险价值 (Value at Risk, VaR)】\n在正常的市场条件与给定的置信水平$1-\\alpha$ 下，某一金融资产或投资组合在未来特定持有期 $\\Delta t$内所面临的**[rose:最大可能潜在损失额]**。\n\n【数理特征与计算关键】\n参数正态法核心公式：$\\text{VaR} =$ **[amber:$P \\cdot z_\\alpha \\cdot \\sigma \\sqrt{\\Delta t}$]**。平方根时间法则是时间扩展基准（从 1 天扩展到 $T$ 天需乘以 $\\sqrt{T}$）。常用临界值：95% 单尾 $z =$ **[emerald:1.645]**；99% 单尾 $z =$ **[emerald:2.326]**。\n\n【考点运用与避坑指南】\n考试计算题第 1 题与第 2 题原题：投资 1000 万元，日波动率 2%，求 95% 置信度下的 10 天 VaR。$\\text{VaR} = 1000 \\times 1.645 \\times 0.02 \\times \\sqrt{10} =$ **[rose:104.04 万元]**。",
      "【预期亏损 (Expected Shortfall, ES / CVaR)】\n当投资组合的损失已经超过 VaR 门槛值极端情形下，**[rose:所遭受损失的条件数学期望值（尾部平均亏损）]**。\n\n【数理特征与计算关键】\n数学定义：$\\text{ES}_\\alpha = E[L \\mid L > \\text{VaR}_\\alpha]$。连续分布下正态 ES 公式：$\\text{ES}_\\alpha = \\mu + \\sigma \\frac{\\phi(z_\\alpha)}{\\alpha}$。对于标准正态，99% 置信度下 $\\text{ES} \\approx 2.665 \\sigma$。\n\n【考点运用与避坑指南】\n核心理论考点：**[emerald:ES 严格满足次可加性公理，是一致性风险测度（Coherent Risk Measure）]**，克服了 VaR 忽视尾部极端厚尾损失幅度的致命缺陷。",
      "【双资产投资组合 VaR 与分散化效应】\n利用资产收益率之间的相关系数$\\rho$降低整体组合市场风险的**[blue:多资产 VaR 计量模型]**。\n\n【数理特征与计算关键】\n组合方差与波动率：$\\sigma_p^2 = w_1^2 \\sigma_1^2 + w_2^2 \\sigma_2^2 + 2 w_1 w_2 \\rho_{12} \\sigma_1 \\sigma_2$。组合 VaR 满足：$\\text{VaR}_p = \\sqrt{\\text{VaR}_1^2 + \\text{VaR}_2^2 + 2 \\rho_{12} \\text{VaR}_1 \\text{VaR}_2}$。\n\n【考点运用与避坑指南】\n真题考点：只要两资产不完全正相关（$\\rho_{12} < 1$），组合的 VaR 就**[emerald:严格小于两资产各自 VaR 之和]**，差额即为**[emerald:分散化收益（Diversification Benefit）]**。",
      "【一致性风险测度四大公理 (Coherent Risk Measures)】\nArtzner 等人提出评价一个风险测度指标在数理逻辑与金融经济学上是否合理的**[blue:四大公理化体系]**。\n\n【数理特征与计算关键】\n四大公理：1.**[blue:单调性]**（若$X \\le Y$，则 $\\rho(X) \\ge \\rho(Y)$）；2.**[blue:无风险转移性 / 现金平移性]**；3.**[blue:正齐次性]**（$\\rho(\\lambda X) = \\lambda \\rho(X)$）；4.**[rose:次可加性]**（$\\rho(X+Y) \\le \\rho(X) + \\rho(Y)$）。\n\n【考点运用与避坑指南】\n期末考试高频核心原题：**[rose:VaR 不满足次可加性公理（无法保证投资组合分散化风险降低）]**；而**[emerald:ES (预期亏损) 严格满足全部四大公理，是一致性风险测度]**！"
],
    formulas: [
      {
            "name": "单资产正态分布 VaR",
            "tex": "\\mathrm{VaR}_{1-\\alpha} = W_0 \\cdot (z_\\alpha \\sigma - \\mu)",
            "desc": "持有市值$W_0$ 下的正态 VaR。95% 置信度 $z=1.645$；99% 置信度 $z=2.326$。"
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
            "coreTakeaway": "$d_t = \\frac{Q_t - Q_{t-1}}{1 - Q_{t-1}}$。分母为上一期末的累积存活率。"
      },
      {
            "pageNumber": 17,
            "title": "零息企业债券利差倒推违约率",
            "description": "利用风险债券收益率与国债利差倒推违约风险",
            "coreTakeaway": "$\\bar{\\lambda} \\approx \\frac{y - y^*}{1 - R}$。利差等于平均年化违约概率乘以违约损失率。"
      },
      {
            "pageNumber": 25,
            "title": "信用违约互换 (CDS) 定价机制",
            "description": "信用保护买方支付的固定溢差",
            "coreTakeaway": "$s \\approx \\bar{\\lambda} (1 - R)$。盈亏平衡保费直接对标预期信用损失。"
      }
],
    coreConcepts: [
      "【穆迪累积违约率表与生存概率】\n基于穆迪评级大表，度量特定信用等级债券在未来各个年限内的**[blue:总违约发生概率]**与**[emerald:生存概率]**。\n\n【数理特征与计算关键】\n数学恒等式：$S(t) + Q(t) = 1$，其中 $Q(t)$ 为前 $t$年内发生违约的**[rose:累积违约率]**，$S(t)$ 为存活至第 $t$年末的**[emerald:累积生存概率]**。\n\n【考点运用与避坑指南】\n考试计算题第 1 题：已知 A 级债券 3 年累积违约率为 0.13%，4 年累积违约率为 0.25%，则存活到第 3 年末的概率为**[emerald:99.87%]**，存活到第 4 年末的概率为**[emerald:99.75%]**。",
      "【条件边际违约率递推模型】\n已知某债券在已安全存活到第$t-1$ 年末的条件下，在第 $t$年内发生违约的**[blue:条件概率（边际违约率）]**。\n\n【数理特征与计算关键】\n递推递推式：**[emerald:$d_t = \\frac{Q(t) - Q(t-1)}{1 - Q(t-1)} = \\frac{S(t-1) - S(t)}{S(t-1)}$]**。前$t$ 年累积生存概率是各期条件不违约概率的连乘积：$S(t) = \\prod_{i=1}^t (1 - d_i)$。\n\n【考点运用与避坑指南】\n考试计算题第 2 题与第 3 题核心：分子是第 $t$年单年无条件违约增量，分母**[amber:必须除以第$t-1$年末的生存概率]**，绝不能直接将两年累积违约率相减作为边际违约率！",
      "【零息债券信用利差倒推违约率】\n通过同期限企业信用债券与无风险国债之间的收益率差额（信用利差$s$），**[blue:倒推市场隐含违约概率]**。\n\n【数理特征与计算关键】\n定价方程：$e^{-y t} = e^{-y^* t} [1 - Q(t) + Q(t) \\cdot R]$。当利差较小时的标准近似公式：**[emerald:年化违约概率$\\bar{PD} \\approx \\frac{s}{1 - R}$]**，其中$s = y - y^*$ 为信用利差，$R$ 为违约回收率。\n\n【考点运用与避坑指南】\n考试计算题第 4 题与第 5 题原题：1 年期企业债收益率 6%，无风险利率 4%（利差 $s = 2\\%$），回收率 $R = 40\\%$。则年化违约概率 $PD \\approx \\frac{0.02}{1 - 0.4} =$ **[amber:3.33%]**！",
      "【信用违约互换 (CDS) 溢差与违约率估算】\n作为信用衍生品旗舰产品，CDS 保费溢差与参考实体违约密度、违约损失率 (LGD) 之间的**[blue:平价估值模型]**。\n\n【数理特征与计算关键】\n核心等式：固定保费支付流现值等于违约损失或有赔付流现值。基准近似关系式为：**[emerald:CDS 溢差$s \\approx \\lambda \\cdot (1 - R)$]**，其中$\\lambda$ 为年化违约危险率（Hazard Rate）。\n\n【考点运用与避坑指南】\n考试计算题第 6 题与第 7 题原题：5 年期 CDS 年保费为 120 个基点（$s = 1.2\\%$），回收率 40%。年违约密度 $\\lambda = \\frac{0.012}{0.6} =$ **[amber:2.0%]**；5 年累积违约概率 $Q(5) = 1 - e^{-0.02 \\times 5} =$ **[rose:9.52%]**。"
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
            "coreTakeaway": "$\\text{Cost}_{\\text{exo}} = \\frac{1}{2} P \\cdot S$。其中 $S = \\frac{P_{\\text{ask}} - P_{\\text{bid}}}{P_{\\text{mid}}}$为相对买卖价差。"
      },
      {
            "pageNumber": 16,
            "title": "流动性调整后在险价值 (LVaR)",
            "description": "整合价格风险与流动性随机冲击",
            "coreTakeaway": "$\\text{LVaR} = \\text{VaR} + \\frac{1}{2} P (\\mu_S + z_\\alpha \\sigma_S)$。99% 置信度下包含价差波动上界。"
      },
      {
            "pageNumber": 22,
            "title": "内生流动性市场冲击模型",
            "description": "大额交易超出市场深度引起的价格下挫",
            "coreTakeaway": "$\\Delta P = \\eta \\cdot \\left(\\frac{V}{\\text{ADV}}\\right)^\\alpha$。交易规模占日均成交量比重越大，冲击越剧烈。"
      }
],
    coreConcepts: [
      "【外生流动性成本 vs 内生流动性成本】\n区分由市场普遍深度决定的交易成本与由交易者自身大额清算引发的**[blue:冲击折价成本]**。\n\n【数理特征与计算关键】\n外生流动性风险：由标的资产市场本身的属性决定，以**[blue:买卖价差比（Bid-Ask Spread）]**衡量，小额交易者无法改变；内生流动性风险：由**[rose:自身交易头寸过大、清算过于紧迫]**引发，推动市场价格向不利方向滑移。\n\n【考点运用与避坑指南】\n期末选择题原题：外生流动性成本等于头寸名义价值的一半买卖价差比率：**[emerald:Cost =$\\frac{1}{2} P \\cdot S$]**。",
      "【流动性调整后在险价值 (LVaR)】\n将市场价格变动风险与资产变现变现摩擦成本合二为一的**[blue:综合在险价值指标]**。\n\n【数理特征与计算关键】\n核心公式：**[amber:$LVaR = VaR + \\frac{1}{2} P (\\mu_s + z_\\alpha \\sigma_s)$]**，其中$\\mu_s, \\sigma_s$分别为买卖价差比率的均值与波动率。\n\n【考点运用与避坑指南】\n考试计算题第 1 题与第 2 题原题：在常规 VaR 基础上加上 99% 置信度下的外生价差冲击调整项，**[rose:LVaR 严格大于常规纯价格变动 VaR]**。",
      "【大额持股内生市场冲击折价模型】\n度量大股东或基金大额清算对市场深度造成的价格不利冲击惩罚的**[blue:内生模型]**。\n\n【数理特征与计算关键】\n弹性冲击公式：$\\Delta P / P = -\\alpha \\cdot (\\text{清算规模} / \\text{日均交易量})^\\beta$。清算时间越短或持仓占日均交易量比例越高，**[rose:内生价格折价准备金越大]**。\n\n【考点运用与避坑指南】\n期末原题考点：对于持股占比较高、市场交易冷清的头寸，仅使用即期收盘价计算资产价值会**[rose:严重高估净资产]**，必须预提大额流动性折价损失准备！",
      "【流动性黑洞与正反馈踩踏效应】\n市场流动性在极短时间内完全枯竭、所有参与者同向抛售引发的**[rose:灾难性正反馈踩踏机制]**。\n\n【数理特征与计算关键】\n触发机理：止损策略（Stop-Loss）与动态对冲追跌卖出$\\rightarrow$ 价格剧烈下跌 $\\rightarrow$ 触发更多风控止损与保证金追加（Margin Call） $\\rightarrow$形成**[rose:自我强化的恶性循环]**。\n\n【考点运用与避坑指南】\n典型历史案例与期末考题：1987 年黑色星期一投资组合保险策略、1998 年长期资本管理公司 (LTCM) 危机与 2007 年量化对冲基金流动性危机。"
],
    formulas: [
      {
            "name": "经流动性调整的在险价值 (LVaR)",
            "tex": "\\mathrm{LVaR} = \\mathrm{VaR} + \\frac{1}{2} P (\\mu_s + z_\\alpha \\sigma_s)",
            "desc": "将资产清算时的外生买卖价差比率（均值$\\mu_s$、标准差 $\\sigma_s$）冲击摩擦成本整合至总风险价值中。"
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
            "coreTakeaway": "第一支柱：最低资本要求；第二支柱：监督检查；第三支柱：市场纪律与信息披露。"
      },
      {
            "pageNumber": 18,
            "title": "巴塞尔协议 III 核心资本指标红线",
            "description": "分层次监管资本充足率最低要求",
            "coreTakeaway": "核心一级资本CET1 ≥ 4.5%；一级资本Tier 1 ≥ 6.0%；总资本充足率CAR ≥ 8.0%；留存缓冲2.5%。"
      },
      {
            "pageNumber": 29,
            "title": "风险调整资本收益率 (RAROC) 评价",
            "description": "扣除预期损失后衡量经济资本创造的真实回报",
            "coreTakeaway": "$\\text{RAROC} = \\frac{\\text{收入} - \\text{费用} - \\text{EL}}{\\text{经济资本 (EC)}}$。相比普通 ROE 能更科学地评价风险调整绩效。"
      }
],
    coreConcepts: [
      "【巴塞尔协议三大支柱体系】\n巴塞尔委员会构筑的现代商业银行全面审慎监管架构的**[blue:三大立柱]**。\n\n【数理特征与计算关键】\n第一支柱：**[blue:最低资本要求]**（覆盖信用、市场与操作三大风险加权资产）；第二支柱：**[emerald:监管当局的监督检查]**（评估内部资本充足评估程序 ICAAP，具备强行要求提高资本要求权限）；第三支柱：**[purple:市场纪律与信息披露]**（通过透明披露强化股东与债权人市场监督）。\n\n【考点运用与避坑指南】\n期末简答题高频：三大支柱缺一不可，共同构筑防范系统性金融风险的监管堤坝。",
      "【四大资本充足率红线与合格资本构成】\n巴塞尔协议 III 针对银行资本质量与吸损能力设立的**[blue:法定监管底线指标]**。\n\n【数理特征与计算关键】\n四大硬性红线要求：1. **[blue:核心一级资本充足率 (CET1)$\\ge 4.5\\%$]**；2.**[blue:一级资本充足率 (Tier 1)$\\ge 6.0\\%$]**；3.**[emerald:总资本充足率 (Total CAR)$\\ge 8.0\\%$]**；4.**[purple:杠杆率指标$\\ge 3.0\\%$]**（不挂钩 RWA 的硬性杠杆约束）。\n\n【考点运用与避坑指南】\n考试核心扣分陷阱：**[rose:次级债券仅能计入合格二级资本（Tier 2），严禁计入核心一级资本]**；商誉与无形资产必须从核心一级资本中**[rose:全额扣除]**！",
      "【三大资本缓冲金字塔】\n巴塞尔 III 在最低资本底线之上构建的宏观审慎**[blue:三层逆周期缓冲层梯队]**。\n\n【数理特征与计算关键】\n三层缓冲层构成：1.**[amber:资本留存缓冲（2.5%）]**：必须全部由核心一级资本承担，不足时限制银行分红；2.**[amber:逆周期资本缓冲（0~2.5%）]**：信贷过度扩张期计提；3.**[amber:系统重要性银行 (G-SIBs) 附加资本（1.0%~3.5%）]**。\n\n【考点运用与避坑指南】\n期末考试计算题原题：考虑 2.5% 留存缓冲后，商业银行核心一级资本的实际运营红线为**[emerald:7.0%]**（$4.5\\% + 2.5\\%$），总资本实际运营红线为**[emerald:10.5%]**（$8.0\\% + 2.5\\%$）！",
      "【风险加权资产 (RWA) 计量与权重表】\n将银行表内各项资产及表外项目按违约风险大小分别赋予权数计算出的**[blue:总风险加权资产]**。\n\n【数理特征与计算关键】\n表内标准权重：主权国债**[emerald:0%]**；多边开发机构**[emerald:20%]**；合格住宅按揭贷款**[emerald:35%]~[emerald:50%]**；普通商业贷款**[amber:100%]**；表外信用转换：表外授信承诺先乘以**[purple:信用转换系数 (CCF)]**，再乘以对应对手方风险权重。\n\n【考点运用与避坑指南】\n期末计算题第 1 题与第 2 题原题：某银行有国债 2000 万（权重 0%）、商业贷款 5000 万（权重 100%），总资本 500 万。$RWA = 2000 \\times 0 + 5000 \\times 1 = 5000$ 万。总资本充足率 $= 500 / 5000 =$ **[emerald:10.0%]** $\\ge 8.0\\%$，满足监管要求！",
      "【风险调整资本回报率 (RAROC)】\n以经济资本 (EC) 作为风险分母，综合评价业务真实盈利能力与股东价值创造的[blue:绩效评估指标]**。\n\n【数理特征与计算关键】\n计算公式：**[emerald:$\\text{RAROC} = \\frac{\\text{总收入} - \\text{运营成本} - \\text{预期损失 (EL)}}{\\text{经济资本 (EC / 未预期损失)}} $]**。\n\n【考点运用与避坑指南】\n期末考试真题计算与决策准则：若某一信贷项目的 RAROC**[emerald:大于银行设定的加权平均资本成本 (WACC)]**，则该业务**[emerald:创造经济增加值 (EVA > 0)，应予以批准通过]**；反之则予以否决！"
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
    examTips: "重点计算：第 1 题与第 2 题各类资产与给定风险权重乘积求和得 RWA，最低资本要求为$\\text{RWA} \\times 8\\%$；第 3 题与第 4 题金融机构资本充足率（80 亿一般债务不属于资本，长期次级债只能计入二级资本）；第 5 题与第 6 题不同策略的 RAROC 计算！"
  },
};

export const FORMULA_DICT: FormulaItem[] = [
  {
    "category": "利率久期凸度",
    "name": "麦考勒久期 (Macaulay Duration)",
    "tex": "D = \\frac{\\sum_{t=1}^T t \\cdot \\frac{C_t}{(1+y)^t}}{P} = \\sum_{t=1}^T t \\cdot w_t",
    "desc": "**[blue:现金流折现加权平均回收时间]**。衡量债券价格对市场到期收益率利率变动的**[emerald:一阶敏感度核心指标]**。**[emerald:零息债券久期严格等于期限$T$]**；**[rose:付息债券久期必定小于期限$T$]**。"
  },
  {
    "category": "利率久期凸度",
    "name": "连续复利下的麦考勒久期",
    "tex": "D = -\\frac{1}{P} \\frac{\\mathrm{d}P}{\\mathrm{d}r} = \\frac{\\sum_{t=1}^T t \\cdot C_t e^{-rt}}{P}",
    "desc": "连续复利利息力$r$下，价格对利率的**[blue:半弹性]**。连续复利下**[emerald:修正久期与麦考勒久期严格相等]**（$D^* = D$）。"
  },
  {
    "category": "利率久期凸度",
    "name": "修正久期与价格敏感度",
    "tex": "D^* = \\frac{D}{1 + y/m}, \\quad \\frac{\\Delta P}{P} \\approx -D^* \\cdot \\Delta y",
    "desc": "离散复利每年 $m$次计息下的修正久期。度量利率变动 1 单位引起的债券价格变动百分比，**[rose:负号表示价格与收益率反向变动]**。"
  },
  {
    "category": "利率久期凸度",
    "name": "绝对额久期 (Dollar Duration)",
    "tex": "DD = P \\cdot D^* = -\\frac{\\mathrm{d}P}{\\mathrm{d}y}, \\quad \\Delta P \\approx -DD \\cdot \\Delta y",
    "desc": "利率变动 1 单位引起债券价值变动的**[blue:绝对货币金额]**，常用于资产负债**[emerald:市值免疫管理]**。"
  },
  {
    "category": "利率久期凸度",
    "name": "基点价值 (DV01 / PV01)",
    "tex": "\\mathrm{DV01} = \\frac{P \\cdot D^*}{10000} = \\frac{DD}{10000}",
    "desc": "市场基准收益率变动**[amber:1 个基点（1 bp = 0.01% = 0.0001）]**时债券价值的绝对变动额。"
  },
  {
    "category": "利率久期凸度",
    "name": "资产组合久期 (Portfolio Duration)",
    "tex": "D_{port}^* = \\sum_{i=1}^n w_i D_i^*, \\quad w_i = \\frac{P_i}{P_{port}}",
    "desc": "债券投资组合修正久期**[emerald:严格等于各单项资产修正久期的市值权重加权平均值]**。"
  },
  {
    "category": "利率久期凸度",
    "name": "离散现金流债券凸度 (Convexity)",
    "tex": "C = \\frac{1}{P(1+y)^2} \\sum_{t=1}^T \\frac{t(t+1) C_t}{(1+y)^t}",
    "desc": "度量债券价格对利率敏感度变化率的**[blue:二阶指标]**。普通非含权债券**[emerald:凸度恒正（曲线上凸）]**，具有**[emerald:跌少涨多优良特性]**。"
  },
  {
    "category": "利率久期凸度",
    "name": "连续复利下的债券凸度",
    "tex": "C = \\frac{1}{P} \\frac{\\mathrm{d}^2 P}{\\mathrm{d}r^2} = \\frac{\\sum_{t=1}^T t^2 C_t e^{-rt}}{P}",
    "desc": "连续复利折现下债券价格对连续复利利率的**[blue:纯二阶导数归一化值]**，与离散凸度呈现极限定理对应。"
  },
  {
    "category": "利率久期凸度",
    "name": "久期+凸度泰勒二阶展开联合近似",
    "tex": "\\frac{\\Delta P}{P} \\approx -D^* \\Delta y + \\frac{1}{2} C (\\Delta y)^2",
    "desc": "大幅度利率变动下预测债券价格变动的**[blue:二阶泰勒级数近似式]**。**[emerald:凸度修正项恒为正]**，修正久期一阶低估真实价格的误差。"
  },
  {
    "category": "利率久期凸度",
    "name": "国债期货利率对冲比率",
    "tex": "N = -\\frac{P \\cdot D^*_P}{F \\cdot D^*_F} = -\\frac{DD_P}{DD_F}",
    "desc": "利用国债期货实现现货债券组合久期完全免疫所需的期货合约张数。**[rose:负号表示现货多头需建立期货空头头寸]**。"
  },
  {
    "category": "利率久期凸度",
    "name": "雷丁顿资产负债免疫三大条件",
    "tex": "P_A = P_L, \\quad D_A = D_L, \\quad C_A > C_L",
    "desc": "**[blue:资产现值等于负债现值]**（$P_A=P_L$）、**[blue:久期严格匹配]**（$D_A=D_L$）、**[emerald:资产凸度严格大于负债凸度]**（$C_A > C_L$）。"
  },
  {
    "category": "利率久期凸度",
    "name": "银行净资产久期缺口模型 (Duration Gap)",
    "tex": "DG = D_A - \\frac{L}{A} D_L, \\quad \\Delta E \\approx -A \\cdot DG \\cdot \\Delta y",
    "desc": "度量利率变动对商业银行股东权益（净资产 $E$）敏感度的核心指标。当**[amber:久期缺口大于 0]**时，**[rose:利率上升净资产受损]**。"
  },
  {
    "category": "期权与希腊值",
    "name": "欧式期权看涨看跌平价公式 (Put-Call Parity)",
    "tex": "c + K e^{-rT} = p + S_0",
    "desc": "无套利均衡下相同标的、相同执行价$K$ 与到期日 $T$的欧式期权铁律等式：**[emerald:$c + K e^{-rT} = p + S_0$]**。"
  },
  {
    "category": "期权与希腊值",
    "name": "期权 Delta (Δ)：价格敏感度与对冲比率",
    "tex": "\\Delta = \\frac{\\partial V}{\\partial S}, \\quad \\Delta_c = N(d_1) \\in [0, 1], \\quad \\Delta_p = N(d_1) - 1 \\in [-1, 0]",
    "desc": "度量标的价格变动 1 单位时期权价值变动量。看涨期权$\\Delta_c \\in$ **[emerald:[0, 1]]**；看跌期权 $\\Delta_p \\in$ **[rose:[-1, 0]]**。现货自身 $\\Delta$ **[emerald:严格等于 1]**  $。"
  },
  {
    "category": "期权与希腊值",
    "name": "期权 Gamma (Γ)：Delta的斜率与曲率特征",
    "tex": "\\Gamma = \\frac{\\partial^2 V}{\\partial S^2} = \\frac{\\partial \\Delta}{\\partial S} = \\frac{N'(d_1)}{S \\sigma \\sqrt{T}}",
    "desc": "标的价格变动对期权 Delta 的敏感度。平价期权 (ATM) 临近到期时**[amber:Gamma 最大]**。现货自身 Gamma**[rose:严格为 0]**，对冲 Gamma**[blue:必须引入期权]**。"
  },
  {
    "category": "期权与希腊值",
    "name": "期权 Theta (Θ)：时间衰减敏感度",
    "tex": "\\Theta = \\frac{\\partial V}{\\partial t} = -\\frac{S N'(d_1) \\sigma}{2 \\sqrt{T}} - r K e^{-rT} N(d_2)",
    "desc": "度量时间每流逝 1 天期权价值的损耗额。期权多头的 Theta**[rose:几乎恒为负数（时间价值衰减）]**。平价期权临近到期时**[amber:Theta 衰减最剧烈]**。"
  },
  {
    "category": "期权与希腊值",
    "name": "期权 Vega (ν / V)：波动率敏感度",
    "tex": "\\mathcal{V} = \\frac{\\partial V}{\\partial \\sigma} = S \\sqrt{T} N'(d_1)",
    "desc": "度量标的资产波动率变动 1% 时期权价格的变动额。看涨与看跌期权的 Vega 完全相等且对买方**[emerald:恒为正数（$Vega > 0$）]**。"
  },
  {
    "category": "期权与希腊值",
    "name": "期权 Rho (ρ)：无风险基准利率敏感度",
    "tex": "\\rho_c = K T e^{-rT} N(d_2), \\quad \\rho_p = -K T e^{-rT} N(-d_2), \\quad \\Delta f \\approx \\rho \\cdot \\Delta r",
    "desc": "度量无风险利率变动 1 个百分点时期权价格的变动量。利率上升**[emerald:看涨期权增值（$\\rho_c > 0$）]**，**[rose:看跌期权贬值（$\\rho_p < 0$）]**。"
  },
  {
    "category": "期权与希腊值",
    "name": "Delta-Gamma 联合中性对冲方程组",
    "tex": "\\begin{cases} \\Delta_{\\Pi} + w_1 \\Delta_1 + w_2 = 0 \\\\ \\Gamma_{\\Pi} + w_1 \\Gamma_1 = 0 \\end{cases}",
    "desc": "利用一种期权$w_1$将**[emerald:总 Gamma 调至 0]**，再利用标的现货$w_2$将**[blue:总 Delta 调至 0]**，实现二阶曲率对冲。"
  },
  {
    "category": "期权与希腊值",
    "name": "全希腊字母泰勒展开期权价值变动式",
    "tex": "\\Delta V \\approx \\Delta \\cdot \\Delta S + \\frac{1}{2} \\Gamma (\\Delta S)^2 + \\Theta \\cdot \\Delta t + \\mathcal{V} \\cdot \\Delta \\sigma + \\rho \\cdot \\Delta r",
    "desc": "综合考量标的价格、时间流逝、波动率变化及利率波动的**[blue:期权多维动态风险归因模型]**。"
  },
  {
    "category": "VaR市场风险",
    "name": "单资产正态分布在险价值 (Normal VaR)",
    "tex": "\\mathrm{VaR}_{1-\\alpha} = W_0 \\cdot (z_\\alpha \\sigma - \\mu)",
    "desc": "置信度$1-\\alpha$和持有期内资产的**[rose:最大潜在损失]**。95% 置信度 **[amber:$z=1.645$]**；99% 置信度**[amber:$z=2.326$]**。"
  },
  {
    "category": "VaR市场风险",
    "name": "预期亏损 (Expected Shortfall / CVaR)",
    "tex": "\\mathrm{ES}_{1-\\alpha} = E[L \\mid L > \\mathrm{VaR}_{1-\\alpha}] = W_0 \\left[ -\\mu + \\sigma \\frac{\\phi(z_\\alpha)}{\\alpha} \\right]",
    "desc": "损失超出 VaR 门槛值极端情况下的**[rose:平均损失期望值]**。**[emerald:严格满足次可加性公理，属于一致性风险测度]**。"
  },
  {
    "category": "VaR市场风险",
    "name": "双资产组合方差与组合 VaR",
    "tex": "\\mathrm{VaR}_p = \\sqrt{\\mathrm{VaR}_1^2 + \\mathrm{VaR}_2^2 + 2 \\rho_{12} \\mathrm{VaR}_1 \\mathrm{VaR}_2}",
    "desc": "考虑两项资产收益率相关系数$\\rho_{12}$后的整体组合在险价值，体现资产配置的**[emerald:分散化风险平滑效应]**。"
  },
  {
    "category": "VaR市场风险",
    "name": "指数加权移动平均波动率模型 (EWMA)",
    "tex": "\\sigma_n^2 = \\lambda \\sigma_{n-1}^2 + (1 - \\lambda) u_{n-1}^2",
    "desc": "RiskMetrics 动态波动率预测模型。$\\lambda$为衰减因子（日频常用**[amber:0.94]**），对越近的历史收益率赋予越高权重。"
  },
  {
    "category": "VaR市场风险",
    "name": "GARCH(1,1) 均值回归动态波动率模型",
    "tex": "\\sigma_n^2 = \\gamma V_L + \\alpha u_{n-1}^2 + \\beta \\sigma_{n-1}^2, \\quad \\gamma + \\alpha + \\beta = 1",
    "desc": "刻画金融时间序列**[blue:波动率聚集]**与长期均值$V_L$ **[emerald:均值回归特征]**的标准计量经济学模型。参数满足$\\gamma + \\alpha + \\beta = 1$。"
  },
  {
    "category": "信用风险",
    "name": "信用期望损失基本计算模型 (Expected Loss)",
    "tex": "\\mathrm{EL} = \\mathrm{EAD} \\times \\mathrm{PD} \\times \\mathrm{LGD} = \\mathrm{EAD} \\times \\mathrm{PD} \\times (1 - R)",
    "desc": "借款人违约期望损失金额：$EL = EAD \\cdot PD \\cdot LGD$。满足违约损失率与回收率关系 **[emerald:$LGD = 1 - R$]**。"
  },
  {
    "category": "信用风险",
    "name": "条件边际违约率递推公式",
    "tex": "d_t = \\frac{Q(t) - Q(t-1)}{1 - Q(t-1)} = \\frac{Q(t) - Q(t-1)}{S(t-1)}",
    "desc": "由穆迪加权平均累积违约率$Q(t)$ 递推计算边际违约率 $d_t$。存活概率满足 **[emerald:$S_t = 1 - Q(t) = S_{t-1} \\cdot (1 - d_t)$]**。"
  },
  {
    "category": "信用风险",
    "name": "零息债券信用利差倒推违约率",
    "tex": "PD = \\frac{1 - P e^{y^*}}{1 - R} \\approx \\frac{y - y^*}{1 - R}",
    "desc": "根据零息企业债价格、无风险基准利率及回收率倒推违约率。近似关系为**[amber:$PD \\approx \\frac{s}{1-R}$]**。"
  },
  {
    "category": "信用风险",
    "name": "信用违约互换 (CDS) 溢差倒推违约率",
    "tex": "\\lambda \\approx \\frac{s}{1 - R} = \\frac{s}{\\mathrm{LGD}}, \\quad Q(T) = 1 - e^{-\\lambda T} \\approx 1 - (1 - \\lambda)^T",
    "desc": "依据 CDS 市场年化保费溢差$s$快速倒推违约概率：**[emerald:违约密度$\\lambda \\approx \\frac{s}{1-R}$]**，**[rose:$T$ 年累积违约概率 $Q(T) \\approx 1 - e^{-\\lambda T}$]**。"
  },
  {
    "category": "信用风险",
    "name": "阿特曼 Z-score 企业财务破产预测模型",
    "tex": "Z = 1.2 X_1 + 1.4 X_2 + 3.3 X_3 + 0.6 X_4 + 0.999 X_5",
    "desc": "基于流动资本、留存收益、EBIT、股票市值及资产周转率五大财务比率。$Z < 1.81$为**[rose:危险破产区]**，$Z > 2.99$为**[emerald:安全健康区]**。"
  },
  {
    "category": "流动性与资本",
    "name": "流动性调整后在险价值 (LVaR)",
    "tex": "\\mathrm{LVaR} = \\mathrm{VaR} + \\frac{1}{2} P (\\mu_s + z_\\alpha \\sigma_s)",
    "desc": "将资产清算时的**[blue:外生买卖价差比率]**冲击摩擦成本整合至总风险价值：**[amber:$LVaR = VaR + \\frac{1}{2} P (\\mu_s + z_\\alpha \\sigma_s)$]**。"
  },
  {
    "category": "流动性与资本",
    "name": "内生大额持仓清算冲击模型",
    "tex": "\\mathrm{Cost}_{endo} = \\alpha \\cdot P \\cdot \\left( \\frac{Q}{V_{daily}} \\right)^k",
    "desc": "度量大额头寸清算对市场深度造成的价格不利冲击。持仓占比越大或清算越急，**[rose:内生折价准备惩罚越大]**。"
  },
  {
    "category": "流动性与资本",
    "name": "巴塞尔资本充足率指标 (CAR)",
    "tex": "\\mathrm{CAR} = \\frac{\\text{合格资本总额}}{\\text{风险加权资产 (RWA)}} \\ge 8.0\\%, \\quad \\mathrm{CET1} \\ge 4.5\\%, \\quad \\text{Tier 1} \\ge 6.0\\%",
    "desc": "巴塞尔协议核心偿付能力监管红线：**[blue:核心一级资本充足率 ≥ 4.5%]**、**[blue:一级资本充足率 ≥ 6.0%]**、**[emerald:总资本充足率 ≥ 8.0%]**。"
  },
  {
    "category": "流动性与资本",
    "name": "风险调整资本收益率 (RAROC)",
    "tex": "\\mathrm{RAROC} = \\frac{\\text{净收入} - \\text{经营费用} - \\text{预期损失 (EL)}}{\\text{经济资本 (EC)}} = \\frac{\\text{净收益} - \\text{EL}}{\\text{WCL} - \\text{EL}}",
    "desc": "度量扣除预期损失后每单位未预期风险资本 (EC) 创造的超额回报：[emerald:$RAROC = \\frac{\\text{收入} - \\text{成本} - EL}{EC}$]**，要求**[amber:高于股东资本成本 WACC]**。"
  }
];
