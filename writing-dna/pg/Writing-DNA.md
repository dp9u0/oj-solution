# Paul Graham Writing-DNA（操作规则集）

读者：没读过 Paul Graham、要照着写出 70 分近似风格中文文章的人。语料：`raw/` 24 篇英文原文（2001–2023，约 9.6 万词）。他只写英文，本档语言规则均已换算成中文可执行值。每条规则直接执行；与王小波 DNA 的组合关系（默认按语言分线、中文严肃说理文的唯一混搭口）按 `../组合使用说明.md` 裁决。逐篇骨架、词频表、统计口径见同目录四份分层产物。

## 1. 语言层（L1）：中文转写规则

英文基础值：句均 16.7 词、段均 60 词、第二人称 you 33.5 次/千词。中文按 1 词≈1.6 字换算。

**句子**

- 句长 25±5 字；短句（≤16 字）占三成，放段尾做落点；长句（≥55 字）每千字不超过 5%，只用于推演链，不用于抒情。落点短句例："Hard, but doable."（How to Start a Startup）
- 断言必须标定确信度，不裸奔：用"我觉得/我猜/多半/可能"。依据："You need it to express your degree of certainty."（How to Write Usefully）

**段落**

- 段均 85–100 字，写到 4 句必须收束换段；首段 ≤40 字，是断言或场景，不写背景铺垫（原文首段中位仅 24 词）。
- 每 10 段留 1 个独句段当钉子（16 字内）。Taste for Makers 独词成段 "Taste."，中文写成"品味这东西。"——名词加句号，不硬译感叹。

**人称与词汇**

- 主语优先用"你"（每 45 字一次），其次泛指的人，最后才"我"；论说的落点永远在人身上，不选抽象机构名词。
- 动词用日常小动词：做、拿、找、试、用；禁用"构建、实现、赋能"。形容词只有四档：好（good）、差（bad）、难（hard）、了不起（great）。hard 几乎总作卖点：难=值得做。
- 每 60 字一个口语词（别、其实、东西、搞）。

**句式**

- "不是 A，而是 B"翻转是 signature move（原文 not just / rather than ≈1.2 次/千词）：第一段内完成一次，全文每千字 1 次。例："the question is not how to avoid procrastination, but how to procrastinate well."（Good and Bad Procrastination，问题不是如何避免拖延，而是如何拖得好。）
- 修辞问句每千字 3 个，用于转场（"为什么？""这算什么问题？"）。
- 括号旁注保留（约 6 次/千字），装自嘲和补刀。

**禁令**

- 破折号全文 ≤3 个；同位语补刀改用句号断开。
- 引号减半，只给真正可疑的术语打引号；英文术语要么加注要么换日常对应。
- 结尾不写总结段，落一条可执行规则或一个直接问句。

**成稿 checklist**：首段 ≤40 字；每 45 字一个"你"；每段 4 句收束、85–100 字；每 10 段 1 独句段；每千字 1 次翻转、3 个问号；破折号 ≤3；名词具体（人名、物名、工具名照写）、动词小、形容词四档。

## 2. 结构层（L2）：四类型骨架

英文词数 ×1.6≈汉字。

**A 技术论证型**（代表：Beating the Averages、Taste for Makers）
断言开头（50–160 字，直接给靶子）→ 抓公认说法的自相矛盾（"But wait a minute"）→ 3–6 个加粗节题小节，每节=论点+历史证据+跨域类比 → 配方句收尾（50–160 字），不写总结段。节题用名词短语（"The Blub Paradox"）或判断句（"Good design is simple"）。

**B 创业建议型**（代表：The 18 Mistakes That Kill Startups、How to Start a Startup）
清单断言或咨询场景开头，第一句给全清单 → 重新定义核心词（growth / scale / default alive）→ 枚举 3–18 条，每条=断言→公司名案例+具体数字→可执行建议 → 行动指令收尾（"If you want to do it, do it."）。

**C 写作思考型**（代表：How to Write Usefully、Write Simply）
自问自答或个人做法自述开头 → 给出与通行答案不同的定义 → 递进四拍：定义→机制→操作→惊人推论，不用标题直排 → 公式或格言置换收尾；短文以量化承诺收（Write Like You Talk："你将超过 95% 的写作者"）。

**D 工作人生型**（代表：Life is Short、The Bus Ticket Theory of Genius）
反常识观察开头 → 自造词命名接住观察（bus ticket theory，配自嘲式定义仪式）→ 推论链：概念→历史人物佐证→日常推论→自传供证（具体到年龄、小时数）→ 祈使三连或悬置收尾（"Will it have any effect? I have no idea."）。

**五拍共同骨架**（最像 PG 的最小结构）：

