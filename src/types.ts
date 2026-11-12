export type QuestionType = '填空题' | '单选题' | '多选题' | '判断题';

export interface OptionItem {
  label: string; // 'A', 'B', 'C', 'D' or '对', '错'
  text: string;
  isCorrect?: boolean;
  html?: string;
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
  stemHtml?: string;
  stemImages: string[]; // 题干题目已知图（做题时展示）
  analysisImages: string[]; // 答案推导图（仅在查看题解时展示）
  images: string[]; // 全量附图集合
  options: OptionItem[];
  correctAnswer: string;
  correctAnswerList: string[];
  analysis: string;
  analysisHtml?: string;
  slideRef: string | { chapterTopic: string; slideDeck: string };
  studentAnswer?: string;
  studentScore?: number;
  isCorrect?: boolean;
}

export interface Chapter {
  id: string;
  name: string;
  questionCount: number;
  icon?: string;
  topic?: string;
  slide?: string;
  imagesCount?: number;
}

export interface FormulaItem {
  name: string;
  tex: string;
  desc?: string;
  usage?: string;
  category?: string;
}

export interface RealSlidePage {
  pageNumber: number;
  title: string;
  image: string; // slides/slide_xxx.png
  coreTakeaway?: string;
}

export interface KeySlidePage {
  pageNumber: number;
  title: string;
  description: string;
  coreTakeaway: string;
  imagePath?: string;
}

export interface KeySlideBookmark {
  pageNumber: number;
  label: string;
  description: string;
}

export interface SlideNote {
  title: string;
  pdfUrl?: string;
  pdfFileName?: string;
  totalPdfPages?: number;
  keyBookmarks?: KeySlideBookmark[];
  realSlides?: RealSlidePage[]; // 真实PPT高清原图幻灯片
  keyPages?: KeySlidePage[];
  coreConcepts: string[];
  formulas: FormulaItem[];
  pitfalls?: string[];
  examTips?: string;
}

export type StudyMode = 'read' | 'practice' | 'exam' | 'wrong' | 'star' | 'memorized';

export interface UserProgress {
  answers: Record<string, { answer: string | string[]; isCorrect: boolean }>;
  wrongIds: string[];
  starredIds: string[];
  memorizedIds: string[]; // 已背会题目ID列表 (✓ 标记)
  mockScores: { id: string; date: string; score: number; durationSec: number }[];
}

export interface SyncPayload {
  version: string;
  appName: string;
  timestamp: number;
  data: UserProgress;
}
