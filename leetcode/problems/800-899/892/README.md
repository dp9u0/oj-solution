# [892] Surface Area of 3D Shapes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/surface-area-of-3d-shapes/description/)

* algorithms
* Easy (55.20%)
* Testcase Example:  '[[2]]'

```md
On a N * N grid, we place some 1 * 1 * 1 cubes.
Each value v = grid[i][j] represents a tower of v cubes placed on top of grid cell (i, j).
Return the total surface area of the resulting shapes.

Example 1:
Input: [[2]]
Output: 10
Example 2:
Input: [[1,2],[3,4]]
Output: 34
Example 3:
Input: [[1,0],[0,2]]
Output: 16
Example 4:
Input: [[1,1,1],[1,0,1],[1,1,1]]
Output: 32
Example 5:
Input: [[2,2,2],[2,1,2],[2,2,2]]
Output: 46

Note:
1 <= N <= 50
0 <= grid[i][j] <= 50

```

## Solution

数学题,通过`grid[i][j]`上下左右的值可以计算出该`grid`的表面积

[SourceCode](./solution.js)