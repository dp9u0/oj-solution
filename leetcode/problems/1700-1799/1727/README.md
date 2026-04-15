# [1727] Largest Submatrix With Rearrangements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/largest-submatrix-with-rearrangements/description/)

* algorithms
* Medium (80.20%)
* Likes:    2308
* Dislikes: 133
* Testcase Example:  '[[0,0,1],[1,1,1],[1,0,1]]'

```md
You are given a binary matrix matrix of size m x n, and you are allowed to rearrange the columns of the matrix in any order.
Return the area of the largest submatrix within matrix where every element of the submatrix is 1 after reordering the columns optimally.

Example 1:


Input: matrix = [[0,0,1],[1,1,1],[1,0,1]]
Output: 4
Explanation: You can rearrange the columns as shown above.
The largest submatrix of 1s, in bold, has an area of 4.

Example 2:


Input: matrix = [[1,0,1,0,1]]
Output: 3
Explanation: You can rearrange the columns as shown above.
The largest submatrix of 1s, in bold, has an area of 3.

Example 3:

Input: matrix = [[1,1,0],[1,0,1]]
Output: 2
Explanation: Notice that you must rearrange entire columns, and there is no way to make a submatrix of 1s larger than an area of 2.


Constraints:

m == matrix.length
n == matrix[i].length
1 <= m * n <= 105
matrix[i][j] is either 0 or 1.


```

## 中文翻译

给定二进制矩阵，允许重排列的顺序。求重排后全 1 子矩阵的最大面积。

## 解题思路

对每行，计算每列从该行向上的连续 1 的高度。然后对高度排序，从高到低枚举，面积 = 高度 * 宽度（从高到低的列数）。

时间复杂度：O(m * n log n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
