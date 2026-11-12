import React, { useState, useEffect, useMemo } from 'react';
import {
  Smartphone,
  Copy,
  Check,
  QrCode,
  UserCheck,
  LogOut,
  X,
  UploadCloud,
  DownloadCloud,
  Loader2,
  AlertCircle
} from 'lucide-react';
import QRCode from 'qrcode';
import { UserProgress } from '../../types';
import { syncService, SyncStatus } from '../../services/syncService';

interface SyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
  onImportProgress: (imported: Partial<UserProgress>, options?: { keepModalOpen?: boolean }) => void;
}

export const SyncModal: React.FC<SyncModalProps> = ({
  isOpen,
  onClose,
  progress,
  onImportProgress,
}) => {
  const [accountInput, setAccountInput] = useState('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [syncStatus, setSyncStatus] = useState<SyncStatus>(() => syncService.getCurrentStatus());
  const [notice, setNotice] = useState<{ type: 'ok' | 'err'; text: string } | null>(null);
  const [pendingAction, setPendingAction] = useState<'backup' | 'pull' | null>(null);
  const [qrDataUrl, setQrDataUrl] = useState<string>('');
  const [qrFailed, setQrFailed] = useState<boolean>(false);

  const directUrl = useMemo(() => {
    if (!isOpen) return '';
    return syncService.generateMobileDirectUrl(progress);
  }, [isOpen, progress, syncStatus.account]);

  useEffect(() => {
    if (isOpen) {
      setAccountInput(syncService.getAccount());
      setSyncStatus(syncService.getCurrentStatus());
      setNotice(null);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !directUrl) return;
    let active = true;
    setQrFailed(false);
    QRCode.toDataURL(directUrl, {
      width: 160,
      margin: 1,
      errorCorrectionLevel: 'M',
      color: { dark: '#0f172a', light: '#ffffff' },
    })
      .then((url) => {
        if (active) setQrDataUrl(url);
      })
      .catch(() => {
        if (active) setQrFailed(true);
      });
    return () => {
      active = false;
    };
  }, [isOpen, directUrl]);

  useEffect(() => {
    return syncService.subscribe((status) => {
      setSyncStatus(status);
    });
  }, []);

  if (!isOpen) return null;

  const handleBackupToCloud = async () => {
    const val = accountInput.trim();
    if (!val) {
      setNotice({ type: 'err', text: '请先输入自定义备考账号（如：zsz）' });
      return;
    }
    setPendingAction('backup');
    setNotice(null);
    const res = await syncService.backupToCloud(val, progress);
    setPendingAction(null);
    if (res.ok) {
      const answered = Object.keys(progress.answers || {}).length;
      setNotice({
        type: 'ok',
        text: `已备份到云端（${answered} 条作答、${progress.starredIds.length} 条收藏），已开启静默自动同步与备份`,
      });
    } else {
      setNotice({ type: 'err', text: `备份失败：${res.error || '请检查网络后重试'}` });
    }
  };

  const handleSyncFromCloud = async () => {
    const val = accountInput.trim();
    if (!val) {
      setNotice({ type: 'err', text: '请先输入自定义备考账号（如：zsz）' });
      return;
    }
    setPendingAction('pull');
    setNotice(null);
    const res = await syncService.syncFromCloud(val);
    setPendingAction(null);
    if (!res.ok) {
      setNotice({ type: 'err', text: `同步失败：${res.error || '请检查网络后重试'}` });
      return;
    }
    if (!res.found || !res.progress) {
      setNotice({
        type: 'err',
        text: `云端暂无账号「${val}」的记录，请先在另一台设备点击「备份到云端」`,
      });
      return;
    }
    onImportProgress(res.progress, { keepModalOpen: true });
    const answered = Object.keys(res.progress.answers || {}).length;
    const starred = (res.progress.starredIds || []).length;
    setNotice({
      type: 'ok',
      text: `已从云端同步进度（${answered} 条作答、${starred} 条收藏），已开启静默自动同步与备份`,
    });
  };

  const handleClearAccount = () => {
    syncService.clearAccount();
    setAccountInput('');
    setNotice({ type: 'ok', text: '已退出账号并关闭自动同步' });
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(directUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const formatTime = (ts: number | null) => {
    if (!ts) return '尚未同步';
    const diffSec = Math.floor((Date.now() - ts) / 1000);
    if (diffSec < 60) return '刚刚';
    if (diffSec < 3600) return `${Math.floor(diffSec / 60)} 分钟前`;
    const d = new Date(ts);
    return `${d.getMonth() + 1}/${d.getDate()} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg rounded-3xl bg-white dark:bg-[#151b26] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center">
              <Smartphone className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
              多端云端同步
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 flex flex-col gap-5 max-h-[80vh] overflow-y-auto">
          {notice && (
            <div
              className={`p-3 rounded-2xl border text-xs flex items-center gap-2 animate-fade-in ${
                notice.type === 'ok'
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900/80 text-emerald-800 dark:text-emerald-200'
                  : 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900/80 text-rose-800 dark:text-rose-200'
              }`}
            >
              {notice.type === 'ok' ? (
                <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
              )}
              <span>{notice.text}</span>
            </div>
          )}

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#192231] border border-slate-200/80 dark:border-slate-800 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-emerald-500" />
                自定义备考账号
              </span>
              {syncStatus.account && syncStatus.autoSyncEnabled && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  自动同步已开启
                </span>
              )}
            </div>

            <input
              type="text"
              value={accountInput}
              onChange={(e) => setAccountInput(e.target.value)}
              placeholder="输入你的账号（如：zsz）"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl bg-white dark:bg-[#121722] border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
            />

            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                disabled={pendingAction !== null}
                onClick={handleBackupToCloud}
                className="py-2.5 px-3 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white transition-all shadow-sm flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
              >
                {pendingAction === 'backup' ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <UploadCloud className="w-3.5 h-3.5" />
                )}
                <span>备份到云端</span>
              </button>

              <button
                type="button"
                disabled={pendingAction !== null}
                onClick={handleSyncFromCloud}
                className="py-2.5 px-3 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white transition-all shadow-sm flex items-center justify-center gap-1.5 active:scale-95 cursor-pointer"
              >
                {pendingAction === 'pull' ? (
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <DownloadCloud className="w-3.5 h-3.5" />
                )}
                <span>从云端同步</span>
              </button>
            </div>

            <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-0.5">
              <span>状态：<strong>{syncStatus.statusText}</strong></span>
              <span>最近：{formatTime(syncStatus.lastSyncedAt)}</span>
            </div>

            {syncStatus.account && (
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleClearAccount}
                  className="text-[11px] text-slate-400 hover:text-rose-500 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <LogOut className="w-3 h-3" />
                  <span>退出该账号</span>
                </button>
              </div>
            )}
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-[#192231] border border-slate-200/80 dark:border-slate-800 flex flex-col gap-3">
            <span className="font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm flex items-center gap-1.5">
              <QrCode className="w-4 h-4 text-blue-500" />
              手机扫码直达
            </span>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="p-2 rounded-2xl bg-white border border-slate-200 shadow-sm flex-shrink-0 w-36 h-36 flex items-center justify-center">
                {qrDataUrl ? (
                  <img
                    src={qrDataUrl}
                    alt="手机同步二维码"
                    className="w-32 h-32 rounded-xl block"
                  />
                ) : qrFailed ? (
                  <span className="text-[11px] text-slate-400 text-center px-2">请复制右侧链接打开</span>
                ) : (
                  <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
                )}
              </div>

              <div className="flex-1 w-full flex flex-col justify-center gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                <p className="leading-relaxed">
                  扫码或打开链接即可直接带入当前账号与学习进度：
                </p>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="w-full py-2 px-3 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  {copiedLink ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600 dark:text-emerald-400">已复制链接</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>复制手机直达链接</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-3.5 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors cursor-pointer"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  );
};
