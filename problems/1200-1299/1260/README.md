# [1260] Shift 2D Grid

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shift-2d-grid/description/)

* algorithms
* Easy (67.99%)
* Likes:    1795
* Dislikes: 353
* Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]\n1'

```md
Given a 2D grid of size m x nand an integer k. You need to shift the gridk times.
In one shift operation:

Element at grid[i][j] moves to grid[i][j + 1].
Element at grid[i][n - 1] moves to grid[i + 1][0].
Element at grid[m- 1][n - 1] moves to grid[0][0].

Return the 2D grid after applying shift operation k times.

Example 1:


Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 1
Output: [[9,1,2],[3,4,5],[6,7,8]]

Example 2:


Input: grid = [[3,8,1,9],[19,7,2,5],[4,6,11,10],[12,0,21,13]], k = 4
Output: [[12,0,21,13],[3,8,1,9],[19,7,2,5],[4,6,11,10]]

Example 3:

Input: grid = [[1,2,3],[4,5,6],[7,8,9]], k = 9
Output: [[1,2,3],[4,5,6],[7,8,9]]


Constraints:

m ==grid.length
n ==grid[i].length
1 <= m <= 50
1 <= n <= 50
-1000 <= grid[i][j] <= 1000
0 <= k <= 100


```

## 翻译

给定m×n的2D网格，进行k次右移操作（行末移到下一行首，最后元素回到[0][0]）。返回移位后的网格。

## 解题思路

将2D网格展平为1D数组，k次右移等价于循环右移k%n*m位。展平后移动再重新填回2D。

## Solution

[SourceCode](./solution.js)
