# [1782] Count Pairs Of Nodes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-pairs-of-nodes/description/)

* algorithms
* Hard (42.70%)
* Likes:    346
* Dislikes: 172
* Testcase Example:  '4\n[[1,2],[2,4],[1,3],[2,3],[2,1]]\n[2,3]'

```md
You are given an undirected graph defined by an integer n, the number of nodes, and a 2D integer array edges, the edges in the graph, where edges[i] = [ui, vi] indicates that there is an undirected edge between ui and vi. You are also given an integer array queries.
Let incident(a, b) be defined as the number of edges that are connected to either node a or b.
The answer to the jth query is the number of pairs of nodes (a, b) that satisfy both of the following conditions:

a < b
incident(a, b) > queries[j]

Return an array answers such that answers.length == queries.length and answers[j] is the answer of the jth query.
Note that there can be multiple edges between the same two nodes.

Example 1:


Input: n = 4, edges = [[1,2],[2,4],[1,3],[2,3],[2,1]], queries = [2,3]
Output: [6,5]
Explanation: The calculations for incident(a, b) are shown in the table above.
The answers for each of the queries are as follows:
- answers[0] = 6. All the pairs have an incident(a, b) value greater than 2.
- answers[1] = 5. All the pairs except (3, 4) have an incident(a, b) value greater than 3.

Example 2:

Input: n = 5, edges = [[1,5],[1,5],[3,4],[2,5],[1,3],[5,1],[2,3],[2,5]], queries = [1,2,3,4,5]
Output: [10,10,9,8,6]


Constraints:

2 <= n <= 2 * 104
1 <= edges.length <= 105
1 <= ui, vi <= n
ui != vi
1 <= queries.length <= 20
0 <= queries[j] < edges.length


```

## 翻译

给定无向图（可能有多重边）和查询数组 queries。incident(a,b) 为连接到 a 或 b 的边数。对每个查询 q，统计满足 a < b 且 incident(a,b) > q 的节点对数。

## 解题思路

incident(a,b) = deg(a) + deg(b) - edgeCount(a,b)。先对排序后的 deg 数组用双指针统计 deg[a]+deg[b] > q 的对数，再遍历所有有直接连边的节点对，若 deg[a]+deg[b] > q 但 deg[a]+deg[b]-edgeCount <= q 则减去 1（修正多算的）。

## Solution

[SourceCode](./solution.js)
