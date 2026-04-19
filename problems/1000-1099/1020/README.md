# [1020] Number of Enclaves

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-enclaves/description/)

* algorithms
* Medium (71.63%)
* Likes:    4626
* Dislikes: 91
* Testcase Example:  '[[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]'

```md
You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.
A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid.
Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.

Example 1:


Input: grid = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]
Output: 3
Explanation: There are three 1s that are enclosed by 0s, and one 1 that is not enclosed because its on the boundary.

Example 2:


Input: grid = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]
Output: 0
Explanation: All 1s are either on the boundary or can reach the boundary.


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 500
grid[i][j] is either 0 or 1.


```

## 翻译

给定 m×n 的二进制矩阵 grid，0 表示海，1 表示陆地。一步可以从一个陆地走到相邻的陆地或走出边界。返回无法走出边界的陆地格子数量。

## Approach

从边界上的陆地格子出发做 BFS/DFS 洪泛标记所有能到达边界的陆地。最后统计未被标记的陆地格子数。

时间复杂度 O(m×n)，空间复杂度 O(m×n)。

## Solution

[SourceCode](./solution.js)
