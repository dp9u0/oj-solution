# [3534] Path Existence Queries in a Graph II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/path-existence-queries-in-a-graph-ii/description/)

* algorithms
* Hard (26.45%)
* Likes:    52
* Dislikes: 2
* Testcase Example:  '5\n[1,8,3,4,2]\n3\n[[0,3],[2,4]]'

```md
You are given an integer n representing the number of nodes in a graph, labeled from 0 to n - 1.
You are also given an integer array nums of length n and an integer maxDiff.
An undirected edge exists between nodes i and j if the absolute difference between nums[i] and nums[j] is at most maxDiff (i.e.,
nums[i] - nums[j]
<= maxDiff).
You are also given a 2D integer array queries. For each queries[i] = [ui, vi], find the minimum distance between nodes ui and vi. If no path exists between the two nodes, return -1 for that query.
Return an array answer, where answer[i] is the result of the ith query.
Note: The edges between the nodes are unweighted.

Example 1:

Input: n = 5, nums = [1,8,3,4,2], maxDiff = 3, queries = [[0,3],[2,4]]
Output: [1,1]
Explanation:
The resulting graph is:




Query
Shortest Path
Minimum Distance


[0, 3]
0 &rarr; 3
1


[2, 4]
2 &rarr; 4
1



Thus, the output is [1, 1].

Example 2:

Input: n = 5, nums = [5,3,1,9,10], maxDiff = 2, queries = [[0,1],[0,2],[2,3],[4,3]]
Output: [1,2,-1,1]
Explanation:
The resulting graph is:





Query
Shortest Path
Minimum Distance


[0, 1]
0 &rarr; 1
1


[0, 2]
0 &rarr; 1 &rarr; 2
2


[2, 3]
None
-1


[4, 3]
3 &rarr; 4
1



Thus, the output is [1, 2, -1, 1].
Example 3:

Input: n = 3, nums = [3,6,1], maxDiff = 1, queries = [[0,0],[0,1],[1,2]]
Output: [0,-1,-1]
Explanation:
There are no edges between any two nodes because:

Nodes 0 and 1:
nums[0] - nums[1]
=
3 - 6
= 3 > 1
Nodes 0 and 2:
nums[0] - nums[2]
=
3 - 1
= 2 > 1
Nodes 1 and 2:
nums[1] - nums[2]
=
6 - 1
= 5 > 1

Thus, no node can reach any other node, and the output is [0, -1, -1].


Constraints:

1 <= n == nums.length <= 105
0 <= nums[i] <= 105
0 <= maxDiff <= 105
1 <= queries.length <= 105
queries[i] == [ui, vi]
0 <= ui, vi < n


```

## 题目翻译

n 个节点，i 和 j 之间有边当且仅当 |nums[i]-nums[j]| ≤ maxDiff。对每个查询 [u,v]，求最短路径长度，不可达返回 -1。

## 解题思路

**排序 + 连通分量 + 倍增跳表**

按值排序后，连通分量是连续段（相邻差 ≤ maxDiff）。在同一分量内，最短路只沿排序序递增方向走即可。预处理 right[i]（从 i 一步能到的最右位置），然后用倍增 up[k][i] 表示从 i 走 2^k 步能到的最右位置。查询时二进制分解步数。O((n+q) log n) 时间。

## Solution

[SourceCode](./solution.js)
