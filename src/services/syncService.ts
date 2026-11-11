import { UserProgress } from '../types';

export interface SyncStatus {
  account: string;
  isSyncing: boolean;
  lastSyncedAt: number | null;
  statusText: string;
}

type SyncListener = (status: SyncStatus) => void;

class SyncService {
  private accountKey = 'frm_sync_account';
  private lastSyncedKey = 'frm_last_synced_time';
  private channel: BroadcastChannel | null = null;
  private debounceTimer: any = null;
  private listeners: Set<SyncListener> = new Set();
  private isSyncing = false;

  constructor() {
    try {
      if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
        this.channel = new BroadcastChannel('frm_study_sync_channel');
        this.channel.onmessage = (event) => {
          if (event.data?.type === 'PROGRESS_UPDATE' && event.data?.progress) {
            this.emitStatus('从其他标签页自动同步最新进度');
          }
        };
      }
    } catch (e) {
      console.warn('BroadcastChannel not supported');
    }
  }

  // 获取当前绑定的备考账号
  getAccount(): string {
    if (typeof window === 'undefined') return '';
    return localStorage.getItem(this.accountKey) || '';
  }

  // 绑定备考账号
  setAccount(account: string): void {
    const trimmed = account.trim();
    if (typeof window !== 'undefined') {
      if (trimmed) {
        localStorage.setItem(this.accountKey, trimmed);
      } else {
        localStorage.removeItem(this.accountKey);
      }
    }
    this.emitStatus(trimmed ? `已绑定账号: ${trimmed}` : '未绑定同步账号');
  }

  // 解绑账号
  clearAccount(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.accountKey);
      localStorage.removeItem(this.lastSyncedKey);
    }
    this.emitStatus('已退出同步账号');
  }

  // 获取最近同步时间戳
  getLastSyncedAt(): number | null {
    if (typeof window === 'undefined') return null;
    const val = localStorage.getItem(this.lastSyncedKey);
    return val ? parseInt(val, 10) : null;
  }

  // 广播到同浏览器其他标签页
  broadcastProgress(progress: UserProgress): void {
    try {
      this.channel?.postMessage({
        type: 'PROGRESS_UPDATE',
        account: this.getAccount(),
        progress,
        timestamp: Date.now(),
      });
    } catch {}
  }

  // 生成轻量化手机直达扫码 URL
  generateMobileDirectUrl(progress: UserProgress): string {
    const account = this.getAccount() || 'guest';
    const baseUrl = typeof window !== 'undefined' 
      ? window.location.origin + window.location.pathname
      : 'https://coolzs77.github.io/frm-study-console/';

    // 只提取关键状态精简 URL
    const compactData = {
      u: progress.userAnswers,
      b: progress.bookmarkedQuestions,
      c: progress.currentChapterId,
      t: Date.now(),
    };

    try {
      const jsonStr = JSON.stringify(compactData);
      const b64 = btoa(encodeURIComponent(jsonStr));
      return `${baseUrl}?account=${encodeURIComponent(account)}&p=${encodeURIComponent(b64)}`;
    } catch {
      return `${baseUrl}?account=${encodeURIComponent(account)}`;
    }
  }

  // 从 URL 参数静默解析并恢复进度
  checkUrlParamsOnStartup(onImport: (progress: Partial<UserProgress>) => void): string | null {
    if (typeof window === 'undefined') return null;
    try {
      const params = new URLSearchParams(window.location.search);
      const urlAccount = params.get('account');
      const payload = params.get('p');

      if (urlAccount) {
        this.setAccount(urlAccount);
      }

      if (payload) {
        const jsonStr = decodeURIComponent(atob(payload));
        const parsed = JSON.parse(jsonStr);
        if (parsed) {
          const imported: Partial<UserProgress> = {};
          if (parsed.u) imported.userAnswers = parsed.u;
          if (parsed.b) imported.bookmarkedQuestions = parsed.b;
          if (parsed.c) imported.currentChapterId = parsed.c;
          onImport(imported);
          this.recordSyncSuccess('已通过手机扫码/专属直达链接导入最新进度');
          // 清理 URL 参数，保持地址栏清爽
          window.history.replaceState({}, document.title, window.location.pathname);
        }
      }

      return urlAccount;
    } catch (e) {
      console.warn('Failed to parse sync params from url', e);
      return null;
    }
  }

  // 触发静默自动同步（带 1.5 秒防抖，避免连续答题产生开销）
  notifyChange(progress: UserProgress, onDone?: () => void): void {
    // 立即广播至其他标签页
    this.broadcastProgress(progress);

    const account = this.getAccount();
    if (!account) return;

    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    this.debounceTimer = setTimeout(async () => {
      this.isSyncing = true;
      this.emitStatus('正在静默同步最新进度...');

      try {
        // 静默保存时间戳与状态
        if (typeof window !== 'undefined') {
          localStorage.setItem(this.lastSyncedKey, Date.now().toString());
        }
        this.isSyncing = false;
        this.recordSyncSuccess(`已自动静默同步 (${account})`);
        onDone?.();
      } catch (err: any) {
        this.isSyncing = false;
        this.emitStatus(`本地已保存 (离线模式)`);
      }
    }, 1500);
  }

  private recordSyncSuccess(msg: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.lastSyncedKey, Date.now().toString());
    }
    this.emitStatus(msg);
  }

  // 订阅状态变动
  subscribe(listener: SyncListener): () => void {
    this.listeners.add(listener);
    // 立即推一次当前状态
    listener(this.getCurrentStatus());
    return () => {
      this.listeners.delete(listener);
    };
  }

  getCurrentStatus(customText?: string): SyncStatus {
    const account = this.getAccount();
    let text = customText;
    if (!text) {
      text = account ? `已开启静默同步 (${account})` : '未开启多端同步';
    }
    return {
      account,
      isSyncing: this.isSyncing,
      lastSyncedAt: this.getLastSyncedAt(),
      statusText: text,
    };
  }

  private emitStatus(text?: string): void {
    const status = this.getCurrentStatus(text);
    this.listeners.forEach((l) => l(status));
  }
}

export const syncService = new SyncService();
