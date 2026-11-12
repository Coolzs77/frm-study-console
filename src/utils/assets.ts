export interface PdfDownloadProgress {
  loadedBytes: number;
  totalBytes: number;
  percent: number | null;
}

/** 解析相对资源路径为兼容 Vite BASE_URL 的地址 */
export const resolveAssetUrl = (rawPath: string): string => {
  if (!rawPath) return '';
  if (/^(https?:|blob:|data:)/i.test(rawPath)) {
    return rawPath;
  }

  const base = import.meta.env?.BASE_URL || './';
  const cleanRel = rawPath.replace(/^\.?\//, '');

  if (base === './' || base === '.') {
    return `./${cleanRel}`;
  }

  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}${cleanRel}`;
};

export const buildRetryAssetUrl = (resolvedUrl: string, attempt: number, manualNonce = 0): string => {
  if (!resolvedUrl || (attempt === 0 && manualNonce === 0)) {
    return resolvedUrl;
  }
  const sep = resolvedUrl.includes('?') ? '&' : '?';
  return `${resolvedUrl}${sep}r=${attempt}_${manualNonce}`;
};

const pdfBlobCache = new Map<string, string>();

export const getCachedPdfBlobUrl = (rawPdfPath: string): string | null => {
  if (!rawPdfPath) return null;
  const resolved = resolveAssetUrl(rawPdfPath);
  return pdfBlobCache.get(resolved) || null;
};

/** 带进度回调与无响应超时控制的 PDF 流式下载器，完成后缓存为内存 blob: URL */
export const fetchPdfWithProgress = async (
  rawPdfPath: string,
  options: {
    signal?: AbortSignal;
    stallTimeoutMs?: number;
    onProgress?: (progress: PdfDownloadProgress) => void;
  } = {}
): Promise<string> => {
  const resolved = resolveAssetUrl(rawPdfPath);
  const cached = pdfBlobCache.get(resolved);
  if (cached) {
    return cached;
  }

  const stallTimeoutMs = options.stallTimeoutMs ?? 22000;
  const internalController = new AbortController();
  let timedOut = false;

  const onExternalAbort = () => {
    internalController.abort();
  };
  if (options.signal) {
    if (options.signal.aborted) {
      throw new DOMException('Aborted', 'AbortError');
    }
    options.signal.addEventListener('abort', onExternalAbort, { once: true });
  }

  let watchdog: ReturnType<typeof setTimeout> | null = null;
  const resetWatchdog = () => {
    if (watchdog) clearTimeout(watchdog);
    watchdog = setTimeout(() => {
      timedOut = true;
      internalController.abort();
    }, stallTimeoutMs);
  };

  try {
    resetWatchdog();
    const response = await fetch(resolved, {
      signal: internalController.signal,
      credentials: 'same-origin',
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`);
    }

    const totalHeader = response.headers.get('content-length');
    const totalBytes = totalHeader ? parseInt(totalHeader, 10) || 0 : 0;

    let blob: Blob;
    if (response.body) {
      const reader = response.body.getReader();
      const chunks: Uint8Array[] = [];
      let loadedBytes = 0;

      while (true) {
        resetWatchdog();
        const { done, value } = await reader.read();
        if (done) break;
        if (value && value.byteLength > 0) {
          chunks.push(value);
          loadedBytes += value.byteLength;
          options.onProgress?.({
            loadedBytes,
            totalBytes,
            percent: totalBytes > 0 ? Math.min(99, Math.round((loadedBytes / totalBytes) * 100)) : null,
          });
        }
      }

      blob = new Blob(chunks as BlobPart[], { type: 'application/pdf' });
    } else {
      resetWatchdog();
      blob = await response.blob();
    }

    if (blob.size < 256) {
      throw new Error('Downloaded PDF payload is unexpectedly empty');
    }

    const blobUrl = URL.createObjectURL(blob);
    pdfBlobCache.set(resolved, blobUrl);
    options.onProgress?.({
      loadedBytes: blob.size,
      totalBytes: blob.size,
      percent: 100,
    });
    return blobUrl;
  } catch (err: any) {
    if (timedOut) {
      throw new Error(`下载超时 (${Math.round(stallTimeoutMs / 1000)}s 无响应)`);
    }
    throw err;
  } finally {
    if (watchdog) clearTimeout(watchdog);
    if (options.signal) {
      options.signal.removeEventListener('abort', onExternalAbort);
    }
  }
};
