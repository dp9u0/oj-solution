# [2596] Check Knight Tour Configuration

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-knight-tour-configuration/description/)

* algorithms
* Medium (60.97%)
* Likes:    535
* Dislikes: 69
* Testcase Example:  '[[0,11,16,5,20],[17,4,19,10,15],[12,1,8,21,6],[3,18,23,14,9],[24,13,2,7,22]]'

```md
There is a knight on an n x n chessboard. In a valid configuration, the knight starts at the top-left cell of the board and visits every cell on the board exactly once.
You are given an n x n integer matrix grid consisting of distinct integers from the range [0, n * n - 1] where grid[row][col] indicates that the cell (row, col) is the grid[row][col]th cell that the knight visited. The moves are 0-indexed.
Return true if grid represents a valid configuration of the knight&#39;s movements or false otherwise.
Note that a valid knight move consists of moving two squares vertically and one square horizontally, or two squares horizontally and one square vertically. The figure below illustrates all the possible eight moves of a knight from some cell.


Example 1:


Input: grid = [[0,11,16,5,20],[17,4,19,10,15],[12,1,8,21,6],[3,18,23,14,9],[24,13,2,7,22]]
Output: true
Explanation: The above diagram represents the grid. It can be shown that it is a valid configuration.

Example 2:


Input: grid = [[0,3,6],[5,8,1],[2,7,4]]
Output: false
Explanation: The above diagram represents the grid. The 8th move of the knight is not valid considering its position after the 7th move.


Constraints:

n == grid.length == grid[i].length
3 <= n <= 7
0 <= grid[row][col] < n * n
All integers in grid are unique.


```

## 题目翻译

给定 n×n 棋盘 grid，grid[r][c] 表示骑士第几步访问该格。验证骑士从左上角出发，每步都是合法马步，是否访问所有格子。

## 解题思路

建立 step→(r,c) 的映射，检查起点为 (0,0)，然后逐一验证相邻两步是否为合法马步（|dr|,|dc| 为 1,2 或 2,1）。O(n^2)。

## Solution

[SourceCode](./solution.js)
