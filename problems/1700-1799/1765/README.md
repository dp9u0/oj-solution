# [1765] Map of Highest Peak

## Description

[LeetCode Problem Description](https://leetcode.com/problems/map-of-highest-peak/description/)

* algorithms
* Medium (75.76%)
* Likes:    1558
* Dislikes: 116
* Testcase Example:  '[[0,1],[0,0]]'

```md
You are given an integer matrix isWater of size m x n that represents a map of land and water cells.

If isWater[i][j] == 0, cell (i, j) is a land cell.
If isWater[i][j] == 1, cell (i, j) is a water cell.

You must assign each cell a height in a way that follows these rules:

The height of each cell must be non-negative.
If the cell is a water cell, its height must be 0.
Any two adjacent cells must have an absolute height difference of at most 1. A cell is adjacent to another cell if the former is directly north, east, south, or west of the latter (i.e., their sides are touching).

Find an assignment of heights such that the maximum height in the matrix is maximized.
Return an integer matrix height of size m x n where height[i][j] is cell (i, j)&#39;s height. If there are multiple solutions, return any of them.

Example 1:


Input: isWater = [[0,1],[0,0]]
Output: [[1,0],[2,1]]
Explanation: The image shows the assigned heights of each cell.
The blue cell is the water cell, and the green cells are the land cells.

Example 2:


Input: isWater = [[0,0,1],[1,0,0],[0,0,0]]
Output: [[1,1,0],[0,1,1],[1,2,2]]
Explanation: A height of 2 is the maximum possible height of any assignment.
Any height assignment that has a maximum height of 2 while still meeting the rules will also be accepted.


Constraints:

m == isWater.length
n == isWater[i].length
1 <= m, n <= 1000
isWater[i][j] is 0 or 1.
There is at least one water cell.


Note: This question is the same as 542: https://leetcode.com/problems/01-matrix/

```

## 翻译

给定一个 m x n 的整数矩阵 `isWater`，表示地图上的陆地和水域格子。水域格子高度必须为 0，相邻格子高度差不超过 1。找到一种高度分配方案，使得最大高度最大化。

## Approach

**多源 BFS。** 类似 LeetCode 542 (01 Matrix)。将所有水域格子（值为 1）作为起点加入队列，高度设为 0。BFS 向外扩展，每层高度加 1。陆地格子初始高度设为 -1（未访问），BFS 时赋值为前驱高度 + 1。

时间复杂度：O(m * n)，空间复杂度：O(m * n)

## Solution

[SourceCode](./solution.js)
