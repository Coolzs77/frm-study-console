const fs = require('fs');
const content = fs.readFileSync('e:/workspace/frm-study-console/src/data/quizData.ts', 'utf8');

// 只匹配单行内的数学公式 $...$
const singleLineMathRegex = /\$([^$\n\r]+?)\$/g;
let count = 0;
let match;
while ((match = singleLineMathRegex.exec(content)) !== null) {
  if (match[1].includes('**')) {
    count++;
    console.log(`True collision ${count}:`, match[0]);
  }
}
console.log('Total single-line math containing **:', count);
