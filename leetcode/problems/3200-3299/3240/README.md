# [3240] Minimum Number of Flips to Make Binary Grid Palindromic II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-ii/description/)

* algorithms
* Medium (25.51%)
* Likes:    143
* Dislikes: 57
* Testcase Example:  '[[1,0,0],[0,1,0],[0,0,1]]'

```md
You are given an m x n binary matrix grid.
A row or column is considered palindromic if its values read the same forward and backward.
You can flip any number of cells in grid from 0 to 1, or from 1 to 0.
Return the minimum number of cells that need to be flipped to make all rows and columns palindromic, and the total number of 1&#39;s in grid divisible by 4.

Example 1:

Input: grid = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3
Explanation:


Example 2:

Input: grid = [[0,1],[0,1],[0,0]]
Output: 2
Explanation:


Example 3:

Input: grid = [[1],[1]]
Output: 2
Explanation:



Constraints:

m == grid.length
n == grid[i].length
1 <= m * n <= 2 * 105
0 <= grid[i][j] <= 1


```

## 题目翻译

给定二进制矩阵，翻转最少的格子使所有行列回文且1的总数能被4整除。

## 解题思路

将格子按4对称位置分组。4元素组取众数（贡献≡0 mod 4）。2元素组(中心行/列)分类统计：(1,1)对数b、不同对数d。需偶数个对设为1。中心格子必须为0。根据b的奇偶性和d是否>0决定是否额外花费2。

## Solution

[SourceCode](./solution.js)
