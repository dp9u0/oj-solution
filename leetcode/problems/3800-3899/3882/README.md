# [3882] Minimum XOR Path in a Grid

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-xor-path-in-a-grid/description/)

* algorithms
* Medium (39.33%)
* Likes:    55
* Dislikes: 5
* Testcase Example:  '[[1,2],[3,4]]'

```md
You are given a 2D integer array grid of size m * n.
You start at the top-left cell (0, 0) and want to reach the bottom-right cell (m - 1, n - 1).
At each step, you may move either right or down.
The cost of a path is defined as the bitwise XOR of all the values in the cells along that path, including the start and end cells.
Return the minimum possible XOR value among all valid paths from (0, 0) to (m - 1, n - 1).

Example 1:

Input: grid = [[1,2],[3,4]]
Output: 6
Explanation:
There are two valid paths:

(0, 0) &rarr; (0, 1) &rarr; (1, 1) with XOR: 1 XOR 2 XOR 4 = 7
(0, 0) &rarr; (1, 0) &rarr; (1, 1) with XOR: 1 XOR 3 XOR 4 = 6

The minimum XOR value among all valid paths is 6.

Example 2:

Input: grid = [[6,7],[5,8]]
Output: 9
Explanation:
There are two valid paths:

(0, 0) &rarr; (0, 1) &rarr; (1, 1) with XOR: 6 XOR 7 XOR 8 = 9
(0, 0) &rarr; (1, 0) &rarr; (1, 1) with XOR: 6 XOR 5 XOR 8 = 11

The minimum XOR value among all valid paths is 9.

Example 3:

Input: grid = [[2,7,5]]
Output: 0
Explanation:
There is only one valid path:

(0, 0) &rarr; (0, 1) &rarr; (0, 2) with XOR: 2 XOR 7 XOR 5 = 0

The XOR value of this path is 0, which is the minimum possible.


Constraints:

1 <= m == grid.length <= 1000
1 <= n == grid[i].length <= 1000
m * n <= 1000
0 <= grid[i][j] <= 1023​


```

## 题目翻译

给定 m×n 网格 grid，从 (0,0) 到 (m-1,n-1) 只能向右或向下走。路径的代价是沿途所有格子值的异或。返回所有路径中的最小异或值。

## 解题思路

DP + 位运算。由于 grid[i][j] <= 1023（10 位），且 m*n <= 1000，可以对每个格子维护所有可能的异或值集合。dp[i][j] = Set of all possible XOR values to reach (i,j)。转移：dp[i][j] = { val ^ grid[i][j] for val in dp[i-1][j] ∪ dp[i][j-1] }。

时间复杂度 O(m * n * 1024)

## Solution

[SourceCode](./solution.js)
