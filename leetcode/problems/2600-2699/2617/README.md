# [2617] Minimum Number of Visited Cells in a Grid

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-visited-cells-in-a-grid/description/)

* algorithms
* Hard (23.75%)
* Likes:    418
* Dislikes: 39
* Testcase Example:  '[[3,4,2,1],[4,2,3,1],[2,1,0,0],[2,4,0,0]]'

```md
You are given a 0-indexed m x n integer matrix grid. Your initial position is at the top-left cell (0, 0).
Starting from the cell (i, j), you can move to one of the following cells:

Cells (i, k) with j < k <= grid[i][j] + j (rightward movement), or
Cells (k, j) with i < k <= grid[i][j] + i (downward movement).

Return the minimum number of cells you need to visit to reach the bottom-right cell (m - 1, n - 1). If there is no valid path, return -1.

Example 1:


Input: grid = [[3,4,2,1],[4,2,3,1],[2,1,0,0],[2,4,0,0]]
Output: 4
Explanation: The image above shows one of the paths that visits exactly 4 cells.

Example 2:


Input: grid = [[3,4,2,1],[4,2,1,1],[2,1,1,0],[3,4,1,0]]
Output: 3
Explanation: The image above shows one of the paths that visits exactly 3 cells.

Example 3:


Input: grid = [[2,1,0],[1,0,0]]
Output: -1
Explanation: It can be proven that no path exists.


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 105
1 <= m * n <= 105
0 <= grid[i][j] < m * n
grid[m - 1][n - 1] == 0


```

## 翻译

给定 m×n 矩阵 grid，从 (0,0) 出发，每次从 (i,j) 可向右跳到同行 j+1..j+grid[i][j] 的列，或向下跳到同列 i+1..i+grid[i][j] 的行。求到达 (m-1,n-1) 最少经过多少个格子，不可达返回 -1。

## 解题思路

BFS + 并查集优化。每行维护一个 UF 结构记录未访问的列，每列维护一个 UF 结构记录未访问的行。BFS 每处理一个格子 (i,j)，用 find 快速枚举其可达范围内所有未访问格子，加入队列后立即从两个结构中删除。每个格子最多被处理一次，总复杂度 O(mn·α(mn))。

## Solution

[SourceCode](./solution.js)
