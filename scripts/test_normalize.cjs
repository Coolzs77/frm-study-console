function normalizeMathContent(text) {
  if (!text) return '';
  
  // 1. 如果行内公式 $...$ 内部包裹了 **[color:...]** 或普通 **...**
  // 例如：$\frac{\Delta P}{P} \approx **[rose:-D^* \Delta y]** + **[emerald:\frac{1}{2} C (\Delta y)^2]**$
  // 将其解构成：$\frac{\Delta P}{P} \approx$ **[rose:$-D^* \Delta y$]** $+$ **[emerald:$\frac{1}{2} C (\Delta y)^2$]**
  let result = text.replace(/\$([^\$]+?)\$/g, (match, inner) => {
    if (!inner.includes('**')) return match;

    // 内部包含 **，使用正则拆分
    const subParts = inner.split(/(\*\*\[[a-z]+:[\s\S]+?\]\*\*|\*\*[\s\S]+?\*\*)/g);
    return subParts.map(part => {
      if (!part) return '';
      // 彩色加粗：**[color:math]**
      const colorMatch = part.match(/^\*\*\[([a-z]+):([\s\S]+?)\]\*\*$/);
      if (colorMatch) {
        const color = colorMatch[1];
        const innerMath = colorMatch[2].trim();
        // 如果 innerMath 已经有 $，保持；否则给 innerMath 包上 $ 保证由 KaTeX 渲染
        const safeMath = innerMath.startsWith('$') && innerMath.endsWith('$') ? innerMath : `$${innerMath}$`;
        return ` **[${color}:${safeMath}]** `;
      }
      // 普通加粗：**math**
      const boldMatch = part.match(/^\*\*([\s\S]+?)\*\*$/);
      if (boldMatch) {
        const innerMath = boldMatch[1].trim();
        const safeMath = innerMath.startsWith('$') && innerMath.endsWith('$') ? innerMath : `$${innerMath}$`;
        return ` **${safeMath}** `;
      }
      // 剩余的 LaTeX 公式片段
      const trimmed = part.trim();
      return trimmed ? `$${trimmed}$` : '';
    }).join(' ');
  });

  return result;
}

const input1 = "核心公式：$\\frac{\\Delta P}{P} \\approx **[rose:-D^* \\Delta y]** + **[emerald:\\frac{1}{2} C (\\Delta y)^2]**$。";
const input2 = "$\\frac{\\Delta P}{P} \\approx -4.76 \\times 0.02 + 0.5 \\times 28.5 \\times (0.02)^2 = **[rose:-0.0895]**$（即**[rose:下跌 8.95%]**）。";

console.log('Normalized 1:');
console.log(normalizeMathContent(input1));
console.log('\nNormalized 2:');
console.log(normalizeMathContent(input2));
