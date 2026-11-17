# [247] 中心对称数 II

## Description


```md
https://leetcode.cn/problems/strobogrammatic-number-ii/description/
* algorithms
* Medium (56.28%)
* Likes:    116
* Dislikes: -
* Testcase Example:  '2'
给定一个整数 n ，返回所有长度为 n 的 中心对称数 。你可以以 任何顺序 返回答案。
中心对称数 是一个数字在旋转了 180 度之后看起来依旧相同的数字（或者上下颠倒地看）。

示例 1:
输入：n = 2
输出：["11","69","88","96"]
示例 2:
输入：n = 1
输出：["0","1","8"]

提示：
1 <= n <= 14
Hint 1: Try to use recursion and notice that it should recurse with n - 2 instead of n - 1.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Given an integer `n`, return all strobogrammatic numbers (numbers that look the same rotated 180°) with exactly `n` digits. Digit mappings: 0→0, 1→1, 6→9, 8→8, 9→6.

**Example:**
n = 2 → ["11","69","88","96"]

**Constraints:**
- 1 <= n <= 14

## Approach

递归包裹:`wrap(k)` = 对 `wrap(k-2)` 的每个结果两侧加对称对 (1,1)/(6,9)/(8,8)/(9,6);`k = 0` 返回 [""]、`k = 1` 返回 ["0","1","8"]。顶层不允许 (0,0) 对以避免前导零。

时间 O(5^(n/2) × n),空间同量级(输出本身)。
