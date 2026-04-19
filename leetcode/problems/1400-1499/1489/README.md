# [1489] Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/description/)

* algorithms
* Hard (66.41%)
* Likes:    2013
* Dislikes: 172
* Testcase Example:  '5\n[[0,1,1],[1,2,1],[2,3,2],[0,3,2],[0,4,3],[3,4,3],[1,4,6]]'

```md
Given a weighted undirected connected graph with nvertices numbered from 0 to n - 1,and an array edgeswhere edges[i] = [ai, bi, weighti] represents a bidirectional and weighted edge between nodesaiand bi. A minimum spanning tree (MST) is a subset of the graph&#39;s edges that connects all vertices without cyclesand with the minimum possible total edge weight.
Find all the critical and pseudo-critical edges in the given graph&#39;s minimum spanning tree (MST). An MST edge whose deletion from the graph would cause the MST weight to increase is called acritical edge. Onthe other hand, a pseudo-critical edge is that which can appear in some MSTs but not all.
Note that you can return the indices of the edges in any order.

Example 1:


Input: n = 5, edges = [[0,1,1],[1,2,1],[2,3,2],[0,3,2],[0,4,3],[3,4,3],[1,4,6]]
Output: [[0,1],[2,3,4,5]]
Explanation: The figure above describes the graph.
The following figure shows all the possible MSTs:

Notice that the two edges 0 and 1 appear in all MSTs, therefore they are critical edges, so we return them in the first list of the output.
The edges 2, 3, 4, and 5 are only part of some MSTs, therefore they are considered pseudo-critical edges. We add them to the second list of the output.

Example 2:


Input: n = 4, edges = [[0,1,1],[1,2,1],[2,3,1],[0,3,1]]
Output: [[],[0,1,2,3]]
Explanation: We can observe that since all 4 edges have equal weight, choosing any 3 edges from the given 4 will yield an MST. Therefore all 4 edges are pseudo-critical.


Constraints:

2 <= n <= 100
1 <= edges.length <= min(200, n * (n - 1) / 2)
edges[i].length == 3
0 <= ai < bi < n
1 <= weighti<= 1000
All pairs (ai, bi) are distinct.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定 n 个节点的加权无向连通图和边集，找到所有关键边和伪关键边。关键边是所有 MST 中都出现的边（删除后 MST 权重增加）。伪关键边是出现在某些 MST 但非所有 MST 中的边。

## 解题思路

先用 Kruskal 计算标准 MST 权重。对每条边：排除它算 MST 权重，若变大则为关键边；强制包含它算 MST 权重，若等于原始 MST 权重且非关键则为伪关键边。
