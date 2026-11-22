# [2510] 检查是否有路径经过相同数量的 0 和 1

## Description


```md
https://leetcode.cn/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s/description/
* algorithms
* Medium (64.36%)
* Likes:    7
* Dislikes: -
* Testcase Example:  '[[0,1,0,0],[0,1,0,0],[1,0,1,0]]'
给定一个 下标从 0 开始 的 m x n 的 二进制 矩阵 grid ，从坐标为 (row, col) 的元素可以向右走 (row, col+1) 或向下走 (row+1, col) 。
返回一个布尔值，表示从 (0, 0) 出发是否存在一条路径，经过 相同 数量的 0 和 1，到达终点 (m-1, n-1) 。如果存在这样的路径返回 true ，否则返回 false 。

示例 1 ：
输入：grid = [[0,1,0,0],[0,1,0,0],[1,0,1,0]]
输出：true
解释：以上图中用蓝色标记的路径是一个有效的路径，因为路径上有 3 个值为 1 的单元格和 3 个值为 0 的单元格。由于存在一个有效的路径，因此返回 true 。
示例 2 ：
输入：grid = [[1,1,0],[0,0,1],[1,0,0]]
输出：false
解释：这个网格中没有一条路径经过相等数量的0和1。

提示：
m == grid.length
n == grid[i].length
2 <= m, n <= 100
grid[i][j] 不是 0 就是 1 。
Hint 1: Can you use dynamic programming to solve the problem?
Hint 2: Let dp[i][j][diff] be true if there is a path from the cell (i, j) to (m - 1, n - 1) such that the difference between the number of 0’s and the number of 1’s that we visited so far is diff, or false otherwise. The answer to the problem will be dp[0][0][0]. How do you compute this dp?

```

## Solution

[SourceCode](./solution.js)

## English Translation

Binary m x n grid; move only right or down. Does a path from (0,0) to (m-1,n-1) visit an equal number of 0s and 1s?

Example 1:
Input: grid = [[0,1,0,0],[0,1,0,0],[1,0,1,0]]
Output: true

Example 2:
Input: grid = [[1,1,0],[0,0,1],[1,0,0]]
Output: false

Constraints: 2 <= m, n <= 100.

## Approach

DP per cell over achievable balance values (ones - zeros). Any path to (i,j) has length i+j+1 <= 199, so balance lies in [-199, 199]: store a 200-slot byte array per cell (offset 100). reach(i,j) = shift(reach(i-1,j) | reach(i,j-1)) by +1 if the cell is 1, else by -1 (add the cell itself). Answer: reach(m-1,n-1)[100].

O(m*n*100).
