const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

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

// 3. Deploy dist/ to origin/gh-pages using parent repo object cache (avoids 200MB cold re-clone)
console.log('📤 [3/4] Pushing dist/ to origin/gh-pages branch...');
const tempIndex = path.join(rootDir, '.git', 'gh-pages-deploy.index');
const distGit = path.join(distDir, '.git');
try {
  if (fs.existsSync(distGit)) {
    fs.rmSync(distGit, { recursive: true, force: true });
  }
  if (fs.existsSync(tempIndex)) {
    fs.rmSync(tempIndex, { force: true });
  }

  let hasRemoteBranch = false;
  try {
    execSync('git fetch origin +gh-pages:refs/remotes/origin/gh-pages --depth=1', { cwd: rootDir, stdio: 'inherit' });
    hasRemoteBranch = true;
  } catch (fe) {
    console.log('[DEPLOY] Remote gh-pages not found, creating initial orphan commit...');
  }

  const gitEnv = { ...process.env, GIT_INDEX_FILE: tempIndex };
  execSync(`git --git-dir="${path.join(rootDir, '.git')}" --work-tree="${distDir}" add -A`, {
    cwd: rootDir,
    env: gitEnv,
    stdio: 'inherit',
  });
  const treeSha = execSync(`git --git-dir="${path.join(rootDir, '.git')}" write-tree`, {
    cwd: rootDir,
    env: gitEnv,
  }).toString().trim();

  const parentArg = hasRemoteBranch ? '-p refs/remotes/origin/gh-pages' : '';
  const commitSha = execSync(
    `git --git-dir="${path.join(rootDir, '.git')}" commit-tree ${treeSha} ${parentArg} -m "deploy: update production build on gh-pages"`,
    { cwd: rootDir, env: gitEnv }
  ).toString().trim();

  execSync(`git push origin ${commitSha}:refs/heads/gh-pages`, { cwd: rootDir, stdio: 'inherit' });
  console.log('✓ [3/4] Successfully pushed to origin/gh-pages!');
} catch (e) {
  console.error('❌ Error pushing to gh-pages:', e.message);
  process.exit(1);
} finally {
  if (fs.existsSync(tempIndex)) {
    fs.rmSync(tempIndex, { force: true });
  }
}

console.log(`\n🎉 [DEPLOY SUCCESS] Deployed to GitHub Pages!`);
console.log(`🌐 Live Site URL: https://${repoOwner.toLowerCase()}.github.io/${repoName}/`);
