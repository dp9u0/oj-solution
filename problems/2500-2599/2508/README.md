# [2508] Add Edges to Make Degrees of All Nodes Even

## Description

[LeetCode Problem Description](https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/description/)

* algorithms
* Hard (35.75%)
* Likes:    366
* Dislikes: 63
* Testcase Example:  '5\n[[1,2],[2,3],[3,4],[4,2],[1,4],[2,5]]'

```md
There is an undirected graph consisting of n nodes numbered from 1 to n. You are given the integer n and a 2D array edges where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi. The graph can be disconnected.
You can add at most two additional edges (possibly none) to this graph so that there are no repeated edges and no self-loops.
Return true if it is possible to make the degree of each node in the graph even, otherwise return false.
The degree of a node is the number of edges connected to it.

Example 1:


Input: n = 5, edges = [[1,2],[2,3],[3,4],[4,2],[1,4],[2,5]]
Output: true
Explanation: The above diagram shows a valid way of adding an edge.
Every node in the resulting graph is connected to an even number of edges.

Example 2:


Input: n = 4, edges = [[1,2],[3,4]]
Output: true
Explanation: The above diagram shows a valid way of adding two edges.
Example 3:


Input: n = 4, edges = [[1,2],[1,3],[1,4]]
Output: false
Explanation: It is not possible to obtain a valid graph with adding at most 2 edges.

Constraints:

3 <= n <= 105
2 <= edges.length <= 105
edges[i].length == 2
1 <= ai, bi <= n
ai != bi
There are no repeated edges.


```

## 翻译

给定无向图，最多加 2 条边（无重复、无自环），使所有节点度数为偶数。判断是否可行。

## 解题思路

统计奇数度节点列表 odd。0 个直接 true；>4 个直接 false；2 个时尝试直接连或通过中间节点连两条；4 个时枚举 3 种配对。用 Set 查边是否存在。O(n+E)。

## Solution

[SourceCode](./solution.js)
