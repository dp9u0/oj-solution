# [2316] Count Unreachable Pairs of Nodes in an Undirected Graph

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/description/)

* algorithms
* Medium (49.89%)
* Likes:    2270
* Dislikes: 56
* Testcase Example:  '3\n[[0,1],[0,2],[1,2]]'

```md
You are given an integer n. There is an undirected graph with n nodes, numbered from 0 to n - 1. You are given a 2D integer array edges where edges[i] = [ai, bi] denotes that there exists an undirected edge connecting nodes ai and bi.
Return the number of pairs of different nodes that are unreachable from each other.

Example 1:


Input: n = 3, edges = [[0,1],[0,2],[1,2]]
Output: 0
Explanation: There are no pairs of nodes that are unreachable from each other. Therefore, we return 0.

Example 2:


Input: n = 7, edges = [[0,2],[0,5],[2,4],[1,6],[5,4]]
Output: 14
Explanation: There are 14 pairs of nodes that are unreachable from each other:
[[0,1],[0,3],[0,6],[1,2],[1,3],[1,4],[1,5],[2,3],[2,6],[3,4],[3,5],[3,6],[4,6],[5,6]].
Therefore, we return 14.


Constraints:

1 <= n <= 105
0 <= edges.length <= 2 * 105
edges[i].length == 2
0 <= ai, bi < n
ai != bi
There are no repeated edges.


```

## 翻译

给定 n 个节点的无向图和边列表 edges，返回无法互相到达的不同节点对数。

## Approach

Union-Find 求连通分量大小，然后累加不可达对数。对于每个大小为 size 的连通分量，它与之前已处理的所有节点形成的不可达对数为 size * totalSeen。

总不可达对数 = sum(size_i * (n - prefixSum_i))

时间复杂度 O(n * α(n))，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
