import { UserProgress } from '../types';

export interface SyncStatus {
  account: string;
  autoSyncEnabled: boolean;
  isSyncing: boolean;
  lastSyncedAt: number | null;
  statusText: string;
}

export interface CloudSyncResult {
  ok: boolean;
  found?: boolean;
  progress?: Partial<UserProgress>;
  updatedAt?: number;
  error?: string;
}

type SyncListener = (status: SyncStatus) => void;

const TEXTDB_WRITE_URL = 'https://api.textdb.online/update/';
const TEXTDB_READ_ORIGIN = 'https://api.textdb.online/';
const CLOUD_NAMESPACE = 'frm-study-console-nwafu-v2:';

const sha256Hex = (asciiInput: string): string => {
  const bytes = new TextEncoder().encode(asciiInput);
  const words: number[] = [];
  for (let i = 0; i < bytes.length; i++) {
    words[i >> 2] = (words[i >> 2] || 0) | (bytes[i] << (24 - (i % 4) * 8));
  }
  const bitLen = bytes.length * 8;
  words[bitLen >> 5] = (words[bitLen >> 5] || 0) | (0x80 << (24 - (bitLen % 32)));
  words[(((bitLen + 64) >> 9) << 4) + 15] = bitLen;

  const K = [
    0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5,
    0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
    0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da,
    0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
    0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
    0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
    0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3,
    0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
  ];
  let H = [
    0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a,
    0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19,
  ];

  const rr = (n: number, c: number) => (n >>> c) | (n << (32 - c));
  const w = new Array<number>(64);

  for (let j = 0; j < words.length; j += 16) {
    for (let i = 0; i < 16; i++) w[i] = words[j + i] || 0;
    for (let i = 16; i < 64; i++) {
      const s0 = rr(w[i - 15], 7) ^ rr(w[i - 15], 18) ^ (w[i - 15] >>> 3);
      const s1 = rr(w[i - 2], 17) ^ rr(w[i - 2], 19) ^ (w[i - 2] >>> 10);
      w[i] = (w[i - 16] + s0 + w[i - 7] + s1) | 0;
    }

    let [a, b, c, d, e, f, g, h] = H;
    for (let i = 0; i < 64; i++) {
      const S1 = rr(e, 6) ^ rr(e, 11) ^ rr(e, 25);
      const ch = (e & f) ^ (~e & g);
      const temp1 = (h + S1 + ch + K[i] + w[i]) | 0;
      const S0 = rr(a, 2) ^ rr(a, 13) ^ rr(a, 22);
      const maj = (a & b) ^ (a & c) ^ (b & c);
      const temp2 = (S0 + maj) | 0;
      h = g; g = f; f = e; e = (d + temp1) | 0;
      d = c; c = b; b = a; a = (temp1 + temp2) | 0;
    }
    H = H.map((val, idx) => (val + [a, b, c, d, e, f, g, h][idx]) | 0);
  }

  return H.map((x) => (x >>> 0).toString(16).padStart(8, '0')).join('');
};

const encodeUtf8Base64 = (text: string): string => {
  const bytes = new TextEncoder().encode(text);
  let binary = '';
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
};

const decodeUtf8Base64 = (b64: string): string => {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  const decoded = new TextDecoder().decode(bytes);
  if (decoded.startsWith('%7B')) {
    return decodeURIComponent(decoded);
  }
  return decoded;
};

const normalizeProgressPayload = (raw: any): Partial<UserProgress> => {
  if (!raw || typeof raw !== 'object') return {};
  const result: Partial<UserProgress> = {};
  if (raw.answers && typeof raw.answers === 'object') result.answers = raw.answers;
  if (Array.isArray(raw.wrongIds)) result.wrongIds = raw.wrongIds;
  if (Array.isArray(raw.starredIds)) result.starredIds = raw.starredIds;
  if (Array.isArray(raw.memorizedIds)) result.memorizedIds = raw.memorizedIds;
  if (Array.isArray(raw.mockScores)) result.mockScores = raw.mockScores;
  return result;
};

export const computeProgressDigest = (progress: Partial<UserProgress>): string =>
  JSON.stringify({
    a: progress.answers || {},
    w: [...(progress.wrongIds || [])].sort(),
    s: [...(progress.starredIds || [])].sort(),
    m: [...(progress.memorizedIds || [])].sort(),
    k: (progress.mockScores || []).length,
  });

class SyncService {
  private accountKey = 'frm_sync_account';
  private autoSyncKey = 'frm_auto_sync_enabled';
  private lastSyncedKey = 'frm_last_synced_time';
  private channel: BroadcastChannel | null = null;
  private debounceTimer: ReturnType<typeof setTimeout> | null = null;
  private listeners: Set<SyncListener> = new Set();
  private isSyncing = false;
  private lastSyncedDigest = '';
  private lastPullTime = 0;
  private externalProgressHandler: ((imported: Partial<UserProgress>) => void) | null = null;

