const fs = require('fs');
const audit = JSON.parse(fs.readFileSync('e:/workspace/frm-study-console/scripts/questions_audit.json', 'utf8'));
const choices = audit.filter(q => q.type.includes('选') || q.type.includes('判断'));
console.log('Count:', choices.length);
choices.forEach(q => {
  console.log(`\n================= Q${q.num} (${q.id}) [${q.type}] 标答: ${q.correctAnswer} =================`);
  console.log('Stem:', q.stem);
  console.log('Options:', q.options);
  console.log('Analysis preview:', q.analysis.slice(0, 150));
});
