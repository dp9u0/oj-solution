# [1293] Shortest Path in a Grid with Obstacles Elimination

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shortest-path-in-a-grid-with-obstacles-elimination/description/)

* algorithms
* Hard (46.21%)
* Likes:    4848
* Dislikes: 91
* Testcase Example:  '[[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]]\n1'

```md
You are given an m x n integer matrix grid where each cell is either 0 (empty) or 1 (obstacle). You can move up, down, left, or right from and to an empty cell in one step.
Return the minimum number of steps to walk from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1) given that you can eliminate at most k obstacles. If it is not possible to find such walk return -1.

Example 1:


Input: grid = [[0,0,0],[1,1,0],[0,0,0],[0,1,1],[0,0,0]], k = 1
Output: 6
Explanation:
The shortest path without eliminating any obstacle is 10.
The shortest path with one obstacle elimination at position (3,2) is 6. Such path is (0,0) -> (0,1) -> (0,2) -> (1,2) -> (2,2) -> (3,2) -> (4,2).

Example 2:


Input: grid = [[0,1,1],[1,1,1],[1,0,0]], k = 1
Output: -1
Explanation: We need to eliminate at least two obstacles to find such a walk.


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 40
1 <= k <= m * n
grid[i][j] is either 0 or 1.
grid[0][0] == grid[m - 1][n - 1] == 0


```

## 题目翻译

给定 m×n 网格 grid（0=空，1=障碍），从左上角走到右下角，最多消除 k 个障碍。求最短步数，不可达返回 -1。

## 解题思路

**BFS + 状态剪枝**

状态为 (row, col, remaining_k)，BFS 逐层扩展。visited[r][c] 记录到达该格时的最大剩余消除次数，若当前 remaining 不大于已记录值则跳过。若 k >= m+n-2 则直接返回 m+n-2（曼哈顿距离最短路必定可达）。

O(m * n * k) 时间。

## Solution

[SourceCode](./solution.js)
