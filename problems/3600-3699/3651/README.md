# [3651] Minimum Cost Path with Teleportations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-cost-path-with-teleportations/description/)

* algorithms
* Hard (45.63%)
* Likes:    421
* Dislikes: 34
* Testcase Example:  '[[1,3,3],[2,5,4],[4,3,5]]\n2'

```md
You are given a m x n 2D integer array grid and an integer k. You start at the top-left cell (0, 0) and your goal is to reach the bottom‐right cell (m - 1, n - 1).
There are two types of moves available:


Normal move: You can move right or down from your current cell (i, j), i.e. you can move to (i, j + 1) (right) or (i + 1, j) (down). The cost is the value of the destination cell.


Teleportation: You can teleport from any cell (i, j), to any cell (x, y) such that grid[x][y] <= grid[i][j]; the cost of this move is 0. You may teleport at most k times.


Return the minimum total cost to reach cell (m - 1, n - 1) from (0, 0).

Example 1:

Input: grid = [[1,3,3],[2,5,4],[4,3,5]], k = 2
Output: 7
Explanation:
Initially we are at (0, 0) and cost is 0.



Current Position
Move
New Position
Total Cost


(0, 0)
Move Down
(1, 0)
0 + 2 = 2


(1, 0)
Move Right
(1, 1)
2 + 5 = 7


(1, 1)
Teleport to (2, 2)
(2, 2)
7 + 0 = 7



The minimum cost to reach bottom-right cell is 7.

Example 2:

Input: grid = [[1,2],[2,3],[3,4]], k = 1
Output: 9
Explanation:
Initially we are at (0, 0) and cost is 0.



Current Position
Move
New Position
Total Cost


(0, 0)
Move Down
(1, 0)
0 + 2 = 2


(1, 0)
Move Right
(1, 1)
2 + 3 = 5


(1, 1)
Move Down
(2, 1)
5 + 4 = 9



The minimum cost to reach bottom-right cell is 9.


Constraints:

2 <= m, n <= 80
m == grid.length
n == grid[i].length
0 <= grid[i][j] <= 104
0 <= k <= 10


```

## 题目翻译

给定 m x n 网格 grid 和整数 k。从 (0,0) 到 (m-1,n-1)，可右移或下移（代价为目标格值），或传送至任意 grid[x][y] <= grid[i][j] 的格子（代价 0，最多 k 次）。求最小总代价。

## 解题思路

**分层拓扑 DP + 传送后缀最小值**。

- 状态 dist[t][i][j] = 剩余 t 次传送时到达 (i,j) 的最小代价。
- 按传送次数从 k 到 0 逐层处理。每层内只做右/下移动，用拓扑序 DP（O(mn)）。
- 层间传送：对 level t 的 dist，按格子值降序扫描计算后缀最小值 suffixMin[v] = 值>=v 的格子中 dist 最小值。Level t-1 的初始代价 = suffixMin[grid[x][y]]。
- 总复杂度 O(k * mn * log(mn))。
