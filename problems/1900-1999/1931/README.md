# [1931] Painting a Grid With Three Different Colors

## Description

[LeetCode Problem Description](https://leetcode.com/problems/painting-a-grid-with-three-different-colors/description/)

* algorithms
* Hard (77.16%)
* Likes:    939
* Dislikes: 58
* Testcase Example:  '1\n1'

```md
You are given two integers m and n. Consider an m x n grid where each cell is initially white. You can paint each cell red, green, or blue. All cells must be painted.
Return the number of ways to color the grid with no two adjacent cells having the same color. Since the answer can be very large, return it modulo 109 + 7.

Example 1:


Input: m = 1, n = 1
Output: 3
Explanation: The three possible colorings are shown in the image above.

Example 2:


Input: m = 1, n = 2
Output: 6
Explanation: The six possible colorings are shown in the image above.

Example 3:

Input: m = 5, n = 5
Output: 580986


Constraints:

1 <= m <= 5
1 <= n <= 1000


```

## 中文翻译

m×n 网格，每格涂红/绿/蓝三色之一，相邻格子不能同色。求涂色方案数，mod 10^9+7。m ≤ 5, n ≤ 1000。

## 解题思路

**状态压缩DP（按列）**：

1. 枚举所有合法列状态：高度 m 的列中相邻不同色，共 3×2^(m-1) ≤ 48 种
2. 预处理兼容矩阵：两列同行不同色则兼容
3. dp[i] = 以状态 i 结尾的方案数，逐列转移
4. 时间 O(n × S²)，S ≤ 48

## Solution

[SourceCode](./solution.js)
