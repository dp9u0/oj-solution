# [3963] Create Grid With Exactly One Path

## Description

[LeetCode Problem Description](https://leetcode.com/problems/create-grid-with-exactly-one-path/description/)

* algorithms
* Easy (75.66%)
* Likes:    30
* Dislikes: 4
* Testcase Example:  '2\n3'

```md
You are given two integers m and n, representing the number of rows and columns of a grid.
Construct any m x n grid consisting only of the characters &#39;.&#39; and &#39;#&#39;, where:

&#39;.&#39; represents a free cell.
&#39;#&#39; represents an obstacle cell.

A valid path is a sequence of free cells that:

Starts at the top-left cell (0, 0).
Ends at the bottom-right cell (m - 1, n - 1).
Moves only:

Right, from (i, j) to (i, j + 1), or
Down, from (i, j) to (i + 1, j).



Return any grid such that there is exactly one valid path from the top-left cell to the bottom-right cell.

Example 1:

Input: m = 2, n = 3
Output: ['..#','#..']
Explanation:

The only valid path is: (0,0) &rarr; (0,1) &rarr; (1,1) &rarr; (1,2)

Example 2:

Input: m = 3, n = 3
Output: ['..#','#..','##.']
Explanation:

The only valid path is: (0,0) &rarr; (0,1) &rarr; (1,1) &rarr; (1,2) &rarr; (2,2)

Example 3:

Input: m = 1, n = 4
Output: ['....']
Explanation:
The only valid path is: (0,0) &rarr; (0,1) &rarr; (0,2) &rarr; (0,3)


Constraints:

1 <= m, n <= 25


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定行数 m、列数 n，构造任意一个仅含 `.`（空）与 `#`（障碍）的 m×n 网格，使得从 `(0,0)` 只能向右/向下走到 `(m-1,n-1)` 的合法路径**恰好一条**。返回该网格。

约束：`1 <= m, n <= 25`

## 解题思路

**L 形构造**：第 0 行全部放行 `.`，其余行只留最后一列 `.`：

- 唯一路径 = 沿第 0 行向右到 `(0, n-1)`，再沿最后一列向下到 `(m-1, n-1)`；
- 任何偏离（中途向下进入内部格）都会撞 `#`，故路径唯一；
- m=1（单行全通）、n=1（每行仅一列且是最后一列，全通）自然兼容。

验证：m=2,n=3 → `['...','#..']`，唯一路径 (0,0)→(0,1)→(0,2)→(1,2) ✓（与示例不同但同为合法答案）。本地用路径计数 DP 断言恰好 1 条。
