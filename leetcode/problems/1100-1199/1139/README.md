# [1139] Largest 1-Bordered Square

## Description

[LeetCode Problem Description](https://leetcode.com/problems/largest-1-bordered-square/description/)

* algorithms
* Medium (52.06%)
* Likes:    769
* Dislikes: 118
* Testcase Example:  '[[1,1,1],[1,0,1],[1,1,1]]'

```md
Given a 2D grid of 0s and 1s, return the number of elements inthe largest squaresubgrid that has all 1s on its border, or 0 if such a subgriddoesn&#39;t exist in the grid.

Example 1:

Input: grid = [[1,1,1],[1,0,1],[1,1,1]]
Output: 9

Example 2:

Input: grid = [[1,1,0,0]]
Output: 1


Constraints:

1 <= grid.length <= 100
1 <= grid[0].length <= 100
grid[i][j] is 0 or 1


```

## 翻译

给定0/1矩阵，找出边框全为1的最大正方形子矩阵，返回其面积。

## 解题思路

预处理前缀：right[i][j]表示(i,j)向左连续1的个数，down[i][j]表示(i,j)向上连续1的个数。以(i,j)为右下角，枚举边长s，检查四条边：right[i][j]>=s, down[i][j]>=s, right[i-s+1][j]>=s, down[i][j-s+1]>=s。

## Solution

[SourceCode](./solution.js)
