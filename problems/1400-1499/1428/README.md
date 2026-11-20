# [1428] 至少有一个 1 的最左端列

## Description


```md
https://leetcode.cn/problems/leftmost-column-with-at-least-a-one/description/
* algorithms
* Medium (64.44%)
* Likes:    56
* Dislikes: -
* Testcase Example:  '[[0,0],[1,1]]'
行排序二进制矩阵 表示所有元素都是 0 或 1，并且矩阵的每一行都以非递减排序。
给定一个 行排序二进制矩阵 binaryMatrix，返回至少包含一个 1 的 最左端列 的索引（从 0 开始）。如果这样的列不存在，返回 -1。
您不能直接访问该二进制矩阵。你只可以通过 BinaryMatrix 接口来访问。
BinaryMatrix.get(row, col) 返回位于索引 (row, col) （从 0 开始）的元素。
BinaryMatrix.dimensions() 返回含有 2 个元素的列表 [rows, cols]，表示这是一个 rows * cols的矩阵。
如果提交的答案调用 BinaryMatrix.get 超过 1000 次，则该答案会被判定为错误答案。提交任何试图规避判定机制的答案将会被取消资格。
下列示例中， mat 为给定的二进制矩阵。您不能直接访问该矩阵。

示例 1:
输入: mat = [[0,0],[1,1]]
输出: 0
示例 2:
输入: mat = [[0,0],[0,1]]
输出: 1
示例 3:
输入: mat = [[0,0],[0,0]]
输出: -1

提示:
rows == mat.length
cols == mat[i].length
1 <= rows, cols <= 100
mat[i][j] 只会是 0 或 1。
mat[i] 已按非递减顺序排序。
Hint 1: 1. (Binary Search) For each row do a binary search to find the leftmost one on that row and update the answer.
Hint 2: 2. (Optimal Approach) Imagine there is a pointer p(x, y) starting from top right corner. p can only move left or down. If the value at p is 0, move down. If the value at p is 1, move left. Try to figure out the correctness and time complexity of this algorithm.

```

## Solution

[SourceCode](./solution.js)

## Translation

Row-sorted binary matrix behind a get()/dimensions() API (≤1000 get calls). Return the leftmost column containing a 1, else -1.

- Example: [[0,0],[1,1]] → `0`

## Approach

**右上角楼梯游走**。从 (0, cols−1) 出发:遇 1 记答案并左移,遇 0 下移。行/列各单调,游走路径 O(rows+cols) ≤ 200 次调用。任何一次左移后的列都是更优候选,结束时的 ans 即最左。
