# [2858] Minimum Edge Reversals So Every Node Is Reachable

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-edge-reversals-so-every-node-is-reachable/description/)

* algorithms
* Hard (58.86%)
* Likes:    432
* Dislikes: 12
* Testcase Example:  '4\n[[2,0],[2,1],[1,3]]'

```md
There is a simple directed graph with n nodes labeled from 0 to n - 1. The graph would form a tree if its edges were bi-directional.
You are given an integer n and a 2D integer array edges, where edges[i] = [ui, vi] represents a directed edge going from node ui to node vi.
An edge reversal changes the direction of an edge, i.e., a directed edge going from node ui to node vi becomes a directed edge going from node vi to node ui.
For every node i in the range [0, n - 1], your task is to independently calculate the minimum number of edge reversals required so it is possible to reach any other node starting from node i through a sequence of directed edges.
Return an integer array answer, where answer[i] is the  minimum number of edge reversals required so it is possible to reach any other node starting from node i through a sequence of directed edges.

Example 1:


Input: n = 4, edges = [[2,0],[2,1],[1,3]]
Output: [1,1,0,2]
Explanation: The image above shows the graph formed by the edges.
For node 0: after reversing the edge [2,0], it is possible to reach any other node starting from node 0.
So, answer[0] = 1.
For node 1: after reversing the edge [2,1], it is possible to reach any other node starting from node 1.
So, answer[1] = 1.
For node 2: it is already possible to reach any other node starting from node 2.
So, answer[2] = 0.
For node 3: after reversing the edges [1,3] and [2,1], it is possible to reach any other node starting from node 3.
So, answer[3] = 2.

Example 2:


Input: n = 3, edges = [[1,2],[2,0]]
Output: [2,0,1]
Explanation: The image above shows the graph formed by the edges.
For node 0: after reversing the edges [2,0] and [1,2], it is possible to reach any other node starting from node 0.
So, answer[0] = 2.
For node 1: it is already possible to reach any other node starting from node 1.
So, answer[1] = 0.
For node 2: after reversing the edge [1, 2], it is possible to reach any other node starting from node 2.
So, answer[2] = 1.


Constraints:

2 <= n <= 105
edges.length == n - 1
edges[i].length == 2
0 <= ui == edges[i][0] < n
0 <= vi == edges[i][1] < n
ui != vi
The input is generated suchthat if the edges were bi-directional, the graph would be a tree.


```

## 中文翻译

给定一个有向树（边双向化后为一棵树），对每个节点 i，计算最少需要反转多少条边，使得从 i 出发可以到达所有其他节点。

## 解题思路

换根 DP（Rerooting）。将有向边视为带权边：沿原方向权为 0，逆方向权为 1。问题转化为对每个节点求其到所有其他节点的边权之和。

1. 先以节点 0 为根 BFS，计算 ans[0]（从 0 到所有其他节点的权值和）。
2. 再按 BFS 顺序换根：当从父节点 u 换到子节点 v 时，ans[v] = ans[u] - w(u→v) + w(v→u) = ans[u] + 1 - 2*w(u→v)。其中 w(u→v) 是从 u 到 v 的边权。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
