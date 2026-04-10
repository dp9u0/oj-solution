# [1976] Number of Ways to Arrive at Destination

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/description/)

* algorithms
* Medium (37.41%)
* Likes:    3890
* Dislikes: 225
* Testcase Example:  '7\n' +

```md
'[[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]'
You are in a city that consists of n intersections numbered from 0 to n - 1 with bi-directional roads between some intersections. The inputs are generated such that you can reach any intersection from any other intersection and that there is at most one road between any two intersections.
You are given an integer n and a 2D integer array roads where roads[i] = [ui, vi, timei] means that there is a road between intersections ui and vi that takes timei minutes to travel. You want to know in how many ways you can travel from intersection 0 to intersection n - 1 in the shortest amount of time.
Return the number of ways you can arrive at your destination in the shortest amount of time. Since the answer may be large, return it modulo 109 + 7.

Example 1:


Input: n = 7, roads = [[0,6,7],[0,1,2],[1,2,3],[1,3,3],[6,3,3],[3,5,1],[6,5,1],[2,5,1],[0,4,5],[4,6,2]]
Output: 4
Explanation: The shortest amount of time it takes to go from intersection 0 to intersection 6 is 7 minutes.
The four ways to get there in 7 minutes are:
- 0 ➝ 6
- 0 ➝ 4 ➝ 6
- 0 ➝ 1 ➝ 2 ➝ 5 ➝ 6
- 0 ➝ 1 ➝ 3 ➝ 5 ➝ 6

Example 2:

Input: n = 2, roads = [[1,0,10]]
Output: 1
Explanation: There is only one way to go from intersection 0 to intersection 1, and it takes 10 minutes.


Constraints:

1 <= n <= 200
n - 1 <= roads.length <= n * (n - 1) / 2
roads[i].length == 3
0 <= ui, vi <= n - 1
1 <= timei <= 109
ui != vi
There is at most one road connecting any two intersections.
You can reach any intersection from any other intersection.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 n 个节点和双向道路 roads（含时间），求从节点 0 到节点 n-1 的最短路径条数，对 10^9+7 取模。

## 解题思路

**Approach: Dijkstra + 计数 DP**

1. 用 Dijkstra 求从 0 到所有节点的最短距离 dist[]
2. 同时维护 ways[] 数组：ways[v] 表示到 v 的最短路径条数
3. 松弛时：若 dist[v] > dist[u] + w，更新 dist 和 ways；若相等，ways[v] += ways[u]
4. 返回 ways[n-1] % MOD
5. 复杂度 O((n+m) log n)
