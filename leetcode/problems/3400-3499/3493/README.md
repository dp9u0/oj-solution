# [3493] Properties Graph

## Description

[LeetCode Problem Description](https://leetcode.com/problems/properties-graph/description/)

* algorithms
* Medium (48.64%)
* Likes:    96
* Dislikes: 15
* Testcase Example:  '[[1,2],[1,1],[3,4],[4,5],[5,6],[7,7]]\n1'

```md
You are given a 2D integer array properties having dimensions n x m and an integer k.
Define a function intersect(a, b) that returns the number of distinct integers common to both arrays a and b.
Construct an undirected graph where each index i corresponds to properties[i]. There is an edge between node i and node j if and only if intersect(properties[i], properties[j]) >= k, where i and j are in the range [0, n - 1] and i != j.
Return the number of connected components in the resulting graph.

Example 1:

Input: properties = [[1,2],[1,1],[3,4],[4,5],[5,6],[7,7]], k = 1
Output: 3
Explanation:
The graph formed has 3 connected components:


Example 2:

Input: properties = [[1,2,3],[2,3,4],[4,3,5]], k = 2
Output: 1
Explanation:
The graph formed has 1 connected component:


Example 3:

Input: properties = [[1,1],[1,1]], k = 2
Output: 2
Explanation:
intersect(properties[0], properties[1]) = 1, which is less than k. This means there is no edge between properties[0] and properties[1] in the graph.


Constraints:

1 <= n == properties.length <= 100
1 <= m == properties[i].length <= 100
1 <= properties[i][j] <= 100
1 <= k <= m


```

## 翻译

给定properties数组和k，若两个数组的去重交集大小>=k则连边，求连通分量数。

## 解题思路

用Set去重每个数组，两两计算交集大小，>=k则用并查集合并，最后统计连通分量数。

## Solution

[SourceCode](./solution.js)
