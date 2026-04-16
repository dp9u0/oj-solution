# [3593] Minimum Increments to Equalize Leaf Paths

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-increments-to-equalize-leaf-paths/description/)

* algorithms
* Medium (41.23%)
* Likes:    146
* Dislikes: 13
* Testcase Example:  '3\n[[0,1],[0,2]]\n[2,1,3]'

```md
You are given an integer n and an undirected tree rooted at node 0 with n nodes numbered from 0 to n - 1. This is represented by a 2D array edges of length n - 1, where edges[i] = [ui, vi] indicates an edge from node ui to vi .
Each node i has an associated cost given by cost[i], representing the cost to traverse that node.
The score of a path is defined as the sum of the costs of all nodes along the path.
Your goal is to make the scores of all root-to-leaf paths equal by increasing the cost of any number of nodes by any non-negative amount.
Return the minimum number of nodes whose cost must be increased to make all root-to-leaf path scores equal.

Example 1:

Input: n = 3, edges = [[0,1],[0,2]], cost = [2,1,3]
Output: 1
Explanation:

There are two root-to-leaf paths:

Path 0 &rarr; 1 has a score of 2 + 1 = 3.
Path 0 &rarr; 2 has a score of 2 + 3 = 5.

To make all root-to-leaf path scores equal to 5, increase the cost of node 1 by 2.
Only one node is increased, so the output is 1.

Example 2:

Input: n = 3, edges = [[0,1],[1,2]], cost = [5,1,4]
Output: 0
Explanation:

There is only one root-to-leaf path:


Path 0 &rarr; 1 &rarr; 2 has a score of 5 + 1 + 4 = 10.


Since only one root-to-leaf path exists, all path costs are trivially equal, and the output is 0.

Example 3:

Input: n = 5, edges = [[0,4],[0,1],[1,2],[1,3]], cost = [3,4,1,1,7]
Output: 1
Explanation:

There are three root-to-leaf paths:

Path 0 &rarr; 4 has a score of 3 + 7 = 10.
Path 0 &rarr; 1 &rarr; 2 has a score of 3 + 4 + 1 = 8.
Path 0 &rarr; 1 &rarr; 3 has a score of 3 + 4 + 1 = 8.

To make all root-to-leaf path scores equal to 10, increase the cost of node 1 by 2. Thus, the output is 1.


Constraints:

2 <= n <= 105
edges.length == n - 1
edges[i] == [ui, vi]
0 <= ui, vi < n
cost.length == n
1 <= cost[i] <= 109
The input is generated such that edges represents a valid tree.


```

## 中文翻译

给定根节点为 0 的无向树，每个节点有代价值 cost[i]。根到叶路径分数为路径上节点代价之和。可以增加任意节点的代价（非负），使所有根到叶路径分数相等。求最少需要增加多少个节点的代价。

## 解题思路

自底向上 DFS。对于每个内部节点，先递归处理所有子树（使子树内路径分数相等），然后比较各子树的最大路径分数。若某子树最大路径分数小于全局最大值，则需修改该子节点（增加其代价来补齐差值），计数 +1。用 BFS 建树并计算路径前缀和，然后逆 BFS 序处理避免递归栈溢出。

## Solution

[SourceCode](./solution.js)
