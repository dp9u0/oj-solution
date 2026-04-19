# [2556] Disconnect Path in a Binary Matrix by at Most One Flip

## Description

[LeetCode Problem Description](https://leetcode.com/problems/disconnect-path-in-a-binary-matrix-by-at-most-one-flip/description/)

* algorithms
* Medium (27.84%)
* Likes:    639
* Dislikes: 33
* Testcase Example:  '[[1,1,1],[1,0,0],[1,1,1]]'

```md
You are given a 0-indexed m x n binary matrix grid. You can move from a cell (row, col) to any of the cells (row + 1, col) or (row, col + 1) that has the value 1.The matrix is disconnected if there is no path from (0, 0) to (m - 1, n - 1).
You can flip the value of at most one (possibly none) cell. You cannot flip the cells (0, 0) and (m - 1, n - 1).
Return true if it is possible to make the matrix disconnect or false otherwise.
Note that flipping a cell changes its value from 0 to 1 or from 1 to 0.

Example 1:


Input: grid = [[1,1,1],[1,0,0],[1,1,1]]
Output: true
Explanation: We can change the cell shown in the diagram above. There is no path from (0, 0) to (2, 2) in the resulting grid.

Example 2:


Input: grid = [[1,1,1],[1,0,1],[1,1,1]]
Output: false
Explanation: It is not possible to change at most one cell such that there is not path from (0, 0) to (2, 2).


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 1000
1 <= m * n <= 105
grid[i][j] is either 0 or 1.
grid[0][0] == grid[m - 1][n - 1] == 1


```

## 中文翻译

给定 m×n 的 01 矩阵，只能向下或向右移动到值为 1 的格子。可以翻转最多一个格子（不能翻起点和终点）。判断是否能使 (0,0) 到 (m-1,n-1) 无路径。

## 解题思路

找两条从起点到终点的**点不相交**路径。如果找不到两条，则存在一个割点，翻转它即可断开。用 DFS 找第一条路径并标记已用，再 DFS 找第二条。如果第二条找不到，返回 true。

## Solution

[SourceCode](./solution.js)
