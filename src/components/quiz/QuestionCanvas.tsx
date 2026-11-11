import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Copy, 
  Check, 
  Eye, 
  HelpCircle, 
  Sparkles,
  Maximize2
} from 'lucide-react';
import { Question, StudyMode } from '../../types';
import { MathText } from '../common/MathText';

interface QuestionCanvasProps {
  question: Question;
  currentIndex: number;
  totalFiltered: number;
  mode: StudyMode;
  isStarred: boolean;
  onToggleStar: (qId: string) => void;
  onPrev: () => void;
  onNext: () => void;
  userAnswer?: { answer: string | string[]; isCorrect: boolean };
  onAnswerSubmit: (qId: string, answer: string | string[], isCorrect: boolean) => void;
  onJumpToIndex: (index: number) => void;
  allQuestions: Question[];
  wrongQuestionIds: string[];
  onRemoveFromWrong?: (qId: string) => void;
}

export const QuestionCanvas: React.FC<QuestionCanvasProps> = ({
  question,
  currentIndex,
  totalFiltered,
  mode,
  isStarred,
  onToggleStar,
  onPrev,
  onNext,
  userAnswer,
  onAnswerSubmit,
  onJumpToIndex,
  allQuestions,
  wrongQuestionIds,
  onRemoveFromWrong,
}) => {
  const [selectedMulti, setSelectedMulti] = useState<string[]>([]);
  const [blankInputs, setBlankInputs] = useState<string[]>([]);
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);
  const [zoomImg, setZoomImg] = useState<string | null>(null);
  const [jumpDrawerOpen, setJumpDrawerOpen] = useState(false);

  // 当题目切换时重置状态
  useEffect(() => {
    setRevealed(mode === 'read');
    setSelectedMulti(Array.isArray(userAnswer?.answer) ? userAnswer.answer : []);
    
    // 初始化填空输入框
    const blankCount = Math.max(question.correctAnswerList.length, 1);
    const existing = Array.isArray(userAnswer?.answer) 
      ? userAnswer.answer 
      : (typeof userAnswer?.answer === 'string' ? [userAnswer.answer] : []);
    const initialBlanks = Array.from({ length: blankCount }, (_, i) => existing[i] || '');
    setBlankInputs(initialBlanks);
  }, [question.id, mode, userAnswer]);

  // 复制题干
  const handleCopyStem = () => {
    navigator.clipboard.writeText(question.stem);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 单选 / 判断题作答
  const handleSingleSelect = (label: string) => {
    if (mode === 'read') return;
    const isCorrect = question.correctAnswer.trim().toUpperCase() === label.trim().toUpperCase();
    onAnswerSubmit(question.id, label, isCorrect);
    setRevealed(true);
  };

  // 多选多选确认
  const handleMultiSubmit = () => {
    if (mode === 'read' || selectedMulti.length === 0) return;
    const userStr = [...selectedMulti].sort().join('').toUpperCase();
    const correctStr = (question.correctAnswer || '').replace(/[^A-Za-z]/g, '').split('').sort().join('').toUpperCase();
    const isCorrect = userStr === correctStr;
    onAnswerSubmit(question.id, selectedMulti, isCorrect);
    setRevealed(true);
  };

  // 填空题数值容差比对
  const checkBlankValue = (userVal: string, stdVal: string): boolean => {
    if (!userVal || !stdVal) return false;
    let u = userVal.trim().replace(/％/g, '%').replace(/[，,]/g, '').toLowerCase();
    let s = stdVal.trim().replace(/％/g, '%').replace(/[，,]/g, '').toLowerCase();

    // 移除“第一空：”等前缀
    u = u.replace(/^第[一二三四五六七八九十\d]+空[：:]\s*/, '');
    s = s.replace(/^第[一二三四五六七八九十\d]+空[：:]\s*/, '');

    if (u === s) return true;

    // 尝试数值容差比对
    const numU = parseFloat(u);
    const numS = parseFloat(s);
    if (!isNaN(numU) && !isNaN(numS)) {
      return Math.abs(numU - numS) <= 0.01;
    }
    return false;
  };

  const handleBlankSubmit = () => {
    const isAllCorrect = question.correctAnswerList.every((std, idx) => {
      const userVal = blankInputs[idx] || '';
      return checkBlankValue(userVal, std);
    });
    onAnswerSubmit(question.id, blankInputs, isAllCorrect);
    setRevealed(true);
  };

  const handleRevealAnswer = () => {
    // 自动回填标准答案
    setBlankInputs(question.correctAnswerList.map(s => s.replace(/^第[一二三四五六七八九十\d]+空[：:]\s*/, '')));
    setRevealed(true);
  };

  const isAnswered = !!userAnswer;
  const isCorrect = userAnswer?.isCorrect;

  return (
    <div className="flex-1 min-w-0 flex flex-col gap-4 p-2 sm:p-4 lg:p-6 overflow-y-auto max-h-[calc(100vh-4.5rem)]">
      {/* Question Card */}
      <div className="clay-card-shadow bg-white dark:bg-[#151b26] rounded-3xl p-5 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 transition-all">
        {/* Header Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2.5 pb-4 border-b border-slate-100 dark:border-slate-800/80">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60">
              {question.chapterName}
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              第 {currentIndex + 1} / {totalFiltered} 题
            </span>
            <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300">
              {question.type}
            </span>
            <span className="px-2 py-0.5 rounded-full text-xs font-mono text-slate-400">
              {question.score} 分
            </span>
          </div>

          <div className="flex items-center gap-2">
            {mode === 'wrong' && onRemoveFromWrong && (
              <button
                onClick={() => onRemoveFromWrong(question.id)}
                className="clay-button-shadow clay-squash px-2.5 py-1 rounded-xl text-xs text-rose-600 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 transition-all font-semibold"
                title="移出错题本"
              >
                ✓ 掌握并移出
              </button>
            )}

            <button
              onClick={() => onToggleStar(question.id)}
              className={`clay-button-shadow clay-squash p-2 rounded-xl border transition-all flex items-center gap-1 text-xs font-semibold ${
                isStarred
                  ? 'bg-amber-50 dark:bg-amber-950/50 text-amber-600 border-amber-300 dark:border-amber-700'
                  : 'bg-white dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700'
              }`}
              title="收藏题目"
            >
              <Star className={`w-3.5 h-3.5 ${isStarred ? 'fill-amber-500 text-amber-500' : ''}`} />
              <span className="hidden sm:inline">{isStarred ? '已收藏' : '收藏'}</span>
            </button>

            <button
              onClick={handleCopyStem}
              className="clay-button-shadow clay-squash p-2 rounded-xl bg-white dark:bg-slate-800 text-slate-500 hover:text-blue-600 border border-slate-200 dark:border-slate-700 transition-all"
              title="复制题干"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Question Stem */}
        <div className="py-5 text-sm sm:text-base font-medium leading-relaxed text-slate-800 dark:text-slate-100">
          <MathText content={question.stem} />
        </div>

        {/* Question Images */}
        {question.images && question.images.length > 0 && (
          <div className="flex flex-wrap gap-3 pb-5">
            {question.images.map((img, idx) => (
              <div
                key={idx}
                className="relative group rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 clay-badge-shadow bg-slate-50 dark:bg-slate-900 cursor-pointer max-w-full"
                onClick={() => setZoomImg(img)}
              >
                <img
                  src={img}
                  alt={`题目附图 ${idx + 1}`}
                  className="max-h-56 object-contain rounded-xl p-2 hover:opacity-95 transition-all"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1">
                  <Maximize2 className="w-4 h-4" />
                  <span>点击放大查看</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Options Area (Choice / True-False) */}
        {['单选题', '多选题', '判断题'].includes(question.type) && (
          <div className="flex flex-col gap-2.5 pt-2">
            {question.options.map((opt) => {
              const label = opt.label;
              const isStdCorrect = (question.correctAnswer || '').toUpperCase().includes(label.toUpperCase());
              const isUserChosen = Array.isArray(userAnswer?.answer)
                ? userAnswer.answer.includes(label)
                : userAnswer?.answer === label;
              const isMultiSelected = selectedMulti.includes(label);

              // 视觉样式状态
              let buttonStyle = 'bg-slate-50 dark:bg-[#1a2232] text-slate-700 dark:text-slate-200 border-slate-200/80 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-[#222c40]';
              
              if (mode === 'read') {
                if (isStdCorrect) {
                  buttonStyle = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-400 dark:border-emerald-700 text-emerald-900 dark:text-emerald-200 font-bold';
                }
              } else if (isAnswered) {
                if (isStdCorrect) {
                  buttonStyle = 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 dark:border-emerald-600 text-emerald-900 dark:text-emerald-200 font-bold';
                } else if (isUserChosen && !isCorrect) {
                  buttonStyle = 'bg-rose-50 dark:bg-rose-950/40 border-rose-400 dark:border-rose-700 text-rose-800 dark:text-rose-300';
                }
              } else if (question.type === '多选题' && isMultiSelected) {
                buttonStyle = 'bg-blue-50 dark:bg-blue-950/50 border-blue-500 text-blue-900 dark:text-blue-200 font-bold';
              }

              return (
                <button
                  key={label}
                  onClick={() => {
                    if (question.type === '多选题') {
                      setSelectedMulti((prev) =>
                        prev.includes(label) ? prev.filter((x) => x !== label) : [...prev, label]
                      );
                    } else {
                      handleSingleSelect(label);
                    }
                  }}
                  disabled={mode === 'read' || isAnswered}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl clay-button-shadow clay-squash border transition-all flex items-start gap-3.5 ${buttonStyle}`}
                >
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold font-mono flex-shrink-0 ${
                    mode === 'read' && isStdCorrect
                      ? 'bg-emerald-600 text-white'
                      : (isAnswered && isStdCorrect
                        ? 'bg-emerald-600 text-white'
                        : (isAnswered && isUserChosen && !isCorrect
                          ? 'bg-rose-500 text-white'
                          : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700'))
                  }`}>
                    {label}
                  </span>
                  <div className="flex-1 text-xs sm:text-sm pt-0.5 leading-relaxed">
                    <MathText content={opt.text} />
                  </div>
                  {mode === 'read' && isStdCorrect && (
                    <span className="text-emerald-600 font-bold text-xs flex-shrink-0">✓ 标准正确答案</span>
                  )}
                  {isAnswered && isStdCorrect && (
                    <span className="text-emerald-600 font-bold text-xs flex-shrink-0">✓ 标答</span>
                  )}
                </button>
              );
            })}

            {/* 多选题提交按钮 */}
            {question.type === '多选题' && mode !== 'read' && !isAnswered && (
              <div className="pt-2">
                <button
                  onClick={handleMultiSubmit}
                  disabled={selectedMulti.length === 0}
                  className="clay-button-shadow clay-squash px-5 py-2.5 rounded-2xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 transition-all"
                >
                  确认提交所选选项 ({selectedMulti.join(', ') || '未选'})
                </button>
              </div>
            )}
          </div>
        )}

        {/* Fill-in-the-Blank Inputs */}
        {question.type === '填空题' && (
          <div className="flex flex-col gap-3 pt-3">
            <span className="text-xs font-bold text-slate-500">
              请填写各空答案（支持保留小数、百分数容差比对）：
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {blankInputs.map((val, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-slate-500 w-16 flex-shrink-0">
                    第 {idx + 1} 空：
                  </span>
                  <input
                    type="text"
                    value={val}
                    onChange={(e) => {
                      const newInputs = [...blankInputs];
                      newInputs[idx] = e.target.value;
                      setBlankInputs(newInputs);
                    }}
                    placeholder={`输入第 ${idx + 1} 空数值或文字`}
                    className="clay-inset-groove bg-slate-50 dark:bg-[#101622] rounded-xl px-3 py-2 text-xs sm:text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800 dark:text-slate-100 font-mono"
                  />
                </div>
              ))}
            </div>

            {/* Actions for Blank */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handleBlankSubmit}
                className="clay-button-shadow clay-squash px-5 py-2 rounded-2xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition-all"
              >
                ✓ 提交判分
              </button>
              <button
                onClick={handleRevealAnswer}
                className="clay-button-shadow clay-squash px-4 py-2 rounded-2xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-all flex items-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>显示参考答案并回填</span>
              </button>
            </div>
          </div>
        )}

        {/* Answer Feedback & Analysis Panel */}
        {revealed && (
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-tr from-slate-50 to-blue-50/30 dark:from-[#192233] dark:to-[#161c28] border border-blue-200/80 dark:border-blue-900/60 clay-card-shadow animate-fade-in">
            <div className="flex items-center justify-between pb-2 border-b border-blue-100 dark:border-blue-900/40">
              <div className="flex items-center gap-2">
                <span className="text-base">🎯</span>
                <span className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-100">
                  标准答案与核心解析
                </span>
              </div>
              {isAnswered && (
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                  isCorrect
                    ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                    : 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                }`}>
                  {isCorrect ? '✓ 作答正确 (+10分)' : '✗ 作答错误 (已入错题本)'}
                </span>
              )}
            </div>

            <div className="pt-3 flex flex-col gap-2.5">
              <div className="flex items-baseline gap-2">
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                  【标准正确答案】：
                </span>
                <span className="text-sm font-bold text-emerald-800 dark:text-emerald-300 font-mono bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-lg border border-emerald-200 dark:border-emerald-800">
                  {question.correctAnswer}
                </span>
              </div>

              {question.analysis && (
                <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                  <span className="font-bold text-slate-700 dark:text-slate-200">【试题考点解析】：</span>
                  <MathText content={question.analysis} />
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation Toolbar */}
      <div className="flex items-center justify-between gap-3 pt-1">
        <button
          onClick={onPrev}
          disabled={currentIndex <= 0}
          className="clay-button-shadow clay-squash px-4 py-2.5 rounded-2xl text-xs font-bold bg-white dark:bg-[#151b26] text-slate-700 dark:text-slate-300 hover:bg-slate-50 border border-slate-200/80 dark:border-slate-800 disabled:opacity-30 transition-all flex items-center gap-1.5"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>上一题</span>
        </button>

        {/* Quick Question Jump Pill */}
        <button
          onClick={() => setJumpDrawerOpen(!jumpDrawerOpen)}
          className="clay-badge-shadow px-3.5 py-2 rounded-2xl text-xs font-semibold bg-white dark:bg-[#151b26] text-slate-600 dark:text-slate-300 hover:text-blue-600 border border-slate-200/80 dark:border-slate-800 flex items-center gap-1.5 transition-all"
        >
          <span>📑 题号跳转 ({currentIndex + 1}/{totalFiltered})</span>
        </button>

        <button
          onClick={onNext}
          disabled={currentIndex >= totalFiltered - 1}
          className="clay-button-shadow clay-squash px-4 py-2.5 rounded-2xl text-xs font-bold bg-white dark:bg-[#151b26] text-slate-700 dark:text-slate-300 hover:bg-slate-50 border border-slate-200/80 dark:border-slate-800 disabled:opacity-30 transition-all flex items-center gap-1.5"
        >
          <span>下一题</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Quick Jump Drawer */}
      {jumpDrawerOpen && (
        <div className="clay-card-shadow bg-white dark:bg-[#151b26] rounded-2xl p-4 border border-slate-200 dark:border-slate-800 animate-fade-in">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">快速定位题目</span>
            <span className="text-[11px] text-slate-400">点击题号立即切换</span>
          </div>
          <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto p-1">
            {allQuestions.map((q, idx) => {
              const isCurr = idx === currentIndex;
              const isWrong = wrongQuestionIds.includes(q.id);
              return (
                <button
                  key={q.id}
                  onClick={() => {
                    onJumpToIndex(idx);
                    setJumpDrawerOpen(false);
                  }}
                  className={`w-7 h-7 rounded-lg text-xs font-bold font-mono transition-all ${
                    isCurr
                      ? 'bg-blue-600 text-white ring-2 ring-blue-400'
                      : (isWrong
                        ? 'bg-rose-100 dark:bg-rose-950/60 text-rose-600 border border-rose-300'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200')
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {zoomImg && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setZoomImg(null)}
        >
          <img
            src={zoomImg}
            alt="放大查看"
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};
