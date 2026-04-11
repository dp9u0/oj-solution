# [1466] Reorder Routes to Make All Paths Lead to the City Zero

## Description

[LeetCode Problem Description](https://leetcode.com/problems/reorder-routes-to-make-all-paths-lead-to-the-city-zero/description/)

* algorithms
* Medium (65.72%)
* Likes:    4650
* Dislikes: 149
* Testcase Example:  '6\n[[0,1],[1,3],[2,3],[4,0],[4,5]]'

```md
There are n cities numbered from 0 to n - 1 and n - 1 roads such that there is only one way to travel between two different cities (this network form a tree). Last year, The ministry of transport decided to orient the roads in one direction because they are too narrow.
Roads are represented by connections where connections[i] = [ai, bi] represents a road from city ai to city bi.
This year, there will be a big event in the capital (city 0), and many people want to travel to this city.
Your task consists of reorienting some roads such that each city can visit the city 0. Return the minimum number of edges changed.
It&#39;s guaranteed that each city can reach city 0 after reorder.

Example 1:


Input: n = 6, connections = [[0,1],[1,3],[2,3],[4,0],[4,5]]
Output: 3
Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).

Example 2:


Input: n = 5, connections = [[1,0],[1,2],[3,2],[3,4]]
Output: 2
Explanation: Change the direction of edges show in red such that each node can reach the node 0 (capital).

Example 3:

Input: n = 3, connections = [[1,0],[2,0]]
Output: 0


Constraints:

2 <= n <= 5 * 104
connections.length == n - 1
connections[i].length == 2
0 <= ai, bi <= n - 1
ai != bi


```

## 翻译

有 n 个城市和 n-1 条有向道路，形成一个树结构。需要重新定向一些道路，使得每个城市都能到达首都（城市 0）。返回需要改变方向的最小边数。

## Approach

**BFS/DFS 从城市 0 出发。** 将所有边视为无向边建图，但标记原始方向。从城市 0 开始遍历，对于每条边，如果原始方向是远离城市 0 的（即从当前节点指向邻居），则需要翻转，计数加一。

建图时，每条边 `connections[i] = [a, b]` 存储为：a 到 b 标记为 1（需要翻转），b 到 a 标记为 0（不需要翻转）。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
