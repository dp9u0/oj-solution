# [1928] Minimum Cost to Reach Destination in Time

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-cost-to-reach-destination-in-time/description/)

* algorithms
* Hard (41.31%)
* Likes:    974
* Dislikes: 23
* Testcase Example:  '30\n[[0,1,10],[1,2,10],[2,5,10],[0,3,1],[3,4,10],[4,5,15]]\n[5,1,2,20,20,3]'

```md
There is a country of n cities numbered from 0 to n - 1 where all the cities are connected by bi-directional roads. The roads are represented as a 2D integer array edges where edges[i] = [xi, yi, timei] denotes a road between cities xi and yi that takes timei minutes to travel. There may be multiple roads of differing travel times connecting the same two cities, but no road connects a city to itself.
Each time you pass through a city, you must pay a passing fee. This is represented as a 0-indexed integer array passingFees of length n where passingFees[j] is the amount of dollars you must pay when you pass through city j.
In the beginning, you are at city 0 and want to reach city n - 1 in maxTime minutes or less. The cost of your journey is the summation of passing fees for each city that you passed through at some moment of your journey (including the source and destination cities).
Given maxTime, edges, and passingFees, return the minimum cost to complete your journey, or -1 if you cannot complete it within maxTime minutes.

Example 1:


Input: maxTime = 30, edges = [[0,1,10],[1,2,10],[2,5,10],[0,3,1],[3,4,10],[4,5,15]], passingFees = [5,1,2,20,20,3]
Output: 11
Explanation: The path to take is 0 -> 1 -> 2 -> 5, which takes 30 minutes and has $11 worth of passing fees.

Example 2:


Input: maxTime = 29, edges = [[0,1,10],[1,2,10],[2,5,10],[0,3,1],[3,4,10],[4,5,15]], passingFees = [5,1,2,20,20,3]
Output: 48
Explanation: The path to take is 0 -> 3 -> 4 -> 5, which takes 26 minutes and has $48 worth of passing fees.
You cannot take path 0 -> 1 -> 2 -> 5 since it would take too long.

Example 3:

Input: maxTime = 25, edges = [[0,1,10],[1,2,10],[2,5,10],[0,3,1],[3,4,10],[4,5,15]], passingFees = [5,1,2,20,20,3]
Output: -1
Explanation: There is no way to reach city 5 from city 0 within 25 minutes.


Constraints:

1 <= maxTime <= 1000
n == passingFees.length
2 <= n <= 1000
n - 1 <= edges.length <= 1000
0 <= xi, yi <= n - 1
1 <= timei <= 1000
1 <= passingFees[j] <= 1000
The graph may contain multiple edges between two nodes.
The graph does not contain self loops.


```

## 题目翻译

n 个城市的国家，城市间有双向道路。edges[i] = [xi, yi, timei] 表示城市 xi 和 yi 之间需要 timei 分钟的道路。同一对城市间可能有多条不同耗时的道路。

每次经过一个城市必须支付通行费，passingFees[j] 表示经过城市 j 的费用。从城市 0 出发，要在 maxTime 分钟内到达城市 n-1。旅程费用 = 途中经过的所有城市的通行费之和（含起点和终点）。

返回最小费用，无法到达返回 -1。

## 解题思路

**动态规划（按时间松弛）**

dist[t][v] = 在恰好时间 t 到达城市 v 的最小费用。

转移：对于每条边 (u, v, w)，在时间 t 若 dist[t][u] 已知，则可更新 dist[t+w][v] = min(dist[t+w][v], dist[t][u] + passingFees[v])。

按时间从小到大遍历，每轮处理所有边。最终答案 = min(dist[t][n-1]) for t = 0..maxTime。

复杂度：O(maxTime × E)，空间 O(maxTime × n)。

## Solution

[SourceCode](./solution.js)
