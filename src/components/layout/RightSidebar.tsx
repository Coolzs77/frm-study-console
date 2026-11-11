import React, { useState, useEffect, useRef } from 'react';
import { 
  BookOpen, 
  FunctionSquare, 
  ShieldAlert, 
  Check, 
  Copy, 
  Maximize2, 
  Minimize2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Bookmark,
  FileText,
  Loader2
} from 'lucide-react';
import { SlideNote, FormulaItem, RealSlidePage } from '../../types';
import { MathText } from '../common/MathText';
import { ErrorBoundary } from '../common/ErrorBoundary';

interface RightSidebarProps {
  currentChapterId: string;
  slideNotes: Record<string, SlideNote>;
  formulaDict: FormulaItem[];
}

const GREEK_SUMMARY = '$\\Delta,\\ \\Gamma,\\ \\Theta,\\ \\mathcal{V},\\ \\rho$';

export const RightSidebar: React.FC<RightSidebarProps> = ({
  currentChapterId,
  slideNotes,
  formulaDict,
}) => {
  const [activeTab, setActiveTab] = useState<'slide' | 'formula' | 'basel'>('slide');
  const [copiedTex, setCopiedTex] = useState<string | null>(null);
  const [targetPdfPage, setTargetPdfPage] = useState<number>(1);
  const [zoomSlide, setZoomSlide] = useState<string | null>(null);
  const [isPdfLoading, setIsPdfLoading] = useState<boolean>(true);
  const [formulaCategory, setFormulaCategory] = useState<string>('全部');

  const FORMULA_CATEGORIES = ['全部', '利率久期凸度', '期权与希腊值', 'VaR市场风险', '信用风险', '流动性与资本'] as const;

  const filteredFormulas = formulaCategory === '全部'
    ? formulaDict
    : formulaDict.filter(f => f.category === formulaCategory);

  // 侧边栏宽度可拖拽与一键展开半屏状态
  const [isHalfScreen, setIsHalfScreen] = useState<boolean>(false);
  const [sidebarWidth, setSidebarWidth] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('frm_sidebar_width');
      return saved ? parseInt(saved, 10) : 480;
    } catch {
      return 480;
    }
  });

  // 拖拽控制状态
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartXRef = useRef<number>(0);
  const dragStartWidthRef = useRef<number>(480);
  const hasMovedRef = useRef<boolean>(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const currentNote = slideNotes[currentChapterId] || slideNotes['2.1.4'];

  // 章节切换时重置 PDF 初始页码为 1 并进入加载态
  useEffect(() => {
    setTargetPdfPage(1);
    setIsPdfLoading(true);
  }, [currentChapterId]);

  // 监听 targetPdfPage 变化，若 iframe 已加载，平滑切换 hash 或更新
  const handleJumpToPage = (pageNum: number) => {
    setTargetPdfPage(pageNum);
    if (iframeRef.current && currentNote?.pdfUrl) {
      const baseUrl = import.meta.env.BASE_URL;
      const targetUrl = `${baseUrl}${currentNote.pdfUrl}#page=${pageNum}`;
      // 直接改变 iframe 地址或 hash，不触发整组件卸载
      try {
        iframeRef.current.src = targetUrl;
      } catch {
        // fallback
      }
    }
  };

  // 高性能、零延迟鼠标拖拽引擎（全屏遮罩防 iframe 吞事件）
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const deltaX = dragStartXRef.current - e.clientX;
      if (Math.abs(deltaX) > 2) {
        hasMovedRef.current = true;
      }
      const maxHalf = Math.floor(window.innerWidth * 0.5);
      const newWidth = Math.min(maxHalf, Math.max(340, dragStartWidthRef.current + deltaX));
      setSidebarWidth(newWidth);
      setIsHalfScreen(false); // 拖拽时退出固定半屏状态
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      try {
        localStorage.setItem('frm_sidebar_width', sidebarWidth.toString());
      } catch {}
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, sidebarWidth]);

  const handleStartDrag = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragStartXRef.current = e.clientX;
    dragStartWidthRef.current = isHalfScreen ? Math.floor(window.innerWidth * 0.5) : sidebarWidth;
    hasMovedRef.current = false;
    setIsDragging(true);
  };

  const handleCopy = (tex: string) => {
    navigator.clipboard.writeText(tex);
    setCopiedTex(tex);
    setTimeout(() => setCopiedTex(null), 2000);
  };

  const pdfFullUrl = currentNote?.pdfUrl
    ? `${import.meta.env.BASE_URL}${currentNote.pdfUrl}#page=${targetPdfPage}`
    : null;

  const rawPdfUrl = currentNote?.pdfUrl
    ? `${import.meta.env.BASE_URL}${currentNote.pdfUrl}`
    : null;

  return (
    <>
      {/* 全局透明遮罩层：拖拽时拦截所有事件，彻底防止鼠标被 iframe 吞噬导致的粘连 */}
      {isDragging && (
        <div
          className="fixed inset-0 z-[9999] cursor-col-resize select-none bg-transparent"
          style={{ userSelect: 'none', pointerEvents: 'all' }}
        />
      )}

      <aside 
        style={{ 
          width: isHalfScreen ? '50vw' : `${sidebarWidth}px`, 
          maxWidth: '50vw' 
        }}
        className={`relative bg-white dark:bg-[#151b26] border-l border-slate-200/80 dark:border-slate-800/80 p-4 sm:p-5 flex flex-col gap-4 clay-card-shadow flex-shrink-0 overflow-y-auto max-h-[calc(100vh-4.5rem)] hidden xl:flex ${
          isDragging ? 'transition-none select-none' : 'transition-[width] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]'
        }`}
      >
        {/* 左边缘拖拽把手 (Drag Resizer Handle) */}
        <div
          onMouseDown={handleStartDrag}
          className={`absolute -left-2 top-0 bottom-0 w-4 cursor-col-resize z-40 group flex items-center justify-center transition-colors select-none ${
            isDragging ? 'bg-blue-500/25' : 'hover:bg-blue-500/15'
          }`}
          title="按住鼠标拖拽调整侧边栏宽度 (最多半屏 50vw)"
        >
          <div className={`w-1.5 h-12 rounded-full transition-colors ${
            isDragging ? 'bg-blue-600' : 'bg-slate-300 dark:bg-slate-700 group-hover:bg-blue-500'
          }`} />
        </div>

        {/* 顶部工具栏：Tab 切换 + 一键半屏展开控制 */}
        <div className="flex items-center gap-2">
          <div className="flex-1 flex rounded-2xl bg-slate-100 dark:bg-[#0e131d] p-1 clay-inset-groove">
            <button
              onClick={() => setActiveTab('slide')}
              className={`flex-1 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
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
              className={`flex-1 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
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
              className={`flex-1 py-1.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'basel'
                  ? 'bg-white dark:bg-[#1f283b] text-blue-600 dark:text-blue-400 clay-button-shadow'
                  : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              <ShieldAlert className="w-4 h-4" />
              <span>巴塞尔</span>
            </button>
          </div>

          {/* 一键展开半屏 / 恢复标准宽度按钮 */}
          <button
            type="button"
            onClick={() => setIsHalfScreen(!isHalfScreen)}
            className={`p-2 rounded-2xl border transition-all cursor-pointer clay-squash ${
              isHalfScreen
                ? 'bg-blue-600 text-white border-blue-600 shadow-[0_2px_8px_rgba(37,99,235,0.3)]'
                : 'bg-white dark:bg-[#1f283b] text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            title={isHalfScreen ? '恢复标准宽度' : '展开半屏沉浸研读 (最多半屏 50vw)'}
          >
            {isHalfScreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>

        <ErrorBoundary fallbackTitle="侧边栏模块加载异常">
          {/* Tab 1: Slide Synergy (完整课件 PDF 内嵌研读器) */}
          {activeTab === 'slide' && (
            <div className="flex flex-col gap-4 animate-fade-in text-sm">
              {/* Header Banner */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-50/90 to-indigo-50/60 dark:from-blue-950/40 dark:to-indigo-950/30 border border-blue-200/80 dark:border-blue-900/60 flex items-center justify-between">
                <div className="min-w-0 pr-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                      章节理论核心课件
                    </span>
                    <span className="text-xs px-2 py-0.5 rounded-full font-mono font-bold bg-white dark:bg-[#151b26] text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800">
                      {currentChapterId}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-slate-100 text-sm sm:text-base leading-snug truncate">
                    {currentNote?.pdfFileName || currentNote?.title || '完整原版课件'}
                  </h3>
                </div>

                {/* 原版 PDF 全屏与下载操作 */}
                {rawPdfUrl && (
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <a
                      href={rawPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white dark:bg-[#1f283b] text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950/50 transition-all flex items-center gap-1 text-xs font-bold shadow-sm cursor-pointer"
                      title="在独立新标签页全屏打开完整原版课件 PDF"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">新标签打开</span>
                    </a>
                  </div>
                )}
              </div>

              {/* 考点页码书签快捷直达条 */}
              {currentNote?.keyBookmarks && currentNote.keyBookmarks.length > 0 && (
                <div className="flex flex-col gap-1.5 p-3 rounded-2xl bg-slate-50 dark:bg-[#161c28] border border-slate-200/90 dark:border-slate-800/90 clay-badge-shadow">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1">
                      <Bookmark className="w-3.5 h-3.5 text-blue-600" />
                      <span>考试考点直达 (点击一键定位对应页):</span>
                    </span>
                    {currentNote.totalPdfPages && (
                      <span className="font-mono text-[11px] text-slate-400">
                        共 {currentNote.totalPdfPages} 页
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1.5 overflow-x-auto pt-1 pb-1">
                    {currentNote.keyBookmarks.map((bm, bIdx) => (
                      <button
                        key={bIdx}
                        onClick={() => handleJumpToPage(bm.pageNumber)}
                        className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all flex-shrink-0 cursor-pointer ${
                          targetPdfPage === bm.pageNumber
                            ? 'bg-blue-600 text-white shadow-sm ring-2 ring-blue-400'
                            : 'bg-white dark:bg-[#1f283b] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-blue-400 hover:bg-blue-50/50 dark:hover:bg-slate-800'
                        }`}
                        title={bm.description}
                      >
                        {bm.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* 原版完整课件 PDF 内嵌研读器视口 (同章节只挂载一次，避免重复销毁重载) */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/90 dark:border-slate-800 shadow-inner bg-slate-100 dark:bg-slate-900 flex flex-col h-[560px] 2xl:h-[660px]">
                {/* 优雅骨架屏加载指示器 */}
                {isPdfLoading && (
                  <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-slate-50/95 dark:bg-slate-900/95 backdrop-blur-xs space-y-3 p-4 text-center">
                    <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
                    <p className="text-xs font-bold text-slate-600 dark:text-slate-300">
                      正在载入完整原版课件...
                    </p>
                    <p className="text-[11px] text-slate-400">
                      支持在内部自由滚动翻页、鼠标缩放、目录查看与考点直达
                    </p>
                  </div>
                )}

                {pdfFullUrl ? (
                  <iframe
                    ref={iframeRef}
                    key={currentChapterId} // 仅章节切换时才换源，考点换页绝不销毁重新冷启动
                    src={pdfFullUrl}
                    onLoad={() => setIsPdfLoading(false)}
                    title={currentNote.pdfFileName || '原版课件 PDF'}
                    className={`w-full h-full border-0 bg-white transition-opacity duration-200 ${
                      isPdfLoading ? 'opacity-0' : 'opacity-100'
                    } ${isDragging ? 'pointer-events-none' : ''}`}
                  />
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-slate-400 gap-2 p-4 text-center">
                    <FileText className="w-10 h-10 stroke-[1.5] text-slate-300" />
                    <p className="text-xs font-bold">暂无该章节完整课件 PDF</p>
                  </div>
                )}
              </div>

              {/* 核心概念解析 (多色语义排版 + 行内 KaTeX 公式 + 加粗高亮) */}
              <div className="flex flex-col gap-2.5 pt-2">
                <span className="font-bold text-slate-800 dark:text-slate-200 text-sm flex items-center gap-1.5">
                  <span>💡</span> 核心概念速记解析
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

              {/* 章节计算公式 */}
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
                          <span className="font-bold text-emerald-900 dark:text-emerald-300 text-xs sm:text-sm">
                            {f.name}
                          </span>
                          <button
                            onClick={() => handleCopy(f.tex)}
                            className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-800 transition-colors p-1 cursor-pointer"
                            title="复制公式代码"
                          >
                            {copiedTex === f.tex ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                        <div className="bg-white dark:bg-[#151b26] p-2.5 rounded-xl my-2 text-center border border-emerald-100 dark:border-emerald-900/60 overflow-x-auto">
                          <MathText content={`$$${f.tex}$$`} />
                        </div>
                        {(f.desc || f.usage) && (
                          <div className="text-xs text-emerald-800/90 dark:text-emerald-300/90 leading-relaxed pt-1">
                            <MathText content={f.desc || f.usage || ''} />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Formula Dictionary (分类筛选 + 全量收录 + 严谨 KaTeX 渲染) */}
          {activeTab === 'formula' && (
            <div className="flex flex-col gap-3.5 animate-fade-in text-sm">
              <div className="p-3 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-900 dark:text-indigo-200 text-xs leading-relaxed">
                <span className="font-bold">核心计算公式手册</span>：严谨收录五大模块共 34 组核心计算模型（含五个期权希腊值 <MathText content={GREEK_SUMMARY} inline={true} />、久期凸度、VaR、违约率与巴塞尔资本），已排除纯定性的第 1 章与第 4 章。
              </div>

              {/* 分类快捷筛选 Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar select-none">
                {FORMULA_CATEGORIES.map(cat => {
                  const count = cat === '全部' ? formulaDict.length : formulaDict.filter(f => f.category === cat).length;
                  const isActive = formulaCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setFormulaCategory(cat)}
                      className={`px-2.5 py-1 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                        isActive
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                      }`}
                    >
                      <span>{cat}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-blue-700/80 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-500'}`}>
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="flex flex-col gap-3">
                {filteredFormulas.map((f, i) => (
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
                        className="text-slate-400 hover:text-blue-600 transition-colors p-1 flex-shrink-0 cursor-pointer"
                        title="复制 LaTeX"
                      >
                        {copiedTex === f.tex ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                      </button>
                    </div>
                    <div className="bg-white dark:bg-[#151b26] p-2.5 rounded-xl my-2 text-center border border-slate-100 dark:border-slate-800 overflow-x-auto">
                      <MathText content={`$$${f.tex}$$`} />
                    </div>
                    {(f.desc || f.usage) && (
                      <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                        <MathText content={f.desc || f.usage || ''} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tab 3: Basel Regulations Comprehensive Revision Map (全量 5 大复习板块) */}
          {activeTab === 'basel' && (
            <div className="flex flex-col gap-3.5 animate-fade-in text-sm">
              <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-900/60 text-emerald-900 dark:text-emerald-200 text-xs leading-relaxed">
                <strong>巴塞尔协议与国际监管核心备考图谱</strong>：涵盖巴塞尔 I/II/III 全生命周期、三大支柱、资本充足率指标、三大缓冲层金字塔、RWA 风险加权计算及高频避坑要点。
              </div>

              <div className="flex flex-col gap-3">
                {/* 模块 1: 三大支柱体系 */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#1c2333] border border-slate-200/80 dark:border-slate-800/80 clay-badge-shadow">
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm mb-2 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                    1. 巴塞尔三大支柱全貌穿透
                  </h4>
                  <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    <div className="p-2 rounded-xl bg-white dark:bg-[#151b26] border border-slate-100 dark:border-slate-800">
                      <span className="font-bold text-slate-800 dark:text-slate-200 block mb-0.5">🏛️ 第一支柱：最低资本要求 (Minimum Capital)</span>
                      <p>涵盖三大风险资本计量：<strong>信用风险</strong>（标准法、内部评级初级/高级法 IRB）、<strong>市场风险</strong>（标准法、内部模型法 IMA）、<strong>操作风险</strong>（标准法 SMA）。总资本充足率底线为 8%。</p>
                    </div>
                    <div className="p-2 rounded-xl bg-white dark:bg-[#151b26] border border-slate-100 dark:border-slate-800">
                      <span className="font-bold text-slate-800 dark:text-slate-200 block mb-0.5">🔍 第二支柱：监管当局监督检查 (Supervisory Review)</span>
                      <p>要求银行建立内部资本充足评估程序 (ICAAP)，监管当局评估未被第一支柱覆盖的风险（如流动性、集中度、声誉、战略风险），有权强制要求银行追加特别加点资本。</p>
                    </div>
                    <div className="p-2 rounded-xl bg-white dark:bg-[#151b26] border border-slate-100 dark:border-slate-800">
                      <span className="font-bold text-slate-800 dark:text-slate-200 block mb-0.5">📢 第三支柱：市场纪律 (Market Discipline)</span>
                      <p>定性与定量强制信息披露规则，披露资本构成、风险敞口及计量方法，借助外部市场投资者与评级机构力量约束银行过度冒险。</p>
                    </div>
                  </div>
                </div>

                {/* 模块 2: 四大资本充足率指标与三大缓冲金字塔 */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#1c2333] border border-slate-200/80 dark:border-slate-800/80 clay-badge-shadow">
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm mb-2 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                    2. 四大资本充足率监管红线与缓冲金字塔
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs mb-2.5">
                    <div className="p-2.5 rounded-xl bg-white dark:bg-[#151b26] border border-slate-100 dark:border-slate-800">
                      <span className="text-slate-400 block text-[10px]">核心一级资本充足率 (CET1)</span>
                      <strong className="text-blue-600 font-mono text-sm">≥ 4.5%</strong>
                      <span className="text-[10px] text-slate-500 block mt-0.5">普通股 + 留存收益 - 扣减项</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white dark:bg-[#151b26] border border-slate-100 dark:border-slate-800">
                      <span className="text-slate-400 block text-[10px]">一级资本充足率 (Tier 1)</span>
                      <strong className="text-indigo-600 font-mono text-sm">≥ 6.0%</strong>
                      <span className="text-[10px] text-slate-500 block mt-0.5">CET1 + 其他一级资本(优先股/永续债)</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white dark:bg-[#151b26] border border-slate-100 dark:border-slate-800">
                      <span className="text-slate-400 block text-[10px]">总资本充足率 (CAR)</span>
                      <strong className="text-emerald-600 font-mono text-sm">≥ 8.0%</strong>
                      <span className="text-[10px] text-slate-500 block mt-0.5">Tier 1 + 二级资本(次级债/超额计提)</span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white dark:bg-[#151b26] border border-slate-100 dark:border-slate-800">
                      <span className="text-slate-400 block text-[10px]">资本留存缓冲 (CCB)</span>
                      <strong className="text-amber-600 font-mono text-sm">+ 2.5%</strong>
                      <span className="text-[10px] text-slate-500 block mt-0.5">全部由 CET1 充当，未达标限制分红</span>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-900/40 text-xs text-amber-900 dark:text-amber-200 space-y-1">
                    <p><strong>附加宏观审慎缓冲层：</strong></p>
                    <p>• <strong>逆周期资本缓冲 (CCyB)</strong>：0% ~ 2.5%（央行依信贷过热程度动态设定，全部为 CET1）</p>
                    <p>• <strong>系统重要性银行缓冲 (G-SIBs)</strong>：1.0% ~ 3.5%（按 5 档分级加成，限制大而不能倒风险）</p>
                    <p>• <strong>极限综合考核峰值</strong>：大行核心一级最高需达到 4.5% + 2.5% + 2.5% + 3.5% = 13.0%！</p>
                  </div>
                </div>

                {/* 模块 3: RWA 风险加权资产计量谱系 */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#1c2333] border border-slate-200/80 dark:border-slate-800/80 clay-badge-shadow">
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm mb-2 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-500"></span>
                    3. 风险加权资产 (RWA) 计量谱系与真题权重表
                  </h4>
                  <div className="text-xs space-y-1.5 text-slate-600 dark:text-slate-300">
                    <p>表内资产敞口等于每项资产与其对应风险权重乘积后加总：RWA = ∑ (表内资产敞口 × 风险权重)。</p>
                    <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-[#151b26] p-2">
                      <table className="w-full text-[11px] text-left">
                        <thead>
                          <tr className="border-b border-slate-100 dark:border-slate-800 text-slate-400">
                            <th className="py-1">资产类别</th>
                            <th className="py-1">监管标准权重</th>
                            <th className="py-1">考试真题映射</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                          <tr>
                            <td className="py-1 font-semibold">现金、央行准备金、国债</td>
                            <td className="py-1 text-emerald-600 font-mono">0%</td>
                            <td className="py-1">无信用风险，不占用资本</td>
                          </tr>
                          <tr>
                            <td className="py-1 font-semibold">地方政府债券 / 公共实体</td>
                            <td className="py-1 text-blue-600 font-mono">20%</td>
                            <td className="py-1">真题 1/2：2 亿元 × 20% = 4000 万</td>
                          </tr>
                          <tr>
                            <td className="py-1 font-semibold">个人住房抵押贷款</td>
                            <td className="py-1 text-indigo-600 font-mono">50%</td>
                            <td className="py-1">真题 1/2：5 亿元 × 50% = 2.5 亿元</td>
                          </tr>
                          <tr>
                            <td className="py-1 font-semibold">商业贷款 (A级评级企业)</td>
                            <td className="py-1 text-amber-600 font-mono">50% ~ 100%</td>
                            <td className="py-1">真题 1/2：按题目给定权重精确计算</td>
                          </tr>
                          <tr>
                            <td className="py-1 font-semibold">商业贷款 (BB+及以下投机级)</td>
                            <td className="py-1 text-rose-600 font-mono">100% ~ 150%</td>
                            <td className="py-1">高风险资产，资本占用翻倍</td>
                          </tr>
                          <tr>
                            <td className="py-1 font-semibold">表外信用证 / 承兑汇票</td>
                            <td className="py-1 text-purple-600 font-mono">乘以 CCF</td>
                            <td className="py-1">信用转换因子折算表内等价信用量</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                {/* 模块 4: 流动性双指标与杠杆率约束 */}
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#1c2333] border border-slate-200/80 dark:border-slate-800/80 clay-badge-shadow">
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm mb-2 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-purple-500"></span>
                    4. 流动性双指标与无风险加权杠杆率底线
                  </h4>
                  <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    <div className="flex justify-between items-center p-2 rounded-xl bg-white dark:bg-[#151b26] border border-slate-100 dark:border-slate-800">
                      <div>
                        <strong className="text-slate-800 dark:text-slate-200 block">流动性覆盖率 (LCR, 30天短期压力)</strong>
                        <span className="text-[10px] text-slate-400">高质量流动性资产 (HQLA) / 未来30天压力净现金流出</span>
                      </div>
                      <strong className="font-mono text-purple-600 text-sm">≥ 100%</strong>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-xl bg-white dark:bg-[#151b26] border border-slate-100 dark:border-slate-800">
                      <div>
                        <strong className="text-slate-800 dark:text-slate-200 block">净稳定资金比率 (NSFR, 1年以上长期结构)</strong>
                        <span className="text-[10px] text-slate-400">可用的稳定资金 (ASF) / 所需的稳定资金 (RSF)</span>
                      </div>
                      <strong className="font-mono text-purple-600 text-sm">≥ 100%</strong>
                    </div>
                    <div className="flex justify-between items-center p-2 rounded-xl bg-white dark:bg-[#151b26] border border-slate-100 dark:border-slate-800">
                      <div>
                        <strong className="text-slate-800 dark:text-slate-200 block">杠杆率指标 (Leverage Ratio)</strong>
                        <span className="text-[10px] text-slate-400">一级资本 (Tier 1) / 调整后表内外总资产暴露（不经风险加权）</span>
                      </div>
                      <strong className="font-mono text-purple-600 text-sm">≥ 3.0%</strong>
                    </div>
                  </div>
                </div>

                {/* 模块 5: 期末真题高频扣减与合格资本陷阱速记 */}
                <div className="p-3.5 rounded-2xl bg-rose-50/50 dark:bg-rose-950/30 border border-rose-200/80 dark:border-rose-900/60 clay-badge-shadow">
                  <h4 className="font-bold text-rose-900 dark:text-rose-200 text-xs sm:text-sm mb-2 flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                    5. 期末真题高频扣减与合格资本陷阱速记
                  </h4>
                  <ul className="text-xs text-rose-950/80 dark:text-rose-200/90 space-y-1.5 list-disc list-inside">
                    <li><strong>商誉与无形资产扣减陷阱</strong>：商誉 (Goodwill) 和递延税款资产 (DTA) 必须从核心一级资本 (CET1) 中全额扣除，绝不能充当合格资本！</li>
                    <li><strong>一般债务不是资本</strong>：在真题第 3 题与第 4 题中，80 亿或 1500 亿“一般债务”纯属对债权人的刚性负债，<strong>计入监管资本为 0</strong>！</li>
                    <li><strong>次级债归属层级</strong>：长期次级债只能计入二级资本 (Tier 2)，绝不能算入核心一级资本或一级资本！</li>
                    <li><strong>计算结果格式化要求</strong>：期末试题要求比率保留两位百分数（如 11.85%、14.07%、16.30%）。计算公式：核心一级比率 = CET1 / RWA，一级资本比率 = (CET1 + 优先股) / RWA，总资本充足率 = (一级资本 + 次级债) / RWA。</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </ErrorBoundary>

        {/* 原画放大模态框 */}
        {zoomSlide && (
          <div
            onClick={() => setZoomSlide(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
          >
            <img
              src={zoomSlide}
              alt="放大幻灯片原图"
              className="max-w-[95vw] max-h-[95vh] rounded-2xl shadow-2xl object-contain bg-white"
            />
          </div>
        )}
      </aside>
    </>
  );
};
