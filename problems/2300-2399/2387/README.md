# [2387] 行排序矩阵的中位数

## Description


```md
https://leetcode.cn/problems/median-of-a-row-wise-sorted-matrix/description/
* algorithms
* Medium (67.73%)
* Likes:    3
* Dislikes: -
* Testcase Example:  '[[1,1,2],[2,3,3],[1,3,4]]'
给定一个包含 奇数 个整数的 m x n 矩阵 grid，其中每一行按 非递减 的顺序排序，返回矩阵的 中位数。
你必须以 O(m * log(n)) 的时间复杂度来解决这个问题。

示例 1:
输入: grid = [[1,1,2],[2,3,3],[1,3,4]]
输出: 2
解释: 矩阵的元素按顺序排列为 1,1,1,2,2,3,3,3,4。中位数是 2。
示例 2:
输入: grid = [[1,1,3,3,4]]
输出: 3
解释: 矩阵的元素按顺序排列为 1,1,3,3,4。中位数是 3。

提示:
m == grid.length
n == grid[i].length
1 <= m, n <= 500
m 和 n 都是奇数。
1 <= grid[i][j] <= 106
grid[i] 按非递减顺序排序
Hint 1: How can you use the fact that the rows are sorted in non-decreasing order to solve the problem efficiently?
Hint 2: Try to binary search the answer.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given an m x n matrix (m, n odd, total odd) with each row sorted non-decreasing, return the median in O(m log n) time.

Example 1:
Input: grid = [[1,1,2],[2,3,3],[1,3,4]]
Output: 2

Example 2:
Input: grid = [[1,1,3,3,4]]
Output: 3

Constraints: 1 <= m, n <= 500, 1 <= grid[i][j] <= 10^6.

## Approach

Binary search the answer x over [1, 10^6]: count elements <= x across all rows (per-row upper-bound binary search, O(m log n) per check). The median is the smallest x whose count >= (m*n+1)/2 — it exists in the matrix since below it the count is < half and the median's own count pushes past half.
