# [789] Escape The Ghosts

## Description

[LeetCode Problem Description](https://leetcode.com/problems/escape-the-ghosts/description/)

* algorithms
* Medium (63.58%)
* Likes:    327
* Dislikes: 35
* Testcase Example:  '[[1,0],[0,3]]\n[0,1]'

```md
You are playing a simplified PAC-MAN game on an infinite 2-D grid. You start at the point [0, 0], and you are given a destination point target = [xtarget, ytarget] that you are trying to get to. There are several ghosts on the map with their starting positions given as a 2D array ghosts, where ghosts[i] = [xi, yi] represents the starting position of the ith ghost. All inputs are integral coordinates.
Each turn, you and all the ghosts may independently choose to either move 1 unit in any of the four cardinal directions: north, east, south, or west, or stay still. All actions happen simultaneously.
You escape if and only if you can reach the target before any ghost reaches you. If you reach any square (including the target) at the same time as a ghost, it does not count as an escape.
Return true if it is possible to escape regardless of how the ghosts move, otherwise return false.

Example 1:

Input: ghosts = [[1,0],[0,3]], target = [0,1]
Output: true
Explanation: You can reach the destination (0, 1) after 1 turn, while the ghosts located at (1, 0) and (0, 3) cannot catch up with you.

Example 2:

Input: ghosts = [[1,0]], target = [2,0]
Output: false
Explanation: You need to reach the destination (2, 0), but the ghost at (1, 0) lies between you and the destination.

Example 3:

Input: ghosts = [[2,0]], target = [1,0]
Output: false
Explanation: The ghost can reach the target at the same time as you.


Constraints:

1 <= ghosts.length <= 100
ghosts[i].length == 2
-104 <= xi, yi <= 104
There can be multiple ghosts in the same location.
target.length == 2
-104 <= xtarget, ytarget <= 104


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

在无限 2D 网格上玩简化版吃豆人游戏。你从 [0,0] 出发，目标是到达 target。有若干幽灵，每回合你和幽灵同时移动（可四方向或不动）。你必须在任何幽灵到达 target 之前到达 target 才算逃脱（同时到达不算）。返回是否能逃脱。

## 解题思路

曼哈顿距离。你到 target 的距离为 d = |tx| + |ty|。幽灵可以拦截你的最优策略是直接去 target 等你。所以只要存在某个幽灵到 target 的曼哈顿距离 <= 你的距离，就无法逃脱。返回所有幽灵到 target 距离都严格大于你的距离即可。O(n)。
