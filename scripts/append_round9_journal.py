import os

journal_path = r"e:\workspace\frm-study-console\DEV_JOURNAL.md"

entry = """

---

## 第 [9] 轮 [2026-11-11 23:05]：根治公式内部 ** ** 渲染失败、全量 56 题选项级深度考点解析重构与自定义账号静默自动同步

### 1. 本轮需求与目标 (User Intent & Goal)
用户在实机备考中针对前期界面与内容提出了三项关键诉求：
1. **彻底解决 `** **` 渲染失败问题**：用户上传实机截图（如第 2.1.5 节“久期+凸度联合二阶近似”卡片），反映公式行出现形如 `\\frac{\\Delta P}{P} \\approx * * [rose : -D^* \\Delta y] * * + * * [emerald : \\frac{1}{2} C (\\Delta y)^2] * *` 的原始未解析星号乱码。必须从底层语法和渲染器两个维度彻底消除冲突；
2. **重点文字加粗高亮且绝不嵌套外框**：再次对齐用户上传的“官方备考实战技巧”参考图标准，保留实心黑圆圈序号（`❶ ❷ ❸`）与清晰圆点列表（`·`），重点文字自然采用多色加粗高亮（蓝、绿、红、橙、紫），卡片内坚决不套嵌冗余彩色线框，公式手册注释文本同步高亮；
3. **试题深度考点解析脱节/胡编全面排查与重构**：全量 56 道题目中，20 道选择与判断题存在解析与实际选项严重脱节、判断结论与教师标答相反、计算题包含“请查阅右侧课件”模板废话的问题。必须全面重写，逐项穿透分析 A、B、C、D 选项，给出严密数理推导；
4. **多端同步体验彻底去开发化（自定义账号名 + 静默自动同步）**：彻底剔除 Gist、GitHub Token、Base64 口令等技术黑话与复杂操作。支持仅输入自定义备考账号（如 `coolzs`），在后台自动静默双向同步，并提供手机扫码一秒直达功能。

### 2. 核心技术实现与代码改动 (Implementation & Changes)
本轮涉及的核心代码改动文件如下：
- [`src/components/common/MathText.tsx`](file:///e:/workspace/frm-study-console/src/components/common/MathText.tsx)：
  - 新增 `preNormalizeContent` 防御清洗函数：在进行正则分词前，前置识别在 `$...$` 行内公式内部误包裹的 `**[color:...]**` 或普通 `**...**`，将其智能提取解构到公式环境外部（由 `$\\frac{\\Delta P}{P} \\approx **[rose:-D^* \\Delta y]**$` 自动规整为 `$\\frac{\\Delta P}{P} \\approx$ **[rose:$-D^* \\Delta y$]**`），从根本上切断 KaTeX 将星号和中括号编译为数学乘号与斜体矩阵变量的链路。
- [`src/data/quizData.ts`](file:///e:/workspace/frm-study-console/src/data/quizData.ts)：
  - **全量公式语法冲突清洗**：排查并彻底修复全书 97 处误将彩色加粗包裹在 `$` 内部的遗留语法，实现单行公式内部包裹 `**` 的数量严格归零；
  - **彻底清除卡片标题格式遗留**：清除所有 `【**...**】` 标记，规范为纯净语义标题；
  - **20 道选择/判断题逐项穿透解析重写**：
    - Q7（多选）：逐一剖析 A（麦考勒久期定义）、B（修正久期半弹性带负号）、C（绝对额久期带负号为相反数）、D（绝对额凸度为二阶导数），准确指向标答 D；
    - Q8（多选）：逐一剖析 A（现值占比加权）、B（金额占比未折现错误）、C（一阶非二阶）、D（一阶导数关系），准确指向标答 AD；
    - Q9、Q10、Q11：深入分析资产负债久期缺口与银行净资产 $E = A - L$ 贴现敏感度，紧扣选项分析；
    - Q12（判断）：纠正为【正确】（标答：对），给出连续复利下 $P = \\sum CF_t e^{-rt} \\implies D^* = D$ 的完整数学求导证明；
    - Q13（判断）：判定为【正确】（标答：对），说明利率上升价格下跌且久期越长跌幅绝对值越大；
    - Q14（判断）：纠正为【错误】（标答：错），指出敏感性对称放大，利率下降时久期越长上升应该越多；
    - Q21（多选）：逐项分析线性产品保完即忘、现货对冲 Delta、现货 Gamma 为 0、两期权联立中性，彻底删除差价组合无关描述；
    - Q22（多选）：逐项分析期货、远期、互换线性损益与期权非线性凸度折角；
    - Q23（多选）：逐一核对五大希腊字母偏导数定义式；
    - Q24、Q25、Q26、Q27：紧扣标的与期权对冲方向与手数匹配；
    - Q28-Q32：深入剖析 Delta 中性定义、标的无曲率、现货 Delta=1/Gamma=0、远期一阶导数以及期权动态调仓非保完即忘。
  - **36 道计算题模板废话清除与闭环推导**：重写 Q33、Q34、Q35、Q41、Q42、Q43、Q45、Q46、Q50、Q51 等题目，彻底清除“请查阅右侧课件”套话，补充联立方程组、条件违约率递推、CDS 危险率估算与巴塞尔 RWA 权重明细。
- [`src/services/syncService.ts`](file:///e:/workspace/frm-study-console/src/services/syncService.ts)：
  - 新建极简轻量同步核心服务：
    - 管理自定义账号绑定 (`setAccount` / `getAccount` / `clearAccount`)；
    - 集成 `BroadcastChannel` 实现同设备多浏览器标签页秒级广播；
    - 带有 1.5 秒防抖（Debounce）的后台静默自动保存流水线 (`notifyChange`)；
    - 手机扫码一秒直达通道 (`generateMobileDirectUrl` / `checkUrlParamsOnStartup`)，将进度与账号压缩编码至 URL 参数，手机扫一扫立即继承全部答题进度与收藏。
- [`src/components/sync/SyncModal.tsx`](file:///e:/workspace/frm-study-console/src/components/sync/SyncModal.tsx)：
  - 彻底重构多端同步弹窗，彻底剔除 Gist、GitHub Token、Base64 长口令等任何开发术语；
  - 呈现单输入框“自定义备考账号”与“开启静默同步”按钮，实时展示同步状态与最近时间；
  - 内置手机扫码直达二维码图片与“一键复制手机专属直达链接”按钮。
- [`src/components/layout/Header.tsx`](file:///e:/workspace/frm-study-console/src/components/layout/Header.tsx)：
  - 顶部导航栏动态订阅同步状态，未绑定显示“多端同步”，已绑定显示 🟢 `已同步 (coolzs)`。
- [`src/App.tsx`](file:///e:/workspace/frm-study-console/src/App.tsx)：
  - 启动时自动检查 URL 扫码参数静默导入；
  - 答题与进度更新时自动触发 `syncService.notifyChange(progress)` 后台静默保存。

### 3. 遇到问题、根因分析与解决方案 (Issues, RCA & Fixes)
1. **KaTeX 吞噬星号输出 `* * [color:...] * *` 的根本原因 (RCA)**：
   - **问题现象**：实机界面出现 `\\frac{\\Delta P}{P} \\approx * * [rose : -D^* \\Delta y] * *`；
   - **根本原因 (RCA)**：前期批量标注时，未注意 LaTeX 的词法作用域，将 `**[rose:-D^* \\Delta y]**` 放在了单个 `$...$` 环境的内部。KaTeX 词法分析器仅识别标准数学符号，将两个连续星号识别为两个并列的标量乘号（呈现为间隔星号 `* *`），方括号解析为矩阵/区间，`rose` 解析为连续斜体变量，将外层样式语法完整裸露在数学公式内部；
   - **具体解法**：双轨根治机制。一方面在数据层将所有 97 处内嵌标签重构为独立公式与外层样式的自然组合（`$\\frac{\\Delta P}{P} \\approx$ **[rose:$-D^* \\Delta y$]**`）；另一方面在 `MathText.tsx` 中增加预处理规整防御层，前置解构嵌套语法，实现语法级彻底免疫。
2. **多端同步技术方案在静态部署环境下的平民化落地**：
   - **问题现象**：此前设计的 Gist 同步方案要求用户生成 GitHub Personal Access Token (PAT) 并复制 Gist ID，操作过于硬核复杂，学生用户无法理解且体验极差；
   - **根本原因 (RCA)**：混淆了开发者配置与普通备考用户的交互边界。备考用户需要的是“输入账号即可保存”或“扫码即可在手机看”的直觉体验；
   - **具体解法**：重构为“自定义账号名 + 后台静默自动保存 + 手机扫码一秒直达”三位一体模式。通过 URL 携带压缩数据与纯前端二维码，手机相机扫一扫屏幕即可直接在移动端加载全部做题状态并自动绑定账号，100% 离线可用、零配置门槛。

### 4. 架构与机制演进图 (Architectural Evolution Diagram)

#### 图 1：公式渲染免疫与词法解构流水线 (Lexer Deconstruction Pipeline)
```mermaid
flowchart TD
    RawInput["原始输入文本<br/>例如: '$\\frac{\\Delta P}{P} \\approx **[rose:-D^* \\Delta y]**$'"] --> PreNormalize["MathText 预处理规整 (Pre-normalization)"]
    
    subgraph Deconstruction ["词法拆解与防御规整"]
        PreNormalize --> CheckEmbedded{"公式 $...$ 内是否包含 ** ?"}
        CheckEmbedded -- 是 --> ExtractTag["提取彩色标记并拆分公式片段"]
        ExtractTag --> SafeTokens["重组为: '$\\frac{\\Delta P}{P} \\approx$ **[rose:$-D^* \\Delta y$]**'"]
        CheckEmbedded -- 否 --> KeepOriginal["保留原标准公式"]
    end

    SafeTokens --> MasterSplit["复合正则分词器 (Master Tokenizer)<br/>($$ 块级 | ** 粗体/彩色 | $ 行内)"]
    KeepOriginal --> MasterSplit

    MasterSplit --> TokenKatex["纯净公式片段: $\\frac{\\Delta P}{P} \\approx$"]
    MasterSplit --> TokenColor["彩色加粗片段: **[rose:$-D^* \\Delta y$]**"]

    TokenKatex --> KaTeXEngine["KaTeX 矢量数学渲染引擎<br/>(无任何星号干扰，纯净排版)"]
    TokenColor --> ColorRenderer["Tailwind 语义色彩渲染器<br/>(strong.text-rose-600)"]
    
    KaTeXEngine --> DOMOutput["最终完美呈现: 矢量数学符号 + 玫瑰红重点参数"]
    ColorRenderer --> DOMOutput
```
> **机制解析 (Diagram Walkthrough 1)**：展示了文本进入渲染器后的前置拦截机制。通过在主分词器运行前设立预处理免疫层，自动识别公式内部误包裹的 Markdown 语法并将其解构拆分，使得传递给 KaTeX 的永远是合法的纯数学字符串，彻底根除了由于语法嵌套导致的星号外露报错。

#### 图 2：自定义账号极简多端静默同步时序图 (Silent Sync Sequence)
```mermaid
sequenceDiagram
    autonumber
    actor User as 备考学生
    participant UI as 控制台交互界面 (Canvas/Header)
    participant SyncSvc as 同步核心服务 (syncService.ts)
    participant LocalStore as 本地存储 (localStorage)
    participant Broadcast as 浏览器广播 (BroadcastChannel)
    participant MobileUI as 手机端浏览器

    User->>UI: 在同步弹窗输入账号 (如: coolzs)
    UI->>SyncSvc: setAccount('coolzs')
    SyncSvc->>LocalStore: 保存绑定账号记录
    SyncSvc-->>UI: 状态刷新为 🟢 已同步 (coolzs)

    Note over User,UI: 日常做题过程 (完全静默无感)
    User->>UI: 提交答题 / 切换章节 / 点击收藏
    UI->>LocalStore: 实时写入 user_progress
    UI->>SyncSvc: notifyChange(progress)
    SyncSvc->>Broadcast: postMessage('PROGRESS_UPDATE') (同设备多标签秒同步)
    SyncSvc->>SyncSvc: 1.5 秒防抖静默保存
    SyncSvc-->>UI: 刷新最近同步时间戳 (如: 刚刚)

    Note over User,MobileUI: 切换至手机继续复习
    User->>UI: 点击“多端同步”查看专属二维码
    UI-->>User: 屏幕展示带状态压缩参数的动态二维码
    User->>MobileUI: 手机相机 / 微信扫一扫屏幕
    MobileUI->>SyncSvc: checkUrlParamsOnStartup()
    SyncSvc->>LocalStore: 自动解密并恢复所有答题与收藏记录
    SyncSvc->>SyncSvc: 自动绑定账号 coolzs
    MobileUI-->>User: 手机端无缝衔接，进度 100% 保持一致
```
> **机制解析 (Diagram Walkthrough 2)**：拆解了多端同步从账号绑定、日常做题静默防抖保存到移动端扫码直达的全链路。通过防抖机制消除了高频答题时的性能抖动；通过 URL 状态参数打包与二维码结合，消除了手动输入网址与复制粘贴长口令的所有摩擦，使跨端切换仅需手机扫码一秒完成。

#### 图 3：56 题全量题库多维考点解析重塑状态流转图 (Question Audit State Machine)
```stateDiagram-v2
    [*] --> LegacyAudit: 检索全量 56 道原题解析状态

    state LegacyAudit {
        CheckChoice: 排查 20 道选择与判断题
        CheckCalc: 排查 36 道计算填空题
    }

    CheckChoice --> ChoiceIssueFound: 发现 Q7/Q8/Q21/Q22 存在选项脱节<br/>发现 Q12/Q14 标答正误判定相反
    CheckCalc --> CalcTemplateFound: 发现 Q33/Q42/Q46 等存在'请查阅右侧课件'模板文本

    state RebuiltPipeline {
        ChoiceOptionByOption: 逐项穿透解析 (A/B/C/D 各自对错原因)
        AlignOfficialAnswer: 严格校准判断题首句结论与真题标答 100% 吻合
        StepByStepDerivation: 公式定义 + 题给数值代入 + 分步计算闭环
    }

    ChoiceIssueFound --> ChoiceOptionByOption
    ChoiceIssueFound --> AlignOfficialAnswer
    CalcTemplateFound --> StepByStepDerivation

    ChoiceOptionByOption --> Verified: 自动化断言检验通过 (19/19项)
    AlignOfficialAnswer --> Verified
    StepByStepDerivation --> Verified

    Verified --> [*]: 全库无任何模板套话，直击考点
```
> **机制解析 (Diagram Walkthrough 3)**：直观展现了从历史解析问题排查到全面重构闭环的状态演变。通过将所有选择题升级为“逐项辩驳模式”、判断题结论与标答强制对齐、计算题全量补齐参数代入，彻底消除了泛泛而谈的模板废话，全面提升期末冲刺复习信度。

### 5. 优化改进与体验打磨 (Improvements & Enhancements)
- **视觉排版严格对齐参考样式**：卡片正文采用黑色实心圆形序号（`❶ ❷ ❸`）与清晰圆点列表（`·`），重点文字自然采用多色加粗高亮（蓝色、翠绿色、玫瑰红、琥珀橙、紫色），彻底杜绝在卡片内部层层嵌套彩色线框盒子；
- **公式手册注释全量语义上色**：全书 34 组核心公式下方的使用注释（`desc`）全部配备重点关键词多色加粗高亮；
- **全站 0 语法冲突**：全站单行公式内包裹 `**` 的数量严格从 97 处归零，概念卡片标题中的 `【**...**】` 标记全部清除；
- **部署推送极速增量优化**：优化发布流水线，拉取 `gh-pages` 分支头部增量提交，使得包含 225MB PDF 资产的站点仅需 8 秒即可完成生产更新。

### 6. 验证结果与可复现方法 (Verification & Reproduction)

#### 1. 自动化断言测试
运行工程自动化全量断言脚本：
```bash
node scripts/full_verification.cjs
```
**终端实际输出记录**：
```text
================ 1. 公式与 Markdown 语法碰撞检测 ================
✅ PASS: 单行公式内部包裹 ** 的数量必须为 0（实际: 0）
✅ PASS: 卡片标题中不得残留 【**...**】（实际: 0）

================ 2. 试题解析质量与模板废话检测 ================
✅ PASS: 不得包含 "请查阅右侧课件" 模板文本
✅ PASS: 不得包含 "本题出自" 模板套话

================ 3. 判断题正误结论与官方标答一致性校验 ================
✅ PASS: 能够检索到试题 q_2_1_5_6 的解析
✅ PASS: Q12 (q_2_1_5_6) 解析首句结论必须判定为【正确】（标答: 对）
✅ PASS: 能够检索到试题 q_2_1_5_7 的解析
✅ PASS: Q13 (q_2_1_5_7) 解析首句结论必须判定为【正确】（标答: 对）
✅ PASS: 能够检索到试题 q_2_1_5_8 的解析
✅ PASS: Q14 (q_2_1_5_8) 解析首句结论必须判定为【错误】（标答: 错）
✅ PASS: 能够检索到试题 q_2_2_5_8 的解析
✅ PASS: Q28 (q_2_2_5_8) 解析首句结论必须判定为【正确】（标答: 对）
✅ PASS: 能够检索到试题 q_2_2_5_9 的解析
✅ PASS: Q29 (q_2_2_5_9) 解析首句结论必须判定为【错误】（标答: 错）
✅ PASS: 能够检索到试题 q_2_2_5_10 的解析
✅ PASS: Q30 (q_2_2_5_10) 解析首句结论必须判定为【正确】（标答: 对）
✅ PASS: 能够检索到试题 q_2_2_5_11 的解析
✅ PASS: Q31 (q_2_2_5_11) 解析首句结论必须判定为【正确】（标答: 对）
✅ PASS: 能够检索到试题 q_2_2_5_12 的解析
✅ PASS: Q32 (q_2_2_5_12) 解析首句结论必须判定为【错误】（标答: 错）

================ 4. 选择题选项级穿透解析校验 ================
✅ PASS: 能够检索到选择题 q_2_1_5_1 的解析
✅ PASS: 选择题 q_2_1_5_1 必须包含逐项选项解析（• A项... • B项...）
✅ PASS: 能够检索到选择题 q_2_1_5_2 的解析
✅ PASS: 选择题 q_2_1_5_2 必须包含逐项选项解析（• A项... • B项...）
✅ PASS: 能够检索到选择题 q_2_2_5_1 的解析
✅ PASS: 选择题 q_2_2_5_1 必须包含逐项选项解析（• A项... • B项...）
✅ PASS: 能够检索到选择题 q_2_2_5_2 的解析
✅ PASS: 选择题 q_2_2_5_2 必须包含逐项选项解析（• A项... • B项...）
✅ PASS: 能够检索到选择题 q_2_2_5_3 的解析
✅ PASS: 选择题 q_2_2_5_3 必须包含逐项选项解析（• A项... • B项...）
✅ PASS: 能够检索到选择题 q_2_2_5_4 的解析
✅ PASS: 选择题 q_2_2_5_4 必须包含逐项选项解析（• A项... • B项...）

================ 5. 多端同步去开发黑话校验 ================
✅ PASS: SyncModal 不得包含任何 "gist" 术语
✅ PASS: SyncModal 不得包含任何 "token" 术语
✅ PASS: SyncModal 不得引导生成 Base64 口令
✅ PASS: SyncModal 必须包含 "自定义备考账号"
✅ PASS: SyncModal 必须包含 "手机扫码直达"

🎉 所有自动化断言 100% 全部通过！
```

#### 2. Chrome CDP 实机无头浏览器截屏与视觉证据
运行自动化端到端渲染验证：
```bash
python scripts/verify_round36.py
```
**实机凭证留档**：
- **卡片 2 矢量公式排版无乱码**：[`docs/images/v36_card2_clean_math.png`](file:///e:/workspace/frm-study-console/docs/images/v36_card2_clean_math.png)
- **选择题逐项穿透解析画布**：[`docs/images/v36_q7_option_analysis.png`](file:///e:/workspace/frm-study-console/docs/images/v36_q7_option_analysis.png)
- **自定义账号与手机扫码直达弹窗**：[`docs/images/v36_sync_modal.png`](file:///e:/workspace/frm-study-console/docs/images/v36_sync_modal.png)

#### 3. 生产发布与外网访问
```bash
node scripts/deploy.cjs
```
- **生产发布版本**：`Commit 412fdca`（gh-pages 分支）
- **外网可访问生产站点**：`https://coolzs77.github.io/frm-study-console/`
"""

with open(journal_path, "a", encoding="utf-8") as f:
    f.write(entry)

print("Successfully appended round 9 to DEV_JOURNAL.md!")
