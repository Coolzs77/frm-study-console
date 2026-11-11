const fs = require('fs');
const path = require('path');
const esbuild = require('esbuild');
const katex = require('katex');

let passedTests = 0;
let totalTests = 0;

function assert(cond, name, details = '') {
  totalTests++;
  if (!cond) {
    console.error(`❌ [FAIL] ${name}: ${details}`);
    process.exitCode = 1;
  } else {
    passedTests++;
    console.log(`✓ [PASS] ${name}`);
  }
}

// 1. Check for "陈妍" in src/ and index.html
function checkNoTeacherName(dir) {
  const files = fs.readdirSync(dir);
  let occurrences = [];
  for (const f of files) {
    const full = path.join(dir, f);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      occurrences.push(...checkNoTeacherName(full));
    } else if (/\.(tsx?|html|css|json)$/.test(f)) {
      const text = fs.readFileSync(full, 'utf8');
      if (text.includes('陈妍')) {
        occurrences.push(full);
      }
    }
  }
  return occurrences;
}

const foundTeacher = checkNoTeacherName('src');
assert(foundTeacher.length === 0, 'No "陈妍" in src/', `Found in: ${foundTeacher.join(', ')}`);

const indexHtml = fs.readFileSync('index.html', 'utf8');
assert(!indexHtml.includes('陈妍'), 'No "陈妍" in index.html');

// 2. Load transpiled quizData
const tsCode = fs.readFileSync('src/data/quizData.ts', 'utf8');
const transpiled = esbuild.transformSync(tsCode, { loader: 'ts', format: 'cjs' }).code;
const mod = { exports: {} };
new Function('module', 'exports', transpiled)(mod, mod.exports);
const { QUESTIONS, CHAPTERS, SLIDE_NOTES, FORMULA_DICT, METADATA } = mod.exports;

assert(QUESTIONS.length === 56, 'QUESTIONS count is 56', `Got ${QUESTIONS.length}`);
assert(CHAPTERS.length === 8, 'CHAPTERS count is 8', `Got ${CHAPTERS.length}`);

// 3. Image separation: stemImages vs analysisImages
let stemImgCount = 0;
let analysisImgCount = 0;
const publicImgFiles = fs.readdirSync('public/images');

QUESTIONS.forEach((q, idx) => {
  const stem = q.stemImages || [];
  const analysis = q.analysisImages || [];
  stemImgCount += stem.length;
  analysisImgCount += analysis.length;

  [...stem, ...analysis].forEach(imgPath => {
    const fname = path.basename(imgPath);
    assert(publicImgFiles.includes(fname), `Image file exists: ${imgPath}`, `Missing file ${fname}`);
  });
});

assert(stemImgCount === 2, 'Stem images total 2 (Q1 and Q2 given tables)', `Got ${stemImgCount}`);
assert(analysisImgCount === 33, 'Analysis images total 33 (step derivations)', `Got ${analysisImgCount}`);

// 4. KaTeX verification for all formulas in quizData
let allStrings = [];
function collect(obj) {
  if (typeof obj === 'string') allStrings.push(obj);
  else if (Array.isArray(obj)) obj.forEach(collect);
  else if (obj && typeof obj === 'object') Object.values(obj).forEach(collect);
}
collect({ QUESTIONS, SLIDE_NOTES, FORMULA_DICT });

let formulaErrors = [];
allStrings.forEach(str => {
  const parts = str.split(/(\$\$[\s\S]*?\$\$|\$[^\$]+?\$)/g);
  parts.forEach(p => {
    if (p.startsWith('$$') && p.endsWith('$$') && p.length >= 4) {
      try {
        katex.renderToString(p.slice(2, -2).trim(), { displayMode: true, throwOnError: true });
      } catch (e) {
        formulaErrors.push({ tex: p, err: e.message });
      }
    } else if (p.startsWith('$') && p.endsWith('$') && p.length >= 2) {
      try {
        katex.renderToString(p.slice(1, -1).trim(), { displayMode: false, throwOnError: true });
      } catch (e) {
        formulaErrors.push({ tex: p, err: e.message });
      }
    }
  });
});

