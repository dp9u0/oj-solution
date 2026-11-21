# [2128] 通过翻转行或列来去除所有的 1

## Description


```md
https://leetcode.cn/problems/remove-all-ones-with-row-and-column-flips/description/
* algorithms
* Medium (64.61%)
* Likes:    22
* Dislikes: -
* Testcase Example:  '[[0,1,0],[1,0,1],[0,1,0]]'
给你一个大小为 m x n 的二进制矩阵 grid。
每次操作，你可以选择 任意 一行 或者 一列，然后将其中的所有值翻转（0 变成 1， 1变成 0）。
如果经过 任意次 操作，你能将矩阵中所有的 1 去除，那么返回 true；否则返回 false。

示例 1:
输入: grid = [[0,1,0],[1,0,1],[0,1,0]]
输出: true
解释: 一种去除所有 1 的可行方法是:
- 翻转矩阵的中间的行
- 翻转矩阵的中间的列
示例 2:
输入: grid = [[1,1,0],[0,0,0],[0,0,0]]
输出: false
解释: 不可能去除矩阵中所有的 1。
示例 3:
输入: grid = [[0]]
输出: true
解释: 矩阵中不存在 1，已经符合要求。

提示:
m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] 是 0 或者 1.
Hint 1: Does the order, in which you do the operations, matter?
Hint 2: No, it does not. An element will keep its original value if the number of operations done on it is even and vice versa. This also means that doing more than 1 operation on the same row or column is unproductive.
Hint 3: Try working backward, start with a matrix of all zeros and try to construct grid using operations.
Hint 4: Start with operations on columns, after doing them what do you notice about each row?
Hint 5: Each row is the exact same. If we then flip some rows, that leaves only two possible arrangements for each row: the same as the original or the opposite.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given an m x n binary matrix `grid`, each operation flips every value of one chosen row or one chosen column. Return true if any sequence of operations can turn every cell to 0.

Example 1:
Input: grid = [[0,1,0],[1,0,1],[0,1,0]]
Output: true

Example 2:
Input: grid = [[1,1,0],[0,0,0],[0,0,0]]
Output: false

Example 3:
Input: grid = [[0]]
Output: true

Constraints: 1 <= m, n <= 300.

## Approach

Row/column flips commute, so at most one flip per line matters. After the column flips are fixed, every row equals some base row pattern or its complement; row flips then choose either. So the matrix is solvable iff every row is equal to `grid[0]` or to its bitwise complement — equivalently `grid[r][c] == grid[0][c] ^ grid[r][0] ^ grid[0][0]` for all r, c.

Verify in O(m * n).
