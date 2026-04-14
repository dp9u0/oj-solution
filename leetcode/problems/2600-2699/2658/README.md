# [2658] Maximum Number of Fish in a Grid

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/description/)

* algorithms
* Medium (70.54%)
* Likes:    952
* Dislikes: 67
* Testcase Example:  '[[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]]'

```md
You are given a 0-indexed 2D matrix grid of size m x n, where (r, c) represents:

A land cell if grid[r][c] = 0, or
A water cell containing grid[r][c] fish, if grid[r][c] > 0.

A fisher can start at any water cell (r, c) and can do the following operations any number of times:

Catch all the fish at cell (r, c), or
Move to any adjacent water cell.

Return the maximum number of fish the fisher can catch if he chooses his starting cell optimally, or 0 if no water cell exists.
An adjacent cell of the cell (r, c), is one of the cells (r, c + 1), (r, c - 1), (r + 1, c) or (r - 1, c) if it exists.

Example 1:


Input: grid = [[0,2,1,0],[4,0,0,3],[1,0,0,4],[0,3,2,0]]
Output: 7
Explanation: The fisher can start at cell (1,3) and collect 3 fish, then move to cell (2,3)and collect 4 fish.

Example 2:


Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,1]]
Output: 1
Explanation: The fisher can start at cells (0,0) or (3,3) and collect a single fish.


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 10
0 <= grid[i][j] <= 10


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 m×n 网格，0 表示陆地，> 0 表示水域（鱼的数量）。渔夫可从任意水域出发，收集当前格的鱼后移动到相邻水域。返回最多能捕到的鱼数。

## 解题思路

本质是找所有水域连通分量中鱼数之和的最大值。BFS/DFS 洪泛填充即可。网格最大 10×10，非常小。
