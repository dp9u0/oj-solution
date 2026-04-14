# [2360] Longest Cycle in a Graph

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-cycle-in-a-graph/description/)

* algorithms
* Hard (50.55%)
* Likes:    2555
* Dislikes: 51
* Testcase Example:  '[3,3,4,2,3]'

```md
You are given a directed graph of n nodes numbered from 0 to n - 1, where each node has at most one outgoing edge.
The graph is represented with a given 0-indexed array edges of size n, indicating that there is a directed edge from node i to node edges[i]. If there is no outgoing edge from node i, then edges[i] == -1.
Return the length of the longest cycle in the graph. If no cycle exists, return -1.
A cycle is a path that starts and ends at the same node.

Example 1:


Input: edges = [3,3,4,2,3]
Output: 3
Explanation: The longest cycle in the graph is the cycle: 2 -> 4 -> 3 -> 2.
The length of this cycle is 3, so 3 is returned.

Example 2:


Input: edges = [2,-1,3,1]
Output: -1
Explanation: There are no cycles in this graph.


Constraints:

n == edges.length
2 <= n <= 105
-1 <= edges[i] < n
edges[i] != i


```

## 题目翻译

给定一个有向图，每个节点最多一条出边。用 edges 数组表示，edges[i] 表示节点 i 指向的节点，-1 表示无出边。返回图中最长环的长度，无环返回 -1。

## 解题思路

每个节点最多一条出边，所以从任意节点出发的路径要么走到 -1 终止，要么进入环。用时间戳法：从每个未访问节点出发，记录每步的时间戳。如果走到已访问节点且属于当前轮次，则发现环，环长 = 当前时间 - 该节点首次访问时间。

## Solution

[SourceCode](./solution.js)
