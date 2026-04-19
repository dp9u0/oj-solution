# [3276] Select Cells in Grid With Maximum Score

## Description

[LeetCode Problem Description](https://leetcode.com/problems/select-cells-in-grid-with-maximum-score/description/)

* algorithms
* Hard (15.72%)
* Likes:    229
* Dislikes: 6
* Testcase Example:  '[[1,2,3],[4,3,2],[1,1,1]]'

```md
You are given a 2D matrix grid consisting of positive integers.
You have to select one or more cells from the matrix such that the following conditions are satisfied:

No two selected cells are in the same row of the matrix.
The values in the set of selected cells are unique.

Your score will be the sum of the values of the selected cells.
Return the maximum score you can achieve.

Example 1:

Input: grid = [[1,2,3],[4,3,2],[1,1,1]]
Output: 8
Explanation:

We can select the cells with values 1, 3, and 4 that are colored above.

Example 2:

Input: grid = [[8,7,6],[8,3,2]]
Output: 15
Explanation:

We can select the cells with values 7 and 8 that are colored above.


Constraints:

1 <= grid.length, grid[i].length <= 10
1 <= grid[i][j] <= 100


```

## 中文翻译

给定正整数矩阵 grid，选一个或多个格子满足：同行不多选、所选值互不相同。求最大和。

约束：grid 大小 <= 10x10，值 <= 100

## 解题思路

**Bitmask DP（按值从大到小处理）**

1. 行数 m <= 10，用 bitmask 表示已分配的行。
2. 按值从大到小处理，对每个值 v，可将其分配给任一含 v 且未分配的行。
3. dp[mask] = 已分配行集合为 mask 时的最大和。
4. 对每个值，更新 dp：新 dp'[mask|1<<i] = max(dp'[...], dp[mask] + v)。
5. 用副本数组避免同值重复分配。时间 O(V * 2^m * m)。

## Solution

[SourceCode](./solution.js)
