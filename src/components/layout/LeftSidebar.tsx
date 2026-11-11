import React from 'react';
import { 
  PanelLeftClose, 
  PanelLeftOpen, 
  BookOpen, 
  CheckCircle2, 
  Award, 
  AlertCircle, 
  Star, 
  Layers, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { Chapter, QuestionType, StudyMode } from '../../types';

interface LeftSidebarProps {
  collapsed: boolean;
  onToggleCollapse: () => void;
  currentMode: StudyMode;
  onSelectMode: (mode: StudyMode) => void;
  wrongCount: number;
  starCount: number;
  memorizedCount?: number;
  memorizedIds?: string[];
  allQuestions?: { id: string; chapterId: string }[];
  selectedType: string;
  onSelectType: (type: string) => void;
  chapters: Chapter[];
  selectedChapterId: string | null;
  onSelectChapter: (chapterId: string | null) => void;
  onResetProgress: () => void;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  collapsed,
  onToggleCollapse,
  currentMode,
  onSelectMode,
  wrongCount,
  starCount,
  memorizedCount = 0,
  memorizedIds = [],
  allQuestions = [],
  selectedType,
  onSelectType,
  chapters,
  selectedChapterId,
  onSelectChapter,
  onResetProgress,
}) => {
  const modes: { id: StudyMode; label: string; icon: React.ReactNode; badge?: number; color: string }[] = [
    { id: 'read', label: '速记背题', icon: <BookOpen className="w-4 h-4" />, color: 'text-blue-600 dark:text-blue-400' },
    { id: 'practice', label: '交互刷题', icon: <CheckCircle2 className="w-4 h-4" />, color: 'text-emerald-600 dark:text-emerald-400' },
    { id: 'exam', label: '10题模拟考', icon: <Award className="w-4 h-4" />, color: 'text-amber-600 dark:text-amber-400' },
    { id: 'wrong', label: '错题专攻', icon: <AlertCircle className="w-4 h-4" />, badge: wrongCount, color: 'text-rose-600 dark:text-rose-400' },
    { id: 'star', label: '重点收藏', icon: <Star className="w-4 h-4" />, badge: starCount, color: 'text-amber-500' },
    { id: 'memorized', label: '已背会', icon: <CheckCircle2 className="w-4 h-4" />, badge: memorizedCount, color: 'text-emerald-500' },
  ];

  const types: { id: string; label: string }[] = [
    { id: 'all', label: '全部题型' },
    { id: '填空题', label: '填空题' },
    { id: '单选题', label: '单选题' },
    { id: '多选题', label: '多选题' },
    { id: '判断题', label: '判断题' },
  ];

  if (collapsed) {
    return (
      <aside className="w-14 bg-white dark:bg-[#151b26] border-r border-slate-200/80 dark:border-slate-800/80 p-2 flex flex-col items-center gap-3 clay-card-shadow transition-all duration-300 flex-shrink-0">
        <button
          onClick={onToggleCollapse}
          className="p-2 rounded-xl text-slate-500 hover:text-blue-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title="展开侧边栏"
        >
          <PanelLeftOpen className="w-5 h-5" />
        </button>

        <div className="w-8 h-px bg-slate-200 dark:bg-slate-800" />

        {/* Mini mode icons */}
        <div className="flex flex-col gap-2 w-full items-center">
          {modes.map((m) => (
            <button
              key={m.id}
              onClick={() => onSelectMode(m.id)}
              className={`p-2.5 rounded-xl transition-all relative ${
                currentMode === m.id
                  ? 'bg-blue-600 text-white clay-button-shadow'
                  : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title={m.label}
            >
              {m.icon}
              {m.badge !== undefined && m.badge > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold">
                  {m.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-72 bg-white dark:bg-[#151b26] border-r border-slate-200/80 dark:border-slate-800/80 p-4 flex flex-col gap-5 clay-card-shadow transition-all duration-300 flex-shrink-0 overflow-y-auto max-h-[calc(100vh-4.5rem)]">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-blue-600" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
            学习模式与章节
          </span>
        </div>
        <button
          onClick={onToggleCollapse}
          className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          title="折叠侧边栏"
        >
          <PanelLeftClose className="w-4 h-4" />
        </button>
      </div>

      {/* Mode Selector */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[11px] font-semibold text-slate-400 px-1">核心复习模式</span>
        <div className="grid grid-cols-1 gap-1.5">
          {modes.map((m) => {
            const isActive = currentMode === m.id;
            return (
              <button
                key={m.id}
                onClick={() => onSelectMode(m.id)}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl text-xs font-semibold clay-squash transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white clay-button-shadow shadow-md'
                    : 'bg-slate-50 dark:bg-[#1c2333] text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#252f44]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className={isActive ? 'text-white' : m.color}>{m.icon}</span>
                  <span>{m.label}</span>
                </div>
                {m.badge !== undefined && m.badge > 0 && (
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : 'bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400'
                    }`}
                  >
                    {m.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Question Type Filter Pills */}
      <div className="flex flex-col gap-1.5">
        <span className="text-[11px] font-semibold text-slate-400 px-1">题型快速过滤</span>
        <div className="flex flex-wrap gap-1.5">
          {types.map((t) => {
            const isSelected = selectedType === t.id;
            return (
              <button
                key={t.id}
                onClick={() => onSelectType(t.id)}
                className={`px-2.5 py-1 rounded-xl text-xs font-medium clay-squash transition-all ${
                  isSelected
                    ? 'bg-blue-600 text-white clay-badge-shadow'
                    : 'bg-slate-100 dark:bg-[#1c2333] text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-[#263147]'
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Chapter Navigation List */}
      <div className="flex flex-col gap-2 flex-1">
        <div className="flex items-center justify-between px-1">
          <span className="text-[11px] font-semibold text-slate-400">章节大纲 (共 8 节)</span>
          <button
            onClick={() => onSelectChapter(null)}
            className={`text-[11px] font-medium transition-colors ${
              selectedChapterId === null ? 'text-blue-600 font-bold' : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            全部章节
          </button>
        </div>

        <div className="flex flex-col gap-2">
          {chapters.map((c) => {
            const isSelected = selectedChapterId === c.id;
            const cleanName = c.name.replace(/测验/g, '').trim();
            const chQuestions = allQuestions.filter((q) => q.chapterId === c.id);
            const totalCount = chQuestions.length || c.questionCount;
            const memCount = chQuestions.filter((q) => memorizedIds.includes(q.id)).length;
            const pct = totalCount > 0 ? Math.round((memCount / totalCount) * 100) : 0;

            return (
              <button
                key={c.id}
                onClick={() => onSelectChapter(isSelected ? null : c.id)}
                className={`text-left p-2.5 rounded-2xl clay-squash transition-all flex flex-col gap-1.5 text-xs ${
                  isSelected
                    ? 'bg-blue-50 dark:bg-blue-950/40 border border-blue-300 dark:border-blue-700 font-semibold text-blue-900 dark:text-blue-200'
                    : 'bg-slate-50/60 dark:bg-[#1a2232]/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-[#222c40]'
                }`}
              >
                <div className="flex items-center justify-between gap-1 w-full">
                  <div className="flex items-center gap-1.5 truncate">
                    <span className="text-sm">{c.icon || '📌'}</span>
                    <span className="truncate font-medium">{cleanName}</span>
                  </div>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono font-bold flex-shrink-0 ${
                    pct === 100
                      ? 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300'
                      : 'bg-white dark:bg-[#151b26] text-slate-500 dark:text-slate-400'
                  }`}>
                    {memCount}/{totalCount}
                  </span>
                </div>
                {/* 章节背会进度条 */}
                <div className="w-full h-1.5 rounded-full bg-slate-200/80 dark:bg-slate-700/80 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      pct === 100
                        ? 'bg-emerald-500'
                        : pct > 0
                        ? 'bg-blue-500'
                        : 'bg-transparent'
                    }`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer Reset */}
      <div className="pt-2 border-t border-slate-200/80 dark:border-slate-800/80">
        <button
          onClick={onResetProgress}
          className="w-full flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs text-slate-400 hover:text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>重置进度</span>
        </button>
      </div>
    </aside>
  );
};
