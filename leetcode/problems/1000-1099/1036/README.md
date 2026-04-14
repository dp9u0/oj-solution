# [1036] Escape a Large Maze

## Description

[LeetCode Problem Description](https://leetcode.com/problems/escape-a-large-maze/description/)

* algorithms
* Hard (36.53%)
* Likes:    716
* Dislikes: 173
* Testcase Example:  '[[0,1],[1,0]]\n[0,0]\n[0,2]'

```md
There is a 1 million by 1 million grid on an XY-plane, and the coordinates of each grid square are (x, y).
We start at the source = [sx, sy] square and want to reach the target = [tx, ty] square. There is also an array of blocked squares, where each blocked[i] = [xi, yi] represents a blocked square with coordinates (xi, yi).
Each move, we can walk one square north, east, south, or west if the square is not in the array of blocked squares. We are also not allowed to walk outside of the grid.
Return true if and only if it is possible to reach the target square from the source square through a sequence of valid moves.

Example 1:

Input: blocked = [[0,1],[1,0]], source = [0,0], target = [0,2]
Output: false
Explanation: The target square is inaccessible starting from the source square because we cannot move.
We cannot move north or east because those squares are blocked.
We cannot move south or west because we cannot go outside of the grid.

Example 2:

Input: blocked = [], source = [0,0], target = [999999,999999]
Output: true
Explanation: Because there are no blocked cells, it is possible to reach the target square.


Constraints:

0 <= blocked.length <= 200
blocked[i].length == 2
0 <= xi, yi < 106
source.length == target.length == 2
0 <= sx, sy, tx, ty < 106
source != target
It is guaranteed that source and target are not blocked.


```

## 题目翻译

在一个 10^6 × 10^6 的网格上，从 source 出发走到 target。有些格子被 blocked 数组中的坐标阻塞。每次可以上下左右移动一格，不能走到阻塞格子或网格外。判断是否能从 source 到达 target。

## 解题思路

**有限 BFS + 包围面积上界**

- blocked 最多 200 个格子，它们能包围的最大面积为 `b*(b-1)/2`（斜线围墙）
- 从 source 做 BFS，限制访问不超过 maxArea 个格子：
  - 若到达 target → true
  - 若访问格子数超过 maxArea → source 已逃出包围圈
  - 若 BFS 耗尽且未超过 maxArea → source 被围住，return false
- 同理从 target 做 BFS
- 两者都能逃出包围圈（或相互到达）时返回 true

## Solution

[SourceCode](./solution.js)
