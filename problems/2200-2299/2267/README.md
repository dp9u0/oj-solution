# [2267] 检查是否有合法括号字符串路径

## Description


```md
https://leetcode.cn/problems/check-if-there-is-a-valid-parentheses-string-path/description/
* algorithms
* Hard (43.14%)
* Likes:    65
* Dislikes: -
* Testcase Example:  '[["(","(","("],[")","(",")"],["(","(",")"],["(","(",")"]]'
一个括号字符串是一个 非空 且只包含 '(' 和 ')' 的字符串。如果下面 任意 条件为 真 ，那么这个括号字符串就是 合法的 。
字符串是 () 。
字符串可以表示为 AB（A 连接 B），A 和 B 都是合法括号序列。
字符串可以表示为 (A) ，其中 A 是合法括号序列。
给你一个 m x n 的括号网格图矩阵 grid 。网格图中一个 合法括号路径 是满足以下所有条件的一条路径：
路径开始于左上角格子 (0, 0) 。
路径结束于右下角格子 (m - 1, n - 1) 。
路径每次只会向 下 或者向 右 移动。
路径经过的格子组成的括号字符串是 合法 的。
如果网格图中存在一条 合法括号路径 ，请返回 true ，否则返回 false 。

示例 1：
输入：grid = [["(","(","("],[")","(",")"],["(","(",")"],["(","(",")"]]
输出：true
解释：上图展示了两条路径，它们都是合法括号字符串路径。
第一条路径得到的合法字符串是 "()(())" 。
第二条路径得到的合法字符串是 "((()))" 。
注意可能有其他的合法括号字符串路径。
示例 2：
输入：grid = [[")",")"],["(","("]]
输出：false
解释：两条可行路径分别得到 "))(" 和 ")((" 。由于它们都不是合法括号字符串，我们返回 false 。

提示：
m == grid.length
n == grid[i].length
1 <= m, n <= 100
grid[i][j] 要么是 '(' ，要么是 ')' 。
Hint 1: What observations can you make about the number of open brackets and close brackets for any prefix of a valid bracket sequence?
Hint 2: The number of open brackets must always be greater than or equal to the number of close brackets.
Hint 3: Could you use dynamic programming?

```

## Description (English)

A parentheses string is a non-empty string consisting only of '(' and ')'. It is **valid** if any of the following holds:

- The string is `()`.
- It can be written as `AB` (A concatenated with B), where A and B are both valid parentheses strings.
- It can be written as `(A)`, where A is a valid parentheses string.

Given an `m x n` grid of parentheses, where `grid[i][j]` is either `'('` or `')'`, a **valid parentheses path** is a path that satisfies all of the following:

- The path starts at the top-left cell `(0, 0)`.
- The path ends at the bottom-right cell `(m - 1, n - 1)`.
- The path only moves **down** or **right**.
- The string formed by concatenating the characters on the path is a **valid** parentheses string.

Return `true` if there exists a valid parentheses path in the grid, otherwise return `false`.

**Constraints:**

- `m == grid.length`
- `n == grid[i].length`
- `1 <= m, n <= 100`
- `grid[i][j]` is either `'('` or `')'`.

## Approach

A valid parentheses string is exactly one where every prefix has `count('(') >= count(')')` and the total balance ends at 0. So track the path's **balance** (open minus close).

**DP over (cell, balance):** `dp[i][j][b]` = can we reach cell `(i, j)` with balance `b`. A path from `(0,0)` to `(m-1,n-1)` has length `m + n - 1`, so the balance stays within `[0, m + n - 1]`.

- Start: `grid[0][0]` must be `'('`, giving `dp[0][0][1] = true`.
- Transition: from `(i, j)` with balance `b`, step right to `(i, j+1)` or down to `(i+1, j)`; a `'('` raises `b` by 1, a `')'` lowers it by 1 (skipping states that would go below 0).
- Answer: `dp[m-1][n-1][0]`.

Complexity: `O(m·n·(m+n))` time and space — about `100·100·201 ≈ 2·10^6` states, well within limits.

## Solution

[SourceCode](./solution.js)
