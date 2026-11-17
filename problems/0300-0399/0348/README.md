# [348] 设计井字棋

## Description


```md
https://leetcode.cn/problems/design-tic-tac-toe/description/
* algorithms
* Medium (58.50%)
* Likes:    169
* Dislikes: -
* Testcase Example:  '["TicTacToe","move","move","move","move","move","move","move"]\n' +
'[[3],[0,0,1],[0,2,2],[2,2,1],[1,1,2],[2,0,1],[1,0,2],[2,1,1]]'
请在 n × n 的棋盘上，实现一个判定井字棋（Tic-Tac-Toe）胜负的神器，判断每一次玩家落子后，是否有胜出的玩家。
在这个井字棋游戏中，会有 2 名玩家，他们将轮流在棋盘上放置自己的棋子。
在实现这个判定器的过程中，你可以假设以下这些规则一定成立：
1. 每一步棋都是在棋盘内的，并且只能被放置在一个空的格子里；
2. 一旦游戏中有一名玩家胜出的话，游戏将不能再继续；
3. 一个玩家如果在同一行、同一列或者同一斜对角线上都放置了自己的棋子，那么他便获得胜利。
示例:
给定棋盘边长 n = 3, 玩家 1 的棋子符号是 "X"，玩家 2 的棋子符号是 "O"。
TicTacToe toe = new TicTacToe(3);
toe.move(0, 0, 1); -> 函数返回 0 (此时，暂时没有玩家赢得这场对决)
X





// 玩家 1 在 (0, 0) 落子。



toe.move(0, 2, 2); -> 函数返回 0 (暂时没有玩家赢得本场比赛)
X

O



// 玩家 2 在 (0, 2) 落子。



toe.move(2, 2, 1); -> 函数返回 0 (暂时没有玩家赢得比赛)
X

O



// 玩家 1 在 (2, 2) 落子。


X
toe.move(1, 1, 2); -> 函数返回 0 (暂没有玩家赢得比赛)
X

O

O

// 玩家 2 在 (1, 1) 落子。


X
toe.move(2, 0, 1); -> 函数返回 0 (暂无玩家赢得比赛)
X

O

O

// 玩家 1 在 (2, 0) 落子。
X

X
toe.move(1, 0, 2); -> 函数返回 0 (没有玩家赢得比赛)
X

O
O
O

// 玩家 2 在 (1, 0) 落子.
X

X
toe.move(2, 1, 1); -> 函数返回 1 (此时，玩家 1 赢得了该场比赛)
X

O
O
O

// 玩家 1 在 (2, 1) 落子。
X
X
X

提示：
2 <= n <= 100
玩家是 1 或 2。
0 <= row, col < n
每次调用 move 时 (row, col) 都是不同的。
最多调用 move  n2 次。
进阶:
您有没有可能将每一步的 move() 操作优化到比 O(n2) 更快吗?
Hint 1: Could you trade extra space such that move() operation can be done in O(1)?
Hint 2: You need two arrays: int rows[n], int cols[n], plus two variables: diagonal, anti_diagonal.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Design a TicTacToe for two players over an n×n board: `move(row, col, player)` places a mark and returns `player` if that move wins (a full row, column, or diagonal of the player's marks), otherwise 0.

**Constraints:**
- 1 <= n <= 100, each move is valid, at most n² calls

## Approach

每玩家独立维护 行/列/两对角 计数器(rows[player][rowIdx] 等):落子后对应计数 +1,任一达到 n 即获胜。计数按"玩家×位置"分列,避免混入对手落子;move 均摊 O(1)。

时间 O(1) 每步,空间 O(n)(计数器)。
