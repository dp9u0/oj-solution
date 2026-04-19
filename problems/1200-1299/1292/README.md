# [1292] Maximum Side Length of a Square with Sum Less than or Equal to Threshold

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold/description/)

* algorithms
* Medium (65.44%)
* Likes:    1544
* Dislikes: 125
* Testcase Example:  '[[1,1,3,2,4,3,2],[1,1,3,2,4,3,2],[1,1,3,2,4,3,2]]\n4'

```md
Given a m x n matrix mat and an integer threshold, return the maximum side-length of a square with a sum less than or equal to threshold or return 0 if there is no such square.

Example 1:


Input: mat = [[1,1,3,2,4,3,2],[1,1,3,2,4,3,2],[1,1,3,2,4,3,2]], threshold = 4
Output: 2
Explanation: The maximum side length of square with sum less than or equal to 4 is 2 as shown.

Example 2:

Input: mat = [[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2],[2,2,2,2,2]], threshold = 1
Output: 0


Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 300
0 <= mat[i][j] <= 104
0 <= threshold <= 105


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 m×n 矩阵 mat 和整数 threshold，返回和不超过 threshold 的最大正方形边长。

## 解题思路

**二维前缀和 + 遍历**

1. 计算二维前缀和 prefix[i+1][j+1] = mat[i][j] + prefix[i][j+1] + prefix[i+1][j] - prefix[i][j]
2. 边长从大到小尝试不现实，直接遍历所有可能的正方形边长 k，用前缀和 O(1) 查询每个正方形的和
3. 优化：边遍历边检查，如果当前点能形成边长 result+1 的正方形且和 <= threshold，则 result++

时间复杂度 O(m*n*min(m,n))，空间复杂度 O(m*n)。
