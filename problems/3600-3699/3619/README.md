# [3619] Count Islands With Total Value Divisible by K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-islands-with-total-value-divisible-by-k/description/)

* algorithms
* Medium (56.28%)
* Likes:    66
* Dislikes: 1
* Testcase Example:  '[[0,2,1,0,0],[0,5,0,0,5],[0,0,1,0,0],[0,1,4,7,0],[0,2,0,0,8]]\n5'

```md
You are given an m x n matrix grid and a positive integer k. An island is a group of positive integers (representing land) that are 4-directionally connected (horizontally or vertically).
The total value of an island is the sum of the values of all cells in the island.
Return the number of islands with a total value divisible by k.

Example 1:


Input: grid = [[0,2,1,0,0],[0,5,0,0,5],[0,0,1,0,0],[0,1,4,7,0],[0,2,0,0,8]], k = 5
Output: 2
Explanation:
The grid contains four islands. The islands highlighted in blue have a total value that is divisible by 5, while the islands highlighted in red do not.

Example 2:


Input: grid = [[3,0,3,0], [0,3,0,3], [3,0,3,0]], k = 3
Output: 6
Explanation:
The grid contains six islands, each with a total value that is divisible by 3.


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 1000
1 <= m * n <= 105
0 <= grid[i][j] <= 106
1 <= k <= 106


```

## 题目翻译

给定 m x n 矩阵 grid 和正整数 k。岛屿是四连通的正整数格子组，总值为格子值之和。返回总值能被 k 整除的岛屿数。

## 解题思路

BFS/DFS 遍历每个岛屿，计算总值，统计能被 k 整除的岛屿数。

时间复杂度 O(m * n)

## Solution

[SourceCode](./solution.js)
