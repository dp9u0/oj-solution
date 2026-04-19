# [2017] Grid Game

## Description

[LeetCode Problem Description](https://leetcode.com/problems/grid-game/description/)

* algorithms
* Medium (60.88%)
* Likes:    1808
* Dislikes: 94
* Testcase Example:  '[[2,5,4],[1,5,1]]'

```md
You are given a 0-indexed 2D array grid of size 2 x n, where grid[r][c] represents the number of points at position (r, c) on the matrix. Two robots are playing a game on this matrix.
Both robots initially start at (0, 0) and want to reach (1, n-1). Each robot may only move to the right ((r, c) to (r, c + 1)) or down ((r, c) to (r + 1, c)).
At the start of the game, the first robot moves from (0, 0) to (1, n-1), collecting all the points from the cells on its path. For all cells (r, c) traversed on the path, grid[r][c] is set to 0. Then, the second robot moves from (0, 0) to (1, n-1), collecting the points on its path. Note that their paths may intersect with one another.
The first robot wants to minimize the number of points collected by the second robot. In contrast, the second robot wants to maximize the number of points it collects. If both robots play optimally, return the number of points collected by the second robot.

Example 1:


Input: grid = [[2,5,4],[1,5,1]]
Output: 4
Explanation: The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.
The cells visited by the first robot are set to 0.
The second robot will collect 0 + 0 + 4 + 0 = 4 points.

Example 2:


Input: grid = [[3,3,1],[8,5,2]]
Output: 4
Explanation: The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.
The cells visited by the first robot are set to 0.
The second robot will collect 0 + 3 + 1 + 0 = 4 points.

Example 3:


Input: grid = [[1,3,1,15],[1,3,3,1]]
Output: 7
Explanation: The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.
The cells visited by the first robot are set to 0.
The second robot will collect 0 + 1 + 3 + 3 + 0 = 7 points.


Constraints:

grid.length == 2
n == grid[r].length
1 <= n <= 5 * 104
1 <= grid[r][c] <= 105


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个 2 x n 的网格，grid[r][c] 表示位置 (r, c) 上的分数。两个机器人在网格上玩游戏。

两个机器人都从 (0, 0) 出发，到达 (1, n-1)，每次只能向右或向下移动。

游戏流程：
1. 第一个机器人从 (0, 0) 移动到 (1, n-1)，收集路径上所有格子的分数，然后将这些格子的值设为 0
2. 第二个机器人从 (0, 0) 移动到 (1, n-1)，收集路径上的分数

第一个机器人想让第二个机器人收集的分数最小，第二个机器人想让自己的分数最大。双方都采取最优策略，返回第二个机器人收集的分数。

## 解题思路

**前缀和 + 枚举分界点**

由于网格只有 2 行，每个机器人的路径完全由它在第几列从第 0 行"拐弯"到第 1 行决定。

如果第一个机器人在第 k 列拐弯：
- 它清空了：row0 的 [0..k] 和 row1 的 [k..n-1]
- 剩余非零区域：row0 的 [k+1..n-1]（右上）和 row1 的 [0..k-1]（左下）

第二个机器人的最优选择为 `max(右上总和, 左下总和)`，因为它只能走一条路径，最优就是取两块剩余区域中较大的一块。

第一个机器人要最小化这个值，所以遍历所有 k，取 `min(max(topRight, bottomLeft))`。

用前缀和预处理，时间复杂度 O(n)，空间复杂度 O(n)。
