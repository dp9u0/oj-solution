# [2133] Check if Every Row and Column Contains All Numbers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-every-row-and-column-contains-all-numbers/description/)

* algorithms
* Easy (54.05%)
* Likes:    1082
* Dislikes: 58
* Testcase Example:  '[[1,2,3],[3,1,2],[2,3,1]]'

```md
An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive).
Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise, return false.

Example 1:


Input: matrix = [[1,2,3],[3,1,2],[2,3,1]]
Output: true
Explanation: In this case, n = 3, and every row and column contains the numbers 1, 2, and 3.
Hence, we return true.

Example 2:


Input: matrix = [[1,1,1],[1,2,3],[1,2,3]]
Output: false
Explanation: In this case, n = 3, but the first row and the first column do not contain the numbers 2 or 3.
Hence, we return false.


Constraints:

n == matrix.length == matrix[i].length
1 <= n <= 100
1 <= matrix[i][j] <= n


```

## 中文翻译

一个 n×n 矩阵是有效的，当且仅当每一行和每一列都包含 1 到 n 的所有整数。给定一个 n×n 整数矩阵，判断它是否有效。

## 解题思路

遍历每一行和每一列，用布尔数组检查是否包含 1 到 n 的所有数字。时间复杂度 O(n²)。

## Solution

[SourceCode](./solution.js)
