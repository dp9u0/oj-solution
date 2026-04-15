# [3546] Equal Sum Grid Partition I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/equal-sum-grid-partition-i/description/)

* algorithms
* Medium (52.83%)
* Likes:    396
* Dislikes: 18
* Testcase Example:  '[[1,4],[2,3]]'

```md
You are given an m x n matrix grid of positive integers. Your task is to determine if it is possible to make either one horizontal or one vertical cut on the grid such that:

Each of the two resulting sections formed by the cut is non-empty.
The sum of the elements in both sections is equal.

Return true if such a partition exists; otherwise return false.

Example 1:

Input: grid = [[1,4],[2,3]]
Output: true
Explanation:

A horizontal cut between row 0 and row 1 results in two non-empty sections, each with a sum of 5. Thus, the answer is true.

Example 2:

Input: grid = [[1,3],[2,4]]
Output: false
Explanation:
No horizontal or vertical cut results in two non-empty sections with equal sums. Thus, the answer is false.


Constraints:

1 <= m == grid.length <= 105
1 <= n == grid[i].length <= 105
2 <= m * n <= 105
1 <= grid[i][j] <= 105


```

## 题目翻译

给定正整数矩阵 grid，判断能否做一次水平或垂直切割，使两部分都非空且元素和相等。

## 解题思路

前缀和。分别计算行前缀和与列前缀和，检查是否存在某个切割位置使得上半/左半之和等于总/2。

时间复杂度 O(m*n)

## Solution

[SourceCode](./solution.js)
