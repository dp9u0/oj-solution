# [3148] Maximum Difference Score in a Grid

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-difference-score-in-a-grid/description/)

* algorithms
* Medium (47.86%)
* Likes:    287
* Dislikes: 23
* Testcase Example:  '[[9,5,7,3],[8,9,6,1],[6,7,14,3],[2,5,3,1]]'

```md
You are given an m x n matrix grid consisting of positive integers. You can move from a cell in the matrix to any other cell that is either to the bottom or to the right (not necessarily adjacent). The score of a move from a cell with the value c1 to a cell with the value c2 is c2 - c1.
You can start at any cell, and you have to make at least one move.
Return the maximum total score you can achieve.

Example 1:


Input: grid = [[9,5,7,3],[8,9,6,1],[6,7,14,3],[2,5,3,1]]
Output: 9
Explanation: We start at the cell (0, 1), and we perform the following moves:
- Move from the cell (0, 1) to (2, 1) with a score of 7 - 5 = 2.
- Move from the cell (2, 1) to (2, 2) with a score of 14 - 7 = 7.
The total score is 2 + 7 = 9.

Example 2:


Input: grid = [[4,3,2],[3,2,1]]
Output: -1
Explanation: We start at the cell (0, 0), and we perform one move: (0, 0) to (0, 1). The score is 3 - 4 = -1.


Constraints:

m == grid.length
n == grid[i].length
2 <= m, n <= 1000
4 <= m * n <= 105
1 <= grid[i][j] <= 105


```

## 中文翻译

给定正整数矩阵 grid，可从任意格子出发，每次向右或向下移动到任意格子，得分 = 目标值 - 起点值。至少移动一次，求最大总得分。

## 解题思路

多步移动的得分之和等价于最终格子值减去起始格子值（中间项全部抵消）。因此问题转化为：找 grid[i][j] - minVal，其中 minVal 是 (i,j) 左上方区域的最小值。用 DP 从左上到右下维护前缀最小值。

## Solution

[SourceCode](./solution.js)
