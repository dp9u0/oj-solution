# [3530] Maximum Profit from Valid Topological Order in DAG

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-profit-from-valid-topological-order-in-dag/description/)

* algorithms
* Hard (30.21%)
* Likes:    61
* Dislikes: 5
* Testcase Example:  '2\n[[0,1]]\n[2,3]'

```md
You are given a Directed Acyclic Graph (DAG) with n nodes labeled from 0 to n - 1, represented by a 2D array edges, where edges[i] = [ui, vi] indicates a directed edge from node ui to vi. Each node has an associated score given in an array score, where score[i] represents the score of node i.
You must process the nodes in a valid topological order. Each node is assigned a 1-based position in the processing order.
The profit is calculated by summing up the product of each node&#39;s score and its position in the ordering.
Return the maximum possible profit achievable with an optimal topological order.
A topological order of a DAG is a linear ordering of its nodes such that for every directed edge u &rarr; v, node u comes before v in the ordering.

Example 1:

Input: n = 2, edges = [[0,1]], score = [2,3]
Output: 8
Explanation:

Node 1 depends on node 0, so a valid order is [0, 1].



Node
Processing Order
Score
Multiplier
Profit Calculation




0
1st
2
1
2 &times; 1 = 2


1
2nd
3
2
3 &times; 2 = 6



The maximum total profit achievable over all valid topological orders is 2 + 6 = 8.

Example 2:

Input: n = 3, edges = [[0,1],[0,2]], score = [1,6,3]
Output: 25
Explanation:

Nodes 1 and 2 depend on node 0, so the most optimal valid order is [0, 2, 1].



Node
Processing Order
Score
Multiplier
Profit Calculation




0
1st
1
1
1 &times; 1 = 1


2
2nd
3
2
3 &times; 2 = 6


1
3rd
6
3
6 &times; 3 = 18



The maximum total profit achievable over all valid topological orders is 1 + 6 + 18 = 25.


Constraints:

1 <= n == score.length <= 22
1 <= score[i] <= 105
0 <= edges.length <= n * (n - 1) / 2
edges[i] == [ui, vi] denotes a directed edge from ui to vi.
0 <= ui, vi < n
ui != vi
The input graph is guaranteed to be a DAG.
There are no duplicate edges.


```

## 题目翻译

给定一个 DAG（n 个节点），每个节点有分数 score[i]。按拓扑序处理节点，第 pos 个处理的节点贡献 score × pos。求最大总利润。n ≤ 22。

## 解题思路

**状压 DP（Bitmask DP）**

n ≤ 22，用 bitmask 表示已放置的节点集合。

`dp[mask]` = 已放置 mask 中节点（位置 1..popcount(mask)）时的最大利润。

转移：对 mask 中的节点，尝试添加一个满足前置条件的节点 v：
- v 不在 mask 中
- v 的所有前驱节点都在 mask 中
- dp[mask | (1<<v)] = max(dp[mask | (1<<v)], dp[mask] + score[v] * (popcount(mask)+1))

预计算 `prereq[v]` = v 的前驱节点 bitset，检查 `(prereq[v] & mask) == prereq[v]`。

时间 O(2^n * n)，空间 O(2^n)。

## Solution

[SourceCode](./solution.js)
