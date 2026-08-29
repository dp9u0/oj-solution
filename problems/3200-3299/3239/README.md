# [3239] Minimum Number of Flips to Make Binary Grid Palindromic I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-flips-to-make-binary-grid-palindromic-i/description/)

* algorithms
* Medium (74.84%)
* Likes:    84
* Dislikes: 10
* Testcase Example:  '[[1,0,0],[0,0,0],[0,0,1]]'

```md
You are given an m x n binary matrix grid.
A row or column is considered palindromic if its values read the same forward and backward.
You can flip any number of cells in grid from 0 to 1, or from 1 to 0.
Return the minimum number of cells that need to be flipped to make either all rows palindromic or all columns palindromic.

Example 1:

Input: grid = [[1,0,0],[0,0,0],[0,0,1]]
Output: 2
Explanation:

Flipping the highlighted cells makes all the rows palindromic.

Example 2:

Input: grid = [[0,1],[0,1],[0,0]]
Output: 1
Explanation:

Flipping the highlighted cell makes all the columns palindromic.

Example 3:

Input: grid = [[1],[0]]
Output: 0
Explanation:
All rows are already palindromic.


Constraints:

m == grid.length
n == grid[i].length
1 <= m * n <= 2 * 105
0 <= grid[i][j] <= 1


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个 `m x n` 的二进制矩阵 `grid`。

若一行（或一列）正读反读相同，则称其回文。可以把任意单元格从 0 翻成 1 或从 1 翻成 0。

返回使**所有行回文**或**所有列回文**所需翻转的最少单元格数。

示例 1：`[[1,0,0],[0,0,0],[0,0,1]]` → `2`（翻转两个角使所有行回文）
示例 2：`[[0,1],[0,1],[0,0]]` → `1`（翻一个格使所有列回文）
示例 3：`[[1],[0]]` → `0`（每行单格天然回文）

约束：`1 <= m * n <= 2 * 10^5`，`grid[i][j]` 为 0 或 1

## 解题思路

"所有行回文"与"所有列回文"是两个**独立**目标，分别计算代价后取最小：

- **行代价**：对每行，统计对称位置对 `(j, n-1-j)` 中值不相等的对数——每对不相等只需翻其中一个格（1 次翻转即可使该对相等，且各对互不重叠）；
- **列代价**：同理按列统计 `(i, m-1-i)` 的不等对数。

正确性：对称对之间不共享单元格，逐对取 1 次翻转即为该行/列的最小代价，且行与行（列与列）之间也互不影响，直接求和。

答案 = `min(行代价, 列代价)`。

验证示例 2：行代价 = (0,1)+(0,1)+(0,0) = 2，列代价 = col0 全 0 回文 + col1 (1,0) 一对不等 = 1 → min = 1 ✓

时间复杂度 O(m·n)，空间 O(1)。
