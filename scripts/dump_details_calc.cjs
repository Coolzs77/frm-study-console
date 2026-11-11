const fs = require('fs');
const content = fs.readFileSync('e:/workspace/frm-study-console/src/data/quizData.ts', 'utf8');
const lines = content.split('\n');
const lineNumbers = [1449, 1478, 1713, 1745, 1840, 1993];

lineNumbers.forEach(ln => {
  const start = Math.max(0, ln - 8);
  const end = Math.min(lines.length, ln + 3);
  console.log(`\n============== Around line ${ln} ==============`);
  console.log(lines.slice(start, end).join('\n'));
});
