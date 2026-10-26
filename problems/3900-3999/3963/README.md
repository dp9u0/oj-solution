# [3963] 构造恰好一条路径的网格

## Description


```md
https://leetcode.cn/problems/create-grid-with-exactly-one-path/description/
* algorithms
* Easy (77.63%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '2\n3'
给你两个整数 m 和 n，分别表示网格的行数和列数。
请你构造 任意 一个只包含字符 '.' 和 '#' 的 m x n 网格，其中：
'.' 表示空单元格。
'#' 表示障碍物单元格。
有效路径 是满足以下条件的空单元格序列：
从左上角单元格 (0, 0) 开始。
在右下角单元格 (m - 1, n - 1) 结束。
只能向：

右移动，从 (i, j) 到 (i, j + 1)，或者
下移动，从 (i, j) 到 (i + 1, j)。


返回任意一个从左上角到右下角 恰好只有一条有效路径 的网格。

示例 1：
输入： m = 2, n = 3
输出： ["..#","#.."]
解释：
唯一的有效路径是：(0,0) → (0,1) → (1,1) → (1,2)
示例 2：
输入： m = 3, n = 3
输出： ["..#","#..","##."]
解释：
唯一的有效路径是：(0,0) → (0,1) → (1,1) → (1,2) → (2,2)
示例 3：
输入： m = 1, n = 4
输出： ["...."]
解释：
唯一的有效路径是：(0,0) → (0,1) → (0,2) → (0,3)

提示：
1 <= m, n <= 25
Hint 1: It is enough to leave one simple route made of free cells and block every other cell.
Hint 2: There are many routes to choose from. What is the simplest one you can think of?
Hint 3: One possible route: Go right while possible, then go down till you reach the destination.

```

## Description (English)

```md
You are given two integers m and n, representing the number of rows and columns of a grid.

Construct any m x n grid containing only the characters '.' and '#', where:

'.' denotes an empty cell.
'#' denotes a blocked cell.

A valid path is a sequence of empty cells satisfying:

It starts at the top-left cell (0, 0).
It ends at the bottom-right cell (m - 1, n - 1).
It may only move:

Right, from (i, j) to (i, j + 1), or
Down, from (i, j) to (i + 1, j).


Return any grid that has exactly one valid path from the top-left to the bottom-right.

Example 1:
Input: m = 2, n = 3
Output: ["..#","#.."]
Explanation: The only valid path is (0,0) → (0,1) → (1,1) → (1,2)

Example 2:
Input: m = 3, n = 3
Output: ["..#","#..","##."]
Explanation: The only valid path is (0,0) → (0,1) → (1,1) → (1,2) → (2,2)

Example 3:
Input: m = 1, n = 4
Output: ["...."]
Explanation: The only valid path is (0,0) → (0,1) → (0,2) → (0,3)

Constraints:
1 <= m, n <= 25
```

## Approach

构造法：只保留一条最简单的路线，封死其余所有格子。

- 第 0 行全部置 `'.'`，其余每一行只有最后一列为 `'.'`，其余都是 `'#'`。
- 唯一路径：从 (0,0) 沿第 0 行一直向右走到 (0, n-1)，再沿最后一列一直向下走到 (m-1, n-1)。
- 正确性：任何路径若在中途（列 < n-1）向下离开第 0 行，会立刻撞到 `'#'`，因此必须先走满第一行；进入最后一列后每行也只有向下一个选择，故路径恰好一条。
- 边界：m = 1 时即整行空格；n = 1 时全网格均为 `'.'`，但单列网格只有向下一种走法，同样恰好一条路径。
- 复杂度：时间 O(m·n)，空间 O(m·n)（输出本身）。

## Solution

[SourceCode](./solution.js)
