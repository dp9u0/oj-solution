# [688] Knight Probability in Chessboard

## Description

[LeetCode Problem Description](https://leetcode.com/problems/knight-probability-in-chessboard/description/)

* algorithms
* Medium (56.97%)
* Likes:    4034
* Dislikes: 496
* Testcase Example:  '3\n2\n0\n0'

```md
On an n x n chessboard, a knight starts at the cell (row, column) and attempts to make exactly k moves. The rows and columns are 0-indexed, so the top-left cell is (0, 0), and the bottom-right cell is (n - 1, n - 1).
A chess knight has eight possible moves it can make, as illustrated below. Each move is two cells in a cardinal direction, then one cell in an orthogonal direction.

Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.
The knight continues moving until it has made exactly k moves or has moved off the chessboard.
Return the probability that the knight remains on the board after it has stopped moving.

Example 1:

Input: n = 3, k = 2, row = 0, column = 0
Output: 0.06250
Explanation: There are two moves (to (1,2), (2,1)) that will keep the knight on the board.
From each of those positions, there are also two moves that will keep the knight on the board.
The total probability the knight stays on the board is 0.0625.

Example 2:

Input: n = 1, k = 0, row = 0, column = 0
Output: 1.00000


Constraints:

1 <= n <= 25
0 <= k <= 100
0 <= row, column <= n - 1


```

## 翻译

在 n x n 棋盘上，骑士从 (row, column) 出发，随机走恰好 k 步（每步等概率选8个方向之一）。返回骑士仍在棋盘上的概率。

## 解题思路

动态规划。dp[r][c] 表示当前步数下骑士在 (r,c) 的概率。每步将概率/8 扩散到所有合法的8个目标位置。使用滚动数组优化空间。最终答案为所有位置概率之和。

## Solution

[SourceCode](./solution.js)
