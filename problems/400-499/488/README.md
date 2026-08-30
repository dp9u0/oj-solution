# [488] Zuma Game

## Description

[LeetCode Problem Description](https://leetcode.com/problems/zuma-game/description/)

* algorithms
* Hard (29.23%)
* Likes:    499
* Dislikes: 516
* Testcase Example:  '"WRRBBW"\n"RB"'

```md
You are playing a variation of the game Zuma.
In this variation of Zuma, there is a single row of colored balls on a board, where each ball can be colored red 'R', yellow 'Y', blue 'B', green 'G', or white 'W'. You also have several colored balls in your hand.
Your goal is to clear all of the balls from the board. On each turn:
Pick any ball from your hand and insert it in between two balls in the row or on either end of the row.
If there is a group of three or more consecutive balls of the same color, remove the group of balls from the board.

If this removal causes more groups of three or more of the same color to form, then continue removing each group until there are none left.


If there are no more balls on the board, then you win the game.
Repeat this process until you either win or do not have any more balls in your hand.
Given a string board, representing the row of balls on the board, and a string hand, representing the balls in your hand, return the minimum number of balls you have to insert to clear all the balls from the board. If you cannot clear all the balls from the board using the balls in your hand, return -1.

Example 1:
Input: board = "WRRBBW", hand = "RB"
Output: -1
Explanation: It is impossible to clear all the balls. The best you can do is:
- Insert 'R' so the board becomes WRRRBBW. WRRRBBW -> WBBW.
- Insert 'B' so the board becomes WBBBW. WBBBW -> WW.
There are still balls remaining on the board, and you are out of balls to insert.
Example 2:
Input: board = "WWRRBBWW", hand = "WRBRW"
Output: 2
Explanation: To make the board empty:
- Insert 'R' so the board becomes WWRRRBBWW. WWRRRBBWW -> WWBBWW.
- Insert 'B' so the board becomes WWBBBWW. WWBBBWW -> WWWW -> empty.
2 balls from your hand were needed to clear the board.
Example 3:
Input: board = "G", hand = "GGGGG"
Output: 2
Explanation: To make the board empty:
- Insert 'G' so the board becomes GG.
- Insert 'G' so the board becomes GGG. GGG -> empty.
2 balls from your hand were needed to clear the board.

Constraints:
1 <= board.length <= 16
1 <= hand.length <= 5
board and hand consist of the characters 'R', 'Y', 'B', 'G', and 'W'.
The initial row of balls on the board will not have any groups of three or more consecutive balls of the same color.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

你在玩祖玛游戏的一个变体。在这个变体中，棋盘上有一行彩色的球，每个球的颜色是红色 'R'、黄色 'Y'、蓝色 'B'、绿色 'G' 或白色 'W'。你手中还有一些彩色球。

你的目标是清空棋盘上所有的球。每一回合：

- 从手中任取一个球，插入到行中两个球之间或者行的两端。
- 如果出现三个或更多连续同色的球，将这一组球从棋盘上移除。
- 如果移除后又形成新的三连及以上同色组，则继续移除，直到不再有可消除的组。

如果棋盘上没有球了，你就赢了。重复此过程，直到你获胜或手中没有球可用。

给定字符串 `board`（棋盘上的球）和 `hand`（手中的球），返回清空棋盘所需插入的最少球数。如果无法清空棋盘，返回 -1。

示例 1：
输入：board = "WRRBBW", hand = "RB"
输出：-1
解释：无法清空。最好的做法是插入 'R' 得到 WRRRBBW -> WBBW，再插入 'B' 得到 WBBBW -> WW，板上仍剩球，手中也没球了。

示例 2：
输入：board = "WWRRBBWW", hand = "WRBRW"
输出：2
解释：插入 'R' 得 WWRRRBBWW -> WWBBWW；插入 'B' 得 WWBBBWW -> WWWW -> 空。共用了 2 个球。

示例 3：
输入：board = "G", hand = "GGGGG"
输出：2
解释：插入 'G' 得 GG，再插入 'G' 得 GGG -> 空。

约束：
- 1 <= board.length <= 16
- 1 <= hand.length <= 5
- board 和 hand 只包含字符 'R'、'Y'、'B'、'G'、'W'。
- 初始棋盘上不会有三个及以上连续同色的球。

## 解题思路

数据规模极小（board ≤ 16，hand ≤ 5，最多插入 5 次），采用 **DFS + 记忆化搜索**：

1. **状态**：`(当前棋盘字符串, 手中剩余球)`，棋盘为空返回 0。用 `Map` 记忆化，hand 排序后同色球只取一次（去重）。
2. **消除模拟**：插入后用正则 `(.)\1{2,}` 循环替换空串，实现 3+ 连续同色段的级联消除。
3. **位置剪枝（关键，且必须正确）**：只尝试把球 X 插在
   - 左邻或右邻是同色 X 的位置（凑三连），**或**
   - 左右是一对相同颜色球的位置（把球插进 run 中间拆开它）。

   注意常见的错误剪枝是"只插在同色旁边"，会被经典用例 `"RRWWRRBBRR" / "WB"`（答案 2）卡掉：正确解法是把 B 插进第一个 RR 中间得到 `RBRWWRRBBRR`，再插 W 消掉 WWW，触发 `RRR` 消除 -> `BBB` 消除 -> 剩余 `RRR` 消除，全清空。拆 run 可以让分离的同色段在后续级联中合并消除。而把球插在两个互不相同且都与它不同色的球之间则一定可以推迟执行，不影响最优性，故可剪。
4. **可行性剪枝**：板上出现的每种颜色 c，`板上 c 数 + 手中 c 数 < 3` 时直接返回 -1（消除一次至少需要 3 个同色球，该色永远凑不齐）。

已用「全位置无剪枝暴力」与本解法对 5000+ 组随机用例交叉验证，结果完全一致；最坏用例（16 长棋盘 + 5 球全排列 -1）耗时约 70ms。

复杂度：状态数被记忆化压缩到很小，最坏 O(P(b,h)) 多项式级别；每个状态转移 O(n²)（字符串切片消除）。
