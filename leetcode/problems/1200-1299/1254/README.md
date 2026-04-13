# [1254] Number of Closed Islands

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-closed-islands/description/)

* algorithms
* Medium (67.06%)
* Likes:    4766
* Dislikes: 191
* Testcase Example:  '[[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]'

```md
Given a 2Dgrid consists of 0s (land)and 1s (water). An island is a maximal 4-directionally connected group of 0s and a closed islandis an island totally(all left, top, right, bottom) surrounded by 1s.
Return the number of closed islands.

Example 1:


Input: grid = [[1,1,1,1,1,1,1,0],[1,0,0,0,0,1,1,0],[1,0,1,0,1,1,1,0],[1,0,0,0,0,1,0,1],[1,1,1,1,1,1,1,0]]
Output: 2
Explanation:
Islands in gray are closed because they are completely surrounded by water (group of 1s).
Example 2:


Input: grid = [[0,0,1,0,0],[0,1,0,1,0],[0,1,1,1,0]]
Output: 1

Example 3:

Input: grid = [[1,1,1,1,1,1,1],
[1,0,0,0,0,0,1],
[1,0,1,1,1,0,1],
[1,0,1,0,1,0,1],
[1,0,1,1,1,0,1],
[1,0,0,0,0,0,1],
[1,1,1,1,1,1,1]]
Output: 2


Constraints:

1 <= grid.length, grid[0].length <= 100
0 <= grid[i][j] <=1


```

## 翻译

给定 01 矩阵（0 为陆地，1 为水），统计完全被水包围的岛屿数量（不接触边界）。

## Approach

先从边界出发 DFS 将所有与边界相连的陆地标记为水（不可能闭合），再遍历内部统计剩余连通分量数。

## Solution

[SourceCode](./solution.js)
