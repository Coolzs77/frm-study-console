const fs = require('fs');
const content = fs.readFileSync('e:/workspace/frm-study-console/src/data/quizData.ts', 'utf8');
const mathRegex = /\$([^\$]+?)\$/g;
let count = 0;
let match;
while ((match = mathRegex.exec(content)) !== null) {
  if (match[1].includes('**')) {
    count++;
    if (count <= 10) {
      console.log(`Occurence ${count}: ${match[0]}`);
    }
  }
}
console.log('Total math containing **:', count);
