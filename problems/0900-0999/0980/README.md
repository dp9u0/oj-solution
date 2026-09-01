# [980] Unique Paths III

## Description

[LeetCode Problem Description](https://leetcode.com/problems/unique-paths-iii/description/)

* algorithms
* Hard (82.81%)
* Likes:    5490
* Dislikes: 200
* Testcase Example:  '[[1,0,0,0],[0,0,0,0],[0,0,2,-1]]'

```md
You are given an m x n integer array grid where grid[i][j] could be:

1 representing the starting square. There is exactly one starting square.
2 representing the ending square. There is exactly one ending square.
0 representing empty squares we can walk over.
-1 representing obstacles that we cannot walk over.

Return the number of 4-directional walks from the starting square to the ending square, that walk over every non-obstacle square exactly once.

Example 1:


Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,2,-1]]
Output: 2
Explanation: We have the following two paths:
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2)
2. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2)

Example 2:


Input: grid = [[1,0,0,0],[0,0,0,0],[0,0,0,2]]
Output: 4
Explanation: We have the following four paths:
1. (0,0),(0,1),(0,2),(0,3),(1,3),(1,2),(1,1),(1,0),(2,0),(2,1),(2,2),(2,3)
2. (0,0),(0,1),(1,1),(1,0),(2,0),(2,1),(2,2),(1,2),(0,2),(0,3),(1,3),(2,3)
3. (0,0),(1,0),(2,0),(2,1),(2,2),(1,2),(1,1),(0,1),(0,2),(0,3),(1,3),(2,3)
4. (0,0),(1,0),(2,0),(2,1),(1,1),(0,1),(0,2),(0,3),(1,3),(1,2),(2,2),(2,3)

Example 3:


Input: grid = [[0,1],[2,0]]
Output: 0
Explanation: There is no path that walks over every empty square exactly once.
Note that the starting and ending square can be anywhere in the grid.


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 20
1 <= m * n <= 20
-1 <= grid[i][j] <= 2
There is exactly one starting cell and one ending cell.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 m×n 网格，1 表示起点，2 表示终点，0 表示空格，-1 表示障碍。求从起点到终点的路径数，要求恰好经过每个非障碍格子一次。

## 解题思路

**回溯 / DFS**

统计需要经过的空格数（0 的个数 + 起点自身），从起点开始 DFS，每经过一个格子标记为已访问（设为 -1），当到达终点且步数等于 totalSteps 时计数加一。

回溯时恢复格子原值。

时间复杂度 O(3^(m*n))，空间复杂度 O(m*n)（递归栈）。
