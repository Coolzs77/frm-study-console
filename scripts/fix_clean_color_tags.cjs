const fs = require('fs');
const path = require('path');

const quizDataPath = path.join(__dirname, '../src/data/quizData.ts');
let content = fs.readFileSync(quizDataPath, 'utf8');

console.log('Original length:', content.length);

// 1. 修复像 `$  **[color:$文本$]**  $` 这种荒谬的错误结构
// 将其彻底清洗为标准的 `**[color:文本]**`
content = content.replace(/\$\s*\*\*\[([a-z]+):\s*\$([^\$]+?)\$\s*\]\*\*\s*\$/g, (m, color, text) => {
  return `**[${color}:${text.trim()}]**`;
});

// 2. 修复形如 `$  **[color:文本]**  $` (外层带 $)
content = content.replace(/\$\s*\*\*\[([a-z]+):([\s\S]+?)\]\*\*\s*\$/g, (m, color, text) => {
  return `**[${color}:${text.trim()}]**`;
});

// 3. 修复形如 `**[color:$文本$]**` （内部纯中文却带 $）
content = content.replace(/\*\*\[([a-z]+):\s*\$([^\$]+?)\$\s*\]\*\*/g, (m, color, inner) => {
  // 检查 inner 是否包含 LaTeX 反斜杠或数学运算
  if (inner.includes('\\') || inner.includes('=') || inner.includes('^') || inner.includes('_') || inner.includes('+') || inner.includes('-')) {
    // 包含数学公式，保留内部 $
    return `**[${color}:$${inner.trim()}$]**`;
  }
  // 纯文本/中文，去除内部 $
  return `**[${color}:${inner.trim()}]**`;
});

// 4. 修复形如 `$**  $[blue:综合在险价值指标]$  **$`
content = content.replace(/\$\s*\*\*\s*\$\s*\[([a-z]+):([\s\S]+?)\]\s*\$\s*\*\*\s*\$/g, '**[$1:$2]**');

// 5. 修复形如 `$**  $` 或 `$  **$` 残留
content = content.replace(/\$\s*\*\*\s*\$/g, '');
content = content.replace(/\*\*\s*\$\s*\*\*/g, '');

// 6. 修复类似 `\Delta **[emerald:` 或 `V_L **[emerald:`
// 例如：现货自身的 $\Delta$ **[emerald:严格等于 1]**。
content = content.replace(/\$([a-zA-Z\\]+)\s+\*\*\[([a-z]+):/g, '$$$1$$ **[$2:');

fs.writeFileSync(quizDataPath, content, 'utf8');
console.log('Finished fix_clean_color_tags!');
