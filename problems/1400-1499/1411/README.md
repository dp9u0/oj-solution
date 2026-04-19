# [1411] Number of Ways to Paint N × 3 Grid

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-ways-to-paint-n-3-grid/description/)

* algorithms
* Hard (80.52%)
* Likes:    1660
* Dislikes: 92
* Testcase Example:  '1'

```md
You have a grid of size n x 3 and you want to paint each cell of the grid with exactly one of the three colors: Red, Yellow, or Green while making sure that no two adjacent cells have the same color (i.e., no two cells that share vertical or horizontal sides have the same color).
Given n the number of rows of the grid, return the number of ways you can paint this grid. As the answer may grow large, the answer must be computed modulo 109 + 7.

Example 1:


Input: n = 1
Output: 12
Explanation: There are 12 possible way to paint the grid as shown.

Example 2:

Input: n = 5000
Output: 30228214


Constraints:

n == grid.length
1 <= n <= 5000


```

## 题目翻译

用3种颜色涂 n×3 的网格，相邻格子颜色不同，求方案数对 10^9+7 取模。

## 解题思路

**矩阵快速幂 / 递推**

每行的涂色模式分两类：ABA（两端相同如 RYR）和 ABC（三色不同如 RYG）。n=1 时 ABA 有 6 种，ABC 有 6 种。递推：ABA 后可接 3 个 ABA + 2 个 ABC，ABC 后可接 2 个 ABA + 2 个 ABC。即 f[i] = [3,2;2,2] * f[i-1]，矩阵快速幂 O(log n) 或直接递推 O(n)。

## Solution

[SourceCode](./solution.js)
