# [1219] Path with Maximum Gold

## Description

[LeetCode Problem Description](https://leetcode.com/problems/path-with-maximum-gold/description/)

* algorithms
* Medium (68.37%)
* Likes:    3438
* Dislikes: 106
* Testcase Example:  '[[0,6,0],[5,8,7],[0,9,0]]'

```md
In a gold mine grid of size m x n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.
Return the maximum amount of gold you can collect under the conditions:

Every time you are located in a cell you will collect all the gold in that cell.
From your position, you can walk one step to the left, right, up, or down.
You can&#39;t visit the same cell more than once.
Never visit a cell with 0 gold.
You can start and stop collecting gold from any position in the grid that has some gold.


Example 1:

Input: grid = [[0,6,0],[5,8,7],[0,9,0]]
Output: 24
Explanation:
[[0,6,0],
[5,8,7],
[0,9,0]]
Path to get the maximum gold, 9 -> 8 -> 7.

Example 2:

Input: grid = [[1,0,7],[2,0,6],[3,4,5],[0,3,0],[9,0,20]]
Output: 28
Explanation:
[[1,0,7],
[2,0,6],
[3,4,5],
[0,3,0],
[9,0,20]]
Path to get the maximum gold, 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7.


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 15
0 <= grid[i][j] <= 100
There are at most 25 cells containing gold.


```

## 翻译

给定 m×n 金矿网格，从任意有金格子出发，上下左右移动收集金币，不能重复访问、不能走 0 格子。求最大收集量。

## Approach

DFS 回溯。从每个有金格子出发尝试所有路径，访问时临时将格子置 0 标记已访问，回溯时恢复。网格最多 25 个金格，复杂度可接受。

## Solution

[SourceCode](./solution.js)
