# [2428] Maximum Sum of an Hourglass

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-sum-of-an-hourglass/description/)

* algorithms
* Medium (76.32%)
* Likes:    497
* Dislikes: 72
* Testcase Example:  '[[6,2,1,3],[4,2,1,5],[9,2,8,7],[4,1,2,9]]'

```md
You are given an m x n integer matrix grid.
We define an hourglass as a part of the matrix with the following form:

Return the maximum sum of the elements of an hourglass.
Note that an hourglass cannot be rotated and must be entirely contained within the matrix.

Example 1:


Input: grid = [[6,2,1,3],[4,2,1,5],[9,2,8,7],[4,1,2,9]]
Output: 30
Explanation: The cells shown above represent the hourglass with the maximum sum: 6 + 2 + 1 + 2 + 9 + 2 + 8 = 30.

Example 2:


Input: grid = [[1,2,3],[4,5,6],[7,8,9]]
Output: 35
Explanation: There is only one hourglass in the matrix, with the sum: 1 + 2 + 3 + 5 + 7 + 8 + 9 = 35.


Constraints:

m == grid.length
n == grid[i].length
3 <= m, n <= 150
0 <= grid[i][j] <= 106


```

## 中文翻译

给定一个 m x n 的整数矩阵 grid，定义"沙漏"为矩阵中的一个 3x3 区域，形状为第一行3个元素 + 中间1个元素 + 第三行3个元素。求所有沙漏形状的元素和的最大值。沙漏不能旋转，必须完全包含在矩阵内。

## 解题思路

直接枚举所有合法的沙漏左上角 (i, j)，即 i+2 < m 且 j+2 < n，计算沙漏和并取最大值。可以用前缀和优化，但 m,n <= 150，直接枚举 O(mn) 即可。

## Solution

[SourceCode](./solution.js)
