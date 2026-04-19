# [1034] Coloring A Border

## Description

[LeetCode Problem Description](https://leetcode.com/problems/coloring-a-border/description/)

* algorithms
* Medium (51.18%)
* Likes:    849
* Dislikes: 947
* Testcase Example:  '[[1,1],[1,2]]\n0\n0\n3'

```md
You are given an m x n integer matrix grid, and three integers row, col, and color. Each value in the grid represents the color of the grid square at that location.
Two squares are called adjacent if they are next to each other in any of the 4 directions.
Two squares belong to the same connected component if they have the same color and they are adjacent.
The border of a connected component is all the squares in the connected component that are either adjacent to (at least) a square not in the component, or on the boundary of the grid (the first or last row or column).
You should color the border of the connected component that contains the square grid[row][col] with color.
Return the final grid.

Example 1:
Input: grid = [[1,1],[1,2]], row = 0, col = 0, color = 3
Output: [[3,3],[3,2]]
Example 2:
Input: grid = [[1,2,2],[2,3,2]], row = 0, col = 1, color = 3
Output: [[1,3,3],[2,3,3]]
Example 3:
Input: grid = [[1,1,1],[1,1,1],[1,1,1]], row = 1, col = 1, color = 2
Output: [[2,2,2],[2,1,2],[2,2,2]]


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 50
1 <= grid[i][j], color <= 1000
0 <= row < m
0 <= col < n


```

## 题目翻译

给定 m×n 整数矩阵 grid 和三个整数 row, col, color。将包含 grid[row][col] 的同色连通分量的边界格子染成 color。边界指：与分量外格子相邻或处于网格边界的分量内格子。

## 解题思路

BFS/DFS 找到所有同色连通分量格子，然后判断每个格子是否为边界（4个方向中有不同色或在网格边缘），收集所有边界格子的坐标，最后统一改色。

## Solution

[SourceCode](./solution.js)
