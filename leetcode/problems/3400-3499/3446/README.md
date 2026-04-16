# [3446] Sort Matrix by Diagonals

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sort-matrix-by-diagonals/description/)

* algorithms
* Medium (84.66%)
* Likes:    511
* Dislikes: 104
* Testcase Example:  '[[1,7,3],[9,8,2],[4,5,6]]'

```md
You are given an n x n square matrix of integers grid. Return the matrix such that:

The diagonals in the bottom-left triangle (including the middle diagonal) are sorted in non-increasing order.
The diagonals in the top-right triangle are sorted in non-decreasing order.


Example 1:

Input: grid = [[1,7,3],[9,8,2],[4,5,6]]
Output: [[8,2,3],[9,6,7],[4,5,1]]
Explanation:

The diagonals with a black arrow (bottom-left triangle) should be sorted in non-increasing order:

[1, 8, 6] becomes [8, 6, 1].
[9, 5] and [4] remain unchanged.

The diagonals with a blue arrow (top-right triangle) should be sorted in non-decreasing order:

[7, 2] becomes [2, 7].
[3] remains unchanged.


Example 2:

Input: grid = [[0,1],[1,2]]
Output: [[2,1],[1,0]]
Explanation:

The diagonals with a black arrow must be non-increasing, so [0, 2] is changed to [2, 0]. The other diagonals are already in the correct order.

Example 3:

Input: grid = [[1]]
Output: [[1]]
Explanation:
Diagonals with exactly one element are already in order, so no changes are needed.


Constraints:

grid.length == grid[i].length == n
1 <= n <= 10
-105 <= grid[i][j] <= 105


```

## 题目翻译

给定 n x n 方阵 `grid`，返回处理后的矩阵：
- 左下三角（含主对角线）的对角线按非递增排序。
- 右上三角的对角线按非递减排序。

## 解题思路

提取每条对角线，排序后放回：
- 主对角线及左下方对角线：提取 → 降序排列 → 放回。
- 右上方对角线：提取 → 升序排列 → 放回。

对角线索引：同一对角线上的元素满足 `i - j = const`。

## Solution

[SourceCode](./solution.js)
