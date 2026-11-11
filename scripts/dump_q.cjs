
const fs = require('fs');
const content = fs.readFileSync('src/data/quizData.ts', 'utf8');
// Extract QUESTIONS
const qStart = content.indexOf('export const QUESTIONS: Question[] = [');
const qEnd = content.indexOf('export const SLIDE_NOTES:');
const qStr = content.slice(qStart + 'export const QUESTIONS: Question[] = '.length, qEnd).trim().replace(/;$/, '');

// Evaluate safely
const questions = eval(qStr);

const audit = questions.map((q, idx) => {
  return {
    num: idx + 1,
    id: q.id,
    chapter: q.chapterName,
    type: q.type,
    stem: q.stem,
    options: q.options ? q.options.map(o => `${o.label}: ${o.text}`) : [],
    correctAnswer: q.correctAnswer,
    studentAnswer: q.studentAnswer,
    analysis: q.analysis,
    analysisHtml: q.analysisHtml,
    hasAnalysisImages: (q.analysisImages || []).length > 0
  };
});

fs.writeFileSync('scripts/questions_audit.json', JSON.stringify(audit, null, 2), 'utf8');
console.log('Successfully dumped', audit.length, 'questions to scripts/questions_audit.json');
