# [1536] Minimum Swaps to Arrange a Binary Grid

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-swaps-to-arrange-a-binary-grid/description/)

* algorithms
* Medium (70.12%)
* Likes:    1026
* Dislikes: 107
* Testcase Example:  '[[0,0,1],[1,1,0],[1,0,0]]'

```md
Given an n x n binary grid, in one step you can choose two adjacent rows of the grid and swap them.
A grid is said to be valid if all the cells above the main diagonal are zeros.
Return the minimum number of steps needed to make the grid valid, or -1 if the grid cannot be valid.
The main diagonal of a grid is the diagonal that starts at cell (1, 1) and ends at cell (n, n).

Example 1:


Input: grid = [[0,0,1],[1,1,0],[1,0,0]]
Output: 3

Example 2:


Input: grid = [[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0]]
Output: -1
Explanation: All rows are similar, swaps have no effect on the grid.

Example 3:


Input: grid = [[1,0,0],[1,1,0],[1,1,1]]
Output: 0


Constraints:

n == grid.length == grid[i].length
1 <= n <= 200
grid[i][j] is either 0 or 1


```

## 题目翻译

给定 n×n 二进制网格，每次交换相邻两行。使主对角线以上全为 0。求最少交换次数，不可行返回 -1。

## 解题思路

**贪心 + 冒泡**

每行需满足右侧至少 n-1-i 个连续 0（即 trailing zeros >= n-1-i）。计算每行 trailing zeros，从上到下贪心分配：为第 i 行找最近的满足条件的行并冒泡上来。O(n^2)。

## Solution

[SourceCode](./solution.js)
