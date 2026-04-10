# [1275] Find Winner on a Tic Tac Toe Game

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/description/)

* algorithms
* Easy (54.58%)
* Likes:    1629
* Dislikes: 370
* Testcase Example:  '[[0,0],[2,0],[1,1],[2,1],[2,2]]'

```md
Tic-tac-toe is played by two players A and B on a 3 x 3 grid. The rules of Tic-Tac-Toe are:

Players take turns placing characters into empty squares &#39; &#39;.
The first player A always places &#39;X&#39; characters, while the second player B always places &#39;O&#39; characters.
&#39;X&#39; and &#39;O&#39; characters are always placed into empty squares, never on filled ones.
The game ends when there are three of the same (non-empty) character filling any row, column, or diagonal.
The game also ends if all squares are non-empty.
No more moves can be played if the game is over.

Given a 2D integer array moves where moves[i] = [rowi, coli] indicates that the ith move will be played on grid[rowi][coli]. return the winner of the game if it exists (A or B). In case the game ends in a draw return 'Draw'. If there are still movements to play return 'Pending'.
You can assume that moves is valid (i.e., it follows the rules of Tic-Tac-Toe), the grid is initially empty, and A will play first.

Example 1:


Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]
Output: 'A'
Explanation: A wins, they always play first.

Example 2:


Input: moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]
Output: 'B'
Explanation: B wins.

Example 3:


Input: moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]
Output: 'Draw'
Explanation: The game ends in a draw since there are no moves to make.


Constraints:

1 <= moves.length <= 9
moves[i].length == 2
0 <= rowi, coli <= 2
There are no repeated elements on moves.
moves follow the rules of tic tac toe.


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

井字棋由两名玩家 A 和 B 在 3×3 的棋盘上进行。规则如下：

- 玩家轮流在空格中放置字符，A 先手放 'X'，B 后手放 'O'
- 当某行、某列或某对角线填满三个相同字符时游戏结束
- 所有格子填满时游戏也结束

给定一个二维整数数组 `moves`，其中 `moves[i] = [row, col]` 表示第 i 步落子位置。返回胜者（'A' 或 'B'），平局返回 'Draw'，还有空格可下返回 'Pending'。

**示例 1：** moves = [[0,0],[2,0],[1,1],[2,1],[2,2]] → 'A'（A 赢）
**示例 2：** moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]] → 'B'（B 赢）
**示例 3：** moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]] → 'Draw'

**约束：** 1 <= moves.length <= 9，无重复落子

## Approach

模拟棋盘过程，用两个数组分别记录 A 和 B 在每行、每列、对角线的计数。

- 用 rowsA[3], colsA[3], diagA, antiDiagA 记录 A 的计数
- 同理 B 也有对应计数
- 每次落子后检查对应行/列/对角线是否达到 3，达到则该玩家获胜
- 如果所有步数走完无人获胜，检查是否满 9 步来决定 Draw 还是 Pending

时间复杂度 O(n)，空间复杂度 O(1)。
