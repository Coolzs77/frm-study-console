import React from 'react';
import katex from 'katex';

interface MathTextProps {
  content: string;
  className?: string;
  inline?: boolean;
  strongClassName?: string;
}

// 预处理防御规整：若在 $...$ 行内公式内部误包裹了 **[color:...]** 或普通 **...**
// 自动将其拆解并提取到公式环境外部，杜绝 KaTeX 将星号和中括号识别为数学乘号与斜体变量导致原始标记泄露
const preNormalizeContent = (raw: string): string => {
  if (!raw) return '';
  return raw.replace(/\$([^\$]+?)\$/g, (match, inner) => {
    if (!inner.includes('**')) return match;

    const subParts = inner.split(/(\*\*\[[a-z]+:[\s\S]+?\]\*\*|\*\*[\s\S]+?\*\*)/g);
    return subParts.map(part => {
      if (!part) return '';
      const colorMatch = part.match(/^\*\*\[([a-z]+):([\s\S]+?)\]\*\*$/);
      if (colorMatch) {
        const color = colorMatch[1];
        const innerMath = colorMatch[2].trim();
        const safeMath = innerMath.startsWith('$') && innerMath.endsWith('$') ? innerMath : `$${innerMath}$`;
        return ` **[${color}:${safeMath}]** `;
      }
      const boldMatch = part.match(/^\*\*([\s\S]+?)\*\*$/);
      if (boldMatch) {
        const innerMath = boldMatch[1].trim();
        const safeMath = innerMath.startsWith('$') && innerMath.endsWith('$') ? innerMath : `$${innerMath}$`;
        return ` **${safeMath}** `;
      }
      const trimmed = part.trim();
      return trimmed ? `$${trimmed}$` : '';
    }).join(' ');
  });
};

export const MathText: React.FC<MathTextProps> = ({ 
  content, 
  className = '', 
  inline = false,
  strongClassName = 'font-bold text-blue-600 dark:text-blue-400'
}) => {
  if (!content) return null;

  const normalized = preNormalizeContent(content);

  // 正则按优先级切分：
  // 1. $$...$$ 块级公式
  // 2. **...** 加粗 Markdown（内部可嵌套 [color:text] 与 $...$ 公式）
  // 3. $...$ 行内公式
  const regex = /(\$\$[\s\S]*?\$\$|\*\*[\s\S]+?\*\*|\$[^\$]+?\$)/g;
  const parts = normalized.split(regex);

  const renderInlineMath = (tex: string, key: React.Key) => {
    try {
      const html = katex.renderToString(tex, {
        displayMode: false,
        throwOnError: false,
        output: 'html',
      });
      return (
        <span
          key={key}
          className="inline-block mx-0.5"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    } catch {
      return <code key={key} className="text-red-500">${tex}$</code>;
    }
  };

  const renderDisplayMath = (tex: string, key: React.Key) => {
    try {
      const html = katex.renderToString(tex, {
        displayMode: true,
        throwOnError: false,
        output: 'html',
      });
      return (
        <span
          key={key}
          className="block my-2 overflow-x-auto text-center"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    } catch {
      return <code key={key} className="text-red-500">$${tex}$$</code>;
    }
  };

  return (
    <span className={`inline-math-container leading-relaxed whitespace-pre-line ${className}`}>
      {parts.filter(Boolean).map((part, index) => {
        // 1. 块级公式
        if (part.startsWith('$$') && part.endsWith('$$') && part.length >= 4) {
          return renderDisplayMath(part.slice(2, -2).trim(), index);
        }

        // 2. Markdown **加粗**（内部支持 [color:text] 多色语义高亮及数学公式递归）
        if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
          const inner = part.slice(2, -2);
          const colorMatch = inner.match(/^\[(blue|green|emerald|purple|violet|amber|orange|rose|red):([\s\S]+)\]$/);
          
          let colorClass = strongClassName;
          let text = inner;

          if (colorMatch) {
            const c = colorMatch[1];
            text = colorMatch[2];
            switch (c) {
              case 'blue':
                colorClass = 'font-bold text-blue-600 dark:text-blue-400';
                break;
              case 'green':
              case 'emerald':
                colorClass = 'font-bold text-emerald-600 dark:text-emerald-400';
                break;
              case 'purple':
              case 'violet':
                colorClass = 'font-bold text-purple-600 dark:text-purple-400';
                break;
              case 'amber':
              case 'orange':
                colorClass = 'font-bold text-amber-600 dark:text-amber-400';
                break;
              case 'rose':
              case 'red':
                colorClass = 'font-bold text-rose-600 dark:text-rose-400';
                break;
            }
          }

          const innerTokens = text.split(/(\$[^\$]+?\$)/g).filter(Boolean);
          return (
            <strong key={index} className={colorClass}>
              {innerTokens.map((tok, tIdx) => {
                if (tok.startsWith('$') && tok.endsWith('$') && tok.length >= 2) {
                  return renderInlineMath(tok.slice(1, -1).trim(), `${index}-${tIdx}`);
                }
                return tok;
              })}
            </strong>
          );
        }

        // 3. 行内公式
        if (part.startsWith('$') && part.endsWith('$') && part.length >= 2) {
          return renderInlineMath(part.slice(1, -1).trim(), index);
        }

        // 4. 普通文本
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
};
