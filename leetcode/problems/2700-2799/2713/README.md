# [2713] Maximum Strictly Increasing Cells in a Matrix

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-strictly-increasing-cells-in-a-matrix/description/)

* algorithms
* Hard (31.36%)
* Likes:    630
* Dislikes: 22
* Testcase Example:  '[[3,1],[3,4]]'

```md
Given a 1-indexedm x n integer matrix mat, you can select any cell in the matrix as your starting cell.
From the starting cell, you can move to any other cell in the same row or column, but only if the value of the destination cell is strictly greater than the value of the current cell. You can repeat this process as many times as possible, moving from cell to cell until you can no longer make any moves.
Your task is to find the maximum number of cells that you can visit in the matrix by starting from some cell.
Return an integer denoting the maximum number of cells that can be visited.

Example 1:


Input: mat = [[3,1],[3,4]]
Output: 2
Explanation: The image shows how we can visit 2 cells starting from row 1, column 2. It can be shown that we cannot visit more than 2 cells no matter where we start from, so the answer is 2.

Example 2:


Input: mat = [[1,1],[1,1]]
Output: 1
Explanation: Since the cells must be strictly increasing, we can only visit one cell in this example.

Example 3:


Input: mat = [[3,1,6],[-9,5,7]]
Output: 4
Explanation: The image above shows how we can visit 4 cells starting from row 2, column 1. It can be shown that we cannot visit more than 4 cells no matter where we start from, so the answer is 4.


Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 105
1 <= m * n <= 105
-105<= mat[i][j] <= 105


```

## 题目翻译

给定 m×n 整数矩阵，从任意格子出发，可移动到同行或同列中值严格更大的格子。求最多能访问的格子数。

## 解题思路

按值从小到大处理所有格子。维护 rowBest[i] 和 colBest[j] 表示第 i 行/第 j 列的最大 dp 值。对于每个格子 (r,c) 值为 v，dp[r][c] = 1 + max(rowBest[r], colBest[c])。关键：相同值的格子需要分批处理——先用旧的 rowBest/colBest 计算所有 dp，再统一更新 rowBest/colBest，避免同值格子互相影响。时间复杂度 O(mn log(mn))。

## Solution

[SourceCode](./solution.js)
