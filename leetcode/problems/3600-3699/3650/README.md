# [3650] Minimum Cost Path with Edge Reversals

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-cost-path-with-edge-reversals/description/)

* algorithms
* Medium (61.83%)
* Likes:    461
* Dislikes: 24
* Testcase Example:  '4\n[[0,1,3],[3,1,1],[2,3,4],[0,2,2]]'

```md
You are given a directed, weighted graph with n nodes labeled from 0 to n - 1, and an array edges where edges[i] = [ui, vi, wi] represents a directed edge from node ui to node vi with cost wi.
Each node ui has a switch that can be used at most once: when you arrive at ui and have not yet used its switch, you may activate it on one of its incoming edges vi &rarr; ui reverse that edge to ui &rarr; vi and immediately traverse it.
The reversal is only valid for that single move, and using a reversed edge costs 2 * wi.
Return the minimum total cost to travel from node 0 to node n - 1. If it is not possible, return -1.

Example 1:

Input: n = 4, edges = [[0,1,3],[3,1,1],[2,3,4],[0,2,2]]
Output: 5
Explanation:


Use the path 0 &rarr; 1 (cost 3).
At node 1 reverse the original edge 3 &rarr; 1 into 1 &rarr; 3 and traverse it at cost 2 * 1 = 2.
Total cost is 3 + 2 = 5.


Example 2:

Input: n = 4, edges = [[0,2,1],[2,1,1],[1,3,1],[2,3,3]]
Output: 3
Explanation:

No reversal is needed. Take the path 0 &rarr; 2 (cost 1), then 2 &rarr; 1 (cost 1), then 1 &rarr; 3 (cost 1).
Total cost is 1 + 1 + 1 = 3.



Constraints:

2 <= n <= 5 * 104
1 <= edges.length <= 105
edges[i] = [ui, vi, wi]
0 <= ui, vi <= n - 1
1 <= wi <= 1000


```

## 题目翻译

给定 n 个节点的有向带权图。每个节点有一个开关（最多用一次）：到达节点 ui 时，可选择一条入边 vi→ui 反转为 ui→vi 并立即走过去，费用为 2*wi。求从节点 0 到 n-1 的最小费用。

## 解题思路

Dijkstra。对每个节点，除了正常出边外，还添加"反转边"：如果存在边 v→u 权重 w，则添加 u→v 权重 2*w。由于最短路径中每个节点只经过一次，每个节点的开关自然只使用一次。

时间复杂度 O((n + m) log(n + m))

## Solution

[SourceCode](./solution.js)
