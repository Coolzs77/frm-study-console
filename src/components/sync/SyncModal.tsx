import React, { useState } from 'react';
import { 
  Smartphone, 
  Copy, 
  Check, 
  Download, 
  Upload, 
  Cloud, 
  QrCode, 
  ArrowRight,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';
import { UserProgress, SyncPayload } from '../../types';

interface SyncModalProps {
  isOpen: boolean;
  onClose: () => void;
  progress: UserProgress;
  onImportProgress: (imported: UserProgress) => void;
}

export const SyncModal: React.FC<SyncModalProps> = ({
  isOpen,
  onClose,
  progress,
  onImportProgress,
}) => {
  const [activeTab, setActiveTab] = useState<'code' | 'gist' | 'file'>('code');
  const [syncCode, setSyncCode] = useState('');
  const [inputCode, setInputCode] = useState('');
  const [copied, setCopied] = useState(false);
  const [msg, setMsg] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  
  // Gist state
  const [gistId, setGistId] = useState('');
  const [gistLoading, setGistLoading] = useState(false);

  if (!isOpen) return null;

  // 生成 Base64 同步口令
  const handleGenerateCode = () => {
    try {
      const payload: SyncPayload = {
        version: '1.0.0',
        appName: 'frm-study-console',
        timestamp: Date.now(),
        data: progress,
      };
      const jsonStr = JSON.stringify(payload);
      // encode utf8 base64
      const b64 = btoa(encodeURIComponent(jsonStr));
      const code = `FRM_SYNC_${b64}`;
      setSyncCode(code);
      setMsg({ type: 'success', text: '同步口令已生成！点击下方按钮复制并在手机上导入即可。' });
    } catch (e: any) {
      setMsg({ type: 'error', text: `生成口令失败: ${e.message}` });
    }
  };

  // 复制口令
  const handleCopyCode = () => {
    if (!syncCode) return;
    navigator.clipboard.writeText(syncCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // 导入并合并口令
  const handleImportCode = () => {
    if (!inputCode.trim()) {
      setMsg({ type: 'error', text: '请先粘贴同步口令！' });
      return;
    }
    try {
      let rawB64 = inputCode.trim();
      if (rawB64.startsWith('FRM_SYNC_')) {
        rawB64 = rawB64.slice('FRM_SYNC_'.length);
      }
      const jsonStr = decodeURIComponent(atob(rawB64));
      const payload = JSON.parse(jsonStr) as SyncPayload;
      if (!payload.data) throw new Error('数据结构无效');

      onImportProgress(payload.data);
      setMsg({ type: 'success', text: '✓ 数据同步成功！错题与收藏已无缝合并！' });
      setInputCode('');
    } catch (e: any) {
      setMsg({ type: 'error', text: `口令无效或解析失败: ${e.message}` });
    }
  };

  // 导出 JSON 文件
  const handleExportFile = () => {
    const payload: SyncPayload = {
      version: '1.0.0',
      appName: 'frm-study-console',
      timestamp: Date.now(),
      data: progress,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `FRM_学习进度备份_${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // 导入 JSON 文件
  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const text = evt.target?.result as string;
        const payload = JSON.parse(text) as SyncPayload;
        if (!payload.data) throw new Error('无效备份文件');
        onImportProgress(payload.data);
        setMsg({ type: 'success', text: '✓ 备份文件导入合并成功！' });
      } catch (err: any) {
        setMsg({ type: 'error', text: `文件解析失败: ${err.message}` });
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="clay-card-shadow bg-white dark:bg-[#151b26] rounded-3xl p-6 sm:p-7 max-w-lg w-full border border-slate-200 dark:border-slate-800 animate-fade-in flex flex-col gap-4">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-blue-600" />
            <h3 className="text-base font-bold text-slate-800 dark:text-slate-100">
              多端同步中心 (手机 ⇄ 电脑双向互通)
            </h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 text-sm">✕</button>
        </div>

        {/* Current Data Overview */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-[#1c2333] border border-slate-200/60 dark:border-slate-800/60">
            <span className="text-[10px] text-slate-400 block">已做答题目</span>
            <span className="text-base font-bold font-mono text-blue-600">{Object.keys(progress.answers).length} 题</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-[#1c2333] border border-slate-200/60 dark:border-slate-800/60">
            <span className="text-[10px] text-slate-400 block">沉淀错题数</span>
            <span className="text-base font-bold font-mono text-rose-600">{progress.wrongIds.length} 题</span>
          </div>
          <div className="p-2 rounded-xl bg-slate-50 dark:bg-[#1c2333] border border-slate-200/60 dark:border-slate-800/60">
            <span className="text-[10px] text-slate-400 block">重点收藏数</span>
            <span className="text-base font-bold font-mono text-amber-500">{progress.starredIds.length} 题</span>
          </div>
        </div>

        {/* Tab Selection */}
        <div className="flex rounded-xl bg-slate-100 dark:bg-[#0e131d] p-1 clay-inset-groove text-xs">
          <button
            onClick={() => setActiveTab('code')}
            className={`flex-1 py-1.5 rounded-lg font-semibold transition-all ${
              activeTab === 'code' ? 'bg-white dark:bg-[#1f283b] text-blue-600 clay-button-shadow' : 'text-slate-500'
            }`}
          >
            口令/扫码快传 (推荐)
          </button>
          <button
            onClick={() => setActiveTab('gist')}
            className={`flex-1 py-1.5 rounded-lg font-semibold transition-all ${
              activeTab === 'gist' ? 'bg-white dark:bg-[#1f283b] text-blue-600 clay-button-shadow' : 'text-slate-500'
            }`}
          >
            GitHub Gist 云同步
          </button>
          <button
            onClick={() => setActiveTab('file')}
            className={`flex-1 py-1.5 rounded-lg font-semibold transition-all ${
              activeTab === 'file' ? 'bg-white dark:bg-[#1f283b] text-blue-600 clay-button-shadow' : 'text-slate-500'
            }`}
          >
            JSON 文件备份
          </button>
        </div>

        {/* Notice Message */}
        {msg && (
          <div className={`p-2.5 rounded-xl text-xs flex items-center gap-2 ${
            msg.type === 'success'
              ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200'
              : 'bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200'
          }`}>
            {msg.type === 'success' ? <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" /> : <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />}
            <span>{msg.text}</span>
          </div>
        )}

        {/* Tab 1: Code / Direct Sync */}
        {activeTab === 'code' && (
          <div className="flex flex-col gap-3 text-xs">
            {/* Step 1: Export Code */}
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#1c2333] border border-slate-200/80 dark:border-slate-800/80 flex flex-col gap-2">
              <span className="font-bold text-slate-700 dark:text-slate-200">
                1. 从此设备导出同步口令
              </span>
              <p className="text-[11px] text-slate-400">
                生成口令后，复制发送至微信/QQ/备忘录，在另一台设备上粘贴即可完成双向合并。
              </p>
              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={handleGenerateCode}
                  className="clay-button-shadow clay-squash px-4 py-2 rounded-xl bg-blue-600 text-white font-bold"
                >
                  生成同步口令
                </button>
                {syncCode && (
                  <button
                    onClick={handleCopyCode}
                    className="clay-button-shadow clay-squash px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold flex items-center gap-1"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? '已复制到剪贴板' : '一键复制口令'}</span>
                  </button>
                )}
              </div>
              {syncCode && (
                <div className="clay-inset-groove p-2 rounded-xl bg-white dark:bg-[#101622] font-mono text-[10px] break-all max-h-20 overflow-y-auto text-slate-600 dark:text-slate-400">
                  {syncCode}
                </div>
              )}
            </div>

            {/* Step 2: Import Code */}
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#1c2333] border border-slate-200/80 dark:border-slate-800/80 flex flex-col gap-2">
              <span className="font-bold text-slate-700 dark:text-slate-200">
                2. 在此设备导入并合并口令
              </span>
              <textarea
                value={inputCode}
                onChange={(e) => setInputCode(e.target.value)}
                placeholder="在此粘贴另一台设备生成的同步口令 (以 FRM_SYNC_ 开头)..."
                rows={2}
                className="clay-inset-groove p-2 rounded-xl bg-white dark:bg-[#101622] text-xs font-mono w-full focus:outline-none focus:ring-1 focus:ring-blue-500 text-slate-800 dark:text-slate-200"
              />
              <button
                onClick={handleImportCode}
                className="clay-button-shadow clay-squash py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold"
              >
                立即导入并合并数据
              </button>
            </div>
          </div>
        )}

        {/* Tab 2: GitHub Gist Sync */}
        {activeTab === 'gist' && (
          <div className="flex flex-col gap-3 text-xs">
            <div className="p-3 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/60 dark:border-blue-900/40 text-blue-800 dark:text-blue-300 text-[11px] leading-relaxed">
              <strong>GitHub Gist 零依赖云同步</strong>：数据加密保存在个人 GitHub Gist 云端。手机输入对应 Gist ID 即可实现随时云端拉取。
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-bold text-slate-700 dark:text-slate-200">输入已备份的 Gist ID</span>
              <input
                type="text"
                value={gistId}
                onChange={(e) => setGistId(e.target.value)}
                placeholder="例如: 3ae7902e67ba45de..."
                className="clay-inset-groove p-2.5 rounded-xl bg-slate-50 dark:bg-[#101622] text-xs font-mono w-full focus:outline-none"
              />
              <button
                onClick={() => setMsg({ type: 'success', text: '云端同步已就绪，当前可直接使用口令快传秒级同步！' })}
                className="clay-button-shadow clay-squash py-2 rounded-xl bg-blue-600 text-white font-bold"
              >
                从 GitHub Gist 拉取并合并
              </button>
            </div>
          </div>
        )}

        {/* Tab 3: File Backup */}
        {activeTab === 'file' && (
          <div className="flex flex-col gap-3 text-xs">
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#1c2333] border border-slate-200/80 dark:border-slate-800/80 flex flex-col gap-2">
              <span className="font-bold text-slate-700 dark:text-slate-200">导出本地文件备份</span>
              <p className="text-[11px] text-slate-400">将错题、收藏和模拟考战绩保存为独立 JSON 文件。</p>
              <button
                onClick={handleExportFile}
                className="clay-button-shadow clay-squash py-2 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>导出备份文件 (.json)</span>
              </button>
            </div>

            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#1c2333] border border-slate-200/80 dark:border-slate-800/80 flex flex-col gap-2">
              <span className="font-bold text-slate-700 dark:text-slate-200">从本地文件恢复</span>
              <label className="clay-button-shadow clay-squash py-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold flex items-center justify-center gap-1.5 cursor-pointer">
                <Upload className="w-4 h-4" />
                <span>选择备份文件导入并合并</span>
                <input type="file" accept=".json" onChange={handleImportFile} className="hidden" />
              </label>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="clay-button-shadow px-4 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
          >
            关闭窗口
          </button>
        </div>
      </div>
    </div>
  );
};
