# [3372] Maximize the Number of Target Nodes After Connecting Trees I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/description/)

* algorithms
* Medium (69.46%)
* Likes:    447
* Dislikes: 267
* Testcase Example:  '[[0,1],[0,2],[2,3],[2,4]]\n[[0,1],[0,2],[0,3],[2,7],[1,4],[4,5],[4,6]]\n2'

```md
There exist two undirected trees with n and m nodes, with distinct labels in ranges [0, n - 1] and [0, m - 1], respectively.
You are given two 2D integer arrays edges1 and edges2 of lengths n - 1 and m - 1, respectively, where edges1[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the first tree and edges2[i] = [ui, vi] indicates that there is an edge between nodes ui and vi in the second tree. You are also given an integer k.
Node u is target to node v if the number of edges on the path from u to v is less than or equal to k. Note that a node is always target to itself.
Return an array of n integers answer, where answer[i] is the maximum possible number of nodes target to node i of the first tree if you have to connect one node from the first tree to another node in the second tree.
Note that queries are independent from each other. That is, for every query you will remove the added edge before proceeding to the next query.

Example 1:

Input: edges1 = [[0,1],[0,2],[2,3],[2,4]], edges2 = [[0,1],[0,2],[0,3],[2,7],[1,4],[4,5],[4,6]], k = 2
Output: [9,7,9,8,8]
Explanation:

For i = 0, connect node 0 from the first tree to node 0 from the second tree.
For i = 1, connect node 1 from the first tree to node 0 from the second tree.
For i = 2, connect node 2 from the first tree to node 4 from the second tree.
For i = 3, connect node 3 from the first tree to node 4 from the second tree.
For i = 4, connect node 4 from the first tree to node 4 from the second tree.


Example 2:

Input: edges1 = [[0,1],[0,2],[0,3],[0,4]], edges2 = [[0,1],[1,2],[2,3]], k = 1
Output: [6,3,3,3,3]
Explanation:
For every i, connect node i of the first tree with any node of the second tree.


Constraints:

2 <= n, m <= 1000
edges1.length == n - 1
edges2.length == m - 1
edges1[i].length == edges2[i].length == 2
edges1[i] = [ai, bi]
0 <= ai, bi < n
edges2[i] = [ui, vi]
0 <= ui, vi < m
The input is generated such that edges1 and edges2 represent valid trees.
0 <= k <= 1000


```

## 翻译

给定两棵无向树（n 和 m 个节点）和整数 k。节点 u 到节点 v 的距离（边数）<= k 则 v 是 u 的 target。对树1中每个节点 i，连接树1某节点到树2某节点后，求节点 i 最多能有多少个 target 节点。每个查询独立。

## Approach

对每个节点 i，answer[i] = 树1中距离 i <= k 的节点数 + max(树2中距离某节点 <= k-1 的节点数)。

连接时，i 到树2连接点的距离为 1，所以树2中距离连接点 <= k-1 的节点对 i 来说是 target。

1. 对树1每个节点，BFS 统计距离 <= k 的节点数 count1[i]
2. 对树2每个节点，BFS 统计距离 <= k-1 的节点数，取最大值 maxCount2
3. answer[i] = count1[i] + maxCount2

时间复杂度 O(n² + m²)，空间复杂度 O(n + m)。

## Solution

[SourceCode](./solution.js)
