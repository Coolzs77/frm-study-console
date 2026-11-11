import React, { useState } from 'react';
import { BookOpen, FunctionSquare, ShieldAlert, Check, Copy } from 'lucide-react';
import { SlideNote, FormulaItem } from '../../types';
import { MathText } from '../common/MathText';

interface RightSidebarProps {
  currentChapterId: string;
  slideNotes: Record<string, SlideNote>;
  formulaDict: FormulaItem[];
}

export const RightSidebar: React.FC<RightSidebarProps> = ({
  currentChapterId,
  slideNotes,
  formulaDict,
}) => {
  const [activeTab, setActiveTab] = useState<'slide' | 'formula' | 'basel'>('slide');
  const [copiedTex, setCopiedTex] = useState<string | null>(null);

  const currentNote = slideNotes[currentChapterId] || slideNotes['2.1.4'];

  const handleCopy = (tex: string) => {
    navigator.clipboard.writeText(tex);
    setCopiedTex(tex);
    setTimeout(() => setCopiedTex(null), 2000);
  };

  return (
    <aside className="w-80 bg-white dark:bg-[#151b26] border-l border-slate-200/80 dark:border-slate-800/80 p-4 flex flex-col gap-4 clay-card-shadow transition-all duration-300 flex-shrink-0 overflow-y-auto max-h-[calc(100vh-4.5rem)] hidden xl:flex">
      {/* Tab Switcher */}
      <div className="flex rounded-2xl bg-slate-100 dark:bg-[#0e131d] p-1 clay-inset-groove">
        <button
          onClick={() => setActiveTab('slide')}
          className={`flex-1 py-1.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
            activeTab === 'slide'
              ? 'bg-white dark:bg-[#1f283b] text-blue-600 dark:text-blue-400 clay-button-shadow'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>课件精讲</span>
        </button>
        <button
          onClick={() => setActiveTab('formula')}
          className={`flex-1 py-1.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
            activeTab === 'formula'
              ? 'bg-white dark:bg-[#1f283b] text-blue-600 dark:text-blue-400 clay-button-shadow'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          <FunctionSquare className="w-3.5 h-3.5" />
          <span>公式手册</span>
        </button>
        <button
          onClick={() => setActiveTab('basel')}
          className={`flex-1 py-1.5 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
            activeTab === 'basel'
              ? 'bg-white dark:bg-[#1f283b] text-blue-600 dark:text-blue-400 clay-button-shadow'
              : 'text-slate-500 hover:text-slate-700'
          }`}
        >
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>巴塞尔</span>
        </button>
      </div>

      {/* Tab 1: Slide Synergy */}
      {activeTab === 'slide' && (
        <div className="flex flex-col gap-4 animate-fade-in text-xs">
          <div className="p-3 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/50">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              陈妍老师课件联动
            </span>
            <h3 className="font-bold text-slate-800 dark:text-slate-100 text-sm mt-0.5">
              {currentNote?.title || '课件精选考点'}
            </h3>
          </div>

          {/* Core Concepts */}
          <div className="flex flex-col gap-2">
            <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
              <span>💡</span> 核心概念解析
            </span>
            <div className="flex flex-col gap-2">
              {currentNote?.coreConcepts.map((c, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#1c2333] border border-slate-200/60 dark:border-slate-800/60 leading-relaxed text-slate-600 dark:text-slate-300"
                >
                  <MathText content={c} />
                </div>
              ))}
            </div>
          </div>

          {/* Formulas */}
          {currentNote?.formulas && currentNote.formulas.length > 0 && (
            <div className="flex flex-col gap-2">
              <span className="font-bold text-slate-700 dark:text-slate-300 flex items-center gap-1">
                <span>📐</span> 章节计算公式
              </span>
              <div className="flex flex-col gap-2">
                {currentNote.formulas.map((f, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#1c2333] border border-slate-200/60 dark:border-slate-800/60"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-slate-800 dark:text-slate-200">{f.name}</span>
                      <button
                        onClick={() => handleCopy(f.tex)}
                        className="text-slate-400 hover:text-blue-600"
                        title="复制 LaTeX"
                      >
                        {copiedTex === f.tex ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                    <div className="bg-white dark:bg-[#151b26] p-2 rounded-lg my-1 text-center border border-slate-100 dark:border-slate-800">
                      <MathText content={`$$${f.tex}$$`} />
                    </div>
                    {f.desc && <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">{f.desc}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pitfalls */}
          {currentNote?.pitfalls && currentNote.pitfalls.length > 0 && (
            <div className="flex flex-col gap-2">
              <span className="font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1">
                <span>⚠️</span> 考试高频避坑点
              </span>
              <div className="flex flex-col gap-1.5">
                {currentNote.pitfalls.map((p, i) => (
                  <div
                    key={i}
                    className="p-2 rounded-xl bg-rose-50/60 dark:bg-rose-950/20 border border-rose-200/60 dark:border-rose-900/40 text-rose-800 dark:text-rose-300 text-[11px] leading-relaxed"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Formula Dictionary */}
      {activeTab === 'formula' && (
        <div className="flex flex-col gap-3 animate-fade-in text-xs">
          <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800/60 text-slate-500 dark:text-slate-400 text-[11px]">
            汇集《金融风险管理》全课程 15 大核心计算公式与标准 LaTeX 形式。
          </div>
          <div className="flex flex-col gap-2.5">
            {formulaDict.map((f, i) => (
              <div
                key={i}
                className="p-3 rounded-2xl bg-slate-50 dark:bg-[#1c2333] border border-slate-200/70 dark:border-slate-800/70 clay-card-shadow"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="font-bold text-slate-800 dark:text-slate-100 text-xs">{f.name}</span>
                  <button
                    onClick={() => handleCopy(f.tex)}
                    className="text-slate-400 hover:text-blue-600"
                    title="复制 LaTeX"
                  >
                    {copiedTex === f.tex ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <div className="bg-white dark:bg-[#151b26] p-2 rounded-xl my-1.5 text-center border border-slate-100 dark:border-slate-850">
                  <MathText content={`$$${f.tex}$$`} />
                </div>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Basel Regulations Table */}
      {activeTab === 'basel' && (
        <div className="flex flex-col gap-3 animate-fade-in text-xs">
          <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/40 text-emerald-800 dark:text-emerald-300 text-[11px]">
            <strong>巴塞尔协议 III 核心监管红线速记</strong>：第 6 章考核高频考点。
          </div>

          <div className="flex flex-col gap-2">
            {[
              { label: '核心一级资本充足率 (CET1)', min: '≥ 4.5%', formula: 'CET1 / RWA' },
              { label: '一级资本充足率 (Tier 1)', min: '≥ 6.0%', formula: 'Tier 1 / RWA' },
              { label: '总资本充足率 (CAR)', min: '≥ 8.0%', formula: 'Total Capital / RWA' },
              { label: '储备资本缓冲 (Conservation)', min: '2.5%', formula: '核心一级资本留存' },
              { label: '逆周期资本缓冲 (Countercyclical)', min: '0% ~ 2.5%', formula: '防范信贷过度膨胀' },
              { label: '系统重要性银行附加资本 (G-SIBs)', min: '1.0% ~ 3.5%', formula: '附加 CET1 要求' },
              { label: '杠杆率 (Leverage Ratio)', min: '≥ 3.0%', formula: '一级资本 / 表内外总资产' },
              { label: '流动性覆盖率 (LCR)', min: '≥ 100%', formula: '优质流动性资产 / 30日净流出' },
              { label: '净稳定资金比率 (NSFR)', min: '≥ 100%', formula: '可用稳定资金 / 业务所需稳定资金' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-2.5 rounded-xl bg-slate-50 dark:bg-[#1c2333] border border-slate-200/60 dark:border-slate-800/60 flex flex-col gap-1"
              >
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 text-[11px]">{item.label}</span>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono font-bold text-[11px]">
                    {item.min}
                  </span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">{item.formula}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
};
