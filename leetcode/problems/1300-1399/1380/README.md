# [1380] Lucky Numbers in a Matrix

## Description

[LeetCode Problem Description](https://leetcode.com/problems/lucky-numbers-in-a-matrix/description/)

* algorithms
* Easy (79.96%)
* Likes:    2355
* Dislikes: 123
* Testcase Example:  '[[3,7,8],[9,11,13],[15,16,17]]'

```md
Given an m x n matrix of distinct numbers, return all lucky numbers in the matrix in any order.
A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

Example 1:

Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
Output: [15]
Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.

Example 2:

Input: matrix = [[1,10,4,2],[9,3,8,7],[15,16,17,12]]
Output: [12]
Explanation: 12 is the only lucky number since it is the minimum in its row and the maximum in its column.

Example 3:

Input: matrix = [[7,8],[1,2]]
Output: [7]
Explanation: 7 is the only lucky number since it is the minimum in its row and the maximum in its column.


Constraints:

m == mat.length
n == mat[i].length
1 <= n, m <= 50
1 <= matrix[i][j] <= 105.
All elements in the matrix are distinct.


```

## 中文翻译

给定一个 m×n 的矩阵（所有元素互不相同），找出所有"幸运数字"：在所在行中最小且在所在列中最大的元素。

## 解题思路

预处理每列的最大值，然后遍历每行的最小值，检查该最小值是否也是其所在列的最大值。

## Solution

[SourceCode](./solution.js)
