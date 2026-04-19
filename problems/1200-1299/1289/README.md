# [1289] Minimum Falling Path Sum II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-falling-path-sum-ii/description/)

* algorithms
* Hard (63.14%)
* Likes:    2377
* Dislikes: 124
* Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'

```md
Given an n x n integer matrix grid, return the minimum sum of a falling path with non-zero shifts.
A falling path with non-zero shifts is a choice of exactly one element from each row of grid such that no two elements chosen in adjacent rows are in the same column.

Example 1:


Input: grid = [[1,2,3],[4,5,6],[7,8,9]]
Output: 13
Explanation:
The possible falling paths are:
[1,5,9], [1,5,7], [1,6,7], [1,6,8],
[2,4,8], [2,4,9], [2,6,7], [2,6,8],
[3,4,8], [3,4,9], [3,5,7], [3,5,9]
The falling path with the smallest sum is[1,5,7], so the answer is13.

Example 2:

Input: grid = [[7]]
Output: 7


Constraints:

n == grid.length == grid[i].length
1 <= n <= 200
-99 <= grid[i][j] <= 99


```

## 翻译

给定一个 n × n 的整数矩阵 `grid`，返回一个"非零偏移下降路径"的最小和。

非零偏移下降路径是指从每一行恰好选一个元素，且相邻两行所选元素不在同一列。

## Approach

动态规划。对每一行，维护 dp[j] = 从第一行到当前行、落在第 j 列的最小路径和。转移时，dp[j] = grid[i][j] + min(dp[k]) for k != j。

优化：每次只需要知道上一行的最小值和次小值。如果 j == 最小值所在列，则取次小值，否则取最小值。这样每行处理从 O(n²) 降到 O(n)。

总时间复杂度：O(n²)，空间复杂度：O(n)（可原地修改 grid）。

## Solution

[SourceCode](./solution.js)
