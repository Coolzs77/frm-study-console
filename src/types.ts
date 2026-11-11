export type QuestionType = '填空题' | '单选题' | '多选题' | '判断题';

export interface OptionItem {
  label: string; // 'A', 'B', 'C', 'D' or '对', '错'
  text: string;
  isCorrect?: boolean;
}

export interface Question {
  id: string;
  rawId: string;
  chapterId: string;
  chapterName: string;
  index: number;
  displayNum: string;
  type: QuestionType;
  score: number;
  stem: string; // 包含 LaTeX 与文字
  images: string[];
  options: OptionItem[];
  correctAnswer: string;
  correctAnswerList: string[];
  analysis: string;
  slideRef: string;
}

export interface Chapter {
  id: string;
  name: string;
  questionCount: number;
  icon: string;
}

export interface FormulaItem {
  name: string;
  tex: string;
  desc: string;
}

export interface SlideNote {
  title: string;
  coreConcepts: string[];
  formulas: FormulaItem[];
  pitfalls: string[];
}

export type StudyMode = 'read' | 'practice' | 'exam' | 'wrong' | 'star';

export interface UserProgress {
  answers: Record<string, { answer: string | string[]; isCorrect: boolean }>;
  wrongIds: string[];
  starredIds: string[];
  mockScores: { id: string; date: string; score: number; durationSec: number }[];
}

export interface SyncPayload {
  version: string;
  appName: string;
  timestamp: number;
  data: UserProgress;
}
