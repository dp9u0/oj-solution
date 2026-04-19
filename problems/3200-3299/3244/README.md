# [3244] Shortest Distance After Road Addition Queries II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-ii/description/)

* algorithms
* Hard (26.61%)
* Likes:    208
* Dislikes: 6
* Testcase Example:  '5\n[[2,4],[0,2],[0,4]]'

```md
You are given an integer n and a 2D integer array queries.
There are n cities numbered from 0 to n - 1. Initially, there is a unidirectional road from city i to city i + 1 for all 0 <= i < n - 1.
queries[i] = [ui, vi] represents the addition of a new unidirectional road from city ui to city vi. After each query, you need to find the length of the shortest path from city 0 to city n - 1.
There are no two queries such that queries[i][0] < queries[j][0] < queries[i][1] < queries[j][1].
Return an array answer where for each i in the range [0, queries.length - 1], answer[i] is the length of the shortest path from city 0 to city n - 1 after processing the first i + 1 queries.

Example 1:

Input: n = 5, queries = [[2,4],[0,2],[0,4]]
Output: [3,2,1]
Explanation:

After the addition of the road from 2 to 4, the length of the shortest path from 0 to 4 is 3.

After the addition of the road from 0 to 2, the length of the shortest path from 0 to 4 is 2.

After the addition of the road from 0 to 4, the length of the shortest path from 0 to 4 is 1.

Example 2:

Input: n = 4, queries = [[0,3],[0,2]]
Output: [1,1]
Explanation:

After the addition of the road from 0 to 3, the length of the shortest path from 0 to 3 is 1.

After the addition of the road from 0 to 2, the length of the shortest path remains 1.


Constraints:

3 <= n <= 105
1 <= queries.length <= 105
queries[i].length == 2
0 <= queries[i][0] < queries[i][1] < n
1 < queries[i][1] - queries[i][0]
There are no repeated roads among the queries.
There are no two queries such that i != j and queries[i][0] < queries[j][0] < queries[i][1] < queries[j][1].


```

## 翻译

给定 n 个城市（0 到 n-1），初始有单向道路 i → i+1。依次添加查询中的新道路 [u, v]，每次添加后求从城市 0 到 n-1 的最短路径长度。

关键约束：任意两个查询不交叉（laminar family），即不存在 a < c < b < d。

## 解题思路

**DSU + 路径压缩**：

维护 `next[i]` 数组，表示从节点 i 出发沿着当前最短路径能到达的下一个节点。初始 `next[i] = i + 1`。

维护 `ans = n - 1`（初始最短路径长度）。每次添加道路 [u, v]：
- 从 `next[u]` 开始遍历，将路径上 u 到 v 之间的中间节点逐一"合并"（设 `next[i] = v`）
- 每合并一个节点，`ans--`
- 更新 `next[u] = max(next[u], v)`

由于非交叉约束保证区间是嵌套或不相交的，已合并的节点不会重复计数。

摊还复杂度：每个节点最多被合并一次（`ans` 最多从 n-1 减到 1），总 O(n + q)。

## Solution

[SourceCode](./solution.js)
