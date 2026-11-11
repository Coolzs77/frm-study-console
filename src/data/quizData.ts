import { Chapter, Question, SlideNote, FormulaItem } from '../types';

export const METADATA = {
  "title": "西北农林科技大学《金融风险管理》期末原题必背与真机模拟系统",
  "instructor": "陈妍",
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
    "name": "2.1.4 利率久期与敏感性测验",
    "topic": "麦考勒久期 / 修正久期 / 利率敏感度近似",
    "slide": "2.1 利率风险管理（一）.pdf",
    "questionCount": 6,
    "imagesCount": 6
  },
  {
    "id": "2.1.5",
    "name": "2.1.5 利率凸性与对冲测验",
    "topic": "凸度 / 二阶泰勒价格近似 / 国债期货对冲比率",
    "slide": "2.1 利率风险管理（二）.pdf",
    "questionCount": 11,
    "imagesCount": 14
  },
  {
    "id": "2.2.3",
    "name": "2.2.3 衍生品远期与期货测验",
    "topic": "Delta / Vega / Rho 利率敏感性精确计算",
    "slide": "2.2 衍生品风险管理（一）.pdf",
    "questionCount": 3,
    "imagesCount": 0
  },
  {
    "id": "2.2.5",
    "name": "2.2.5 期权策略与希腊字母测验",
    "topic": "期权差价组合 / Delta对冲 / Gamma与Vega联合中性",
    "slide": "2.2 衍生品风险管理（二）.pdf",
    "questionCount": 14,
    "imagesCount": 0
  },
  {
    "id": "2.3.4",
    "name": "2.3.4 VaR与预期亏损测验",
    "topic": "正态分布 VaR / 投资组合协方差 / ES 一致性风险测度",
    "slide": "2.3 在险价值和预期亏损.pptx",
    "questionCount": 5,
    "imagesCount": 4
  },
  {
    "id": "3.4",
    "name": "3.4 信用风险与违约率测验",
    "topic": "穆迪累积违约率表 / 边际违约率递推 / 债券利差倒推 / CDS溢差",
    "slide": "3.1~3.3 信用风险全套课件",
    "questionCount": 7,
    "imagesCount": 5
  },
  {
    "id": "5.4",
    "name": "5.4 流动性风险LVaR测验",
    "topic": "买卖价差外生模型 / 市场冲击内生模型 / 流动性调整 LVaR",
    "slide": "5 流动性风险.pdf",
    "questionCount": 4,
    "imagesCount": 2
  },
  {
    "id": "6.4",
    "name": "6.4 国际监管与巴塞尔协议测验",
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
    "chapterName": "2.1.4 利率久期与敏感性测验",
    "index": 1,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "在利率5%的情形下，分别计算以下两个现金流的麦考勒久期。A的久期是（     ），B的久期是（     ）。（答案保留2位小数）（      ）的利率风险更大，即利率发生同样比例的变动时，（     ）的价格变动幅度更大。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>在利率5%的情形下，分别计算以下两个现金流的麦考勒久期。</p><p><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_1_4_q1_bd48d1e9.png\"/><br/></p><p>A的久期是（     ），B的久期是（     ）。（答案保留2位小数）</p><p>（      ）的利率风险更大，即利率发生同样比例的变动时，（     ）的价格变动幅度更大。</p></div>",
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
    "analysis": "本题出自陈妍老师《2.1.4 利率久期与敏感性测验》。核心考点对应【麦考勒久期 / 修正久期 / 利率敏感度近似】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.1.4 利率久期与敏感性测验",
    "index": 2,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "在利率5%的情形下，分别计算以下两个现金流的麦考勒久期。A的久期是（     ），B的久期是（     ）。（答案保留2位小数）（     ）的利率风险更大，即利率发生同样比例的变动时，（     ）的价格变动幅度更大。。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>在利率5%的情形下，分别计算以下两个现金流的麦考勒久期。<br/></p><p style=\"white-space: normal;\"><img class=\"quiz-embedded-img rounded-xl shadow-md my-2 max-w-full inline-block border border-slate-200 dark:border-slate-700 bg-white p-1\" src=\"images/ch2_1_4_q2_f9c54558.png\"/><br/></p><p style=\"white-space: normal;\">A的久期是（     ），B的久期是（     ）。（答案保留2位小数）</p><p>（     ）的利率风险更大，即利率发生同样比例的变动时，（     ）的价格变动幅度更大。。</p></div>",
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
    "analysis": "本题出自陈妍老师《2.1.4 利率久期与敏感性测验》。核心考点对应【麦考勒久期 / 修正久期 / 利率敏感度近似】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.1.4 利率久期与敏感性测验",
    "index": 3,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "对于一个修正久期 ^*$为7，凸度 $为243的债券，假设市场利率r提高25个基点，债券价格下降的百分比是（    ）。（以百分数形式表示，百分号前保留两位小数）一个基点=万分之一",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>对于一个修正久期D*为7，凸度C为243的债券，假设市场利率r提高25个基点，债券价格下降的百分比是（    ）。（以百分数形式表示，百分号前保留两位小数）</p><p>一个基点=万分之一</p></div>",
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
    "analysis": "本题出自陈妍老师《2.1.4 利率久期与敏感性测验》。核心考点对应【麦考勒久期 / 修正久期 / 利率敏感度近似】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.1.4 利率久期与敏感性测验",
    "index": 4,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "对于一个修正久期 ^*$为5，凸度 $为312的债券，假设市场利率r提高10个基点，债券价格下降的百分比是（    ）。（以百分数形式表示，百分号前保留两位小数）一个基点=万分之一",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>对于一个修正久期D*为5，凸度C为312的债券，假设市场利率r提高10个基点，债券价格下降的百分比是（    ）。（以百分数形式表示，百分号前保留两位小数）<br/></p>\n<p style=\"white-space: normal;\">一个基点=万分之一</p>\n<p><br/></p></div>",
    "images": [],
    "options": [],
    "correctAnswer": "第一空： 0.48%",
    "correctAnswerList": [
      "0.48%"
    ],
    "studentAnswer": "第一空： 0.48%",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "本题出自陈妍老师《2.1.4 利率久期与敏感性测验》。核心考点对应【麦考勒久期 / 修正久期 / 利率敏感度近似】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.1.4 利率久期与敏感性测验",
    "index": 5,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "一个债券在未来5年的现金流是5,5,5,5,105，当前利率是5%，则该债券的凸度是（       ）。（答案保留两位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>一个债券在未来5年的现金流是5,5,5,5,105，当前利率是5%，则该债券的凸度是（       ）。（答案保留两位小数）</p><p><br/></p></div>",
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
    "analysis": "本题出自陈妍老师《2.1.4 利率久期与敏感性测验》。核心考点对应【麦考勒久期 / 修正久期 / 利率敏感度近似】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.1.4 利率久期与敏感性测验",
    "index": 6,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "一个债券在未来5年的现金流是105,105,105,105,105，当前利率是5%，则该债券的凸度是（       ）。（答案保留两位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>一个债券在未来5年的现金流是105,105,105,105,105，当前利率是5%，则该债券的凸度是（       ）。（答案保留两位小数）<br/></p><p><br style=\"white-space: normal;\"/></p><p><br/></p></div>",
    "images": [],
    "options": [],
    "correctAnswer": "第一空： 12.08",
    "correctAnswerList": [
      "12.08"
    ],
    "studentAnswer": "第一空： 12.08",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "本题出自陈妍老师《2.1.4 利率久期与敏感性测验》。核心考点对应【麦考勒久期 / 修正久期 / 利率敏感度近似】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.1.5 利率凸性与对冲测验",
    "index": 1,
    "displayNum": "1",
    "type": "多选题",
    "score": 10.0,
    "stem": "以下表述正确的有：（        ）。 （不定项选择）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>以下表述正确的有：（        ）。 （不定项选择）<br/></p></div>",
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
    "analysis": "本题出自陈妍老师《2.1.5 利率凸性与对冲测验》。核心考点对应【凸度 / 二阶泰勒价格近似 / 国债期货对冲比率】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.1.5 利率凸性与对冲测验",
    "index": 2,
    "displayNum": "2",
    "type": "多选题",
    "score": 9.1,
    "stem": "以下表述正确的有：（       ）。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>以下表述正确的有：（       ）。<br/></p></div>",
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
    "analysis": "本题出自陈妍老师《2.1.5 利率凸性与对冲测验》。核心考点对应【凸度 / 二阶泰勒价格近似 / 国债期货对冲比率】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.1.5 利率凸性与对冲测验",
    "index": 3,
    "displayNum": "3",
    "type": "单选题",
    "score": 10.0,
    "stem": "如果一家银行负债的久期大于资产的久期，则利率（     ）对其有利。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span class=\"colorShallow\" style='margin: 0px; padding: 0px; color: rgb(168, 168, 179); font-family: CXChineseQuote, -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Segoe UI\", Arial, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; text-wrap: wrap; background-color: rgb(255, 255, 255);'> </span><span style='color: rgb(24, 30, 51); font-family: CXChineseQuote, -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Segoe UI\", Arial, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; text-wrap: wrap; background-color: rgb(255, 255, 255);'></span><span style='margin: 0px; padding: 0px; color: rgb(24, 30, 51); font-family: CXChineseQuote, -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Segoe UI\", Arial, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; text-wrap: wrap; background-color: rgb(255, 255, 255);'>如果一家银行负债的久期大于资产的久期，则利率（     ）对其有利。</span></p></div>",
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
    "chapterName": "2.1.5 利率凸性与对冲测验",
    "index": 4,
    "displayNum": "4",
    "type": "单选题",
    "score": 9.1,
    "stem": "根据债券价格的计算公式，利率上升，债券价格会（      ），利率下降，债券价格会（       ）。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>根据债券价格的计算公式，利率上升，债券价格会（      ），利率下降，债券价格会（       ）。<br/></p></div>",
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
    "analysis": "本题出自陈妍老师《2.1.5 利率凸性与对冲测验》。核心考点对应【凸度 / 二阶泰勒价格近似 / 国债期货对冲比率】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.1.5 利率凸性与对冲测验",
    "index": 5,
    "displayNum": "5",
    "type": "单选题",
    "score": 9.1,
    "stem": "如果一家银行资产的久期大于负债的久期，则利率（     ）对其有利。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span style=\"text-wrap: wrap;\">如果一家银行资产的久期大于负债的久期，则利率（     ）对其有利。</span></p></div>",
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
    "chapterName": "2.1.5 利率凸性与对冲测验",
    "index": 6,
    "displayNum": "6",
    "type": "判断题",
    "score": 10.0,
    "stem": "利率为连续复利时，久期与修正久期相等。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>利率为连续复利时，久期与修正久期相等。<br/></p></div>",
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
    "analysis": "这里的r可以理解为一个时间区间上的回报率，当这个区间无限小时，上式分母趋近为1。",
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
    "chapterName": "2.1.5 利率凸性与对冲测验",
    "index": 7,
    "displayNum": "7",
    "type": "判断题",
    "score": 9.1,
    "stem": "利率上升时，资产和负债的价格都会下降，其中久期越长的下降越多。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span style=\"text-wrap: wrap;\">利率上升时，资产和负债的价格都会下降，其中久期越长的下降越多。</span></p></div>",
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
    "analysis": "久期反应了资产价格对利率的敏感程度。利率上升时，资产和负债的价格都下降，其中久期更长的价格下降更多。",
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
    "chapterName": "2.1.5 利率凸性与对冲测验",
    "index": 8,
    "displayNum": "8",
    "type": "判断题",
    "score": 9.1,
    "stem": "利率下降时，资产和负债的价格都会上升，其中久期越长的上升越少。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span style='color: rgb(24, 30, 51); font-family: CXChineseQuote, -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Segoe UI\", Arial, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; text-wrap: wrap; background-color: rgb(255, 255, 255);'>利率下降时，资产和负债的价格都会上升，其中久期越长的上升越少。</span></p></div>",
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
    "analysis": "久期反应了资产价格对利率的敏感程度。利率下降时，资产和负债的价格都上升，其中久期更长的价格上升更多。",
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
    "chapterName": "2.1.5 利率凸性与对冲测验",
    "index": 9,
    "displayNum": "9",
    "type": "填空题",
    "score": 9.1,
    "stem": "假设市场利率是每年3%，一个现金流在未来3年里，每年末会有100元收入，则该现金流的凸度是（     ）。（答案保留2位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span style='color: rgb(24, 30, 51); font-family: CXChineseQuote, -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Segoe UI\", Arial, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; text-wrap: wrap; background-color: rgb(255, 255, 255);'>假设市场利率是每年3%，一个现金流在未来3年里，每年末会有100元收入，则该现金流的凸度是（     ）。（答案保留2位小数）</span></p></div>",
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
    "analysis": "本题出自陈妍老师《2.1.5 利率凸性与对冲测验》。核心考点对应【凸度 / 二阶泰勒价格近似 / 国债期货对冲比率】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.1.5 利率凸性与对冲测验",
    "index": 10,
    "displayNum": "10",
    "type": "填空题",
    "score": 9.1,
    "stem": "假设市场利率是每年3%，一个现金流在未来3年里，每年末会有100元收入，则该现金流当前的价值是（     ）。（答案保留2位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>假设市场利率是每年3%，一个现金流在未来3年里，每年末会有100元收入，则该现金流当前的价值是（     ）。<span style='color: rgb(24, 30, 51); font-family: CXChineseQuote, -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Segoe UI\", Arial, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; text-wrap: wrap; background-color: rgb(255, 255, 255);'>（答案保留2位小数）</span></p></div>",
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
    "analysis": "本题出自陈妍老师《2.1.5 利率凸性与对冲测验》。核心考点对应【凸度 / 二阶泰勒价格近似 / 国债期货对冲比率】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.1.5 利率凸性与对冲测验",
    "index": 11,
    "displayNum": "11",
    "type": "填空题",
    "score": 9.1,
    "stem": "假设市场利率是每年3%，一个现金流在未来3年里，每年末会有100元收入，则该现金流的久期是（     ）。（答案保留2位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span style='color: rgb(24, 30, 51); font-family: CXChineseQuote, -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Segoe UI\", Arial, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; text-wrap: wrap; background-color: rgb(255, 255, 255);'>假设市场利率是每年3%，一个现金流在未来3年里，每年末会有100元收入，则该现金流的久期是（     ）。（答案保留2位小数）</span></p></div>",
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
    "analysis": "本题出自陈妍老师《2.1.5 利率凸性与对冲测验》。核心考点对应【凸度 / 二阶泰勒价格近似 / 国债期货对冲比率】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.2.3 衍生品远期与期货测验",
    "index": 1,
    "displayNum": "1",
    "type": "填空题",
    "score": 33.3,
    "stem": "某基于指数的衍生品交易组合的delta是-2100，指数价格现在是1000，当指数价格增长到1005，交易组合的价值将会下降（     ）。The $\\Delta$ of a derivatives portfolio dependent on an index is −2,100. The index is currently 1,000. When the index increases to 1,005,the value of the portfolio will decrease (    ).",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>某基于指数的衍生品交易组合的delta是-2100，指数价格现在是1000，当指数价格增长到1005，交易组合的价值将会下降（     ）。</p>\n<p><br/>The delta of a derivatives portfolio dependent on an index is −2,100. The index is currently 1,000. When the index increases to 1,005, <span style=\"text-wrap: wrap;\">the value of the portfolio will decrease (    ). </span></p></div>",
    "images": [],
    "options": [],
    "correctAnswer": "第一空：10500",
    "correctAnswerList": [
      "10500"
    ],
    "studentAnswer": "第一空： 10500",
    "studentScore": 33.3,
    "isCorrect": true,
    "analysis": "本题出自陈妍老师《2.2.3 衍生品远期与期货测验》。核心考点对应【$\\Delta$ / $\\text{Vega}$ / $\\rho$ 利率敏感性精确计算】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.2.3 衍生品远期与期货测验",
    "index": 2,
    "displayNum": "2",
    "type": "填空题",
    "score": 33.3,
    "stem": "某基于汇率的衍生品交易组合的vega是200（每1%波动率变动）。当汇率从12%变为14%，组合的价值会增加（      ）。The $\\text{Vega}$ of a derivatives portfolio dependent on the dollar–sterling exchange rate is 200 (per %). In the volatility of the exchange rate from 12% to 14%,the vlaue of the portfolio will increase (       ).",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span style='color: rgb(24, 30, 51); font-family: CXChineseQuote, -apple-system, BlinkMacSystemFont, \"Helvetica Neue\", \"Segoe UI\", Arial, \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; text-wrap: wrap; background-color: rgb(255, 255, 255);'>某基于汇率的衍生品交易组合的vega是200（每1%波动率变动）。当汇率从12%变为14%，组合的价值会增加（      ）。</span></p>\n<p><br/>The vega of a derivatives portfolio dependent on the dollar–sterling exchange rate is 200 (per %). In the volatility of the exchange rate from 12% to 14%, <span style=\"text-wrap: wrap;\"> the vlaue of the portfolio will increase (       ). </span></p></div>",
    "images": [],
    "options": [],
    "correctAnswer": "第一空：400",
    "correctAnswerList": [
      "400"
    ],
    "studentAnswer": "第一空： 400",
    "studentScore": 33.3,
    "isCorrect": true,
    "analysis": "本题出自陈妍老师《2.2.3 衍生品远期与期货测验》。核心考点对应【$\\Delta$ / $\\text{Vega}$ / $\\rho$ 利率敏感性精确计算】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.2.3 衍生品远期与期货测验",
    "index": 3,
    "displayNum": "3",
    "type": "填空题",
    "score": 10.0,
    "stem": "$\\rho$=15.1215说明无风险利率每增长一个百分点，期权价格增加（     ）。（以小数形式表达，答案保留4位小数）$\\rho$=8.9066说明无风险利率每增长一个百分点，期权价格增加（     ）。（以小数形式表达，答案保留4位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><br/><span class=\"newZy_TItle\" style='margin: 0px; padding: 0px; float: left; font-family: \"Microsoft Yahei\", Arial, Helvetica, sans-serif; text-wrap: wrap; background-color: rgb(255, 255, 255);'><span style=\"color: rgb(19, 27, 38);\">rho=15.1215说明无风险利率每增长一个百分点，期权价格增加（     ）。（以小数形式表达，答案保留4位小数）</span></span></p>\n<p style='margin-top: 0px; margin-bottom: 0px; padding: 0px; color: rgb(19, 27, 38); font-family: \"Microsoft Yahei\", Arial, Helvetica, sans-serif; text-wrap: wrap; background-color: rgb(255, 255, 255);'><br/></p>\n<p style='margin-top: 0px; margin-bottom: 0px; padding: 0px; color: rgb(19, 27, 38); font-family: \"Microsoft Yahei\", Arial, Helvetica, sans-serif; text-wrap: wrap; background-color: rgb(255, 255, 255);'>rho=8.9066说明无风险利率每增长一个百分点，期权价格增加（     ）。（<span style='color: rgb(19, 27, 38); font-family: \"Microsoft Yahei\", Arial, Helvetica, sans-serif; text-wrap: wrap; background-color: rgb(255, 255, 255);'>以小数形式表达，</span>答案保留4位小数）</p>\n<p><br/></p></div>",
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
    "analysis": "本题出自陈妍老师《2.2.3 衍生品远期与期货测验》。核心考点对应【$\\Delta$ / $\\text{Vega}$ / $\\rho$ 利率敏感性精确计算】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.2.5 期权策略与希腊字母测验",
    "index": 1,
    "displayNum": "1",
    "type": "多选题",
    "score": 7.1,
    "stem": "关于衍生品风险对冲，以下表述正确的有（       ）。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>关于衍生品风险对冲，以下表述正确的有（       ）。<br/></p></div>",
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
    "analysis": "本题出自陈妍老师《2.2.5 期权策略与希腊字母测验》。核心考点对应【期权差价组合 / Delta对冲 / Gamma与Vega联合中性】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.2.5 期权策略与希腊字母测验",
    "index": 2,
    "displayNum": "2",
    "type": "多选题",
    "score": 7.1,
    "stem": "以下属于线性损益结构产品的有（      ）。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>以下属于线性损益结构产品的有（      ）。<br/></p></div>",
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
    "analysis": "本题出自陈妍老师《2.2.5 期权策略与希腊字母测验》。核心考点对应【期权差价组合 / Delta对冲 / Gamma与Vega联合中性】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.2.5 期权策略与希腊字母测验",
    "index": 3,
    "displayNum": "3",
    "type": "多选题",
    "score": 3.5,
    "stem": "以下对衍生品希腊值的定义，正确的有（      ）。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>以下对衍生品希腊值的定义，正确的有（      ）。<br/></p></div>",
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
    "analysis": "本题出自陈妍老师《2.2.5 期权策略与希腊字母测验》。核心考点对应【期权差价组合 / Delta对冲 / Gamma与Vega联合中性】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.2.5 期权策略与希腊字母测验",
    "index": 4,
    "displayNum": "4",
    "type": "多选题",
    "score": 7.1,
    "stem": "某期权产品的delta是0.4，说明（      ）。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span style=\"text-wrap: wrap;\">某期权产品的delta是0.4，说明（      ）。</span></p></div>",
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
    "analysis": "本题出自陈妍老师《2.2.5 期权策略与希腊字母测验》。核心考点对应【期权差价组合 / Delta对冲 / Gamma与Vega联合中性】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.2.5 期权策略与希腊字母测验",
    "index": 5,
    "displayNum": "5",
    "type": "单选题",
    "score": 7.1,
    "stem": "某期权产品的delta是0.4，为规避标的资产价格波动风险，使delta为0，以下对冲策略正确的有（       ）。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span style=\"text-wrap: wrap;\"></span><span style=\"text-wrap: wrap;\">某期权产品的delta是0.4，为规避标的资产价格波动风险，使delta为0，以下对冲策略正确的有（       ）。</span></p></div>",
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
    "chapterName": "2.2.5 期权策略与希腊字母测验",
    "index": 6,
    "displayNum": "6",
    "type": "单选题",
    "score": 7.1,
    "stem": "某期权产品的delta是0.4，为规避标的资产价格波动风险，使delta为0，以下对冲策略正确的有（       ）。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span style=\"text-wrap: wrap;\">某期权产品的delta是0.4，为规避标的资产价格波动风险，使delta为0，以下对冲策略正确的有（       ）。</span><span style=\"text-wrap: wrap;\"></span></p></div>",
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
    "chapterName": "2.2.5 期权策略与希腊字母测验",
    "index": 7,
    "displayNum": "7",
    "type": "单选题",
    "score": 7.1,
    "stem": "投资者以3000美元/盎司的价格卖出30盎司黄金远期，为了规避黄金价格上涨的风险，投资者可以同时（          ）。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>投资者以3000美元/盎司的价格卖出30盎司黄金远期，为了规避黄金价格上涨的风险，投资者可以同时（          ）。<br/></p></div>",
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
    "analysis": "本题出自陈妍老师《2.2.5 期权策略与希腊字母测验》。核心考点对应【期权差价组合 / Delta对冲 / Gamma与Vega联合中性】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.2.5 期权策略与希腊字母测验",
    "index": 8,
    "displayNum": "8",
    "type": "判断题",
    "score": 7.1,
    "stem": "delta对冲是指计算投资组合现有delta，并引入新交易，使新交易的delta与原有delta相加为0，即使delta达到中性。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>delta对冲是指计算投资组合现有delta，并引入新交易，使新交易的delta与原有delta相加为0，即使delta达到中性。<br/></p></div>",
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
    "analysis": "本题出自陈妍老师《2.2.5 期权策略与希腊字母测验》。核心考点对应【期权差价组合 / Delta对冲 / Gamma与Vega联合中性】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.2.5 期权策略与希腊字母测验",
    "index": 9,
    "displayNum": "9",
    "type": "判断题",
    "score": 7.2,
    "stem": "一个投资组合的gamma为-5000，可以通过卖出5000份标的资产以使其gamma为0。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>一个投资组合的gamma为-5000，可以通过卖出5000份标的资产以使其gamma为0。<br/></p></div>",
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
    "chapterName": "2.2.5 期权策略与希腊字母测验",
    "index": 10,
    "displayNum": "10",
    "type": "判断题",
    "score": 7.2,
    "stem": "现货产品的delta为1，gamma为0。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>现货产品的delta为1，gamma为0。</p></div>",
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
    "analysis": "本题出自陈妍老师《2.2.5 期权策略与希腊字母测验》。核心考点对应【期权差价组合 / Delta对冲 / Gamma与Vega联合中性】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.2.5 期权策略与希腊字母测验",
    "index": 11,
    "displayNum": "11",
    "type": "判断题",
    "score": 7.2,
    "stem": "远期多头的delta为1，远期空头的delta为-1。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>远期多头的delta为1，远期空头的delta为-1。<br/></p></div>",
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
    "analysis": "本题出自陈妍老师《2.2.5 期权策略与希腊字母测验》。核心考点对应【期权差价组合 / Delta对冲 / Gamma与Vega联合中性】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.2.5 期权策略与希腊字母测验",
    "index": 12,
    "displayNum": "12",
    "type": "判断题",
    "score": 7.2,
    "stem": "期权的delta对冲一旦完成，不需要随时调整，属于“保完即忘”策略。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>期权的delta对冲一旦完成，不需要随时调整，属于“保完即忘”策略。<br/></p></div>",
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
    "chapterName": "2.2.5 期权策略与希腊字母测验",
    "index": 13,
    "displayNum": "13",
    "type": "填空题",
    "score": 7.2,
    "stem": "一个投资组合的gamma是-1000，vega是-2000，正在交易的一种期权产品gamma是0.5，vega是2（期权1），另一种期权产品gamma是0.8，vega是1.2（期权二），应分别购买（    ）份期权一和（    ）份期权二以使gamma和vega同时实现中性。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>一个投资组合的gamma是-1000，vega是-2000，正在交易的一种期权产品gamma是0.5，vega是2（期权1），另一种期权产品gamma是0.8，vega是1.2（期权二），应分别购买（    ）份期权一和（    ）份期权二以使gamma和vega同时实现中性。<br/></p></div>",
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
    "analysis": "本题出自陈妍老师《2.2.5 期权策略与希腊字母测验》。核心考点对应【期权差价组合 / Delta对冲 / Gamma与Vega联合中性】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.2.5 期权策略与希腊字母测验",
    "index": 14,
    "displayNum": "14",
    "type": "填空题",
    "score": 7.2,
    "stem": "一个Delta中性的投资组合Gamma为-1000，另一个正在交易的期权产品Gamma为0.5，可以购买（    ）份该期权以使投资组合实现Gamma中性。",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>一个Delta中性的投资组合Gamma为-1000，另一个正在交易的期权产品Gamma为0.5，可以购买（    ）份该期权以使投资组合实现Gamma中性。</p></div>",
    "images": [],
    "options": [],
    "correctAnswer": "第一空： 2000",
    "correctAnswerList": [
      "2000"
    ],
    "studentAnswer": "第一空： 2000",
    "studentScore": 7.2,
    "isCorrect": true,
    "analysis": "本题出自陈妍老师《2.2.5 期权策略与希腊字母测验》。核心考点对应【期权差价组合 / Delta对冲 / Gamma与Vega联合中性】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.3.4 VaR与预期亏损测验",
    "index": 1,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "假设某股票的初始价值是100元。日简单收益率服从平均值为10%，标准差为20%的正态分布。请分别在95%和99%的置信水平上，计算日VaR，即在95%的可能下股价损失不会超过（       ）元，在99%的可能下股价损失不会超过（      ）元。（答案保留两位小数）（标准正态分布0.01，0.05，0.95，0.99分位数分别为-2.3263，-1.6449，1.6449，2.3263）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>假设某股票的初始价值是100元。日简单收益率服从平均值为10%，标准差为20%的正态分布。请分别在95%和99%的置信水平上，计算日VaR，即在95%的可能下股价损失不会超过（       ）元，在99%的可能下股价损失不会超过（      ）元。（答案保留两位小数）</p>\n<p>（标准正态分布0.01，0.05，0.95，0.99分位数分别为-2.3263，-1.6449，1.6449，2.3263）</p></div>",
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
    "analysis": "mu=0.1,sigma=0.2,标准正态分布在alpha=0.05时的分位数为-1.6449，在alpha=0.01时的分位数为-2.3263，则VaR95=0.1-0.2*1.6449=-0.22897，VaR99=0.1-0.2*2.3263=-0.36527。初始价值是100的情况下，对应损失分别为22.90和36.53t = 1mu_t = mu*tsigma_t = sigma*(t**0.5)from scipy import statsVaR1 = -s0*stats.norm(mu_t,sigma_t).ppf(1-c1)VaR2 = -s0*stats.norm(mu_t,sigma_t).ppf(1-c2)print('%.2f;%.2f;'%(VaR1, VaR2))",
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
    "chapterName": "2.3.4 VaR与预期亏损测验",
    "index": 2,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "假设某股票的初始价值是100元。日简单收益率服从平均值为2%，标准差为15%的正态分布。请分别在95%和99%的置信水平上，计算日VaR，即在95%的可能下股价损失不会超过（       ）元，在99%的可能下股价损失不会超过（      ）元。（答案保留两位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>假设某股票的初始价值是100元。日简单收益率服从平均值为2%，标准差为15%的正态分布。请分别在95%和99%的置信水平上，计算日VaR，即在95%的可能下股价损失不会超过（       ）元，在99%的可能下股价损失不会超过（      ）元。（答案保留两位小数）</p></div>",
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
    "analysis": "本题出自陈妍老师《2.3.4 VaR与预期亏损测验》。核心考点对应【正态分布 VaR / 投资组合协方差 / ES 一致性风险测度】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "2.3.4 VaR与预期亏损测验",
    "index": 3,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "考虑含A,B两种股票的投资组合。这两种股票不相关且收益率的均值为0，A和B分别有5%和12%的波动性。该投资组合有200万投资于A，100万投资于B。则95%置信水平下的组合VaR为（      ）万元。（答案保留2位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>考虑含A,B两种股票的投资组合。这两种股票不相关且收益率的均值为0，A和B分别有5%和12%的波动性。该投资组合有200万投资于A，100万投资于B。则95%置信水平下的组合VaR为（      ）万元。（答案保留2位小数）</p>\n<p><br/></p></div>",
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
    "analysis": "投资组合的mu=0，sigma=（0.05^2*(2/3)^2+0.12^2*(1/3)^2)^0.5=0.05，VaR=-300*(0-1.6449*0.05)=25.69计算出组合收益率的均值和方差，然后计算组合收益率的5%分位数，乘以组合初始价值即可。组合的均值组合的方差其中cov(A,B)=$\\rho$(A,B)*sigmaA*sigmaBW为权重矩阵",
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
    "chapterName": "2.3.4 VaR与预期亏损测验",
    "index": 4,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "考虑含A,B两种股票的投资组合。这两种股票的相关系数为0.3，收益率的均值分别为1%和2%，A和B分别有5%和12%的波动性。该投资组合有200万投资于A，100万投资于B。则95%置信水平下的组合VaR为（      ）万元。（答案保留2位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>考虑含A,B两种股票的投资组合。这两种股票的相关系数为0.3，收益率的均值分别为1%和2%，A和B分别有5%和12%的波动性。该投资组合有200万投资于A，100万投资于B。则95%置信水平下的组合VaR为（      ）万元。（答案保留2位小数）<br/></p>\n<p><br style=\"white-space: normal;\"/></p>\n<p><br/></p></div>",
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
    "chapterName": "2.3.4 VaR与预期亏损测验",
    "index": 5,
    "displayNum": "1",
    "type": "填空题",
    "score": 100.0,
    "stem": "A bank has two $10 million one-year loans. Possible outcomes are as followsOutcome                                                ProbabilityNeither loan defaults                                          97.5%Loan 1 defaults; Loan 2 does not default          1.25%Loan 2 defaults; Loan 1 does not default          1.25%Both loans default                                                 0%If a default occurs, losses between 0% and 100% are equally likely. If a loan does not default, a profit of 0.2 million is made.The 99% VaR of each project is (     )million;The expected shortfall of each project is (     )million;The 99% VaR for the portfolio is (      )million;The expected shortfall for the portfolio is (      )million.一家银行有两笔1000万美元的一年期贷款，可能的违约结果如下：结果                                  可能性两笔贷款都不违约                               97.5%贷款1违约，贷款2不违约                    1.25%贷款2违约，贷款1不违约                    1.25%两笔贷款都违约                                       0%如果发生了一笔违约，损失率在0%和100%之间的概率相等。如果一笔贷款不违约，会产生20万美元的利润。那么每个贷款项目的99%VaR是（    ）百万美元；每个贷款项目的预期损失是（    ）百万美元；投资组合的99%VaR是（     ）百万美元；投资组合的预期损失是（     ）百万美元。（答案保留1位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>A bank has two $10 million one-year loans. Possible outcomes are as follows<br/></p>\n<p>          Outcome                                                Probability</p>\n<p> Neither loan defaults                                          97.5%</p>\n<p> Loan 1 defaults; Loan 2 does not default          1.25%</p>\n<p> Loan 2 defaults; Loan 1 does not default          1.25%</p>\n<p> Both loans default                                                 0%</p>\n<p>If a default occurs, losses between 0% and 100% are equally likely. If a loan does not default, a profit of 0.2 million is made.</p>\n<p>The 99% VaR of each project is (     )million;</p>\n<p>The expected shortfall of each project is (     )<span style=\"text-wrap: wrap;\">million</span>;</p>\n<p>The 99% VaR for the portfolio is (      )<span style=\"text-wrap: wrap;\">million</span>;</p>\n<p>The expected shortfall for the portfolio is (      )<span style=\"text-wrap: wrap;\">million</span>.</p>\n<p><br/></p>\n<p>一家银行有两笔1000万美元的一年期贷款，可能的违约结果如下：<br/></p>\n<p>                 结果                                  可能性</p>\n<p>两笔贷款都不违约                               97.5%</p>\n<p>贷款1违约，贷款2不违约                    1.25%</p>\n<p>贷款2违约，贷款1不违约                    1.25%</p>\n<p>两笔贷款都违约                                       0%</p>\n<p>如果发生了一笔违约，损失率在0%和100%之间的概率相等。如果一笔贷款不违约，会产生20万美元的利润。那么</p>\n<p>每个贷款项目的99%VaR是（    ）百万美元；</p>\n<p>每个贷款项目的预期损失是（    ）百万美元；</p>\n<p>投资组合的99%VaR是（     ）百万美元；</p>\n<p>投资组合的预期损失是（     ）百万美元。</p>\n<p>（答案保留1位小数）</p>\n<p><br/></p></div>",
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
    "chapterName": "3.4 信用风险与违约率测验",
    "index": 1,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "一家中型对冲基金的风险分析师正在评估交易头寸的信用风险：• 该基金专门投资公司债，一项新交易是价值100亿日元的b级长期债券；• 分析师估计，b级债券在第1年的条件违约概率为7.7%；第2年7.1%；第 3年是6.6%；第4年是6.1%。• 问：该债券前3年存活且第4年违约的概率是多少？（答案以百分数形式表示，百分号前保留两位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>一家中型对冲基金的风险分析师正在评估交易头寸的信用风险： </p><p>• 该基金专门投资公司债，一项新交易是价值100亿日元的b级长期债券； </p><p>• 分析师估计，b级债券在第1年的条件违约概率为7.7%；第2年7.1%；第 3年是6.6%；第4年是6.1%。</p><p>• 问：该债券前3年存活且第4年违约的概率是多少？ </p><p>（答案以百分数形式表示，百分号前保留两位小数）</p></div>",
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
    "analysis": "本题出自陈妍老师《3.4 信用风险与违约率测验》。核心考点对应【穆迪累积违约率表 / 边际违约率递推 / 债券利差倒推 / CDS溢差】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "3.4 信用风险与违约率测验",
    "index": 2,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "根据穆迪各级别加权平均累积违约率表（1983-2020），A级债券前三年的累积违约概率分别为0.05%,0.16%,0.34%，这说明A级债券在前三年的条件违约概率分别是多少？前三年的年化违约率是多少？（答案以百分数形式表示，百分号前保留2位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>根据穆迪各级别加权平均累积违约率表（1983-2020），A级债券前三年的累积违约概率分别为0.05%,0.16%,0.34%，这说明A级债券在前三年的条件违约概率分别是多少？前三年的年化违约率是多少？（答案以百分数形式表示，百分号前保留2位小数）</p></div>",
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
    "analysis": "本题出自陈妍老师《3.4 信用风险与违约率测验》。核心考点对应【穆迪累积违约率表 / 边际违约率递推 / 债券利差倒推 / CDS溢差】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "3.4 信用风险与违约率测验",
    "index": 3,
    "displayNum": "3",
    "type": "填空题",
    "score": 10.0,
    "stem": "根据穆迪各级别加权平均累积违约率表（1983-2020），Ba级债券前三年的累积违约概率分别为0.83%,2.35%,4.14%，这说明Ba级债券在前三年的条件违约概率分别是多少？前三年的年化违约率是多少？（答案以百分数形式表示，百分号前保留2位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span style=\"color: rgb(24, 30, 51); font-family: PingFangSC, 微软雅黑, 黑体, Arial, Helvetica, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255);\">根据穆迪各级别加权平均累积违约率表（1983-2020），Ba级债券前三年的累积违约概率分别为0.83%,2.35%,4.14%，这说明Ba级债券在前三年的条件违约概率分别是多少？前三年的年化违约率是多少？（答案以百分数形式表示，百分号前保留2位小数）</span></p></div>",
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
    "analysis": "本题出自陈妍老师《3.4 信用风险与违约率测验》。核心考点对应【穆迪累积违约率表 / 边际违约率递推 / 债券利差倒推 / CDS溢差】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "3.4 信用风险与违约率测验",
    "index": 4,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "A公司发行面值为100万美元、违约回收率为0%的1年期零息债券，该债券目前的交易价格为面值的80%。假设无风险利率为每年5%，那么根据债券收益率溢差估计的该债券1年末的违约概率是多少？（答案用百分数表示，百分号前保留整数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>A公司发行面值为100万美元、违约回收率为0%的1年期零息债券，该债券目前的交易价格为面值的80%。假设无风险利率为每年5%，那么根据债券收益率溢差估计的该债券1年末的违约概率是多少？（答案用百分数表示，百分号前保留整数）</p></div>",
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
    "analysis": "本题出自陈妍老师《3.4 信用风险与违约率测验》。核心考点对应【穆迪累积违约率表 / 边际违约率递推 / 债券利差倒推 / CDS溢差】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "3.4 信用风险与违约率测验",
    "index": 5,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "A公司发行面值为100万美元、违约回收率为50%的1年期零息债券，该债券目前的交易价格为面值的60%。假设无风险利率为每年5%，那么根据债券收益率溢差估计的该债券1年末的违约概率是多少？（答案用百分数表示，百分号前保留整数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>A公司发行面值为100万美元、违约回收率为50%的1年期零息债券，该债券目前的交易价格为面值的60%。假设无风险利率为每年5%，那么根据债券收益率溢差估计的该债券1年末的违约概率是多少？（答案用百分数表示，百分号前保留整数）</p></div>",
    "images": [],
    "options": [],
    "correctAnswer": "第一空： 74%",
    "correctAnswerList": [
      "74%"
    ],
    "studentAnswer": "第一空： 74%",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "本题出自陈妍老师《3.4 信用风险与违约率测验》。核心考点对应【穆迪累积违约率表 / 边际违约率递推 / 债券利差倒推 / CDS溢差】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "3.4 信用风险与违约率测验",
    "index": 6,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "在5年以内所有年份中，某信用违约互换（CDS）每年的溢差s均为325个基点。该CDS的参考实体的违约损失率LGD为40%，计算参考实体在未来两年内某个时候违约的概率（累积违约概率）。（答案用百分数表示，百分号前保留整数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>在5年以内所有年份中，某信用违约互换（CDS）每年的溢差s均为325个基点。该CDS的参考实体的违约损失率LGD为40%，计算参考实体在未来两年内某个时候违约的概率（累积违约概率）。（答案用百分数表示，百分号前保留整数）</p></div>",
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
    "analysis": "本题出自陈妍老师《3.4 信用风险与违约率测验》。核心考点对应【穆迪累积违约率表 / 边际违约率递推 / 债券利差倒推 / CDS溢差】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "3.4 信用风险与违约率测验",
    "index": 7,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "在5年以内所有年份中，某信用违约互换（CDS）每年的溢差s均为325个基点。该CDS的参考实体的违约损失率LGD为100%，计算参考实体在未来两年内某个时候违约的概率（累积违约概率）。（答案用百分数表示，百分号前保留2位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span style=\"color: rgb(24, 30, 51); font-family: PingFangSC, 微软雅黑, 黑体, Arial, Helvetica, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255);\">在5年以内所有年份中，某信用违约互换（CDS）每年的溢差s均为325个基点。该CDS的参考实体的违约损失率LGD为100%，计算参考实体在未来两年内某个时候违约的概率（累积违约概率）。（答案用百分数表示，百分号前保留2位小数）</span></p></div>",
    "images": [],
    "options": [],
    "correctAnswer": "第一空： 6.29%",
    "correctAnswerList": [
      "6.29%"
    ],
    "studentAnswer": "第一空： 6.29%",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "本题出自陈妍老师《3.4 信用风险与违约率测验》。核心考点对应【穆迪累积违约率表 / 边际违约率递推 / 债券利差倒推 / CDS溢差】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "5.4 流动性风险LVaR测验",
    "index": 1,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "一个2亿美元投资组合的所有者希望估算1天99%经流动性调整的VaR。该投资组合日平均收益率为零，日波动率为1.4%。该投资组合的买卖价差比率日均值为0.1%，标准差为0.2%。如果价差的置信参数等于3，每日流动性成本调整（LC）后的\\text{-}VaR$是（     ）万元。（答案保留两位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>一个2亿美元投资组合的所有者希望估算1天99%经流动性调整的VaR。该投资组合日平均收益率为零，日波动率为1.4%。该投资组合的买卖价差比率日均值为0.1%，标准差为0.2%。如果价差的置信参数等于3，每日流动性成本调整（LC）后的LVaR是（     ）万元。（答案保留两位小数）</p></div>",
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
    "analysis": "本题出自陈妍老师《5.4 流动性风险\\text{-}VaR$测验》。核心考点对应【买卖价差外生模型 / 市场冲击内生模型 / 流动性调整 \\text{-}VaR$】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "5.4 流动性风险LVaR测验",
    "index": 2,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "一个2亿美元投资组合的所有者希望估算1天99%经流动性调整的VaR。该投资组合日平均收益率为零，日波动率为2.3%。该投资组合的买卖价差比率日均值为1%，标准差为2%。如果价差的置信参数等于3，每日流动性成本调整（LC）后的\\text{-}VaR$是（     ）万元。（答案保留两位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><span style=\"color: rgb(24, 30, 51); font-family: PingFangSC, 微软雅黑, 黑体, Arial, Helvetica, sans-serif; font-size: 14px; background-color: rgb(255, 255, 255);\">一个2亿美元投资组合的所有者希望估算1天99%经流动性调整的VaR。该投资组合日平均收益率为零，日波动率为2.3%。该投资组合的买卖价差比率日均值为1%，标准差为2%。如果价差的置信参数等于3，每日流动性成本调整（LC）后的LVaR是（     ）万元。（答案保留两位小数）</span></p></div>",
    "images": [],
    "options": [],
    "correctAnswer": "第一空： 1770.12",
    "correctAnswerList": [
      "1770.12"
    ],
    "studentAnswer": "第一空： 1771.80",
    "studentScore": 0.0,
    "isCorrect": false,
    "analysis": "本题出自陈妍老师《5.4 流动性风险\\text{-}VaR$测验》。核心考点对应【买卖价差外生模型 / 市场冲击内生模型 / 流动性调整 \\text{-}VaR$】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "5.4 流动性风险LVaR测验",
    "index": 3,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "Major Investments是一家资产管理公司，管理着250亿美元。它拥有一家公司20%的股份。Major Investments的风险经理担心，如果需要出售整个头寸，其规模将影响市场价格。他对需求的价格弹性的估计是-0.5。如果进行流动性调整，Major Investments的风险价值将增加（    ）？（答案以百分数表示，百分号前保留整数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>Major Investments是一家资产管理公司，管理着250亿美元。它拥有一家公司20%的股份。Major Investments的风险经理担心，如果需要出售整个头寸，其规模将影响市场价格。他对需求的价格弹性的估计是-0.5。如果进行流动性调整，Major Investments的风险价值将增加（    ）？（答案以百分数表示，百分号前保留整数）</p></div>",
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
    "analysis": "本题出自陈妍老师《5.4 流动性风险\\text{-}VaR$测验》。核心考点对应【买卖价差外生模型 / 市场冲击内生模型 / 流动性调整 \\text{-}VaR$】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "5.4 流动性风险LVaR测验",
    "index": 4,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "Major Investments是一家资产管理公司，管理着250亿美元。它拥有一家公司50%的股份。Major Investments的风险经理担心，如果需要出售整个头寸，其规模将影响市场价格。他对需求的价格弹性的估计是-0.1。如果进行流动性调整，Major Investments的风险价值将增加（    ）？（答案以百分数表示，百分号前保留整数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>Major Investments是一家资产管理公司，管理着250亿美元。它拥有一家公司50%的股份。Major Investments的风险经理担心，如果需要出售整个头寸，其规模将影响市场价格。他对需求的价格弹性的估计是-0.1。如果进行流动性调整，Major Investments的风险价值将增加（    ）？（答案以百分数表示，百分号前保留整数）</p></div>",
    "images": [],
    "options": [],
    "correctAnswer": "第一空： 5%",
    "correctAnswerList": [
      "5%"
    ],
    "studentAnswer": "第一空： 5%",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "本题出自陈妍老师《5.4 流动性风险\\text{-}VaR$测验》。核心考点对应【买卖价差外生模型 / 市场冲击内生模型 / 流动性调整 \\text{-}VaR$】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "6.4 国际监管与巴塞尔协议测验",
    "index": 1,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "某银行有现金2000万元、地方政府债券2亿元、住房抵押贷款5亿元、商业贷款(A级)30亿元、商业贷款(BB+)10亿元，根据监管规定，风险权重分别为：现金，0%；地方政府债券，20%；住宅抵押贷款，50%，商业贷款(A级)，50%；商业贷款(BB+)，100%。由此计算的监管资本金数量为（ ）亿元。（答案保留3位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>某银行有现金2000万元、地方政府债券2亿元、住房抵押贷款5亿元、商业贷款(A级)30亿元、商业贷款(BB+)10亿元，根据监管规定，风险权重分别为：现金，0%；地方政府债券，20%；住宅抵押贷款，50%，商业贷款(A级)，50%；商业贷款(BB+)，100%。由此计算的监管资本金数量为（ ）亿元。（答案保留3位小数）</p></div>",
    "images": [],
    "options": [],
    "correctAnswer": "第一空： 2.232",
    "correctAnswerList": [
      "2.232"
    ],
    "studentAnswer": "第一空： 2.232",
    "studentScore": 0.0,
    "isCorrect": true,
    "analysis": "本题出自陈妍老师《6.4 国际监管与巴塞尔协议测验》。核心考点对应【巴塞尔三支柱 / 资本充足率(4.5%, 6%, 8%) / 资本缓冲 / RAROC】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "6.4 国际监管与巴塞尔协议测验",
    "index": 2,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "某银行有现金1000万元、地方政府债券2亿元、住房抵押贷款5亿元、商 业贷款(A级)15亿元、商业贷款(BB+)10亿元，根据监管规定，风险权重分别为：现金，0%；地方政府债券，20%；住宅抵押贷款，50%，商业贷款(A级)，50%；商业贷款(BB+)，100%。由此计算的监管资本金数量为（        ）亿元。（答案保留3位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>某银行有现金1000万元、地方政府债券2亿元、住房抵押贷款5亿元、商 业贷款(A级)15亿元、商业贷款(BB+)10亿元，根据监管规定，风险权重分别为：现金，0%；地方政府债券，20%；住宅抵押贷款，50%，商业贷款(A级)，50%；商业贷款(BB+)，100%。由此计算的监管资本金数量为（        ）亿元。</p>\n<p>（答案保留3位小数）</p></div>",
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
    "analysis": "本题出自陈妍老师《6.4 国际监管与巴塞尔协议测验》。核心考点对应【巴塞尔三支柱 / 资本充足率(4.5%, 6%, 8%) / 资本缓冲 / RAROC】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "6.4 国际监管与巴塞尔协议测验",
    "index": 3,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "某金融机构所有者权益19亿元，其中普通股15亿元，优先股3亿元，留存收益1亿元；长期次级债3亿元，一般债务80亿元；风险加权资产135亿元。则该金融机构的核心一级资本充足率为（        ），一级资本充足率为（         ），资本充足率为（           ）。（以百分数形式表示，百分号前保留2位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>某金融机构所有者权益19亿元，其中普通股15亿元，优先股3亿元，留存收益1亿元；长期次级债3亿元，一般债务80亿元；风险加权资产135亿元。则该金融机构的核心一级资本充足率为（        ），一级资本充足率为（         ），资本充足率为（           ）。（以百分数形式表示，百分号前保留2位小数）<br/></p><p><br/></p></div>",
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
    "analysis": "本题出自陈妍老师《6.4 国际监管与巴塞尔协议测验》。核心考点对应【巴塞尔三支柱 / 资本充足率(4.5%, 6%, 8%) / 资本缓冲 / RAROC】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "6.4 国际监管与巴塞尔协议测验",
    "index": 4,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "某金融机构所有者权益11亿元，其中普通股9亿元，优先股1.5亿元，留存收益0.5亿元；长期次级债30亿元，一般债务1500亿元；风险加权资产2000亿元。则该金融机构的核心一级资本充足率为（        ），一级资本充足率为（         ），资本充足率为（           ）。（以百分数形式表示，百分号前保留2位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p><br/>某金融机构所有者权益11亿元，其中普通股9亿元，优先股1.5亿元，留存收益0.5亿元；长期次级债30亿元，一般债务1500亿元；风险加权资产2000亿元。则该金融机构的核心一级资本充足率为（        ），一级资本充足率为（         ），资本充足率为（           ）。（以百分数形式表示，百分号前保留2位小数）</p></div>",
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
    "analysis": "本题出自陈妍老师《6.4 国际监管与巴塞尔协议测验》。核心考点对应【巴塞尔三支柱 / 资本充足率(4.5%, 6%, 8%) / 资本缓冲 / RAROC】。请查阅右侧课件知识点联动与公式速查卡片！",
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
    "chapterName": "6.4 国际监管与巴塞尔协议测验",
    "index": 5,
    "displayNum": "1",
    "type": "填空题",
    "score": 10.0,
    "stem": "交易员A和B开发了不同投资策略，本金都为5000万，经测算，两个投资策略的最大可能损失WCL分别为1000万和2000万，预期损失为0。最后，二人的策略均获得了500万的利润。如果用ROE评价两人的绩效，交易员A的ROE是（      ），交易员B的ROE是（        ）；如果用RAROC评价两人的绩效，交易员A的RAROC是（       ），交易员B的RAROC是（        ）。（以百分数形式表示，百分号前保留整数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>交易员A和B开发了不同投资策略，本金都为5000万，经测算，两个投资策略的最大可能损失WCL分别为1000万和2000万，预期损失为0。最后，二人的策略均获得了500万的利润。如果用ROE评价两人的绩效，交易员A的ROE是（      ），交易员B的ROE是（        ）；如果用RAROC评价两人的绩效，交易员A的RAROC是（       ），交易员B的RAROC是（        ）。（以百分数形式表示，百分号前保留整数）</p></div>",
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
    "chapterName": "6.4 国际监管与巴塞尔协议测验",
    "index": 6,
    "displayNum": "2",
    "type": "填空题",
    "score": 10.0,
    "stem": "交易员A和B开发了不同投资策略，本金都为5000万，经测算，两个投资策略的最大可能损失分别为1000万和2000万，预期损失为100万，费用是10万。最后，二人的策略均获得了500万的收益。用RAROC评价两人的绩效，交易员A的RAROC是（       ），交易员B的RAROC是（        ）。（以百分数形式表示，百分号前保留一位小数）",
    "stemHtml": "<div class=\"clearfix font-cxsecret fontLabel qtContent\" style=\"line-height: 1.5; font-size: 14px;padding-right:15px;\"><p>交易员A和B开发了不同投资策略，本金都为5000万，经测算，两个投资策略的最大可能损失分别为1000万和2000万，预期损失为100万，费用是10万。最后，二人的策略均获得了500万的收益。用RAROC评价两人的绩效，交易员A的RAROC是（       ），交易员B的RAROC是（        ）。（以百分数形式表示，百分号前保留一位小数）</p></div>",
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
    "title": "2.1 利率风险管理（一）：久期理论与敏感性分析",
    "coreConcepts": [
      "【麦考勒久期 (Macaulay Duration)】：现金流折现加权平均回收时间。衡量债券价格对市场利率敏感度的核心指标。",
      "【修正久期 (Modified Duration)】：离散复利下 D* = D / (1 + y)，连续复利下 D* = D。价格相对变动百分比与利率变动的比例关系。",
      "【价格敏感度公式】：ΔP / P ≈ -D* · Δy。利率上升时价格下跌，久期越长跌幅越大；负号代表价格与利率的反向关系。",
      "【绝对额久期 (Dollar Duration)】：D$ = P · D*，度量利率变动 1 单位引起的债券市值绝对变动额：ΔP ≈ -D$ · Δy。"
    ],
    "formulas": [
      {
        "name": "麦考勒久期计算公式",
        "tex": "D = \\frac{\\sum_{t=1}^T t \\cdot \\frac{C_t}{(1+y)^t}}{P} = \\sum_{t=1}^T t \\cdot w_t",
        "desc": "其中 w_t = \\frac{C_t / (1+y)^t}{P} 为第 t 期现金流现值占债券总市值的权重，权重之和等于 1。"
      },
      {
        "name": "修正久期与价格变动百分比",
        "tex": "D^* = \\frac{D}{1 + y}, \\quad \\frac{\\Delta P}{P} \\approx -D^* \\cdot \\Delta y",
        "desc": "在离散复利 y 下修正久期为 D/(1+y)；若利率下降 0.5%，则 Δy = -0.005，价格变动百分比为正（升值）。"
      },
      {
        "name": "绝对额久期与投资组合久期",
        "tex": "D_{\\$} = P \\cdot D^*, \\quad D_{port}^* = \\sum_{i=1}^n w_i D_i^*",
        "desc": "资产负债组合总久期为各资产久期的市值加权平均值。"
      }
    ],
    "examTips": "期末考题重点计算：第 1 题与第 2 题在给定利率 (5% 或 10%) 下计算各期现金流折现并加权求久期；第 3 题与第 4 题利用修正久期快速近似求利率变动 ±0.5% 时的价格变动幅度。久期越长，利率敏感性与价格波动幅度越大！"
  },
  "2.1.5": {
    "title": "2.1 利率风险管理（二）：凸度特征与国债期货对冲",
    "coreConcepts": [
      "【凸度 (Convexity)】：债券价格对利率的二阶偏导数除以价格（C = (1/P) · d²P/dy²）。反映价格-利率曲线的弯曲曲率。",
      "【绝对额凸度 (Dollar Convexity)】：债券价格对利率的纯二阶偏导数 d²P/dy²，不除以价格 P。",
      "【凸度的优良特性】：对于普通非含权债券，凸度恒大于 0；在利率下降时价格上涨幅度大于久期预测值，在利率上升时价格下跌幅度小于久期预测值（跌少涨多）。",
      "【久期+凸度联合二阶近似】：ΔP / P ≈ -D* · Δy + 0.5 · C · (Δy)²，能够极大提高大副利率变动时的预测精度。",
      "【国债期货对冲比率】：N = -(P · D*_P) / (F · D*_F)，使组合总绝对额久期为 0 实现久期免疫。"
    ],
    "formulas": [
      {
        "name": "离散复利下的债券凸度公式",
        "tex": "C = \\frac{1}{P (1+y)^2} \\sum_{t=1}^T \\frac{t(t+1) C_t}{(1+y)^t}",
        "desc": "每一期现金流现值乘以 t(t+1)，求和后除以 P(1+y)²。"
      },
      {
        "name": "久期与凸度二阶泰勒展开价格预测",
        "tex": "\\frac{\\Delta P}{P} \\approx -D^* \\cdot \\Delta y + \\frac{1}{2} C (\\Delta y)^2",
        "desc": "一阶项反映线性久期斜率，二阶修正项 0.5·C·(Δy)² 永远为正，抵消部分下跌或增加上涨。"
      },
      {
        "name": "国债期货利率对冲合约份数",
        "tex": "N = - \\frac{P \\cdot D^*_P}{F \\cdot D^*_F}",
        "desc": "P 为待对冲现货资产市值，F 为一份国债期货合约价值，D*_P 与 D*_F 分别为现货与期货的修正久期。"
      }
    ],
    "examTips": "易错陷阱：久期是一阶敏感度，凸度是二阶敏感度；绝对额久期与绝对额凸度分别对应一阶和二阶偏导数。资产负债缺口管理中：若银行负债久期 > 资产久期，利率上升时负债贬值更多，净资产增加，因而对其有利！"
  },
  "2.2.3": {
    "title": "2.2 衍生品风险管理（一）：远期、期货与希腊字母敏感性",
    "coreConcepts": [
      "【Delta (Δ)】：衍生品价格对标的资产价格的一阶导数（Δ = ∂f/∂S）。标的资产变化 1 单位，衍生品价值变化 Δ 单位。",
      "【Vega (ν)】：衍生品价格对标的资产波动率的一阶偏导数（ν = ∂f/∂σ）。波动率变动 1%，衍生品价值变动 ν 单位。",
      "【Rho (ρ)】：衍生品价格对无风险利率的一阶偏导数（ρ = ∂f/∂r）。反映利率变动对期权价值的影响。",
      "【Rho 变化百分比关键换算】：无风险利率每变动 1 个百分点（即 Δr = 1% = 0.01），期权价格变动额为 Δf ≈ ρ · Δr = 0.01 · ρ。若 ρ = 15.1215，则利率上升 1% 时期权价格增加 0.1512！"
    ],
    "formulas": [
      {
        "name": "Delta 价格变动线性估计",
        "tex": "\\Delta \\Pi \\approx \\Delta \\cdot \\Delta S",
        "desc": "当 Delta = -2100，标的指数从 1000 上涨到 1005 (ΔS = +5)，组合价值变动 = -2100 × 5 = -10500（下降 10500）。"
      },
      {
        "name": "Vega 波动率变动价值估计",
        "tex": "\\Delta \\Pi \\approx \\nu \\cdot \\Delta \\sigma",
        "desc": "当 Vega = 200 (每 1% 变动)，波动率从 12% 增至 14% (Δσ = +2%)，组合价值增加 = 200 × 2 = 400。"
      },
      {
        "name": "Rho 利率变动百分比换算",
        "tex": "\\Delta f \\approx \\rho \\cdot \\Delta r = \\rho \\cdot 0.01",
        "desc": "无风险利率增长 1 个百分点时：ρ = 15.1215 时 Δf = 0.1512；ρ = 8.9066 时 Δf = 0.0891。"
      }
    ],
    "examTips": "高频考题（原题第 3 题）：注意题目明确要求“以小数形式表达，保留4位小数”。输入 15.1215 会得 0 分，正确标准答案为 0.1512 与 0.0891！"
  },
  "2.2.5": {
    "title": "2.2 衍生品风险管理（二）：期权策略与多维希腊字母中性化",
    "coreConcepts": [
      "【经典差价期权策略】：牛市差价 (Bull Spread，买低卖高同类期权)、熊市差价 (Bear Spread，买高卖低)、蝶式差价 (Butterfly Spread，买两翼卖中间)、跨式组合 (Straddle，同时买入相同执行价的看涨与看跌期权)。",
      "【Delta 对冲机制】：看涨期权 Delta > 0。卖出 100 份看涨期权（Δ = -100 × 0.4 = -40），需买入 40 单位标的资产以使总 Delta 为 0。",
      "【标的资产的希腊字母特性】：标的股票现货的 Delta = 1，Gamma = 0，Vega = 0。现货无法用于对冲 Gamma 与 Vega 风险！",
      "【动态对冲 (Dynamic Hedging)】：期权是非线性产品，Gamma ≠ 0 导致标的价格波动后 Delta 随之变化，因此 Delta 对冲必须随标的价格变化不断动态调整；线性期货产品的对冲则是“保完即忘”。",
      "【Gamma 与 Vega 联合中性】：必须至少引入 2 种非线性期权产品（w1, w2），联立二元一次方程组求解持有头寸，最后再用标的现货将总 Delta 补足为 0。"
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
        "desc": "与 Gamma 方程联立解出期权 1 与期权 2 的持有头寸 w1 与 w2。"
      },
      {
        "name": "Delta 最终补足方程",
        "tex": "\\Delta_{port} = \\Delta_0 + w_1 \\Delta_1 + w_2 \\Delta_2 + w_S = 0",
        "desc": "在确定 w1, w2 后，通过买卖标的股票现货 w_S 达到全维度中性。"
      }
    ],
    "examTips": "重点背诵：要想同时实现 Gamma 中性和 Vega 中性，至少需要引入两份非线性的期权产品！现货股票的 Gamma 和 Vega 恒等于 0，无法调节二阶风险。"
  },
  "2.3.4": {
    "title": "2.3 在险价值 (VaR) 与预期亏损 (ES)：度量模型与公理化检验",
    "coreConcepts": [
      "【在险价值 (VaR)】：在给定的置信水平 1-α (如 95% 或 99%) 和持有期 T 内，投资组合可能遭受的最大潜在损失。P(Loss > VaR) ≤ α。",
      "【预期亏损 (ES / CVaR)】：在损失超过 VaR 门限的极端尾部情形下，损失的期望平均值。ES = E[Loss | Loss > VaR]。",
      "【次可加性公理 (Subadditivity)】：一致性风险测度必须满足 ρ(X + Y) ≤ ρ(X) + ρ(Y)（分散投资降低风险）。VaR 在肥尾非正态分布下可能违背次可加性，而 ES 恒满足次可加性，是一致性风险测度。",
      "【分位数对应表】：标准正态分布下，α = 0.05 时 z_α = -1.6449 (对应双侧或单侧 95%)；α = 0.01 时 z_α = -2.3263 (99% 置信度)。"
    ],
    "formulas": [
      {
        "name": "正态分布单资产 VaR 计算",
        "tex": "VaR_{1-\\alpha} = - (\\mu + z_\\alpha \\sigma) = - \\mu + |z_\\alpha| \\sigma",
        "desc": "当收益率服从 N(μ, σ²) 时，损失分位数为 -(μ + z_α σ)。当 μ=0.1, σ=0.2, α=0.01 时，|z|=2.3263，VaR = 2.3263×0.2 - 0.1 = 0.3653 (36.53%)。"
      },
      {
        "name": "正态分布单资产 ES 计算",
        "tex": "ES_{1-\\alpha} = - \\mu + \\sigma \\frac{\\phi(z_\\alpha)}{\\alpha}",
        "desc": "ϕ(z) 为标准正态概率密度函数。ES 严格大于 VaR，充分考虑了尾部灾难损失的深度。"
      },
      {
        "name": "投资组合协方差方差 VaR",
        "tex": "\\sigma_p = \\sqrt{w_1^2 \\sigma_1^2 + w_2^2 \\sigma_2^2 + 2 w_1 w_2 \\rho \\sigma_1 \\sigma_2}",
        "desc": "两资产等权重 (2/3 与 1/3) 无相关性 (ρ=0) 时，σ_p = √((2/3)²×0.05² + (1/3)²×0.12²) = 0.05207。"
      }
    ],
    "examTips": "第 5 题贷款组合必考：单一贷款 98.75% 概率盈利 20 万（损失 -0.2），1.25% 概率损失 0~9.8 百万（均匀分布）。99% 置信度下两笔独立贷款 VaR(A+B) = 7.8 百万 > VaR(A)+VaR(B) = 5.8 百万，直接证明了 VaR 不满足次可加性！"
  },
  "3.4": {
    "title": "3 信用风险管理：违约概率估计、债券利差与 CDS 定价",
    "coreConcepts": [
      "【累积违约率 Q(t)】：借款人在期限 0 到 t 内发生违约的概率。随着年限递增而单调递增。",
      "【边际条件违约率 d_t】：在已存活到第 t-1 年末的前提下，在第 t 年发生违约的条件概率：d_t = (Q_t - Q_{t-1}) / (1 - Q_{t-1})。",
      "【零息债券利差倒推违约率】：在违约回收率为 R 的假设下，违约风险债券收益率 y 高于无风险收益率 y*，利差补偿期望信用损失：λ̄ ≈ (y - y*) / (1 - R)。",
      "【信用违约互换 (CDS)】：信用保护买方向卖方支付固定季度年化溢差 (CDS Spread s)，当标的实体违约时卖方赔付票面价值 × (1 - R)。"
    ],
    "formulas": [
      {
        "name": "边际条件违约率递推公式",
        "tex": "d_t = \\frac{Q_t - Q_{t-1}}{1 - Q_{t-1}}",
        "desc": "Q_t 为第 t 年累积违约率。若 Q1=0.83%, Q2=2.35%, 则第 2 年边际违约率 d2 = (2.35% - 0.83%)/(1 - 0.83%) = 1.53%。"
      },
      {
        "name": "零息债券信用利差倒推平均违约率",
        "tex": "\\bar{\\lambda} = \\frac{y - y^*}{1 - R}",
        "desc": "y 为企业债到期收益率，y* 为国债无风险利率，R 为预期回收率 (Recovery Rate)。"
      },
      {
        "name": "CDS 盈亏平衡年化溢差公式",
        "tex": "s \\approx \\bar{\\lambda} (1 - R)",
        "desc": "基准 CDS 溢差等于年化违约概率乘以违约损失率 (LGD = 1 - R)。"
      }
    ],
    "examTips": "重点背诵穆迪累积违约率表题：第 2 题与第 3 题连续考核根据累积违约概率计算各年度条件违约率 d1, d2, d3, d4；第 4~6 题通过零息债券价格或收益率利差计算平均年化违约概率。"
  },
  "5.4": {
    "title": "5 流动性风险管理：买卖价差模型与流动性调整 LVaR",
    "coreConcepts": [
      "【外生流动性成本 (Exogenous Liquidity Cost)】：由市场买卖报价差 (Bid-Ask Spread) 引起的清算成本。与交易者的自身交易规模无关，假定市场能够无摩擦吸收该头寸。",
      "【内生流动性成本 (Endogenous Liquidity Cost)】：由于交易规模庞大（巨额清算），超出市场深度导致的永久性与暂时性价格负面冲击 (Market Impact)。",
      "【流动性调整在险价值 (LVaR)】：在传统纯价格 VaR 基础上加上清算变现时的流动性摩擦成本：LVaR = VaR + 0.5 · P · (S + k · σ_S)。",
      "【正态分布买卖价差】：假定相对价差 S ~ N(μ_S, σ_S²)，99% 置信度下清算成本为 0.5 · P · (μ_S + 2.33 · σ_S)。"
    ],
    "formulas": [
      {
        "name": "外生流动性清算成本 (常数价差)",
        "tex": "Cost_{exogenous} = \\frac{1}{2} P \\cdot S",
        "desc": "P 为头寸中间价总市值，S 为相对买卖价差 S = (P_ask - P_bid) / P_mid。"
      },
      {
        "name": "随机买卖价差下的流动性调整 LVaR",
        "tex": "LVaR = VaR + \\frac{1}{2} P \\left( \\mu_S + z_\\alpha \\sigma_S \\right)",
        "desc": "在市场波动剧烈时期，买卖价差本身会急剧扩大，因此必须将价差的不确定性纳入风险总敞口。"
      },
      {
        "name": "内生流动性市场冲击模型",
        "tex": "\\Delta P = \\eta \\cdot \\left(\\frac{V}{ADV}\\right)^\\alpha",
        "desc": "V 为清算头寸规模，ADV 为日均交易量，η 为市场冲击敏感系数。"
      }
    ],
    "examTips": "第 1 题与第 2 题计算：头寸总价值 P = 股数 × 单价。计算外生清算成本 = 0.5 × P × S；若考虑 99% 置信度随机价差，则附加项为 0.5 × P × (μ_s + 2.3263 × σ_s)，两者相加得到 LVaR。"
  },
  "6.4": {
    "title": "6 国际监管规则与巴塞尔协议：三大支柱、资本充足率与 RAROC",
    "coreConcepts": [
      "【巴塞尔协议三大支柱】：第一支柱：最低资本要求 (信用/市场/操作风险)；第二支柱：监管当局监督检查 (ICAAP)；第三支柱：市场纪律与信息披露。",
      "【巴塞尔协议 III 最低资本比率指标】：核心一级资本充足率 (CET1) ≥ 4.5%；一级资本充足率 (Tier 1) ≥ 6.0%；总资本充足率 (Total Capital) ≥ 8.0%。",
      "【两大附加资本缓冲】：储备缓冲 (Capital Conservation Buffer, 2.5% 由核心一级资本构成)；逆周期资本缓冲 (Countercyclical Buffer, 0% ~ 2.5%)。",
      "【杠杆率与流动性监管】：杠杆率 (Tier 1 / 表内外总风险暴露) ≥ 3%；流动性覆盖率 (LCR) ≥ 100%；净稳定资金比率 (NSFR) ≥ 100%。",
      "【风险调整资本回报率 (RAROC)】：RAROC = (收益 - 经营成本 - 预期损失 EL) / 经济资本 EC。经济资本代表未预期损失 (UL = VaR - EL)。"
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
        "desc": "第 6 题原题计算：业务 A: (500 - 10 - 100) / (1000 - 100) = 43.3%；业务 B: (500 - 10 - 100) / (2000 - 100) = 20.5%。"
      }
    ],
    "examTips": "必背数字：4.5% (CET1), 6% (Tier 1), 8% (Total), 2.5% (留存缓冲), 3% (杠杆率), 100% (LCR/NSFR)。第 5 题区分 ROE 与 RAROC：传统 ROE 未考虑承担的非预期风险，而 RAROC 引入经济资本衡量风险调整后的真实盈利能力！"
  }
};

export const FORMULA_DICT: FormulaItem[] = [
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
