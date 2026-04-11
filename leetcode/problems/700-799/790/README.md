# [790] Domino and Tromino Tiling

## Description

[LeetCode Problem Description](https://leetcode.com/problems/domino-and-tromino-tiling/description/)

* algorithms
* Medium (51.39%)
* Likes:    4153
* Dislikes: 1321
* Testcase Example:  '3'

```md
You have two types of tiles: a 2 x 1 domino shape and a tromino shape. You may rotate these shapes.

Given an integer n, return the number of ways to tile an 2 x n board. Since the answer may be very large, return it modulo 109 + 7.
In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.

Example 1:


Input: n = 3
Output: 5
Explanation: The five different ways are shown above.

Example 2:

Input: n = 1
Output: 1


Constraints:

1 <= n <= 1000


```

## 翻译

你有两种类型的瓷砖：2x1 的多米诺骨牌和 L 型的 tromino。可以旋转这些形状。

给定整数 `n`，返回铺满 2xn 棋盘的方法数。结果对 10^9 + 7 取模。

## Approach

**DP。** 定义三个状态：
- `dp[i][0]`：前 i 列完全填满的方法数
- `dp[i][1]`：前 i 列上面多出一个格子的方法数
- `dp[i][2]`：前 i 列下面多出一个格子的方法数

转移：
- `dp[i][0] = dp[i-1][0] + dp[i-2][0] + dp[i-1][1] + dp[i-1][2]`（竖多米诺、两个横多米诺、tromino 补齐）
- `dp[i][1] = dp[i-2][0] + dp[i-1][2]`（横多米诺从下方伸出、tromino 翻转）
- `dp[i][2] = dp[i-2][0] + dp[i-1][1]`

由于 dp[i][1] 和 dp[i][2] 对称，可以简化为两个变量。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
