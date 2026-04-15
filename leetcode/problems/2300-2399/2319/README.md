# [2319] Check if Matrix Is X-Matrix

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-matrix-is-x-matrix/description/)

* algorithms
* Easy (66.55%)
* Likes:    550
* Dislikes: 26
* Testcase Example:  '[[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]]'

```md
A square matrix is said to be an X-Matrix if both of the following conditions hold:

All the elements in the diagonals of the matrix are non-zero.
All other elements are 0.

Given a 2D integer array grid of size n x n representing a square matrix, return true if grid is an X-Matrix. Otherwise, return false.

Example 1:


Input: grid = [[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]]
Output: true
Explanation: Refer to the diagram above.
An X-Matrix should have the green elements (diagonals) be non-zero and the red elements be 0.
Thus, grid is an X-Matrix.

Example 2:


Input: grid = [[5,7,0],[0,3,1],[0,5,0]]
Output: false
Explanation: Refer to the diagram above.
An X-Matrix should have the green elements (diagonals) be non-zero and the red elements be 0.
Thus, grid is not an X-Matrix.


Constraints:

n == grid.length == grid[i].length
3 <= n <= 100
0 <= grid[i][j] <= 105


```

## 中文翻译

判断方阵是否为 X-矩阵：两条对角线上元素非零，其余元素都为 0。

## 解题思路

遍历每个位置，判断是否在对角线上（i==j 或 i+j==n-1），对角线上必须非零，非对角线必须为零。

时间复杂度：O(n^2)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
