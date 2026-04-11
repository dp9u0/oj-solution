# [785] Is Graph Bipartite?

## Description

[LeetCode Problem Description](https://leetcode.com/problems/is-graph-bipartite/description/)

* algorithms
* Medium (59.10%)
* Likes:    9235
* Dislikes: 421
* Testcase Example:  '[[1,2,3],[0,2],[0,1,3],[0,2]]'

```md
There is an undirected graph with n nodes, where each node is numbered between 0 and n - 1. You are given a 2D array graph, where graph[u] is an array of nodes that node u is adjacent to. More formally, for each v in graph[u], there is an undirected edge between node u and node v. The graph has the following properties:

There are no self-edges (graph[u] does not contain u).
There are no parallel edges (graph[u] does not contain duplicate values).
If v is in graph[u], then u is in graph[v] (the graph is undirected).
The graph may not be connected, meaning there may be two nodes u and v such that there is no path between them.

A graph is bipartite if the nodes can be partitioned into two independent sets A and B such that every edge in the graph connects a node in set A and a node in set B.
Return true if and only if it is bipartite.

Example 1:


Input: graph = [[1,2,3],[0,2],[0,1,3],[0,2]]
Output: false
Explanation: There is no way to partition the nodes into two independent sets such that every edge connects a node in one and a node in the other.
Example 2:


Input: graph = [[1,3],[0,2],[1,3],[0,2]]
Output: true
Explanation: We can partition the nodes into two sets: {0, 2} and {1, 3}.

Constraints:

graph.length == n
1 <= n <= 100
0 <= graph[u].length < n
0 <= graph[u][i] <= n - 1
graph[u]does not containu.
All the values of graph[u] are unique.
If graph[u] contains v, then graph[v] contains u.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定无向图的邻接表 graph，判断该图是否为二分图。二分图指节点可以分成两个独立集合 A 和 B，使得每条边连接的两个节点分属不同集合。图可能不连通。

## Approach

BFS 染色法。用 color 数组标记每个节点的颜色（0=未染色，1/-1=两种颜色）。对每个未染色的节点进行 BFS，将相邻节点染成相反颜色。如果发现相邻节点颜色相同，说明不是二分图。

时间复杂度 O(V+E)，空间复杂度 O(V)。
