# [1504] Count Submatrices With All Ones

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-submatrices-with-all-ones/description/)

* algorithms
* Medium (71.03%)
* Likes:    2677
* Dislikes: 220
* Testcase Example:  '[[1,0,1],[1,1,0],[1,1,0]]'

```md
Given an m x n binary matrix mat, return the number of submatrices that have all ones.

Example 1:


Input: mat = [[1,0,1],[1,1,0],[1,1,0]]
Output: 13
Explanation:
There are 6 rectangles of side 1x1.
There are 2 rectangles of side 1x2.
There are 3 rectangles of side 2x1.
There is 1 rectangle of side 2x2.
There is 1 rectangle of side 3x1.
Total number of rectangles = 6 + 2 + 3 + 1 + 1 = 13.

Example 2:


Input: mat = [[0,1,1,0],[0,1,1,1],[1,1,1,0]]
Output: 24
Explanation:
There are 8 rectangles of side 1x1.
There are 5 rectangles of side 1x2.
There are 2 rectangles of side 1x3.
There are 4 rectangles of side 2x1.
There are 2 rectangles of side 2x2.
There are 2 rectangles of side 3x1.
There is 1 rectangle of side 3x2.
Total number of rectangles = 8 + 5 + 2 + 4 + 2 + 2 + 1 = 24.


Constraints:

1 <= m, n <= 150
mat[i][j] is either 0 or 1.


```

## 中文翻译

给定 m x n 二进制矩阵，统计全为 1 的子矩阵个数。

## 解题思路

按行扫描，h[j] 表示第 j 列从当前行往上连续 1 的个数。对每行用单调栈统计以该行为底的全 1 子矩阵数：栈中维护递增的 h 值，计算每个位置贡献的子矩阵数。

## Solution

[SourceCode](./solution.js)
