const fs = require('fs');
const katex = require('katex');
const esbuild = require('esbuild');

const tsCode = fs.readFileSync('src/data/quizData.ts', 'utf8');
const transpiled = esbuild.transformSync(tsCode, { loader: 'ts', format: 'cjs' }).code;
const mod = { exports: {} };
new Function('module', 'exports', transpiled)(mod, mod.exports);
const { FORMULA_DICT } = mod.exports;

console.log('Testing FORMULA_DICT length:', FORMULA_DICT.length);

let errors = [];
FORMULA_DICT.forEach((f, i) => {
  try {
    katex.renderToString(f.tex, { displayMode: true, throwOnError: true });
  } catch (e) {
    errors.push({ idx: i, field: 'tex', name: f.name, err: e.message });
  }
  if (f.desc) {
    const parts = f.desc.split(/(\$\$[\s\S]*?\$\$|\$[^\$]+?\$)/g);
    parts.forEach(p => {
      if (p.startsWith('$') && p.endsWith('$')) {
        try {
          katex.renderToString(p.slice(1, -1), { displayMode: false, throwOnError: true });
        } catch (e) {
          errors.push({ idx: i, field: 'desc', name: f.name, part: p, err: e.message });
        }
      }
    });
  }
  if (f.usage) {
    const parts = f.usage.split(/(\$\$[\s\S]*?\$\$|\$[^\$]+?\$)/g);
    parts.forEach(p => {
      if (p.startsWith('$') && p.endsWith('$')) {
        try {
          katex.renderToString(p.slice(1, -1), { displayMode: false, throwOnError: true });
        } catch (e) {
          errors.push({ idx: i, field: 'usage', name: f.name, part: p, err: e.message });
        }
      }
    });
  }
});

console.log('Errors found in KaTeX:', errors);
