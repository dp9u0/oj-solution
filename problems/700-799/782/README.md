# [782] Transform to Chessboard

## Description

[LeetCode Problem Description](https://leetcode.com/problems/transform-to-chessboard/description/)

* algorithms
* Hard (51.67%)
* Likes:    374
* Dislikes: 313
* Testcase Example:  '[[0,1,1,0],[0,1,1,0],[1,0,0,1],[1,0,0,1]]'

```md
You are given an n x n binary grid board. In each move, you can swap any two rows with each other, or any two columns with each other.
Return the minimum number of moves to transform the board into a chessboard board. If the task is impossible, return -1.
A chessboard board is a board where no 0&#39;s and no 1&#39;s are 4-directionally adjacent.

Example 1:


Input: board = [[0,1,1,0],[0,1,1,0],[1,0,0,1],[1,0,0,1]]
Output: 2
Explanation: One potential sequence of moves is shown.
The first move swaps the first and second column.
The second move swaps the second and third row.

Example 2:


Input: board = [[0,1],[1,0]]
Output: 0
Explanation: Also note that the board with 0 in the top left corner, is also a valid chessboard.

Example 3:


Input: board = [[1,0],[1,0]]
Output: -1
Explanation: No matter what sequence of moves you make, you cannot end with a valid chessboard.


Constraints:

n == board.length
n == board[i].length
2 <= n <= 30
board[i][j] is either0 or 1.


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给你一个 n x n 的二进制矩阵 board。每一步操作中，你可以交换任意两行，或者交换任意两列。

返回将矩阵变换为「棋盘矩阵」所需的最小移动次数。如果任务无法完成，返回 -1。

棋盘矩阵是指：任何 0 和 1 在四个方向上都不相邻（即黑白相间，像国际象棋棋盘）。

示例 1：
输入：board = [[0,1,1,0],[0,1,1,0],[1,0,0,1],[1,0,0,1]]
输出：2
解释：一种可行的移动序列如图所示。第一步交换第一列和第二列，第二步交换第二行和第三行。

示例 2：
输入：board = [[0,1],[1,0]]
输出：0
解释：注意左上角为 0 的棋盘也是合法的棋盘。

示例 3：
输入：board = [[1,0],[1,0]]
输出：-1
解释：无论怎么移动都无法得到合法的棋盘。

提示：
- n == board.length
- n == board[i].length
- 2 <= n <= 30
- board[i][j] 为 0 或 1

## 解题思路

**核心观察 1：不变量（结构检查）**

行交换/列交换不改变任意两行之间「相等或互补」的关系。而合法棋盘（或其行重排）中，任意两行必须相等或互补（每行都是 0101... 或 1010... 型）。因此给定矩阵可解的一个必要条件是：**所有行与第 0 行相等或互补，所有列与第 0 列相等或互补**。

该条件等价于：任意 2x2 子矩阵满足 `board[i][j] ^ board[0][0] ^ board[i][0] ^ board[0][j] == 0`。O(n²) 检查一遍，不满足直接返回 -1。

**核心观察 2：数量检查**

- 第一行中 1 的个数 rowSum、第一列中 1 的个数 colSum 都必须是 floor(n/2) 或 ceil(n/2)，否则最终无法形成 01 交替的行/列。
- 由观察 1 的结构（设与首行同类的行有 k 个）：colSum = k·b00 + (n-k)·(1-b00)，所以 colSum ∈ {floor(n/2), ceil(n/2)} 恰好保证 k ∈ {floor(n/2), ceil(n/2)}，即两类行可以交替排开。列同理。

**核心观察 3：行、列交换相互独立，代价可分别计算**

- 行（列）交换不改变「行与行相等或互补」的等价类结构，也不改变列的等价类归属（反之亦然）。
- 最终棋盘的充要条件：行等价类按奇偶交替排开 **且** 列等价类按奇偶交替排开（此时每行内容自动变成 0101 交替）。
- 因此总代价 = 行归位最少交换数 + 列归位最少交换数。

**最少交换数计算**

每行（列）只有两种类型：与首行同类（type 0）或互补（type 1）。目标排布是两类按奇偶交替，偶数下标放 type 0 或 type 1 两种摆法：

- 对每种摆法统计「错位行数」misplaced（类型与该位置要求的类型不符的行数）。
- 一次交换恰好把两行换到正确奇偶位置，最少交换数 = misplaced / 2。
- 若 misplaced 为奇数说明该摆法不可行（例如奇数 n 时 majority 类必须放偶数下标），跳过；两种摆法取最小。

复杂度 O(n²)。
