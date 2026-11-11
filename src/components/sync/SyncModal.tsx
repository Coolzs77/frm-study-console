import React, { useState, useEffect } from 'react';
import { 
  Smartphone, 
  Copy, 
  Check, 
  QrCode, 
  UserCheck, 
  RefreshCw,
  LogOut,
  X,
  ExternalLink,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { UserProgress } from '../../types';
import { syncService, SyncStatus } from '../../services/syncService';

interface SyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
  onImportProgress: (imported: Partial<UserProgress>) => void;
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
  const [actionNotice, setActionNotice] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      const currentAccount = syncService.getAccount();
      setAccountInput(currentAccount);
      setSyncStatus(syncService.getCurrentStatus());
    }
  }, [isOpen]);

  useEffect(() => {
    const unsub = syncService.subscribe((status) => {
      setSyncStatus(status);
    });
    return unsub;
  }, []);

  if (!isOpen) return null;

  const directUrl = syncService.generateMobileDirectUrl(progress);

  // 绑定账号并开启静默自动同步
  const handleSaveAccount = (e: React.FormEvent) => {
    e.preventDefault();
    const val = accountInput.trim();
    if (!val) {
      setActionNotice('请输入您的自定义备考账号（如姓名拼音或学号）！');
      return;
    }
    syncService.setAccount(val);
    syncService.notifyChange(progress);
    setActionNotice(`✓ 已成功绑定账号【${val}】，后台静默自动同步已开启！`);
    setTimeout(() => setActionNotice(null), 3000);
  };

  // 解除绑定
  const handleClearAccount = () => {
    syncService.clearAccount();
    setAccountInput('');
    setActionNotice('已关闭静默同步，当前仅保留本地离线进度。');
    setTimeout(() => setActionNotice(null), 3000);
  };

  // 复制手机专属直达链接
  const handleCopyLink = () => {
    navigator.clipboard.writeText(directUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  // 格式化时间戳
  const formatTime = (ts: number | null) => {
    if (!ts) return '尚未同步';
    const now = Date.now();
    const diffSec = Math.floor((now - ts) / 1000);
    if (diffSec < 60) return '刚刚';
    if (diffSec < 3600) return `${Math.floor(diffSec / 60)} 分钟前`;
    const d = new Date(ts);
    return `${d.getMonth() + 1}/${d.getDate()} ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-lg rounded-3xl bg-white dark:bg-[#151b26] border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 顶部标题栏 */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
              <Smartphone className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-slate-100 text-base">
                多端备考极速同步
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                支持电脑、平板与手机无缝衔接，无需手动导出导入
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 主体内容 */}
        <div className="p-6 flex flex-col gap-5 max-h-[80vh] overflow-y-auto">
          {/* 操作提示气泡 */}
          {actionNotice && (
            <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-900/80 text-blue-800 dark:text-blue-200 text-xs flex items-center gap-2 animate-fade-in">
              <Sparkles className="w-4 h-4 text-blue-600 flex-shrink-0" />
              <span>{actionNotice}</span>
            </div>
          )}

          {/* 模块 1：自定义备考账号设置 */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#192231] border border-slate-200/80 dark:border-slate-800 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm flex items-center gap-1.5">
                <UserCheck className="w-4 h-4 text-emerald-500" />
                自定义备考账号
              </span>
              {syncStatus.account && (
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  已连接
                </span>
              )}
            </div>

            <form onSubmit={handleSaveAccount} className="flex gap-2">
              <input
                type="text"
                value={accountInput}
                onChange={(e) => setAccountInput(e.target.value)}
                placeholder="输入你的账号（如：coolzs 或 学号）"
                className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-white dark:bg-[#121722] border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-sm flex items-center gap-1 flex-shrink-0 active:scale-95"
              >
                <span>开启静默同步</span>
              </button>
            </form>

            <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 pt-0.5">
              <span>状态：<strong>{syncStatus.statusText}</strong></span>
              <span>最近同步：{formatTime(syncStatus.lastSyncedAt)}</span>
            </div>

            {syncStatus.account && (
              <div className="flex justify-end pt-1">
                <button
                  type="button"
                  onClick={handleClearAccount}
                  className="text-[11px] text-slate-400 hover:text-rose-500 transition-colors flex items-center gap-1"
                >
                  <LogOut className="w-3 h-3" />
                  <span>退出该账号</span>
                </button>
              </div>
            )}
          </div>

          {/* 模块 2：手机扫码一秒直达 */}
          <div className="p-4 rounded-2xl bg-white dark:bg-[#192231] border border-slate-200/80 dark:border-slate-800 flex flex-col gap-3">
            <span className="font-bold text-slate-800 dark:text-slate-200 text-xs sm:text-sm flex items-center gap-1.5">
              <QrCode className="w-4 h-4 text-blue-500" />
              手机扫码直达备考
            </span>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-1">
              {/* 二维码图片展示 */}
              <div className="p-2 rounded-2xl bg-white dark:bg-white border border-slate-200 shadow-sm flex-shrink-0">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&margin=4&data=${encodeURIComponent(directUrl)}`}
                  alt="手机同步二维码"
                  className="w-32 h-32 rounded-xl block"
                />
              </div>

              {/* 扫码指引与一键复制 */}
              <div className="flex-1 flex flex-col justify-center gap-2 text-xs text-slate-600 dark:text-slate-300">
                <p className="leading-relaxed">
                  📱 用手机微信或浏览器扫一扫左侧二维码，即可<strong>直接在手机上打开并自动同步</strong>当前的所有答题进度与收藏！
                </p>
                <div className="pt-1 flex flex-col gap-1.5">
                  <button
                    onClick={handleCopyLink}
                    className="w-full py-2 px-3 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center justify-center gap-1.5 transition-all active:scale-98"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-500" />
                        <span className="text-emerald-600 dark:text-emerald-400">已复制专属链接到剪贴板</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-500" />
                        <span>复制手机专属直达链接</span>
                      </>
                    )}
                  </button>
                  <span className="text-[10px] text-slate-400 text-center">
                    发送至微信文件传输助手，随时随地刷题
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 模块 3：静默同步机制说明 */}
          <div className="p-3 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 text-xs text-emerald-900 dark:text-emerald-200 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong>静默无感自动保护</strong>：
              绑定账号后，无论做题、标记重点还是做错题复盘，系统均在后台静默自动保存，同一浏览器多个窗口自动实时同步，彻底告别繁琐的手动导出导入！
            </div>
          </div>
        </div>

        {/* 底部按钮栏 */}
        <div className="px-6 py-3.5 border-t border-slate-100 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-900/30 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl text-xs font-bold bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-colors"
          >
            完成并关闭
          </button>
        </div>
      </div>
    </div>
  );
};
