# [2699] Modify Graph Edge Weights

## Description

[LeetCode Problem Description](https://leetcode.com/problems/modify-graph-edge-weights/description/)

* algorithms
* Hard (55.58%)
* Likes:    744
* Dislikes: 153
* Testcase Example:  '5\n[[4,1,-1],[2,0,-1],[0,3,-1],[4,3,-1]]\n0\n1\n5'

```md
You are given an undirected weighted connected graph containing n nodes labeled from 0 to n - 1, and an integer array edges where edges[i] = [ai, bi, wi] indicates that there is an edge between nodes ai and bi with weight wi.
Some edges have a weight of -1 (wi = -1), while others have a positive weight (wi > 0).
Your task is to modify all edges with a weight of -1 by assigning them positive integer values in the range [1, 2 * 109] so that the shortest distance between the nodes source and destination becomes equal to an integer target. If there are multiple modifications that make the shortest distance between source and destination equal to target, any of them will be considered correct.
Return an array containing all edges (even unmodified ones) in any order if it is possible to make the shortest distance from source to destination equal to target, or an empty array if it&#39;s impossible.
Note: You are not allowed to modify the weights of edges with initial positive weights.

Example 1:


Input: n = 5, edges = [[4,1,-1],[2,0,-1],[0,3,-1],[4,3,-1]], source = 0, destination = 1, target = 5
Output: [[4,1,1],[2,0,1],[0,3,3],[4,3,1]]
Explanation: The graph above shows a possible modification to the edges, making the distance from 0 to 1 equal to 5.

Example 2:


Input: n = 3, edges = [[0,1,-1],[0,2,5]], source = 0, destination = 2, target = 6
Output: []
Explanation: The graph above contains the initial edges. It is not possible to make the distance from 0 to 2 equal to 6 by modifying the edge with weight -1. So, an empty array is returned.

Example 3:


Input: n = 4, edges = [[1,0,4],[1,2,3],[2,3,5],[0,3,-1]], source = 0, destination = 2, target = 6
Output: [[1,0,4],[1,2,3],[2,3,5],[0,3,1]]
Explanation: The graph above shows a modified graph having the shortest distance from 0 to 2 as 6.


Constraints:

1 <= n <= 100
1 <= edges.length <= n * (n - 1) / 2
edges[i].length == 3
0 <= ai, bi<n
wi= -1or 1 <= wi<= 107
ai!=bi
0 <= source, destination < n
source != destination
1 <= target <= 109
The graph is connected, and there are no self-loops or repeated edges


```

## 中文翻译

无向加权图中部分边权为 -1。将所有 -1 边赋正值 [1, 2×10^9]，使 source 到 destination 的最短路等于 target。返回修改后的边集，或空数组表示不可能。

## 解题思路

**二分查找 + 枚举**：

1. 先检查边界：全设 1 时最短路 d1，全设 2e9 时最短路 d2
2. d1 > target 或 d2 < target 则不可能
3. 二分查找统一权值 w 使最短路 = target
4. 如果不行，枚举每条 -1 边单独设值连接固定边可达区域

## Solution

[SourceCode](./solution.js)
