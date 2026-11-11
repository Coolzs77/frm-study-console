const fs = require('fs');
const content = fs.readFileSync('e:/workspace/frm-study-console/src/data/quizData.ts', 'utf8');
const audit = JSON.parse(fs.readFileSync('e:/workspace/frm-study-console/scripts/questions_audit.json', 'utf8'));

const ids = ['q_2_2_5_14', 'q_2_3_4_1', 'q_3_4_3', 'q_3_4_4', 'q_3_4_7', 'q_6_4_1'];
ids.forEach(id => {
  const q = audit.find(item => item.id === id);
  if (q) {
    console.log(`\nID: ${q.id} (Num: ${q.num})`);
    console.log(`Stem: ${q.stem}`);
    console.log(`Correct Answer: ${q.correctAnswer}`);
  }
});
