# [1886] Determine Whether Matrix Can Be Obtained By Rotation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/determine-whether-matrix-can-be-obtained-by-rotation/description/)

* algorithms
* Easy (68.20%)
* Likes:    1853
* Dislikes: 173
* Testcase Example:  '[[0,1],[1,0]]\n[[1,0],[0,1]]'

```md
Given two n x n binary matrices mat and target, return true if it is possible to make mat equal to target by rotating mat in 90-degree increments, or false otherwise.

Example 1:


Input: mat = [[0,1],[1,0]], target = [[1,0],[0,1]]
Output: true
Explanation: We can rotate mat 90 degrees clockwise to make mat equal target.

Example 2:


Input: mat = [[0,1],[1,1]], target = [[1,0],[0,1]]
Output: false
Explanation: It is impossible to make mat equal to target by rotating mat.

Example 3:


Input: mat = [[0,0,0],[0,1,0],[1,1,1]], target = [[1,1,1],[0,1,0],[0,0,0]]
Output: true
Explanation: We can rotate mat 90 degrees clockwise two times to make mat equal target.


Constraints:

n == mat.length == target.length
n == mat[i].length == target[i].length
1 <= n <= 10
mat[i][j] and target[i][j] are either 0 or 1.


```

## 翻译

给定两个 n x n 的二进制矩阵 mat 和 target，判断是否可以通过将 mat 顺时针旋转 90 度的整数倍来使其等于 target。如果可以返回 true，否则返回 false。

## 解题思路

将矩阵顺时针旋转 90 度的操作为：`rotated[i][j] = mat[n-1-j][i]`。

最多旋转 4 次（0°, 90°, 180°, 270°）即可判断。每次旋转后检查是否与 target 相等，若相等则返回 true。4 次旋转都不相等则返回 false。

时间复杂度：O(n²)，空间复杂度：O(n²)。

## Solution

[SourceCode](./solution.js)
