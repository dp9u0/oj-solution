# [2685] Count the Number of Complete Components

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-the-number-of-complete-components/description/)

* algorithms
* Medium (77.76%)
* Likes:    1279
* Dislikes: 32
* Testcase Example:  '6\n[[0,1],[0,2],[1,2],[3,4]]'

```md
You are given an integer n. There is an undirected graph with n vertices, numbered from 0 to n - 1. You are given a 2D integer array edges where edges[i] = [ai, bi] denotes that there exists an undirected edge connecting vertices ai and bi.
Return the number of complete connected components of the graph.
A connected component is a subgraph of a graph in which there exists a path between any two vertices, and no vertex of the subgraph shares an edge with a vertex outside of the subgraph.
A connected component is said to be complete if there exists an edge between every pair of its vertices.

Example 1:


Input: n = 6, edges = [[0,1],[0,2],[1,2],[3,4]]
Output: 3
Explanation: From the picture above, one can see that all of the components of this graph are complete.

Example 2:


Input: n = 6, edges = [[0,1],[0,2],[1,2],[3,4],[3,5]]
Output: 1
Explanation: The component containing vertices 0, 1, and 2 is complete since there is an edge between every pair of two vertices. On the other hand, the component containing vertices 3, 4, and 5 is not complete since there is no edge between vertices 4 and 5. Thus, the number of complete components in this graph is 1.


Constraints:

1 <= n <= 50
0 <= edges.length <= n * (n - 1) / 2
edges[i].length == 2
0 <= ai, bi <= n - 1
ai != bi
There are no repeated edges.


```

## 翻译

给定 n 个顶点的无向图和边列表，返回完全连通分量的数量。完全连通分量是指分量内每对顶点之间都有边相连。

## Approach

并查集找连通分量，同时统计每个分量的节点数和边数。一个 k 个节点的完全图有 k*(k-1)/2 条边，所以检查每个分量的边数是否等于节点数*(节点数-1)/2。

## Solution

[SourceCode](./solution.js)
