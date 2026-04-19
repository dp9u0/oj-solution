# [1857] Largest Color Value in a Directed Graph

## Description

[LeetCode Problem Description](https://leetcode.com/problems/largest-color-value-in-a-directed-graph/description/)

* algorithms
* Hard (57.30%)
* Likes:    2628
* Dislikes: 87
* Testcase Example:  '"abaca"\n[[0,1],[0,2],[2,3],[3,4]]'

```md
There is a directed graph of n colored nodes and m edges. The nodes are numbered from 0 to n - 1.
You are given a string colors where colors[i] is a lowercase English letter representing the color of the ith node in this graph (0-indexed). You are also given a 2D array edges where edges[j] = [aj, bj] indicates that there is a directed edge from node aj to node bj.
A valid path in the graph is a sequence of nodes x1 -> x2 -> x3 -> ... -> xk such that there is a directed edge from xi to xi+1 for every 1 <= i < k. The color value of the path is the number of nodes that are colored the most frequently occurring color along that path.
Return the largest color value of any valid path in the given graph, or -1 if the graph contains a cycle.

Example 1:


Input: colors = 'abaca', edges = [[0,1],[0,2],[2,3],[3,4]]
Output: 3
Explanation: The path 0 -> 2 -> 3 -> 4 contains 3 nodes that are colored 'a' (red in the above image).

Example 2:


Input: colors = 'a', edges = [[0,0]]
Output: -1
Explanation: There is a cycle from 0 to 0.


Constraints:

n == colors.length
m == edges.length
1 <= n <= 105
0 <= m <= 105
colors consists of lowercase English letters.
0 <= aj, bj< n


```

## 中文翻译

有向图中每个节点有一个颜色（小写字母）。路径的颜色值 = 路径中出现次数最多的颜色的节点数。返回所有合法路径中最大的颜色值。如果图有环返回 -1。

约束：n <= 10^5, m <= 10^5

## 解题思路

**拓扑排序 + DP**

1. 对有向图做拓扑排序检测环。如果存在环，返回 -1。
2. DP 状态：dp[v][c] = 以节点 v 结尾的路径中，颜色 c 出现的最大次数。
3. 拓扑排序过程中，按顺序更新 dp：对于边 u→v，dp[v][c] = max(dp[v][c], dp[u][c])。
4. 处理节点 v 时，先更新 dp[v][colors[v]]++。
5. 最终答案是所有 dp[v][c] 的最大值。

## Solution

[SourceCode](./solution.js)
