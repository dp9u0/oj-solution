# [3239] Minimum Number of Flips to Make Binary Grid Palindromic I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/description/)

* algorithms
* Medium (74.84%)
* Likes:    82
* Dislikes: 10
* Testcase Example:  '[[1,0,0],[0,0,0],[0,0,1]]'

```md
You are given an m x n binary matrix grid.
A row or column is considered palindromic if its values read the same forward and backward.
You can flip any number of cells in grid from 0 to 1, or from 1 to 0.
Return the minimum number of cells that need to be flipped to make either all rows palindromic or all columns palindromic.

Example 1:

Input: grid = [[1,0,0],[0,0,0],[0,0,1]]
Output: 2
Explanation:

Flipping the highlighted cells makes all the rows palindromic.

Example 2:

Input: grid = [[0,1],[0,1],[0,0]]
Output: 1
Explanation:

Flipping the highlighted cell makes all the columns palindromic.

Example 3:

Input: grid = [[1],[0]]
Output: 0
Explanation:
All rows are already palindromic.


Constraints:

m == grid.length
n == grid[i].length
1 <= m * n <= 2 * 105
0 <= grid[i][j] <= 1


```

## 翻译

给定一个 m x n 的二进制矩阵 grid。如果一行或一列的值从前往后读和从后往前读相同，则称其为回文的。你可以翻转任意数量的格子（0变1或1变0）。返回使所有行都回文，或所有列都回文所需的最少翻转次数。

## 解题思路

分别计算使所有行回文和使所有列回文所需的翻转次数，取较小值。

对于每一行（或列），从两端向中间配对，统计每对不同的位置数（每对需要翻转1次使其相同）。遍历所有行/列求和，两者取最小值。时间复杂度 O(m*n)。

## Solution

[SourceCode](./solution.js)
