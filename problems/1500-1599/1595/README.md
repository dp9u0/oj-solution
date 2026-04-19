# [1595] Minimum Cost to Connect Two Groups of Points

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-cost-to-connect-two-groups-of-points/description/)

* algorithms
* Hard (49.85%)
* Likes:    497
* Dislikes: 16
* Testcase Example:  '[[15,96],[36,2]]'

```md
You are given two groups of points where the first group has size1 points, the second group has size2 points, and size1 >= size2.
The cost of the connection between any two points are given in an size1 x size2 matrix where cost[i][j] is the cost of connecting point i of the first group and point j of the second group. The groups are connected if each point in both groups is connected to one or more points in the opposite group. In other words, each point in the first group must be connected to at least one point in the second group, and each point in the second group must be connected to at least one point in the first group.
Return the minimum cost it takes to connect the two groups.

Example 1:


Input: cost = [[15, 96], [36, 2]]
Output: 17
Explanation: The optimal way of connecting the groups is:
1--A
2--B
This results in a total cost of 17.

Example 2:


Input: cost = [[1, 3, 5], [4, 1, 1], [1, 5, 3]]
Output: 4
Explanation: The optimal way of connecting the groups is:
1--A
2--B
2--C
3--A
This results in a total cost of 4.
Note that there are multiple points connected to point 2 in the first group and point A in the second group. This does not matter as there is no limit to the number of points that can be connected. We only care about the minimum total cost.

Example 3:

Input: cost = [[2, 5, 1], [3, 4, 7], [8, 1, 2], [6, 2, 4], [3, 8, 8]]
Output: 10


Constraints:

size1 == cost.length
size2 == cost[i].length
1 <= size1, size2 <= 12
size1 >= size2
0 <= cost[i][j] <= 100


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定两组点，大小分别为 size1 和 size2（size1 >= size2），以及连接代价矩阵 cost[i][j]。两组点连通要求：第一组每个点至少连接第二组一个点，第二组每个点至少连接第一组一个点。求最小总代价。

## 解题思路

 bitmask DP。对第二组点的连通状态用 mask 表示。逐个处理第一组的点，每个点选择连接第二组中的某个点 j，更新 dp[mask | (1<<j)]。处理完所有第一组点后，对未被覆盖的第二组点 j，补充 minCost[j]（从第一组任意点连接 j 的最小代价）。复杂度 O(size1 * 2^size2 * size2)。
