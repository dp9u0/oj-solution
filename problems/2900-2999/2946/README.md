# [2946] Matrix Similarity After Cyclic Shifts

## Description

[LeetCode Problem Description](https://leetcode.com/problems/matrix-similarity-after-cyclic-shifts/description/)

* algorithms
* Easy (74.32%)
* Likes:    473
* Dislikes: 92
* Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]\n4'

```md
You are given an m x n integer matrix mat and an integer k. The matrix rows are 0-indexed.
The following proccess happens k times:

Even-indexed rows (0, 2, 4, ...) are cyclically shifted to the left.



Odd-indexed rows (1, 3, 5, ...) are cyclically shifted to the right.


Return true if the final modified matrix after k steps is identical to the original matrix, and false otherwise.

Example 1:

Input: mat = [[1,2,3],[4,5,6],[7,8,9]], k = 4
Output: false
Explanation:
In each step left shift is applied to rows 0 and 2 (even indices), and right shift to row 1 (odd index).


Example 2:

Input: mat = [[1,2,1,2],[5,5,5,5],[6,3,6,3]], k = 2
Output: true
Explanation:


Example 3:

Input: mat = [[2,2],[2,2]], k = 3
Output: true
Explanation:
As all the values are equal in the matrix, even after performing cyclic shifts the matrix will remain the same.


Constraints:

1 <= mat.length <= 25
1 <= mat[i].length <= 25
1 <= mat[i][j] <= 25
1 <= k <= 50


```

## 中文翻译

给定一个 m x n 整数矩阵 mat 和整数 k，执行 k 次操作：偶数行循环左移一位，奇数行循环右移一位。判断 k 次操作后矩阵是否与原始矩阵相同。

## 解题思路

对每行，判断 k 次移位后是否回到原位。偶数行左移 k 次，奇数行右移 k 次。等价于检查每个元素 mat[i][j] 是否等于移位后的位置 mat[i][(j + shift) % n]，其中 shift 对偶数行为 -k（左移），奇数行为 +k（右移）。

## Solution

[SourceCode](./solution.js)
