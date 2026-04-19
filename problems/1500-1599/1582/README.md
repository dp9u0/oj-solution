# [1582] Special Positions in a Binary Matrix

## Description

[LeetCode Problem Description](https://leetcode.com/problems/special-positions-in-a-binary-matrix/description/)

* algorithms
* Easy (72.63%)
* Likes:    1797
* Dislikes: 80
* Testcase Example:  '[[1,0,0],[0,0,1],[1,0,0]]'

```md
Given an m x n binary matrix mat, return the number of special positions in mat.
A position (i, j) is called special if mat[i][j] == 1 and all other elements in row i and column j are 0 (rows and columns are 0-indexed).

Example 1:


Input: mat = [[1,0,0],[0,0,1],[1,0,0]]
Output: 1
Explanation: (1, 2) is a special position because mat[1][2] == 1 and all other elements in row 1 and column 2 are 0.

Example 2:


Input: mat = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
Explanation: (0, 0), (1, 1) and (2, 2) are special positions.


Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 100
mat[i][j] is either 0 or 1.


```

## 题目翻译

给定 m×n 的 01 矩阵，统计"特殊位置"数量：(i,j) 处值为 1 且第 i 行和第 j 列的其他元素都为 0。

## 解题思路

先统计每行和每列的 1 的个数。然后遍历矩阵，当 mat[i][j]==1 且 rowSum[i]==1 且 colSum[j]==1 时为特殊位置。

## Solution

[SourceCode](./solution.js)
