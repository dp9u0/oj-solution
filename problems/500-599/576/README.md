# [576] Out of Boundary Paths

## Description

[LeetCode Problem Description](https://leetcode.com/problems/out-of-boundary-paths/description/)

* algorithms
* Medium (48.56%)
* Likes:    4017
* Dislikes: 297
* Testcase Example:  '2\n2\n2\n0\n0'

```md
There is an m x n grid with a ball. The ball is initially at the position [startRow, startColumn]. You are allowed to move the ball to one of the four adjacent cells in the grid (possibly out of the grid crossing the grid boundary). You can apply at most maxMove moves to the ball.
Given the five integers m, n, maxMove, startRow, startColumn, return the number of paths to move the ball out of the grid boundary. Since the answer can be very large, return it modulo 109 + 7.

Example 1:
Input: m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
Output: 6
Example 2:
Input: m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
Output: 12

Constraints:
1 <= m, n <= 50
0 <= maxMove <= 50
0 <= startRow < m
0 <= startColumn < n
Hint 1: Is traversing every path feasible? There are many possible paths for a small matrix. Try to optimize it.
Hint 2: Can we use some space to store the number of paths and update them after every move?
Hint 3: One obvious thing: the ball will go out of the boundary only by crossing it. Also, there is only one possible way the ball can go out of the boundary from the boundary cell except for corner cells. From the corner cell, the ball can go out in two different ways.
Can you use this thing to solve the problem?

```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

在一个 m x n 的网格中有一个球，球的初始位置是 [startRow, startColumn]。你可以将球移动到网格中四个相邻的格子之一（也可能越过网格边界移出网格）。你最多可以对球执行 maxMove 次移动。

给定五个整数 m、n、maxMove、startRow、startColumn，返回可以使球移出网格边界的路径数量。由于答案可能非常大，返回对 10^9 + 7 取模后的结果。

示例 1：
输入：m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
输出：6

示例 2：
输入：m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
输出：12

约束：
1 <= m, n <= 50
0 <= maxMove <= 50
0 <= startRow < m
0 <= startColumn < n

## 解题思路

记忆化搜索（DFS + Memo）：

- 定义 dfs(row, col, movesLeft) 表示球从 (row, col) 出发、还剩 movesLeft 次移动时，移出边界的路径数。
- 递归出口：movesLeft === 0 时无法再移动，返回 0。
- 转移：向四个方向各走一步。若新位置越界，该方向贡献 1 条路径（直接出界）；否则贡献 dfs(新位置, movesLeft - 1)。
- 答案累加时对 10^9 + 7 取模。
- 用 memo[row][col][movesLeft] 缓存结果，状态总数为 50 × 50 × 51 ≈ 1.3 × 10^5，每个状态 O(4)，总复杂度 O(m · n · maxMove)。

也可以写成自底向上的 DP：dp[k][i][j] 表示移动 k 步后球位于 (i, j) 的路径数，每轮统计边界格子出界的路径数累加，滚动数组优化空间。两种做法等价，本题采用记忆化搜索，代码更简洁。
