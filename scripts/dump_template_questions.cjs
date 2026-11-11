const fs = require('fs');
const content = fs.readFileSync('e:/workspace/frm-study-console/src/data/quizData.ts', 'utf8');
const lines = content.split('\n');
const lineNumbers = [1219, 1259, 1339, 1379, 1449, 1478, 1713, 1745, 1840, 1993];

lineNumbers.forEach(ln => {
  const start = Math.max(0, ln - 15);
  const end = Math.min(lines.length, ln + 10);
  console.log(`\n============== Around line ${ln} ==============`);
  for (let i = start; i < end; i++) {
    if (lines[i].includes('"id"') || lines[i].includes('"question"') || lines[i].includes('"correctAnswer"') || lines[i].includes('"analysis"')) {
      console.log(lines[i]);
    }
  }
});
