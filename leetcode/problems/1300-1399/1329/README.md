# [1329] Sort the Matrix Diagonally

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sort-the-matrix-diagonally/description/)

* algorithms
* Medium (83.17%)
* Likes:    3587
* Dislikes: 239
* Testcase Example:  '[[3,3,1,1],[2,2,1,2],[1,1,1,2]]'

```md
A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost row or leftmost column and going in the bottom-right direction until reaching the matrix&#39;s end. For example, the matrix diagonal starting from mat[2][0], where mat is a 6 x 3 matrix, includes cells mat[2][0], mat[3][1], and mat[4][2].
Given an m x n matrix mat of integers, sort each matrix diagonal in ascending order and return the resulting matrix.

Example 1:


Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]

Example 2:

Input: mat = [[11,25,66,1,69,7],[23,55,17,45,15,52],[75,31,36,44,58,8],[22,27,33,25,68,4],[84,28,14,11,5,50]]
Output: [[5,17,4,1,52,7],[11,11,25,45,8,69],[14,23,25,44,58,15],[22,27,31,36,50,66],[84,28,75,33,55,68]]


Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 100
1 <= mat[i][j] <= 100


```

## 翻译

给定一个 m x n 的整数矩阵 `mat`，将每条对角线上的元素按升序排序，返回结果矩阵。

对角线从最上面一行或最左边一列的某个单元格开始，沿右下方向延伸直到矩阵边界。

## Approach

**按对角线分组排序。** 同一对角线上的元素 `(i, j)` 满足 `i - j` 相同。用 Map 以 `i - j` 为 key 收集每条对角线的元素，排序后放回矩阵。

时间复杂度：O(m * n * log(min(m,n)))，空间复杂度：O(m * n)

## Solution

[SourceCode](./solution.js)
