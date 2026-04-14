# [1277] Count Square Submatrices with All Ones

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-square-submatrices-with-all-ones/description/)

* algorithms
* Medium (80.69%)
* Likes:    5951
* Dislikes: 117
* Testcase Example:  '[[0,1,1,1],[1,1,1,1],[0,1,1,1]]'

```md
Given a m * n matrix of ones and zeros, return how many square submatrices have all ones.

Example 1:

Input: matrix =
[
[0,1,1,1],
[1,1,1,1],
[0,1,1,1]
]
Output: 15
Explanation:
There are 10 squares of side 1.
There are 4 squares of side 2.
There is  1 square of side 3.
Total number of squares = 10 + 4 + 1 = 15.

Example 2:

Input: matrix =
[
[1,0,1],
[1,1,0],
[1,1,0]
]
Output: 7
Explanation:
There are 6 squares of side 1.
There is 1 square of side 2.
Total number of squares = 6 + 1 = 7.


Constraints:

1 <= arr.length<= 300
1 <= arr[0].length<= 300
0 <= arr[i][j] <= 1


```

## 翻译

给定 0-1 矩阵，统计全为 1 的正方形子矩阵的个数。

## Approach

DP。dp[i][j] 表示以 (i,j) 为右下角的最大全 1 正方形边长，同时也是以 (i,j) 为右下角的全 1 正方形个数。

dp[i][j] = matrix[i][j] === 1 ? min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1 : 0

答案 = 所有 dp 值之和。

时间复杂度 O(mn)，空间复杂度 O(mn)。

## Solution

[SourceCode](./solution.js)
