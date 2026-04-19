# [1391] Check if There is a Valid Path in a Grid

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/description/)

* algorithms
* Medium (50.28%)
* Likes:    885
* Dislikes: 326
* Testcase Example:  '[[2,4,3],[6,5,2]]'

```md
You are given an m x n grid. Each cell of grid represents a street. The street of grid[i][j] can be:

1 which means a street connecting the left cell and the right cell.
2 which means a street connecting the upper cell and the lower cell.
3 which means a street connecting the left cell and the lower cell.
4 which means a street connecting the right cell and the lower cell.
5 which means a street connecting the left cell and the upper cell.
6 which means a street connecting the right cell and the upper cell.


You will initially start at the street of the upper-left cell (0, 0). A valid path in the grid is a path that starts from the upper left cell (0, 0) and ends at the bottom-right cell (m - 1, n - 1). The path should only follow the streets.
Notice that you are not allowed to change any street.
Return true if there is a valid path in the grid or false otherwise.

Example 1:


Input: grid = [[2,4,3],[6,5,2]]
Output: true
Explanation: As shown you can start at cell (0, 0) and visit all the cells of the grid to reach (m - 1, n - 1).

Example 2:


Input: grid = [[1,2,1],[1,2,1]]
Output: false
Explanation: As shown you the street at cell (0, 0) is not connected with any street of any other cell and you will get stuck at cell (0, 0)

Example 3:

Input: grid = [[1,1,2]]
Output: false
Explanation: You will get stuck at cell (0, 1) and you cannot reach cell (0, 2).


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
1 <= grid[i][j] <= 6


```

## 中文翻译

m×n 网格中每格代表一种街道（6种类型），检查从左上角 (0,0) 到右下角 (m-1,n-1) 是否存在合法路径。街道类型决定连接方向，只能沿街道行走。

## 解题思路

**BFS + 方向匹配**：

1. 6种街道类型分别连接不同方向（上下左右）
2. BFS 从 (0,0) 出发，检查当前格连接方向上的邻居
3. 移动条件：当前格连接该方向，且邻居格连接反方向
4. 到达终点返回 true，BFS 结束未到达则 false

## Solution

[SourceCode](./solution.js)
