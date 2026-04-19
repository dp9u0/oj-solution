# [1697] Checking Existence of Edge Length Limited Paths

## Description

[LeetCode Problem Description](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/description/)

* algorithms
* Hard (63.22%)
* Likes:    2120
* Dislikes: 48
* Testcase Example:  '3\n[[0,1,2],[1,2,4],[2,0,8],[1,0,16]]\n[[0,1,2],[0,2,5]]'

```md
An undirected graph of n nodes is defined by edgeList, where edgeList[i] = [ui, vi, disi] denotes an edge between nodes ui and vi with distance disi. Note that there may be multiple edges between two nodes.
Given an array queries, where queries[j] = [pj, qj, limitj], your task is to determine for each queries[j] whether there is a path between pj and qj such that each edge on the path has a distance strictly less than limitj .
Return a boolean array answer, where answer.length == queries.length and the jth value of answer is true if there is a path for queries[j] is true, and false otherwise.

Example 1:


Input: n = 3, edgeList = [[0,1,2],[1,2,4],[2,0,8],[1,0,16]], queries = [[0,1,2],[0,2,5]]
Output: [false,true]
Explanation: The above figure shows the given graph. Note that there are two overlapping edges between 0 and 1 with distances 2 and 16.
For the first query, between 0 and 1 there is no path where each distance is less than 2, thus we return false for this query.
For the second query, there is a path (0 -> 1 -> 2) of two edges with distances less than 5, thus we return true for this query.

Example 2:


Input: n = 5, edgeList = [[0,1,10],[1,2,5],[2,3,9],[3,4,13]], queries = [[0,4,14],[1,4,13]]
Output: [true,false]
Explanation: The above figure shows the given graph.


Constraints:

2 <= n <= 105
1 <= edgeList.length, queries.length <= 105
edgeList[i].length == 3
queries[j].length == 3
0 <= ui, vi, pj, qj <= n - 1
ui != vi
pj != qj
1 <= disi, limitj <= 109
There may be multiple edges between two nodes.


```

## 翻译

给定无向图边列表和查询数组，每个查询问是否存在从 p 到 q 的路径，使得路径上每条边距离严格小于 limit。

## 解题思路

离线查询 + 并查集。将边按距离升序排列，查询按 limit 升序排列。依次处理每个查询时，将所有距离 < limit 的边加入并查集，然后检查 p 和 q 是否连通。O((E+Q)·α(n))。

## Solution

[SourceCode](./solution.js)
