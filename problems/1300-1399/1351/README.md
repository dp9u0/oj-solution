# [1351] Count Negative Numbers in a Sorted Matrix

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/description/)

* algorithms
* Easy (79.57%)
* Likes:    5493
* Dislikes: 147
* Testcase Example:  '[[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]'

```md
Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

Example 1:

Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.

Example 2:

Input: grid = [[3,2],[1,0]]
Output: 0


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 100
-100 <= grid[i][j] <= 100


Follow up: Could you find an O(n + m) solution?

```

## 题目翻译

给定按行和列非递增排序的 m×n 矩阵，统计其中负数的个数。

## 解题思路

O(m+n) 解法：从右上角出发，逐行向下移动。每行从右向左找到第一个非负数的位置，该行右侧都是负数。利用单调性：下一行的负数分界线不会在上一行分界线的左边。

## Solution

[SourceCode](./solution.js)
