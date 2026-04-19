# [463] Island Perimeter

## Description

* algorithms
* Easy (59.54%)
* Total Accepted:    112.4K
* Total Submissions: 188.8K
* Testcase Example:  '[[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]'

```md
You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.
Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).
The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

Example:
Input:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]
Output: 16
Explanation: The perimeter is the 16 yellow stripes in the image below:

```

## Solution

题目意思是已知一个二维数组 1是陆地 ,0 是水, 且只有一个岛,计算岛的周长

`grid[i][j]` 周围有几个0就为perimeter贡献几

[SourceCode](./solution.js)