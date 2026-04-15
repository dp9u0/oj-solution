# [3643] Flip Square Submatrix Vertically

## Description

[LeetCode Problem Description](https://leetcode.com/problems/flip-square-submatrix-vertically/description/)

* algorithms
* Easy (79.35%)
* Likes:    285
* Dislikes: 27
* Testcase Example:  '[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]\n1\n0\n3'

```md
You are given an m x n integer matrix grid, and three integers x, y, and k.
The integers x and y represent the row and column indices of the top-left corner of a square submatrix and the integer k represents the size (side length) of the square submatrix.
Your task is to flip the submatrix by reversing the order of its rows vertically.
Return the updated matrix.

Example 1:


Input: grid = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]], x = 1, y = 0, k = 3
Output: [[1,2,3,4],[13,14,15,8],[9,10,11,12],[5,6,7,16]]
Explanation:
The diagram above shows the grid before and after the transformation.

Example 2:
​​​​​​​

Input: grid = [[3,4,2,3],[2,3,4,2]], x = 0, y = 2, k = 2
Output: [[3,4,4,2],[2,3,2,3]]
Explanation:
The diagram above shows the grid before and after the transformation.


Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 50
1 <= grid[i][j] <= 100
0 <= x < m
0 <= y < n
1 <= k <= min(m - x, n - y)


```

## 中文翻译

给定 m×n 矩阵 grid，以及正方形子矩阵左上角 (x, y) 和边长 k，将该子矩阵的行上下翻转（垂直翻转），返回更新后的矩阵。

## 解题思路

在子矩阵范围内，交换第 x+i 行和第 x+k-1-i 行的对应列 [y, y+k-1]。

时间复杂度：O(k^2)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
