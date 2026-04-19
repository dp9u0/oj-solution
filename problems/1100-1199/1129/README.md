# [1129] Shortest Path with Alternating Colors

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shortest-path-with-alternating-colors/description/)

* algorithms
* Medium (47.86%)
* Likes:    3708
* Dislikes: 206
* Testcase Example:  '3\n[[0,1],[1,2]]\n[]'

```md
You are given an integer n, the number of nodes in a directed graph where the nodes are labeled from 0 to n - 1. Each edge is red or blue in this graph, and there could be self-edges and parallel edges.
You are given two arrays redEdges and blueEdges where:

redEdges[i] = [ai, bi] indicates that there is a directed red edge from node ai to node bi in the graph, and
blueEdges[j] = [uj, vj] indicates that there is a directed blue edge from node uj to node vj in the graph.

Return an array answer of length n, where each answer[x] is the length of the shortest path from node 0 to node x such that the edge colors alternate along the path, or -1 if such a path does not exist.

Example 1:

Input: n = 3, redEdges = [[0,1],[1,2]], blueEdges = []
Output: [0,1,-1]

Example 2:

Input: n = 3, redEdges = [[0,1]], blueEdges = [[2,1]]
Output: [0,1,-1]


Constraints:

1 <= n <= 100
0 <= redEdges.length,blueEdges.length <= 400
redEdges[i].length == blueEdges[j].length == 2
0 <= ai, bi, uj, vj < n


```

## 中文翻译

有向图中边有红蓝两种颜色。求从节点 0 到每个节点的最短交替颜色路径长度（相邻边颜色不同）。不存在则返回 -1。

## 解题思路

**BFS**：状态为 (节点, 上一步边颜色)。从节点 0 出发，分别以红色和蓝色为初始颜色进行 BFS。visited 记录 (节点, 颜色) 避免重复访问。

时间复杂度：O(n + redEdges + blueEdges)

## Solution

[SourceCode](./solution.js)
