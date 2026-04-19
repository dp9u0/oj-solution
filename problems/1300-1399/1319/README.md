# [1319] Number of Operations to Make Network Connected

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-operations-to-make-network-connected/description/)

* algorithms
* Medium (66.36%)
* Likes:    5603
* Dislikes: 85
* Testcase Example:  '4\n[[0,1],[0,2],[1,2]]'

```md
There are n computers numbered from 0 to n - 1 connected by ethernet cables connections forming a network where connections[i] = [ai, bi] represents a connection between computers ai and bi. Any computer can reach any other computer directly or indirectly through the network.
You are given an initial computer network connections. You can extract certain cables between two directly connected computers, and place them between any pair of disconnected computers to make them directly connected.
Return the minimum number of times you need to do this in order to make all the computers connected. If it is not possible, return -1.

Example 1:


Input: n = 4, connections = [[0,1],[0,2],[1,2]]
Output: 1
Explanation: Remove cable between computer 1 and 2 and place between computers 1 and 3.

Example 2:


Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2],[1,3]]
Output: 2

Example 3:

Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2]]
Output: -1
Explanation: There are not enough cables.


Constraints:

1 <= n <= 105
1 <= connections.length <= min(n * (n - 1) / 2, 105)
connections[i].length == 2
0 <= ai, bi < n
ai != bi
There are no repeated connections.
No two computers are connected by more than one cable.


```

## 题目翻译

有 n 台编号从 0 到 n-1 的计算机通过以太网线缆 connections 连接，其中 connections[i] = [ai, bi] 表示计算机 ai 和 bi 之间有连接。你可以拔掉某两个直接相连计算机之间的线缆，并将其放置到任意两个未连接的计算机之间使它们直接相连。

返回使所有计算机连通所需的最少操作次数。如果不可能，返回 -1。

**示例 1：**
输入：n = 4, connections = [[0,1],[0,2],[1,2]]
输出：1
解释：拔掉计算机 1 和 2 之间的线缆，放到计算机 1 和 3 之间。

**示例 2：**
输入：n = 6, connections = [[0,1],[0,2],[0,3],[1,2],[1,3]]
输出：2

**示例 3：**
输入：n = 6, connections = [[0,1],[0,2],[0,3],[1,2]]
输出：-1
解释：线缆数量不足。

**约束：**
- 1 <= n <= 10^5
- connections.length <= min(n*(n-1)/2, 10^5)

## 解题思路 (Approach)

使用并查集（Union-Find）。将所有连接进行 union 操作，统计冗余边数（union 失败的次数，即两个节点已经在同一连通分量中）。连通分量数为 n - 成功 union 的次数。如果冗余边数 >= 连通分量数 - 1，则答案为连通分量数 - 1；否则返回 -1。

时间复杂度：O(n + m * α(n))，空间复杂度：O(n)。

## Solution

[SourceCode](./solution.js)
