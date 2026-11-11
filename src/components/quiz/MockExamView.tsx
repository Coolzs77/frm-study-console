import React, { useState } from 'react';
import { Award, RotateCcw, CheckCircle2, XCircle, ArrowRight, Eye } from 'lucide-react';
import { Question } from '../../types';
import { QuestionCanvas } from './QuestionCanvas';

interface MockExamViewProps {
  questions: Question[];
  examIndex: number;
  onSelectExamIndex: (idx: number) => void;
  examAnswers: Record<string, { answer: string | string[]; isCorrect: boolean }>;
  onExamAnswer: (qId: string, answer: string | string[], isCorrect: boolean) => void;
  onRestartExam: () => void;
  isSubmitted: boolean;
  score: number;
  timeSpentSec: number;
  onToggleStar: (qId: string) => void;
  starredQuestionIds: string[];
}

export const MockExamView: React.FC<MockExamViewProps> = ({
  questions,
  examIndex,
  onSelectExamIndex,
  examAnswers,
  onExamAnswer,
  onRestartExam,
  isSubmitted,
  score,
  timeSpentSec,
  onToggleStar,
  starredQuestionIds,
}) => {
  const [showResultModal, setShowResultModal] = useState(false);

  React.useEffect(() => {
    if (isSubmitted) {
      setShowResultModal(true);
    }
  }, [isSubmitted]);

  const currentQ = questions[examIndex];
  if (!currentQ) return null;

  const answeredCount = Object.keys(examAnswers).length;

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}分${s < 10 ? '0' : ''}${s}秒`;
  };

  const getRankBadge = (sc: number) => {
    if (sc >= 90) return { label: '优秀 (≥90)', color: 'bg-emerald-100 text-emerald-800 border-emerald-300' };
    if (sc >= 80) return { label: '良好 (≥80)', color: 'bg-blue-100 text-blue-800 border-blue-300' };
    if (sc >= 60) return { label: '合格 (≥60)', color: 'bg-amber-100 text-amber-800 border-amber-300' };
    return { label: '待提高 (<60)', color: 'bg-rose-100 text-rose-800 border-rose-300' };
  };

  return (
    <div className="flex-1 min-w-0 flex flex-col gap-3">
      {/* 10-Question Progress Bar Bubbles */}
      <div className="bg-white dark:bg-[#151b26] p-3 rounded-2xl clay-card-shadow border border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between gap-2 overflow-x-auto">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <span className="text-xs font-bold text-slate-500 mr-1 hidden sm:inline">答题卡:</span>
          {questions.map((q, idx) => {
            const isCurr = idx === examIndex;
            const ans = examAnswers[q.id];
            const isAnswered = !!ans;
            const isCorr = ans?.isCorrect;

            let bubbleColor = 'bg-slate-100 dark:bg-slate-800 text-slate-500';
            if (isSubmitted) {
              bubbleColor = isCorr 
                ? 'bg-emerald-500 text-white' 
                : 'bg-rose-500 text-white';
            } else if (isAnswered) {
              bubbleColor = 'bg-blue-600 text-white clay-badge-shadow';
            }

            return (
              <button
                key={q.id}
                onClick={() => onSelectExamIndex(idx)}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl text-xs font-mono font-bold clay-squash transition-all flex items-center justify-center ${bubbleColor} ${
                  isCurr ? 'ring-2 ring-indigo-500 ring-offset-2 dark:ring-offset-[#151b26] scale-105' : ''
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs text-slate-400 font-mono">
            进度: <strong>{answeredCount}</strong> / 10
          </span>
          {isSubmitted && (
            <button
              onClick={() => setShowResultModal(true)}
              className="clay-button-shadow clay-squash px-3 py-1 rounded-xl text-xs font-bold bg-amber-500 text-white"
            >
              成绩单
            </button>
          )}
        </div>
      </div>

      {/* Main Canvas for Current Question */}
      <QuestionCanvas
        question={currentQ}
        currentIndex={examIndex}
        totalFiltered={10}
        mode={isSubmitted ? 'read' : 'exam'}
        isStarred={starredQuestionIds.includes(currentQ.id)}
        onToggleStar={onToggleStar}
        onPrev={() => onSelectExamIndex(Math.max(0, examIndex - 1))}
        onNext={() => onSelectExamIndex(Math.min(9, examIndex + 1))}
        userAnswer={examAnswers[currentQ.id]}
        onAnswerSubmit={onExamAnswer}
        onJumpToIndex={onSelectExamIndex}
        allQuestions={questions}
        wrongQuestionIds={isSubmitted ? questions.filter(q => !examAnswers[q.id]?.isCorrect).map(q => q.id) : []}
      />

      {/* Final Score Report Modal */}
      {showResultModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="clay-card-shadow bg-white dark:bg-[#151b26] rounded-3xl p-6 sm:p-8 max-w-lg w-full border border-slate-200 dark:border-slate-800 animate-fade-in flex flex-col gap-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <Award className="w-6 h-6 text-amber-500" />
                <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">
                  模拟考成绩报告
                </h3>
              </div>
              <button
                onClick={() => setShowResultModal(false)}
                className="text-slate-400 hover:text-slate-600 text-sm"
              >
                ✕
              </button>
            </div>

            {/* Score Ring / Number */}
            <div className="flex flex-col items-center justify-center py-4 bg-slate-50 dark:bg-[#1c2333] rounded-2xl border border-slate-200/60 dark:border-slate-800/60">
              <span className="text-xs font-semibold text-slate-400">总分</span>
              <div className="flex items-baseline gap-1 my-1">
                <span className={`text-5xl font-black font-mono ${
                  score >= 80 ? 'text-emerald-600' : (score >= 60 ? 'text-blue-600' : 'text-rose-600')
                }`}>
                  {score}
                </span>
                <span className="text-slate-400 font-bold">/ 100 分</span>
              </div>
              <div className={`mt-2 px-3 py-1 rounded-full text-xs font-bold border ${getRankBadge(score).color}`}>
                {getRankBadge(score).label}
              </div>
              <span className="text-[11px] text-slate-400 mt-2">用时：{formatTime(timeSpentSec)}</span>
            </div>

            {/* Question Breakdown List */}
            <div className="flex flex-col gap-2 max-h-52 overflow-y-auto pr-1">
              {questions.map((q, idx) => {
                const ans = examAnswers[q.id];
                const isCorr = ans?.isCorrect;
                return (
                  <div
                    key={q.id}
                    onClick={() => {
                      onSelectExamIndex(idx);
                      setShowResultModal(false);
                    }}
                    className={`p-2.5 rounded-xl border text-xs flex items-center justify-between cursor-pointer transition-all ${
                      isCorr
                        ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/40 text-emerald-800 dark:text-emerald-300'
                        : 'bg-rose-50/60 dark:bg-rose-950/20 border-rose-200 dark:border-rose-900/40 text-rose-800 dark:text-rose-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      {isCorr ? <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" /> : <XCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />}
                      <span className="font-bold font-mono">第 {idx + 1} 题</span>
                      <span className="truncate text-slate-600 dark:text-slate-400">{q.stem.slice(0, 30)}...</span>
                    </div>
                    <span className="font-bold flex-shrink-0">{isCorr ? '+10 分' : '0 分'}</span>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setShowResultModal(false)}
                className="flex-1 py-2.5 rounded-2xl text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 transition-all flex items-center justify-center gap-1.5"
              >
                <Eye className="w-4 h-4" />
                <span>查看题目</span>
              </button>
              <button
                onClick={() => {
                  setShowResultModal(false);
                  onRestartExam();
                }}
                className="flex-1 py-2.5 rounded-2xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                <span>重新抽题</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
