# [3558] Number of Ways to Assign Edge Weights I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-ways-to-assign-edge-weights-i/description/)

* algorithms
* Medium (53.18%)
* Likes:    60
* Dislikes: 6
* Testcase Example:  '[[1,2]]'

```md
There is an undirected tree with n nodes labeled from 1 to n, rooted at node 1. The tree is represented by a 2D integer array edges of length n - 1, where edges[i] = [ui, vi] indicates that there is an edge between nodes ui and vi.
Initially, all edges have a weight of 0. You must assign each edge a weight of either 1 or 2.
The cost of a path between any two nodes u and v is the total weight of all edges in the path connecting them.
Select any one node x at the maximum depth. Return the number of ways to assign edge weights in the path from node 1 to x such that its total cost is odd.
Since the answer may be large, return it modulo 109 + 7.
Note: Ignore all edges not in the path from node 1 to x.

Example 1:


Input: edges = [[1,2]]
Output: 1
Explanation:

The path from Node 1 to Node 2 consists of one edge (1 &rarr; 2).
Assigning weight 1 makes the cost odd, while 2 makes it even. Thus, the number of valid assignments is 1.


Example 2:


Input: edges = [[1,2],[1,3],[3,4],[3,5]]
Output: 2
Explanation:

The maximum depth is 2, with nodes 4 and 5 at the same depth. Either node can be selected for processing.
For example, the path from Node 1 to Node 4 consists of two edges (1 &rarr; 3 and 3 &rarr; 4).
Assigning weights (1,2) or (2,1) results in an odd cost. Thus, the number of valid assignments is 2.



Constraints:

2 <= n <= 105
edges.length == n - 1
edges[i] == [ui, vi]
1 <= ui, vi <= n
edges represents a valid tree.


```

## 中文翻译

给定以节点 1 为根的树，每条边赋权重 1 或 2。选择最大深度的节点 x，求从根到 x 的路径上边权重之和为奇数的赋值方案数，模 10^9+7。

## 解题思路

BFS 求最大深度 d。路径上有 d 条边，每条边选 1 或 2。总和为奇数等价于选奇数条边赋 1（其余赋 2）。答案 = C(d,1) + C(d,3) + ... = 2^(d-1)。

## Solution

[SourceCode](./solution.js)
