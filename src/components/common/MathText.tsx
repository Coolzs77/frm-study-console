import React from 'react';
import katex from 'katex';

interface MathTextProps {
  content: string;
  className?: string;
  inline?: boolean;
  strongClassName?: string;
}

type Alignment = 'left' | 'center' | 'right';

interface ParsedTable {
  headers: string[];
  alignments: Alignment[];
  rows: string[][];
}

type ContentBlock =
  | { type: 'text'; content: string }
  | { type: 'table'; table: ParsedTable }
  | { type: 'divider' };

const TABLE_DIVIDER_RE = /^\|(?:\s*:?-{2,}:?\s*\|)+$/;

const splitTableCells = (line: string): string[] => {
  const trimmed = line.trim().replace(/^\|/, '').replace(/\|$/, '');
  return trimmed.split('|').map((cell) => cell.trim());
};

const parseAlignment = (spec: string): Alignment => {
  const s = spec.trim();
  if (s.startsWith(':') && s.endsWith(':')) return 'center';
  if (s.endsWith(':')) return 'right';
  return 'left';
};

// 解析连续 Markdown 管道表格块（要求至少包含表头行 + 对齐分隔行 + 1 行数据）
export const parseMarkdownTable = (lines: string[]): ParsedTable | null => {
  if (lines.length < 2) return null;
  if (!lines[0].trim().startsWith('|') || !TABLE_DIVIDER_RE.test(lines[1].trim())) {
    return null;
  }
  const headers = splitTableCells(lines[0]);
  const alignments = splitTableCells(lines[1]).map(parseAlignment);
  const rows = lines.slice(2).map(splitTableCells);
  return { headers, alignments, rows };
};

const splitContentBlocks = (raw: string): ContentBlock[] => {
  const lines = raw.split('\n');
  const blocks: ContentBlock[] = [];
  let textBuf: string[] = [];

  const flushText = () => {
    if (textBuf.length === 0) return;
    const joined = textBuf.join('\n').replace(/^\n+|\n+$/g, '');
    if (joined) {
      blocks.push({ type: 'text', content: joined });
    }
    textBuf = [];
  };

  let i = 0;
  while (i < lines.length) {
    const trimmed = lines[i].trim();

    if (trimmed === '---') {
      flushText();
      blocks.push({ type: 'divider' });
      i += 1;
      continue;
    }

    if (
      i + 1 < lines.length &&
      trimmed.startsWith('|') &&
      trimmed.endsWith('|') &&
      TABLE_DIVIDER_RE.test(lines[i + 1].trim())
    ) {
      let end = i + 2;
      while (end < lines.length && lines[end].trim().startsWith('|') && lines[end].trim().endsWith('|')) {
        end += 1;
      }
      const table = parseMarkdownTable(lines.slice(i, end));
      if (table) {
        flushText();
        blocks.push({ type: 'table', table });
        i = end;
        continue;
      }
    }

    textBuf.push(lines[i]);
    i += 1;
  }

  flushText();
  return blocks;
};

