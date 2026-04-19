# [2242] Maximum Score of a Node Sequence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-score-of-a-node-sequence/description/)

* algorithms
* Hard (39.92%)
* Likes:    581
* Dislikes: 21
* Testcase Example:  '[5,2,9,8,4]\n[[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]'

```md
There is an undirected graph with n nodes, numbered from 0 to n - 1.
You are given a 0-indexed integer array scores of length n where scores[i] denotes the score of node i. You are also given a 2D integer array edges where edges[i] = [ai, bi] denotes that there exists an undirected edge connecting nodes ai and bi.
A node sequence is valid if it meets the following conditions:

There is an edge connecting every pair of adjacent nodes in the sequence.
No node appears more than once in the sequence.

The score of a node sequence is defined as the sum of the scores of the nodes in the sequence.
Return the maximum score of a valid node sequence with a length of 4. If no such sequence exists, return -1.

Example 1:


Input: scores = [5,2,9,8,4], edges = [[0,1],[1,2],[2,3],[0,2],[1,3],[2,4]]
Output: 24
Explanation: The figure above shows the graph and the chosen node sequence [0,1,2,3].
The score of the node sequence is 5 + 2 + 9 + 8 = 24.
It can be shown that no other node sequence has a score of more than 24.
Note that the sequences [3,1,2,0] and [1,0,2,3] are also valid and have a score of 24.
The sequence [0,3,2,4] is not valid since no edge connects nodes 0 and 3.

Example 2:


Input: scores = [9,20,6,4,11,12], edges = [[0,3],[5,3],[2,4],[1,3]]
Output: -1
Explanation: The figure above shows the graph.
There are no valid node sequences of length 4, so we return -1.


Constraints:

n == scores.length
4 <= n <= 5 * 104
1 <= scores[i] <= 108
0 <= edges.length <= 5 * 104
edges[i].length == 2
0 <= ai, bi <= n - 1
ai != bi
There are no duplicate edges.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定无向图 n 个节点的分数数组 scores 和边列表 edges。求长度为 4 的合法节点序列（相邻节点有边、节点不重复）的最大分数和，不存在返回 -1。

## 解题思路

序列 a-b-c-d，中间边为 b-c。对每个节点预排序邻居并保留 top 3 分数。枚举每条边 (b,c)，从 b 的 top 3 邻居（排除 c）和 c 的 top 3 邻居（排除 b）中组合找最优 a 和 d（a≠d）。top 3 保证 3×3 枚举中一定能找到合法对。
