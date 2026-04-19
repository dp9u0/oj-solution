# [3603] Minimum Cost Path with Alternating Directions II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-cost-path-with-alternating-directions-ii/description/)

* algorithms
* Medium (44.72%)
* Likes:    74
* Dislikes: 12
* Testcase Example:  '1\n2\n[[1,2]]'

```md
You are given two integers m and n representing the number of rows and columns of a grid, respectively.
The cost to enter cell (i, j) is defined as (i + 1) * (j + 1).
You are also given a 2D integer array waitCost where waitCost[i][j] defines the cost to wait on that cell.
The path will always begin by entering cell (0, 0) on move 1 and paying the entrance cost.
At each step, you follow an alternating pattern:

On odd-numbered seconds, you must move right or down to an adjacent cell, paying its entry cost.
On even-numbered seconds, you must wait in place for exactly one second and pay waitCost[i][j] during that second.

Return the minimum total cost required to reach (m - 1, n - 1).

Example 1:

Input: m = 1, n = 2, waitCost = [[1,2]]
Output: 3
Explanation:
The optimal path is:

Start at cell (0, 0) at second 1 with entry cost (0 + 1) * (0 + 1) = 1.
Second 1: Move right to cell (0, 1) with entry cost (0 + 1) * (1 + 1) = 2.

Thus, the total cost is 1 + 2 = 3.

Example 2:

Input: m = 2, n = 2, waitCost = [[3,5],[2,4]]
Output: 9
Explanation:
The optimal path is:

Start at cell (0, 0) at second 1 with entry cost (0 + 1) * (0 + 1) = 1.
Second 1: Move down to cell (1, 0) with entry cost (1 + 1) * (0 + 1) = 2.
Second 2: Wait at cell (1, 0), paying waitCost[1][0] = 2.
Second 3: Move right to cell (1, 1) with entry cost (1 + 1) * (1 + 1) = 4.

Thus, the total cost is 1 + 2 + 2 + 4 = 9.

Example 3:

Input: m = 2, n = 3, waitCost = [[6,1,4],[3,2,5]]
Output: 16
Explanation:
The optimal path is:

Start at cell (0, 0) at second 1 with entry cost (0 + 1) * (0 + 1) = 1.
Second 1: Move right to cell (0, 1) with entry cost (0 + 1) * (1 + 1) = 2.
Second 2: Wait at cell (0, 1), paying waitCost[0][1] = 1.
Second 3: Move down to cell (1, 1) with entry cost (1 + 1) * (1 + 1) = 4.
Second 4: Wait at cell (1, 1), paying waitCost[1][1] = 2.
Second 5: Move right to cell (1, 2) with entry cost (1 + 1) * (2 + 1) = 6.

Thus, the total cost is 1 + 2 + 1 + 4 + 2 + 6 = 16.


Constraints:

1 <= m, n <= 105
2 <= m * n <= 105
waitCost.length == m
waitCost[0].length == n
0 <= waitCost[i][j] <= 105


```

## 翻译

m×n网格，进入(i,j)的费用为(i+1)*(j+1)。奇数秒必须向右或向下移动，偶数秒必须等待并支付waitCost[i][j]。从(0,0)出发，求到达(m-1,n-1)的最小总费用。

## 解题思路

由于只能向右或向下移动，按行优先顺序做DP。dp0[i][j]表示到达(i,j)处于偶数秒（刚移动，需等待）的最小费用，dp1[i][j]表示处于奇数秒（可移动）的最小费用。处理每个格子时：先dp0等待变dp1，再dp1移动到右/下更新dp0。

## Solution

[SourceCode](./solution.js)
