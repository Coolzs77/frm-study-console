const fs = require('fs');
const esbuild = require('esbuild');
const child_process = require('child_process');

const prevTs = child_process.execSync('git show HEAD:src/data/quizData.ts', { encoding: 'utf8' });
const transpiled = esbuild.transformSync(prevTs, { loader: 'ts', format: 'cjs' }).code;
const mod = { exports: {} };
new Function('module', 'exports', transpiled)(mod, mod.exports);

const prevNotes = mod.exports.SLIDE_NOTES;
const result = {};

for (const [ch, note] of Object.entries(prevNotes)) {
  result[ch] = {
    realSlides: note.realSlides || [],
    keyPages: note.keyPages || []
  };
  console.log(`Chapter ${ch}: realSlides=${result[ch].realSlides.length}, keyPages=${result[ch].keyPages.length}`);
}

fs.writeFileSync('scripts/prev_slides_and_pages.json', JSON.stringify(result, null, 2), 'utf8');
console.log('Saved scripts/prev_slides_and_pages.json');
