# [1937] Maximum Number of Points with Cost

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-points-with-cost/description/)

* algorithms
* Medium (41.77%)
* Likes:    3269
* Dislikes: 243
* Testcase Example:  '[[1,2,3],[1,5,1],[3,1,1]]'

```md
You are given an m x n integer matrix points (0-indexed). Starting with 0 points, you want to maximize the number of points you can get from the matrix.
To gain points, you must pick one cell in each row. Picking the cell at coordinates (r, c) will add points[r][c] to your score.
However, you will lose points if you pick a cell too far from the cell that you picked in the previous row. For every two adjacent rows r and r + 1 (where 0 <= r < m - 1), picking cells at coordinates (r, c1) and (r + 1, c2) will subtract abs(c1 - c2) from your score.
Return the maximum number of points you can achieve.
abs(x) is defined as:

x for x >= 0.
-x for x < 0.


Example 1:


Input: points = [[1,2,3],[1,5,1],[3,1,1]]
Output: 9
Explanation:
The blue cells denote the optimal cells to pick, which have coordinates (0, 2), (1, 1), and (2, 0).
You add 3 + 5 + 3 = 11 to your score.
However, you must subtract abs(2 - 1) + abs(1 - 0) = 2 from your score.
Your final score is 11 - 2 = 9.

Example 2:


Input: points = [[1,5],[2,3],[4,2]]
Output: 11
Explanation:
The blue cells denote the optimal cells to pick, which have coordinates (0, 1), (1, 1), and (2, 0).
You add 5 + 3 + 4 = 12 to your score.
However, you must subtract abs(1 - 1) + abs(1 - 0) = 1 from your score.
Your final score is 12 - 1 = 11.


Constraints:

m == points.length
n == points[r].length
1 <= m, n <= 105
1 <= m * n <= 105
0 <= points[r][c] <= 105


```

## 中文翻译

给定 m x n 整数矩阵，每行选一个格子，得分 = 所选格子值之和 - 相邻行所选列的列号差的绝对值之和。求最大得分。

## 解题思路

**DP + 左右扫描优化**

设 dp[r][c] = 第 r 行选第 c 列时的最大得分。
转移：dp[r][c] = points[r][c] + max(dp[r-1][c'] - |c - c'|) 对所有 c'

直接枚举 c' 是 O(n^2)，用左右前缀最大值优化到 O(n)：
- dp[r-1][c'] - |c - c'| = dp[r-1][c'] + c' - c (当 c' <= c) 或 dp[r-1][c'] - c' + c (当 c' >= c)
- leftMax[c] = max(dp[r-1][c'] + c') for c' <= c，从左往右扫
- rightMax[c] = max(dp[r-1][c'] - c') for c' >= c，从右往左扫
- dp[r][c] = points[r][c] + max(leftMax[c] - c, rightMax[c] + c)

时间复杂度：O(m * n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
