# [1215] 步进数

## Description


```md
https://leetcode.cn/problems/stepping-numbers/description/
* algorithms
* Medium (45.80%)
* Likes:    42
* Dislikes: -
* Testcase Example:  '0\n21'
如果一个整数上的每一位数字与其相邻位上的数字的绝对差都是 1，那么这个数就是一个「步进数」。
例如，321 是一个 步进数，而 421 不是。
给你两个整数，low 和 high，请你找出在 [low, high] 范围内的所有 步进数，并返回 排序后 的结果。

示例 1：
输入：low = 0, high = 21
输出：[0,1,2,3,4,5,6,7,8,9,10,12,21]
示例 2：
输入：low = 10, high = 15
输出：[10,12]

提示：
0 <= low <= high <= 2 * 109
Hint 1: Try to generate the numbers using recursion.
Hint 2: In one step in the recursion, add a valid digit to the right of the current number.
Hint 3: Save the number if it's in the range between low and high.

```

## Solution

[SourceCode](./solution.js)

## Translation

Stepping number: every pair of adjacent digits differs by exactly 1. Return all stepping numbers in [low, high] sorted (high ≤ 2×10⁹).

- Example: [0, 21] → [0,1,2,3,4,5,6,7,8,9,10,12,21]

## Approach

**BFS 逐位扩展**。种子 1–9(0 单独处理,无相邻位),每个数 v 按末位 d 生成 v×10+d±1 入下一层;v > high 时其所有后代只会更大,直接剪枝。收集后排序。步进数总量几千,规模极小。
