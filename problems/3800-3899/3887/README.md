# [3887] Incremental Even-Weighted Cycle Queries

## Description

[LeetCode Problem Description](https://leetcode.com/problems/incremental-even-weighted-cycle-queries/description/)

* algorithms
* Hard (51.51%)
* Likes:    71
* Dislikes: 4
* Testcase Example:  '3\n[[0,1,1],[1,2,1],[0,2,1]]'

```md
You are given a positive integer n.
There is an undirected graph with n nodes labeled from 0 to n - 1. Initially, the graph has no edges.
You are also given a 2D integer array edges, where edges[i] = [ui, vi, wi] represents an edge between nodes ui and vi with weight wi. The weight wi is either 0 or 1.
Process the edges in edges in the given order. For each edge, add it to the graph only if, after adding it, the sum of the weights of the edges in every cycle in the resulting graph is even.
Return an integer denoting the number of edges that are successfully added to the graph.

Example 1:

Input: n = 3, edges = [[0,1,1],[1,2,1],[0,2,1]]
Output: 2
Explanation:


[0, 1, 1]: We add the edge between vertex 0 and vertex 1 with weight 1.
[1, 2, 1]: We add the edge between vertex 1 and vertex 2 with weight 1.
[0, 2, 1]: The edge between vertex 0 and vertex 2 (the dashed edge in the diagram) is not added because the cycle 0 - 1 - 2 - 0 has total edge weight 1 + 1 + 1 = 3, which is an odd number.


Example 2:

Input: n = 3, edges = [[0,1,1],[1,2,1],[0,2,0]]
Output: 3
Explanation:


[0, 1, 1]: We add the edge between vertex 0 and vertex 1 with weight 1.
[1, 2, 1]: We add the edge between vertex 1 and vertex 2 with weight 1.
[0, 2, 0]: We add the edge between vertex 0 and vertex 2 with weight 0.
Note that the cycle 0 - 1 - 2 - 0 has total edge weight 1 + 1 + 0 = 2, which is an even number.



Constraints:

3 <= n <= 5 * 104
1 <= edges.length <= 5 * 104
edges[i] = [ui, vi, wi]
0 <= ui < vi < n
All edges are distinct.
wi = 0 or wi = 1


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定 n 个节点和一组无向边（权重0或1），按顺序处理每条边。只有当加入后图中所有环的权重和为偶数时，才将该边加入。返回成功加入的边数。

## 解题思路

带权（奇偶性）并查集。每个节点维护到父节点的奇偶性。图中所有环权重为偶数等价于：任意两点间所有路径的权重奇偶性一致。加入边 (u,v,w) 时：
- 若 u,v 不连通：直接合并，设置合并奇偶性。
- 若 u,v 已连通：检查现有路径奇偶性与 w 是否一致（pu XOR pv == w），一致则环为偶数可加入。
