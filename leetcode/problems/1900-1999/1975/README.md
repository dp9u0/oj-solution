# [1975] Maximum Matrix Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-matrix-sum/description/)

* algorithms
* Medium (67.54%)
* Likes:    1622
* Dislikes: 75
* Testcase Example:  '[[1,-1],[-1,1]]'

```md
You are given an n x n integer matrix. You can do the following operation any number of times:

Choose any two adjacent elements of matrix and multiply each of them by -1.

Two elements are considered adjacent if and only if they share a border.
Your goal is to maximize the summation of the matrix&#39;s elements. Return the maximum sum of the matrix&#39;s elements using the operation mentioned above.

Example 1:


Input: matrix = [[1,-1],[-1,1]]
Output: 4
Explanation: We can follow the following steps to reach sum equals 4:
- Multiply the 2 elements in the first row by -1.
- Multiply the 2 elements in the first column by -1.

Example 2:


Input: matrix = [[1,2,3],[-1,-2,-3],[1,2,3]]
Output: 16
Explanation: We can follow the following step to reach sum equals 16:
- Multiply the 2 last elements in the second row by -1.


Constraints:

n == matrix.length == matrix[i].length
2 <= n <= 250
-105 <= matrix[i][j] <= 105


```

## 题目翻译

给定 n×n 整数矩阵，操作：选择任意两个相邻元素各乘以 -1。可以操作任意次。求矩阵元素和的最大值。

## 解题思路

关键观察：通过连续操作，可以把负号"移动"到任意位置。所以负数的个数可以变成任意偶数个。如果负数个数为偶数，全部变正，sum = |所有元素|之和；如果为奇数，必剩一个负数，让它取绝对值最小的元素，sum = |所有元素|之和 - 2 * minAbs。

时间复杂度 O(n^2)

## Solution

[SourceCode](./solution.js)
