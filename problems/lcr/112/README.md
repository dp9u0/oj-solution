# [LCR 112] 矩阵中的最长递增路径

## Description


```md
https://leetcode.cn/problems/fpTFWP/description/
* algorithms
* Hard (57.80%)
* Likes:    59
* Dislikes: -
* Testcase Example:  '[[9,9,4],[6,6,8],[2,1,1]]'
给定一个 m x n 整数矩阵 matrix ，找出其中 最长递增路径 的长度。
对于每个单元格，你可以往上，下，左，右四个方向移动。 不能 在 对角线 方向上移动或移动到 边界外（即不允许环绕）。

示例 1：
输入：matrix = [[9,9,4],[6,6,8],[2,1,1]]
输出：4
解释：最长递增路径为 [1, 2, 6, 9]。
示例 2：
输入：matrix = [[3,4,5],[3,2,6],[2,2,1]]
输出：4
解释：最长递增路径是 [3, 4, 5, 6]。注意不允许在对角线方向上移动。
示例 3：
输入：matrix = [[1]]
输出：1

提示：
m == matrix.length
n == matrix[i].length
1 <= m, n <= 200
0 <= matrix[i][j] <= 231 - 1

注意：本题与主站 329 题相同： https://leetcode.cn/problems/longest-increasing-path-in-a-matrix/

```

## English

Given an `m x n` integer matrix `matrix`, return the length of the longest increasing path in `matrix`.

From each cell, you can either move in four directions: left, right, up, or down. You **may not** move diagonally or move outside the boundary (i.e., wrap-around is not allowed).

**Example 1:**

```
Input: matrix = [[9,9,4],[6,6,8],[2,1,1]]
Output: 4
Explanation: The longest increasing path is [1, 2, 6, 9].
```

**Example 2:**

```
Input: matrix = [[3,4,5],[3,2,6],[2,2,1]]
Output: 4
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
```

**Example 3:**

```
Input: matrix = [[1]]
Output: 1
```

**Constraints:**

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 200`
- `0 <= matrix[i][j] <= 2^31 - 1`

## Approach

用 **DFS + 记忆化搜索 (memoization)** 求解。

- 定义 `dfs(i, j)` 返回从 `(i, j)` 出发能形成的最长递增路径长度。
- 若 `(i, j)` 已计算过(`memo[i][j] > 0`),直接返回,避免重复计算。
- 否则遍历上下左右四个方向,若邻居值严格大于当前值,则 `best = max(best, 1 + dfs(ni, nj))`。
- 每个格子只计算一次,总时间复杂度 **O(m × n)**,空间复杂度 **O(m × n)**(记忆化数组 + 递归栈)。

## Solution

[SourceCode](./solution.js)
