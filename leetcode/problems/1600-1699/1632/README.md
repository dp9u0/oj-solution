# [1632] Rank Transform of a Matrix

## Description

[LeetCode Problem Description](https://leetcode.com/problems/rank-transform-of-a-matrix/description/)

* algorithms
* Hard (42.18%)
* Likes:    935
* Dislikes: 60
* Testcase Example:  '[[1,2],[3,4]]'

```md
Given an m x n matrix, return a new matrix answer where answer[row][col] is the rank of matrix[row][col].
The rank is an integer that represents how large an element is compared to other elements. It is calculated using the following rules:

The rank is an integer starting from 1.
If two elements p and q are in the same row or column, then:

If p < q then rank(p) < rank(q)
If p == q then rank(p) == rank(q)
If p > q then rank(p) > rank(q)


The rank should be as small as possible.

The test cases are generated so that answer is unique under the given rules.

Example 1:


Input: matrix = [[1,2],[3,4]]
Output: [[1,2],[2,3]]
Explanation:
The rank of matrix[0][0] is 1 because it is the smallest integer in its row and column.
The rank of matrix[0][1] is 2 because matrix[0][1] > matrix[0][0] and matrix[0][0] is rank 1.
The rank of matrix[1][0] is 2 because matrix[1][0] > matrix[0][0] and matrix[0][0] is rank 1.
The rank of matrix[1][1] is 3 because matrix[1][1] > matrix[0][1], matrix[1][1] > matrix[1][0], and both matrix[0][1] and matrix[1][0] are rank 2.

Example 2:


Input: matrix = [[7,7],[7,7]]
Output: [[1,1],[1,1]]

Example 3:


Input: matrix = [[20,-21,14],[-19,4,19],[22,-47,24],[-19,4,19]]
Output: [[4,2,3],[1,3,4],[5,1,6],[1,3,4]]


Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 500
-109 <= matrix[row][col] <= 109


```

## 翻译

给定矩阵，对每个元素分配排名（从1开始），满足同行同列中大小关系与排名一致，且排名尽量小。相同值排名相同。

## 解题思路

按值从小到大处理。相等值的格子若同行或同列则必须同排名，用并查集合并（行ID 0..m-1，列ID m..m+n-1，union(r, m+c)）。对每个连通分量，rank = max(该行最大rank, 该列最大rank) + 1。O(mn·α(mn))。

## Solution

[SourceCode](./solution.js)
