import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Copy, 
  Check, 
  Eye, 
  HelpCircle
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
  isMemorized?: boolean;
  onToggleMemorized?: (qId: string) => void;
  memorizedQuestionIds?: string[];
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
  isMemorized = false,
  onToggleMemorized,
  memorizedQuestionIds = [],
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

  // 当题目或模式切换时同步状态
  useEffect(() => {
    // 考试模式下题解默认锁定；读题模式或已有作答记录时展开题解；否则收起
    if (mode === 'exam') {
      setRevealed(false);
    } else if (mode === 'read' || !!userAnswer) {
      setRevealed(true);
    } else {
      setRevealed(false);
    }
    setSelectedMulti(Array.isArray(userAnswer?.answer) ? userAnswer.answer : []);
    
    // 初始化填空输入框
    const blankCount = Math.max(question.correctAnswerList?.length || 1, 1);
    const existing = Array.isArray(userAnswer?.answer) 
      ? userAnswer.answer 
      : (typeof userAnswer?.answer === 'string' ? [userAnswer.answer] : []);
    const initialBlanks = Array.from({ length: blankCount }, (_, i) => existing[i] || '');
    setBlankInputs(initialBlanks);
  }, [question.id, mode]);

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
    if (mode !== 'exam') {
      setRevealed(true);
    }
  };

  // 多选题确认
  const handleMultiSubmit = () => {
    if (mode === 'read' || selectedMulti.length === 0) return;
    const userStr = [...selectedMulti].sort().join('').toUpperCase();
    const correctStr = (question.correctAnswer || '').replace(/[^A-Za-z]/g, '').split('').sort().join('').toUpperCase();
    const isCorrect = userStr === correctStr;
    onAnswerSubmit(question.id, selectedMulti, isCorrect);
    if (mode !== 'exam') {
      setRevealed(true);
    }
  };

  // 单空比对：支持数值容差与百分号自动容错
  const checkSingleBlank = (uRaw: string, sRaw: string): boolean => {
    let u = uRaw.trim().replace(/％/g, '%').replace(/[，,]/g, '').toLowerCase();
    let s = sRaw.trim().replace(/％/g, '%').replace(/[，,]/g, '').toLowerCase();

    u = u.replace(/^第[一二三四五六七八九十\d]+空[：:]\s*/, '');
    s = s.replace(/^第[一二三四五六七八九十\d]+空[：:]\s*/, '');

    if (u === s) return true;

    const uNoPct = u.replace(/%/g, '').trim();
    const sNoPct = s.replace(/%/g, '').trim();
    if (uNoPct === sNoPct) return true;

    const numU = parseFloat(uNoPct);
    const numS = parseFloat(sNoPct);
    if (!isNaN(numU) && !isNaN(numS)) {
      return Math.abs(numU - numS) <= 0.01;
    }
    return false;
  };

  // 填空题数值容差比对（支持分号多标答容错）
  const checkBlankValue = (userVal: string, stdVal: string): boolean => {
    if (!userVal || !stdVal) return false;
    const alternatives = stdVal.split(/[;；/]/).map(x => x.trim()).filter(Boolean);
    if (alternatives.length === 0) return checkSingleBlank(userVal, stdVal);
    return alternatives.some(alt => checkSingleBlank(userVal, alt));
  };

  const handleBlankSubmit = () => {
    const isAllCorrect = question.correctAnswerList.every((std, idx) => {
      const userVal = blankInputs[idx] || '';
      return checkBlankValue(userVal, std);
    });
    onAnswerSubmit(question.id, blankInputs, isAllCorrect);
    if (mode !== 'exam') {
      setRevealed(true);
    }
  };

  const handleRevealAnswer = () => {
    // 自动回填标准答案主值
    setBlankInputs(question.correctAnswerList.map(s => {
      const clean = s.replace(/^第[一二三四五六七八九十\d]+空[：:]\s*/, '').trim();
      return clean.split(/[;；/]/)[0].trim();
    }));
    if (mode !== 'exam') {
      setRevealed(true);
    }
  };

  const isAnswered = !!userAnswer;
  const isCorrect = userAnswer?.isCorrect;
  const stemImgs = question.stemImages || [];
  const analysisImgs = question.analysisImages || [];

  return (
    <div className="flex-1 min-w-0 flex flex-col gap-3 p-2 sm:p-4 lg:p-6 overflow-y-auto max-h-[calc(100vh-4.5rem)]">
      {/* 1. 置顶导航与操作控制栏 (免翻找、免滚轮) */}
      <div className="sticky top-0 z-30 flex flex-wrap items-center justify-between gap-2 p-2.5 sm:p-3 rounded-2xl bg-white/95 dark:bg-[#151b26]/95 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 clay-badge-shadow transition-all">
        {/* 左侧：上一题 / 题号跳转下拉 / 下一题 */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button
            onClick={onPrev}
            disabled={currentIndex <= 0}
            className="clay-button-shadow clay-squash px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-[#1a2232] text-slate-700 dark:text-slate-300 hover:bg-slate-50 border border-slate-200 dark:border-slate-700 disabled:opacity-30 transition-all flex items-center gap-1"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>上一题</span>
          </button>

          <button
            onClick={() => setJumpDrawerOpen(!jumpDrawerOpen)}
            className="clay-button-shadow clay-squash px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-semibold bg-white dark:bg-[#1a2232] text-slate-700 dark:text-slate-300 hover:text-blue-600 border border-slate-200 dark:border-slate-700 flex items-center gap-1 transition-all"
          >
            <span>题号 {currentIndex + 1}/{totalFiltered} ▾</span>
          </button>

          <button
            onClick={onNext}
            disabled={currentIndex >= totalFiltered - 1}
            className="clay-button-shadow clay-squash px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold bg-white dark:bg-[#1a2232] text-slate-700 dark:text-slate-300 hover:bg-slate-50 border border-slate-200 dark:border-slate-700 disabled:opacity-30 transition-all flex items-center gap-1"
          >
            <span>下一题</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 右侧：代码随想录式题解按钮 / 对号背会 / 错题已掌握 / 收藏 / 复制 */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* 仿代码随想录独立题解开关 */}
          {mode !== 'exam' ? (
            <button
              onClick={() => setRevealed(!revealed)}
              className={`clay-button-shadow clay-squash px-3 py-1.5 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 ${
                revealed
                  ? 'bg-amber-500 text-white border-amber-600 shadow-md'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-500 shadow-md hover:from-blue-700 hover:to-indigo-700'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" />
              <span>{revealed ? '收起题解' : '查看题解'}</span>
            </button>
          ) : (
            <span className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700">
              🔒 考试锁定题解
            </span>
          )}

          {/* 对号背会标记按钮 (✓) */}
          {onToggleMemorized && (
            <button
              onClick={() => onToggleMemorized(question.id)}
              className={`clay-button-shadow clay-squash px-2.5 py-1.5 rounded-xl border transition-all flex items-center gap-1 text-xs font-bold ${
                isMemorized
                  ? 'bg-emerald-600 text-white border-emerald-700 shadow-md hover:bg-emerald-700'
                  : 'bg-white dark:bg-[#1a2232] text-slate-500 dark:text-slate-400 hover:text-emerald-600 border-slate-200 dark:border-slate-700'
              }`}
              title={isMemorized ? '点击取消背会标记' : '标记该题已背会'}
            >
              <Check className={`w-3.5 h-3.5 ${isMemorized ? 'stroke-[3]' : ''}`} />
              <span>{isMemorized ? '已背会' : '背会'}</span>
            </button>
          )}

          {mode === 'wrong' && onRemoveFromWrong && (
            <button
              onClick={() => onRemoveFromWrong(question.id)}
              className="clay-button-shadow clay-squash px-2.5 py-1.5 rounded-xl text-xs text-rose-600 bg-rose-50 dark:bg-rose-950/40 hover:bg-rose-100 transition-all font-semibold border border-rose-200 dark:border-rose-900"
            >
              已掌握
            </button>
          )}

          <button
            onClick={() => onToggleStar(question.id)}
            className={`clay-button-shadow clay-squash px-2.5 py-1.5 rounded-xl border transition-all flex items-center gap-1 text-xs font-semibold ${
              isStarred
                ? 'bg-amber-50 dark:bg-amber-950/50 text-amber-600 border-amber-300 dark:border-amber-700'
                : 'bg-white dark:bg-slate-800 text-slate-500 border-slate-200 dark:border-slate-700'
            }`}
          >
            <Star className={`w-3.5 h-3.5 ${isStarred ? 'fill-amber-500 text-amber-500' : ''}`} />
            <span>{isStarred ? '已收藏' : '收藏'}</span>
          </button>

          <button
            onClick={handleCopyStem}
            className="clay-button-shadow clay-squash px-2.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 text-slate-500 hover:text-blue-600 border border-slate-200 dark:border-slate-700 transition-all flex items-center gap-1 text-xs font-semibold"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? '已复制' : '复制'}</span>
          </button>
        </div>
      </div>

      {/* 题号快速定位网格抽屉 */}
      {jumpDrawerOpen && (
        <div className="clay-card-shadow bg-white dark:bg-[#151b26] rounded-2xl p-4 border border-slate-200 dark:border-slate-800 animate-fade-in">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">快速定位题目</span>
            <div className="flex items-center gap-3 text-[11px] text-slate-500">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>已背会</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-rose-500 inline-block"></span>错题</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-600 inline-block"></span>当前</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5 max-h-48 overflow-y-auto p-1">
            {allQuestions.map((q, idx) => {
              const isCurr = idx === currentIndex;
              const isWrong = wrongQuestionIds.includes(q.id);
              const isMem = memorizedQuestionIds.includes(q.id);
              return (
                <button
                  key={q.id}
                  onClick={() => {
                    onJumpToIndex(idx);
                    setJumpDrawerOpen(false);
                  }}
                  className={`w-7 h-7 rounded-lg text-xs font-bold font-mono transition-all relative ${
                    isCurr
                      ? 'bg-blue-600 text-white ring-2 ring-blue-400'
                      : (isWrong
                        ? 'bg-rose-100 dark:bg-rose-950/60 text-rose-600 border border-rose-300'
                        : (isMem
                          ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-400 font-bold'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'))
                  }`}
                >
                  {idx + 1}
                  {isMem && !isCurr && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-500 rounded-full text-[8px] text-white flex items-center justify-center font-bold">✓</span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. 题目主卡片 */}
      <div className="clay-card-shadow bg-white dark:bg-[#151b26] rounded-3xl p-5 sm:p-7 border border-slate-200/80 dark:border-slate-800/80 transition-all">
        {/* 顶部标签 */}
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
        </div>

        {/* 题干文本 */}
        <div className="py-4 text-sm sm:text-base font-medium leading-relaxed text-slate-800 dark:text-slate-100">
          <MathText content={question.stem} />
        </div>

        {/* 题干已知数据表图 (仅展示题干图，不展示答案推导图) */}
        {stemImgs.length > 0 && (
          <div className="flex flex-wrap gap-3 pb-4">
            {stemImgs.map((img, idx) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 clay-badge-shadow bg-slate-50 dark:bg-slate-900 cursor-zoom-in max-w-full hover:shadow-md transition-all"
                onClick={() => setZoomImg(img)}
                title="点击查看大图"
              >
                <img
                  src={img}
                  alt={`题干图 ${idx + 1}`}
                  className="max-h-60 object-contain rounded-xl p-2"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        )}

        {/* 选项区域 (单选 / 多选 / 判断) */}
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
              } else if (mode === 'exam') {
                if (isUserChosen || (question.type === '多选题' && isMultiSelected)) {
                  buttonStyle = 'bg-blue-50 dark:bg-blue-950/50 border-blue-500 text-blue-900 dark:text-blue-200 font-bold ring-2 ring-blue-400';
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
                  disabled={mode === 'read' || (isAnswered && mode !== 'exam')}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-2xl clay-button-shadow clay-squash border transition-all flex items-start gap-3.5 ${buttonStyle}`}
                >
                  <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold font-mono flex-shrink-0 ${
                    mode === 'read' && isStdCorrect
                      ? 'bg-emerald-600 text-white'
                      : (mode === 'exam' && (isUserChosen || isMultiSelected)
                        ? 'bg-blue-600 text-white'
                        : (isAnswered && mode !== 'exam' && isStdCorrect
                          ? 'bg-emerald-600 text-white'
                          : (isAnswered && mode !== 'exam' && isUserChosen && !isCorrect
                            ? 'bg-rose-500 text-white'
                            : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700')))
                  }`}>
                    {label}
                  </span>
                  <div className="flex-1 text-xs sm:text-sm pt-0.5 leading-relaxed">
                    <MathText content={opt.text} />
                  </div>
                  {mode === 'read' && isStdCorrect && (
                    <span className="text-emerald-600 font-bold text-xs flex-shrink-0">✓ 标答</span>
                  )}
                  {isAnswered && mode !== 'exam' && isStdCorrect && (
                    <span className="text-emerald-600 font-bold text-xs flex-shrink-0">✓ 标答</span>
                  )}
                </button>
              );
            })}

            {/* 多选题提交按钮 */}
            {question.type === '多选题' && mode !== 'read' && (!isAnswered || mode === 'exam') && (
              <div className="pt-2">
                <button
                  onClick={handleMultiSubmit}
                  disabled={selectedMulti.length === 0}
                  className="clay-button-shadow clay-squash px-5 py-2.5 rounded-2xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-40 transition-all"
                >
                  提交
                </button>
              </div>
            )}
          </div>
        )}

        {/* 填空题填写区域 */}
        {question.type === '填空题' && (
          <div className="flex flex-col gap-3 pt-3">
            <span className="text-xs font-semibold text-slate-500">
              请填写各空答案：
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {blankInputs.map((val, idx) => {
                const std = question.correctAnswerList?.[idx] || '';
                const isBlankCorrect = isAnswered && mode !== 'exam' && checkBlankValue(val, std);
                const isBlankWrong = isAnswered && mode !== 'exam' && !checkBlankValue(val, std);

                return (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500 w-16 flex-shrink-0">
                      第 {idx + 1} 空：
                    </span>
                    <div className="relative flex-1">
                      <input
                        type="text"
                        value={val}
                        disabled={mode === 'read' || (isAnswered && mode !== 'exam')}
                        onChange={(e) => {
                          const newInputs = [...blankInputs];
                          newInputs[idx] = e.target.value;
                          setBlankInputs(newInputs);
                        }}
                        placeholder={mode === 'read' ? std : `输入第 ${idx + 1} 空答案`}
                        className={`clay-inset-groove rounded-xl px-3 py-2 text-xs sm:text-sm w-full focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono transition-all ${
                          isBlankCorrect
                            ? 'bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-400 text-emerald-900 dark:text-emerald-200 font-bold'
                            : isBlankWrong
                            ? 'bg-rose-50 dark:bg-rose-950/40 border border-rose-400 text-rose-900 dark:text-rose-200'
                            : 'bg-slate-50 dark:bg-[#101622] text-slate-800 dark:text-slate-100'
                        }`}
                      />
                      {isBlankCorrect && (
                        <span className="absolute right-3 top-2 text-xs font-bold text-emerald-600">✓</span>
                      )}
                      {isBlankWrong && (
                        <span className="absolute right-3 top-2 text-xs font-bold text-rose-500">✗</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 填空题操作按钮 */}
            {mode !== 'read' && (!isAnswered || mode === 'exam') && (
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={handleBlankSubmit}
                  className="clay-button-shadow clay-squash px-5 py-2 rounded-2xl text-xs font-bold bg-blue-600 text-white hover:bg-blue-700 transition-all"
                >
                  提交
                </button>
                {mode !== 'exam' && (
                  <button
                    onClick={handleRevealAnswer}
                    className="clay-button-shadow clay-squash px-4 py-2 rounded-2xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 transition-all flex items-center gap-1.5"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>回填标答</span>
                  </button>
                )}
              </div>
            )}
          </div>
        )}

        {/* 3. 代码随想录式题解面板 (点击查看题解时展开) */}
        {revealed && (
          <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-tr from-slate-50 to-blue-50/30 dark:from-[#192233] dark:to-[#161c28] border border-blue-200/80 dark:border-blue-900/60 clay-card-shadow animate-fade-in flex flex-col gap-3.5">
            {/* 面板标题与正误反馈 */}
            <div className="flex items-center justify-between pb-2 border-b border-blue-100 dark:border-blue-900/40">
              <div className="flex items-center gap-2">
                <span className="text-base">💡</span>
                <span className="font-bold text-xs sm:text-sm text-slate-800 dark:text-slate-100">
                  标准答案与详细题解
                </span>
              </div>
              {isAnswered && mode !== 'exam' && (
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                  isCorrect
                    ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300'
                    : 'bg-rose-100 dark:bg-rose-950 text-rose-700 dark:text-rose-300'
                }`}>
                  {isCorrect ? '✓ 作答正确' : '✗ 作答错误'}
                </span>
              )}
            </div>

            {/* 1:1 绝对纯粹标准答案卡片 */}
            <div className="p-3 rounded-xl bg-emerald-50/80 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 flex flex-wrap items-baseline gap-2">
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 flex-shrink-0">
                正确答案：
              </span>
              <span className="text-sm font-bold text-emerald-900 dark:text-emerald-200 font-mono">
                {question.correctAnswer}
              </span>
            </div>

            {/* 答案解析步骤推导图 (彻底与题干分离，带步骤标识，无悬浮遮罩) */}
            {analysisImgs.length > 0 && (
              <div className="flex flex-col gap-2 pt-1">
                <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  📐 步骤演算与推导图解：
                </span>
                <div className="flex flex-wrap gap-3">
                  {analysisImgs.map((img, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 clay-badge-shadow bg-white dark:bg-slate-900 cursor-zoom-in max-w-full hover:shadow-md transition-all"
                      onClick={() => setZoomImg(img)}
                      title="点击查看大图"
                    >
                      <div className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-[11px] font-semibold text-slate-600 dark:text-slate-300 border-b border-slate-200 dark:border-slate-700">
                        推导步骤图 {idx + 1}
                      </div>
                      <img
                        src={img}
                        alt={`推导步骤图 ${idx + 1}`}
                        className="max-h-60 object-contain rounded-b-xl p-2"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* 详细文字原理解析 (含 KaTeX 公式) */}
            {question.analysis && (
              <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed pt-1">
                <span className="font-bold text-slate-700 dark:text-slate-200">【试题考点解析】：</span>
                <MathText content={question.analysis} />
              </div>
            )}

            {/* 课件索引速查 */}
            {question.slideRef && (
              <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5">
                <span>📚 对应课件：</span>
                <span className="font-medium text-slate-500 dark:text-slate-400">
                  {typeof question.slideRef === 'string'
                    ? question.slideRef
                    : `${question.slideRef.slideDeck} · ${question.slideRef.chapterTopic}`}
                </span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* 底部翻题栏 (备用快捷翻题) */}
      <div className="flex items-center justify-between gap-3 pt-1">
        <button
          onClick={onPrev}
          disabled={currentIndex <= 0}
          className="clay-button-shadow clay-squash px-4 py-2 rounded-2xl text-xs font-bold bg-white dark:bg-[#151b26] text-slate-700 dark:text-slate-300 hover:bg-slate-50 border border-slate-200/80 dark:border-slate-800 disabled:opacity-30 transition-all flex items-center gap-1.5"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>上一题</span>
        </button>

        <button
          onClick={onNext}
          disabled={currentIndex >= totalFiltered - 1}
          className="clay-button-shadow clay-squash px-4 py-2 rounded-2xl text-xs font-bold bg-white dark:bg-[#151b26] text-slate-700 dark:text-slate-300 hover:bg-slate-50 border border-slate-200/80 dark:border-slate-800 disabled:opacity-30 transition-all flex items-center gap-1.5"
        >
          <span>下一题</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* 全屏灯箱查看 (悬浮无遮罩，点击原画展示) */}
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
