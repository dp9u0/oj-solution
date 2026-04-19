# [3256] Maximum Value Sum by Placing Three Rooks I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-i/description/)

* algorithms
* Hard (16.49%)
* Likes:    110
* Dislikes: 11
* Testcase Example:  '[[-3,1,1,1],[-3,1,-3,1],[-3,2,1,1]]'

```md
You are given a m x n 2D array board representing a chessboard, where board[i][j] represents the value of the cell (i, j).
Rooks in the same row or column attack each other. You need to place three rooks on the chessboard such that the rooks do not attack each other.
Return the maximum sum of the cell values on which the rooks are placed.

Example 1:

Input: board = [[-3,1,1,1],[-3,1,-3,1],[-3,2,1,1]]
Output: 4
Explanation:

We can place the rooks in the cells (0, 2), (1, 3), and (2, 1) for a sum of 1 + 1 + 2 = 4.

Example 2:

Input: board = [[1,2,3],[4,5,6],[7,8,9]]
Output: 15
Explanation:
We can place the rooks in the cells (0, 0), (1, 1), and (2, 2) for a sum of 1 + 5 + 9 = 15.

Example 3:

Input: board = [[1,1,1],[1,1,1],[1,1,1]]
Output: 3
Explanation:
We can place the rooks in the cells (0, 2), (1, 1), and (2, 0) for a sum of 1 + 1 + 1 = 3.


Constraints:

3 <= m == board.length <= 100
3 <= n == board[i].length <= 100
-109 <= board[i][j] <= 109


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

在 m×n 棋盘上放置3个车（不能同行同列），使所占据格子值之和最大。

## 解题思路

对每行只保留值最大的3个格子（及其列号），因为只放3个车，每行最多选1个，前3名足以覆盖最优解。然后枚举所有 C(m,3) 种行组合，对每组3行尝试 top3 格子的列分配（3^3=27种），过滤列冲突后取最大和。总复杂度 O(C(m,3) * 27)。