// 预处理防御规整：若在 $...$ 行内公式内部误包裹了 **[color:...]** 或普通 **...**
// 自动将其拆解并提取到公式环境外部，杜绝 KaTeX 将星号和中括号识别为数学乘号与斜体变量导致原始标记泄露
const preNormalizeContent = (raw: string): string => {
  if (!raw) return '';
  return raw.replace(/\$([^\$]+?)\$/g, (match, inner) => {
    if (!inner.includes('**')) return match;

    const subParts = inner.split(/(\*\*\[[a-z]+:[\s\S]+?\]\*\*|\*\*[\s\S]+?\*\*)/g);
    return subParts.map((part: string) => {
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

  const resolveStrongClass = (colorTag: string): string => {
    switch (colorTag) {
      case 'blue':
        return 'font-bold text-blue-600 dark:text-blue-400';
      case 'green':
      case 'emerald':
        return 'font-bold text-emerald-600 dark:text-emerald-400';
      case 'purple':
      case 'violet':
        return 'font-bold text-purple-600 dark:text-purple-400';
      case 'amber':
      case 'orange':
        return 'font-bold text-amber-600 dark:text-amber-400';
      case 'rose':
      case 'red':
        return 'font-bold text-rose-600 dark:text-rose-400';
      default:
        return strongClassName;
    }
  };

  const renderInlineTokens = (raw: string, keyPrefix: string) => {
    const normalized = preNormalizeContent(raw);
    const regex = /(\$\$[\s\S]*?\$\$|\*\*[\s\S]+?\*\*|\$[^\$]+?\$)/g;
    const parts = normalized.split(regex);

    return parts.filter(Boolean).map((part, index) => {
      const key = `${keyPrefix}-${index}`;

      if (part.startsWith('$$') && part.endsWith('$$') && part.length >= 4) {
        return renderDisplayMath(part.slice(2, -2).trim(), key);
      }

      if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
        const inner = part.slice(2, -2);
        const colorMatch = inner.match(/^\[(blue|green|emerald|purple|violet|amber|orange|rose|red):([\s\S]+)\]$/);
        const colorClass = colorMatch ? resolveStrongClass(colorMatch[1]) : strongClassName;
        const text = colorMatch ? colorMatch[2] : inner;

        const innerTokens = text.split(/(\$[^\$]+?\$)/g).filter(Boolean);
        return (
          <strong key={key} className={colorClass}>
            {innerTokens.map((tok, tIdx) => {
              if (tok.startsWith('$') && tok.endsWith('$') && tok.length >= 2) {
                return renderInlineMath(tok.slice(1, -1).trim(), `${key}-${tIdx}`);
              }
              return tok;
            })}
          </strong>
        );
      }

      if (part.startsWith('$') && part.endsWith('$') && part.length >= 2) {
        return renderInlineMath(part.slice(1, -1).trim(), key);
      }

      return <span key={key}>{part}</span>;
    });
  };

  const blocks = !inline ? splitContentBlocks(content) : null;
  const hasRichBlocks = blocks ? blocks.some((b) => b.type !== 'text') : false;

  if (!hasRichBlocks) {
    return (
      <span className={`inline-math-container leading-relaxed whitespace-pre-line ${className}`}>
        {renderInlineTokens(content, 'seg')}
      </span>
    );
  }

  const alignClass = (align?: Alignment) => {
    if (align === 'center') return 'text-center';
    if (align === 'right') return 'text-right';
    return 'text-left';
  };

  return (
    <div className={`space-y-3 leading-relaxed ${className}`}>
      {blocks!.map((block, bIdx) => {
        if (block.type === 'divider') {
          return <hr key={`div-${bIdx}`} className="my-3 border-slate-200/80 dark:border-slate-700/80" />;
        }
        if (block.type === 'table') {
          const { headers, alignments, rows } = block.table;
          return (
            <div key={`tbl-${bIdx}`} className="my-2 overflow-x-auto">
              <table className="w-full max-w-xl border-collapse rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 text-xs sm:text-sm bg-white dark:bg-[#101622]">
                <thead>
                  <tr className="bg-slate-100/90 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200">
                    {headers.map((h, hIdx) => (
                      <th
                        key={hIdx}
                        className={`px-3.5 py-2 font-bold border-b border-slate-200 dark:border-slate-700 ${alignClass(alignments[hIdx])}`}
                      >
                        {renderInlineTokens(h, `th-${bIdx}-${hIdx}`)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className="border-t border-slate-100 dark:border-slate-800 even:bg-slate-50/50 dark:even:bg-slate-800/30"
                    >
                      {row.map((cell, cIdx) => (
                        <td
                          key={cIdx}
                          className={`px-3.5 py-2 text-slate-700 dark:text-slate-300 ${alignClass(alignments[cIdx])}`}
                        >
                          {renderInlineTokens(cell, `td-${bIdx}-${rIdx}-${cIdx}`)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return (
          <div key={`txt-${bIdx}`} className="inline-math-container whitespace-pre-line">
            {renderInlineTokens(block.content, `blk-${bIdx}`)}
          </div>
        );
      })}
    </div>
  );
};
