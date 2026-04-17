# [1253] Reconstruct a 2-Row Binary Matrix

## Description

[LeetCode Problem Description](https://leetcode.com/problems/reconstruct-a-2-row-binary-matrix/description/)

* algorithms
* Medium (48.89%)
* Likes:    484
* Dislikes: 35
* Testcase Example:  '2\n1\n[1,1,1]'

```md
Given the following details of a matrix with n columns and 2 rows :

The matrix is a binary matrix, which means each element in the matrix can be 0 or 1.
The sum of elements of the 0-th(upper) row is given as upper.
The sum of elements of the 1-st(lower) row is given as lower.
The sum of elements in the i-th column(0-indexed) is colsum[i], where colsum is given as an integer array with length n.

Your task is to reconstruct the matrix with upper, lower and colsum.
Return it as a 2-D integer array.
If there are more than one valid solution, any of them will be accepted.
If no valid solution exists, return an empty 2-D array.

Example 1:

Input: upper = 2, lower = 1, colsum = [1,1,1]
Output: [[1,1,0],[0,0,1]]
Explanation: [[1,0,1],[0,1,0]], and [[0,1,1],[1,0,0]] are also correct answers.

Example 2:

Input: upper = 2, lower = 3, colsum = [2,2,1,1]
Output: []

Example 3:

Input: upper = 5, lower = 5, colsum = [2,1,2,0,1,0,1,2,0,1]
Output: [[1,1,1,0,1,0,0,1,0,0],[1,0,1,0,0,0,1,1,0,1]]


Constraints:

1 <= colsum.length <= 10^5
0 <= upper, lower <= colsum.length
0 <= colsum[i] <= 2


```

## 题目翻译

给定 2 行 n 列的二进制矩阵的行和 upper、lower 以及列和数组 colsum，重构矩阵。不存在则返回空数组。

## 解题思路

**贪心构造**

- colsum[i]=2：两行都填 1，upper--, lower--。
- colsum[i]=0：两行都填 0。
- colsum[i]=1：优先填给剩余需求更大的行。

先处理 2 和 0 确定固定位置，再贪心分配 1。最后检查 upper 和 lower 是否都为 0。

## Solution

[SourceCode](./solution.js)
