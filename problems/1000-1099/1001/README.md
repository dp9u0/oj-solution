# [1001] Grid Illumination

## Description

[LeetCode Problem Description](https://leetcode.com/problems/grid-illumination/description/)

* algorithms
* Hard (37.52%)
* Likes:    619
* Dislikes: 154
* Testcase Example:  '5\n[[0,0],[4,4]]\n[[1,1],[1,0]]'

```md
There is a 2D grid of size n x n where each cell of this grid has a lamp that is initially turned off.
You are given a 2D array of lamp positions lamps, where lamps[i] = [rowi, coli] indicates that the lamp at grid[rowi][coli] is turned on. Even if the same lamp is listed more than once, it is turned on.
When a lamp is turned on, it illuminates its cell and all other cells in the same row, column, or diagonal.
You are also given another 2D array queries, where queries[j] = [rowj, colj]. For the jth query, determine whether grid[rowj][colj] is illuminated or not. After answering the jth query, turn off the lamp at grid[rowj][colj] and its 8 adjacent lamps if they exist. A lamp is adjacent if its cell shares either a side or corner with grid[rowj][colj].
Return an array of integers ans, where ans[j] should be 1 if the cell in the jth query was illuminated, or 0 if the lamp was not.

Example 1:


Input: n = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,0]]
Output: [1,0]
Explanation: We have the initial grid with all lamps turned off. In the above picture we see the grid after turning on the lamp at grid[0][0] then turning on the lamp at grid[4][4].
The 0thquery asks if the lamp at grid[1][1] is illuminated or not (the blue square). It is illuminated, so set ans[0] = 1. Then, we turn off all lamps in the red square.

The 1stquery asks if the lamp at grid[1][0] is illuminated or not (the blue square). It is not illuminated, so set ans[1] = 0. Then, we turn off all lamps in the red rectangle.


Example 2:

Input: n = 5, lamps = [[0,0],[4,4]], queries = [[1,1],[1,1]]
Output: [1,1]

Example 3:

Input: n = 5, lamps = [[0,0],[0,4]], queries = [[0,4],[0,1],[1,4]]
Output: [1,1,0]


Constraints:

1 <= n <= 109
0 <= lamps.length <= 20000
0 <= queries.length <= 20000
lamps[i].length == 2
0 <= rowi, coli < n
queries[j].length == 2
0 <= rowj, colj < n


```

## 中文翻译

n×n 网格上放置若干灯，每盏灯照亮同行、同列、同对角线的所有格子。对每个查询位置，判断是否被照亮，然后关闭该位置及其 8 邻格上的灯。

## 解题思路

用 4 个哈希表计数：行、列、主对角线(row-col)、副对角线(row+col) 上有多少灯。查询时检查 4 个表是否有计数 > 0。关闭灯时用 Set 去重，遍历 9 个方向减计数。

## Solution

[SourceCode](./solution.js)
