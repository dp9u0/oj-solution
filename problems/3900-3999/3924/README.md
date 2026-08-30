# [3924] Minimum Threshold Path With Limited Heavy Edges

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-threshold-path-with-limited-heavy-edges/description/)

* algorithms
* Hard (39.15%)
* Likes:    60
* Dislikes: 3
* Testcase Example:  '6\n[[0,1,5],[1,2,3],[3,4,4],[4,5,1],[1,4,2]]\n0\n3\n1'

```md
There is an undirected weighted graph with n nodes labeled from 0 to n - 1.
The graph is represented by a 2D integer array edges, where each edge edges[i] = [ui, vi, w​​​​​​​i] indicates that there is an undirected edge between nodes ui and vi with weight w​​​​​​​i.
You are also given integers source, target and k.
A threshold value determines whether an edge is considered light or heavy:

An edge is light if its weight is less than or equal to threshold.


An edge is heavy if its weight is greater than threshold.

A path from source to target is valid if it contains at most k heavy edges.
Return the minimum integer threshold such that at least one valid path exists from source to target. If no such path exists, return -1.

Example 1:​​​​​​​​​​​​​​
​​​​​​​
Input: n = 6, edges = [[0,1,5],[1,2,3],[3,4,4],[4,5,1],[1,4,2]], source = 0, target = 3, k = 1
Output: 4
Explanation:
The minimum threshold such that a path from node 0 to node 3 uses at most 1 heavy edge is 4.

Light edges: [1, 2, 3], [3, 4, 4], [4, 5, 1], [1, 4, 2]


Heavy edges: [0, 1, 5]

A valid path is 0 → 1 → 4 → 3. It uses only 1 heavy edge ([0, 1, 5]), which satisfies the limit k = 1.
Any smaller threshold would make it impossible to reach node 3 without exceeding 1 heavy edge.
Example 2:
Input: n = 6, edges = [[0,1,3],[1,2,4],[3,4,5],[4,5,6]], source = 0, target = 4, k = 1
Output: -1
Explanation:
There is no path from node 0 to node 4. Since the target cannot be reached, the output is -1.
Example 3:
Input: n = 4, edges = [[0,1,2],[1,2,2],[2,3,2],[3,0,2]], source = 0, target = 0, k = 0
Output: 0
Explanation:
The source and target are the same node. No edges need to be traversed, so the minimum threshold is 0.

Constraints:
1 <= n <= 103​​​​​​​
0 <= edges.length <= 103​​​​​​​
edges[i] = [ui, vi, wi]
0 <= ui, vi​​​​​​​ <= n - 1
1 <= wi​​​​​​​ <= 109
0 <= source, target <= n - 1
0 <= k <= edges.length

```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

给定一个包含 n 个节点（编号 0 到 n-1）的无向带权图。图用二维整数数组 edges 表示，其中 edges[i] = [ui, vi, wi] 表示节点 ui 和 vi 之间存在一条权重为 wi 的无向边。

再给定整数 source、target 和 k。通过阈值（threshold）判断一条边是轻边还是重边：

- 权重小于等于 threshold 的边是轻边。
- 权重大于 threshold 的边是重边。

如果一条从 source 到 target 的路径包含至多 k 条重边，则该路径是合法的。

返回使得至少存在一条合法路径的最小整数 threshold。若不存在这样的路径，返回 -1。

示例 1：n = 6, edges = [[0,1,5],[1,2,3],[3,4,4],[4,5,1],[1,4,2]], source = 0, target = 3, k = 1，输出 4。路径 0 → 1 → 4 → 3 只用了 1 条重边 [0,1,5]，满足 k = 1；更小的 threshold 无法满足。

示例 2：图不连通，输出 -1。

示例 3：source == target，无需走任何边，输出 0。

## 解题思路

**二分 threshold + 0-1 BFS 判定**

关键观察：固定 threshold T 后，每条边的代价为 0（w ≤ T，轻边）或 1（w > T，重边），从 source 到 target 的最少重边数可用 0-1 BFS（桶式 Dijkstra）在 O(n + m) 内求出。判定可行 = 最少重边数 ≤ k。

单调性：T 越大，重边越少，最少重边数单调不增 → 可以对 T 二分。

算法步骤：
1. source === target 直接返回 0（空路径 0 条重边）。
2. 无边时返回 -1（此时 source ≠ target）。
3. 先用 T = maxWeight（全部轻边）判定连通性，不可达返回 -1。
4. 在 [0, maxWeight] 上二分最小可行 T，返回 lo。

判定函数用桶数组（下标 = 重边数，只需扩展到 k 层，超出 k 的状态直接剪枝），每层处理 stale 节点跳过，复杂度 O(n + m)。

总复杂度：O((n + m) · log(maxW))，n, m ≤ 1000，约 6 万次基本操作。
