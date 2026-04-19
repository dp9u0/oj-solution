# [2245] Maximum Trailing Zeros in a Cornered Path

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path/description/)

* algorithms
* Medium (37.48%)
* Likes:    204
* Dislikes: 407
* Testcase Example:  '[[23,17,15,3,20],[8,1,20,27,11],[9,4,6,2,21],[40,9,1,10,6],[22,7,4,5,3]]'

```md
You are given a 2D integer array grid of size m x n, where each cell contains a positive integer.
A cornered path is defined as a set of adjacent cells with at most one turn. More specifically, the path should exclusively move either horizontally or vertically up to the turn (if there is one), without returning to a previously visited cell. After the turn, the path will then move exclusively in the alternate direction: move vertically if it moved horizontally, and vice versa, also without returning to a previously visited cell.
The product of a path is defined as the product of all the values in the path.
Return the maximum number of trailing zeros in the product of a cornered path found in grid.
Note:

Horizontal movement means moving in either the left or right direction.
Vertical movement means moving in either the up or down direction.


Example 1:


Input: grid = [[23,17,15,3,20],[8,1,20,27,11],[9,4,6,2,21],[40,9,1,10,6],[22,7,4,5,3]]
Output: 3
Explanation: The grid on the left shows a valid cornered path.
It has a product of 15 * 20 * 6 * 1 * 10 = 18000 which has 3 trailing zeros.
It can be shown that this is the maximum trailing zeros in the product of a cornered path.
The grid in the middle is not a cornered path as it has more than one turn.
The grid on the right is not a cornered path as it requires a return to a previously visited cell.

Example 2:


Input: grid = [[4,3,2],[7,6,1],[8,8,8]]
Output: 0
Explanation: The grid is shown in the figure above.
There are no cornered paths in the grid that result in a product with a trailing zero.


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 105
1 <= m * n <= 105
1 <= grid[i][j] <= 1000


```

## 翻译

给定m×n正整数矩阵grid。cornered path是至多拐一次弯的路径（先水平后垂直，或先垂直后水平）。求所有cornered path乘积中末尾零最多的数量。

## 解题思路

末尾零个数=min(因子2的个数, 因子5的个数)。对每个格子预处理因子2和因子5的个数，以及四个方向的前缀和。枚举拐点(i,j)，组合水平方向(左+右)和垂直方向(上+下)的前缀和（注意拐点不重复计算），取min(总2, 总5)的最大值。

## Solution

[SourceCode](./solution.js)
