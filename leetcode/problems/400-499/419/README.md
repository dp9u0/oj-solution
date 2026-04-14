# [419] Battleships in a Board

## Description

[LeetCode Problem Description](https://leetcode.com/problems/battleships-in-a-board/description/)

* algorithms
* Medium (77.46%)
* Likes:    2523
* Dislikes: 1030
* Testcase Example:  '[["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]'

```md
Given an m x n matrix board where each cell is a battleship &#39;X&#39; or empty &#39;.&#39;, return the number of the battleships on board.
Battleships can only be placed horizontally or vertically on board. In other words, they can only be made of the shape 1 x k (1 row, k columns) or k x 1 (k rows, 1 column), where k can be of any size. At least one horizontal or vertical cell separates between two battleships (i.e., there are no adjacent battleships).

Example 1:


Input: board = [['X','.','.','X'],['.','.','.','X'],['.','.','.','X']]
Output: 2

Example 2:

Input: board = [['.']]
Output: 0


Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 200
board[i][j] is either &#39;.&#39; or &#39;X&#39;.


Follow up: Could you do it in one-pass, using only O(1) extra memory and without modifying the values board?

```

## 翻译

给定 m×n 棋盘，'X' 为战舰，'.' 为空。战舰水平或垂直排列且互不相邻。统计战舰数量。

## Approach

O(1) 空间一次遍历：只统计战舰"头部"，即上方和左方都不是 'X' 的 'X' 格子。

## Solution

[SourceCode](./solution.js)
