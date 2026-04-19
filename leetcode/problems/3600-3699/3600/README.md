# [3600] Maximize Spanning Tree Stability with Upgrades

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-spanning-tree-stability-with-upgrades/description/)

* algorithms
* Hard (66.46%)
* Likes:    371
* Dislikes: 18
* Testcase Example:  '3\n[[0,1,2,1],[1,2,3,0]]\n1'

```md
You are given an integer n, representing n nodes numbered from 0 to n - 1 and a list of edges, where edges[i] = [ui, vi, si, musti]:

ui and vi indicates an undirected edge between nodes ui and vi.
si is the strength of the edge.
musti is an integer (0 or 1). If musti == 1, the edge must be included in the spanning tree. These edges cannot be upgraded.

You are also given an integer k, the maximum number of upgrades you can perform. Each upgrade doubles the strength of an edge, and each eligible edge (with musti == 0) can be upgraded at most once.
The stability of a spanning tree is defined as the minimum strength score among all edges included in it.
Return the maximum possible stability of any valid spanning tree. If it is impossible to connect all nodes, return -1.
Note: A spanning tree of a graph with n nodes is a subset of the edges that connects all nodes together (i.e. the graph is connected) without forming any cycles, and uses exactly n - 1 edges.

Example 1:

Input: n = 3, edges = [[0,1,2,1],[1,2,3,0]], k = 1
Output: 2
Explanation:

Edge [0,1] with strength = 2 must be included in the spanning tree.
Edge [1,2] is optional and can be upgraded from 3 to 6 using one upgrade.
The resulting spanning tree includes these two edges with strengths 2 and 6.
The minimum strength in the spanning tree is 2, which is the maximum possible stability.


Example 2:

Input: n = 3, edges = [[0,1,4,0],[1,2,3,0],[0,2,1,0]], k = 2
Output: 6
Explanation:

Since all edges are optional and up to k = 2 upgrades are allowed.
Upgrade edges [0,1] from 4 to 8 and [1,2] from 3 to 6.
The resulting spanning tree includes these two edges with strengths 8 and 6.
The minimum strength in the tree is 6, which is the maximum possible stability.


Example 3:

Input: n = 3, edges = [[0,1,1,1],[1,2,1,1],[2,0,1,1]], k = 0
Output: -1
Explanation:

All edges are mandatory and form a cycle, which violates the spanning tree property of acyclicity. Thus, the answer is -1.



Constraints:

2 <= n <= 105
1 <= edges.length <= 105
edges[i] = [ui, vi, si, musti]
0 <= ui, vi < n
ui != vi
1 <= si <= 105
musti is either 0 or 1.
0 <= k <= n
There are no duplicate edges.


```

## 中文翻译

给定 n 个节点和一组边 edges[i] = [ui, vi, si, musti]。musti=1 的边必须包含在生成树中且不能升级。最多可对 k 条 musti=0 的边各升级一次（强度翻倍）。生成树的稳定性 = 最小边强度。求最大稳定性，不可行返回 -1。

约束：n <= 10^5, edges.length <= 10^5

## 解题思路

**二分答案 + 并查集（Kruskal）**

1. 二分答案 mid：判断是否能构造稳定性 >= mid 的生成树。
2. 校验(mid)：
   - 先将所有 must=1 的边加入并查集，如果某条 must=1 边强度 < mid，不可行。
   - 然后按强度从大到小考虑 must=0 的边：
     - 如果 si >= mid，直接加入。
     - 如果 si * 2 >= mid 且 si < mid，可以升级后加入（消耗一次升级）。
   - 使用贪心：优先加入不需要升级的边，最后用升级次数补充。
   - 最终检查是否所有 n-1 条边都已加入。
3. 二分范围：1 到 max(si) * 2。

## Solution

[SourceCode](./solution.js)
