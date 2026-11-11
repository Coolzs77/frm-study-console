import React, { useState, useEffect } from 'react';
import { Moon, Sun, Maximize, RefreshCw, Search, Smartphone, X, BookOpen, Check } from 'lucide-react';
import { syncService, SyncStatus } from '../../services/syncService';

interface HeaderProps {
  totalQuestions: number;
  totalImages: number;
  searchKeyword: string;
  onSearchChange: (keyword: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenSyncModal: () => void;
  examIsActive: boolean;
  examTimerText: string;
  examTimeRemaining: number;
  examTotalScore: number;
  onSubmitExam: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  totalQuestions,
  totalImages,
  searchKeyword,
  onSearchChange,
  isDark,
  onToggleTheme,
  onOpenSyncModal,
  examIsActive,
  examTimerText,
  examTimeRemaining,
  onSubmitExam,
}) => {
  const [syncStatus, setSyncStatus] = useState<SyncStatus>(() => syncService.getCurrentStatus());

  useEffect(() => {
    const unsub = syncService.subscribe((status) => {
      setSyncStatus(status);
    });
    return unsub;
  }, []);

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#ffffff]/80 dark:bg-[#151b26]/80 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 px-4 lg:px-6 py-2.5 transition-colors">
      <div className="flex items-center justify-between gap-4">
        {/* Left: Brand & Info */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white flex items-center justify-center font-bold text-base clay-badge-shadow flex-shrink-0">
            🏛️
          </div>
          <h1 className="text-base lg:text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100">
            金融风险管理
          </h1>
        </div>

        {/* Center: Search & Status Badges */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Search Box */}
          <div className="clay-inset-groove bg-slate-100 dark:bg-[#0e131d] rounded-2xl px-3 py-1.5 flex items-center gap-2 w-64">
            <Search className="w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="搜索题干、公式或考点..."
              className="bg-transparent border-none text-xs w-full focus:outline-none text-slate-800 dark:text-slate-200 placeholder:text-slate-400"
            />
            {searchKeyword && (
              <button onClick={() => onSearchChange('')} className="text-slate-400 hover:text-slate-600">
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Stat Badges */}
          <div className="clay-badge-shadow bg-white dark:bg-[#1a2232] px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 text-slate-700 dark:text-slate-300">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>全库 <strong>{totalQuestions}</strong> 题</span>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <span>🖼️ <strong>{totalImages}</strong> 图</span>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          {/* Multi-Device Sync Button */}
          <button
            onClick={onOpenSyncModal}
            className={`clay-button-shadow clay-squash px-3 py-1.5 rounded-2xl text-xs font-bold flex items-center gap-1.5 shadow-md active:scale-95 transition-all ${
              syncStatus.account
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700'
                : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700'
            }`}
            title={syncStatus.statusText}
          >
            {syncStatus.account ? (
              <>
                <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                <span className="truncate max-w-[120px]">已同步 ({syncStatus.account})</span>
              </>
            ) : (
              <>
                <Smartphone className="w-3.5 h-3.5" />
                <span>多端同步</span>
              </>
            )}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={onToggleTheme}
            className="clay-button-shadow clay-squash p-2 rounded-2xl bg-white dark:bg-[#1a2232] text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-[#222c40] border border-slate-200/80 dark:border-slate-800 flex items-center justify-center transition-all"
            title="切换深浅主题"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          {/* Fullscreen */}
          <button
            onClick={handleToggleFullscreen}
            className="clay-button-shadow clay-squash p-2 rounded-2xl bg-white dark:bg-[#1a2232] text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-[#222c40] border border-slate-200/80 dark:border-slate-800 hidden sm:flex items-center justify-center transition-all"
            title="全屏模式"
          >
            <Maximize className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mock Exam Top Floating Bar */}
      {examIsActive && (
        <div className="mt-2.5 pt-2 border-t border-red-200 dark:border-red-900/50 flex flex-wrap items-center justify-between gap-3 animate-fade-in">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-500 text-white flex items-center gap-1 animate-pulse">
              10 题模拟考进行中
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              满分 100 分 · 每题 10 分
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className={`clay-inset-groove px-3 py-1 rounded-xl flex items-center gap-2 ${
              examTimeRemaining <= 300 ? 'bg-red-50 dark:bg-red-950/50 text-red-600 font-bold' : 'bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300'
            }`}>
              <span className="text-xs font-semibold">⏱️ 倒计时:</span>
              <span className="font-mono text-sm font-bold tracking-wider">{examTimerText}</span>
            </div>

            <button
              onClick={onSubmitExam}
              className="clay-button-shadow clay-squash px-4 py-1 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all"
            >
              交卷
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