1. 断言开篇：一句可摘抄的话，不写"随着……的发展"。
2. 翻转：not X but Y 重定义，或给观察命名——全文的价值在这一步创建。
3. 装置化展开：必选一种承载装置——编号清单（3–18 条）、自造术语串、公式/比例表、历史谱系、案例串。装置让文章可引用、可反驳。
4. 自我供证：至少一处第一人称经验+一处具体数字。
5. 规则化收尾：压成一条规则、一个公式或一个直接问句。

通用件：修辞问句转场、单句段钉子、脚注专放自我拆台与预判反驳（17/24 篇有脚注）、文末致谢行（24/24 篇）。

**五拍骨架的独立使用**：

- 五拍骨架（断言开篇→翻转→装置化展开→自我供证→规则化收尾）是 PG 线的自足结构，英文 essay 直接用；中文严肃说理文混搭时作为结构骨架借出，语言层仍归王小波（反讽密度限额下调，见组合说明）。
- 开头差异：PG 第一句是断言；借入中文混搭时，把断言压进王小波式由头的后半句，一次完成。

## 3. 选题判断（L3）

写什么，四条公式：

1. 自己做过且有原始数据的事，从不写没下过场的领域。"You should only write about things you've thought about a lot."（How to Write Usefully）
2. 方法论标题：24 篇里 10 篇实质是 How to。
3. 常识反转：找一个人人接受的前提，证明它错了或反着用（拖延可以是好事、品味不是主观的、不扩张）。
4. 命名缺口：给众人能感觉但没有词的现象造词接管（schlep blindness、default alive、maker's schedule）。命名即选题。

不写什么：时事站队、人物特稿、产品测评、纯抒情日记——个人经历永远只作论据。"The things I've written just for myself are no good."（The Age of the Essay）

切入时机：早期判断（机制刚在一线验证且看清会扩散）、跟进修正（读者指出遗漏后公开修旧案）、事后复盘（失败机制看清且能提炼成规则，如"1995 年做线上画廊，画廊根本不想上线"，How to Get Startup Ideas）。

## 4. 素材规范（L4）

- 例子四源：历史（结构可迁移片段+精确年份）、个人经历（必带数字或年龄节点）、思想实验（给概念造可检验的极端场景，如 Blub 语言）、行业案例（公司名+动作级细节，如 Collison 兄弟 "Right then, give me your laptop"，Do Things that Don't Scale）。
- 数据：给单点精确数字，不追求统计代表性；把数字转译成时间或身体感受（"You only get 52 weekends with your 2 year old."，Life is Short）；不确定性明说（"I have no idea whether this would work."）。
- 类比：每 2–3 段一个；两种构造——领域外具体物映射结构（指南针→增长目标）、程序员术语跨域（"There's a faint xor between talent and hard work"，How to Work Hard）；类比后必加限定（"This metaphor doesn't stretch that far."）。
- 对权威：短引文一次一人，点名转述不给页码；引权威是为了接着修正推进，不是背书；反权威是默认姿态（"industry best practice"被拆解为大公司的免责机制，Revenge of the Nerds）。

## 5. 核心命题（L5）：8 条

任何一篇都要能归约到其中至少一条；命题 3 是其余七条的方法论内核。

1. 用户/读者是唯一裁判。"Build something users love… How hard is that?"（How to Start a Startup）
2. 写作不是表达思考，写作就是思考。"Putting ideas into words is a severe test."（Putting Ideas into Words）
3. 独立思考是一类工作的准入条件，不是美德装饰。"There are some kinds of work that you can't do well without thinking differently from your peers."（How to Think for Yourself）
4. 兴趣驱动的工作量，纪律给不了。"Interest will drive you to work harder than mere diligence ever could."（How to Do Great Work）
5. 简单是诚实，花哨是藏拙。"Writing simply keeps you honest."（Write Simply）
6. 组织的天性是压制个体天才，无法改革只能绕开；个体策略是去小地方、挑"必须装进一个脑袋的问题"（Holding a Program in One's Head）。
7. 大问题斜着眼看；向自己说谎是合法但有边界的工具。"Lots of great things began with someone saying 'How hard could it be?'"（How to Do Great Work）
8. 生命短到可以用数字算，所以 bullshit 要动手剪。"Relentlessly prune bullshit."（Life is Short）

## 6. 视觉层（L6）：无可提取层

如实记录：24 篇正文 0 张图（仅 5 处站点占位 gif）、0 个标题行、无配色、无排版决策——视觉形态是 paulgraham.com 站点样式的副产品，不构成可蒸馏的发布视觉规范。

仅有的三条可迁移规则：

1. 标题只到文章题一级，正文内分节用一行加粗短语或分隔线，不建多层标题。
2. 加粗只给清单条目的论点句（一句一行、句号收尾），不用加粗强调普通陈述。
3. 图为零是常态：类比和例子承担全部画面功能，不靠配图。

发布视觉决策（题图、分隔符、行距、配色、摘要卡片）无本线可提取素材，按发布平台通行规范自行确定；中文杂文线发布时同样如此，正文内排版规则见各自 L6 段。
