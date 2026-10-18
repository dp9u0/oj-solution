# [面试题 16.04] 井字游戏

## Description


```md
https://leetcode.cn/problems/tic-tac-toe-lcci/description/
* lcci
* Medium (48.41%)
* Likes:    46
* Dislikes: -
* Testcase Example:  '["OX ","OX ","O  "]'
设计一个算法，判断玩家是否赢了井字游戏。输入是一个 N x N 的数组棋盘，由字符" "，"X"和"O"组成，其中字符" "代表一个空位。
以下是井字游戏的规则：
玩家轮流将字符放入空位（" "）中。
第一个玩家总是放字符"O"，且第二个玩家总是放字符"X"。
"X"和"O"只允许放置在空位中，不允许对已放有字符的位置进行填充。
当有N个相同（且非空）的字符填充任何行、列或对角线时，游戏结束，对应该字符的玩家获胜。
当所有位置非空时，也算为游戏结束。
如果游戏结束，玩家不允许再放置字符。
如果游戏存在获胜者，就返回该游戏的获胜者使用的字符（"X"或"O"）；如果游戏以平局结束，则返回 "Draw"；如果仍会有行动（游戏未结束），则返回 "Pending"。
示例 1：
输入： board = ["O X"," XO","X O"]
输出： "X"
示例 2：
输入： board = ["OOX","XXO","OXO"]
输出： "Draw"
解释： 没有玩家获胜且不存在空位
示例 3：
输入： board = ["OOX","XXO","OX "]
输出： "Pending"
解释： 没有玩家获胜且仍存在空位
提示：
1 <= board.length == board[i].length <= 100
输入一定遵循井字棋规则
Hint 1: 如果多次调用hasWon，你的解决方案可能会发生什么变化？
Hint 2: 如果你正在为N×N的大小进行计算，你的解决方案可能会发生什么变化？

```

## Description (English)

Design an algorithm to determine whether a player has won a tic-tac-toe game. The input is an N×N board of characters " " (empty), "X" and "O". Rules: the first player always places "O", the second "X". When N identical non-empty characters fill any row, column or diagonal, that player wins. The game also ends when all cells are filled. Return the winner's character ("X" or "O"); "Draw" if the game ended without a winner; "Pending" if moves remain.

Example 1: board = ["O X"," XO","X O"] → "X"
Example 2: board = ["OOX","XXO","OXO"] → "Draw"
Example 3: board = ["OOX","XXO","OX "] → "Pending"

Note: 1 <= board.length == board[i].length <= 100; the input always follows tic-tac-toe rules.

## 思路

O(n²) 扫描：逐行、逐列、两条对角线检查"全等且非空"即胜者（题目保证合法性，无需处理双胜）；无胜者时看是否存在空位区分 Pending/Draw。天然支持 N×N 泛化。

## Solution

[SourceCode](./solution.js)
