# [2373] Largest Local Values in a Matrix

## Description

[LeetCode Problem Description](https://leetcode.com/problems/largest-local-values-in-a-matrix/description/)

* algorithms
* Easy (87.71%)
* Likes:    1330
* Dislikes: 183
* Testcase Example:  '[[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]'

```md
You are given an n x n integer matrix grid.
Generate an integer matrix maxLocal of size (n - 2) x (n - 2) such that:

maxLocal[i][j] is equal to the largest value of the 3 x 3 matrix in grid centered around row i + 1 and column j + 1.

In other words, we want to find the largest value in every contiguous 3 x 3 matrix in grid.
Return the generated matrix.

Example 1:


Input: grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]
Output: [[9,9],[8,6]]
Explanation: The diagram above shows the original matrix and the generated matrix.
Notice that each value in the generated matrix corresponds to the largest value of a contiguous 3 x 3 matrix in grid.
Example 2:


Input: grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]
Output: [[2,2,2],[2,2,2],[2,2,2]]
Explanation: Notice that the 2 is contained within every contiguous 3 x 3 matrix in grid.


Constraints:

n == grid.length == grid[i].length
3 <= n <= 100
1 <= grid[i][j] <= 100


```

## 题目翻译

给定一个 n x n 的整数矩阵 `grid`，生成一个 (n-2) x (n-2) 的矩阵 `maxLocal`，其中 `maxLocal[i][j]` 等于 `grid` 中以 (i+1, j+1) 为中心的 3x3 矩阵中的最大值。

## 解题思路

遍历结果矩阵的每个位置 (i, j)，查找以 (i+1, j+1) 为中心的 3x3 区域内的最大值。

时间复杂度：O(n^2)，空间复杂度：O(n^2)

## Solution

[SourceCode](./solution.js)
