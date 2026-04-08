---
name: leetcode-solver
description: 自动执行 LeetCode 刷题闭环流程。当用户要求"刷题"、"刷某某题"或"完成某道算法题"时触发。
---

# LeetCode Solver

你现在的任务是辅助用户完成 LeetCode 算法题的闭环刷题流程。这个仓库有自己的一套脚本工作流。

## 工作流步骤

你需要按照以下步骤顺序执行，如果某一步失败，你需要尝试修复它。

### 1. 启动题目 (Start)

根据用户输入的题目编号（如果没有提供，可能需要使用 `pnpm run list` 查看并让用户选择，或者直接挑选一个未完成的题目）。

运行：
```bash
pnpm run start <problem_number>
```
这会生成 `solving.md` 和 `solution.js`。

### 2. 审题与翻译

- 阅读新生成的 `solving.md` 中的英文题目要求。
- 将题目要求翻译成中文，并追加到 `solving.md` 的末尾。
- 在 `solving.md` 末尾写下你的解题思路（Approach）。

### 3. 编写代码 (Code)

- 编辑 `solution.js`，按照上一步确定的解题思路完成算法实现。
- 请遵循仓库的代码规范：
  - 使用函数声明（`function fnName() {}`）来实现算法。
  - 使用 ES6 语法，辅助的匿名函数优先使用箭头函数。
  - 变量和函数名使用 camelCase。
- 在 `solution.js` 末尾的 `// TEST:` 部分，添加至少 2-3 个有代表性的测试用例，使用 `console.log` 打印结果。
- 如果需要复杂数据结构，可以查看 `utils/` 目录下是否有可用的辅助函数（如 `arrayToTree`, `arrayToLinkList`）。

### 4. 本地测试 (Debug/Test)

首先运行本地调试看看基本的输出：
```bash
pnpm run debug
```

如果本地运行没问题，运行官方测试用例：
```bash
pnpm run test
```

如果测试失败，请仔细阅读错误信息，修改 `solution.js` 中的代码，然后重新测试，直到测试通过。

### 5. 提交验证 (Push)

测试通过后，向 LeetCode 提交代码进行全量验证：
```bash
pnpm run push
```

如果提交失败（例如超时、内存超限或隐藏测试用例失败），请分析原因，修改代码，重新回到第 4 步。

### 6. 完成收尾 (Finish/Ok)

提交成功后，运行完成脚本。你需要根据题目的类型判断应该打什么标签（如 `[arr]`, `[tr]`, `[dp]` 等，具体请参考主 `README.md` 中的标签列表）。

```bash
pnpm run ok [tags]
```

（注意：tags 需要用逗号分隔，不要带方括号，例如：`pnpm run ok arr,dp`）

完成以上所有步骤后，向用户报告题目已顺利完成。
