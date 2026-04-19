# [1072] Flip Columns For Maximum Number of Equal Rows

## Description

[LeetCode Problem Description](https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows/description/)

* algorithms
* Medium (78.55%)
* Likes:    1345
* Dislikes: 130
* Testcase Example:  '[[0,1],[1,1]]'

```md
You are given an m x n binary matrix matrix.
You can choose any number of columns in the matrix and flip every cell in that column (i.e., Change the value of the cell from 0 to 1 or vice versa).
Return the maximum number of rows that have all values equal after some number of flips.

Example 1:

Input: matrix = [[0,1],[1,1]]
Output: 1
Explanation: After flipping no values, 1 row has all values equal.

Example 2:

Input: matrix = [[0,1],[1,0]]
Output: 2
Explanation: After flipping values in the first column, both rows have equal values.

Example 3:

Input: matrix = [[0,0,0],[0,0,1],[1,1,0]]
Output: 2
Explanation: After flipping values in the first two columns, the last two rows have equal values.


Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 300
matrix[i][j] is either0 or 1.


```

## 翻译

给定 m×n 二进制矩阵，可以选择任意列进行翻转（0↔1）。返回翻转后所有值相等的行的最大数量。

## Approach

关键观察：两行可以通过相同的列翻转变为全等行，当且仅当它们完全相同或完全互补（逐位取反）。

因此，将每行规范化：如果第一个元素为 1，则整行取反；否则保持不变。这样相同/互补的行都映射到同一个模式。统计每种模式出现的次数，最大值即为答案。

时间复杂度 O(m×n)，空间复杂度 O(m×n)。

## Solution

[SourceCode](./solution.js)
