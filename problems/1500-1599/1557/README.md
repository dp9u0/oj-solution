# [1557] Minimum Number of Vertices to Reach All Nodes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/description/)

* algorithms
* Medium (81.54%)
* Likes:    3870
* Dislikes: 135
* Testcase Example:  '6\n[[0,1],[0,2],[2,5],[3,4],[4,2]]'

```md
Given adirected acyclic graph,withnvertices numbered from0ton-1,and an arrayedgeswhereedges[i] = [fromi, toi]represents a directed edge from nodefromito nodetoi.
Find the smallest set of vertices from which all nodes in the graph are reachable. It&#39;s guaranteed that a unique solution exists.
Notice that you can return the vertices in any order.

Example 1:


Input: n = 6, edges = [[0,1],[0,2],[2,5],[3,4],[4,2]]
Output: [0,3]
Explanation: It&#39;s not possible to reach all the nodes from a single vertex. From 0 we can reach [0,1,2,5]. From 3 we can reach [3,4,2,5]. So we output [0,3].
Example 2:


Input: n = 5, edges = [[0,1],[2,1],[3,1],[1,4],[2,4]]
Output: [0,2,3]
Explanation: Notice that vertices 0, 3 and 2 are not reachable from any other node, so we must include them. Also any of these vertices can reach nodes 1 and 4.


Constraints:

2 <= n <= 10^5
1 <= edges.length <= min(10^5, n * (n - 1) / 2)
edges[i].length == 2
0 <= fromi,toi < n
All pairs (fromi, toi) are distinct.


```

## 翻译

给定一个有向无环图，有 `n` 个顶点编号 0 到 n-1，和一个边数组 `edges`。找到最小的顶点集合，使得从这些顶点出发可以到达图中所有节点。保证存在唯一解。

## Approach

**找入度为 0 的节点。** 如果一个节点有入度，说明可以从其他节点到达它，不需要在集合中。只有入度为 0 的节点必须作为起点。

遍历所有边，记录有入度的节点，返回所有入度为 0 的节点。

时间复杂度：O(n + E)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
