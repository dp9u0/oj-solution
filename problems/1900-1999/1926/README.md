# [1926] Nearest Exit from Entrance in Maze

## Description

[LeetCode Problem Description](https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/description/)

* algorithms
* Medium (48.45%)
* Likes:    2636
* Dislikes: 128
* Testcase Example:  '[["+","+",".","+"],[".",".",".","+"],["+","+","+","."]]\n[1,2]'

```md
You are given an m x n matrix maze (0-indexed) with empty cells (represented as &#39;.&#39;) and walls (represented as &#39;+&#39;). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.
In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.
Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.

Example 1:


Input: maze = [['+','+','.','+'],['.','.','.','+'],['+','+','+','.']], entrance = [1,2]
Output: 1
Explanation: There are 3 exits in this maze at [1,0], [0,2], and [2,3].
Initially, you are at the entrance cell [1,2].
- You can reach [1,0] by moving 2 steps left.
- You can reach [0,2] by moving 1 step up.
It is impossible to reach [2,3] from the entrance.
Thus, the nearest exit is [0,2], which is 1 step away.

Example 2:


Input: maze = [['+','+','+'],['.','.','.'],['+','+','+']], entrance = [1,0]
Output: 2
Explanation: There is 1 exit in this maze at [1,2].
[1,0] does not count as an exit since it is the entrance cell.
Initially, you are at the entrance cell [1,0].
- You can reach [1,2] by moving 2 steps right.
Thus, the nearest exit is [1,2], which is 2 steps away.

Example 3:


Input: maze = [['.','+']], entrance = [0,0]
Output: -1
Explanation: There are no exits in this maze.


Constraints:

maze.length == m
maze[i].length == n
1 <= m, n <= 100
maze[i][j] is either &#39;.&#39; or &#39;+&#39;.
entrance.length == 2
0 <= entrancerow < m
0 <= entrancecol < n
entrance will always be an empty cell.


```

## 翻译

给定迷宫矩阵（'.' 空格，'+' 墙）和入口位置，出口定义为边界上的空格（入口不算）。返回从入口到最近出口的最短步数，不存在则返回 -1。

## Approach

BFS 从入口出发，逐层扩展四个方向。第一个到达边界空格的即为最近出口，返回步数。

## Solution

[SourceCode](./solution.js)
