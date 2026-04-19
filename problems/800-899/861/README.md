# [861] Score After Flipping Matrix

## Description

[LeetCode Problem Description](https://leetcode.com/problems/score-after-flipping-matrix/description/)

* algorithms
* Medium (80.27%)
* Likes:    2488
* Dislikes: 226
* Testcase Example:  '[[0,0,1,1],[1,0,1,0],[1,1,0,0]]'

```md
You are given an m x n binary matrix grid.
A move consists of choosing any row or column and toggling each value in that row or column (i.e., changing all 0&#39;s to 1&#39;s, and all 1&#39;s to 0&#39;s).
Every row of the matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.
Return the highest possible score after making any number of moves (including zero moves).

Example 1:


Input: grid = [[0,0,1,1],[1,0,1,0],[1,1,0,0]]
Output: 39
Explanation: 0b1111 + 0b1001 + 0b1111 = 15 + 9 + 15 = 39

Example 2:

Input: grid = [[0]]
Output: 1


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 20
grid[i][j] is either 0 or 1.


```

## 翻译

给定 m x n 二进制矩阵，可以翻转任意行或列（0↔1）。每行视为二进制数，矩阵得分为所有行之和。返回最高可能得分。

## Approach

**贪心。** 最高位（第 0 列）权重最大，所以确保每行第 0 列为 1：先按行翻转使所有行首为 1。然后对剩余列，若该列 0 多于 1 则翻转该列。

时间复杂度：O(m * n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
