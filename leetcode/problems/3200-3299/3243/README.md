# [3243] Shortest Distance After Road Addition Queries I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/description/)

* algorithms
* Medium (61.88%)
* Likes:    637
* Dislikes: 29
* Testcase Example:  '5\n[[2,4],[0,2],[0,4]]'

```md
You are given an integer n and a 2D integer array queries.
There are n cities numbered from 0 to n - 1. Initially, there is a unidirectional road from city i to city i + 1 for all 0 <= i < n - 1.
queries[i] = [ui, vi] represents the addition of a new unidirectional road from city ui to city vi. After each query, you need to find the length of the shortest path from city 0 to city n - 1.
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

3 <= n <= 500
1 <= queries.length <= 500
queries[i].length == 2
0 <= queries[i][0] < queries[i][1] < n
1 < queries[i][1] - queries[i][0]
There are no repeated roads among the queries.


```

## 中文翻译

n 个城市 0 到 n-1，初始有单向路 i→i+1。依次添加 queries 中的新路 [u, v]，每次添加后求 0 到 n-1 的最短路径长度。

## 解题思路

维护邻接表，每次添加边后 BFS 求最短路。n 和 queries 都 ≤ 500，总复杂度可接受。

时间复杂度：O(q * n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
