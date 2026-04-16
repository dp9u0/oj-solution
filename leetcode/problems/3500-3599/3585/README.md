# [3585] Find Weighted Median Node in Tree

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-weighted-median-node-in-tree/description/)

* algorithms
* Hard (26.46%)
* Likes:    72
* Dislikes: 6
* Testcase Example:  '2\n[[0,1,7]]\n[[1,0],[0,1]]'

```md
You are given an integer n and an undirected, weighted tree rooted at node 0 with n nodes numbered from 0 to n - 1. This is represented by a 2D array edges of length n - 1, where edges[i] = [ui, vi, wi] indicates an edge from node ui to vi with weight wi.
The weighted median node is defined as the first node x on the path from ui to vi such that the sum of edge weights from ui to x is greater than or equal to half of the total path weight.
You are given a 2D integer array queries. For each queries[j] = [uj, vj], determine the weighted median node along the path from uj to vj.
Return an array ans, where ans[j] is the node index of the weighted median for queries[j].

Example 1:

Input: n = 2, edges = [[0,1,7]], queries = [[1,0],[0,1]]
Output: [0,1]
Explanation:




Query
Path
Edge
Weights
Total
Path
Weight
Half
Explanation
Answer




[1, 0]
1 &rarr; 0
[7]
7
3.5
Sum from 1 &rarr; 0 = 7 >= 3.5, median is node 0.
0


[0, 1]
0 &rarr; 1
[7]
7
3.5
Sum from 0 &rarr; 1 = 7 >= 3.5, median is node 1.
1




Example 2:

Input: n = 3, edges = [[0,1,2],[2,0,4]], queries = [[0,1],[2,0],[1,2]]
Output: [1,0,2]
Explanation:




Query
Path
Edge
Weights
Total
Path
Weight
Half
Explanation
Answer




[0, 1]
0 &rarr; 1
[2]
2
1
Sum from 0 &rarr; 1 = 2 >= 1, median is node 1.
1


[2, 0]
2 &rarr; 0
[4]
4
2
Sum from 2 &rarr; 0 = 4 >= 2, median is node 0.
0


[1, 2]
1 &rarr; 0 &rarr; 2
[2, 4]
6
3
Sum from 1 &rarr; 0 = 2 < 3.
Sum from 1 &rarr; 2 = 2 + 4 = 6 >= 3, median is node 2.
2




Example 3:

Input: n = 5, edges = [[0,1,2],[0,2,5],[1,3,1],[2,4,3]], queries = [[3,4],[1,2]]
Output: [2,2]
Explanation:




Query
Path
Edge
Weights
Total
Path
Weight
Half
Explanation
Answer




[3, 4]
3 &rarr; 1 &rarr; 0 &rarr; 2 &rarr; 4
[1, 2, 5, 3]
11
5.5
Sum from 3 &rarr; 1 = 1 < 5.5.
Sum from 3 &rarr; 0 = 1 + 2 = 3 < 5.5.
Sum from 3 &rarr; 2 = 1 + 2 + 5 = 8 >= 5.5, median is node 2.
2


[1, 2]
1 &rarr; 0 &rarr; 2
[2, 5]
7
3.5

Sum from 1 &rarr; 0 = 2 < 3.5.
Sum from 1 &rarr; 2 = 2 + 5 = 7 >= 3.5, median is node 2.

2





Constraints:

2 <= n <= 105
edges.length == n - 1
edges[i] == [ui, vi, wi]
0 <= ui, vi < n
1 <= wi <= 109
1 <= queries.length <= 105
queries[j] == [uj, vj]
0 <= uj, vj < n
The input is generated such that edges represents a valid tree.


```

## 中文翻译

给定一棵带权树和查询数组。对每个查询 [u, v]，找路径 u 到 v 上第一个节点 x 使得从 u 到 x 的边权之和 >= 路径总权的一半。

## 解题思路

倍增法（Binary Lifting）。预处理 depth、dist（到根距离）、parent[k]（2^k 祖先）。用 LCA 找路径，计算总权。从 u 向 lca 方向走，若能在 u->lca 段达到半程则答案在该段；否则在 lca->v 段搜索。

## Solution

[SourceCode](./solution.js)
