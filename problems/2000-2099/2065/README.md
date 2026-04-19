# [2065] Maximum Path Quality of a Graph

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-path-quality-of-a-graph/description/)

* algorithms
* Hard (62.00%)
* Likes:    726
* Dislikes: 53
* Testcase Example:  '[0,32,10,43]\n[[0,1,10],[1,2,15],[0,3,10]]\n49'

```md
There is an undirected graph with n nodes numbered from 0 to n - 1 (inclusive). You are given a 0-indexed integer array values where values[i] is the value of the ith node. You are also given a 0-indexed 2D integer array edges, where each edges[j] = [uj, vj, timej] indicates that there is an undirected edge between the nodes uj and vj, and it takes timej seconds to travel between the two nodes. Finally, you are given an integer maxTime.
A valid path in the graph is any path that starts at node 0, ends at node 0, and takes at most maxTime seconds to complete. You may visit the same node multiple times. The quality of a valid path is the sum of the values of the unique nodes visited in the path (each node&#39;s value is added at most once to the sum).
Return the maximum quality of a valid path.
Note: There are at most four edges connected to each node.

Example 1:


Input: values = [0,32,10,43], edges = [[0,1,10],[1,2,15],[0,3,10]], maxTime = 49
Output: 75
Explanation:
One possible path is 0 -> 1 -> 0 -> 3 -> 0. The total time taken is 10 + 10 + 10 + 10 = 40 <= 49.
The nodes visited are 0, 1, and 3, giving a maximal path quality of 0 + 32 + 43 = 75.

Example 2:


Input: values = [5,10,15,20], edges = [[0,1,10],[1,2,10],[0,3,10]], maxTime = 30
Output: 25
Explanation:
One possible path is 0 -> 3 -> 0. The total time taken is 10 + 10 = 20 <= 30.
The nodes visited are 0 and 3, giving a maximal path quality of 5 + 20 = 25.

Example 3:


Input: values = [1,2,3,4], edges = [[0,1,10],[1,2,11],[2,3,12],[1,3,13]], maxTime = 50
Output: 7
Explanation:
One possible path is 0 -> 1 -> 3 -> 1 -> 0. The total time taken is 10 + 13 + 13 + 10 = 46 <= 50.
The nodes visited are 0, 1, and 3, giving a maximal path quality of 1 + 2 + 4 = 7.


Constraints:

n == values.length
1 <= n <= 1000
0 <= values[i] <= 108
0 <= edges.length <= 2000
edges[j].length == 3
0 <= uj < vj <= n - 1
10 <= timej, maxTime <= 100
All the pairs [uj, vj] are unique.
There are at most four edges connected to each node.
The graph may not be connected.


```

## 题目翻译

给定无向图，每个节点有权值。找一条从 0 出发、回到 0 的路径，总时间 <= maxTime，质量 = 访问过的不同节点权值之和。求最大质量。

## 解题思路

**DFS + Dijkstra 剪枝**

1. 先用 Dijkstra 从节点 0 求出每个节点到 0 的最短距离
2. DFS 搜索所有路径，剪枝条件：当前时间 + 到下一节点的时间 + 从下一节点返回 0 的最短时间 > maxTime
3. 用 visited 数组跟踪已访问节点，首次访问时加 quality，回溯时减去

由于每节点最多 4 条边，time >= 10，maxTime <= 100，DFS 深度最多 10 层，搜索空间可控。

## Solution

[SourceCode](./solution.js)
