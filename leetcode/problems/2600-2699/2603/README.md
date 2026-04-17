# [2603] Collect Coins in a Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/collect-coins-in-a-tree/description/)

* algorithms
* Hard (39.84%)
* Likes:    560
* Dislikes: 25
* Testcase Example:  '[1,0,0,0,0,1]\n[[0,1],[1,2],[2,3],[3,4],[4,5]]'

```md
There exists an undirected and unrooted tree with n nodes indexed from 0 to n - 1. You are given an integer n and a 2D integer array edges of length n - 1, where edges[i] = [ai, bi] indicates that there is an edge between nodes ai and bi in the tree. You are also givenan array coins of size n where coins[i] can be either 0 or 1, where 1 indicates the presence of a coin in the vertex i.
Initially, you choose to start at any vertex inthe tree.Then, you can performthe following operations any number of times:

Collect all the coins that are at a distance of at most 2 from the current vertex, or
Move to any adjacent vertex in the tree.

Find the minimum number of edges you need to go through to collect all the coins and go back to the initial vertex.
Note that if you pass an edge several times, you need to count it into the answer several times.

Example 1:


Input: coins = [1,0,0,0,0,1], edges = [[0,1],[1,2],[2,3],[3,4],[4,5]]
Output: 2
Explanation: Start at vertex 2, collect the coin at vertex 0, move to vertex 3, collect the coin at vertex 5 then move back to vertex 2.

Example 2:


Input: coins = [0,0,0,1,1,0,0,1], edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[5,6],[5,7]]
Output: 2
Explanation: Start at vertex 0, collect the coins at vertices 4 and 3, move to vertex 2,  collect the coin at vertex 7, then move back to vertex 0.


Constraints:

n == coins.length
1 <= n <= 3 * 104
0 <= coins[i] <= 1
edges.length == n - 1
edges[i].length == 2
0 <= ai, bi < n
ai != bi
edges represents a valid tree.


```

## 题目翻译

给定一棵树，某些节点有硬币。从任意节点出发，可以收集距离当前节点不超过 2 的所有硬币，也可以移动到相邻节点。求收集所有硬币并返回起点的最少边数。

## 解题思路

**拓扑排序 + 两轮剪枝**

关键观察：最终答案 = 必须经过的边数 × 2（每条边来回各一次）。

两轮剪枝：
1. **去除无用叶子**：从没有硬币的叶子开始 BFS 剥离，直到所有叶子都有硬币。得到包含所有硬币的最小子树。
2. **距离 2 收集优化**：因为能收集距离 2 以内的硬币，再剥掉 2 层叶子。剩余的边数 × 2 即为答案。

巧妙地：剩余度数之和 = 2 × 剩余边数 = 答案。

## Solution

[SourceCode](./solution.js)
