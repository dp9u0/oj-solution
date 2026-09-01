# [684] Redundant Connection

## Description

[LeetCode Problem Description](https://leetcode.com/problems/redundant-connection/description/)

* algorithms
* Medium (67.44%)
* Likes:    7174
* Dislikes: 450
* Testcase Example:  '[[1,2],[1,3],[2,3]]'

```md
In this problem, a tree is an undirected graph that is connected and has no cycles.
You are given a graph that started as a tree with n nodes labeled from 1 to n, with one additional edge added. The added edge has two different vertices chosen from 1 to n, and was not an edge that already existed. The graph is represented as an array edges of length n where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the graph.
Return an edge that can be removed so that the resulting graph is a tree of n nodes. If there are multiple answers, return the answer that occurs last in the input.

Example 1:


Input: edges = [[1,2],[1,3],[2,3]]
Output: [2,3]

Example 2:


Input: edges = [[1,2],[2,3],[3,4],[1,4],[1,5]]
Output: [1,4]


Constraints:

n == edges.length
3 <= n <= 1000
edges[i].length == 2
1 <= ai < bi <= edges.length
ai != bi
There are no repeated edges.
The given graph is connected.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

一个 n 节点的树（无向无环连通图）添加了一条额外边，形成含环的图。给定边数组 edges，返回一条可以删除使其恢复为树的边（多条答案时返回输入中最后出现的那条）。

## Approach

并查集（Union-Find）。依次处理每条边，若两个端点已在同一连通分量中，说明加入该边会形成环，即为冗余边。路径压缩 + 按秩合并保证效率。

时间复杂度 O(n * α(n))，空间 O(n)。
