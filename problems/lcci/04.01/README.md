# [面试题 04.01] 节点间通路

## Description


```md
https://leetcode.cn/problems/route-between-nodes-lcci/description/
* lcci
* Medium (52.83%)
* Likes:    99
* Dislikes: -
* Testcase Example:  '3\n[[0, 1], [0, 2], [1, 2], [1, 2]]\n0\n2'
节点间通路。给定有向图，设计一个算法，找出两个节点之间是否存在一条路径。
示例 1：
输入：n = 3, graph = [[0, 1], [0, 2], [1, 2], [1, 2]], start = 0, target = 2
输出：true
示例 2：
输入：n = 5, graph = [[0, 1], [0, 2], [0, 4], [0, 4], [0, 1], [1, 3], [1, 4], [1, 3], [2, 3], [3, 4]], start = 0, target = 4
输出：true
提示：
节点数量n在[0, 1e5]范围内。
节点编号大于等于 0 小于 n。
图中可能存在自环和平行边。
Hint 1: 有两个众所周知的算法可以做到这一点。其利弊是什么？

```

## Description (English)

Route Between Nodes. Given a directed graph, design an algorithm to find out whether there is a route between two nodes.

Example 1:
Input: n = 3, graph = [[0,1],[0,2],[1,2],[1,2]], start = 0, target = 2
Output: true

Example 2:
Input: n = 5, graph = [[0,1],[0,2],[0,4],[0,4],[0,1],[1,3],[1,4],[1,3],[2,3],[3,4]], start = 0, target = 4
Output: true

Notes: 0 <= n <= 1e5; node ids are in [0, n); the graph may contain self-loops and parallel edges.

## 思路

邻接表 + BFS：建 O(V+E) 邻接表，队列扩散并用 Uint8Array 记访问（n 达 1e5，比 Set 省内存），入队前判 target 提前返回。start === target 直接 true。自环/平行边被 visited 天然过滤。

## Solution

[SourceCode](./solution.js)
