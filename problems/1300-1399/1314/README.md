# [1314] Matrix Block Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/matrix-block-sum/description/)

* algorithms
* Medium (76.46%)
* Likes:    2513
* Dislikes: 401
* Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]\n1'

```md
Given a m x n matrix mat and an integer k, return a matrix answer where each answer[i][j] is the sum of all elements mat[r][c] for:

i - k <= r <= i + k,
j - k <= c <= j + k, and
(r, c) is a valid position in the matrix.


Example 1:

Input: mat = [[1,2,3],[4,5,6],[7,8,9]], k = 1
Output: [[12,21,16],[27,45,33],[24,39,28]]

Example 2:

Input: mat = [[1,2,3],[4,5,6],[7,8,9]], k = 2
Output: [[45,45,45],[45,45,45],[45,45,45]]


Constraints:

m ==mat.length
n ==mat[i].length
1 <= m, n, k <= 100
1 <= mat[i][j] <= 100


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 m×n 矩阵 mat 和整数 k，返回矩阵 answer，其中 answer[i][j] 是所有满足 i-k <= r <= i+k 且 j-k <= c <= j+k 的有效位置 (r,c) 的元素之和。

## 解题思路

**二维前缀和**

1. 先计算二维前缀和 prefix[i+1][j+1]
2. 对每个位置 (i,j)，求矩形区域 [i-k, i+k] × [j-k, j+k] 的和
3. 注意边界裁剪：r1 = max(0, i-k), c1 = max(0, j-k), r2 = min(m-1, i+k), c2 = min(n-1, j+k)
4. 用前缀和公式 O(1) 计算每个区域的和

时间复杂度 O(m*n)，空间复杂度 O(m*n)。