assert(formulaErrors.length === 0, 'All KaTeX formulas compile with 0 errors', JSON.stringify(formulaErrors.slice(0, 3)));

// 5. Check Slide Notes keyPages
let totalKeyPages = 0;
CHAPTERS.forEach(c => {
  const note = SLIDE_NOTES[c.id];
  assert(!!note, `SlideNote exists for chapter ${c.id}`);
  assert((note?.keyPages || []).length >= 3, `Chapter ${c.id} has >= 3 key PPT pages`, `Got ${(note?.keyPages || []).length}`);
  totalKeyPages += (note?.keyPages || []).length;
});
assert(totalKeyPages === 24, 'Total 24 key PPT pages embedded across 8 chapters', `Got ${totalKeyPages}`);

// 6. Test Blank checking logic
function checkSingleBlank(uRaw, sRaw) {
  let u = uRaw.trim().replace(/％/g, '%').replace(/[，,]/g, '').toLowerCase();
  let s = sRaw.trim().replace(/％/g, '%').replace(/[，,]/g, '').toLowerCase();

  u = u.replace(/^第[一二三四五六七八九十\d]+空[：:]\s*/, '');
  s = s.replace(/^第[一二三四五六七八九十\d]+空[：:]\s*/, '');

  if (u === s) return true;
  const uNoPct = u.replace(/%/g, '').trim();
  const sNoPct = s.replace(/%/g, '').trim();
  if (uNoPct === sNoPct) return true;

  const numU = parseFloat(uNoPct);
  const numS = parseFloat(sNoPct);
  if (!isNaN(numU) && !isNaN(numS)) {
    return Math.abs(numU - numS) <= 0.01;
  }
  return false;
}

function checkBlankValue(userVal, stdVal) {
  if (!userVal || !stdVal) return false;
  const alternatives = stdVal.split(/[;；/]/).map(x => x.trim()).filter(Boolean);
  if (alternatives.length === 0) return checkSingleBlank(userVal, stdVal);
  return alternatives.some(alt => checkSingleBlank(userVal, alt));
}

assert(checkBlankValue('32.90', '32.90;32.89') === true, 'Q36 allows alternative 32.90');
assert(checkBlankValue('32.89', '32.90;32.89') === true, 'Q36 allows alternative 32.89');
assert(checkBlankValue('1.67', '1.67%') === true, 'Tolerates user input without %');
assert(checkBlankValue('1.67%', '1.67%') === true, 'Tolerates user input with %');
assert(checkBlankValue('3.220', '3.22') === true, 'Numeric tolerance handles trailing zeros');
assert(checkBlankValue('a', 'A') === true, 'Case insensitive for letter blanks');

// 7. Verify MockExamView has no modal trap and passes mode="exam"
const mockExamViewContent = fs.readFileSync('src/components/quiz/MockExamView.tsx', 'utf8');
assert(!mockExamViewContent.includes('(showResultModal || isSubmitted)'), 'MockExamView does not trap modal with (showResultModal || isSubmitted)');
assert(mockExamViewContent.includes("mode={isSubmitted ? 'read' : 'exam'}"), 'MockExamView passes mode="exam" during active test to prevent answer leak');

// 8. Verify QuestionCanvas has exam mode protection & clean button text
const questionCanvasContent = fs.readFileSync('src/components/quiz/QuestionCanvas.tsx', 'utf8');
assert(questionCanvasContent.includes("mode === 'exam'"), 'QuestionCanvas handles mode === exam');
assert(!questionCanvasContent.includes('(+10分)'), 'Removed hardcoded (+10分) from QuestionCanvas');
assert(!questionCanvasContent.includes('group-hover:opacity-100'), 'No hover blackout overlay on images');

// 9. Verify Header & SyncModal concise button and title text
const syncModalContent = fs.readFileSync('src/components/sync/SyncModal.tsx', 'utf8');
assert(!syncModalContent.includes('手机 ⇄ 电脑双向互通'), 'SyncModal title is concise');
assert(!syncModalContent.includes('(推荐)'), 'SyncModal has no (推荐) note');
assert(syncModalContent.includes('生成口令'), 'SyncModal uses concise button "生成口令"');

