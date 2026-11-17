# [311] 稀疏矩阵的乘法

## Description


```md
https://leetcode.cn/problems/sparse-matrix-multiplication/description/
* algorithms
* Medium (76.20%)
* Likes:    107
* Dislikes: -
* Testcase Example:  '[[1,0,0],[-1,0,3]]\n[[7,0,0],[0,0,0],[0,0,1]]'
给定两个 稀疏矩阵 ：大小为 m x k 的稀疏矩阵 mat1 和大小为 k x n 的稀疏矩阵 mat2 ，返回 mat1 x mat2 的结果。你可以假设乘法总是可能的。

示例 1：
输入：mat1 = [[1,0,0],[-1,0,3]], mat2 = [[7,0,0],[0,0,0],[0,0,1]]
输出：[[7,0,0],[-7,0,3]]
示例 2:
输入：mat1 = [[0]], mat2 = [[0]]
输出：[[0]]

提示:
m == mat1.length
k == mat1[i].length == mat2.length
n == mat2[i].length
1 <= m, n, k <= 100
-100 <= mat1[i][j], mat2[i][j] <= 100

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Multiply two sparse matrices `mat1 (m×k)` and `mat2 (k×n)`, exploiting zeros to avoid useless work.

**Example:**
[[1,0,0],[-1,0,3]] × [[7,0,0],[0,0,0],[0,0,1]] → [[7,0,0],[-7,0,3]]

**Constraints:**
- 1 <= m, k, n <= 100, values in [-100, 100]

## Approach

交换循环次序:外层遍历 mat1 的行与"中间维" p,mat1[i][p] 为 0 时整个 mat2 第 p 行都被跳过;非零则对 n 列累加乘积。

时间 O(m·k·n) 最坏,稀疏时大幅减少;空间 O(m·n)。
