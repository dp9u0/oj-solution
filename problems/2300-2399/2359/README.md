# [2359] Find Closest Node to Given Two Nodes

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-closest-node-to-given-two-nodes/description/)

* algorithms
* Medium (52.99%)
* Likes:    2102
* Dislikes: 471
* Testcase Example:  '[2,2,3,-1]\n0\n1'

```md
You are given a directed graph of n nodes numbered from 0 to n - 1, where each node has at most one outgoing edge.
The graph is represented with a given 0-indexed array edges of size n, indicating that there is a directed edge from node i to node edges[i]. If there is no outgoing edge from i, then edges[i] == -1.
You are also given two integers node1 and node2.
Return the index of the node that can be reached from both node1 and node2, such that the maximum between the distance from node1 to that node, and from node2 to that node is minimized. If there are multiple answers, return the node with the smallest index, and if no possible answer exists, return -1.
Note that edges may contain cycles.

Example 1:


Input: edges = [2,2,3,-1], node1 = 0, node2 = 1
Output: 2
Explanation: The distance from node 0 to node 2 is 1, and the distance from node 1 to node 2 is 1.
The maximum of those two distances is 1. It can be proven that we cannot get a node with a smaller maximum distance than 1, so we return node 2.

Example 2:


Input: edges = [1,2,-1], node1 = 0, node2 = 2
Output: 2
Explanation: The distance from node 0 to node 2 is 2, and the distance from node 2 to itself is 0.
The maximum of those two distances is 2. It can be proven that we cannot get a node with a smaller maximum distance than 2, so we return node 2.


Constraints:

n == edges.length
2 <= n <= 105
-1 <= edges[i] < n
edges[i] != i
0 <= node1, node2 < n


```

## 题目翻译

给定有向图（每个节点最多一条出边），用edges数组表示。给定node1和node2，找到能从两者都到达的节点中，使得max(dist(node1,x), dist(node2,x))最小化的节点。多解取最小索引。

## 解题思路

从node1和node2分别沿路径走，记录到每个节点的距离。然后遍历所有节点，找两者都能到达且max距离最小的节点。

## Solution

[SourceCode](./solution.js)
