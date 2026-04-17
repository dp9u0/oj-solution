# [2368] Reachable Nodes With Restrictions

## Description

[LeetCode Problem Description](https://leetcode.com/problems/reachable-nodes-with-restrictions/description/)

* algorithms
* Medium (60.28%)
* Likes:    773
* Dislikes: 34
* Testcase Example:  '7\n[[0,1],[1,2],[3,1],[4,0],[0,5],[5,6]]\n[4,5]'

```md
There is an undirected tree with n nodes labeled from 0 to n - 1 and n - 1 edges.
You are given a 2D integer array edges of length n - 1 where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree. You are also given an integer array restricted which represents restricted nodes.
Return the maximum number of nodes you can reach from node 0 without visiting a restricted node.
Note that node 0 will not be a restricted node.

Example 1:


Input: n = 7, edges = [[0,1],[1,2],[3,1],[4,0],[0,5],[5,6]], restricted = [4,5]
Output: 4
Explanation: The diagram above shows the tree.
We have that [0,1,2,3] are the only nodes that can be reached from node 0 without visiting a restricted node.

Example 2:


Input: n = 7, edges = [[0,1],[0,2],[0,5],[0,4],[3,2],[6,5]], restricted = [4,2,1]
Output: 3
Explanation: The diagram above shows the tree.
We have that [0,5,6] are the only nodes that can be reached from node 0 without visiting a restricted node.


Constraints:

2 <= n <= 105
edges.length == n - 1
edges[i].length == 2
0 <= ai, bi < n
ai != bi
edges represents a valid tree.
1 <= restricted.length < n
1 <= restricted[i] < n
All the values of restricted are unique.


```

## 题目翻译

给定一棵 n 节点的无向树和受限制节点数组 restricted。从节点 0 出发，不经过受限制节点，最多能到达多少个节点？

## 解题思路

**BFS/DFS**

建邻接表，用 Set 标记受限制节点，从节点 0 开始 BFS，遇到受限制节点则跳过，统计可达节点数。

时间 O(n)，空间 O(n)。

## Solution

[SourceCode](./solution.js)
