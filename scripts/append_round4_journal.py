import os

round4_text = '''

---

## 第 [4] 轮 [2026-11-11 16:10]：完整课件PDF深度嵌入、右侧栏自由拉拽与一键半屏展开引擎研发、五个期权希腊值KaTeX符号体系修正

### 1. 本轮需求与目标 (User Intent & Goal)
- **原始诉求与核心痛点**：
  1. **课件精讲仅有局部图片且不满足整本研读需要**：前期只提取了少量单页截图，无法满足系统性复习整本课件、查阅上下文推导的需求。用户明确指示将全套课件以标准 PDF 形式无损嵌入到右侧精讲面板中；
  2. **右侧栏宽度固定且狭窄**：右侧精讲栏此前为固定宽度，无法适应大屏阅读 PDF 课件。用户提出希望支持自由拉拽宽度，或者参考 [Muduo & CppAIService](https://coolzs77.github.io/muduo-study-console/) 的算法精讲展开逻辑，一键展开至半屏（且明确要求“最多展开半屏即可”，绝不抢占做题区主视野）；
  3. **公式手册顶栏五个希腊值未正确显示为数学符号**：用户实机截图中发现，全书公式手册顶栏提示文字中，“五个期权希腊值”被错误换行并以纯英文斜体单词 `Delta, Gamma, Theta, mathcalV, rho` 呈现，未能渲染出 $\\Delta, \\Gamma, \\Theta, \\mathcal{V}, \\rho$ 数学符号。

---

### 2. 核心技术实现与代码改动 (Implementation & Changes)
- [`public/courseware/*.pdf`](file:///e:/workspace/frm-study-console/public/courseware/)：
  - 调用 Windows COM 系统接口，将原始课件中的 `2.3 在险价值和预期亏损.pptx` 与 `2.5 模型构建法.pptx` 无损导出为标准高质量矢量 PDF；
  - 全量归档 14 份课件 PDF 至 `public/courseware/`，包含 8 门测验直接相关的核心课件（总计 36.7MB）以及 6 份扩展课件，统一采用规范化英文拼音命名（如 `c2_1_1_interest_rate_1.pdf`）。
- [`src/types.ts`](file:///e:/workspace/frm-study-console/src/types.ts)：
  - 扩展 `SlideNote` 接口，新增 `pdfUrl`、`pdfFileName`、`totalPdfPages` 与 `keyBookmarks`（包含 `pageNumber`、`label` 与 `description`）数据字段契约。
- [`src/data/quizData.ts`](file:///e:/workspace/frm-study-console/src/data/quizData.ts)：
  - 为 8 个章节的 `SLIDE_NOTES` 全面绑定原版课件 PDF 相对路径及核心考点直达书签字典（如 2.1.4 章节直达 P13 离散折现、P16 多期收益、P28 久期缺口、P35 麦考勒久期）。
- [`src/components/layout/RightSidebar.tsx`](file:///e:/workspace/frm-study-console/src/components/layout/RightSidebar.tsx)：
  - **左边缘鼠标自由拖拽手柄 (Drag Resizer Handle)**：在侧边栏左边缘注入绝对定位拖拽感应条，监听全局 `mousemove` 与 `mouseup`，动态计算实时宽度，严格限制在 `[360px, 50vw]` 区间，并持久化到 `localStorage`；
  - **一键半屏沉浸研读展开控制**：新增半屏切换状态 `isHalfScreen`，点击右上角展开按钮即可在默认宽度与 `50vw` 之间丝滑过渡，最大宽度严格锁死不超过半屏；
  - **完整课件 PDF 原生内嵌视口**：采用原生 `<iframe src={`${baseUrl}${pdfUrl}#page=${targetPage}`} />` 嵌入，支持完整目录缩略图、旋转、缩放与上下滚动；
  - **考点直达书签索引栏**：在课件顶部渲染考点书签按钮条，一键将 iframe 导航锚点切换至目标页码；
  - **新标签页全屏研读入口**：配置常驻外链按钮，支持在独立浏览器标签页中开启全屏沉浸大屏阅读。
- [`src/components/common/MathText.tsx`](file:///e:/workspace/frm-study-console/src/components/common/MathText.tsx)：
  - 将 KaTeX 的输出格式从 `output: 'htmlAndMathml'` 收敛为纯净标准的 `output: 'html'`，从根本上杜绝浏览器环境下 MathML 双重渲染或文本泄露问题。
- [`vite.config.ts`](file:///e:/workspace/frm-study-console/vite.config.ts)：
  - 在资产拷贝插件中增加对 `public/courseware` 目录的自动同步机制。
- [`scripts/full_verification.cjs`](file:///e:/workspace/frm-study-console/scripts/full_verification.cjs)：
  - 自动化测试用例扩充至 157 项断言，全部通过。

---

### 3. 遇到问题、根因分析与解决方案 (Issues, RCA & Fixes)

#### 问题 1：五个希腊值为什么渲染成英文斜体单词且错误换行？
- **真实问题现象**：在全书公式手册顶栏中，用户看到的是竖排换行的 `Delta,`、`Gamma,`、`Theta,`、`mathcalV,`、`rho`，而不是真正的数学符号 $\\Delta, \\Gamma, \\Theta, \\mathcal{V}, \\rho$。
- **根本原因 (RCA)**：
  1. **字面量双重转义导致 LaTeX 产生换行**：此前在代码中写成了 `content="**全书公式手册**：全量收录五个期权希腊值（$\\\\Delta, \\\\Gamma...`。在 JS 模板编译后，运行时字符串实际为 `\\\\Delta`。在 LaTeX 语法中，双反斜杠 `\\\\` 被解释为**物理换行符 (linebreak)**，后方的 `Delta` 则退化为无反斜杠的普通文本变量，因而被 KaTeX 渲染成了英文斜体；
  2. **MathML 标签泄露**：此前 `output: 'htmlAndMathml'` 生成了 `<span class="katex-mathml"><math><mi>Delta</mi>...`，部分宿主环境若 CSS 加载时序略滞后，MathML 的纯英文便会暴露出来。
- **攻坚解法**：
  1. 在 `RightSidebar.tsx` 中声明独立的希腊值公式常量 `const GREEK_SUMMARY = '$\\\\Delta,\\\\ \\\\Gamma,\\\\ \\\\Theta,\\\\ \\\\mathcal{V},\\\\ \\\\rho$';`，确保传给 KaTeX 解析器的真实值为单反斜杠转义；
  2. 在 `MathText.tsx` 中将 KaTeX 输出格式收敛为 `output: 'html'`，彻底剥离冗余的 MathML DOM 树，保障渲染出纯粹原生的 $\\Delta, \\Gamma, \\Theta, \\mathcal{V}, \\rho$ 矢量符号。

#### 问题 2：如何平衡右侧栏宽度可调节性与中栏做题区域的视野保护？
- **真实问题现象**：如果完全不限制右侧栏拉伸宽度，用户误拖拽可能导致左侧做题画布被完全吞没；而如果固定宽度，在大屏幕上阅读 39~92 页的课件 PDF 字体太小、缩放受限。
- **根本原因 (RCA)**：缺乏响应式双模态宽度引擎，纯百分比或纯像素硬编码均无法兼顾“做题”与“研读课件”的双重视角。
- **攻坚解法**：
  1. 采用**一键半屏（`50vw`）+ 鼠标拖拽微调（`360px ~ 50vw`）**双模态控制；
  2. 在拖拽计算时加入硬件级约束：`maxHalf = Math.floor(window.innerWidth * 0.5)`，无论怎么拖动，最大宽度永远锁死在屏幕宽度的 50%，坚决不越界遮挡左栏与中栏；
  3. 通过 `localStorage` 记住用户的偏好宽度，实现免重复调节体验。

---

### 4. 架构与机制演进图 (Architectural Evolution Diagram)

```mermaid
flowchart TD
    subgraph DataLayer ["数据资产与课件层 (Data Assets)"]
        PPTSource["原始 PPT 课件 (含 2.3 & 2.5 pptx)"]
        COMExport["PowerPoint COM 矢量无损转码"]
        PDFStore["14 份标准 PDF 课件 (public/courseware/*.pdf)"]
        PPTSource --> COMExport --> PDFStore
        QuizData["quizData.ts<br/>• pdfUrl 映射<br/>• totalPdfPages 统计<br/>• keyBookmarks 考点字典"]
        PDFStore --> QuizData
    end

    subgraph ResizerEngine ["双模态响应式视窗引擎 (Resizable & Half-Screen)"]
        DragHandle["左边缘拖拽把手 (鼠标拖动)"]
        ToggleBtn["一键半屏按钮 (快捷键/点击)"]
        WidthCalc{"宽度计算与边界约束<br/>min: 360px<br/>max: 50vw (严格半屏上限)"}
        DragHandle --> WidthCalc
        ToggleBtn --> WidthCalc
        WidthCalc --> LocalStore["持久化至 localStorage (frm_sidebar_width)"]
    end

    subgraph Presentation ["现代化内嵌课件研读工作台 (Presentation Layer)"]
        IframeViewer["原生 PDF 高清研读播放器<br/>iframe src='...pdf#page=N'"]
        BookmarkBar["考点页码快捷直达胶囊<br/>(P13, P16, P28, P35 点击跳页)"]
        ExternalOpen["新标签页全屏纯粹阅读入口"]
        WidthCalc --> IframeViewer
        BookmarkBar --> IframeViewer
        ExternalOpen --> IframeViewer
    end
```

> **图文互注解析**：
> 1. **数据流动与转码层**：通过系统底层的 COM 对象调用，将原本格式混杂的课件库无损统一为标准 PDF 资产，并在数据字典中精确构建考点与页码映射矩阵；
> 2. **边界保护机制**：无论用户使用左侧边缘把手拖拽还是点击右上角一键展开，宽度计算器均强制拦截大于 `window.innerWidth * 0.5` 的溢出请求，严格保证做题区与研读区各自占据半边屏幕；
> 3. **多维交互呈现**：内嵌 iframe 与顶部的考点直达胶囊紧密联动，考点页码瞬间定位，彻底消除传统课件大海捞针的翻找成本。

```mermaid
stateDiagram-v2
    [*] --> StandardWidth: 页面加载 (读取 localStorage，默认 480px)
    StandardWidth --> Dragging: 鼠标在左边缘把手按下 (onMouseDown)
    Dragging --> Dragging: 鼠标移动 (实时计算 min(50vw, max(360, width)))
    Dragging --> StandardWidth: 鼠标松开 (onMouseUp，写入 localStorage)
    
    StandardWidth --> HalfScreen: 点击右上角【展开半屏】按钮 (Maximize2)
    HalfScreen --> StandardWidth: 再次点击【恢复标准】按钮 (Minimize2)
    HalfScreen --> Dragging: 用户在半屏状态下拖动把手 (自动切换为自定义宽度)
```

> **图文互注解析**：
> 状态迁移机清晰呈现了右侧栏在“标准宽度模式”、“自由拉拽模式”与“半屏沉浸模式”之间的平滑流转。当用户在半屏状态下主动拖拽时，状态机自动脱敏并切换为自定义数值，体验自然连续。

```mermaid
flowchart LR
    InputTex["希腊公式源文本<br/>$\\Delta, \\Gamma, \\Theta, \\mathcal{V}, \\rho$"] --> Tokenizer["MathText 正则分词器<br/>($...$ / $$...$$)"]
    Tokenizer --> KatexCompiler["KaTeX 渲染编译器<br/>(output: 'html')"]
    KatexCompiler --> StrippedMathML["剔除 MathML 冗余树<br/>(杜绝纯英文字母外露)"]
    StrippedMathML --> SafeHTML["纯净高保真 HTML 矢量节点<br/>&lt;span class='mord'&gt;Δ&lt;/span&gt;..."]
```

> **图文互注解析**：
> 展示了公式解析流水线的收敛改造。通过将编译器底层输出模式固定为 `output: 'html'`，从渲染管线源头上拦截了 MathML 产生的纯文本 `Delta`、`Gamma` 等泄露，确保在任何移动端与 PC 端浏览器下均输出标准、漂亮的数学符号。

---

### 5. 优化改进与体验打磨 (Improvements & Enhancements)
- **拖拽时全局防选中文本**：拖拽期间自动向 `document.body` 注入 `select-none` 与 `cursor-col-resize`，避免鼠标移动时意外选中页面上的试题文字；
- **自适应 iframe 容器高度**：课件阅读器容器在 2K/大屏下自适应扩展至 `660px` 高度，保证整张 PPT 幻灯片完整呈现；
- **全格式课件统一化**：消除 PPTX 与 PDF 格式割裂，统一为轻量级、跨终端一致的标准矢量 PDF。

---

### 6. 验证结果与可复现方法 (Verification & Reproduction)

```bash
# 1. 执行全量 157 项自动化断言测试
cd e:\workspace\frm-study-console
node scripts/full_verification.cjs
# 输出: 157/157 Passed!

# 2. Chrome CDP 无头浏览器实机验证
python scripts/verify_v32_evidence.py
# 验证公式手册输出希腊符号 Δ, Γ, Θ, ρ，验证展开半屏宽度等于 window.innerWidth * 0.5
# 抓取高清实机截图:
# • docs/images/screenshot_v32_halfscreen_pdf.png
# • docs/images/screenshot_v32_formula_greek.png

# 3. 部署与上线
npm run build
node scripts/deploy.cjs
# 输出: Successfully pushed to origin/gh-pages!
```

#### 实机交付物与线上凭证
- **GitHub 源码仓库**：[https://github.com/Coolzs77/frm-study-console](https://github.com/Coolzs77/frm-study-console)
- **在线可用地址**：[https://coolzs77.github.io/frm-study-console/](https://coolzs77.github.io/frm-study-console/)
'''

with open(r'e:\workspace\frm-study-console\DEV_JOURNAL.md', 'a', encoding='utf-8') as f:
    f.write(round4_text)
print('Appended round 4 to frm-study-console/DEV_JOURNAL.md')

with open(r'e:\workspace\DEV_JOURNAL.md', 'a', encoding='utf-8') as f:
    f.write(round4_text)
print('Appended round 4 to root DEV_JOURNAL.md')
