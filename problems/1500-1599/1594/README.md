# [1594] Maximum Non Negative Product in a Matrix

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-non-negative-product-in-a-matrix/description/)

* algorithms
* Medium (51.59%)
* Likes:    1426
* Dislikes: 91
* Testcase Example:  '[[-1,-2,-3],[-2,-3,-3],[-3,-3,-2]]'

```md
You are given a m x n matrix grid. Initially, you are located at the top-left corner (0, 0), and in each step, you can only move right or down in the matrix.
Among all possible paths starting from the top-left corner (0, 0) and ending in the bottom-right corner (m - 1, n - 1), find the path with the maximum non-negative product. The product of a path is the product of all integers in the grid cells visited along the path.
Return the maximum non-negative product modulo 109 + 7. If the maximum product is negative, return -1.
Notice that the modulo is performed after getting the maximum product.

Example 1:


Input: grid = [[-1,-2,-3],[-2,-3,-3],[-3,-3,-2]]
Output: -1
Explanation: It is not possible to get non-negative product in the path from (0, 0) to (2, 2), so return -1.

Example 2:


Input: grid = [[1,-2,1],[1,-2,1],[3,-4,1]]
Output: 8
Explanation: Maximum non-negative product is shown (1 * 1 * -2 * -4 * 1 = 8).

Example 3:


Input: grid = [[1,3],[0,-4]]
Output: 0
Explanation: Maximum non-negative product is shown (1 * 0 * -4 = 0).


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 15
-4 <= grid[i][j] <= 4


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 m×n 矩阵 grid，从左上角 (0,0) 出发只能向右或向下移动，到达右下角 (m-1,n-1)。求所有路径中乘积的最大非负值，对 10^9+7 取模。如果最大乘积为负数，返回 -1。

## 解题思路

**动态规划（同时维护最大值和最小值）**

由于负数乘以最小值可能变成最大值，需要同时维护到达每个位置的路径乘积最大值和最小值。

1. dpMax[i][j] 和 dpMin[i][j] 分别表示到达 (i,j) 的路径乘积最大值和最小值
2. 转移：从上方或左方转移，乘以当前格子值后更新 max 和 min
3. 最终取 dpMax[m-1][n-1]，如果为负则返回 -1

时间复杂度 O(m*n)，空间复杂度 O(m*n)。
