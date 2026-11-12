import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Loader2, RefreshCw, AlertTriangle, ExternalLink } from 'lucide-react';
import { resolveAssetUrl, buildRetryAssetUrl } from '../../utils/assets';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  priority?: 'high' | 'auto';
  timeoutMs?: number;
  maxAutoRetries?: number;
  onClick?: () => void;
  onSettled?: (loaded: boolean) => void;
  title?: string;
}

export const ResilientImage: React.FC<ResilientImageProps> = ({
  src,
  alt,
  className = 'max-h-60 object-contain rounded-xl p-2',
  containerClassName = '',
  priority = 'high',
  timeoutMs = 10000,
  maxAutoRetries = 2,
  onClick,
  onSettled,
  title,
}) => {
  const baseUrl = resolveAssetUrl(src);
  const [attempt, setAttempt] = useState<number>(0);
  const [manualNonce, setManualNonce] = useState<number>(0);
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [errorReason, setErrorReason] = useState<string>('');
  const imgRef = useRef<HTMLImageElement>(null);
  const settledRef = useRef<boolean>(false);

  const effectiveUrl = buildRetryAssetUrl(baseUrl, attempt, manualNonce);

  useEffect(() => {
    setAttempt(0);
    setManualNonce(0);
    setStatus('loading');
    setErrorReason('');
    settledRef.current = false;
  }, [baseUrl]);

  const notifySettled = useCallback(
    (ok: boolean) => {
      if (!settledRef.current) {
        settledRef.current = true;
        onSettled?.(ok);
      }
    },
    [onSettled]
  );

  const triggerRetryOrFail = useCallback(
    (reason: string) => {
      if (attempt < maxAutoRetries) {
        const delayMs = 450 * (attempt + 1);
        const retryTimer = setTimeout(() => {
          setAttempt((prev) => prev + 1);
        }, delayMs);
        return () => clearTimeout(retryTimer);
      }
      setErrorReason(reason);
      setStatus('error');
      notifySettled(false);
      return undefined;
    },
    [attempt, maxAutoRetries, notifySettled]
  );

  useEffect(() => {
    if (status !== 'loading') return;

    const imgEl = imgRef.current;
    if (imgEl && imgEl.complete && imgEl.naturalWidth > 0) {
      setStatus('loaded');
      notifySettled(true);
      return;
    }

    let cancelRetryDelay: (() => void) | undefined;
    const watchdog = setTimeout(() => {
      cancelRetryDelay = triggerRetryOrFail('图片响应超时，可能是网络拥堵或连接中断');
    }, timeoutMs);

    return () => {
      clearTimeout(watchdog);
      if (cancelRetryDelay) cancelRetryDelay();
    };
  }, [status, effectiveUrl, timeoutMs, triggerRetryOrFail, notifySettled]);

  const handleLoad = () => {
    const imgEl = imgRef.current;
    if (imgEl && imgEl.naturalWidth > 0) {
      setStatus('loaded');
      setErrorReason('');
      notifySettled(true);
    } else {
      triggerRetryOrFail('图片尺寸异常');
    }
  };

  const handleError = () => {
    triggerRetryOrFail('图片资源请求失败或被拦截');
  };

  const handleManualRetry = (e: React.MouseEvent) => {
    e.stopPropagation();
    settledRef.current = false;
    setAttempt(0);
    setManualNonce((n) => n + 1);
    setErrorReason('');
    setStatus('loading');
  };

  const fetchPriorityAttr = priority === 'high' ? { fetchpriority: 'high' } : {};

  return (
    <div className={`relative bg-white rounded-xl ${containerClassName}`}>
      {status === 'loading' && (
        <div className="min-h-[88px] min-w-[210px] px-4 py-4 flex flex-col items-center justify-center gap-2 text-slate-500 bg-slate-50/90 rounded-xl border border-dashed border-slate-200">
          <Loader2 className="w-5 h-5 animate-spin text-blue-600" />
          <span className="text-xs font-semibold text-slate-600">
            {attempt > 0 ? `正在第 ${attempt} 次重连加载图片...` : '正在加载题目配图...'}
          </span>
        </div>
      )}

      {status === 'error' && (
        <div
          className="min-w-[240px] max-w-md px-4 py-3.5 rounded-xl bg-amber-50/80 border border-amber-200 text-amber-900 flex flex-col gap-2 cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-start gap-2 text-xs">
            <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <p className="font-bold text-amber-900">配图暂未加载成功</p>
              <p className="text-[11px] text-amber-700/90 truncate mt-0.5" title={src}>
                {errorReason || '网络波动'}（{src.split('/').pop()}）
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 pt-0.5">
            <button
              type="button"
              onClick={handleManualRetry}
              className="px-3 py-1 rounded-lg text-xs font-bold bg-amber-600 hover:bg-amber-700 text-white transition-colors flex items-center gap-1 cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" />
              <span>重试加载</span>
            </button>
            <a
              href={baseUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-white text-slate-700 border border-amber-200 hover:bg-amber-50 transition-colors flex items-center gap-1"
            >
              <ExternalLink className="w-3 h-3" />
              <span>新标签打开原图</span>
            </a>
          </div>
        </div>
      )}

      {status !== 'error' && (
        <img
          ref={imgRef}
          src={effectiveUrl}
          alt={alt}
          loading={priority === 'high' ? 'eager' : 'lazy'}
          decoding="async"
          {...(fetchPriorityAttr as Record<string, string>)}
          onLoad={handleLoad}
          onError={handleError}
          onClick={status === 'loaded' ? onClick : undefined}
          title={status === 'loaded' ? title : undefined}
          className={
            status === 'loaded'
              ? className
              : 'opacity-0 w-px h-px absolute pointer-events-none'
          }
        />
      )}
    </div>
  );
};