  constructor() {
    try {
      if (typeof window !== 'undefined' && 'BroadcastChannel' in window) {
        this.channel = new BroadcastChannel('frm_study_sync_channel');
        this.channel.onmessage = (event) => {
          if (event.data?.type === 'PROGRESS_UPDATE' && event.data?.progress) {
            this.externalProgressHandler?.(normalizeProgressPayload(event.data.progress));
            this.emitStatus('已与同设备其他标签页同步');
          }
        };
      }
    } catch {}
  }

  setExternalProgressHandler(handler: ((imported: Partial<UserProgress>) => void) | null): void {
    this.externalProgressHandler = handler;
  }

  getAccount(): string {
    if (typeof window === 'undefined') return '';
    return localStorage.getItem(this.accountKey) || '';
  }

  isAutoSyncEnabled(): boolean {
    if (typeof window === 'undefined') return false;
    return Boolean(this.getAccount()) && localStorage.getItem(this.autoSyncKey) === '1';
  }

  setAccount(account: string, enableAutoSync = false): void {
    const trimmed = account.trim();
    if (typeof window !== 'undefined') {
      if (trimmed) {
        localStorage.setItem(this.accountKey, trimmed);
        if (enableAutoSync) {
          localStorage.setItem(this.autoSyncKey, '1');
        }
      } else {
        localStorage.removeItem(this.accountKey);
        localStorage.removeItem(this.autoSyncKey);
      }
    }
    this.emitStatus();
  }

