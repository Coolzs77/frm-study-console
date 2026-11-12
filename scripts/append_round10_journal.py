journal_path = r"e:\workspace\frm-study-console\DEV_JOURNAL.md"

entry = """

---

## 第 [10] 轮 [2026-11-12 10:00]：解决正文配图加载失败与浏览器持续转圈、重构双端云端账号实时同步闭环

### 1. 本轮需求与目标 (User Intent & Goal)
用户在实机访问线上站点过程中提出了两项直接影响核心备考体验的问题与改进要求：
1. **正文题目配图加载不出来且浏览器标签页持续转圈**：打开题库页后，正文区域配图长时间不出图甚至无错误反馈，同时浏览器标签页转圈状态迟迟无法结束；
2. **电脑与手机同名账号同步完全无响应，重做真云端双向同步**：
   - 在电脑输入账号（如 `zsz`）开启同步后，手机输入相同账号点开启同步没有任何跨设备同步效果；
   - 要求在同步弹窗中提供两个明确按钮：**「备份到云端」** 与 **「从云端同步」**；
   - 点击任意一次按钮后，自动开启后续 **静默自动同步与备份**；
   - 同步删除弹窗与新增同步代码中的不必要提示和注释，保持界面精简。

### 2. 核心技术实现与代码改动 (Implementation & Changes)
本轮涉及的核心改动文件与功能模块如下：
- [`src/utils/assets.ts`](file:///e:/workspace/frm-study-console/src/utils/assets.ts)（新建）：
  - 实现 `resolveAssetUrl` 统一基于 `import.meta.env.BASE_URL` 解析相对资源路径；
  - 实现 `buildRetryAssetUrl` 在第 1、2 次自动重试或手动重试时附加防缓存参数（`?r=attempt_nonce`）；
  - 实现 `fetchPdfWithProgress` 与会话级内存缓存 `pdfBlobCache`：先通过 `fetch` ReadableStream 流式拉取 PDF 并统计已下载字节与百分比，配合 `AbortController` 与 22 秒无响应看门狗中断挂起请求；下载成功后通过 `URL.createObjectURL` 转为本地 `blob:` 地址缓存，实现同章节切页 0 字节开销。
- [`src/components/common/ResilientImage.tsx`](file:///e:/workspace/frm-study-console/src/components/common/ResilientImage.tsx)（新建）：
  - 封装高优先级弹性图片组件：题干与解析配图默认配置 `loading="eager"` 与小写 DOM 属性 `fetchpriority="high"`；
  - 统一使用纯白容器底色 `bg-white`，消除深色模式下透明 PNG 黑字看不清的问题；
  - 内置 10 秒超时看门狗与最多 2 次退避自动重试（450ms / 900ms）；全部重试失败后显示明确的故障说明、**「重试加载」**按钮与**「新标签打开原图」**链接，彻底消除空白卡死或假损坏图标。
- [`src/components/quiz/QuestionCanvas.tsx`](file:///e:/workspace/frm-study-console/src/components/quiz/QuestionCanvas.tsx)：
  - 替换全部原始 `<img />` 为带唯一稳定 `key`（`${question.id}-stem-${img}` / `${question.id}-ans-${img}`）的 `ResilientImage`，避免切题复用旧 DOM 节点造成错图；
  - 初始化 `revealed` 状态避免首次挂载重复触发追踪清理，按 `question.id` 跟踪当前可见正文配图就绪状态并通过 `onBodyImagesSettled` 通知父组件；
  - 待当前题配图全部就绪后延时 100ms 轻量预加载下一题题干配图。
- [`src/components/layout/RightSidebar.tsx`](file:///e:/workspace/frm-study-console/src/components/layout/RightSidebar.tsx)：
  - 监听 `window.matchMedia('(min-width: 1280px)')` 断点（`isDesktopVisible`），仅在桌面大屏可见且主画布首屏正文配图就绪后延后 800ms（保底 3.5 秒）才启动 PDF 拉取，彻底阻止手机端与首屏加载阶段偷跑 Multi-MB PDF 带宽；
  - 移除会破坏 HTTP 缓存的 `?p=N` 查询参数，改为挂载缓存好的 `<iframe src={`${pdfBlobUrl}#page=${targetPdfPage}`} />`；
  - 新增**「原版 PDF 课件」**与**「重点 PPT 图卡」**双模切换开关；当 PDF 下载超时、报错或用户点击取消下载时，展示重试卡片并自动在右侧保留渲染该章精选 `realSlides` 图卡，支持单列 `block space-y-3` 滚动与点击放大查看。
- [`src/services/syncService.ts`](file:///e:/workspace/frm-study-console/src/services/syncService.ts) & [`src/components/sync/SyncModal.tsx`](file:///e:/workspace/frm-study-console/src/components/sync/SyncModal.tsx) & [`src/App.tsx`](file:///e:/workspace/frm-study-console/src/App.tsx) & [`src/components/layout/Header.tsx`](file:///e:/workspace/frm-study-console/src/components/layout/Header.tsx)：
  - 内置纯 JS 标准 FIPS 180-4 `sha256Hex`，将账号名统一按小写规范映射为确定性 32 位安全键名 `frm_<sha256>`，确保在 HTTP 局域网与 HTTPS 线上环境均可生成一致的云端标识；
  - 对接国内可直连、具备 CORS 简单请求支持的 `https://api.textdb.online/update/`（写）与 `https://api.textdb.online/<key>?_t=...`（动态防缓存读），实现实打实的 `backupToCloud` 与 `syncFromCloud`（12 秒超时控制）；
  - `SyncModal.tsx` 提供**「备份到云端」**与**「从云端同步」**双按钮及 `autoCapitalize="none"` 防手机键盘首字母大写；点击任一按钮后自动持久化开启 `frm_auto_sync_enabled`；日常做题变化通过 2.5 秒防抖自动触发 `backupToCloud` 静默上传，页面打开及切回前台标签页（间隔 >= 15 秒）自动执行 `pullSilentlyIfEnabled` 合并最新云端进度，并通过 `computeProgressDigest` 摘要比对防止回环重复写入；
  - 安装 `qrcode` 在浏览器本地离线生成 `DataURL` 二维码，移除外部 `api.qrserver.com` 依赖；顺手修复 `generateMobileDirectUrl` 与 `checkUrlParamsOnStartup` 读取 `UserProgress` 错误字段（`userAnswers` / `bookmarkedQuestions` -> `answers` / `wrongIds` / `starredIds` / `memorizedIds`）的缺陷；删除同步弹窗冗余说明文本与代码注释。
- [`scripts/optimize_images.py`](file:///e:/workspace/frm-study-console/scripts/optimize_images.py)、[`public/images/`](file:///e:/workspace/frm-study-console/public/images/)、[`public/slides/`](file:///e:/workspace/frm-study-console/public/slides/)、[`vite.config.ts`](file:///e:/workspace/frm-study-console/vite.config.ts)、[`src/types.ts`](file:///e:/workspace/frm-study-console/src/types.ts)、[`src/components/common/MathText.tsx`](file:///e:/workspace/frm-study-console/src/components/common/MathText.tsx)、[`src/data/quizData.ts`](file:///e:/workspace/frm-study-console/src/data/quizData.ts)：
  - 35 张正文题目配图统一覆盖纯白画布去透明通道并量化优化，总体积由 `1,864.3 KB` 降至 `851.5 KB`（`-54.3%`）；59 张重点 PPT 图卡限制最大宽度 1280px 并量化压缩，总体积由 `16.19 MB` 降至 `6.59 MB`（`-59.3%`）；
  - `vite.config.ts` 开启产出 `[hash]` 命名防止浏览器长期缓存旧脚本；
  - 补充 `src/vite-env.d.ts` 与 `Question` 可选历史字段类型、修复 `MathText.tsx` 隐式 `any` 及 `quizData.ts` 5 处残缺 `$` 公式定界符（`q_2_1_4_3`、`q_2_1_4_4`、`q_2_3_4_5`、`q_5_4_1`、`q_5_4_2`），使 `npx tsc --noEmit` 达到 0 错误通过。

### 3. 遇到问题、根因分析与解决方案 (Issues, RCA & Fixes)
1. **正文配图加载受阻与浏览器持续转圈的根本原因 (RCA)**：
   - **问题现象**：Chrome CDP 诊断显示页面初始渲染时刻 `RightSidebar` 即刻挂载 `<iframe src="./courseware/...pdf?p=1#page=1">`，Chromium 内核会持续打开 `chrome-extension://mhjfbmdgcfjbbpaeojofohoefgiehjai/index.html` 且主文档 `loadEvent` 被同步阻塞直至多兆字节 PDF（最大 6.02MB）传输完成。
   - **叠加原因**：`hidden xl:flex` 在手机与窄屏下虽然视觉隐藏，DOM 中的 `<iframe>` 依然触发下载；GitHub Pages（Fastly CDN）在国内访问对大体积二进制文件容易发生流控或挂起，导致共用 HTTP/2 连接的 `images/*.png` 发生队头阻塞饥饿，且原 `<img loading="lazy">` 无重试和超时机制、透明 PNG 体积高达 339KB、`SyncModal` 还外链国内易挂起的 `api.qrserver.com`。
   - **具体解法**：首屏强制将主画布正文配图优先级设为最高；彻底禁止 `<iframe src="...pdf">` 直接在页面启动阶段挂载外网链接，改为视口 >=1280px 且配图加载完成并延时 800ms 后再后台流式缓冲为内存 `blob:` URL，并配合图片白底量化压缩及本地 `qrcode` 彻底解除外部阻塞源。
2. **多端同步点击无反应的根本原因 (RCA)**：
   - **问题现象**：用户在电脑输入 `zsz` 并在手机输入相同账号点击同步，两端数据全无互通；同时旧版扫码直达链接携带进度也缺失作答记录。
   - **根本原因 (RCA)**：第 9 轮删除 GitHub Gist 后，[`syncService.ts`](file:///e:/workspace/frm-study-console/src/services/syncService.ts) 仅保留了 `localStorage` 与 `BroadcastChannel`，这两者均严格隔离于单台设备的单一浏览器实例内部，没有任何跨公网的云端存储媒介；此外 `generateMobileDirectUrl` 中误引用了已废弃的 `userAnswers` 与 `bookmarkedQuestions` 字段。
   - **具体解法**：经实地直连与跨域（CORS）验证，排除返回 HTTP 500 的匿名 `kvdb.io` 与经过跳转丢 POST 体导致 `Key不能为空` 的 `textdb.online/update/`，选定真正支持 `application/x-www-form-urlencoded` 简单跨域请求且读取带 `CF-Cache-Status: DYNAMIC` 强一致刷新的 `https://api.textdb.online/update/` 作为云端 KV 载体，用 `备份到云端` 与 `从云端同步` 显式打通双端，并以摘要比对保证静默自动同步不产生死循环写入。
3. **验证期间排查出的 3 个工程与测试缺陷**：
   - **缺陷 A（Flex 压缩裁剪重点 PPT 图卡）**：首次实机截图发现「重点 PPT 图卡」列表在 `flex flex-col max-h-[580px]` 下子卡片被默认 `flex-shrink: 1` 压缩至 ~90px 高度导致底部画面被裁切。**修复**：抽取 `renderSlideCards` 辅助函数，改用 `space-y-3` 布局流并为卡片加上 `flex-shrink-0`，各幻灯片高度恢复为完整比例（实测 `271px`）。
   - **缺陷 B（下一题预加载与 PDF 缓冲时间撞车）**：线上测试初版捕获到 Q2 预加载结束时刻与 PDF 启动仅差 4ms。**修复**：将 `QuestionCanvas` 初始 `revealed` 状态置为首帧直出且按 `question.id` 跟踪已就绪图片集合，将下一题预加载提前至配图就绪后 100ms，右侧 PDF 启动延后至 800ms，线上实测配图结束（`ts=2173.316`）与 PDF 启动（`ts=2174.213`）隔离 ~0.9 秒。
   - **缺陷 C（E2E 测试点击错位）**：初始第 4 项测试使用 `innerText.includes('背会')` 匹配了左侧大纲栏「已背会」模式页签而非题目操作栏「背会」按钮。**修复**：收紧为精确匹配 `innerText.trim() === '背会'` 与 `'收藏'`，真实复现 0->1 收藏跨浏览器全链路同步。

### 4. 架构与机制演进图 (Architectural Evolution Diagram)

#### 图 1：首屏正文配图优先级调度与 `ResilientImage` 看门狗重试架构图
```mermaid
flowchart TD
    Mount["页面首屏挂载 (Q1 渲染)"] -->ViewportCheck{"视口宽度 >= 1280px ?"}
    Mount --> StemImg["QuestionCanvas 正文配图<br/>ResilientImage (loading=eager / fetchpriority=high)"]
    
    StemImg --> Watchdog["启动 10 秒单次超时看门狗"]
    Watchdog -- 加载成功 naturalWidth > 0 --> MarkReady["标记当前题配图就绪<br/>通知 onBodyImagesSettled()"]
    Watchdog -- 超时或 onError --> CheckRetry{"自动重试次数 < 2 ?"}
    CheckRetry -- 是 --> ReFetch["退避 450ms/900ms 后重连<br/>URL 附加 ?r=attempt_nonce 破除坏缓存"]
    ReFetch --> Watchdog
    CheckRetry -- 否 --> FailCard["展示可交互降级卡:<br/>失败文件名 + '重试加载'按钮 + '新标签打开原图'"]

    MarkReady --> PreloadNext["延时 100ms 轻量预加载下一题 stemImages"]
    MarkReady --> WaitDelay{"桌面可见且等待 800ms 错峰<br/>(或 3.5s 保底)"}
    ViewportCheck -- 手机/窄屏 (<1280px) --> SkipPDF["完全不下载隐藏 PDF，零后台流量争抢"]
    WaitDelay -- 是 --> FetchPDF["RightSidebar 启动后台 PDF 流式缓存"]
```
> **机制解析 (Diagram Walkthrough 1)**：展示本轮在资源加载顺序上的物理隔离设计。页面启动瞬间仅有 JS/CSS 与正文配图发起网络请求；所有正文配图采用最高获取优先级并独立持有看门狗与重试闭环，绝不静默裂图。仅当确认正文配图已经完成加载或达到保底阈值，且处于桌面端宽屏布局时，右侧课件 PDF 才允许错峰启动缓冲，从根本上消灭多兆字节 PDF 与正文字体/配图在同一 HTTP/2 连接上发生队头阻塞的根因。

#### 图 2：跨端自定义账号云端双向同步与静默自动保活时序图
```mermaid
sequenceDiagram
    autonumber
    participant PC as 电脑端控制台 (zsz)
    participant SyncSvc as syncService.ts<br/>(SHA-256 映射 + 摘要防抖)
    participant CloudKV as 云端 KV 服务<br/>(api.textdb.online)
    participant Mobile as 手机端独立浏览器 (zsz)

    Note over PC,CloudKV: 1. 电脑端显式备份并激活自动同步
    PC->>SyncSvc: 输入 zsz，点击「备份到云端」
    SyncSvc->>SyncSvc: 保存 account + 开启 autoSyncEnabled=1<br/>计算确定性键值 frm_<sha256>
    SyncSvc->>CloudKV: POST /update/ (form-urlencoded, 12s超时)
    CloudKV-->>SyncSvc: 返回 {status: 1}
    SyncSvc->>SyncSvc: 记录 lastSyncedDigest
    SyncSvc-->>PC: 显示已备份统计及「自动同步已开启」

    Note over Mobile,CloudKV: 2. 手机端输入同名账号一键拉取
    Mobile->>SyncSvc: 输入 zsz（自动关首字母大写），点击「从云端同步」
    SyncSvc->>CloudKV: GET /<frm_sha256>?_t=timestamp
    CloudKV-->>SyncSvc: 返回最新 JSON 进度 (CF-Cache-Status: DYNAMIC)
    SyncSvc-->>Mobile: 合并 answers / wrongIds / starredIds / memorizedIds<br/>同步开启手机端静默自动同步

    Note over Mobile,PC: 3. 后续做题双向静默自动流转
    Mobile->>SyncSvc: 手机端做新题或标星 (progress 变更)
    SyncSvc->>SyncSvc: 比对摘要与 lastSyncedDigest 不同 -> 启动 2.5s 防抖
    SyncSvc->>CloudKV: 静默 POST 自动备份最新状态
    PC->>SyncSvc: 电脑端打开或切回前台标签页 (visibilitychange >= 15s)
    SyncSvc->>CloudKV: 静默 GET 拉取最新进度并无冲突并入本地状态
```
> **机制解析 (Diagram Walkthrough 2)**：清晰拆解“一次点击即开启全链路静默同步”的通信模型。两端无需记忆任何 Token 或口令，全靠纯前端确定的 `SHA-256` 哈希在 `api.textdb.online` 寻址同一条加密感键值对记录。首次触发「备份到云端」或「从云端同步」即持久激活后台 2.5 秒防抖自动推送与页面激活自动拉取；并借助 `computeProgressDigest` 状态指纹比对，保证云端拉取更新本地状态后不会反手触发冗余回传请求。

#### 图 3：右侧课件 PDF 流式缓冲与重点 PPT 图卡降级状态机
```mermaid
stateDiagram-v2
    [*] --> Idle: 章节加载，先检索内存 pdfBlobCache

    Idle --> Ready: 命中同一章节 Blob 缓存 (0 HTTP 请求)
    Idle --> WaitingBody: 未命中缓存，等待桌面可视及正文配图就绪

    WaitingBody --> Downloading: 错峰 800ms 完成，启动 ReadableStream 下载
    WaitingBody --> SlideCardsMode: 点击「先看重点 PPT 图卡（秒开）」

    Downloading --> Ready: 下载 100%，生成内存 blob: URL
    Downloading --> ErrorFallback: 网络失败或 22s 无新字节到达超时
    Downloading --> CanceledSlides: 用户主动点击「取消加载 PDF」

    Ready --> Ready: 点击 P1/P4/P14 书签<br/>本地切换 blob:#page=N (0ms/0KB)
    Ready --> SlideCardsMode: 切换顶栏模式按钮

    ErrorFallback --> SlideCardsMode: 同屏显示超时提示 + 重试按钮 + 本章重点 PPT 图卡
    CanceledSlides --> SlideCardsMode
    SlideCardsMode --> Downloading: 点击「重试加载 PDF」恢复原版下载
```
> **机制解析 (Diagram Walkthrough 3)**：描绘了右侧课件视口从被动硬加载到弹性多态兜底的状态迁徙。相比此前直接往 `iframe` 丢远程 `.pdf?p=N` 的脆弱实现，状态机确保：1）只要下载完成，任意书签跳转完全局限在内存 `blob:` 内运行，不会反复惊动浏览器标签转圈；2）无论用户主动嫌慢切卡，还是校园网/弱网环境超时中断，界面均平稳承接为经压缩优化的重点 PPT 幻灯片序列，保证备考研读链路随时可用。

### 5. 优化改进与体验打磨 (Improvements & Enhancements)
- **配图与幻灯片资产量化减负**：35 张题目配图统一为实底白底 PNG/JPEG 并量化体积，总体积压缩 **54.3%**（`1,864.3 KB → 851.5 KB`），代表性大图如第 1 题推导表 `ch2_1_4_q1_efc2b4b4.png` 由 `263.1 KB` 降至 `83.0 KB`；59 张重点 PPT 图卡总体积压缩 **59.3%**（`16.19 MB → 6.59 MB`），单页原图由 1.2MB 级全部压降至 220–290KB 区间；
- **完全剔除海外第三方与旧态开发术语**：同步二维码全面改用本地 `qrcode` 库直出 PNG DataURL，断开 `api.qrserver.com` 外部请求；精简 `SyncModal` 视觉层级，去除冗长文字注释与无效提示段落，仅保留自定义账号、双核心操作按钮与扫码直达卡片；
- **全库静态类型零错误收敛**：补齐 Vite 环境变量声明、题目兼容类型与 5 处残缺公式定界符，`npx tsc --noEmit` 实现零警告零错误通过；构建产物开启内容哈希（`index-ClCdxdkV.js`），避免 GitHub Pages 更新后旧缓存粘滞。

### 6. 验证结果与可复现方法 (Verification & Reproduction)

#### 1. TypeScript 编译、结构化断言与题库审计
```bash
npx tsc --noEmit
node scripts/full_verification.cjs
node scripts/deep_audit.cjs
```
**实测结论**：
- `npx tsc --noEmit` 退出码 `0`（0 个类型错误）；
- `full_verification.cjs` 全 6 大类校验（公式与 Markdown 防碰撞、解析去模板化、判断题首句结论校准、选择题逐项解析、同步去黑话、云端同步与图片看门狗结构断言）全部 `PASS`；
- `deep_audit.cjs` 扫描全库 56 题、35 张原题图与 8 章课件（42 张精选图卡 + 8 份 PDF），0 处缺失文件、0 处损坏头、0 处奇数 `$` 残留。

#### 2. Chrome CDP 端到端实机验证（针对线上生产站点 `https://coolzs77.github.io/frm-study-console/`）
```bash
python -u scripts/verify_round10.py --live
```
**核心实测输出摘要**：
```text
CDN probe 1: ['https://coolzs77.github.io/frm-study-console/assets/index-ClCdxdkV.js', 'https://coolzs77.github.io/frm-study-console/assets/index-BdTNMXzh.css']
=== Test 1 (LIVE): Desktop (1600x1050) priority order, body images, blob PDF & bookmark jump ===
  Timing check: last Q1 body image finished at ts=2173.316, PDF started at ts=2174.213
  DOM check: 3/3 Q1 题干与解析图片全部加载 (complete=true, naturalWidth=519/639/1075), iframeSrc=blob:https://coolzs77.github.io/...#page=1
  Bookmark jump check: 0 new PDF requests, iframe=...#page=14
  Slide cards mode: 6 slide images loaded cleanly (heights=[271, 271, 271, 271, 271, 271])
  Offline QR Modal check: {'src': 'data:image/png;base64,iVBORw0KGgoAAAANSU', 'complete': True, 'nw': 160}

=== Test 2: Mobile Viewport (390x844) loads body images cleanly with ZERO hidden PDF download ===
  Mobile check PASS: 3 body images loaded, 0 hidden PDF requests.

=== Test 3: Genuine Fault Injection -> Auto-Retry + Manual Retry Recovery & PDF Error Fallback ===
  Fault injection Q2 attempts intercepted: 3 -> ['...q2.png', '...q2.png?r=1_0', '...q2.png?r=2_0']
  Error UI shown after failed retries: {'hasErrorMsg': True, 'hasRetryBtn': True}
  After clicking 重试加载: [{'src': '...q2.png?r=0_1', 'complete': True, 'nw': 522}]
  PDF failure auto-fallback check: {'hasErrorBanner': True, 'hasRetryPdfBtn': True, 'fallbackSlideCount': 4, 'allSlidesOk': True}

=== Test 4: Real Two-Device Cross-Profile Cloud Sync & Silent Auto-Sync ===
  Desktop backed up account=Zsz_AutoTest_1794448723 to cloud successfully.
  Mobile pulled Q1 star+memorized from cloud cleanly!
  Desktop auto-pulled progress after Mobile edit: ['q_2_1_4_1', 'q_2_1_4_2']
  Bidirectional silent auto-sync PASS!

ALL ROUND 10 CDP END-TO-END VERIFICATIONS PASSED!
```

#### 3. 线上视觉证据留档与生产发布
- **正文配图优先加载与右侧 PDF 内存缓存实景**：[`docs/images/v37_body_images_loaded.png`](file:///e:/workspace/frm-study-console/docs/images/v37_body_images_loaded.png)
- **重点 PPT 图卡切换与单列防压缩展示**：[`docs/images/v37_slide_fallback_and_pdf.png`](file:///e:/workspace/frm-study-console/docs/images/v37_slide_fallback_and_pdf.png)
- **双端云端账号备份/同步与本地离线二维码弹窗**：[`docs/images/v37_offline_qr_sync.png`](file:///e:/workspace/frm-study-console/docs/images/v37_offline_qr_sync.png)
- **生产部署与线上访问**：`gh-pages` 分支更新至 `Commit 0cff527`，生产站点 `https://coolzs77.github.io/frm-study-console/` 已全量上线。
"""

with open(journal_path, "a", encoding="utf-8") as f:
    f.write(entry)

print("Successfully appended round 10 to DEV_JOURNAL.md!")
