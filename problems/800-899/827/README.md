# [827] Making A Large Island

## Description

[LeetCode Problem Description](https://leetcode.com/problems/making-a-large-island/description/)

* algorithms
* Hard (57.15%)
* Likes:    5148
* Dislikes: 101
* Testcase Example:  '[[1,0],[0,1]]'

```md
You are given an n x n binary matrix grid. You are allowed to change at most one 0 to be 1.
Return the size of the largest island in grid after applying this operation.
An island is a 4-directionally connected group of 1s.

Example 1:

Input: grid = [[1,0],[0,1]]
Output: 3
Explanation: Change one 0 to 1 and connect two 1s, then we get an island with area = 3.

Example 2:

Input: grid = [[1,1],[1,0]]
Output: 4
Explanation: Change the 0 to 1 and make the island bigger, only one island with area = 4.
Example 3:

Input: grid = [[1,1],[1,1]]
Output: 4
Explanation: Can&#39;t change any 0 to 1, only one island with area = 4.


Constraints:

n == grid.length
n == grid[i].length
1 <= n <= 500
grid[i][j] is either 0 or 1.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

n×n 01 矩阵，至多把一个 0 改成 1，返回最大岛屿（四连通 1 的区域）大小。

示例 1：`[[1,0],[0,1]]` → `3`；示例 2：`[[1,1],[1,0]]` → `4`

## 解题思路

经典：先给每个岛屿编号并记录大小；再枚举每个 0 格，把四邻的**不同**岛屿大小去重求和 +1，取最大。注意全 1 / 全 0 边界。O(n²)。