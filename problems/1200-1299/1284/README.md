# [1284] Minimum Number of Flips to Convert Binary Matrix to Zero Matrix

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-flips-to-convert-binary-matrix-to-zero-matrix/description/)

* algorithms
* Hard (72.45%)
* Likes:    1009
* Dislikes: 104
* Testcase Example:  '[[0,0],[0,1]]'

```md
Given a m x n binary matrix mat. In one step, you can choose one cell and flip it and all the four neighbors of it if they exist (Flip is changing 1 to 0 and 0 to 1). A pair of cells are called neighbors if they share one edge.
Return the minimum number of steps required to convert mat to a zero matrix or -1 if you cannot.
A binary matrix is a matrix with all cells equal to 0 or 1 only.
A zero matrix is a matrix with all cells equal to 0.

Example 1:


Input: mat = [[0,0],[0,1]]
Output: 3
Explanation: One possible solution is to flip (1, 0) then (0, 1) and finally (1, 1) as shown.

Example 2:

Input: mat = [[0]]
Output: 0
Explanation: Given matrix is a zero matrix. We do not need to change it.

Example 3:

Input: mat = [[1,0,0],[1,0,0]]
Output: -1
Explanation: Given matrix cannot be a zero matrix.


Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 3
mat[i][j] is either 0 or 1.


```

## Solution

[SourceCode](./solution.js)

---

### 题目翻译

给定 m×n 二进制矩阵。每次选择一个格子，翻转它及其上下左右邻居（0↔1）。求最少翻转次数使矩阵全变为 0，不可能返回 -1。

### 解题思路

**BFS + 状态压缩**

1. 将矩阵编码为 bitmask（最多 3×3=9 位，512 种状态）
2. 预计算每个位置的翻转 mask（该位 + 四邻位）
3. BFS 从初始状态搜到全 0 状态，记录步数
