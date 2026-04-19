# [2033] Minimum Operations to Make a Uni-Value Grid

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-make-a-uni-value-grid/description/)

* algorithms
* Medium (67.47%)
* Likes:    1113
* Dislikes: 75
* Testcase Example:  '[[2,4],[6,8]]\n2'

```md
You are given a 2D integer grid of size m x n and an integer x. In one operation, you can add x to or subtract x from any element in the grid.
A uni-value grid is a grid where all the elements of it are equal.
Return the minimum number of operations to make the grid uni-value. If it is not possible, return -1.

Example 1:


Input: grid = [[2,4],[6,8]], x = 2
Output: 4
Explanation: We can make every element equal to 4 by doing the following:
- Add x to 2 once.
- Subtract x from 6 once.
- Subtract x from 8 twice.
A total of 4 operations were used.

Example 2:


Input: grid = [[1,5],[2,3]], x = 1
Output: 5
Explanation: We can make every element equal to 3.

Example 3:


Input: grid = [[1,2],[3,4]], x = 2
Output: -1
Explanation: It is impossible to make every element equal.


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 105
1 <= m * n <= 105
1 <= x, grid[i][j] <= 104


```

## 中文翻译

给定 m x n 网格和整数 x。每次操作可以给任意元素加或减 x。求使所有元素相等的最少操作数，不可能则返回 -1。

## 解题思路

展平排序后，所有元素必须对 x 同余（否则无法通过加减 x 统一）。目标值取中位数可使总操作数最小（最小化绝对差之和）。

时间复杂度：O(mn log(mn))，空间复杂度：O(mn)

## Solution

[SourceCode](./solution.js)
