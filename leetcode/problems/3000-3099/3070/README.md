# [3070] Count Submatrices with Top-Left Element and Sum Less Than k

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k/description/)

* algorithms
* Medium (74.80%)
* Likes:    465
* Dislikes: 22
* Testcase Example:  '[[7,6,3],[6,6,1]]\n18'

```md
You are given a 0-indexed integer matrix grid and an integer k.
Return the number of submatrices that contain the top-left element of the grid, and have a sum less than or equal to k.

Example 1:


Input: grid = [[7,6,3],[6,6,1]], k = 18
Output: 4
Explanation: There are only 4 submatrices, shown in the image above, that contain the top-left element of grid, and have a sum less than or equal to 18.
Example 2:


Input: grid = [[7,2,9],[1,5,0],[2,6,6]], k = 20
Output: 6
Explanation: There are only 6 submatrices, shown in the image above, that contain the top-left element of grid, and have a sum less than or equal to 20.


Constraints:

m == grid.length
n == grid[i].length
1 <= n, m <= 1000
0 <= grid[i][j] <= 1000
1 <= k <= 109


```

## 中文翻译

给定矩阵 grid 和整数 k，求包含左上角元素 (0,0) 且元素和 ≤ k 的子矩阵个数。

## 解题思路

所有满足条件的子矩阵都从 (0,0) 开始到某个 (i,j)。用二维前缀和计算每个 (i,j) 的子矩阵和，统计 ≤ k 的个数。

时间复杂度：O(m * n)，空间复杂度：O(1)（原地修改）

## Solution

[SourceCode](./solution.js)
