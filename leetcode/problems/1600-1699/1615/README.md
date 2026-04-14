# [1615] Maximal Network Rank

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximal-network-rank/description/)

* algorithms
* Medium (65.93%)
* Likes:    2451
* Dislikes: 394
* Testcase Example:  '4\n[[0,1],[0,3],[1,2],[1,3]]'

```md
There is an infrastructure of n cities with some number of roads connecting these cities. Each roads[i] = [ai, bi] indicates that there is a bidirectional road between cities ai and bi.
The network rank of two different cities is defined as the total number ofdirectly connected roads to either city. If a road is directly connected to both cities, it is only counted once.
The maximal network rank of the infrastructure is the maximum network rank of all pairs of different cities.
Given the integer n and the array roads, return the maximal network rank of the entire infrastructure.

Example 1:


Input: n = 4, roads = [[0,1],[0,3],[1,2],[1,3]]
Output: 4
Explanation: The network rank of cities 0 and 1 is 4 as there are 4 roads that are connected to either 0 or 1. The road between 0 and 1 is only counted once.

Example 2:


Input: n = 5, roads = [[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]
Output: 5
Explanation: There are 5 roads that are connected to cities 1 or 2.

Example 3:

Input: n = 8, roads = [[0,1],[1,2],[2,3],[2,4],[5,6],[5,7]]
Output: 5
Explanation: The network rank of 2 and 5 is 5. Notice that all the cities do not have to be connected.


Constraints:

2 <= n <= 100
0 <= roads.length <= n * (n - 1) / 2
roads[i].length == 2
0 <= ai, bi<= n-1
ai!=bi
Eachpair of cities has at most one road connecting them.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

n 个城市，roads 表示双向道路。两个不同城市的网络秩 = 与两个城市直接相连的道路总数（共用道路只算一次）。返回最大网络秩。

## 解题思路

统计每个城市的度数，用 Set 记录所有道路。枚举所有城市对 (i, j)，rank = degree[i] + degree[j] - (i,j 相连 ? 1 : 0)。

n ≤ 100，O(n^2) 枚举即可。
