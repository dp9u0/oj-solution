# [2290] Minimum Obstacle Removal to Reach Corner

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/description/)

* algorithms
* Hard (70.60%)
* Likes:    1668
* Dislikes: 29
* Testcase Example:  '[[0,1,1],[1,1,0],[1,1,0]]'

```md
You are given a 0-indexed 2D integer array grid of size m x n. Each cell has one of two values:

0 represents an empty cell,
1 represents an obstacle that may be removed.

You can move up, down, left, or right from and to an empty cell.
Return the minimum number of obstacles to remove so you can move from the upper left corner (0, 0) to the lower right corner (m - 1, n - 1).

Example 1:


Input: grid = [[0,1,1],[1,1,0],[1,1,0]]
Output: 2
Explanation: We can remove the obstacles at (0, 1) and (0, 2) to create a path from (0, 0) to (2, 2).
It can be shown that we need to remove at least 2 obstacles, so we return 2.
Note that there may be other ways to remove 2 obstacles to create a path.

Example 2:


Input: grid = [[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]]
Output: 0
Explanation: We can move from (0, 0) to (2, 4) without removing any obstacles, so we return 0.


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 105
2 <= m * n <= 105
grid[i][j] is either 0 or 1.
grid[0][0] == grid[m - 1][n - 1] == 0


```

## 翻译

给定一个 m×n 的网格，每个格子为 0（空）或 1（障碍物，可移除）。从左上角 (0,0) 移动到右下角 (m-1, n-1)，返回需要移除的最少障碍物数量。只能上下左右移动。

## 解题思路

0-1 BFS。将经过空格的代价视为 0，经过障碍物的代价视为 1，求从 (0,0) 到 (m-1,n-1) 的最短路。用双端队列：代价 0 加入队首，代价 1 加入队尾。时间 O(m*n)。

## Solution

[SourceCode](./solution.js)
