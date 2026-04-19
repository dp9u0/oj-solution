# [807] Max Increase to Keep City Skyline

## Description

[LeetCode Problem Description](https://leetcode.com/problems/max-increase-to-keep-city-skyline/description/)

* algorithms
* Medium (86.40%)
* Likes:    2670
* Dislikes: 546
* Testcase Example:  '[[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]'

```md
There is a city composed of n x n blocks, where each block contains a single building shaped like a vertical square prism. You are given a 0-indexed n x n integer matrix grid where grid[r][c] represents the height of the building located in the block at row r and column c.
A city&#39;s skyline is theouter contour formed by all the building when viewing the side of the city from a distance. The skyline from each cardinal direction north, east, south, and west may be different.
We are allowed to increase the height of any number of buildings by any amount (the amount can be different per building). The height of a 0-height building can also be increased. However, increasing the height of a building should not affect the city&#39;s skyline from any cardinal direction.
Return the maximum total sum that the height of the buildings can be increased by without changing the city&#39;s skyline from any cardinal direction.

Example 1:


Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
Output: 35
Explanation: The building heights are shown in the center of the above image.
The skylines when viewed from each cardinal direction are drawn in red.
The grid after increasing the height of buildings without affecting skylines is:
gridNew = [ [8, 4, 8, 7],
[7, 4, 7, 7],
[9, 4, 8, 7],
[3, 3, 3, 3] ]

Example 2:

Input: grid = [[0,0,0],[0,0,0],[0,0,0]]
Output: 0
Explanation: Increasing the height of any building will result in the skyline changing.


Constraints:

n == grid.length
n == grid[r].length
2 <= n <= 50
0 <= grid[r][c] <= 100


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 n×n 的建筑高度矩阵，可以在不改变天际线（每行最大值、每列最大值）的前提下增加建筑高度，求最大总增量。

## 解题思路

**Approach: 行列最大值约束**

1. 计算每行最大值 rowMax[i] 和每列最大值 colMax[j]
2. 位置 (r,c) 的新高度上限 = min(rowMax[r], colMax[c])
3. 总增量 = Σ max(0, min(rowMax[r], colMax[c]) - grid[r][c])
4. 复杂度 O(n^2)
