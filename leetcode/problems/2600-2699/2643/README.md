# [2643] Row With Maximum Ones

## Description

[LeetCode Problem Description](https://leetcode.com/problems/row-with-maximum-ones/description/)

* algorithms
* Easy (74.29%)
* Likes:    602
* Dislikes: 23
* Testcase Example:  '[[0,1],[1,0]]'

```md
Given a m x n binary matrix mat, find the 0-indexed position of the row that contains the maximum count of ones, and the number of ones in that row.
In case there are multiple rows that have the maximum count of ones, the row with the smallest row number should be selected.
Return an array containing the index of the row, and the number of ones in it.

Example 1:

Input: mat = [[0,1],[1,0]]
Output: [0,1]
Explanation: Both rows have the same number of 1&#39;s. So we return the index of the smaller row, 0, and the maximum count of ones (1). So, the answer is [0,1].

Example 2:

Input: mat = [[0,0,0],[0,1,1]]
Output: [1,2]
Explanation: The row indexed 1 has the maximum count of ones (2). So we return its index, 1, and the count. So, the answer is [1,2].

Example 3:

Input: mat = [[0,0],[1,1],[0,0]]
Output: [1,2]
Explanation: The row indexed 1 has the maximum count of ones (2). So the answer is [1,2].


Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 100
mat[i][j] is either 0 or 1.


```

## 翻译

给定一个 m x n 的二进制矩阵，找到包含最多 1 的行的索引和该行中 1 的个数。如果有多行相同，返回行号最小的。

## Approach

遍历每一行，统计 1 的个数，记录最大值及其行索引。

时间复杂度 O(m*n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
