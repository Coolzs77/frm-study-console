const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const https = require('https');

const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const repoOwner = 'Coolzs77';
const repoName = 'frm-study-console';

console.log('🚀 [DEPLOY] Starting production build & deployment...');

// 1. Build Vite
console.log('📦 [1/4] Building Vite static bundle...');
execSync('node ./node_modules/vite/bin/vite.js build', { cwd: rootDir, stdio: 'inherit' });

// 2. Ensure .nojekyll
fs.writeFileSync(path.join(distDir, '.nojekyll'), '');
console.log('✓ [2/4] Created .nojekyll in dist/');

// 3. Deploy dist to gh-pages branch
console.log('📤 [3/4] Pushing dist/ to origin/gh-pages branch...');
try {
  const distGit = path.join(distDir, '.git');
  if (fs.existsSync(distGit)) {
    fs.rmSync(distGit, { recursive: true, force: true });
  }

  const remoteUrl = execSync('git config --get remote.origin.url', { cwd: rootDir }).toString().trim();
  console.log('[DEPLOY] Target remote:', remoteUrl);

  execSync('git init', { cwd: distDir, stdio: 'inherit' });
  execSync(`git remote add origin "${remoteUrl}"`, { cwd: distDir, stdio: 'inherit' });
  try {
    console.log('[DEPLOY] Fetching latest gh-pages branch header to avoid 200MB re-upload...');
    execSync('git fetch origin gh-pages --depth=1', { cwd: distDir, stdio: 'inherit' });
    execSync('git reset --soft FETCH_HEAD', { cwd: distDir, stdio: 'inherit' });
  } catch (fe) {
    console.log('[DEPLOY] Fresh branch creation fallback...');
    execSync('git checkout -b gh-pages', { cwd: distDir, stdio: 'inherit' });
  }
  execSync('git add -A', { cwd: distDir, stdio: 'inherit' });
  execSync('git commit -m "deploy: update production build on gh-pages"', { cwd: distDir, stdio: 'inherit' });
  execSync('git push origin HEAD:gh-pages', { cwd: distDir, stdio: 'inherit' });
  console.log('✓ [3/4] Successfully pushed to origin/gh-pages!');
} catch (e) {
  console.error('❌ Error pushing to gh-pages:', e.message);
  process.exit(1);
} finally {
  try {
    const distGit = path.join(distDir, '.git');
    if (fs.existsSync(distGit)) {
      fs.rmSync(distGit, { recursive: true, force: true });
    }
  } catch (e) {}
}

console.log(`\n🎉 [DEPLOY SUCCESS] Deployed to GitHub Pages!`);
console.log(`🌐 Live Site URL: https://${repoOwner.toLowerCase()}.github.io/${repoName}/`);
