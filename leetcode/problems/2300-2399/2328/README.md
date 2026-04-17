# [2328] Number of Increasing Paths in a Grid

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-increasing-paths-in-a-grid/description/)

* algorithms
* Hard (57.37%)
* Likes:    2117
* Dislikes: 45
* Testcase Example:  '[[1,1],[3,4]]'

```md
You are given an m x n integer matrix grid, where you can move from a cell to any adjacent cell in all 4 directions.
Return the number of strictly increasing paths in the grid such that you can start from any cell and end at any cell. Since the answer may be very large, return it modulo 109 + 7.
Two paths are considered different if they do not have exactly the same sequence of visited cells.

Example 1:


Input: grid = [[1,1],[3,4]]
Output: 8
Explanation: The strictly increasing paths are:
- Paths with length 1: [1], [1], [3], [4].
- Paths with length 2: [1 -> 3], [1 -> 4], [3 -> 4].
- Paths with length 3: [1 -> 3 -> 4].
The total number of paths is 4 + 3 + 1 = 8.

Example 2:

Input: grid = [[1],[2]]
Output: 3
Explanation: The strictly increasing paths are:
- Paths with length 1: [1], [2].
- Paths with length 2: [1 -> 2].
The total number of paths is 2 + 1 = 3.


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 1000
1 <= m * n <= 105
1 <= grid[i][j] <= 105


```

## 翻译

给定 m x n 整数矩阵 grid，可向4个方向移动。求严格递增路径的数量（可从任意格子开始和结束），结果对 10^9+7 取模。

## 解题思路

将所有格子按值排序。dp[i][j] 表示以 (i,j) 结尾的递增路径数，初始为1（自身）。对每个格子，累加相邻更小格子的 dp 值。按值递增处理确保依赖已计算。时间 O(mn log(mn))。

## Solution

[SourceCode](./solution.js)
