# [1162] As Far from Land as Possible

## Description

[LeetCode Problem Description](https://leetcode.com/problems/as-far-from-land-as-possible/description/)

* algorithms
* Medium (52.24%)
* Likes:    4278
* Dislikes: 113
* Testcase Example:  '[[1,0,1],[0,0,0],[1,0,1]]'

```md
Given an n x n gridcontaining only values 0 and 1, where0 represents waterand 1 represents land, find a water cell such that its distance to the nearest land cell is maximized, and return the distance.If no land or water exists in the grid, return -1.
The distance used in this problem is the Manhattan distance:the distance between two cells (x0, y0) and (x1, y1) is
x0 - x1
+
y0 - y1
.

Example 1:


Input: grid = [[1,0,1],[0,0,0],[1,0,1]]
Output: 2
Explanation: The cell (1, 1) is as far as possible from all the land with distance 2.

Example 2:


Input: grid = [[1,0,0],[0,0,0],[0,0,0]]
Output: 4
Explanation: The cell (2, 2) is as far as possible from all the land with distance 4.


Constraints:

n == grid.length
n == grid[i].length
1 <= n<= 100
grid[i][j]is 0 or 1


```

## 中文翻译

给定 n x n 网格（0=水，1=陆），找到离最近陆地最远的水域格子，返回该距离。若全陆地或全水域返回 -1。距离为曼哈顿距离。

## 解题思路

多源 BFS：将所有陆地格子入队，BFS 向外扩展，记录最大距离。

时间复杂度：O(n^2)，空间复杂度：O(n^2)

## Solution

[SourceCode](./solution.js)
