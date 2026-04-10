# [3142] Check if Grid Satisfies Conditions

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-grid-satisfies-conditions/description/)

* algorithms
* Easy (45.13%)
* Likes:    113
* Dislikes: 6
* Testcase Example:  '[[1,0,2],[1,0,2]]'

```md
You are given a 2D matrix grid of size m x n. You need to check if each cell grid[i][j] is:

Equal to the cell below it, i.e. grid[i][j] == grid[i + 1][j] (if it exists).
Different from the cell to its right, i.e. grid[i][j] != grid[i][j + 1] (if it exists).

Return true if all the cells satisfy these conditions, otherwise, return false.

Example 1:

Input: grid = [[1,0,2],[1,0,2]]
Output: true
Explanation:

All the cells in the grid satisfy the conditions.

Example 2:

Input: grid = [[1,1,1],[0,0,0]]
Output: false
Explanation:

All cells in the first row are equal.

Example 3:

Input: grid = [[1],[2],[3]]
Output: false
Explanation:

Cells in the first column have different values.


Constraints:

1 <= n, m <= 10
0 <= grid[i][j] <= 9


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 m x n 的二维矩阵 grid，检查每个格子是否满足：
1. 等于下方格子（如果存在）：grid[i][j] == grid[i+1][j]
2. 不等于右方格子（如果存在）：grid[i][j] != grid[i][j+1]

全部满足返回 true，否则返回 false。

## Approach

直接遍历每个格子，检查两个条件即可。时间复杂度 O(m*n)。
