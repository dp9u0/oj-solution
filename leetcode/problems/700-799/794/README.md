# [794] Valid Tic-Tac-Toe State

## Description

[LeetCode Problem Description](https://leetcode.com/problems/valid-tic-tac-toe-state/description/)

* algorithms
* Medium (34.77%)
* Likes:    587
* Dislikes: 1168
* Testcase Example:  '["O  ","   ","   "]'

```md
Given a Tic-Tac-Toe board as a string array board, return true if and only if it is possible to reach this board position during the course of a valid tic-tac-toe game.
The board is a 3 x 3 array that consists of characters &#39; &#39;, &#39;X&#39;, and &#39;O&#39;. The &#39; &#39; character represents an empty square.
Here are the rules of Tic-Tac-Toe:

Players take turns placing characters into empty squares &#39; &#39;.
The first player always places &#39;X&#39; characters, while the second player always places &#39;O&#39; characters.
&#39;X&#39; and &#39;O&#39; characters are always placed into empty squares, never filled ones.
The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.
The game also ends if all squares are non-empty.
No more moves can be played if the game is over.


Example 1:


Input: board = ['O  ','   ','   ']
Output: false
Explanation: The first player always plays 'X'.

Example 2:


Input: board = ['XOX',' X ','   ']
Output: false
Explanation: Players take turns making moves.

Example 3:


Input: board = ['XOX','O O','XOX']
Output: true


Constraints:

board.length == 3
board[i].length == 3
board[i][j] is either &#39;X&#39;, &#39;O&#39;, or &#39; &#39;.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定井字棋棋盘，判断是否是一个合法的棋局状态。规则：X 先手，轮流下，三连线即结束。

## 解题思路

检查三个条件：
1. X 的数量必须等于 O 或比 O 多 1
2. 如果 X 赢了，X 数量必须比 O 多 1
3. 如果 O 赢了，X 数量必须等于 O
两者不能同时赢（特殊情况可以同时赢，但按上述条件检查即可）。O(1)。
