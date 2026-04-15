# [1252] Cells with Odd Values in a Matrix

## Description

[LeetCode Problem Description](https://leetcode.com/problems/cells-with-odd-values-in-a-matrix/description/)

* algorithms
* Easy (79.73%)
* Likes:    1343
* Dislikes: 1561
* Testcase Example:  '2\n3\n[[0,1],[1,1]]'

```md
There is an m x n matrix that is initialized to all 0&#39;s. There is also a 2D array indices where each indices[i] = [ri, ci] represents a 0-indexed location to perform some increment operations on the matrix.
For each location indices[i], do both of the following:

Increment all the cells on row ri.
Increment all the cells on column ci.

Given m, n, and indices, return the number of odd-valued cells in the matrix after applying the increment to all locations in indices.

Example 1:


Input: m = 2, n = 3, indices = [[0,1],[1,1]]
Output: 6
Explanation: Initial matrix = [[0,0,0],[0,0,0]].
After applying first increment it becomes [[1,2,1],[0,1,0]].
The final matrix is [[1,3,1],[1,3,1]], which contains 6 odd numbers.

Example 2:


Input: m = 2, n = 2, indices = [[1,1],[0,0]]
Output: 0
Explanation: Final matrix = [[2,2],[2,2]]. There are no odd numbers in the final matrix.


Constraints:

1 <= m, n <= 50
1 <= indices.length <= 100
0 <= ri < m
0 <= ci < n


Follow up: Could you solve this in O(n + m + indices.length) time with only O(n + m) extra space?

```

## 中文翻译

m x n 矩阵初始全 0，对 indices 中每个 [ri, ci]，将第 ri 行所有元素 +1，第 ci 列所有元素 +1。求最终矩阵中奇数的个数。

## 解题思路

分别统计每行和每列被加的次数。cell(i,j) 的值 = rowCnt[i] + colCnt[j]，为奇数当且仅当 rowCnt[i] + colCnt[j] 为奇数，即一奇一偶。统计行中奇数次个数 rOdd，列中奇数次个数 cOdd，答案为 rOdd * (n - cOdd) + (m - rOdd) * cOdd。

时间复杂度：O(m + n + k)，空间复杂度：O(m + n)

## Solution

[SourceCode](./solution.js)
