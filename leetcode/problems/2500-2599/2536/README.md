# [2536] Increment Submatrices by One

## Description

[LeetCode Problem Description](https://leetcode.com/problems/increment-submatrices-by-one/description/)

* algorithms
* Medium (73.81%)
* Likes:    888
* Dislikes: 81
* Testcase Example:  '3\n[[1,1,2,2],[0,0,1,1]]'

```md
You are given a positive integer n, indicating that we initially have an n x n0-indexed integer matrix mat filled with zeroes.
You are also given a 2D integer array query. For each query[i] = [row1i, col1i, row2i, col2i], you should do the following operation:

Add 1 to every element in the submatrix with the top left corner (row1i, col1i) and the bottom right corner (row2i, col2i). That is, add 1 to mat[x][y] for all row1i <= x <= row2i and col1i <= y <= col2i.

Return the matrix mat after performing every query.

Example 1:


Input: n = 3, queries = [[1,1,2,2],[0,0,1,1]]
Output: [[1,1,0],[1,2,1],[0,1,1]]
Explanation: The diagram above shows the initial matrix, the matrix after the first query, and the matrix after the second query.
- In the first query, we add 1 to every element in the submatrix with the top left corner (1, 1) and bottom right corner (2, 2).
- In the second query, we add 1 to every element in the submatrix with the top left corner (0, 0) and bottom right corner (1, 1).

Example 2:


Input: n = 2, queries = [[0,0,1,1]]
Output: [[1,1],[1,1]]
Explanation: The diagram above shows the initial matrix and the matrix after the first query.
- In the first query we add 1 to every element in the matrix.


Constraints:

1 <= n <= 500
1 <= queries.length <= 104
0 <= row1i <= row2i < n
0 <= col1i <= col2i < n


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 n×n 零矩阵和若干查询 [r1,c1,r2,c2]，每个查询将子矩阵内所有元素加 1。返回最终矩阵。

## 解题思路

二维差分。对每个查询，diff[r1][c1]+=1, diff[r1][c2+1]-=1, diff[r2+1][c1]-=1, diff[r2+1][c2+1]+=1。最后做二维前缀和还原。O(n²+q)。
