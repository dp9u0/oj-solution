# [2661] First Completely Painted Row or Column

## Description

[LeetCode Problem Description](https://leetcode.com/problems/first-completely-painted-row-or-column/description/)

* algorithms
* Medium (63.86%)
* Likes:    1110
* Dislikes: 33
* Testcase Example:  '[1,3,4,2]\n[[1,4],[2,3]]'

```md
You are given a 0-indexed integer array arr, and an m x n integer matrix mat. arr and mat both contain all the integers in the range [1, m * n].
Go through each index i in arr starting from index 0 and paint the cell in mat containing the integer arr[i].
Return the smallest index i at which either a row or a column will be completely painted in mat.

Example 1:


Input: arr = [1,3,4,2], mat = [[1,4],[2,3]]
Output: 2
Explanation: The moves are shown in order, and both the first row and second column of the matrix become fully painted at arr[2].

Example 2:


Input: arr = [2,8,7,4,1,3,5,6,9], mat = [[3,2,5],[1,4,6],[8,7,9]]
Output: 3
Explanation: The second column becomes fully painted at arr[3].


Constraints:

m == mat.length
n = mat[i].length
arr.length == m * n
1 <= m, n <= 105
1 <= m * n <= 105
1 <= arr[i], mat[r][c] <= m * n
All the integers of arr are unique.
All the integers of mat are unique.


```

## 题目翻译

给定数组 arr 和矩阵 mat，按 arr 的顺序逐个涂色 mat 中的对应单元格。返回最小的索引 i，使得此时 mat 中某一行或某一列被完全涂色。

## 解题思路

先建立 mat 中每个值到 (row, col) 的映射。然后遍历 arr，用两个数组分别记录每行和每列已涂色的数量，当某行或某列计数达到 n 或 m 时返回当前索引。

时间复杂度：O(m×n)，空间复杂度：O(m×n)

## Solution

[SourceCode](./solution.js)
