# [LCR 130] 衣橱整理

## Description


```md
https://leetcode.cn/problems/ji-qi-ren-de-yun-dong-fan-wei-lcof/description/
* algorithms
* Medium (53.57%)
* Likes:    690
* Dislikes: -
* Testcase Example:  '4\n7\n5'
家居整理师将待整理衣橱划分为 m x n 的二维矩阵 grid，其中 grid[i][j] 代表一个需要整理的格子。整理师自 grid[0][0] 开始 逐行逐列 地整理每个格子。
整理规则为：在整理过程中，可以选择 向右移动一格 或 向下移动一格，但不能移动到衣柜之外。同时，不需要整理 digit(i) + digit(j) > cnt 的格子，其中 digit(x) 表示数字 x 的各数位之和。
请返回整理师 总共需要整理多少个格子。

示例 1：
输入：m = 4, n = 7, cnt = 5
输出：18

提示：
1 <= n, m <= 100
0 <= cnt <= 20

```

## Solution

[SourceCode](./solution.js)

## English Translation

A wardrobe organizer partitions the closet to be tidied into an `m x n` 2-D grid, where `grid[i][j]` represents one cell to be organized. The organizer starts at `grid[0][0]` and works through the cells row by row and column by column.

The tidying rule: while organizing, the organizer may move **one step right** or **one step down** at a time, but cannot move outside the closet. Also, cells where `digit(i) + digit(j) > cnt` do not need to be organized, where `digit(x)` denotes the sum of the digits of number `x`.

Return the total number of cells the organizer needs to organize.

**Example 1:**
```
Input: m = 4, n = 7, cnt = 5
Output: 18
```

**Constraints:**
- `1 <= n, m <= 100`
- `0 <= cnt <= 20`

## Approach

This is the classic "Robot's Range of Motion" (剑指 Offer 13) problem restated as wardrobe finishing.

We start from `(0, 0)` and only move right or down. A cell `(i, j)` needs organizing if and only if it is **reachable** through valid steps and `digitSum(i) + digitSum(j) <= cnt`. Unreachable cells (blocked because the digits sum exceeds `cnt`) act as walls — cells behind them must not be counted even if their own digit sum is small. Therefore a pure 2-D traversal counting all qualifying cells is wrong; we must traverse the reachable region only.

A DFS (depth-first search) from the origin with a `visited` set is the natural fit:

1. Write a helper `digitSum(x)` that repeatedly adds the last digit via `x % 10` then removes it via `Math.floor(x / 10)` (equivalent to `~~(x / 10)`).
2. Define a recursive DFS at `(i, j)`: return 0 if out of bounds, already visited, or `digitSum(i) + digitSum(j) > cnt`; otherwise mark visited and add `1 + dfs(i+1, j) + dfs(i, j+1)`.
3. The answer is `dfs(0, 0)`.

Time complexity: `O(m * n)` — every cell is visited at most once. Space complexity: `O(m * n)` for the visited grid plus recursion depth bounded by `m + n`.

**Complexity:** O(m·n) time, O(m·n) space.
