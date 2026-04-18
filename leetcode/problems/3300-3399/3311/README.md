# [3311] Construct 2D Grid Matching Graph Layout

## Description

[LeetCode Problem Description](https://leetcode.com/problems/construct-2d-grid-matching-graph-layout/description/)

* algorithms
* Hard (29.62%)
* Likes:    81
* Dislikes: 12
* Testcase Example:  '4\n[[0,1],[0,2],[1,3],[2,3]]'

```md
You are given a 2D integer array edges representing an undirected graph having n nodes, where edges[i] = [ui, vi] denotes an edge between nodes ui and vi.
Construct a 2D grid that satisfies these conditions:

The grid contains all nodes from 0 to n - 1 in its cells, with each node appearing exactly once.
Two nodes should be in adjacent grid cells (horizontally or vertically) if and only if there is an edge between them in edges.

It is guaranteed that edges can form a 2D grid that satisfies the conditions.
Return a 2D integer array satisfying the conditions above. If there are multiple solutions, return any of them.

Example 1:

Input: n = 4, edges = [[0,1],[0,2],[1,3],[2,3]]
Output: [[3,1],[2,0]]
Explanation:


Example 2:

Input: n = 5, edges = [[0,1],[1,3],[2,3],[2,4]]
Output: [[4,2,3,1,0]]
Explanation:


Example 3:

Input: n = 9, edges = [[0,1],[0,4],[0,5],[1,7],[2,3],[2,4],[2,5],[3,6],[4,6],[4,7],[6,8],[7,8]]
Output: [[8,6,3],[7,4,2],[1,0,5]]
Explanation:



Constraints:

2 <= n <= 5 * 104
1 <= edges.length <= 105
edges[i] = [ui, vi]
0 <= ui < vi < n
All the edges are distinct.
The input is generated such that edges can form a 2D grid that satisfies the conditions.


```

## 题目翻译

给定无向图的边列表，构造一个二维网格，使得两个节点相邻（水平或垂直）当且仅当图中有边相连。保证存在合法解。

## 解题思路

1. 通过度数分布确定网格 R×C 的维度：度数1为路径端点（1×n），度数4为内部节点（用公式 R+C=(n-d4+4)/2 和 R*C=n 联立求解），无度数4则为 2×(n/2)。
2. 找到一个角点（最小度数节点）。
3. 构建第一列：R=2时找度数2的邻居；R≥3时沿度数≤3的链构建长度R的列。
4. 逐列扩展：对前一列每个节点找其唯一未访问邻居。

## Solution

[SourceCode](./solution.js)