// 10. Verify v3 specific requirements
const headerContent = fs.readFileSync('src/components/layout/Header.tsx', 'utf8');
assert(!headerContent.includes('备考控制台'), 'Header removed "备考控制台"');
assert(!headerContent.includes('56 题全库 · 10 题模拟考'), 'Header removed subtitle');
assert(headerContent.includes('金融风险管理'), 'Header keeps "金融风险管理"');

// 11. Verify Chapter names have no "测验"
CHAPTERS.forEach(c => {
  assert(!c.name.includes('测验'), `Chapter ${c.id} name has no "测验": ${c.name}`);
});

// 12. Verify 5 Greeks in FORMULA_DICT
const greekNames = ['Delta', 'Gamma', 'Theta', 'Vega', 'Rho'];
greekNames.forEach(g => {
  const found = FORMULA_DICT.some(f => f.name.includes(g));
  assert(found, `FORMULA_DICT includes Greek letter ${g}`);
});

// 13. Verify Real slides in public/slides and SLIDE_NOTES
const slideFiles = fs.readdirSync('public/slides');
assert(slideFiles.length >= 19, `Extracted >= 19 real PPT slide images`, `Got ${slideFiles.length}`);
let totalRealSlides = 0;
Object.values(SLIDE_NOTES).forEach(sn => {
  (sn.realSlides || []).forEach(rs => {
    totalRealSlides++;
    const fname = path.basename(rs.image);
    assert(slideFiles.includes(fname), `Slide image file exists: ${rs.image}`, `Missing ${fname}`);
  });
});
assert(totalRealSlides >= 19, `SLIDE_NOTES references >= 19 real slides`, `Got ${totalRealSlides}`);

// 14. Verify RightSidebar has drag handle, half-screen toggle and iframe PDF player
const rightSidebarContent = fs.readFileSync('src/components/layout/RightSidebar.tsx', 'utf8');
assert(rightSidebarContent.includes('isDragging') && rightSidebarContent.includes('cursor-col-resize'), 'RightSidebar supports drag resizing');
assert(rightSidebarContent.includes('isHalfScreen') && rightSidebarContent.includes('50vw'), 'RightSidebar supports half-screen 50vw toggle');
assert(rightSidebarContent.includes('<iframe') && rightSidebarContent.includes('pdfUrl'), 'RightSidebar embeds full courseware PDF with iframe');

// 15. Verify 8 core courseware PDFs exist in public/courseware/
const coursewareFiles = fs.readdirSync('public/courseware');
const expectedCorePdfs = [
  'c2_1_1_interest_rate_1.pdf',
  'c2_1_2_interest_rate_2.pdf',
  'c2_2_1_derivatives_1.pdf',
  'c2_2_2_derivatives_2.pdf',
  'c2_3_var_es.pdf',
  'c3_2_default_risk.pdf',
  'c5_liquidity_risk.pdf',
  'c6_basel_regulation.pdf',
];
expectedCorePdfs.forEach(pdf => {
  assert(coursewareFiles.includes(pdf), `Core courseware PDF exists: ${pdf}`);
  const sz = fs.statSync(path.join('public/courseware', pdf)).size;
  assert(sz > 1024 * 1024, `Courseware PDF ${pdf} is valid size (>1MB)`, `${sz} bytes`);
});

// 16. Verify 5 Greek symbols formula compiles without newline and with Greek characters
const greekSummary = '\\Delta,\\ \\Gamma,\\ \\Theta,\\ \\mathcal{V},\\ \\rho';
const greekHtml = katex.renderToString(greekSummary, { displayMode: false, output: 'html' });
assert(!greekHtml.includes('newline'), 'Greek symbols render without newline');
assert(!greekHtml.includes('>Delta<'), 'Greek symbols do not output English text "Delta"');
assert(greekHtml.includes('Δ') && greekHtml.includes('Γ') && greekHtml.includes('Θ') && greekHtml.includes('ρ'), 'Greek symbols render true mathematical glyphs Δ, Γ, Θ, ρ');

