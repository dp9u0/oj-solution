# [2061] 扫地机器人清扫过的空间个数

## Description


```md
https://leetcode.cn/problems/number-of-spaces-cleaning-robot-cleaned/description/
* algorithms
* Medium (53.20%)
* Likes:    10
* Dislikes: -
* Testcase Example:  '[[0,0,0],[1,1,0],[0,0,0]]'
一个房间用一个从 0 开始索引的二维二进制矩阵 room 表示，其中 0 表示空闲空间， 1 表示放有物体的空间。在每个测试用例中，房间左上角永远是空闲的。
一个扫地机器人面向右侧，从左上角开始清扫。机器人将一直前进，直到抵达房间边界或触碰到物体时，机器人将会顺时针旋转 90 度并重复以上步骤。初始位置和所有机器人走过的空间都会被它清扫干净。
若机器人持续运转下去，返回被清扫干净的空间数量。

示例 1：
输入: room = [[0,0,0],[1,1,0],[0,0,0]]
输出: 7
解释:
机器人清理了位于 (0, 0)、 (0, 1) 和 (0, 2) 的空间。
机器人位于房间边界，所以它顺时针旋转 90 度，现在面向下。
机器人清理了位于 (1, 2) 和 (2, 2) 的空间。
机器人位于房间边界，所以它顺时针旋转 90 度，现在面向左。
机器人清理了位于 (2, 1) 和 (2, 0) 的空间。
机器人已清理了所有 7 处空闲空间，所以返回 7。
示例 2：
输入: room = [[0,1,0],[1,0,0],[0,0,0]]
输出t: 1
解释:
机器人清理了位于 (0, 0) 的空间。
机器人触碰到了物体，所以它顺时针旋转 90 度，现在面向下。
机器人触碰到了物体，所以它顺时针旋转 90 度，现在面向左。
机器人位于房间边界，所以它顺时针旋转 90 度，现在面向上。
机器人位于房间边界，所以它顺时针旋转 90 度，现在面向右。
机器人回到了起始位置。
机器人清理了 1 处空间，所以返回 1。

提示：
m == room.length
n == room[r].length
1 <= m, n <= 300
room[r][c] 只会是 0 或 1 。
room[0][0] == 0
Hint 1: Simulate how the robot moves and keep track of how many spaces it has cleaned so far.
Hint 2: When can we stop the simulation?
Hint 3: When the robot reaches a space that it has already cleaned and is facing the same direction as before, we can stop the simulation.

```

## Solution

[SourceCode](./solution.js)

## English Translation

A room is a 0-indexed binary matrix `room` (0 = free, 1 = obstacle; top-left always free). A cleaning robot starts at the top-left facing right. It moves forward until it hits the room boundary or an obstacle, then rotates clockwise 90 degrees and repeats. The initial cell and every traversed cell become clean.

Return the number of cleaned cells if the robot runs indefinitely.

Example 1:
Input: room = [[0,0,0],[1,1,0],[0,0,0]]
Output: 7

Example 2:
Input: room = [[0,1,0],[1,0,0],[0,0,0]]
Output: 1

Constraints: 1 <= m, n <= 300; room[0][0] == 0.

## Approach

Simulate the run per direction: from the current cell advance while the next cell is in bounds and free, marking cells clean. When blocked, turn clockwise.

The robot's trajectory is a deterministic cycle: track the state `(cell, direction)` at the start of each straight leg; once a state repeats, everything afterward repeats, so stop. At most m * n * 4 states.

Time O(m * n).
