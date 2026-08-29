# [3898] Find the Degree of Each Vertex

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-degree-of-each-vertex/description/)

* algorithms
* Easy (91.88%)
* Likes:    64
* Dislikes: 2
* Testcase Example:  '[[0,1,1],[1,0,1],[1,1,0]]'

```md
You are given a 2D integer array matrix of size n x n representing the adjacency matrix of an undirected graph with n vertices labeled from 0 to n - 1.

matrix[i][j] = 1 indicates that there is an edge between vertices i and j.
matrix[i][j] = 0 indicates that there is no edge between vertices i and j.

The degree of a vertex is the number of edges connected to it.
Return an integer array ans of size n where ans[i] represents the degree of vertex i.

Example 1:


Input: matrix = [[0,1,1],[1,0,1],[1,1,0]]
Output: [2,2,2]
Explanation:

Vertex 0 is connected to vertices 1 and 2, so its degree is 2.
Vertex 1 is connected to vertices 0 and 2, so its degree is 2.
Vertex 2 is connected to vertices 0 and 1, so its degree is 2.

Thus, the answer is [2, 2, 2].

Example 2:


Input: matrix = [[0,1,0],[1,0,0],[0,0,0]]
Output: [1,1,0]
Explanation:

Vertex 0 is connected to vertex 1, so its degree is 1.
Vertex 1 is connected to vertex 0, so its degree is 1.
Vertex 2 is not connected to any vertex, so its degree is 0.

Thus, the answer is [1, 1, 0].

Example 3:

Input: matrix = [[0]]
Output: [0]
Explanation:
There is only one vertex and it has no edges connected to it. Thus, the answer is [0].


Constraints:

1 <= n == matrix.length == matrix[i].length <= 100​​​​​​​
​​​​​​​matrix[i][i] == 0
matrix[i][j] is either 0 or 1
matrix[i][j] == matrix[j][i]


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 `n x n` 邻接矩阵 `matrix` 表示 n 个顶点的无向图（`matrix[i][j]=1` 表示 i、j 间有边）。返回数组 `ans`，`ans[i]` 为顶点 i 的度数。

约束：`1 <= n <= 100`，无自环，矩阵对称。

## 解题思路

无向图邻接矩阵每行求和即为该顶点度数。O(n²)。
