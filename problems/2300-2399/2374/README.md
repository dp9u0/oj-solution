# [2374] Node With Highest Edge Score

## Description

[LeetCode Problem Description](https://leetcode.com/problems/node-with-highest-edge-score/description/)

* algorithms
* Medium (49.27%)
* Likes:    486
* Dislikes: 43
* Testcase Example:  '[1,0,0,0,0,7,7,5]'

```md
You are given a directed graph with n nodes labeled from 0 to n - 1, where each node has exactly one outgoing edge.
The graph is represented by a given 0-indexed integer array edges of length n, where edges[i] indicates that there is a directed edge from node i to node edges[i].
The edge score of a node i is defined as the sum of the labels of all the nodes that have an edge pointing to i.
Return the node with the highest edge score. If multiple nodes have the same edge score, return the node with the smallest index.

Example 1:


Input: edges = [1,0,0,0,0,7,7,5]
Output: 7
Explanation:
- The nodes 1, 2, 3 and 4 have an edge pointing to node 0. The edge score of node 0 is 1 + 2 + 3 + 4 = 10.
- The node 0 has an edge pointing to node 1. The edge score of node 1 is 0.
- The node 7 has an edge pointing to node 5. The edge score of node 5 is 7.
- The nodes 5 and 6 have an edge pointing to node 7. The edge score of node 7 is 5 + 6 = 11.
Node 7 has the highest edge score so return 7.

Example 2:


Input: edges = [2,0,0,2]
Output: 0
Explanation:
- The nodes 1 and 2 have an edge pointing to node 0. The edge score of node 0 is 1 + 2 = 3.
- The nodes 0 and 3 have an edge pointing to node 2. The edge score of node 2 is 0 + 3 = 3.
Nodes 0 and 2 both have an edge score of 3. Since node 0 has a smaller index, we return 0.


Constraints:

n == edges.length
2 <= n <= 105
0 <= edges[i] < n
edges[i] != i


```

## 翻译

给定有向图，每个节点恰好一条出边，edges[i] 表示节点 i 指向 edges[i]。节点 i 的边分数定义为所有指向 i 的节点标签之和。返回边分数最高的节点（相同则取最小索引）。

## Approach

遍历 edges 数组，对每个 i，将 i 累加到 score[edges[i]] 上。最后找 score 最大的最小索引。

## Solution

[SourceCode](./solution.js)
