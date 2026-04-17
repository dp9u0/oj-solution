# [1761] Minimum Degree of a Connected Trio in a Graph

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-degree-of-a-connected-trio-in-a-graph/description/)

* algorithms
* Hard (44.34%)
* Likes:    358
* Dislikes: 295
* Testcase Example:  '6\n[[1,2],[1,3],[3,2],[4,1],[5,2],[3,6]]'

```md
You are given an undirected graph. You are given an integer n which is the number of nodes in the graph and an array edges, where each edges[i] = [ui, vi] indicates that there is an undirected edge between ui and vi.
A connected trio is a set of three nodes where there is an edge between every pair of them.
The degree of a connected trio is the number of edges where one endpoint is in the trio, and the other is not.
Return the minimum degree of a connected trio in the graph, or -1 if the graph has no connected trios.

Example 1:


Input: n = 6, edges = [[1,2],[1,3],[3,2],[4,1],[5,2],[3,6]]
Output: 3
Explanation: There is exactly one trio, which is [1,2,3]. The edges that form its degree are bolded in the figure above.

Example 2:


Input: n = 7, edges = [[1,3],[4,1],[4,3],[2,5],[5,6],[6,7],[7,5],[2,6]]
Output: 0
Explanation: There are exactly three trios:
1) [1,4,3] with degree 0.
2) [2,5,6] with degree 2.
3) [5,6,7] with degree 2.


Constraints:

2 <= n <= 400
edges[i].length == 2
1 <= edges.length <= n * (n-1) / 2
1 <= ui, vi <= n
ui != vi
There are no repeated edges.


```

## 题目翻译

给定一个无向图（n 个节点，edges 边列表），找到所有"连通三元组"中度最小的。连通三元组是三个互相两两相连的节点。三元组的度 = 从三元组节点连向外部的边数 = 三个节点度数之和 - 6。没有三元组返回 -1。

## 解题思路

**枚举三元组 + 邻接矩阵**

1. 构建邻接矩阵 `adj[i][j]` 和每个节点的度 `deg[i]`
2. 三重循环枚举 i < j < k，若 i-j、j-k、i-k 都有边，则 (i,j,k) 构成三元组
3. 三元组的度 = deg[i] + deg[j] + deg[k] - 6
4. 取最小值，n ≤ 400，O(n³) 约 6400 万次，可接受

时间复杂度 O(n³)，空间复杂度 O(n²)。

## Solution

[SourceCode](./solution.js)
