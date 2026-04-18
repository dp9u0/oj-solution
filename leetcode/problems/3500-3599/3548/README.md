# [3548] Equal Sum Grid Partition II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/equal-sum-grid-partition-ii/description/)

* algorithms
* Hard (39.43%)
* Likes:    335
* Dislikes: 75
* Testcase Example:  '[[1,4],[2,3]]'

```md
You are given an m x n matrix grid of positive integers. Your task is to determine if it is possible to make either one horizontal or one vertical cut on the grid such that:

Each of the two resulting sections formed by the cut is non-empty.
The sum of elements in both sections is equal, or can be made equal by discounting at most one single cell in total (from either section).
If a cell is discounted, the rest of the section must remain connected.

Return true if such a partition exists; otherwise, return false.
Note: A section is connected if every cell in it can be reached from any other cell by moving up, down, left, or right through other cells in the section.

Example 1:

Input: grid = [[1,4],[2,3]]
Output: true
Explanation:


A horizontal cut after the first row gives sums 1 + 4 = 5 and 2 + 3 = 5, which are equal. Thus, the answer is true.


Example 2:

Input: grid = [[1,2],[3,4]]
Output: true
Explanation:


A vertical cut after the first column gives sums 1 + 3 = 4 and 2 + 4 = 6.
By discounting 2 from the right section (6 - 2 = 4), both sections have equal sums and remain connected. Thus, the answer is true.


Example 3:

Input: grid = [[1,2,4],[2,3,5]]
Output: false
Explanation:


A horizontal cut after the first row gives 1 + 2 + 4 = 7 and 2 + 3 + 5 = 10.
By discounting 3 from the bottom section (10 - 3 = 7), both sections have equal sums, but they do not remain connected as it splits the bottom section into two parts ([2] and [5]). Thus, the answer is false.


Example 4:

Input: grid = [[4,1,8],[3,2,6]]
Output: false
Explanation:
No valid cut exists, so the answer is false.


Constraints:

1 <= m == grid.length <= 105
1 <= n == grid[i].length <= 105
2 <= m * n <= 105
1 <= grid[i][j] <= 105


```

## 题目翻译

给定 m×n 正整数矩阵，判断能否水平或垂直切一刀，使两部分（可各忽略至多一个格子后）和相等，且忽略后每部分仍然连通。

## 解题思路

**前缀和 + 集合查询**

先处理无折扣情况：水平/垂直前缀和，看是否有切点使两部分和相等。

有折扣时：两部分和差为 diff，需要从某部分去掉一个值 v 使 diff = v 或 diff = -v。关键是去掉的格子不能导致该部分不连通。对于水平切在行 i 之后，上半部分去掉的格子必须是 (0,0)、(0,n-1)、(i,0) 或 (i,n-1)（角上的格子）；下半部分类似。用 Set 存储可去除值，O(m*n) 预处理。

## Solution

[SourceCode](./solution.js)
