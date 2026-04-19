# [1377] Frog Position After T Seconds

## Description

[LeetCode Problem Description](https://leetcode.com/problems/frog-position-after-t-seconds/description/)

* algorithms
* Hard (38.29%)
* Likes:    845
* Dislikes: 151
* Testcase Example:  '7\n[[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]]\n2\n4'

```md
Given an undirected tree consisting of n vertices numbered from 1 to n. A frog starts jumping from vertex 1. In one second, the frog jumps from its current vertex to another unvisited vertex if they are directly connected. The frog can not jump back to a visited vertex. In case the frog can jump to several vertices, it jumps randomly to one of them with the same probability. Otherwise, when the frog can not jump to any unvisited vertex, it jumps forever on the same vertex.
The edges of the undirected tree are given in the array edges, where edges[i] = [ai, bi] means that exists an edge connecting the vertices ai and bi.
Return the probability that after t seconds the frog is on the vertex target. Answers within 10-5 of the actual answer will be accepted.

Example 1:


Input: n = 7, edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], t = 2, target = 4
Output: 0.16666666666666666
Explanation: The figure above shows the given graph. The frog starts at vertex 1, jumping with 1/3 probability to the vertex 2 after second 1 and then jumping with 1/2 probability to vertex 4 after second 2. Thus the probability for the frog is on the vertex 4 after 2 seconds is 1/3 * 1/2 = 1/6 = 0.16666666666666666.

Example 2:


Input: n = 7, edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], t = 1, target = 7
Output: 0.3333333333333333
Explanation: The figure above shows the given graph. The frog starts at vertex 1, jumping with 1/3 = 0.3333333333333333 probability to the vertex 7 after second 1.


Constraints:

1 <= n <= 100
edges.length == n - 1
edges[i].length == 2
1 <= ai, bi <= n
1 <= t <= 50
1 <= target <= n


```

## 中文翻译

给定 n 个顶点的无向树，青蛙从顶点 1 出发，每秒跳到一个未访问的相邻顶点（等概率）。若无可跳顶点则停在原地。返回 t 秒后在 target 顶点的概率。

## 解题思路

BFS。从顶点 1 开始层次遍历，维护每个顶点的概率。BFS 时记录步数，到达 target 时：若步数恰为 t 则返回概率；若步数 < t 且 target 是叶子节点（无未访问邻居），则青蛙停在 target，概率不变；若步数 > t 则返回 0。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
