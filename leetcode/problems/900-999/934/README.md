# [934] Shortest Bridge

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shortest-bridge/description/)

* algorithms
* Medium (59.35%)
* Likes:    5788
* Dislikes: 221
* Testcase Example:  '[[0,1],[1,0]]'

```md
You are given an n x n binary matrix grid where 1 represents land and 0 represents water.
An island is a 4-directionally connected group of 1&#39;s not connected to any other 1&#39;s. There are exactly two islands in grid.
You may change 0&#39;s to 1&#39;s to connect the two islands to form one island.
Return the smallest number of 0&#39;s you must flip to connect the two islands.

Example 1:

Input: grid = [[0,1],[1,0]]
Output: 1

Example 2:

Input: grid = [[0,1,0],[0,0,0],[0,0,1]]
Output: 2

Example 3:

Input: grid = [[1,1,1,1,1],[1,0,0,0,1],[1,0,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Output: 1


Constraints:

n == grid.length == grid[i].length
2 <= n <= 100
grid[i][j] is either 0 or 1.
There are exactly two islands in grid.


```

## 题目翻译

给定 n×n 二进制矩阵，恰好有两个岛屿（4方向连通的1）。求最少翻转多少个0能连接两个岛屿。

## 解题思路

DFS 找到第一个岛屿并标记为 2，同时收集其所有边界格子（相邻为0的格子）。然后从这些边界格子做多源 BFS，逐层扩展，第一次遇到值为 1 的格子时返回当前层数（即最少翻转数）。

## Solution

[SourceCode](./solution.js)
