# [2812] Find the Safest Path in a Grid

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-safest-path-in-a-grid/description/)

* algorithms
* Medium (48.72%)
* Likes:    1838
* Dislikes: 327
* Testcase Example:  '[[1,0,0],[0,0,0],[0,0,1]]'

```md
You are given a 0-indexed 2D matrix grid of size n x n, where (r, c) represents:

A cell containing a thief if grid[r][c] = 1
An empty cell if grid[r][c] = 0

You are initially positioned at cell (0, 0). In one move, you can move to any adjacent cell in the grid, including cells containing thieves.
The safeness factor of a path on the grid is defined as the minimum manhattan distance from any cell in the path to any thief in the grid.
Return the maximum safeness factor of all paths leading to cell (n - 1, n - 1).
An adjacent cell of cell (r, c), is one of the cells (r, c + 1), (r, c - 1), (r + 1, c) and (r - 1, c) if it exists.
The Manhattan distance between two cells (a, b) and (x, y) is equal to
a - x
+
b - y
, where
val
denotes the absolute value of val.

Example 1:


Input: grid = [[1,0,0],[0,0,0],[0,0,1]]
Output: 0
Explanation: All paths from (0, 0) to (n - 1, n - 1) go through the thieves in cells (0, 0) and (n - 1, n - 1).

Example 2:


Input: grid = [[0,0,1],[0,0,0],[0,0,0]]
Output: 2
Explanation: The path depicted in the picture above has a safeness factor of 2 since:
- The closest cell of the path to the thief at cell (0, 2) is cell (0, 0). The distance between them is
0 - 0
+
0 - 2
= 2.
It can be shown that there are no other paths with a higher safeness factor.

Example 3:


Input: grid = [[0,0,0,1],[0,0,0,0],[0,0,0,0],[1,0,0,0]]
Output: 2
Explanation: The path depicted in the picture above has a safeness factor of 2 since:
- The closest cell of the path to the thief at cell (0, 3) is cell (1, 2). The distance between them is
0 - 1
+
3 - 2
= 2.
- The closest cell of the path to the thief at cell (3, 0) is cell (3, 2). The distance between them is
3 - 3
+
0 - 2
= 2.
It can be shown that there are no other paths with a higher safeness factor.


Constraints:

1 <= grid.length == n <= 400
grid[i].length == n
grid[i][j] is either 0 or 1.
There is at least one thief in the grid.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 n×n 网格，1 表示小偷，0 表示空格。从 (0,0) 到 (n-1,n-1) 的路径的安全系数定义为路径上所有格子到最近小偷的曼哈顿距离的最小值。求所有路径中最大的安全系数。

## 解题思路

**多源 BFS + 优先队列 BFS（或二分+BFS）**

1. 多源 BFS：从所有小偷出发，计算每个格子到最近小偷的距离 dist[r][c]
2. 用优先队列（最大堆）从 (0,0) 做 BFS，每次优先走 dist 值最大的格子，路径的安全系数由瓶颈（最小值）决定
3. 到达 (n-1,n-1) 时的瓶颈值即为答案

时间复杂度 O(n² log n)，空间复杂度 O(n²)。
