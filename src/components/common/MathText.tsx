import React from 'react';
import katex from 'katex';

interface MathTextProps {
  content: string;
  className?: string;
  inline?: boolean;
}

export const MathText: React.FC<MathTextProps> = ({ content, className = '', inline = false }) => {
  if (!content) return null;

  // 增强数学公式正则匹配：$$...$$ 块级 或 $...$ 行内公式
  const parts = content.split(/(\$\$[\s\S]*?\$\$|\$[^\$]+?\$)/g);

  return (
    <span className={`inline-math-container leading-relaxed ${className}`}>
      {parts.map((part, index) => {
        if (!part) return null;

        if (part.startsWith('$$') && part.endsWith('$$') && part.length >= 4) {
          const formula = part.slice(2, -2).trim();
          try {
            const html = katex.renderToString(formula, {
              displayMode: true,
              throwOnError: false,
              output: 'htmlAndMathml',
            });
            return (
              <span
                key={index}
                className="block my-2 overflow-x-auto text-center"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch (e) {
            return <code key={index} className="text-red-500">{part}</code>;
          }
        }

        if (part.startsWith('$') && part.endsWith('$') && part.length >= 2) {
          const formula = part.slice(1, -1).trim();
          try {
            const html = katex.renderToString(formula, {
              displayMode: false,
              throwOnError: false,
              output: 'htmlAndMathml',
            });
            return (
              <span
                key={index}
                className="inline-block mx-0.5"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            );
          } catch (e) {
            return <code key={index} className="text-red-500">{part}</code>;
          }
        }

        // 普通文本分段，支持 Markdown **重点文字** 原生加粗
        const subSegments = part.split(/(\*\*[^*]+?\*\*)/g);
        return (
          <span key={index}>
            {subSegments.map((sub, sIdx) => {
              if (sub.startsWith('**') && sub.endsWith('**') && sub.length >= 4) {
                return (
                  <strong key={sIdx} className="font-bold text-slate-900 dark:text-slate-100">
                    {sub.slice(2, -2)}
                  </strong>
                );
              }
              return sub;
            })}
          </span>
        );
      })}
    </span>
  );
};
