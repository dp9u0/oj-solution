# [498] Diagonal Traverse

## Description

[LeetCode Problem Description](https://leetcode.com/problems/diagonal-traverse/description/)

* algorithms
* Medium (67.10%)
* Likes:    4330
* Dislikes: 785
* Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'

```md
Given an m x n matrix mat, return an array of all the elements of the array in a diagonal order.

Example 1:


Input: mat = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,4,7,5,3,6,8,9]

Example 2:

Input: mat = [[1,2],[3,4]]
Output: [1,2,3,4]


Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 104
1 <= m * n <= 104
-105 <= mat[i][j] <= 105


```

## 中文翻译

给定 m x n 矩阵，按对角线之字形顺序返回所有元素。

## 解题思路

模拟遍历：维护方向（右上/左下），碰到边界时切换方向。同一对角线上 i+j 相等。

## Solution

[SourceCode](./solution.js)
