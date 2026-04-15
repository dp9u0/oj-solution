# [3122] Minimum Number of Operations to Satisfy Conditions

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions/description/)

* algorithms
* Medium (41.81%)
* Likes:    286
* Dislikes: 13
* Testcase Example:  '[[1,0,2],[1,0,2]]'

```md
You are given a 2D matrix grid of size m x n. In one operation, you can change the value of any cell to any non-negative number. You need to perform some operations such that each cell grid[i][j] is:

Equal to the cell below it, i.e. grid[i][j] == grid[i + 1][j] (if it exists).
Different from the cell to its right, i.e. grid[i][j] != grid[i][j + 1] (if it exists).

Return the minimum number of operations needed.

Example 1:

Input: grid = [[1,0,2],[1,0,2]]
Output: 0
Explanation:

All the cells in the matrix already satisfy the properties.

Example 2:

Input: grid = [[1,1,1],[0,0,0]]
Output: 3
Explanation:

The matrix becomes [[1,0,1],[1,0,1]] which satisfies the properties, by doing these 3 operations:

Change grid[1][0] to 1.
Change grid[0][1] to 0.
Change grid[1][2] to 1.


Example 3:

Input: grid = [[1],[2],[3]]
Output: 2
Explanation:

There is a single column. We can change the value to 1 in each cell using 2 operations.


Constraints:

1 <= n, m <= 1000
0 <= grid[i][j] <= 9


```

## 题目翻译

给定 m x n 矩阵，每次操作可将任意单元格改为任意非负整数。要求最终满足：
1. 每个格子等于其下方格子（同列相邻行相等）
2. 每个格子不等于其右边格子（同行相邻列不等）

等价于：同一列所有行值相同，相邻列值不同。对每列选择一个 0-9 的数字，使得相邻列数字不同，最小化修改次数。

## 解题思路

按列 DP。对每列统计每个值(0-9)出现的频率，cost[j][v] = 列j改为值v需要的操作数 = 行数 - freq[v]。

dp[j][v] = 第j列选值v时，前j列的最小总操作数 = cost[j][v] + min(dp[j-1][u]) for u != v。

时间复杂度 O(n * 10 * 10)

## Solution

[SourceCode](./solution.js)
