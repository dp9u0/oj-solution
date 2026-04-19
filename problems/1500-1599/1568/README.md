# [1568] Minimum Number of Days to Disconnect Island

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/description/)

* algorithms
* Hard (58.74%)
* Likes:    1302
* Dislikes: 224
* Testcase Example:  '[[0,1,1,0],[0,1,1,0],[0,0,0,0]]'

```md
You are given an m x n binary grid grid where 1 represents land and 0 represents water. An island is a maximal 4-directionally (horizontal or vertical) connected group of 1&#39;s.
The grid is said to be connected if we have exactly one island, otherwise is said disconnected.
In one day, we are allowed to change any single land cell (1) into a water cell (0).
Return the minimum number of days to disconnect the grid.

Example 1:


Input: grid = [[0,1,1,0],[0,1,1,0],[0,0,0,0]]
Output: 2
Explanation: We need at least 2 days to get a disconnected grid.
Change land grid[1][1] and grid[0][2] to water and get 2 disconnected island.

Example 2:


Input: grid = [[1,1]]
Output: 2
Explanation: Grid of full water is also disconnected ([[1,1]] -> [[0,0]]), 0 islands.


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 30
grid[i][j] is either 0 or 1.


```

## 题目翻译

给定 m×n 二进制网格，1=陆地，0=水。每天可将一个陆地格变为水。求使网格断开（0个或≥2个岛）的最少天数。

## 解题思路

**答案至多为 2**（图论结论：任何连通图最多删 2 个点可使其不连通）

1. 检查是否已断开（岛屿数 ≠ 1）→ 返回 0
2. 枚举每个陆地格，删除后检查是否断开 → 返回 1
3. 否则返回 2

检查连通性用 BFS/DFS。网格 ≤ 30×30，枚举 O(mn) 个格，每次 BFS O(mn)，总 O(m²n²)。

## Solution

[SourceCode](./solution.js)
