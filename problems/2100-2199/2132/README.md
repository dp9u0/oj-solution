# [2132] Stamping the Grid

## Description

[LeetCode Problem Description](https://leetcode.com/problems/stamping-the-grid/description/)

* algorithms
* Hard (35.15%)
* Likes:    419
* Dislikes: 47
* Testcase Example:  '[[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]]\n4\n3'

```md
You are given an m x n binary matrix grid where each cell is either 0 (empty) or 1 (occupied).
You are then given stamps of size stampHeight x stampWidth. We want to fit the stamps such that they follow the given restrictions and requirements:

Cover all the empty cells.
Do not cover any of the occupied cells.
We can put as many stamps as we want.
Stamps can overlap with each other.
Stamps are not allowed to be rotated.
Stamps must stay completely inside the grid.

Return true if it is possible to fit the stamps while following the given restrictions and requirements. Otherwise, return false.

Example 1:


Input: grid = [[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0],[1,0,0,0]], stampHeight = 4, stampWidth = 3
Output: true
Explanation: We have two overlapping stamps (labeled 1 and 2 in the image) that are able to cover all the empty cells.

Example 2:


Input: grid = [[1,0,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]], stampHeight = 2, stampWidth = 2
Output: false
Explanation: There is no way to fit the stamps onto all the empty cells without the stamps going outside the grid.


Constraints:

m == grid.length
n == grid[r].length
1 <= m, n <= 105
1 <= m * n <= 2 * 105
grid[r][c] is either 0 or 1.
1 <= stampHeight, stampWidth <= 105


```

## 翻译

给定 m×n 的 0/1 矩阵和邮票尺寸 stampHeight × stampWidth。邮票只能放在全空区域，可重叠，不能覆盖占用格，不能旋转。判断是否能用邮票覆盖所有空格。

## 解题思路

2D 前缀和 + 2D 差分数组。先对 grid 求前缀和，用 O(1) 判断每个邮票位置是否全空。对合法位置用差分数组标记覆盖。最后对差分数组求前缀和得到每格覆盖次数，检查所有空格覆盖 > 0。O(mn)。

## Solution

[SourceCode](./solution.js)
