const fs = require('fs');
const path = require('path');

const root = 'e:/workspace/frm-study-console';
const quizText = fs.readFileSync(path.join(root, 'src/data/quizData.ts'), 'utf8');

const qStart = quizText.indexOf('export const QUESTIONS: Question[] = ') + 'export const QUESTIONS: Question[] = '.length;
const qEnd = quizText.indexOf('export const SLIDE_NOTES');
const vm = require('vm');
const qCode = quizText.slice(qStart, qEnd).trim().replace(/;$/, '');
const questions = vm.runInNewContext('(' + qCode + ')');

const sStart = quizText.indexOf('export const SLIDE_NOTES: Record<string, SlideNote> = ') + 'export const SLIDE_NOTES: Record<string, SlideNote> = '.length;
const sEnd = quizText.indexOf('export const FORMULA_DICT');
const sCode = quizText.slice(sStart, sEnd).trim().replace(/;$/, '');
const slideNotes = vm.runInNewContext('(' + sCode + ')');

console.log(`Loaded ${questions.length} questions, ${Object.keys(slideNotes).length} slideNotes.`);

// 1. Check all stemImages, analysisImages, images
for (const q of questions) {
  const stems = q.stemImages || [];
  const analyses = q.analysisImages || [];
  for (const img of [...stems, ...analyses]) {
    const p = path.join(root, 'public', img);
    if (!fs.existsSync(p)) {
      console.log('MISSING FILE:', q.id, img);
    } else {
      const buf = fs.readFileSync(p);
      const isPng = buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4E && buf[3] === 0x47;
      const isJpg = buf[0] === 0xFF && buf[1] === 0xD8;
      if (!isPng && !isJpg) {
        console.log('CORRUPT IMAGE HEADER:', q.id, img, buf.slice(0, 8));
      }
    }
  }
  // Check if stemHtml has any <img> not in stemImages
  if (q.stemHtml) {
    const matches = [...q.stemHtml.matchAll(/src="([^"]+)"/g)].map(m => m[1]);
    for (const m of matches) {
      if (!stems.includes(m)) {
        console.log('IMG in stemHtml not in stemImages:', q.id, m);
      }
    }
  }
  if (q.analysisHtml) {
    const matches = [...q.analysisHtml.matchAll(/src="([^"]+)"/g)].map(m => m[1]);
    for (const m of matches) {
      if (!analyses.includes(m)) {
        console.log('IMG in analysisHtml not in analysisImages:', q.id, m);
      }
    }
  }
  // Also check if stem or analysis has broken $ signs (like ^*$) or unclosed $
  const checkOddDollars = (field, val) => {
    if (!val) return;
    const stripped = val.replace(/\$\$[\s\S]*?\$\$/g, '');
    const cnt = (stripped.match(/\$/g) || []).length;
    if (cnt % 2 !== 0) {
      console.log(`ODD $ IN ${q.id}.${field}:`, val);
    }
  };
  checkOddDollars('stem', q.stem);
  checkOddDollars('analysis', q.analysis);
}

// 2. Check all slideNotes pdfUrl and realSlides
for (const [cid, note] of Object.entries(slideNotes)) {
  const pdfP = note.pdfUrl ? path.join(root, 'public', note.pdfUrl) : null;
  const pdfExists = pdfP ? fs.existsSync(pdfP) : false;
  const pdfMb = pdfExists ? (fs.statSync(pdfP).size / 1048576).toFixed(2) : 'N/A';
  console.log(`Chapter ${cid}: pdf=${note.pdfUrl} (${pdfMb} MB, exists=${pdfExists}), realSlides=${(note.realSlides || []).length}`);
}
