# [1559] Detect Cycles in 2D Grid

## Description

[LeetCode Problem Description](https://leetcode.com/problems/detect-cycles-in-2d-grid/description/)

* algorithms
* Medium (52.84%)
* Likes:    1340
* Dislikes: 32
* Testcase Example:  '[["a","a","a","a"],["a","b","b","a"],["a","b","b","a"],["a","a","a","a"]]'

```md
Given a 2D array of characters grid of size m x n, you need to find if there exists any cycle consisting of the same value in grid.
A cycle is a path of length 4 or more in the grid that starts and ends at the same cell. From a given cell, you can move to one of the cells adjacent to it - in one of the four directions (up, down, left, or right), if it has the same value of the current cell.
Also, you cannot move to the cell that you visited in your last move. For example, the cycle (1, 1) -> (1, 2) -> (1, 1) is invalid because from (1, 2) we visited (1, 1) which was the last visited cell.
Return true if any cycle of the same value exists in grid, otherwise, return false.

Example 1:


Input: grid = [['a','a','a','a'],['a','b','b','a'],['a','b','b','a'],['a','a','a','a']]
Output: true
Explanation: There are two valid cycles shown in different colors in the image below:


Example 2:


Input: grid = [['c','c','c','a'],['c','d','c','c'],['c','c','e','c'],['f','c','c','c']]
Output: true
Explanation: There is only one valid cycle highlighted in the image below:


Example 3:


Input: grid = [['a','b','b'],['b','z','b'],['b','b','a']]
Output: false


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 500
grid consists only of lowercase English letters.


```

## 题目翻译

给定 m×n 字符矩阵 grid，判断是否存在同值环。环是长度 ≥ 4 的路径，起点和终点相同，且不能立即回到上一个格子。

## 解题思路

并查集。逐行从左到右扫描，对每个格子只与上方和左方同值邻居合并。如果发现两个邻居已经在同一集合中，说明形成环。

## Solution

[SourceCode](./solution.js)
