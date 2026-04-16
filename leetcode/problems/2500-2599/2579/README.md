# [2579] Count Total Number of Colored Cells

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-total-number-of-colored-cells/description/)

* algorithms
* Medium (66.11%)
* Likes:    846
* Dislikes: 95
* Testcase Example:  '1'

```md
There exists an infinitely large two-dimensional grid of uncolored unit cells. You are given a positive integer n, indicating that you must do the following routine for n minutes:

At the first minute, color any arbitrary unit cell blue.
Every minute thereafter, color blue every uncolored cell that touches a blue cell.

Below is a pictorial representation of the state of the grid after minutes 1, 2, and 3.

Return the number of colored cells at the end of n minutes.

Example 1:

Input: n = 1
Output: 1
Explanation: After 1 minute, there is only 1 blue cell, so we return 1.

Example 2:

Input: n = 2
Output: 5
Explanation: After 2 minutes, there are 4 colored cells on the boundary and 1 in the center, so we return 5.


Constraints:

1 <= n <= 105


```

## 中文翻译

在无限网格上，第 1 分钟涂一个格子，之后每分钟涂所有与已涂格子相邻的格子。求 n 分钟后的涂色格子数。

## 解题思路

形成菱形扩展。n=1: 1, n=2: 5, n=3: 13。规律为 1 + 4*(1+2+...+(n-1)) = 1 + 2*n*(n-1) = 2*n*n - 2*n + 1。

## Solution

[SourceCode](./solution.js)
