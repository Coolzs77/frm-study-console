import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { Header } from './components/layout/Header';
import { LeftSidebar } from './components/layout/LeftSidebar';
import { RightSidebar } from './components/layout/RightSidebar';
import { QuestionCanvas } from './components/quiz/QuestionCanvas';
import { MockExamView } from './components/quiz/MockExamView';
import { SyncModal } from './components/sync/SyncModal';
import { QUESTIONS, CHAPTERS, SLIDE_NOTES, FORMULA_DICT, METADATA } from './data/quizData';
import { Question, StudyMode, UserProgress } from './types';
import { syncService, computeProgressDigest } from './services/syncService';

export const App: React.FC = () => {
  // Theme state with URL search param override
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlTheme = params.get('theme');
      if (urlTheme === 'dark') return true;
      if (urlTheme === 'light') return false;
      const saved = localStorage.getItem('frm_theme');
      return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('frm_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('frm_theme', 'light');
    }
  }, [isDark]);

  // Sidebar collapse
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(() => {
    return window.innerWidth < 1024;
  });

  // Filter & Mode state with URL search param override
  const [currentMode, setCurrentMode] = useState<StudyMode>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const m = params.get('mode') as StudyMode;
      if (m && ['read', 'practice', 'mock', 'wrong', 'fav', 'memorized'].includes(m)) {
        return m;
      }
    } catch {}
    return 'read';
  });
  const [selectedChapterId, setSelectedChapterId] = useState<string | null>(null);
  const [selectedType, setSelectedType] = useState<string>('all');
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [bodyImagesReady, setBodyImagesReady] = useState<boolean>(false);

  const handleBodyImagesSettled = useCallback(() => {
    setBodyImagesReady(true);
  }, []);

  // Sync modal state with URL search param override
  const [isSyncModalOpen, setIsSyncModalOpen] = useState<boolean>(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get('sync') === '1' || params.get('sync') === 'true';
    } catch {
      return false;
    }
  });

  // User persistent progress
  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem('frm_user_progress');
      if (saved) {
        const parsed = JSON.parse(saved);
        return {
          answers: parsed.answers || {},
          wrongIds: parsed.wrongIds || [],
          starredIds: parsed.starredIds || [],
          memorizedIds: parsed.memorizedIds || [],
          mockScores: parsed.mockScores || [],
        };
      }
    } catch {}
    return {
      answers: {},
      wrongIds: [],
      starredIds: [],
      memorizedIds: [],
      mockScores: [],
    };
  });

  const mergeProgress = useCallback((prev: UserProgress, imported: Partial<UserProgress>): UserProgress => {
    const scoreMap = new Map(prev.mockScores.map((s) => [s.id, s]));
    (imported.mockScores || []).forEach((s) => scoreMap.set(s.id, s));

    const merged: UserProgress = {
      answers: { ...prev.answers, ...(imported.answers || {}) },
      wrongIds: Array.from(new Set([...prev.wrongIds, ...(imported.wrongIds || [])])),
      starredIds: Array.from(new Set([...prev.starredIds, ...(imported.starredIds || [])])),
      memorizedIds: Array.from(new Set([...(prev.memorizedIds || []), ...(imported.memorizedIds || [])])),
      mockScores: Array.from(scoreMap.values()),
    };
    return merged;
  }, []);

  const handleImportProgress = useCallback(
    (imported: Partial<UserProgress>, options?: { keepModalOpen?: boolean }) => {
      setProgress((prev) => {
        const next = mergeProgress(prev, imported);
        if (computeProgressDigest(next) === computeProgressDigest(prev)) {
          syncService.markSyncedDigest(next);
          return prev;
        }
        syncService.markSyncedDigest(next);
        return next;
      });
      if (!options?.keepModalOpen) {
        setIsSyncModalOpen(false);
      }
    },
    [mergeProgress]
  );

  useEffect(() => {
    syncService.checkUrlParamsOnStartup((imported) => {
      handleImportProgress(imported, { keepModalOpen: true });
    });

    syncService.setExternalProgressHandler((imported) => {
      handleImportProgress(imported, { keepModalOpen: true });
    });

    syncService.pullSilentlyIfEnabled(true).then((cloud) => {
      if (cloud) {
        handleImportProgress(cloud, { keepModalOpen: true });
      }
    });

    const onVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        syncService.pullSilentlyIfEnabled().then((cloud) => {
          if (cloud) {
            handleImportProgress(cloud, { keepModalOpen: true });
          }
        });
      }
    };
    document.addEventListener('visibilitychange', onVisibilityChange);

    return () => {
      syncService.setExternalProgressHandler(null);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [handleImportProgress]);

  useEffect(() => {
    try {
      localStorage.setItem('frm_user_progress', JSON.stringify(progress));
      syncService.notifyChange(progress);
    } catch {}
  }, [progress]);

  // 10-Question Random Mock Exam State
  const [exam, setExam] = useState<{
    isActive: boolean;
    questions: Question[];
    examIndex: number;
    answers: Record<string, { answer: string | string[]; isCorrect: boolean }>;
    isSubmitted: boolean;
    score: number;
    timeRemaining: number;
    timeSpentSec: number;
  }>({
    isActive: false,
    questions: [],
    examIndex: 0,
    answers: {},
    isSubmitted: false,
    score: 0,
    timeRemaining: 20 * 60,
    timeSpentSec: 0,
  });

  // Fisher-Yates shuffle to draw 10 random questions
  const startNewExam = useCallback(() => {
    const pool = [...QUESTIONS];
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }
    const picked = pool.slice(0, 10);
    setExam({
      isActive: true,
      questions: picked,
      examIndex: 0,
      answers: {},
      isSubmitted: false,
      score: 0,
      timeRemaining: 20 * 60,
      timeSpentSec: 0,
    });
    setCurrentMode('exam');
  }, []);

  // Exam Countdown Timer
  useEffect(() => {
    if (!exam.isActive || exam.isSubmitted) return;
    const interval = setInterval(() => {
      setExam((prev) => {
        if (prev.timeRemaining <= 1) {
          clearInterval(interval);
          // auto submit
          const totalScore = Object.values(prev.answers).filter((a) => a.isCorrect).length * 10;
          return {
            ...prev,
            timeRemaining: 0,
            isSubmitted: true,
            score: totalScore,
            timeSpentSec: 20 * 60 - prev.timeRemaining + 1,
          };
        }
        return {
          ...prev,
          timeRemaining: prev.timeRemaining - 1,
          timeSpentSec: prev.timeSpentSec + 1,
        };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [exam.isActive, exam.isSubmitted]);

  // Submit Exam
  const handleSubmitExam = useCallback(() => {
    if (exam.isSubmitted) return;
    const correctCount = Object.values(exam.answers).filter((a) => a.isCorrect).length;
    const finalScore = correctCount * 10;

    // Collect missed questions to wrongIds
    const missedIds = exam.questions
      .filter((q) => !exam.answers[q.id]?.isCorrect)
      .map((q) => q.id);

    setProgress((prev) => ({
      ...prev,
      wrongIds: Array.from(new Set([...prev.wrongIds, ...missedIds])),
      mockScores: [
        ...prev.mockScores,
        {
          id: `exam_${Date.now()}`,
          date: new Date().toLocaleString(),
          score: finalScore,
          durationSec: exam.timeSpentSec,
        },
      ],
    }));

    setExam((prev) => ({
      ...prev,
      isSubmitted: true,
      score: finalScore,
    }));
  }, [exam]);

  // Format timer text
  const examTimerText = useMemo(() => {
    const m = Math.floor(exam.timeRemaining / 60);
    const s = exam.timeRemaining % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }, [exam.timeRemaining]);

  // Handle Mode Change
  const handleSelectMode = (mode: StudyMode) => {
    if (mode === 'exam') {
      startNewExam();
    } else {
      if (exam.isActive) {
        setExam((prev) => ({ ...prev, isActive: false }));
      }
      setCurrentMode(mode);
      setCurrentIndex(0);
    }
  };

  // Filtered Questions list
  const filteredQuestions = useMemo(() => {
    if (currentMode === 'exam') {
      return exam.questions;
    }

    return QUESTIONS.filter((q) => {
      // Mode filters
      if (currentMode === 'wrong' && !progress.wrongIds.includes(q.id)) return false;
      if (currentMode === 'star' && !progress.starredIds.includes(q.id)) return false;
      if (currentMode === 'memorized' && !(progress.memorizedIds || []).includes(q.id)) return false;

      // Chapter filter
      if (selectedChapterId && q.chapterId !== selectedChapterId) return false;

      // Type filter
      if (selectedType !== 'all' && q.type !== selectedType) return false;

      // Search keyword filter
      if (searchKeyword.trim()) {
        const kw = searchKeyword.toLowerCase();
        const inStem = q.stem.toLowerCase().includes(kw);
        const inAnalysis = q.analysis.toLowerCase().includes(kw);
        const inOptions = q.options.some((o) => o.text.toLowerCase().includes(kw));
        if (!inStem && !inAnalysis && !inOptions) return false;
      }

      return true;
    });
  }, [currentMode, exam.questions, selectedChapterId, selectedType, searchKeyword, progress.wrongIds, progress.starredIds, progress.memorizedIds]);

  // Reset index when filter changes
  useEffect(() => {
    if (currentIndex >= filteredQuestions.length) {
      setCurrentIndex(0);
    }
  }, [filteredQuestions.length]);

  // Toggle Star
  const handleToggleStar = (qId: string) => {
    setProgress((prev) => {
      const exists = prev.starredIds.includes(qId);
      return {
        ...prev,
        starredIds: exists ? prev.starredIds.filter((id) => id !== qId) : [...prev.starredIds, qId],
      };
    });
  };

  // Toggle Memorized (✓ 已背会)
  const handleToggleMemorized = (qId: string) => {
    setProgress((prev) => {
      const currentList = prev.memorizedIds || [];
      const exists = currentList.includes(qId);
      return {
        ...prev,
        memorizedIds: exists ? currentList.filter((id) => id !== qId) : [...currentList, qId],
      };
    });
  };

  // Redo single question in practice mode
  const handleRedoQuestion = (qId: string) => {
    setProgress((prev) => {
      const newAnswers = { ...prev.answers };
      delete newAnswers[qId];
      return {
        ...prev,
        answers: newAnswers,
      };
    });
  };

  // Answer Submission in standard practice mode
  const handleAnswerSubmit = (qId: string, answer: string | string[], isCorrect: boolean) => {
    setProgress((prev) => {
      const newAnswers = { ...prev.answers, [qId]: { answer, isCorrect } };
      let newWrongs = [...prev.wrongIds];
      if (!isCorrect) {
        if (!newWrongs.includes(qId)) newWrongs.push(qId);
      } else {
        newWrongs = newWrongs.filter((id) => id !== qId);
      }
      return {
        ...prev,
        answers: newAnswers,
        wrongIds: newWrongs,
      };
    });
  };

  // Remove from wrong
  const handleRemoveFromWrong = (qId: string) => {
    setProgress((prev) => ({
      ...prev,
      wrongIds: prev.wrongIds.filter((id) => id !== qId),
    }));
  };

  // Reset progress
  const handleResetProgress = () => {
    if (window.confirm('确认清空所有答题记录、错题本与模拟考战绩？此操作无法撤销。')) {
      setProgress({
        answers: {},
        wrongIds: [],
        starredIds: [],
        memorizedIds: [],
        mockScores: [],
      });
      alert('已清空所有刷题记录，祝你高效复习！');
    }
  };

  // Current Question
  const currentQuestion = filteredQuestions[currentIndex] || filteredQuestions[0];
  const activeChapterId = currentQuestion?.chapterId || '2.1.4';

  return (
    <div className="min-h-screen bg-[#eef2f7] dark:bg-[#0b0f17] text-slate-800 dark:text-slate-100 flex flex-col font-sans antialiased w-full transition-colors duration-300">
      {/* Top Header */}
      <Header
        totalQuestions={QUESTIONS.length}
        totalImages={METADATA.totalImages}
        searchKeyword={searchKeyword}
        onSearchChange={setSearchKeyword}
        isDark={isDark}
        onToggleTheme={() => setIsDark((p) => !p)}
        onOpenSyncModal={() => setIsSyncModalOpen(true)}
        examIsActive={exam.isActive}
        examTimerText={examTimerText}
        examTimeRemaining={exam.timeRemaining}
        examTotalScore={exam.score}
        onSubmitExam={handleSubmitExam}
      />

      {/* Main Tri-Column Body */}
      <main className="flex-1 w-full flex overflow-hidden min-h-[calc(100vh-3.75rem)]">
        {/* Left Column: Chapters & Modes Navigation */}
        <LeftSidebar
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed((p) => !p)}
          currentMode={currentMode}
          onSelectMode={handleSelectMode}
          wrongCount={progress.wrongIds.length}
          starCount={progress.starredIds.length}
          memorizedCount={progress.memorizedIds?.length || 0}
          memorizedIds={progress.memorizedIds || []}
          allQuestions={QUESTIONS}
          selectedType={selectedType}
          onSelectType={setSelectedType}
          chapters={CHAPTERS}
          selectedChapterId={selectedChapterId}
          onSelectChapter={setSelectedChapterId}
          onResetProgress={handleResetProgress}
        />

        {/* Center Column: Questions & Canvas */}
        <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
          {currentMode === 'exam' ? (
            <MockExamView
              questions={exam.questions}
              examIndex={exam.examIndex}
              onSelectExamIndex={(idx) => setExam((prev) => ({ ...prev, examIndex: idx }))}
              examAnswers={exam.answers}
              onExamAnswer={(qId, ans, isCorr) =>
                setExam((prev) => ({
                  ...prev,
                  answers: { ...prev.answers, [qId]: { answer: ans, isCorrect: isCorr } },
                }))
              }
              onRestartExam={startNewExam}
              isSubmitted={exam.isSubmitted}
              score={exam.score}
              timeSpentSec={exam.timeSpentSec}
              onToggleStar={handleToggleStar}
              starredQuestionIds={progress.starredIds}
            />
          ) : filteredQuestions.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-16 h-16 rounded-3xl bg-slate-100 dark:bg-slate-800 text-slate-400 flex items-center justify-center text-2xl mb-4 clay-badge-shadow">
                📭
              </div>
              <h3 className="text-base font-bold text-slate-700 dark:text-slate-300">
                当前筛选条件下暂无题目
              </h3>
              <p className="text-xs text-slate-400 mt-1 max-w-sm">
                {currentMode === 'wrong'
                  ? '太棒了！错题本空空如也，说明你做过的题目全部正确！'
                  : currentMode === 'star'
                  ? '暂未收藏任何重点题目，可以在刷题时点击右上角“★ 收藏”标记难记题目。'
                  : '没有匹配到相关题目，请尝试清除搜索词或重置筛选条件。'}
              </p>
              <button
                onClick={() => {
                  setSelectedChapterId(null);
                  setSelectedType('all');
                  setSearchKeyword('');
                  setCurrentMode('read');
                }}
                className="clay-button-shadow clay-squash mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 text-white"
              >
                查看全部
              </button>
            </div>
          ) : (
            <QuestionCanvas
              question={currentQuestion}
              currentIndex={currentIndex}
              totalFiltered={filteredQuestions.length}
              mode={currentMode}
              isStarred={progress.starredIds.includes(currentQuestion.id)}
              onToggleStar={handleToggleStar}
              isMemorized={(progress.memorizedIds || []).includes(currentQuestion.id)}
              onToggleMemorized={handleToggleMemorized}
              memorizedQuestionIds={progress.memorizedIds || []}
              onPrev={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
              onNext={() => setCurrentIndex((prev) => Math.min(filteredQuestions.length - 1, prev + 1))}
              userAnswer={progress.answers[currentQuestion.id]}
              onAnswerSubmit={handleAnswerSubmit}
              onRedoQuestion={handleRedoQuestion}
              onJumpToIndex={setCurrentIndex}
              allQuestions={filteredQuestions}
              wrongQuestionIds={progress.wrongIds}
              onRemoveFromWrong={handleRemoveFromWrong}
              onBodyImagesSettled={handleBodyImagesSettled}
            />
          )}
        </div>

        {/* Right Column: Slides & Formulas Synergy */}
        <RightSidebar
          currentChapterId={activeChapterId}
          slideNotes={SLIDE_NOTES}
          formulaDict={FORMULA_DICT}
          bodyImagesReady={bodyImagesReady}
        />
      </main>

      {/* Multi-Device Cross-Platform Sync Modal */}
      <SyncModal
        isOpen={isSyncModalOpen}
        onClose={() => setIsSyncModalOpen(false)}
        progress={progress}
        onImportProgress={handleImportProgress}
      />
    </div>
  );
};
