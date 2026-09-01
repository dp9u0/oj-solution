# [802] Find Eventual Safe States

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-eventual-safe-states/description/)

* algorithms
* Medium (70.55%)
* Likes:    7020
* Dislikes: 528
* Testcase Example:  '[[1,2],[2,3],[5],[0],[5],[],[]]'

```md
There is a directed graph of n nodes with each node labeled from 0 to n - 1. The graph is represented by a 0-indexed 2D integer array graph where graph[i] is an integer array of nodes adjacent to node i, meaning there is an edge from node i to each node in graph[i].
A node is a terminal node if there are no outgoing edges. A node is a safe node if every possible path starting from that node leads to a terminal node (or another safe node).
Return an array containing all the safe nodes of the graph. The answer should be sorted in ascending order.

Example 1:


Input: graph = [[1,2],[2,3],[5],[0],[5],[],[]]
Output: [2,4,5,6]
Explanation: The given graph is shown above.
Nodes 5 and 6 are terminal nodes as there are no outgoing edges from either of them.
Every path starting at nodes 2, 4, 5, and 6 all lead to either node 5 or 6.
Example 2:

Input: graph = [[1,2,3,4],[1,2],[3,4],[0,4],[]]
Output: [4]
Explanation:
Only node 4 is a terminal node, and every path starting at node 4 leads to node 4.


Constraints:

n == graph.length
1 <= n <= 104
0 <= graph[i].length <= n
0 <= graph[i][j] <= n - 1
graph[i] is sorted in a strictly increasing order.
The graph may contain self-loops.
The number of edges in the graph will be in the range [1, 4 * 104].


```

## 题目翻译

给定有向图，节点 0 到 n-1。终端节点无出边。安全节点是从它出发的所有路径都到达终端节点。返回所有安全节点（升序）。

## 解题思路

三色标记 DFS：0=未访问，1=在栈中（灰色），2=已完成且安全。DFS 遍历，若遇到灰色节点则存在环，不安全。所有后继都安全则标记为安全。

## Solution

[SourceCode](./solution.js)
