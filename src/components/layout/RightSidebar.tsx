import React, { useState } from 'react';
import { BookOpen, FunctionSquare, ShieldAlert, Check, Copy, Maximize2, Sparkles, AlertTriangle } from 'lucide-react';
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
  const [zoomSlide, setZoomSlide] = useState<string | null>(null);

  const currentNote = slideNotes[currentChapterId] || slideNotes['2.1.4'];

  const handleCopy = (tex: string) => {
    navigator.clipboard.writeText(tex);
    setCopiedTex(tex);
    setTimeout(() => setCopiedTex(null), 2000);
  };

  return (
    <aside className="w-96 xl:w-[440px] 2xl:w-[480px] bg-white dark:bg-[#151b26] border-l border-slate-200/80 dark:border-slate-800/80 p-4 sm:p-5 flex flex-col gap-4 clay-card-shadow transition-all duration-300 flex-shrink-0 overflow-y-auto max-h-[calc(100vh-4.5rem)] hidden xl:flex">
      {/* Tab Switcher */}
      <div className="flex rounded-2xl bg-slate-100 dark:bg-[#0e131d] p-1 clay-inset-groove">
        <button
          onClick={() => setActiveTab('slide')}
          className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
            activeTab === 'slide'
              ? 'bg-white dark:bg-[#1f283b] text-blue-600 dark:text-blue-400 clay-button-shadow'
              : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>课件精讲</span>
        </button>
        <button
          onClick={() => setActiveTab('formula')}
          className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
            activeTab === 'formula'
              ? 'bg-white dark:bg-[#1f283b] text-blue-600 dark:text-blue-400 clay-button-shadow'
              : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          <FunctionSquare className="w-4 h-4" />
          <span>公式手册</span>
        </button>
        <button
          onClick={() => setActiveTab('basel')}
          className={`flex-1 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all ${
            activeTab === 'basel'
              ? 'bg-white dark:bg-[#1f283b] text-blue-600 dark:text-blue-400 clay-button-shadow'
              : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
          }`}
        >
          <ShieldAlert className="w-4 h-4" />
          <span>巴塞尔</span>
        </button>
      </div>

      {/* Tab 1: Slide Synergy */}
      {activeTab === 'slide' && (
        <div className="flex flex-col gap-5 animate-fade-in text-sm">
          {/* Header Banner */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-50/90 to-indigo-50/60 dark:from-blue-950/40 dark:to-indigo-950/30 border border-blue-200/80 dark:border-blue-900/60">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                章节理论核心要点
              </span>
              <span className="text-xs px-2 py-0.5 rounded-full font-mono font-bold bg-white dark:bg-[#151b26] text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800">
                {currentChapterId}
              </span>
            </div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base leading-snug">
              {currentNote?.title || '课件精选考点'}
            </h3>
          </div>

          {/* 真实 PPT 原版高清幻灯片卡片 (真正嵌入的课件原图) */}
          {currentNote?.realSlides && currentNote.realSlides.length > 0 && (
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-bold text-slate-800 dark:text-slate-100 text-sm flex items-center gap-1.5">
                  <span>🖼️</span> 核心 PPT 原版幻灯片
                </span>
                <span className="text-xs text-blue-600 dark:text-blue-400 font-bold bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded-full border border-blue-200 dark:border-blue-800">
                  点击放大原画
                </span>
              </div>
              <div className="flex flex-col gap-3">
                {currentNote.realSlides.map((slide, idx) => (
                  <div
                    key={idx}
                    onClick={() => setZoomSlide(slide.image)}
                    className="rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-700/90 clay-badge-shadow bg-white dark:bg-[#1a2232] cursor-zoom-in hover:border-blue-400 dark:hover:border-blue-500 transition-all"
                  >
                    <div className="flex items-center justify-between px-3 py-2 bg-slate-100 dark:bg-[#151b26] border-b border-slate-200 dark:border-slate-800 text-xs">
                      <span className="font-bold text-slate-800 dark:text-slate-200 truncate pr-2">
                        {slide.title}
                      </span>
                      <span className="px-2 py-0.5 rounded-md font-mono font-bold text-xs bg-blue-600 text-white flex-shrink-0">
                        PPT 第 {slide.pageNumber} 页
                      </span>
                    </div>
                    <img
                      src={slide.image}
                      alt={`PPT 第 ${slide.pageNumber} 页`}
                      className="w-full object-contain max-h-56 p-1 bg-slate-50 dark:bg-[#0e131d]"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 核心概念解析 (多色语义排版 + 行内 KaTeX 公式 + 加粗高亮) */}
          <div className="flex flex-col gap-2.5">
            <span className="font-bold text-slate-800 dark:text-slate-200 text-sm flex items-center gap-1.5">
              <span>💡</span> 核心概念解析
            </span>
            <div className="flex flex-col gap-2.5">
              {currentNote?.coreConcepts.map((c, i) => (
                <div
                  key={i}
                  className="p-3 sm:p-3.5 rounded-2xl bg-slate-50 dark:bg-[#1c2333] border border-slate-200/80 dark:border-slate-800/80 leading-relaxed text-slate-700 dark:text-slate-200 text-xs sm:text-sm clay-badge-shadow"
                >
                  <MathText content={c} />
                </div>
              ))}
            </div>
          </div>

          {/* 章节计算公式 (公式与小字说明全部严格通过 KaTeX 渲染) */}
          {currentNote?.formulas && currentNote.formulas.length > 0 && (
            <div className="flex flex-col gap-2.5">
              <span className="font-bold text-slate-800 dark:text-slate-200 text-sm flex items-center gap-1.5">
                <span>📐</span> 章节核心公式
              </span>
              <div className="flex flex-col gap-3">
                {currentNote.formulas.map((f, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-emerald-50/40 dark:bg-[#162426] border border-emerald-200/80 dark:border-emerald-800/80 clay-badge-shadow"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="font-bold text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm">
                        {f.name}
                      </span>
                      <button
                        onClick={() => handleCopy(f.tex)}
                        className="text-slate-400 hover:text-emerald-600 transition-colors p-1"
                        title="复制 LaTeX"
                      >
                        {copiedTex === f.tex ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                    <div className="bg-white dark:bg-[#151b26] p-2.5 rounded-xl my-1.5 text-center border border-emerald-100 dark:border-emerald-950 overflow-x-auto">
                      <MathText content={`$$${f.tex}$$`} />
                    </div>
                    {f.desc && (
                      <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mt-2 pt-1 border-t border-emerald-100/60 dark:border-emerald-900/40">
                        <MathText content={f.desc} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 考试高频避坑点 (多色警示框) */}
          {currentNote?.pitfalls && currentNote.pitfalls.length > 0 && (
            <div className="flex flex-col gap-2.5">
              <span className="font-bold text-rose-600 dark:text-rose-400 text-sm flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                <span>考试高频避坑要点</span>
              </span>
              <div className="flex flex-col gap-2">
                {currentNote.pitfalls.map((p, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-2xl bg-rose-50/80 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-900/60 text-rose-900 dark:text-rose-200 text-xs sm:text-sm leading-relaxed"
                  >
                    <MathText content={p} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Tab 2: Formula Dictionary (包含五个希腊值全体系) */}
      {activeTab === 'formula' && (
        <div className="flex flex-col gap-4 animate-fade-in text-sm">
          <div className="p-3 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-900 dark:text-indigo-200 text-xs leading-relaxed">
            <strong>全书公式手册</strong>：已全量收录五个期权希腊值（$\Delta, \Gamma, \Theta, \mathcal{V}, \rho$）完整推导、久期凸度、VaR、违约率与流动性模型。
          </div>
          <div className="flex flex-col gap-3">
            {formulaDict.map((f, i) => (
              <div
                key={i}
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#1c2333] border border-slate-200/80 dark:border-slate-800/80 clay-card-shadow"
              >
                <div className="flex items-center justify-between mb-1.5">
                  <div className="flex items-center gap-2 truncate">
                    {f.category && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300">
                        {f.category}
                      </span>
                    )}
                    <span className="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm truncate">
                      {f.name}
                    </span>
                  </div>
                  <button
                    onClick={() => handleCopy(f.tex)}
                    className="text-slate-400 hover:text-blue-600 transition-colors p-1 flex-shrink-0"
                    title="复制 LaTeX"
                  >
                    {copiedTex === f.tex ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                <div className="bg-white dark:bg-[#151b26] p-2.5 rounded-xl my-2 text-center border border-slate-100 dark:border-slate-800 overflow-x-auto">
                  <MathText content={`$$${f.tex}$$`} />
                </div>
                {f.desc && (
                  <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                    <MathText content={f.desc} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Basel Regulations Table */}
      {activeTab === 'basel' && (
        <div className="flex flex-col gap-3.5 animate-fade-in text-sm">
          <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-900/60 text-emerald-900 dark:text-emerald-200 text-xs leading-relaxed">
            <strong>巴塞尔协议 III 核心监管红线速记</strong>：第 6 章考核高频考点。
          </div>

          <div className="flex flex-col gap-2.5">
            {[
              { label: '核心一级资本充足率 (CET1)', min: '≥ 4.5%', formula: 'CET1 / RWA' },
              { label: '一级资本充足率 (Tier 1)', min: '≥ 6.0%', formula: 'Tier 1 / RWA' },
              { label: '总资本充足率 (CAR)', min: '≥ 8.0%', formula: 'Total Capital / RWA' },
              { label: '储备资本缓冲 (Conservation Buffer)', min: '2.5%', formula: '核心一级资本留存' },
              { label: '逆周期资本缓冲 (Countercyclical Buffer)', min: '0% ~ 2.5%', formula: '防范信贷过度扩张' },
              { label: '全球系统重要性银行附加 (G-SIBs)', min: '1.0% ~ 3.5%', formula: '附加 CET1 要求' },
              { label: '杠杆率要求 (Leverage Ratio)', min: '≥ 3.0%', formula: '一级资本 / 表内外总资产' },
              { label: '流动性覆盖率 (LCR)', min: '≥ 100%', formula: '优质流动性资产 / 30日净流出' },
              { label: '净稳定资金比率 (NSFR)', min: '≥ 100%', formula: '可用稳定资金 / 业务所需稳定资金' },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl bg-slate-50 dark:bg-[#1c2333] border border-slate-200/70 dark:border-slate-800/70 flex flex-col gap-1.5 clay-badge-shadow"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm">{item.label}</span>
                  <span className="px-2.5 py-0.5 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-mono font-bold text-xs sm:text-sm">
                    {item.min}
                  </span>
                </div>
                <span className="text-xs text-slate-400 font-mono">{item.formula}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 真实 PPT 全屏原画灯箱 */}
      {zoomSlide && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setZoomSlide(null)}
        >
          <img
            src={zoomSlide}
            alt="PPT 原图放大"
            className="max-h-[92vh] max-w-[92vw] object-contain rounded-2xl shadow-2xl border border-white/20"
          />
        </div>
      )}
    </aside>
  );
};
