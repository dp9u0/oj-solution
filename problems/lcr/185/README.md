# [LCR 185] 统计结果概率

## Description


```md
https://leetcode.cn/problems/nge-tou-zi-de-dian-shu-lcof/description/
* algorithms
* Medium (58.09%)
* Likes:    608
* Dislikes: -
* Testcase Example:  '3'
你选择掷出 num 个色子，请返回所有点数总和的概率。
你需要用一个浮点数数组返回答案，其中第 i 个元素代表这 num 个骰子所能掷出的点数集合中第 i 小的那个的概率。

示例 1：
输入：num = 3
输出：[0.00463,0.01389,0.02778,0.04630,0.06944,0.09722,0.11574,0.12500,0.12500,0.11574,0.09722,0.06944,0.04630,0.02778,0.01389,0.00463]
示例 2：
输入：num = 5
输出:[0.00013,0.00064,0.00193,0.00450,0.00900,0.01620,0.02636,0.03922,0.05401,0.06944,0.08372,0.09452,0.10031,0.10031,0.09452,0.08372,0.06944,0.05401,0.03922,0.02636,0.01620,0.00900,0.00450,0.00193,0.00064,0.00013]

提示：
1 <= num <= 11

```

## Solution

[SourceCode](./solution.js)

### English Description

You throw `num` dice. Return, as a float array, the probability of every possible sum of points. The `i`-th element represents the probability of the `i`-th smallest sum that can be rolled with the `num` dice.

**Example 1:**
```
Input: num = 3
Output: [0.00463,0.01389,0.02778,0.04630,0.06944,0.09722,0.11574,0.12500,0.12500,0.11574,0.09722,0.06944,0.04630,0.02778,0.01389,0.00463]
```

**Constraints:**
- `1 <= num <= 11`

### Approach (中文思路)

**动态规划：统计各点数和的组合方式数**

- `num` 个骰子，点数和范围是 `[num, 6*num]`，共 `6*num - num + 1 = 5*num + 1` 种和。
- 每种点数和的概率 = 达到该和的**方式数** ÷ 总情况数 `6^num`。
- 用滚动 DP 数组 `dp[s]` 表示「当前已投骰子数下，点数和为 s 的方式数」。
- 初始一个骰子：`dp[1..6] = 1`。
- 每新增一个骰子：新方式数 `next[t] = Σ dp[t - k]`（k = 1..6），表示最后一颗骰子掷出 k。
- 重复 num-1 次后，`dp` 的下标范围即 `num..6*num`，除以 `6^num` 得到概率。
- 时间复杂度 O(num · 6num)，空间 O(6num)。
- 注意 JS 中 `6^num`（num≤11 时 ≤ 6^11=362797056）可安全用 Number 表示，但统计方式数建议用 Number（值不超过 6^num，安全）。
- 最终浮点结果可四舍五入保留 5 位小数以匹配样例精度（样例输出如 0.00463 为 5 位小数），但 LeetCode 判定允许浮点误差，直接输出除法结果即可。
