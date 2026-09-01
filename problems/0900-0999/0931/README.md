# [931] Minimum Falling Path Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-falling-path-sum/description/)

* algorithms
* Medium (60.80%)
* Likes:    7001
* Dislikes: 175
* Testcase Example:  '[[2,1,3],[6,5,4],[7,8,9]]'

```md
Given an n x n array of integers matrix, return the minimum sum of any falling path through matrix.
A falling path starts at any element in the first row and chooses the element in the next row that is either directly below or diagonally left/right. Specifically, the next element from position (row, col) will be (row + 1, col - 1), (row + 1, col), or (row + 1, col + 1).

Example 1:


Input: matrix = [[2,1,3],[6,5,4],[7,8,9]]
Output: 13
Explanation: There are two falling paths with a minimum sum as shown.

Example 2:


Input: matrix = [[-19,57],[-40,-5]]
Output: -59
Explanation: The falling path with a minimum sum is shown.


Constraints:

n == matrix.length == matrix[i].length
1 <= n <= 100
-100 <= matrix[i][j] <= 100


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个 n×n 的整数矩阵，返回下降路径的最小和。下降路径从第一行的任意元素开始，每一步选择下一行中正下方或左下/右下方对角线位置的元素。

## 解题思路

**经典二维 DP**

从第一行开始逐行向下递推。dp[j] 表示当前行第 j 列的下降路径最小和。

状态转移：dp[j] = matrix[i][j] + min(dp[j-1], dp[j], dp[j+1])（注意边界处理）。

可以原地修改 matrix 或使用额外数组。时间复杂度 O(n²)，空间复杂度 O(n)。
