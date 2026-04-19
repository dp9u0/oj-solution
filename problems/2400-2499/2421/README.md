# [2421] Number of Good Paths

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-good-paths/description/)

* algorithms
* Hard (56.31%)
* Likes:    2460
* Dislikes: 113
* Testcase Example:  '[1,3,2,1,3]\n[[0,1],[0,2],[2,3],[2,4]]'

```md
There is a tree (i.e. a connected, undirected graph with no cycles) consisting of n nodes numbered from 0 to n - 1 and exactly n - 1 edges.
You are given a 0-indexed integer array vals of length n where vals[i] denotes the value of the ith node. You are also given a 2D integer array edges where edges[i] = [ai, bi] denotes that there exists an undirected edge connecting nodes ai and bi.
A good path is a simple path that satisfies the following conditions:

The starting node and the ending node have the same value.
All nodes between the starting node and the ending node have values less than or equal to the starting node (i.e. the starting node&#39;s value should be the maximum value along the path).

Return the number of distinct good paths.
Note that a path and its reverse are counted as the same path. For example, 0 -> 1 is considered to be the same as 1 -> 0. A single node is also considered as a valid path.

Example 1:


Input: vals = [1,3,2,1,3], edges = [[0,1],[0,2],[2,3],[2,4]]
Output: 6
Explanation: There are 5 good paths consisting of a single node.
There is 1 additional good path: 1 -> 0 -> 2 -> 4.
(The reverse path 4 -> 2 -> 0 -> 1 is treated as the same as 1 -> 0 -> 2 -> 4.)
Note that 0 -> 2 -> 3 is not a good path because vals[2] > vals[0].

Example 2:


Input: vals = [1,1,2,2,3], edges = [[0,1],[1,2],[2,3],[2,4]]
Output: 7
Explanation: There are 5 good paths consisting of a single node.
There are 2 additional good paths: 0 -> 1 and 2 -> 3.

Example 3:


Input: vals = [1], edges = []
Output: 1
Explanation: The tree consists of only one node, so there is one good path.


Constraints:

n == vals.length
1 <= n <= 3 * 104
0 <= vals[i] <= 105
edges.length == n - 1
edges[i].length == 2
0 <= ai, bi < n
ai != bi
edges represents a valid tree.


```

## 题目翻译

给定一棵树，节点有值 vals[i]。好路径定义为：起终点值相同，路径上所有节点值不超过起终点值。统计好路径数量（单节点也算，正反算同一条）。

## 解题思路

**并查集 + 按值从小到大合并**

按节点值从小到大处理。维护并查集，每次将值为 v 的节点通过其相邻且值 ≤ v 的边连通。对每个连通分量中值为 v 的节点数 cnt，新增 C(cnt,2) 条好路径。每个单节点也是好路径，所以初始答案为 n。O(n * α(n)) 时间。

## Solution

[SourceCode](./solution.js)
