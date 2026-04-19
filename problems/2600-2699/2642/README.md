# [2642] Design Graph With Shortest Path Calculator

## Description

[LeetCode Problem Description](https://leetcode.com/problems/design-graph-with-shortest-path-calculator/description/)

* algorithms
* Hard (65.01%)
* Likes:    877
* Dislikes: 61
* Testcase Example:  '["Graph","shortestPath","shortestPath","addEdge","shortestPath"]\n' +

```md
'[[4,[[0,2,5],[0,1,2],[1,2,1],[3,0,3]]],[3,2],[0,3],[[1,3,4]],[0,3]]'
There is a directed weighted graph that consists of n nodes numbered from 0 to n - 1. The edges of the graph are initially represented by the given array edges where edges[i] = [fromi, toi, edgeCosti] meaning that there is an edge from fromi to toi with the cost edgeCosti.
Implement the Graph class:

Graph(int n, int[][] edges) initializes the object with n nodes and the given edges.
addEdge(int[] edge) adds an edge to the list of edges where edge = [from, to, edgeCost]. It is guaranteed that there is no edge between the two nodes before adding this one.
int shortestPath(int node1, int node2) returns the minimum cost of a path from node1 to node2. If no path exists, return -1. The cost of a path is the sum of the costs of the edges in the path.


Example 1:


Input
['Graph', 'shortestPath', 'shortestPath', 'addEdge', 'shortestPath']
[[4, [[0, 2, 5], [0, 1, 2], [1, 2, 1], [3, 0, 3]]], [3, 2], [0, 3], [[1, 3, 4]], [0, 3]]
Output
[null, 6, -1, null, 6]
Explanation
Graph g = new Graph(4, [[0, 2, 5], [0, 1, 2], [1, 2, 1], [3, 0, 3]]);
g.shortestPath(3, 2); // return 6. The shortest path from 3 to 2 in the first diagram above is 3 -> 0 -> 1 -> 2 with a total cost of 3 + 2 + 1 = 6.
g.shortestPath(0, 3); // return -1. There is no path from 0 to 3.
g.addEdge([1, 3, 4]); // We add an edge from node 1 to node 3, and we get the second diagram above.
g.shortestPath(0, 3); // return 6. The shortest path from 0 to 3 now is 0 -> 1 -> 3 with a total cost of 2 + 4 = 6.


Constraints:

1 <= n <= 100
0 <= edges.length <= n * (n - 1)
edges[i].length == edge.length == 3
0 <= fromi, toi, from, to, node1, node2 <= n - 1
1 <= edgeCosti, edgeCost <= 106
There are no repeated edges and no self-loops in the graph at any point.
At most 100 calls will be made for addEdge.
At most 100 calls will be made for shortestPath.


```

## 翻译

有一个由 n 个节点（编号 0 到 n-1）组成的有向加权图。边的初始表示为 edges 数组，其中 edges[i] = [fromi, toi, edgeCosti]。

实现 Graph 类：
- `Graph(int n, int[][] edges)`：用 n 个节点和给定边初始化。
- `addEdge(int[] edge)`：添加一条边，保证添加前两节点间无边。
- `shortestPath(int node1, int node2)`：返回 node1 到 node2 的最小代价路径，不存在则返回 -1。

## 解题思路

使用邻接表存储图，`shortestPath` 调用时用 Dijkstra 算法求最短路。

- n ≤ 100，每次 shortestPath 调用 Dijkstra 的时间为 O(E log V)，完全足够。
- `addEdge` 直接往邻接表添加即可。
- 用最小堆（优先队列）实现 Dijkstra。

## Solution

[SourceCode](./solution.js)
