# [3620] Network Recovery Pathways

## Description

[LeetCode Problem Description](https://leetcode.com/problems/network-recovery-pathways/description/)

* algorithms
* Hard (29.92%)
* Likes:    140
* Dislikes: 12
* Testcase Example:  '[[0,1,5],[1,3,10],[0,2,3],[2,3,4]]\n[true,true,true,true]\n10'

```md
You are given a directed acyclic graph of n nodes numbered from 0 to n &minus; 1. This is represented by a 2D array edges of length m, where edges[i] = [ui, vi, costi] indicates a one‑way communication from node ui to node vi with a recovery cost of costi.
Some nodes may be offline. You are given a boolean array online where online[i] = true means node i is online. Nodes 0 and n &minus; 1 are always online.
A path from 0 to n &minus; 1 is valid if:

All intermediate nodes on the path are online.
The total recovery cost of all edges on the path does not exceed k.

For each valid path, define its score as the minimum edge‑cost along that path.
Return the maximum path score (i.e., the largest minimum-edge cost) among all valid paths. If no valid path exists, return -1.

Example 1:

Input: edges = [[0,1,5],[1,3,10],[0,2,3],[2,3,4]], online = [true,true,true,true], k = 10
Output: 3
Explanation:



The graph has two possible routes from node 0 to node 3:


Path 0 &rarr; 1 &rarr; 3


Total cost = 5 + 10 = 15, which exceeds k (15 > 10), so this path is invalid.




Path 0 &rarr; 2 &rarr; 3


Total cost = 3 + 4 = 7 <= k, so this path is valid.


The minimum edge‐cost along this path is min(3, 4) = 3.






There are no other valid paths. Hence, the maximum among all valid path‐scores is 3.



Example 2:

Input: edges = [[0,1,7],[1,4,5],[0,2,6],[2,3,6],[3,4,2],[2,4,6]], online = [true,true,true,false,true], k = 12
Output: 6
Explanation:



Node 3 is offline, so any path passing through 3 is invalid.


Consider the remaining routes from 0 to 4:


Path 0 &rarr; 1 &rarr; 4


Total cost = 7 + 5 = 12 <= k, so this path is valid.


The minimum edge‐cost along this path is min(7, 5) = 5.




Path 0 &rarr; 2 &rarr; 3 &rarr; 4


Node 3 is offline, so this path is invalid regardless of cost.




Path 0 &rarr; 2 &rarr; 4


Total cost = 6 + 6 = 12 <= k, so this path is valid.


The minimum edge‐cost along this path is min(6, 6) = 6.






Among the two valid paths, their scores are 5 and 6. Therefore, the answer is 6.




Constraints:

n == online.length
2 <= n <= 5 * 104
0 <= m == edges.length <= min(105, n * (n - 1) / 2)
edges[i] = [ui, vi, costi]
0 <= ui, vi < n
ui != vi
0 <= costi <= 109
0 <= k <= 5 * 1013
online[i] is either true or false, and both online[0] and online[n &minus; 1] are true.
The given graph is a directed acyclic graph.


```

## 题目翻译

给定一个 n 个节点（编号 0 到 n-1）的有向无环图（DAG），用边数组 `edges` 表示，`edges[i] = [ui, vi, costi]` 表示从 ui 到 vi 的单向边，恢复代价为 costi。

部分节点可能离线，`online[i] = true` 表示节点 i 在线。节点 0 和 n-1 始终在线。

从 0 到 n-1 的路径是有效的当且仅当：
1. 路径上所有中间节点都在线
2. 路径上所有边的恢复代价之和不超过 k

对于每条有效路径，定义其分数为路径上最小边代价。

返回所有有效路径中最大的分数。如果没有有效路径，返回 -1。

## 解题思路

**二分答案 + DAG 最短路**

二分枚举最小边代价阈值 `threshold`，对于每个阈值：
- 只保留代价 ≥ threshold 的边
- 跳过离线的中间节点
- 在 DAG 上求从 0 到 n-1 的最短路（拓扑排序 + DP）
- 如果最短路 ≤ k，则该阈值可行

由于是 DAG，先做一次拓扑排序，之后每次 check 只需按拓扑序遍历 O(n+m)。

二分范围 [0, maxEdgeCost]，约 30 次迭代，总复杂度 O(30 * (n + m))。

## Solution

[SourceCode](./solution.js)
