# [1738] Find Kth Largest XOR Coordinate Value

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-kth-largest-xor-coordinate-value/description/)

* algorithms
* Medium (64.17%)
* Likes:    541
* Dislikes: 85
* Testcase Example:  '[[5,2],[1,6]]\n1'

```md
You are given a 2D matrix of size m x n, consisting of non-negative integers. You are also given an integer k.
The value of coordinate (a, b) of the matrix is the XOR of all matrix[i][j] where 0 <= i <= a < m and 0 <= j <= b < n (0-indexed).
Find the kth largest value (1-indexed) of all the coordinates of matrix.

Example 1:

Input: matrix = [[5,2],[1,6]], k = 1
Output: 7
Explanation: The value of coordinate (0,1) is 5 XOR 2 = 7, which is the largest value.

Example 2:

Input: matrix = [[5,2],[1,6]], k = 2
Output: 5
Explanation: The value of coordinate (0,0) is 5 = 5, which is the 2nd largest value.

Example 3:

Input: matrix = [[5,2],[1,6]], k = 3
Output: 4
Explanation: The value of coordinate (1,0) is 5 XOR 1 = 4, which is the 3rd largest value.

Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 1000
0 <= matrix[i][j] <= 106
1 <= k <= m * n


```

## 翻译

给定 m x n 非负整数矩阵和整数 k。坐标 (a,b) 的值是所有 matrix[i][j]（0<=i<=a, 0<=j<=b）的异或。找出所有坐标值中第 k 大的。

## Approach

二维前缀 XOR。类似二维前缀和，用 XOR 替代加法：

- xor[i][j] = matrix[i][j] ^ xor[i-1][j] ^ xor[i][j-1] ^ xor[i-1][j-1]
- 收集所有 xor 值，排序后取第 k 大

时间复杂度 O(mn log(mn))，空间复杂度 O(mn)。

## Solution

[SourceCode](./solution.js)
