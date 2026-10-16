# [面试题 08.02] 迷路的机器人

## Description


```md
https://leetcode.cn/problems/robot-in-a-grid-lcci/description/
* lcci
* Medium (35.67%)
* Likes:    134
* Dislikes: -
* Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
设想有个机器人坐在一个网格的左上角，网格 r 行 c 列。机器人只能向下或向右移动，但不能走到一些被禁止的网格（有障碍物）。设计一种算法，寻找机器人从左上角移动到右下角的路径。
网格中的障碍物和空位置分别用 1 和 0 来表示。
返回一条可行的路径，路径由经过的网格的行号和列号组成。左上角为 0 行 0 列。如果没有可行的路径，返回空数组。
示例 1：
输入：[[0,0,0],[0,1,0],[0,0,0]]
输出：[[0,0],[0,1],[0,2],[1,2],[2,2]]
解释：
输入中标粗的位置即为输出表示的路径，即
0 行 0 列（左上角） -> 0 行 1 列 -> 0 行 2 列 -> 1 行 2 列 -> 2 行 2 列（右下角）
说明：r 和 c 的值均不超过 100。
Hint 1: 为了让机器人到最后一个格子，必须找出到倒数第二个格子的路径。为了到倒数第二个格子，必须找出到倒数第三个格子的路径。
Hint 2: 首先明确是否有路径，以便稍微简化这个问题。然后，修改你的算法跟踪路径。
Hint 3: 再考虑一下你算法的效率。你能优化它吗？

```

## Description (English)

A robot sits in the top-left corner of a grid with r rows and c columns. The robot can only move down or right, and cannot step on forbidden cells (obstacles). Design an algorithm to find a path from the top-left to the bottom-right corner. Obstacles and empty cells are marked 1 and 0. Return one valid path as a list of [row, col] pairs (top-left is (0,0)); return an empty array if no path exists.

Example:
Input: [[0,0,0],[0,1,0],[0,0,0]]
Output: [[0,0],[0,1],[0,2],[1,2],[2,2]]

Note: r and c are at most 100.

## 思路

记忆化 DFS，O(rc)：只向右/向下走，从 (0,0) 深搜，路径走栈维护。`fail[i][j]` 标记"从 (i,j) 无法到终点"的死格——没有它，同一死格会被多条前缀反复重探而指数爆炸；有了它每格至多探索一次。任一分支抵达右下角即沿栈返回路径；根失败返回 []。

## Solution

[SourceCode](./solution.js)
