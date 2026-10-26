# 管清陽 個人主页

管清陽的求职向个人主页，面向 GitHub Pages。主站为 English first，面向日本的外企 / 面向日本市场的全球公司。当前版本采用 evidence-led portfolio 结构，重点展示 AI Platform / Agent Systems Engineering 方向。

## 文件结构

- `index.html`: 页面内容和结构
- `styles.css`: 视觉样式和响应式布局
- `script.js`: 年份和占位链接处理
- `assets/hero.png`: 首页视觉图
- `assets/favicon.svg`: 站点图标

## 下一轮建议补充

1. 把 `Guan21` 替换成你希望公开使用的姓名或昵称。
2. 为 DevCrew 补 ADR、架构图和测试证据索引。
3. 将 MyAgent / chat_prompt_tool 补成可公开或可面试展示的 AI Application proof。
4. 为 QiitaAIDemo 补截图、示例输出和一次端到端运行记录。
5. 按求职方向继续补日文版内容。

## 内容结构

当前页面已经调整为证据链型求职主页，2026-10-26 更新主线为可靠、可审查、可放心使用的 AI 工程，重点展示：

- AI Platform / Agent Systems Engineer 定位
- DevCrew 的 Engineering Control Plane 定位，以及架构、安全、验证交付、模型理解、产品判断五项当前重点
- Proof Snapshot 与 Evidence Registry
- DevCrew / cc-orca 旗舰公开案例
- 脱敏 Cloud AI Platform Architecture 案例
- AI Application & Workflow Architecture 作为下一阶段补强方向
- Supporting Evidence: Claude Code 日语架构写作、QiitaAIDemo、MyAgent / chat_prompt_tool 候选项目
- 倒序 Career Timeline
- AWS 资格、JLPT N1、GitHub PR 与公开仓库证据

## 本轮来源与表述边界

- 五项近期变化来自用户 2026-10-26 提供的说明。蒸馏、量化、Teacher/Student、评分、数据与硬件探索标为学习研究，没有训练完成或模型质量指标声明。
- 八个精选 PR：#94、#95、#96、#98、#114、#118、#127、#149。它们均合并到 Guan21/cc-orca fork 的 company-work 分支；不表示合并到上游 stablyai/orca。
- 71 → 0 是 #95 记录的历史静态 forbidden-endpoint baseline 条目数变化，不是请求次数、唯一域名数量或全局零外联证明。
- #149 的 84 项 focused tests 来自 PR 验证记录，范围是离线事实模型；没有声明本次重跑了 DevCrew 测试。
- #127 的代码与构建验证和已安装 Windows 验收分开表述；PR 记录的 installed retest 当时被阻塞。
- #176、#178 的身份、授权与撤销机制，#184 的跨平台 readiness，以及 #185 的 V2 产品方向与 #195 的 promptfoo PoC 都链接为开放设计/验证任务，不作为投产结果。
- 已核对上述 PR/issue 的 GitHub 公开记录。主页更新通过静态页面、锚点、响应式截图和发布后 HTTP 检查验证。

后续建议补充简历 PDF、项目截图、Demo 视频或公开邮箱。

## 存档

方案 B 改版前的线上版本对应 commit `1bc437d`，并已打 tag：`archive-before-evidence-chain-2026-10-12`。
