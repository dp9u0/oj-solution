# [3988] Create Grid With Exactly K Paths I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/create-grid-with-exactly-k-paths-i/description/)

* algorithms
* Medium (32.97%)
* Likes:    54
* Dislikes: 14
* Testcase Example:  '2\n3\n2'

```md
You are given three integers m, n, and k.
Construct any m x n grid consisting only of the characters &#39;.&#39; and &#39;#&#39;, where:

&#39;.&#39; represents a free cell.
&#39;#&#39; represents an obstacle cell.

A valid path is a sequence of free cells that:

Starts at the top-left cell (0, 0).
Ends at the bottom-right cell (m - 1, n - 1).
Moves only:

Right, from (i, j) to (i, j + 1), or
Down, from (i, j) to (i + 1, j).



Return any grid such that there are exactly k valid paths from the top-left cell to the bottom-right cell. If no such grid exists, return an empty array.

Example 1:

Input: m = 2, n = 3, k = 2
Output: ['...','#..']
Explanation:

There are exactly k = 2 valid paths from (0, 0) to (1, 2):

(0, 0) &rarr; (0, 1) &rarr; (0, 2) &rarr; (1, 2)
(0, 0) &rarr; (0, 1) &rarr; (1, 1) &rarr; (1, 2)


Example 2:

Input: m = 3, n = 3, k = 4
Output: ['..#','...','#..']
Explanation:

There are exactly k = 4 valid paths from (0, 0) to (2, 2):

(0, 0) &rarr; (0, 1) &rarr; (1, 1) &rarr; (1, 2) &rarr; (2, 2)
(0, 0) &rarr; (0, 1) &rarr; (1, 1) &rarr; (2, 1) &rarr; (2, 2)
(0, 0) &rarr; (1, 0) &rarr; (1, 1) &rarr; (1, 2) &rarr; (2, 2)
(0, 0) &rarr; (1, 0) &rarr; (1, 1) &rarr; (2, 1) &rarr; (2, 2)


Example 3:

Input: m = 1, n = 4, k = 2
Output: []
Explanation:​
No grid exists with exactly k = 2 valid paths for a 1 x 4 grid, so the answer is an empty array.


Constraints:

1 <= m, n <= 10
1 <= k <= 4


```

## 中文翻译

给定三个整数 m、n 和 k。
构造任意一个 m x n 的网格，其中只包含字符 '.' 和 '#'：

- '.' 表示空格子。
- '#' 表示障碍格子。

一条有效路径是空格子的序列，满足：

- 从左上角格子 (0, 0) 出发。
- 到达右下角格子 (m - 1, n - 1) 结束。
- 只能移动：
  - 向右：从 (i, j) 到 (i, j + 1)，或
  - 向下：从 (i, j) 到 (i + 1, j)。

返回任意一个恰好存在 k 条从左上角到右下角的有效路径的网格。如果不存在这样的网格，返回空数组。

示例 1：
输入：m = 2, n = 3, k = 2
输出：['...','#..']

示例 2：
输入：m = 3, n = 3, k = 4
输出：['..#','...','#..']

示例 3：
输入：m = 1, n = 4, k = 2
输出：[]（1 x 4 的网格不可能恰好有 2 条路径）

约束：
1 <= m, n <= 10
1 <= k <= 4

## 解题思路

路径计数满足 DP：dp[i][j] = dp[i-1][j] + dp[i][j-1]（空格子），障碍为 0。由于 k <= 4 很小，分类构造即可：

1. **单行/单列（m == 1 或 n == 1）**：路径要么 0 条要么恰好 1 条（全空）。故 k == 1 时返回全 '.'，否则返回 []。

2. **m, n >= 2 时，全空网格的路径数为上界 C(m+n-2, m-1)**，任何障碍只会减少路径数。因此当 C(m+n-2, m-1) < k 时无解。

3. **k == 1**：走"走廊"——第 0 列全空 + 最后一行全空，其余全是 '#'，恰好 1 条 L 形路径。

4. **k == 2**：打开 (0,0),(0,1),(1,0),(1,1) 组成 2x2 汇合点（dp(1,1)=2），再沿第 1 行向右修走廊（上方保持 '#'，dp 保持 2），最后沿第 n-1 列向下到终点（左侧保持 '#'）。

5. **k == 3**：
   - 若 n >= 3：打开左上 2x3 全空块（dp(1,2)=C(3,1)=3），再沿第 1 行、第 n-1 列修走廊。
   - 否则 m >= 3（转置）：打开左上 3x2 全空块（dp(2,1)=3），再沿第 1 列向下修走廊。

6. **k == 4**：
   - 若 n >= 4：左上 2x4 全空块（dp(1,3)=C(4,1)=4）+ 走廊。
   - 否则若 m >= 4：转置，4x2 全空块 + 走廊。
   - 否则只剩 m = n = 3：用示例 2 的图案 ['..#','...','#..']，dp(2,2) = 2 + 2 = 4。
   - 其余（2x2、2x3、3x2）上界不足 4，返回 []。

关键不变量：走廊延伸时保证相邻的另一侧全是 '#'，使 dp 值沿走廊保持不变，从而把核心块产生的路径数"原样输运"到终点。

复杂度：构造 O(m·n)，判定 O(1)。

## Solution

[SourceCode](./solution.js)