  clearAccount(): void {
    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
      this.debounceTimer = null;
    }
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.accountKey);
      localStorage.removeItem(this.autoSyncKey);
      localStorage.removeItem(this.lastSyncedKey);
    }
    this.lastSyncedDigest = '';
    this.emitStatus('已退出账号');
  }

  getLastSyncedAt(): number | null {
    if (typeof window === 'undefined') return null;
    const val = localStorage.getItem(this.lastSyncedKey);
    return val ? parseInt(val, 10) : null;
  }

  getCloudKey(account: string): string {
    const normalized = account.trim().toLowerCase();
    return `frm_${sha256Hex(CLOUD_NAMESPACE + normalized).slice(0, 28)}`;
  }

  markSyncedDigest(progress: Partial<UserProgress>): void {
    this.lastSyncedDigest = computeProgressDigest(progress);
  }

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

  async backupToCloud(account: string, progress: UserProgress): Promise<CloudSyncResult> {
    const acc = account.trim();
    if (!acc) {
      return { ok: false, error: '请先输入账号名' };
    }

    this.setAccount(acc, true);
    this.isSyncing = true;
    this.emitStatus('正在备份到云端...');

    const cloudKey = this.getCloudKey(acc);
    const updatedAt = Date.now();
    const payload = JSON.stringify({
      v: 2,
      account: acc.toLowerCase(),
      updatedAt,
      progress,
    });

    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 12000);

    try {
      const body = new URLSearchParams({ key: cloudKey, value: payload });
      const resp = await fetch(TEXTDB_WRITE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' },
        body: body.toString(),
        signal: ctrl.signal,
      });

      if (!resp.ok) {
        throw new Error(`HTTP ${resp.status}`);
      }
      const resJson = await resp.json();
      if (resJson?.status !== 1) {
        throw new Error(resJson?.error || '云端写入被拒绝');
      }

      this.lastSyncedDigest = computeProgressDigest(progress);
      this.isSyncing = false;
      this.recordSyncSuccess(`已备份到云端 (${acc})`);
      return { ok: true, updatedAt };
    } catch (err: any) {
      this.isSyncing = false;
      const msg = err?.name === 'AbortError' ? '连接云端超时' : (err?.message || '网络请求失败');
      this.emitStatus(`备份失败: ${msg}`);
      return { ok: false, error: msg };
    } finally {
      clearTimeout(timer);
    }
  }

  async syncFromCloud(account: string): Promise<CloudSyncResult> {
    const acc = account.trim();
    if (!acc) {
      return { ok: false, error: '请先输入账号名' };
    }

    this.setAccount(acc, true);
    this.isSyncing = true;
    this.emitStatus('正在从云端同步...');

    const cloudKey = this.getCloudKey(acc);
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 12000);

    try {
      const resp = await fetch(`${TEXTDB_READ_ORIGIN}${cloudKey}?_t=${Date.now()}`, {
        signal: ctrl.signal,
      });
      if (!resp.ok) {
        throw new Error(`HTTP ${resp.status}`);
      }
      const rawText = (await resp.text()).trim();
      this.lastPullTime = Date.now();

      if (!rawText) {
        this.isSyncing = false;
        this.emitStatus(`云端暂无「${acc}」的备份`);
        return { ok: true, found: false };
      }

      const parsed = JSON.parse(rawText);
      const progress = normalizeProgressPayload(parsed?.progress || parsed);
      this.lastSyncedDigest = computeProgressDigest(progress);
      this.isSyncing = false;
      this.recordSyncSuccess(`已从云端同步 (${acc})`);
      return {
        ok: true,
        found: true,
        progress,
        updatedAt: parsed?.updatedAt || null,
      };
    } catch (err: any) {
      this.isSyncing = false;
      const msg = err?.name === 'AbortError' ? '连接云端超时' : (err?.message || '拉取失败');
      this.emitStatus(`同步失败: ${msg}`);
      return { ok: false, error: msg };
    } finally {
      clearTimeout(timer);
    }
  }

  async pullSilentlyIfEnabled(force = false): Promise<Partial<UserProgress> | null> {
    const acc = this.getAccount();
    if (!acc || !this.isAutoSyncEnabled()) return null;
    if (!force && Date.now() - this.lastPullTime < 15000) return null;

    const res = await this.syncFromCloud(acc);
    if (res.ok && res.found && res.progress) {
      return res.progress;
    }
    return null;
  }

  generateMobileDirectUrl(progress: UserProgress): string {
    const account = this.getAccount() || 'guest';
    const baseUrl = typeof window !== 'undefined'
      ? window.location.origin + window.location.pathname
      : 'https://coolzs77.github.io/frm-study-console/';

    const fullCompact = {
      a: progress.answers,
      w: progress.wrongIds,
      s: progress.starredIds,
      m: progress.memorizedIds,
      t: Date.now(),
    };

    try {
      let b64 = encodeUtf8Base64(JSON.stringify(fullCompact));
      let url = `${baseUrl}?account=${encodeURIComponent(account)}&p=${encodeURIComponent(b64)}`;
      if (url.length > 2000) {
        const liteCompact = {
          w: progress.wrongIds,
          s: progress.starredIds,
          m: progress.memorizedIds,
          t: Date.now(),
        };
        b64 = encodeUtf8Base64(JSON.stringify(liteCompact));
        url = `${baseUrl}?account=${encodeURIComponent(account)}&p=${encodeURIComponent(b64)}`;
      }
      return url;
    } catch {
      return `${baseUrl}?account=${encodeURIComponent(account)}`;
    }
  }

  checkUrlParamsOnStartup(onImport: (progress: Partial<UserProgress>) => void): string | null {
    if (typeof window === 'undefined') return null;
    try {
      const params = new URLSearchParams(window.location.search);
      const urlAccount = params.get('account');
      const payload = params.get('p');

      if (urlAccount) {
        this.setAccount(urlAccount, true);
      }

      if (payload) {
        const jsonStr = decodeUtf8Base64(payload);
        const parsed = JSON.parse(jsonStr);
        if (parsed) {
          const imported: Partial<UserProgress> = {};
          if (parsed.a && typeof parsed.a === 'object') imported.answers = parsed.a;
          if (Array.isArray(parsed.w)) imported.wrongIds = parsed.w;
          if (Array.isArray(parsed.s)) imported.starredIds = parsed.s;
          if (Array.isArray(parsed.m)) imported.memorizedIds = parsed.m;
          this.lastSyncedDigest = computeProgressDigest(imported);
          onImport(imported);
          this.recordSyncSuccess('已通过直达链接恢复进度');
          window.history.replaceState({}, document.title, window.location.pathname);
        }
      }

      return urlAccount;
    } catch {
      return null;
    }
  }

  notifyChange(progress: UserProgress): void {
    this.broadcastProgress(progress);

    const account = this.getAccount();
    if (!account || !this.isAutoSyncEnabled()) return;

    const digest = computeProgressDigest(progress);
    if (digest === this.lastSyncedDigest) return;

    if (this.debounceTimer) {
      clearTimeout(this.debounceTimer);
    }

    this.debounceTimer = setTimeout(() => {
      this.backupToCloud(account, progress);
    }, 2500);
  }

  private recordSyncSuccess(msg: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.lastSyncedKey, Date.now().toString());
    }
    this.emitStatus(msg);
  }

  subscribe(listener: SyncListener): () => void {
    this.listeners.add(listener);
    listener(this.getCurrentStatus());
    return () => {
      this.listeners.delete(listener);
    };
  }

  getCurrentStatus(customText?: string): SyncStatus {
    const account = this.getAccount();
    const autoSyncEnabled = this.isAutoSyncEnabled();
    const text =
      customText ||
      (account
        ? autoSyncEnabled
          ? `自动同步已开启 (${account})`
          : `已填账号 (${account})，点击按钮开始同步`
        : '未开启多端同步');
    return {
      account,
      autoSyncEnabled,
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
