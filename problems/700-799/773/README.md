# [773] Sliding Puzzle

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sliding-puzzle/description/)

* algorithms
* Hard (74.57%)
* Likes:    2777
* Dislikes: 76
* Testcase Example:  '[[1,2,3],[4,0,5]]'

```md
On an 2 x 3 board, there are five tiles labeled from 1 to 5, and an empty square represented by 0. A move consists of choosing 0 and a 4-directionally adjacent number and swapping it.
The state of the board is solved if and only if the board is [[1,2,3],[4,5,0]].
Given the puzzle board board, return the least number of moves required so that the state of the board is solved. If it is impossible for the state of the board to be solved, return -1.

Example 1:


Input: board = [[1,2,3],[4,0,5]]
Output: 1
Explanation: Swap the 0 and the 5 in one move.

Example 2:


Input: board = [[1,2,3],[5,4,0]]
Output: -1
Explanation: No number of moves will make the board solved.

Example 3:


Input: board = [[4,1,2],[5,0,3]]
Output: 5
Explanation: 5 is the smallest number of moves that solves the board.
An example path:
After move 0: [[4,1,2],[5,0,3]]
After move 1: [[4,1,2],[0,5,3]]
After move 2: [[0,1,2],[4,5,3]]
After move 3: [[1,0,2],[4,5,3]]
After move 4: [[1,2,0],[4,5,3]]
After move 5: [[1,2,3],[4,5,0]]


Constraints:

board.length == 2
board[i].length == 3
0 <= board[i][j] <= 5
Each value board[i][j] is unique.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

2×3 滑块谜题：数字 1..5 与空格 0，每步将 0 与四相邻数字交换。求变到 `[[1,2,3],[4,5,0]]` 的最少步数，不可解返回 −1。

示例：`[[1,2,3],[4,0,5]]` → `1`；`[[1,2,3],[5,4,0]]` → `-1`；`[[4,1,2],[5,0,3]]` → `5`

## 解题思路

状态空间仅 6! = 720：把棋盘序列化为字符串 BFS，预表每个位置的相邻下标（2 行 3 列：[[1,3],[0,2,4],[1,5],[0,4],[1,3,5],[2,4]]）。O(720)。
