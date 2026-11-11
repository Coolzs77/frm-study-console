const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, '../src/data/quizData.ts');
const content = fs.readFileSync(quizDataPath, 'utf8');

let failed = false;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ ASSERTION FAILED: ${message}`);
    failed = true;
  } else {
    console.log(`✅ PASS: ${message}`);
  }
}

console.log('================ 1. 公式与 Markdown 语法碰撞检测 ================');
// 1. 单行内数学公式 $...$ 内部不得包含 **
const singleLineMathRegex = /\$([^$\n\r]+?)\$/g;
let mathCollisions = 0;
let m;
while ((m = singleLineMathRegex.exec(content)) !== null) {
  if (m[1].includes('**')) {
    mathCollisions++;
    console.error('Collision detail:', m[0]);
  }
}
assert(mathCollisions === 0, `单行公式内部包裹 ** 的数量必须为 0（实际: ${mathCollisions}）`);

// 2. 检查概念卡片标题中的 【**...**】 遗留
const titleMatch = content.match(/【\*\*(.*?)\*\*】/g);
assert(!titleMatch || titleMatch.length === 0, `卡片标题中不得残留 【**...**】（实际: ${titleMatch ? titleMatch.length : 0}）`);

console.log('\n================ 2. 试题解析质量与模板废话检测 ================');
assert(!content.includes('请查阅右侧课件'), '不得包含 "请查阅右侧课件" 模板文本');
assert(!content.includes('本题出自'), '不得包含 "本题出自" 模板套话');

console.log('\n================ 3. 判断题正误结论与官方标答一致性校验 ================');
const judgments = [
  { id: 'q_2_1_5_6', num: 12, expected: '正确', official: '对' },
  { id: 'q_2_1_5_7', num: 13, expected: '正确', official: '对' },
  { id: 'q_2_1_5_8', num: 14, expected: '错误', official: '错' },
  { id: 'q_2_2_5_8', num: 28, expected: '正确', official: '对' },
  { id: 'q_2_2_5_9', num: 29, expected: '错误', official: '错' },
  { id: 'q_2_2_5_10', num: 30, expected: '正确', official: '对' },
  { id: 'q_2_2_5_11', num: 31, expected: '正确', official: '对' },
  { id: 'q_2_2_5_12', num: 32, expected: '错误', official: '错' },
];

judgments.forEach(j => {
  const reg = new RegExp(`"id":\\s*"${j.id}"[\\s\\S]*?"analysis":\\s*"([\\s\\S]*?)"`);
  const match = content.match(reg);
  assert(match !== null, `能够检索到试题 ${j.id} 的解析`);
  if (match) {
    const analysisText = match[1];
    const hasExpected = analysisText.includes(`判断：**${j.expected}**`);
    assert(hasExpected, `Q${j.num} (${j.id}) 解析首句结论必须判定为【${j.expected}】（标答: ${j.official}）`);
  }
});

console.log('\n================ 4. 选择题选项级穿透解析校验 ================');
const choices = ['q_2_1_5_1', 'q_2_1_5_2', 'q_2_2_5_1', 'q_2_2_5_2', 'q_2_2_5_3', 'q_2_2_5_4'];
choices.forEach(id => {
  const reg = new RegExp(`"id":\\s*"${id}"[\\s\\S]*?"analysis":\\s*"([\\s\\S]*?)"`);
  const match = content.match(reg);
  assert(match !== null, `能够检索到选择题 ${id} 的解析`);
  if (match) {
    const text = match[1];
    const hasOptionA = text.includes('• A项');
    const hasOptionB = text.includes('• B项');
    assert(hasOptionA && hasOptionB, `选择题 ${id} 必须包含逐项选项解析（• A项... • B项...）`);
  }
});

console.log('\n================ 5. 多端同步去开发黑话校验 ================');
const syncModalPath = path.join(__dirname, '../src/components/sync/SyncModal.tsx');
const syncModalContent = fs.readFileSync(syncModalPath, 'utf8');

assert(!syncModalContent.toLowerCase().includes('gist'), 'SyncModal 不得包含任何 "gist" 术语');
assert(!syncModalContent.toLowerCase().includes('token'), 'SyncModal 不得包含任何 "token" 术语');
assert(!syncModalContent.includes('口令'), 'SyncModal 不得引导生成 Base64 口令');
assert(syncModalContent.includes('自定义备考账号'), 'SyncModal 必须包含 "自定义备考账号"');
assert(syncModalContent.includes('手机扫码直达'), 'SyncModal 必须包含 "手机扫码直达"');

if (failed) {
  console.error('\n❌ 存在校验失败项，请修复后重新运行！');
  process.exit(1);
} else {
  console.log('\n🎉 所有自动化断言 100% 全部通过！');
}
