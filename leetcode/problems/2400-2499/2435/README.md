# [2435] Paths in Matrix Whose Sum Is Divisible by K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k/description/)

* algorithms
* Hard (58.73%)
* Likes:    1346
* Dislikes: 46
* Testcase Example:  '[[5,2,4],[3,0,5],[0,7,2]]\n3'

```md
You are given a 0-indexed m x n integer matrix grid and an integer k. You are currently at position (0, 0) and you want to reach position (m - 1, n - 1) moving only down or right.
Return the number of paths where the sum of the elements on the path is divisible by k. Since the answer may be very large, return it modulo 109 + 7.

Example 1:


Input: grid = [[5,2,4],[3,0,5],[0,7,2]], k = 3
Output: 2
Explanation: There are two paths where the sum of the elements on the path is divisible by k.
The first path highlighted in red has a sum of 5 + 2 + 4 + 5 + 2 = 18 which is divisible by 3.
The second path highlighted in blue has a sum of 5 + 3 + 0 + 5 + 2 = 15 which is divisible by 3.

Example 2:


Input: grid = [[0,0]], k = 5
Output: 1
Explanation: The path highlighted in red has a sum of 0 + 0 = 0 which is divisible by 5.

Example 3:


Input: grid = [[7,3,4,9],[2,3,6,2],[2,3,7,0]], k = 1
Output: 10
Explanation: Every integer is divisible by 1 so the sum of the elements on every possible path is divisible by k.


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 5 * 104
1 <= m * n <= 5 * 104
0 <= grid[i][j] <= 100
1 <= k <= 50


```

## 题目翻译

给定 m×n 矩阵，从 (0,0) 只能向右或向下走到 (m-1,n-1)，求路径和能被 k 整除的路径数，对 10^9+7 取模。

## 解题思路

**网格DP + 余数状态**

dp[i][j][r] = 从 (0,0) 到 (i,j)，路径和对 k 取模为 r 的路径数。转移：dp[i][j][(r+grid[i][j])%k] += dp[i-1][j][r] + dp[i][j-1][r]。答案为 dp[m-1][n-1][0]。空间优化：按行滚动，每行维护 k 个余数状态。O(m*n*k) 时间，O(n*k) 空间。

## Solution

[SourceCode](./solution.js)
