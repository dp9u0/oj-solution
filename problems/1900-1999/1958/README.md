# [1958] Check if Move is Legal

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-move-is-legal/description/)

* algorithms
* Medium (49.95%)
* Likes:    181
* Dislikes: 283
* Testcase Example:  '[[".",".",".","B",".",".",".","."],[".",".",".","W",".",".",".","."],[".",".",".","W",".",".",".","."],[".",".",".","W",".",".",".","."],["W","B","B",".","W","W","W","B"],[".",".",".","B",".",".",".","."],[".",".",".","B",".",".",".","."],[".",".",".","W",".",".",".","."]]\n' +

```md
'4\n' +
'3\n' +
'"B"'
You are given a 0-indexed 8 x 8 grid board, where board[r][c] represents the cell (r, c) on a game board. On the board, free cells are represented by &#39;.&#39;, white cells are represented by &#39;W&#39;, and black cells are represented by &#39;B&#39;.
Each move in this game consists of choosing a free cell and changing it to the color you are playing as (either white or black). However, a move is only legal if, after changing it, the cell becomes the endpoint of a good line (horizontal, vertical, or diagonal).
A good line is a line of three or more cells (including the endpoints) where the endpoints of the line are one color, and the remaining cells in the middle are the opposite color (no cells in the line are free). You can find examples for good lines in the figure below:

Given two integers rMove and cMove and a character color representing the color you are playing as (white or black), return true if changing cell (rMove, cMove) to color color is a legal move, or false if it is not legal.

Example 1:


Input: board = [['.','.','.','B','.','.','.','.'],['.','.','.','W','.','.','.','.'],['.','.','.','W','.','.','.','.'],['.','.','.','W','.','.','.','.'],['W','B','B','.','W','W','W','B'],['.','.','.','B','.','.','.','.'],['.','.','.','B','.','.','.','.'],['.','.','.','W','.','.','.','.']], rMove = 4, cMove = 3, color = 'B'
Output: true
Explanation: &#39;.&#39;, &#39;W&#39;, and &#39;B&#39; are represented by the colors blue, white, and black respectively, and cell (rMove, cMove) is marked with an &#39;X&#39;.
The two good lines with the chosen cell as an endpoint are annotated above with the red rectangles.

Example 2:


Input: board = [['.','.','.','.','.','.','.','.'],['.','B','.','.','W','.','.','.'],['.','.','W','.','.','.','.','.'],['.','.','.','W','B','.','.','.'],['.','.','.','.','.','.','.','.'],['.','.','.','.','B','W','.','.'],['.','.','.','.','.','.','W','.'],['.','.','.','.','.','.','.','B']], rMove = 4, cMove = 4, color = 'W'
Output: false
Explanation: While there are good lines with the chosen cell as a middle cell, there are no good lines with the chosen cell as an endpoint.


Constraints:

board.length == board[r].length == 8
0 <= rMove, cMove < 8
board[rMove][cMove] == &#39;.&#39;
color is either &#39;B&#39; or &#39;W&#39;.


```

## 中文翻译

在 8x8 棋盘上放置一个棋子，判断是否合法。合法条件是放置后，该位置成为至少一条"好线"的端点。好线是指 3 个及以上的连续格子，两端颜色相同，中间全部为相反颜色（无空格）。

## 解题思路

从放置位置出发，沿 8 个方向检查。每个方向先跳过连续的相反颜色格子，然后看是否能到达一个同颜色格子。如果中间经过了至少 1 个相反颜色格子，则该方向形成好线。

## Solution

[SourceCode](./solution.js)