// 17. Verify QuestionCanvas has memorized toggle
assert(questionCanvasContent.includes('onToggleMemorized'), 'QuestionCanvas supports onToggleMemorized');
assert(questionCanvasContent.includes('已背会'), 'QuestionCanvas has 已背会 button label');

// 18. [V3.3] Verify Formula Manual: >=30 formulas, no Ch1/Ch4 formulas, 5 exact categories
assert(FORMULA_DICT.length >= 30, `Formula manual has >= 30 formulas: Got ${FORMULA_DICT.length}`);
const validCategories = new Set(['利率久期凸度', '期权与希腊值', 'VaR市场风险', '信用风险', '流动性与资本']);
FORMULA_DICT.forEach((f, idx) => {
  assert(validCategories.has(f.category), `Formula [${f.name}] belongs to valid category`, `Got ${f.category}`);
  assert(!f.category.includes('第一章') && !f.category.includes('第四章'), `Formula [${f.name}] does not belong to Ch1 or Ch4`);
  assert(!f.name.includes('第四章') && !f.name.includes('操作风险'), `Formula [${f.name}] is not Ch4 operational risk`);
});

// 19. [V3.3] Verify Core Concepts have multi-paragraph line breaks (\n\n)
let totalConcepts = 0;
let multilineConcepts = 0;
CHAPTERS.forEach(c => {
  const note = SLIDE_NOTES[c.id];
  (note.coreConcepts || []).forEach((conceptStr, idx) => {
    totalConcepts++;
    if (conceptStr.includes('\n\n')) {
      multilineConcepts++;
    }
  });
});
assert(totalConcepts >= 30, `Total core concepts >= 30 across 8 chapters: Got ${totalConcepts}`);
assert(multilineConcepts === totalConcepts, `All ${totalConcepts} core concepts contain \\n\\n multi-paragraph breaks`, `Got ${multilineConcepts}/${totalConcepts}`);

// 20. [V3.3] Verify RightSidebar category filter pills and 5 Basel modules
assert(rightSidebarContent.includes('FORMULA_CATEGORIES'), 'RightSidebar defines FORMULA_CATEGORIES');
assert(rightSidebarContent.includes('filteredFormulas'), 'RightSidebar computes filteredFormulas');
assert(rightSidebarContent.includes('1. 巴塞尔三大支柱全貌穿透'), 'RightSidebar contains Basel Module 1');
assert(rightSidebarContent.includes('2. 四大资本充足率监管红线与缓冲金字塔'), 'RightSidebar contains Basel Module 2');
assert(rightSidebarContent.includes('3. 风险加权资产 (RWA) 计量谱系与真题权重表'), 'RightSidebar contains Basel Module 3');
assert(rightSidebarContent.includes('4. 流动性双指标与无风险加权杠杆率底线'), 'RightSidebar contains Basel Module 4');
assert(rightSidebarContent.includes('5. 期末真题高频扣减与合格资本陷阱速记'), 'RightSidebar contains Basel Module 5');

// 21. [V3.3] Verify Curated PDFs have valid bookmark page numbers within curated page count
CHAPTERS.forEach(c => {
  const note = SLIDE_NOTES[c.id];
  assert(note.totalPdfPages > 0 && note.totalPdfPages <= 35, `Chapter ${c.id} curated PDF page count is concise (<=35): Got ${note.totalPdfPages}`);
  assert((note.keyBookmarks || []).length >= 6, `Chapter ${c.id} has >= 6 key bookmarks: Got ${(note.keyBookmarks || []).length}`);
  (note.keyBookmarks || []).forEach(bm => {
    assert(bm.pageNumber >= 1 && bm.pageNumber <= note.totalPdfPages, `Bookmark [${bm.label}] page ${bm.pageNumber} is within total ${note.totalPdfPages}`);
  });
});

console.log(`\n================================`);
console.log(`Verification Complete: ${passedTests}/${totalTests} Passed!`);
console.log(`================================`);
if (passedTests === totalTests) {
  process.exit(0);
} else {
  process.exit(1);
}
