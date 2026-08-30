# [2608] Shortest Cycle in a Graph

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shortest-cycle-in-a-graph/description/)

* algorithms
* Hard (40.48%)
* Likes:    658
* Dislikes: 21
* Testcase Example:  '7\n[[0,1],[1,2],[2,0],[3,4],[4,5],[5,6],[6,3]]'

```md
There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1. The edges in the graph are represented by a given 2D integer array edges, where edges[i] = [ui, vi] denotes an edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.
Return the length of the shortest cycle in the graph. If no cycle exists, return -1.
A cycle is a path that starts and ends at the same node, and each edge in the path is used only once.

Example 1:
Input: n = 7, edges = [[0,1],[1,2],[2,0],[3,4],[4,5],[5,6],[6,3]]
Output: 3
Explanation: The cycle with the smallest length is : 0 -> 1 -> 2 -> 0
Example 2:
Input: n = 4, edges = [[0,1],[0,2]]
Output: -1
Explanation: There are no cycles in this graph.

Constraints:
2 <= n <= 1000
1 <= edges.length <= 1000
edges[i].length == 2
0 <= ui, vi < n
ui != vi
There are no repeated edges.
Hint 1: How can BFS be used?
Hint 2: For each vertex u, calculate the length of the shortest cycle that contains vertex u using BFS

```

## Solution

[SourceCode](./solution.js)

## 题目翻译(中文)

存在一个含有 n 个顶点的双向图,顶点编号从 0 到 n - 1。图中的边由给定的二维整数数组 edges 表示,其中 edges[i] = [ui, vi] 表示顶点 ui 和 vi 之间存在一条边。每对顶点之间最多只有一条边,且没有顶点存在自环。

返回图中最短环的长度。如果不存在环,返回 -1。

环是一条起点和终点为同一节点的路径,且路径中的每条边只使用一次。

示例 1:
输入: n = 7, edges = [[0,1],[1,2],[2,0],[3,4],[4,5],[5,6],[6,3]]
输出: 3
解释: 长度最小的环为: 0 -> 1 -> 2 -> 0

示例 2:
输入: n = 4, edges = [[0,1],[0,2]]
输出: -1
解释: 图中不存在环。

提示:
- 2 <= n <= 1000
- 1 <= edges.length <= 1000
- edges[i].length == 2
- 0 <= ui, vi < n
- ui != vi
- 没有重复的边

## 解题思路

**方法:枚举源点 + BFS(逐层扩散求经过每个点的最短环)**

1. 建立邻接表。
2. 以每个顶点 s 为源点做一次 BFS,记录 dist[]（到 s 的最短距离）和 parent[]（BFS 树中的父节点）。
3. BFS 过程中,当处理节点 x 的邻居 y 时:
   - 若 y 未访问,则 dist[y] = dist[x] + 1,parent[y] = x,入队;
   - 若 y 已访问且 parent[x] !== y（排除 BFS 树边本身）,说明 x 和 y 之间存在一条"额外"边,形成一个环,候选环长为 dist[x] + dist[y] + 1。
4. 对所有源点、所有候选取最小值;若仍为无穷大则返回 -1。

**正确性**:设全局最短环为 C（长度 L）,取 s ∈ C,BFS 自 s 扩散时,C 上距 s 最远的两侧节点 x、y 恰好相邻,且 dist[x] + dist[y] = L - 1,故必然产出候选 L;其他候选只会 ≥ 对应真实环长,不会低估。

**复杂度**:时间 O(n·(n+m)) ≈ 3×10^6,空间 O(n)。
