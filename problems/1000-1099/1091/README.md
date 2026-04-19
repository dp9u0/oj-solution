# [1091] Shortest Path in Binary Matrix

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shortest-path-in-binary-matrix/description/)

* algorithms
* Medium (51.33%)
* Likes:    7432
* Dislikes: 276
* Testcase Example:  '[[0,1],[1,0]]'

```md
Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.
A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

All the visited cells of the path are 0.
All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).

The length of a clear path is the number of visited cells of this path.

Example 1:


Input: grid = [[0,1],[1,0]]
Output: 2

Example 2:


Input: grid = [[0,0,0],[1,1,0],[1,1,0]]
Output: 4

Example 3:

Input: grid = [[1,0,0],[1,1,0],[1,1,0]]
Output: -1


Constraints:

n == grid.length
n == grid[i].length
1 <= n <= 100
grid[i][j] is 0 or 1


```

## 中文翻译

给定 n×n 二值矩阵，找从左上角 (0,0) 到右下角 (n-1,n-1) 的最短路径长度（8 方向移动），只能走值为 0 的格子。不存在则返回 -1。

## 解题思路

BFS。从 (0,0) 开始层次遍历，8 方向扩展，第一个到达 (n-1,n-1) 的层数即为答案。注意起点和终点必须为 0。

时间复杂度：O(n^2)，空间复杂度：O(n^2)

## Solution

[SourceCode](./solution.js)
