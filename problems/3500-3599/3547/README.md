# [3547] Maximum Sum of Edge Values in a Graph

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-sum-of-edge-values-in-a-graph/description/)

* algorithms
* Hard (36.27%)
* Likes:    54
* Dislikes: 32
* Testcase Example:  '4\n[[0,1],[1,2],[2,3]]'

```md
You are given an undirected connected graph of n nodes, numbered from 0 to n - 1. Each node is connected to at most 2 other nodes.
The graph consists of m edges, represented by a 2D array edges, where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi.
You have to assign a unique value from 1 to n to each node. The value of an edge will be the product of the values assigned to the two nodes it connects.
Your score is the sum of the values of all edges in the graph.
Return the maximum score you can achieve.

Example 1:


Input: n = 4, edges =[[0,1],[1,2],[2,3]]
Output: 23
Explanation:
The diagram above illustrates an optimal assignment of values to nodes. The sum of the values of the edges is: (1 * 3) + (3 * 4) + (4 * 2) = 23.

Example 2:


Input: n = 6, edges = [[0,3],[4,5],[2,0],[1,3],[2,4],[1,5]]
Output: 82
Explanation:
The diagram above illustrates an optimal assignment of values to nodes. The sum of the values of the edges is: (1 * 2) + (2 * 4) + (4 * 6) + (6 * 5) + (5 * 3) + (3 * 1) = 82.


Constraints:

1 <= n <= 5 * 104
m == edges.length
1 <= m <= n
edges[i].length == 2
0 <= ai, bi < n
ai != bi
There are no repeated edges.
The graph is connected.
Each node is connected to at most 2 other nodes.


```

## 翻译

给定连通无向图（每个节点度≤2），给节点分配 1~n 的唯一值，边权=两端点值之积，求最大边权之和。

## 解题思路

度≤2的连通图必为路径或环。最优排列为奇数升序再偶数降序：1,3,5,...,n(或n-1),n(或n-1),...,4,2，使最大值相邻。若 m=n 则为环，多加首尾乘积。O(n)。

## Solution

[SourceCode](./solution.js)
