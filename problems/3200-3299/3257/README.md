# [3257] Maximum Value Sum by Placing Three Rooks II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-value-sum-by-placing-three-rooks-ii/description/)

* algorithms
* Hard (26.51%)
* Likes:    61
* Dislikes: 10
* Testcase Example:  '[[-3,1,1,1],[-3,1,-3,1],[-3,2,1,1]]'

```md
You are given a m x n 2D array board representing a chessboard, where board[i][j] represents the value of the cell (i, j).
Rooks in the same row or column attack each other. You need to place three rooks on the chessboard such that the rooks do not attack each other.
Return the maximum sum of the cell values on which the rooks are placed.

Example 1:

Input: board = [[-3,1,1,1],[-3,1,-3,1],[-3,2,1,1]]
Output: 4
Explanation:

We can place the rooks in the cells (0, 2), (1, 3), and (2, 1) for a sum of 1 + 1 + 2 = 4.

Example 2:

Input: board = [[1,2,3],[4,5,6],[7,8,9]]
Output: 15
Explanation:
We can place the rooks in the cells (0, 0), (1, 1), and (2, 2) for a sum of 1 + 5 + 9 = 15.

Example 3:

Input: board = [[1,1,1],[1,1,1],[1,1,1]]
Output: 3
Explanation:
We can place the rooks in the cells (0, 2), (1, 1), and (2, 0) for a sum of 1 + 1 + 1 = 3.


Constraints:

3 <= m == board.length <= 500
3 <= n == board[i].length <= 500
-109 <= board[i][j] <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 `m x n` 棋盘，`board[i][j]` 是格子 `(i, j)` 的价值。同行或同列的车互相攻击。放置**三**个互不攻击的车，返回所在格子价值之和的最大值。

示例 1：`[[-3,1,1,1],[-3,1,-3,1],[-3,2,1,1]]` → `4`（(0,2)+(1,3)+(2,1) = 1+1+2）
示例 2：`[[1,2,3],[4,5,6],[7,8,9]]` → `15`
示例 3：全 1 的 3×3 → `3`

约束：`3 <= m, n <= 500`，`|board[i][j]| <= 10^9`

## 解题思路

三辆车占 3 行 3 列，用**局部交换论证**把候选格压缩到极小的池子：

**候选池 Q = 行 top-3 ∩ 列 top-3**（按 (值, 下标) 全序取前三，消除并列歧义）：

- 任取最优解，先对每辆车做"行交换"：换成该行中列未被占的最优格——不优则交换，有限步后每辆车都是"行内列可用最优"，故属于该行 top-3（top-3 中至多 2 个列被另外两车占）；
- 再做"列交换"：若某车所在列存在行未被占的更优格，交换可改进，与最优性矛盾——故每辆车也属于其列 top-3。

因此存在全部落在 Q 上的最优解。|Q| ≤ min(3m, 3n) ≤ 1500，且**每行、每列在 Q 中至多 3 格**。

**枚举**：Q 按值降序。枚举前两车 `(a,b)`（≤ 1500²/2 ≈ 1.1e6 对，行/列不同），第三车只需在 Q 的**前 15 名**中找：被禁止的 2 行 + 2 列在 Q 中至多占 2×3 + 2×3 = 12 格，故前 13 名内必有合法者，取第一个合法即该对最优。找到第一个合法即 break。

复杂度：建池 O(mn log n)，枚举 O(|Q|² × 15) ≈ 1.6e7。答案范围 ±3e9，双精度安全。

本地另用小棋盘暴力三重循环对拍 200 组验证。
