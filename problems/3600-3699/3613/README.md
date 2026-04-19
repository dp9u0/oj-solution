# [3613] Minimize Maximum Component Cost

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimize-maximum-component-cost/description/)

* algorithms
* Medium (43.51%)
* Likes:    122
* Dislikes: 9
* Testcase Example:  '5\n[[0,1,4],[1,2,3],[1,3,2],[3,4,6]]\n2'

```md
You are given an undirected connected graph with n nodes labeled from 0 to n - 1 and a 2D integer array edges where edges[i] = [ui, vi, wi] denotes an undirected edge between node ui and node vi with weight wi, and an integer k.
You are allowed to remove any number of edges from the graph such that the resulting graph has at most k connected components.
The cost of a component is defined as the maximum edge weight in that component. If a component has no edges, its cost is 0.
Return the minimum possible value of the maximum cost among all components after such removals.

Example 1:

Input: n = 5, edges = [[0,1,4],[1,2,3],[1,3,2],[3,4,6]], k = 2
Output: 4
Explanation:


Remove the edge between nodes 3 and 4 (weight 6).
The resulting components have costs of 0 and 4, so the overall maximum cost is 4.


Example 2:

Input: n = 4, edges = [[0,1,5],[1,2,5],[2,3,5]], k = 1
Output: 5
Explanation:


No edge can be removed, since allowing only one component (k = 1) requires the graph to stay fully connected.
That single component&rsquo;s cost equals its largest edge weight, which is 5.



Constraints:

1 <= n <= 5 * 104
0 <= edges.length <= 105
edges[i].length == 3
0 <= ui, vi < n
1 <= wi <= 106
1 <= k <= n
The input graph is connected.


```

## 中文翻译

给定 n 个节点的无向连通图，边有权重。可以删除任意条边，使图最多有 k 个连通分量。每个连通分量的代价为其内部最大边权（无边则为 0）。求所有分量代价最大值的最小可能值。

## 解题思路

**Kruskal + 并查集：**

1. 等价于构建一个最多有 k 棵树的最小生成森林
2. 按边权从小到大排序，依次用并查集合并
3. 当连通分量数恰好等于 k 时停止，答案为最后加入的边权
4. 特殊情况：k >= n 时答案为 0（每个节点独立为一个分量）

时间复杂度：O(m log m)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
