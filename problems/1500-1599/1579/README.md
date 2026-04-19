# [1579] Remove Max Number of Edges to Keep Graph Fully Traversable

## Description

[LeetCode Problem Description](https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/description/)

* algorithms
* Hard (70.19%)
* Likes:    2687
* Dislikes: 46
* Testcase Example:  '4\n[[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]]'

```md
Alice and Bob have an undirected graph of n nodes and three types of edges:

Type 1: Can be traversed by Alice only.
Type 2: Can be traversed by Bob only.
Type 3: Can be traversed by both Alice and Bob.

Given an array edges where edges[i] = [typei, ui, vi] represents a bidirectional edge of type typei between nodes ui and vi, find the maximum number of edges you can remove so that after removing the edges, the graph can still be fully traversed by both Alice and Bob. The graph is fully traversed by Alice and Bob if starting from any node, they can reach all other nodes.
Return the maximum number of edges you can remove, or return -1 if Alice and Bob cannot fully traverse the graph.

Example 1:


Input: n = 4, edges = [[3,1,2],[3,2,3],[1,1,3],[1,2,4],[1,1,2],[2,3,4]]
Output: 2
Explanation: If we remove the 2 edges [1,1,2] and [1,1,3]. The graph will still be fully traversable by Alice and Bob. Removing any additional edge will not make it so. So the maximum number of edges we can remove is 2.

Example 2:


Input: n = 4, edges = [[3,1,2],[3,2,3],[1,1,4],[2,1,4]]
Output: 0
Explanation: Notice that removing any edge will not make the graph fully traversable by Alice and Bob.

Example 3:


Input: n = 4, edges = [[3,2,3],[1,1,2],[2,3,4]]
Output: -1
Explanation: In the current graph, Alice cannot reach node 4 from the other nodes. Likewise, Bob cannot reach 1. Therefore it&#39;s impossible to make the graph fully traversable.


Constraints:

1 <= n <= 105
1 <= edges.length <= min(105, 3 * n * (n - 1) / 2)
edges[i].length == 3
1 <= typei <= 3
1 <= ui < vi <= n
All tuples (typei, ui, vi) are distinct.


```

## 题目翻译

给定 n 个节点和三类边的无向图：类型1仅Alice可走，类型2仅Bob可走，类型3两人都可走。求最多可删除多少条边，使得两人仍能从任意节点到达所有其他节点。若不可能则返回 -1。

## 解题思路

并查集。按类型3优先排序（两人共用边先处理）。用两个并查集分别跟踪 Alice 和 Bob 的连通性。处理类型3边时同时合并两人的并查集，类型1/2分别处理。若合并时发现已连通则该边可删除。最终检查两人各自是否都全连通。

## Solution

[SourceCode](./solution.js)
