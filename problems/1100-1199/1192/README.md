# [1192] Critical Connections in a Network

## Description

[LeetCode Problem Description](https://leetcode.com/problems/critical-connections-in-a-network/description/)

* algorithms
* Hard (59.50%)
* Likes:    6711
* Dislikes: 196
* Testcase Example:  '4\n[[0,1],[1,2],[2,0],[1,3]]'

```md
There are n servers numbered from 0 to n - 1 connected by undirected server-to-server connections forming a network where connections[i] = [ai, bi] represents a connection between servers ai and bi. Any server can reach other servers directly or indirectly through the network.
A critical connection is a connection that, if removed, will make some servers unable to reach some other server.
Return all critical connections in the network in any order.

Example 1:


Input: n = 4, connections = [[0,1],[1,2],[2,0],[1,3]]
Output: [[1,3]]
Explanation: [[3,1]] is also accepted.

Example 2:

Input: n = 2, connections = [[0,1]]
Output: [[0,1]]


Constraints:

2 <= n <= 105
n - 1 <= connections.length <= 105
0 <= ai, bi <= n - 1
ai != bi
There are no repeated connections.


```

## 翻译

给定 n 个服务器和无向连接，找出所有关键连接（桥边），即删除后会使网络不连通的边。

## 解题思路

Tarjan 求桥。DFS 中维护 disc[u]（发现时间）和 low[u]（能回溯到的最早时间）。边 (u,v) 是桥当且仅当 low[v] > disc[u]。O(V+E)。

## Solution

[SourceCode](./solution.js)
