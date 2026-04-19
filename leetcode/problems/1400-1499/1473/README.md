# [1473] Paint House III

## Description

[LeetCode Problem Description](https://leetcode.com/problems/paint-house-iii/description/)

* algorithms
* Hard (61.20%)
* Likes:    2135
* Dislikes: 156
* Testcase Example:  '[0,0,0,0,0]\n[[1,10],[10,1],[10,1],[1,10],[5,1]]\n5\n2\n3'

```md
There is a row of m houses in a small city, each house must be painted with one of the n colors (labeled from 1 to n), some houses that have been painted last summer should not be painted again.
A neighborhood is a maximal group of continuous houses that are painted with the same color.

For example: houses = [1,2,2,3,3,2,1,1] contains 5 neighborhoods [{1}, {2,2}, {3,3}, {2}, {1,1}].

Given an array houses, an m x n matrix cost and an integer target where:

houses[i]: is the color of the house i, and 0 if the house is not painted yet.
cost[i][j]: is the cost of paint the house i with the color j + 1.

Return the minimum cost of painting all the remaining houses in such a way that there are exactly target neighborhoods. If it is not possible, return -1.

Example 1:

Input: houses = [0,0,0,0,0], cost = [[1,10],[10,1],[10,1],[1,10],[5,1]], m = 5, n = 2, target = 3
Output: 9
Explanation: Paint houses of this way [1,2,2,1,1]
This array contains target = 3 neighborhoods, [{1}, {2,2}, {1,1}].
Cost of paint all houses (1 + 1 + 1 + 1 + 5) = 9.

Example 2:

Input: houses = [0,2,1,2,0], cost = [[1,10],[10,1],[10,1],[1,10],[5,1]], m = 5, n = 2, target = 3
Output: 11
Explanation: Some houses are already painted, Paint the houses of this way [2,2,1,2,2]
This array contains target = 3 neighborhoods, [{2,2}, {1}, {2,2}].
Cost of paint the first and last house (10 + 1) = 11.

Example 3:

Input: houses = [3,1,2,3], cost = [[1,1,1],[1,1,1],[1,1,1],[1,1,1]], m = 4, n = 3, target = 3
Output: -1
Explanation: Houses are already painted with a total of 4 neighborhoods [{3},{1},{2},{3}] different of target = 3.


Constraints:

m == houses.length == cost.length
n == cost[i].length
1 <= m <= 100
1 <= n <= 20
1 <= target <= m
0 <= houses[i] <= n
1 <= cost[i][j] <= 104


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

一排 m 栋房子，每栋必须涂 n 种颜色之一。部分房子已涂色不可更改。neighborhood 是连续同色房子的最大组。给定 houses 数组（0 表示未涂色）、cost 矩阵（cost[i][j] 表示第 i 栋房子涂第 j+1 种颜色的花费）和 target（目标 neighborhood 数）。求使恰好有 target 个 neighborhood 的最小涂色花费，不可能则返回 -1。

## 解题思路

DP。状态 dp[j][k] 表示当前房子涂颜色 j 时，前 i 栋房子恰好有 k 个 neighborhood 的最小花费。转移：若与前一个颜色相同则 k 不变，否则 k+1。优化：对每个 k 维护前一行的最小值和次小值，使转移从 O(n^2) 降到 O(n)。
