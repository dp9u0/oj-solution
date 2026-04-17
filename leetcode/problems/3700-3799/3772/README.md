# [3772] Maximum Subgraph Score in a Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-subgraph-score-in-a-tree/description/)

* algorithms
* Hard (70.57%)
* Likes:    51
* Dislikes: 3
* Testcase Example:  '3\n[[0,1],[1,2]]\n[1,0,1]'

```md
You are given an undirected tree with n nodes, numbered from 0 to n - 1. It is represented by a 2D integer array edges​​​​​​​ of length n - 1, where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree.
You are also given an integer array good of length n, where good[i] is 1 if the ith node is good, and 0 if it is bad.
Define the score of a subgraph as the number of good nodes minus the number of bad nodes in that subgraph.
For each node i, find the maximum possible score among all connected subgraphs that contain node i.
Return an array of n integers where the ith element is the maximum score for node i.
A subgraph is a graph whose vertices and edges are subsets of the original graph.
A connected subgraph is a subgraph in which every pair of its vertices is reachable from one another using only its edges.

Example 1:


Input: n = 3, edges = [[0,1],[1,2]], good = [1,0,1]
Output: [1,1,1]
Explanation:

Green nodes are good and red nodes are bad.
For each node, the best connected subgraph containing it is the whole tree, which has 2 good nodes and 1 bad node, resulting in a score of 1.
Other connected subgraphs containing a node may have the same score.


Example 2:


Input: n = 5, edges = [[1,0],[1,2],[1,3],[3,4]], good = [0,1,0,1,1]
Output: [2,3,2,3,3]
Explanation:

Node 0: The best connected subgraph consists of nodes 0, 1, 3, 4, which has 3 good nodes and 1 bad node, resulting in a score of 3 - 1 = 2.
Nodes 1, 3, and 4: The best connected subgraph consists of nodes 1, 3, 4, which has 3 good nodes, resulting in a score of 3.
Node 2: The best connected subgraph consists of nodes 1, 2, 3, 4, which has 3 good nodes and 1 bad node, resulting in a score of 3 - 1 = 2.


Example 3:


Input: n = 2, edges = [[0,1]], good = [0,0]
Output: [-1,-1]
Explanation:
For each node, including the other node only adds another bad node, so the best score for both nodes is -1.


Constraints:

2 <= n <= 105
edges.length == n - 1
edges[i] = [ai, bi]
0 <= ai, bi < n
good.length == n
0 <= good[i] <= 1
The input is generated such that edges represents a valid tree.


```

## 题目翻译

给定 n 节点无向树和 good 数组（1=好节点，0=坏节点）。子图分数 = 好节点数 - 坏节点数。对每个节点 i，求包含它的连通子图的最大分数。

## 解题思路

**换根 DP（Rerooting）**

等价于树上的最大路径和问题：每个节点的分数 = 自身权值（好=+1, 坏=-1）+ 正贡献子树之和。

1. 第一次 DFS（后序）：以 0 为根计算 dp[u] = val(u) + Σ max(0, dp[child])
2. 第二次 DFS（先序，换根）：将根从 u 移到 v 时：
   - dp[u] 减去 v 的正贡献
   - dp[v] 加上 u 新的正贡献
   - 回溯时恢复

时间 O(n)，空间 O(n)。

## Solution

[SourceCode](./solution.js)
