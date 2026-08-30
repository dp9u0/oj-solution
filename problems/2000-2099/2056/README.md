# [2056] Number of Valid Move Combinations On Chessboard

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-valid-move-combinations-on-chessboard/description/)

* algorithms
* Hard (48.45%)
* Likes:    80
* Dislikes: 298
* Testcase Example:  '["rook"]\n[[1,1]]'

```md
There is an 8 x 8 chessboard containing n pieces (rooks, queens, or bishops). You are given a string array pieces of length n, where pieces[i] describes the type (rook, queen, or bishop) of the ith piece. In addition, you are given a 2D integer array positions also of length n, where positions[i] = [ri, ci] indicates that the ith piece is currently at the 1-based coordinate (ri, ci) on the chessboard.
When making a move for a piece, you choose a destination square that the piece will travel toward and stop on.
A rook can only travel horizontally or vertically from (r, c) to the direction of (r+1, c), (r-1, c), (r, c+1), or (r, c-1).
A queen can only travel horizontally, vertically, or diagonally from (r, c) to the direction of (r+1, c), (r-1, c), (r, c+1), (r, c-1), (r+1, c+1), (r+1, c-1), (r-1, c+1), (r-1, c-1).
A bishop can only travel diagonally from (r, c) to the direction of (r+1, c+1), (r+1, c-1), (r-1, c+1), (r-1, c-1).
You must make a move for every piece on the board simultaneously. A move combination consists of all the moves performed on all the given pieces. Every second, each piece will instantaneously travel one square towards their destination if they are not already at it. All pieces start traveling at the 0th second. A move combination is invalid if, at a given time, two or more pieces occupy the same square.
Return the number of valid move combinations​​​​​.
Notes:
No two pieces will start in the same square.
You may choose the square a piece is already on as its destination.
If two pieces are directly adjacent to each other, it is valid for them to move past each other and swap positions in one second.

Example 1:
Input: pieces = ["rook"], positions = [[1,1]]
Output: 15
Explanation: The image above shows the possible squares the piece can move to.
Example 2:
Input: pieces = ["queen"], positions = [[1,1]]
Output: 22
Explanation: The image above shows the possible squares the piece can move to.
Example 3:
Input: pieces = ["bishop"], positions = [[4,3]]
Output: 12
Explanation: The image above shows the possible squares the piece can move to.

Constraints:
n == pieces.length
n == positions.length
1 <= n <= 4
pieces only contains the strings "rook", "queen", and "bishop".
There will be at most one queen on the chessboard.
1 <= ri, ci <= 8
Each positions[i] is distinct.
Hint 1: N is small, we can generate all possible move combinations.
Hint 2: For each possible move combination, determine which ones are valid.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

8x8 棋盘上有 n 个棋子（车 rook、后 queen、象 bishop）。给定长度为 n 的字符串数组 pieces，pieces[i] 表示第 i 个棋子的类型；给定同样长度的二维整数数组 positions，positions[i] = [ri, ci] 表示第 i 个棋子当前位于棋盘上 1-based 坐标 (ri, ci)。

为一个棋子走棋时，你要选择一个目标格子，棋子会朝它移动并停在该格上。

- 车（rook）只能沿水平或垂直方向移动：从 (r, c) 向 (r+1, c)、(r-1, c)、(r, c+1)、(r, c-1) 方向行进。
- 后（queen）可以沿水平、垂直或对角线方向移动：上述 4 个方向再加 (r+1, c+1)、(r+1, c-1)、(r-1, c+1)、(r-1, c-1)。
- 象（bishop）只能沿对角线方向移动：即上述 4 个对角方向。

你必须让棋盘上**每个棋子同时**走一步（作出一次移动）。一个"移动组合"由所有棋子的移动共同构成。每一秒，每个尚未到达目标的棋子会瞬间向目标方向移动一格。所有棋子从第 0 秒开始移动。如果某个时刻有两个或更多棋子占据同一格，则该移动组合无效。

返回有效移动组合的数量。

注意：
- 没有两个棋子起始在同一格。
- 可以选择棋子当前所在的格子作为目标（即原地不动）。
- 如果两个棋子直接相邻，它们互相穿过并在一秒内交换位置是合法的。

示例 1：pieces = ["rook"], positions = [[1,1]]，输出 15（车在角上可达 14 格 + 原地）。
示例 2：pieces = ["queen"], positions = [[1,1]]，输出 22（14 直线格 + 7 对角格 + 原地）。
示例 3：pieces = ["bishop"], positions = [[4,3]]，输出 12。

## 解题思路

**枚举 + 模拟验证**（n ≤ 4，棋盘仅 8x8，数据规模极小）：

1. **生成候选目标**：对每个棋子，收集"原地不动"以及沿其允许的每个方向能走到的所有格子。单个棋子候选数最多 22（角上的皇后）。
2. **回溯枚举组合**：从每个棋子的候选集中各选一个目标，构成一个移动组合。最坏规模约 22 × 15 × 15 × 15 ≈ 7.4 万。
3. **验证组合**：对组合中每个棋子展开其位置序列——从起点沿单位方向向量每秒一格直到目标，到达后永远停留在目标（路径长度 ≤ 8）。逐时间步 t = 0..7 取所有棋子位置的快照，若同一时刻出现重复格子则组合无效。
   - 快照检查天然支持"相邻互换穿过"：两子交换位置时，任一时刻的快照都不会同格，仅路径交叉但不同时同格，判为合法。
4. 统计所有通过验证的组合数。

时间复杂度：约 O(C × n × 8)，C 为组合数上限 ~7.4 万，总计不到 250 万次基本操作，轻松通过。
