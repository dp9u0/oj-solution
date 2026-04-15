# [3342] Find Minimum Time to Reach Last Room II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/description/)

* algorithms
* Medium (67.78%)
* Likes:    362
* Dislikes: 57
* Testcase Example:  '[[0,4],[4,4]]'

```md
There is a dungeon with n x m rooms arranged as a grid.
You are given a 2D array moveTime of size n x m, where moveTime[i][j] represents the minimum time in seconds when you can start moving to that room. You start from the room (0, 0) at time t = 0 and can move to an adjacent room. Moving between adjacent rooms takes one second for one move and two seconds for the next, alternating between the two.
Return the minimum time to reach the room (n - 1, m - 1).
Two rooms are adjacent if they share a common wall, either horizontally or vertically.

Example 1:

Input: moveTime = [[0,4],[4,4]]
Output: 7
Explanation:
The minimum time required is 7 seconds.

At time t == 4, move from room (0, 0) to room (1, 0) in one second.
At time t == 5, move from room (1, 0) to room (1, 1) in two seconds.


Example 2:

Input: moveTime = [[0,0,0,0],[0,0,0,0]]
Output: 6
Explanation:
The minimum time required is 6 seconds.

At time t == 0, move from room (0, 0) to room (1, 0) in one second.
At time t == 1, move from room (1, 0) to room (1, 1) in two seconds.
At time t == 3, move from room (1, 1) to room (1, 2) in one second.
At time t == 4, move from room (1, 2) to room (1, 3) in two seconds.


Example 3:

Input: moveTime = [[0,1],[1,2]]
Output: 4


Constraints:

2 <= n == moveTime.length <= 750
2 <= m == moveTime[i].length <= 750
0 <= moveTime[i][j] <= 109


```

## 题目翻译

给定 n×m 网格 moveTime，moveTime[i][j] 表示可以进入房间 (i,j) 的最早时间。从 (0,0) 出发，移动花费交替为 1 秒和 2 秒。求到达 (n-1, m-1) 的最短时间。

## 解题思路

Dijkstra。状态为 (i, j, step_parity)，step_parity 表示下一步花费 1 还是 2。dist[i][j][0] 和 dist[i][j][1] 分别表示到达 (i,j) 时下一步花费 1 或 2 的最短时间。

时间复杂度 O(nm log(nm))

## Solution

[SourceCode](./solution.js)
