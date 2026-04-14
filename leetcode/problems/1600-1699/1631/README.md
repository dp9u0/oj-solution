# [1631] Path With Minimum Effort

## Description

[LeetCode Problem Description](https://leetcode.com/problems/path-with-minimum-effort/description/)

* algorithms
* Medium (63.02%)
* Likes:    6836
* Dislikes: 238
* Testcase Example:  '[[1,2,2],[3,8,2],[5,3,5]]'

```md
You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e.,0-indexed). You can move up, down, left, or right, and you wish to find a route that requires the minimum effort.
A route&#39;s effort is the maximum absolute difference in heights between two consecutive cells of the route.
Return the minimum effort required to travel from the top-left cell to the bottom-right cell.

Example 1:


Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
Output: 2
Explanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.
This is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.

Example 2:


Input: heights = [[1,2,3],[3,8,4],[5,3,5]]
Output: 1
Explanation: The route of [1,2,3,4,5] has a maximum absolute difference of 1 in consecutive cells, which is better than route [1,3,5,3,5].

Example 3:


Input: heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]
Output: 0
Explanation: This route does not require any effort.


Constraints:

rows == heights.length
columns == heights[i].length
1 <= rows, columns <= 100
1 <= heights[i][j] <= 106


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定二维 heights 矩阵，从左上角走到右下角（四方向移动），路径的 effort 为相邻格子高度差的最大值。返回最小 effort。

## 解题思路

二分答案 + BFS。二分 effort 的值 mid，用 BFS 检查是否能在高度差不超过 mid 的情况下从 (0,0) 到 (rows-1, cols-1)。
初始范围 [0, maxHeight]，O(mn log(maxHeight))。
