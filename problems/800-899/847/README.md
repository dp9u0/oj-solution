# [847] Shortest Path Visiting All Nodes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shortest-path-visiting-all-nodes/description/)

* algorithms
* Hard (65.86%)
* Likes:    4637
* Dislikes: 182
* Testcase Example:  '[[1,2,3],[0],[0],[0]]'

```md
You have an undirected, connected graph of n nodes labeled from 0 to n - 1. You are given an array graph where graph[i] is a list of all the nodes connected with node i by an edge.
Return the length of the shortest path that visits every node. You may start and stop at any node, you may revisit nodes multiple times, and you may reuse edges.

Example 1:


Input: graph = [[1,2,3],[0],[0],[0]]
Output: 4
Explanation: One possible path is [1,0,2,0,3]

Example 2:


Input: graph = [[1],[0,2,4],[1,3,4],[2],[1,2]]
Output: 4
Explanation: One possible path is [0,1,4,2,3]


Constraints:

n == graph.length
1 <= n <= 12
0 <= graph[i].length <n
graph[i] does not contain i.
If graph[a] contains b, then graph[b] contains a.
The input graph is always connected.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

无向连通图 n 个节点（n ≤ 12），求访问所有节点的最短路径长度。可从任意节点出发，可重复访问节点和边。

## 解题思路

多源 BFS + 位掩码。状态 (当前节点, 已访问掩码)，n ≤ 12 所以掩码最多 2^12 = 4096。从所有节点同时出发 BFS，当掩码变为全 1 时返回步数。
