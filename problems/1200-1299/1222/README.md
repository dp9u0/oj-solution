# [1222] Queens That Can Attack the King

## Description

[LeetCode Problem Description](https://leetcode.com/problems/queens-that-can-attack-the-king/description/)

* algorithms
* Medium (72.61%)
* Likes:    1006
* Dislikes: 154
* Testcase Example:  '[[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]]\n[0,0]'

```md
On a 0-indexed 8 x 8 chessboard, there can be multiple black queens and one white king.
You are given a 2D integer array queens where queens[i] = [xQueeni, yQueeni] represents the position of the ith black queen on the chessboard. You are also given an integer array king of length 2 where king = [xKing, yKing] represents the position of the white king.
Return the coordinates of the black queens that can directly attack the king. You may return the answer in any order.

Example 1:


Input: queens = [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]], king = [0,0]
Output: [[0,1],[1,0],[3,3]]
Explanation: The diagram above shows the three queens that can directly attack the king and the three queens that cannot attack the king (i.e., marked with red dashes).

Example 2:


Input: queens = [[0,0],[1,1],[2,2],[3,4],[3,5],[4,4],[4,5]], king = [3,3]
Output: [[2,2],[3,4],[4,4]]
Explanation: The diagram above shows the three queens that can directly attack the king and the three queens that cannot attack the king (i.e., marked with red dashes).


Constraints:

1 <= queens.length < 64
queens[i].length == king.length == 2
0 <= xQueeni, yQueeni, xKing, yKing < 8
All the given positions are unique.


```

## 中文翻译

在 8×8 棋盘上有多个黑皇后和一个白国王，返回能直接攻击国王的皇后坐标（即皇后与国王同行/列/对角线且中间无阻挡）。

## 解题思路

用 Set 存储皇后位置，从国王出发向8个方向（上、下、左、右、四对角）延伸，遇到第一个皇后就加入结果并停止该方向。

## Solution

[SourceCode](./solution.js)
