import React from 'react';
import katex from 'katex';

interface MathTextProps {
  content: string;
  className?: string;
  inline?: boolean;
  strongClassName?: string;
}

export const MathText: React.FC<MathTextProps> = ({ 
  content, 
  className = '', 
  inline = false,
  strongClassName = 'font-bold text-blue-700 dark:text-blue-300'
}) => {
  if (!content) return null;

  // 正则按优先级切分：
  // 1. $$...$$ 块级公式
  // 2. **...** 加粗 Markdown（内部可嵌套 $...$ 公式）
  // 3. $...$ 行内公式
  const regex = /(\$\$[\s\S]*?\$\$|\*\*[\s\S]+?\*\*|\$[^\$]+?\$)/g;
  const parts = content.split(regex);

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

        // 2. Markdown **加粗**（内部递归支持行内数学公式）
        if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
          const inner = part.slice(2, -2);
          const innerTokens = inner.split(/(\$[^\$]+?\$)/g).filter(Boolean);
          return (
            <strong key={index} className={strongClassName}>
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
