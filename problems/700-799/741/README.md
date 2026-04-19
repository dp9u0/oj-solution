# [741] Cherry Pickup

## Description

[LeetCode Problem Description](https://leetcode.com/problems/cherry-pickup/description/)

* algorithms
* Hard (39.34%)
* Likes:    4670
* Dislikes: 171
* Testcase Example:  '[[0,1,-1],[1,0,-1],[1,1,1]]'

```md
You are given an n x n grid representing a field of cherries, each cell is one of three possible integers.

0 means the cell is empty, so you can pass through,
1 means the cell contains a cherry that you can pick up and pass through, or
-1 means the cell contains a thorn that blocks your way.

Return the maximum number of cherries you can collect by following the rules below:

Starting at the position (0, 0) and reaching (n - 1, n - 1) by moving right or down through valid path cells (cells with value 0 or 1).
After reaching (n - 1, n - 1), returning to (0, 0) by moving left or up through valid path cells.
When passing through a path cell containing a cherry, you pick it up, and the cell becomes an empty cell 0.
If there is no valid path between (0, 0) and (n - 1, n - 1), then no cherries can be collected.


Example 1:


Input: grid = [[0,1,-1],[1,0,-1],[1,1,1]]
Output: 5
Explanation: The player started at (0, 0) and went down, down, right right to reach (2, 2).
4 cherries were picked up during this single trip, and the matrix becomes [[0,1,-1],[0,0,-1],[0,0,0]].
Then, the player went left, up, up, left to return home, picking up one more cherry.
The total number of cherries picked up is 5, and this is the maximum possible.

Example 2:

Input: grid = [[1,1,-1],[1,-1,1],[-1,1,1]]
Output: 0


Constraints:

n == grid.length
n == grid[i].length
1 <= n <= 50
grid[i][j] is -1, 0, or 1.
grid[0][0] != -1
grid[n - 1][n - 1] != -1


```

## 中文翻译

给定一个 n×n 的网格，每个格子是 0（空）、1（有樱桃）或 -1（有刺阻挡）。
从 (0,0) 出发到 (n-1,n-1)，只能向右或向下移动，到达后再返回 (0,0)（向左或向上）。
经过有樱桃的格子时捡起樱桃，格子变为 0。返回最多能捡多少樱桃。如果没有有效路径则返回 0。

## 解题思路

经典 DP：将往返转化为两条同时从 (0,0) 到 (n-1,n-1) 的路径。
状态 dp[k][r1][r2]，k 为步数（r1+c1 = r2+c2 = k），r1/r2 为两条路径当前所在行。
转移：每条路径可从上方或左方来，共 4 种组合。两条路径在同一格时只计一次樱桃。
遇到 -1 的格子跳过。用滚动数组优化空间到 O(n²)。

## Solution

[SourceCode](./solution.js)
