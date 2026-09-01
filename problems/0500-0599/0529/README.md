# [529] Minesweeper

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minesweeper/description/)

* algorithms
* Medium (68.69%)
* Likes:    2089
* Dislikes: 1089
* Testcase Example:  '[["E","E","E","E","E"],["E","E","M","E","E"],["E","E","E","E","E"],["E","E","E","E","E"]]\n' +

```md
'[3,0]'
Let&#39;s play the minesweeper game (Wikipedia, online game)!
You are given an m x n char matrix board representing the game board where:

&#39;M&#39; represents an unrevealed mine,
&#39;E&#39; represents an unrevealed empty square,
&#39;B&#39; represents a revealed blank square that has no adjacent mines (i.e., above, below, left, right, and all 4 diagonals),
digit (&#39;1&#39; to &#39;8&#39;) represents how many mines are adjacent to this revealed square, and
&#39;X&#39; represents a revealed mine.

You are also given an integer array click where click = [clickr, clickc] represents the next click position among all the unrevealed squares (&#39;M&#39; or &#39;E&#39;).
Return the board after revealing this position according to the following rules:

If a mine &#39;M&#39; is revealed, then the game is over. You should change it to &#39;X&#39;.
If an empty square &#39;E&#39; with no adjacent mines is revealed, then change it to a revealed blank &#39;B&#39; and all of its adjacent unrevealed squares should be revealed recursively.
If an empty square &#39;E&#39; with at least one adjacent mine is revealed, then change it to a digit (&#39;1&#39; to &#39;8&#39;) representing the number of adjacent mines.
Return the board when no more squares will be revealed.


Example 1:


Input: board = [['E','E','E','E','E'],['E','E','M','E','E'],['E','E','E','E','E'],['E','E','E','E','E']], click = [3,0]
Output: [['B','1','E','1','B'],['B','1','M','1','B'],['B','1','1','1','B'],['B','B','B','B','B']]

Example 2:


Input: board = [['B','1','E','1','B'],['B','1','M','1','B'],['B','1','1','1','B'],['B','B','B','B','B']], click = [1,2]
Output: [['B','1','E','1','B'],['B','1','X','1','B'],['B','1','1','1','B'],['B','B','B','B','B']]


Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 50
board[i][j] is either &#39;M&#39;, &#39;E&#39;, &#39;B&#39;, or a digit from &#39;1&#39; to &#39;8&#39;.
click.length == 2
0 <= clickr < m
0 <= clickc < n
board[clickr][clickc] is either &#39;M&#39; or &#39;E&#39;.


```

## 翻译

扫雷游戏。给定 m×n 字符矩阵 board（M=未揭示地雷，E=未揭示空格，B=已揭示空白，数字=周围地雷数，X=已揭示地雷）和点击位置 click。按规则揭示该位置并返回更新后的棋盘。

## Approach

DFS/BFS 模拟揭示过程：
1. 若点击位置是地雷 'M'，改为 'X'，游戏结束
2. 若是空格 'E'，统计周围 8 格的地雷数
   - 若有地雷，改为对应数字
   - 若无地雷，改为 'B'，递归揭示所有相邻的 'E'

时间复杂度 O(m×n)，空间复杂度 O(m×n)。

## Solution

[SourceCode](./solution.js)
