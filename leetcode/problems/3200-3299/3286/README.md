# [3286] Find a Safe Walk Through a Grid

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-a-safe-walk-through-a-grid/description/)

* algorithms
* Medium (32.99%)
* Likes:    232
* Dislikes: 14
* Testcase Example:  '[[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]]\n1'

```md
You are given an m x n binary matrix grid and an integer health.
You start on the upper-left corner (0, 0) and would like to get to the lower-right corner (m - 1, n - 1).
You can move up, down, left, or right from one cell to another adjacent cell as long as your health remains positive.
Cells (i, j) with grid[i][j] = 1 are considered unsafe and reduce your health by 1.
Return true if you can reach the final cell with a health value of 1 or more, and false otherwise.

Example 1:

Input: grid = [[0,1,0,0,0],[0,1,0,1,0],[0,0,0,1,0]], health = 1
Output: true
Explanation:
The final cell can be reached safely by walking along the gray cells below.

Example 2:

Input: grid = [[0,1,1,0,0,0],[1,0,1,0,0,0],[0,1,1,1,0,1],[0,0,1,0,1,0]], health = 3
Output: false
Explanation:
A minimum of 4 health points is needed to reach the final cell safely.

Example 3:

Input: grid = [[1,1,1],[1,0,1],[1,1,1]], health = 5
Output: true
Explanation:
The final cell can be reached safely by walking along the gray cells below.

Any path that does not go through the cell (1, 1) is unsafe since your health will drop to 0 when reaching the final cell.


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 50
2 <= m * n
1 <= health <= m + n
grid[i][j] is either 0 or 1.


```

## 翻译

给定网格和 health，从左上角到右下角移动，经过值为 1 的格子扣 1 点生命。是否能到达终点且剩余生命 >= 1。

## 解题思路

0-1 BFS。边权为 0（安全格）加到 deque 前端，边权为 1（不安全格）加到后端。求最小代价路径，若代价 < health 则可行。O(mn)。

## Solution

[SourceCode](./solution.js)
