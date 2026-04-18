# [1514] Path with Maximum Probability

## Description

[LeetCode Problem Description](https://leetcode.com/problems/path-with-maximum-probability/description/)

* algorithms
* Medium (65.51%)
* Likes:    3892
* Dislikes: 110
* Testcase Example:  '3\n[[0,1],[1,2],[0,2]]\n[0.5,0.5,0.2]\n0\n2'

```md
You are given an undirected weighted graph ofnnodes (0-indexed), represented by an edge list whereedges[i] = [a, b]is an undirected edge connecting the nodesaandbwith a probability of success of traversing that edgesuccProb[i].
Given two nodesstartandend, find the path with the maximum probability of success to go fromstarttoendand return its success probability.
If there is no path fromstarttoend, return0. Your answer will be accepted if it differs from the correct answer by at most 1e-5.

Example 1:


Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.2], start = 0, end = 2
Output: 0.25000
Explanation:There are two paths from start to end, one having a probability of success = 0.2 and the other has 0.5 * 0.5 = 0.25.

Example 2:


Input: n = 3, edges = [[0,1],[1,2],[0,2]], succProb = [0.5,0.5,0.3], start = 0, end = 2
Output: 0.30000

Example 3:


Input: n = 3, edges = [[0,1]], succProb = [0.5], start = 0, end = 2
Output: 0.00000
Explanation:There is no path between 0 and 2.


Constraints:

2 <= n <= 10^4
0 <= start, end < n
start != end
0 <= a, b < n
a != b
0 <= succProb.length == edges.length <= 2*10^4
0 <= succProb[i] <= 1
There is at most one edge between every two nodes.


```

## 翻译

无向加权图，边有成功概率。求 start 到 end 的最大概率路径。路径概率为各边概率之积。

## 解题思路

变体 Dijkstra：建邻接表，用最大堆（或优先队列）维护从 start 出发的最大概率。每次取出概率最大的节点松弛邻居。由于概率相乘只会越来越小，贪心策略正确。

## Solution

[SourceCode](./solution.js)
