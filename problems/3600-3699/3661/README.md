# [3661] Maximum Walls Destroyed by Robots

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-walls-destroyed-by-robots/description/)

* algorithms
* Hard (47.98%)
* Likes:    333
* Dislikes: 31
* Testcase Example:  '[4]\n[3]\n[1,10]'

```md

There is an endless straight line populated with some robots and walls. You are given integer arrays robots, distance, and walls:


robots[i] is the position of the ith robot.
distance[i] is the maximum distance the ith robot&#39;s bullet can travel.
walls[j] is the position of the jth wall.

Every robot has one bullet that can either fire to the left or the right at most distance[i] meters.
A bullet destroys every wall in its path that lies within its range. Robots are fixed obstacles: if a bullet hits another robot before reaching a wall, it immediately stops at that robot and cannot continue.
Return the maximum number of unique walls that can be destroyed by the robots.
Notes:

A wall and a robot may share the same position; the wall can be destroyed by the robot at that position.
Robots are not destroyed by bullets.


Example 1:

Input: robots = [4], distance = [3], walls = [1,10]
Output: 1
Explanation:

robots[0] = 4 fires left with distance[0] = 3, covering [1, 4] and destroys walls[0] = 1.
Thus, the answer is 1.


Example 2:

Input: robots = [10,2], distance = [5,1], walls = [5,2,7]
Output: 3
Explanation:

robots[0] = 10 fires left with distance[0] = 5, covering [5, 10] and destroys walls[0] = 5 and walls[2] = 7.
robots[1] = 2 fires left with distance[1] = 1, covering [1, 2] and destroys walls[1] = 2.
Thus, the answer is 3.


Example 3:

Input: robots = [1,2], distance = [100,1], walls = [10]
Output: 0
Explanation:
In this example, only robots[0] can reach the wall, but its shot to the right is blocked by robots[1]; thus the answer is 0.


Constraints:

1 <= robots.length == distance.length <= 105
1 <= walls.length <= 105
1 <= robots[i], walls[j] <= 109
1 <= distance[i] <= 105
All values in robots are unique
All values in walls are unique


```

## 翻译

直线上有若干机器人和墙。每个机器人可以向左或向右发射一颗子弹（最远 distance[i]），摧毁路径上的所有墙。子弹碰到其他机器人会停止。求最多能摧毁多少面不同的墙。

## 解题思路

将机器人和墙排序。每面墙只可能被相邻的两个机器人覆盖：左侧机器人向右射击或右侧机器人向左射击。对每个 gap 统计 a（仅左机器人右射覆盖）、b（仅右机器人左射覆盖）、c（两者均可覆盖）。用 DP：dp[i][0/1] 表示前 i 个机器人在方向 0/1 下的最大覆盖，转移时考虑 gap 的 a、b、c 四种组合贡献。O((n+m)log n)。

## Solution

[SourceCode](./solution.js)
