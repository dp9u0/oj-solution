# [3910] Count Connected Subgraphs with Even Node Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-connected-subgraphs-with-even-node-sum/description/)

* algorithms
* Hard (62.39%)
* Likes:    44
* Dislikes: 2
* Testcase Example:  '[1,0,1]\n[[0,1],[1,2]]'

```md
You are given an undirected graph with n nodes labeled from 0 to n - 1. Node i has a value of nums[i], which is either 0 or 1. The edges of the graph are given by a 2D array edges where edges[i] = [ui, vi] represents an edge between node ui and node vi.
For a non-empty subset s of nodes in the graph, we consider the induced subgraph of s generated as follows:

We keep only the nodes in s.
We keep only the edges whose two endpoints are both in s.

Return an integer representing the number of non-empty subsets s of nodes in the graph such that:

The induced subgraph of s is connected.
The sum of node values in s is even.


Example 1:

Input: nums = [1,0,1], edges = [[0,1],[1,2]]
Output: 2
Explanation:



s
connected?
sum of node values
counted?




[0]
Yes
1
No


[1]
Yes
0
Yes


[2]
Yes
1
No


[0,1]
Yes
1
No


[0,2]
No, node 0 and node 2 are disconnected.
2
No


[1,2]
Yes
1
No


[0,1,2]
Yes
2
Yes




Example 2:

Input: nums = [1], edges = []
Output: 0
Explanation:



s
connected?
sum of node values
counted?




[0]
Yes
1
No





Constraints:

1 <= n == nums.length <= 13
nums[i] is 0 or 1.
0 <= edges.length <= n * (n - 1) / 2
edges[i] = [ui, vi]
0 <= ui < vi < n
All edges are distinct.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

n 点无向图（点权 0/1）。统计非空节点子集 s 的数量：s 的诱导子图连通，且 s 的点权和为偶数。

示例：`[1,0,1], [[0,1],[1,2]]` → `2`（子集 {0,1,2} 与 {0,1}... 具体见题）

约束：**n ≤ 13**

## 解题思路

n ≤ 13 → 直接枚举全部 2^n 子集，检查点权和奇偶 + 诱导子图 BFS 连通性。O(2^n·(n+m)) ≈ 1.4×10^6。