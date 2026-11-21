# [2174] 通过翻转行或列来去除所有的 1 II

## Description


```md
https://leetcode.cn/problems/remove-all-ones-with-row-and-column-flips-ii/description/
* algorithms
* Medium (60.82%)
* Likes:    11
* Dislikes: -
* Testcase Example:  '[[1,1,1],[1,1,1],[0,1,0]]'
给定 下标从 0 开始 的 m x n 二进制 矩阵 grid。
在一次操作中，可以选择满足以下条件的任意 i 和 j:
0 <= i < m
0 <= j < n
grid[i][j] == 1
并将第 i 行和第 j 列中的 所有 单元格的值更改为零。
返回从 grid 中删除所有 1 所需的最小操作数。

示例 1:
输入: grid = [[1,1,1],[1,1,1],[0,1,0]]
输出: 2
解释:
在第一个操作中，将第 1 行和第 1 列的所有单元格值更改为 0。
在第二个操作中，将第 0 行和第 0 列的所有单元格值更改为 0。
示例 2:
输入: grid = [[0,1,0],[1,0,1],[0,1,0]]
输出: 2
解释:
在第一个操作中，将第 1 行和第 0 列的所有单元格值更改为 0。
在第二个操作中，将第 2 行和第 1 列的所有单元格值更改为 0。
注意，我们不能使用行 1 和列 1 执行操作，因为 grid[1][1]!= 1。
示例 3:
输入: grid = [[0,0],[0,0]]
输出: 0
解释:
没有 1 可以移除，所以返回0。

提示:
m == grid.length
n == grid[i].length
1 <= m, n <= 15
1 <= m * n <= 15
grid[i][j] 为 0 或 1。
Hint 1: With the given constraints, could a brute force solution pass?
Hint 2: What would a brute force solution look like?
Hint 3: We can try every single possibility of choosing to do an operation on a cell with a 1 or choosing to ignore it.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given an m x n binary matrix with `m * n <= 15`, one operation picks a cell holding 1 (row i, col j) and zeroes all cells of row i and column j. Return the minimum operations to remove every 1.

Example 1:
Input: grid = [[1,1,1],[1,1,1],[0,1,0]]
Output: 2

Example 2:
Input: grid = [[0,1,0],[1,0,1],[0,1,0]]
Output: 2

Example 3:
Input: grid = [[0,0],[0,0]]
Output: 0

Constraints: 1 <= m, n <= 15, 1 <= m * n <= 15.

## Approach

Bitmask DFS with memoization (m*n <= 15 -> at most 2^15 states). dfs(mask): minimum ops to clear the remaining 1s in mask. For each remaining cell c, one operation clears every mask cell sharing c's row or column; take the minimum over choices. Order of operations doesn't matter for which ops are used, so this explores all optimal strategies.
