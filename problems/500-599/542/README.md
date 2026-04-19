# [542] 01 Matrix

## Description

[LeetCode Problem Description](https://leetcode.com/problems/01-matrix/description/)

* algorithms
* Medium (53.62%)
* Likes:    10745
* Dislikes: 451
* Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'

```md
Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
The distance between two cells sharing a common edge is 1.

Example 1:


Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0,0],[0,1,0],[0,0,0]]

Example 2:


Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
Output: [[0,0,0],[0,1,0],[1,2,1]]


Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 104
1 <= m * n <= 104
mat[i][j] is either 0 or 1.
There is at least one 0 in mat.


Note: This question is the same as 1765: https://leetcode.com/problems/map-of-highest-peak/

```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给定一个 m x n 的二进制矩阵 `mat`，返回每个格子到最近 0 的距离。相邻格子（共享边）的距离为 1。

**示例 1：** mat = [[0,0,0],[0,1,0],[0,0,0]] → [[0,0,0],[0,1,0],[0,0,0]]
**示例 2：** mat = [[0,0,0],[0,1,0],[1,1,1]] → [[0,0,0],[0,1,0],[1,2,1]]

**约束：** 1 <= m*n <= 10^4，矩阵中至少有一个 0

## Approach

多源 BFS。将所有 0 作为起点同时入队，BFS 向外扩展，第一次到达某格子时的距离就是最近距离。

- 遍历矩阵，所有 0 入队，1 标记为未访问（-1）
- BFS 逐层扩展，每个格子更新为父节点距离 +1

时间复杂度 O(m*n)，空间复杂度 O(m*n)。
