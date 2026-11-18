# [562] 矩阵中最长的连续1线段

## Description


```md
https://leetcode.cn/problems/longest-line-of-consecutive-one-in-matrix/description/
* algorithms
* Medium (50.62%)
* Likes:    86
* Dislikes: -
* Testcase Example:  '[[0,1,1,0],[0,1,1,0],[0,0,0,1]]'
给定一个 m x n 的二进制矩阵 mat ，返回矩阵中最长的连续1线段。
这条线段可以是水平的、垂直的、对角线的或者反对角线的。

示例 1:
输入: mat = [[0,1,1,0],[0,1,1,0],[0,0,0,1]]
输出: 3
示例 2:
输入: mat = [[1,1,1,1],[0,1,1,0],[0,0,0,1]]
输出: 4

提示:
m == mat.length
n == mat[i].length
1 <= m, n <= 104
1 <= m * n <= 104
mat[i][j] 不是 0 就是 1.
Hint 1: One solution is to count ones in each direction separately and find the longest line. Don't you think  it will take too much lines of code?
Hint 2: Is it possible to use some extra space to make the solution simple?
Hint 3: Can we use dynamic programming to make use of intermediate results?
Hint 4: Think of a 3D array which can be used to store the longest line obtained so far for each direction.

```

## Solution

[SourceCode](./solution.js)

## Translation

Longest line of consecutive 1s in a binary matrix; the line may be horizontal, vertical, diagonal, or anti-diagonal.

- Example 1: [[0,1,1,0],[0,1,1,0],[0,0,0,1]] → `3` (diagonal (0,1)-(1,2)-(2,3))
- Example 2: [[1,1,1,1],[0,1,1,0],[0,0,0,1]] → `4` (top row)

Constraints: m·n ≤ 10^4 (Hint 4 suggests a 3D DP array per direction).

## Approach

**方向 DP**:`dp[i][j][k]` = 以 (i,j) 结尾、方向 k ∈ {左, 上, 左上对角, 右上反对角} 的连续 1 长度,由该方向前驱格转移:`dp = pre + 1`(mat[i][j]==1 时),每格更新全局最大值。时间/空间 O(mn)。
