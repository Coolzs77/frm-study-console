# 《金融风险管理》期末真题背诵与真机模考控制台 (FRM Study Console)

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.4.3-purple.svg)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178c6.svg)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.19-38bdf8.svg)](https://tailwindcss.com/)
[![KaTeX](https://img.shields.io/badge/KaTeX-0.19.1-00d084.svg)](https://katex.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![GitHub Pages](https://img.shields.io/badge/Deployment-GitHub%20Pages-success.svg)](https://coolzs77.github.io/frm-study-console/)

> 专为《金融风险管理》期末机考打造的现代化单页面复习控制台。收录平时全部 8 份章节测验共 56 道原题与 35 张原题高清公式图，深度融合课件核心理论与推导公式，提供考前速记、交互刷题、10 题真机模拟考、手机/电脑多端无缝同步功能。

---

## 🌟 在线访问与移动端使用

- **生产站点地址**：👉 [https://coolzs77.github.io/frm-study-console/](https://coolzs77.github.io/frm-study-console/)
- **多端适配**：适配电脑大屏（三栏流式工作台）、平板横屏与手机端（单栏流式抽屉）。
- **手机/电脑数据同步**：在电脑端做完题或标记错题后，点击右上角【多端同步】生成同步码，手机端粘贴同步码即可 1 秒双向同步错题本与收藏记录。

---

## 📸 实机界面全景图集 (Live Visual Showcase)

### 1. 完整课件 PDF 原生内嵌研读与一键展开半屏工作台 (最多半屏 50vw)
![完整课件PDF研读与半屏工作台](docs/images/screenshot_v32_halfscreen_pdf.png)

### 2. 全书公式手册与五个期权希腊值符号严谨排版 ($\Delta, \Gamma, \Theta, \mathcal{V}, \rho$)
![五个希腊值符号严谨排版](docs/images/screenshot_v32_formula_greek.png)

### 3. 交互刷题反复练习与重做本题体验
![交互刷题反复作答](docs/images/screenshot_v31_interactive_practice.png)

### 4. 10 题真机模拟考引擎与 20 分钟倒计时系统
![10题模拟考实机界面](docs/images/screenshot_mock_exam.png)

### 5. 手机与电脑多端数据同步中枢 (口令快传 / Gist 云同步 / 离线备份)
![多端数据同步弹窗](docs/images/screenshot_sync_modal.png)

### 5. 移动端自适应竖屏界面 (手机离线随身刷题)
<div align="center">
  <img src="docs/images/screenshot_mobile_daytime.png" width="380" alt="移动端自适应界面" />
</div>

---

## 📐 系统全景架构图 (Architecture Diagram)

```mermaid
flowchart TD
    subgraph ClientApp ["现代化前端应用体系 (React 18 + TypeScript + Vite 6)"]
        Header["粘土拟态悬浮导航栏 (搜索 / 题数统计 / 倒计时 / 主题切换 / 多端同步)"]
        
        subgraph TriColumn ["流式三栏核心工作台"]
            LeftCol["👈 左栏：大纲与导航树 (w-72)\n• 5大模式：速记背题 / 交互刷题 / 10题模拟考 / 错题本 / 收藏夹\n• 8大章节快捷目录与题型筛选胶囊\n• 支持一键折叠为 56px 迷你竖条"]
            CenterCol["🎯 中栏：题目画布与模考引擎 (flex-1)\n• 粘土拟态巨幕题卡\n• 原题公式图/现金流图原位高清渲染\n• 选项果冻弹性按压与即时正误判定\n• 填空题数值容差比对与参考答案回显\n• 🎯 10题模拟考：20分钟倒计时与百分制成绩单"]
            RightCol["📖 右栏：课件联动与公式字典 (w-80)\n• 智能课件联动：根据当前题目自动定位对应 PPT 核心理论\n• 25条全书核心计算公式手册 (KaTeX 矢量精排)\n• 巴塞尔协议 III 资本充足率三支柱监管速查表"]
        end
        
        Header --> TriColumn
    end

    subgraph SyncEngine ["多端同步中枢 (Multi-Device Sync Center)"]
        CodeSync["通路 1：Base64 口令 / 扫码秒级快传"]
        GistSync["通路 2：GitHub Gist 云端双向拉取与备份"]
        FileBackup["通路 3：离线 JSON 备份文件导入与导出"]
    end

    TriColumn <--> SyncEngine
```

---

## 🚀 技术特性与设计亮点

1. **100% 完全复刻粘土拟态风格 (Claymorphism)**：
   - 深度继承 `muduo-study-console` 的视觉系统；
   - 拥有外凸内嵌双层漫反射阴影（`clay-card-shadow`、`clay-button-shadow`、`clay-inset-groove`、`clay-badge-shadow`）；
   - 按压触觉形变动效（`.clay-squash:active { transform: scaleX(1.03) scaleY(0.95); }`）；
   - 白天温润浅灰蓝泥质感（`#eef2f7`）与深邃哑光深色模式（`#0b0f17`）一键切换。
2. **数学公式 KaTeX 原生超清矢量排版**：
   - 告别模糊截图与纯文本伪代码；
   - 麦考勒久期 $D = \frac{\sum t \cdot CF_t / (1+y)^t}{P}$、修正久期敏感性近似 $\Delta P / P \approx -D^* \Delta y + \frac{1}{2} C (\Delta y)^2$、在险价值 $VaR$、违约概率利差公式 $PD \approx \frac{s}{1-R}$、流动性调整 $LVaR$ 均通过 KaTeX 原生渲染。
3. **10 题真机模拟考引擎**：
   - 严格对标期末机考规则：从全库 56 题中无放回随机抽取 10 题，每题 10 分，满分 100 分；
   - 20 分钟倒计时时钟，交卷后即时自动计算成绩单并归集错题。
4. **智能错题本与重点收藏**：
   - 刷题与模考中答错的题目自动归入错题本，支持掌握后单题移出；
   - 遇到计算复杂的重点题目，点击右上角星标一键收藏；
   - 数据完全保存在浏览器 `localStorage`，刷新不丢失。

---

## 🛠️ 本地开发与构建指南

### 运行环境
- Node.js >= 18.0.0
- npm >= 9.0.0

### 操作步骤
```bash
# 1. 克隆代码仓库
git clone https://github.com/Coolzs77/frm-study-console.git
cd frm-study-console

# 2. 启动本地开发热重载服务器
npm run dev

# 3. 生产打包构建
npm run build

# 4. 一键部署到 GitHub Pages
npm run deploy
```

---

## 📝 更新日志 (Changelog)

| 版本号 | 更新日期 | 更新内容概述 |
| :--- | :--- | :--- |
| **v3.2.0** | 2026-11-11 | • **完整原版课件 PDF 深度内嵌**：全套 14 份课件（含 2.3 与 2.5 pptx 导出）全面转为高质量矢量 PDF 原生嵌入，支持缩放、滚动翻页、目录书签与新标签页全屏研读<br/>• **右侧栏自由拖拽与一键展开半屏**：左边缘配备拖拽把手（支持在 360px 至 50vw 自由拖动并持久化宽度），顶部配备一键半屏展开按钮（严格限制最大宽度为 50vw，左右视窗均衡）<br/>• **高频考点页码一键直达**：顶部配备 P13、P16、P28、P35 等考点快速直达胶囊，点击一秒切换定位至课件指定页<br/>• **公式手册五个希腊值符号严谨修正**：彻底消除多重转义缺陷，精准呈现纯正希腊符号 $\Delta, \Gamma, \Theta, \mathcal{V}, \rho$ |
| **v3.1.0** | 2026-11-11 | • 课件精讲重构为**内嵌核心课件研读面板**：剔除引入废话与案例，精选 42 页核心考点原版课件，支持快捷上下翻页、页码直达缩略栏与原画灯箱<br/>• 攻克公式手册白屏崩溃异常（修复 JSX 变量解析缺陷，全量兼容 usage 与 desc，外层 ErrorBoundary 熔断防护）<br/>• 交互刷题模式解除提交后输入封锁，支持持续改选改填并新增专属【重做本题】一键重置按钮<br/>• 答案解析排版重构：支持换行段落化，清晰拆分为思路、推导步骤与结论归纳，杜绝单一大段文字墙<br/>• 顶栏极简收敛为“🏛️ 金融风险管理”，章节大纲剔除“测验”字样并上线动态背会进度条，全量收录五个期权希腊值体系 |
| **v1.1.0** | 2026-11-11 | • 顶栏与全站标题降噪精简，彻底去除多余修饰与冗余文本<br/>• 做题图与推导图物理隔离，彻底去除悬浮暗色遮罩与遮挡文字<br/>• 导航控制栏置顶（上一题/下一题/题号跳转一键直达，免滚轮滑动）<br/>• 仿代码随想录独立题解抽屉与 1:1 标准答案原汁回显<br/>• 修复交互刷题提交后答案显示覆盖缺陷<br/>• 课件精讲与核心概念解析全面支持行内 KaTeX 公式精排与重点加粗，嵌入精选重点 PPT 核心页码卡片 |
| **v1.0.0** | 2026-11-11 | • 现代化前端架构全栈搭建（Vite 6 + React 18 + TS + Tailwind CSS + KaTeX）<br/>• 100% 完全复刻粘土拟态风格与流式三栏式布局<br/>• 56 道原题与 35 张高清原图全量集成，公式全部标准化为 LaTeX<br/>• 实装 10 题真机模拟考、错题本与收藏夹系统<br/>• 实装手机/电脑多端数据同步中心（口令快传 / Gist / 文件备份）<br/>• 自动部署上线至 GitHub Pages |
