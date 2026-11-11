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

          {/* Tab 2: Formula Dictionary (五个希腊值符号严谨渲染) */}
          {activeTab === 'formula' && (
            <div className="flex flex-col gap-4 animate-fade-in text-sm">
              <div className="p-3 rounded-2xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/80 dark:border-indigo-800/80 text-indigo-900 dark:text-indigo-200 text-xs leading-relaxed">
                <span className="font-bold">全书公式手册</span>：全量收录五个期权希腊值（<MathText content={GREEK_SUMMARY} inline={true} />）完整推导、久期凸度、VaR、违约率与流动性模型。
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

          {/* Tab 3: Basel Regulations Table */}
          {activeTab === 'basel' && (
            <div className="flex flex-col gap-3.5 animate-fade-in text-sm">
              <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-900/60 text-emerald-900 dark:text-emerald-200 text-xs leading-relaxed">
                <strong>巴塞尔协议 III 核心监管红线速记</strong>：第 6 章考核高频考点。
              </div>

              <div className="flex flex-col gap-2.5">
                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#1c2333] border border-slate-200/80 dark:border-slate-800/80 clay-badge-shadow">
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm mb-1.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    三大支柱体系
                  </h4>
                  <ul className="text-xs text-slate-600 dark:text-slate-300 space-y-1 list-disc list-inside">
                    <li><strong>第一支柱</strong>：最低资本要求（涵盖信用、市场、操作三大风险）</li>
                    <li><strong>第二支柱</strong>：监管当局的监督检查（针对银行特有风险与内部治理评估）</li>
                    <li><strong>第三支柱</strong>：市场纪律（强制信息披露，发挥市场约束机制）</li>
                  </ul>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#1c2333] border border-slate-200/80 dark:border-slate-800/80 clay-badge-shadow">
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm mb-1.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    四大资本充足率监管红线
                  </h4>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-white dark:bg-[#151b26] border border-slate-100 dark:border-slate-800">
                      <span className="text-slate-400 block text-[10px]">核心一级资本充足率</span>
                      <strong className="text-blue-600 font-mono text-sm">≥ 4.5%</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white dark:bg-[#151b26] border border-slate-100 dark:border-slate-800">
                      <span className="text-slate-400 block text-[10px]">一级资本充足率</span>
                      <strong className="text-indigo-600 font-mono text-sm">≥ 6.0%</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white dark:bg-[#151b26] border border-slate-100 dark:border-slate-800">
                      <span className="text-slate-400 block text-[10px]">总资本充足率 (CAR)</span>
                      <strong className="text-emerald-600 font-mono text-sm">≥ 8.0%</strong>
                    </div>
                    <div className="p-2.5 rounded-xl bg-white dark:bg-[#151b26] border border-slate-100 dark:border-slate-800">
                      <span className="text-slate-400 block text-[10px]">储备资本缓冲</span>
                      <strong className="text-amber-600 font-mono text-sm">+ 2.5%</strong>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-[#1c2333] border border-slate-200/80 dark:border-slate-800/80 clay-badge-shadow">
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-xs sm:text-sm mb-1.5 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    流动性双指标与杠杆率
                  </h4>
                  <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    <div className="flex justify-between items-center py-1 border-b border-slate-100 dark:border-slate-800">
                      <span>流动性覆盖率 (LCR, 30天压力)</span>
                      <strong className="font-mono text-purple-600">≥ 100%</strong>
                    </div>
                    <div className="flex justify-between items-center py-1 border-b border-slate-100 dark:border-slate-800">
                      <span>净稳定资金比率 (NSFR, 1年期)</span>
                      <strong className="font-mono text-purple-600">≥ 100%</strong>
                    </div>
                    <div className="flex justify-between items-center py-1">
                      <span>杠杆率底线 (一级资本/总风险暴露)</span>
                      <strong className="font-mono text-purple-600">≥ 3.0%</strong>
                    </div>
                  </div>
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
