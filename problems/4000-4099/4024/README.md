# [4024] Nearest Available Drone

## Description

[LeetCode Problem Description](https://leetcode.com/problems/nearest-available-drone/description/)

* algorithms
* Easy (66.93%)
* Likes:    42
* Dislikes: -
* Testcase Example:  '[[0,0,8],[2,2,9]]\n[3,4]'

```md
You are given a 2D integer array drones, where drones[i] = [xi, yi, rangei] represents the x-coordinate, y-coordinate, and travel range of the ith drone.
You are also given an integer array target = [tx, ty], representing the coordinates of the target.
A drone drones[i] can reach the target if the Manhattan distance between its coordinates and the target coordinates is less than or equal to its rangei.
Return the index of the reachable drone with the minimum Manhattan distance to the target. If there is a tie, return the smallest index. If no drone can reach the target, return -1.

Example 1:
Input: drones = [[0,0,8],[2,2,9]], target = [3,4]
Output: 1
Explanation:
The distance between drones[0] and target is
0 - 3
+
0 - 4
= 7, which is within its range of 8.
The distance between drones[1] and target is
2 - 3
+
2 - 4
= 3, which is within its range of 9.
Since drones[1] is the nearest drone, the answer is 1.
Example 2:
Input: drones = [[2,1,5],[4,4,5],[6,6,8]], target = [5,5]
Output: 1
Explanation:
The distance between drones[0] and target is
2 - 5
+
1 - 5
= 7, which is greater than its range of 5.
The distance between drones[1] and target is
4 - 5
+
4 - 5
= 2, which is within its range of 5.
The distance between drones[2] and target is
6 - 5
+
6 - 5
= 2, which is within its range of 8.
Both drones[1] and drones[2] are the nearest drones. Since we should return the smallest index, the answer is 1.
Example 3:
Input: drones = [[4,4,5]], target = [8,6]
Output: -1
Explanation:
The distance between drones[0] and target is
4 - 8
+
4 - 6
= 6, which is greater than its range of 5.
No drone can reach the target, so the answer is -1.

Constraints:
1
drones[i] = [xi, yi, rangei]
target = [tx, ty]
-25
1
Hint 1: For each drone, compute its Manhattan distance to target and check whether it is at most the drone's range.
Hint 2: Among all reachable drones, keep the one with the smallest distance. If two distances are equal, keep the smaller index.

```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个二维整数数组 `drones`，其中 `drones[i] = [xi, yi, rangei]` 表示第 i 台无人机的 x 坐标、y 坐标和飞行范围。

再给定一个整数数组 `target = [tx, ty]`，表示目标的坐标。

如果无人机 `drones[i]` 的坐标与目标坐标之间的曼哈顿距离小于等于其 `rangei`，则该无人机可以到达目标。

返回可达无人机中到目标曼哈顿距离最小的无人机的索引。如果距离相同，返回最小的索引。如果没有无人机可以到达目标，返回 -1。

示例 1：
输入：drones = [[0,0,8],[2,2,9]], target = [3,4]
输出：1
解释：
drones[0] 到目标的距离为 |0-3| + |0-4| = 7，在其范围 8 之内。
drones[1] 到目标的距离为 |2-3| + |2-4| = 3，在其范围 9 之内。
drones[1] 最近，所以答案是 1。

示例 2：
输入：drones = [[2,1,5],[4,4,5],[6,6,8]], target = [5,5]
输出：1
解释：
drones[0] 到目标的距离为 7，大于其范围 5，不可达。
drones[1] 到目标的距离为 2，在其范围 5 之内。
drones[2] 到目标的距离为 2，在其范围 8 之内。
drones[1] 和 drones[2] 距离相同，返回较小的索引 1。

示例 3：
输入：drones = [[4,4,5]], target = [8,6]
输出：-1
解释：
drones[0] 到目标的距离为 6，大于其范围 5，没有无人机可达，返回 -1。

## 解题思路

一次遍历：

1. 遍历每台无人机，计算其到目标的曼哈顿距离 `dist = |xi - tx| + |yi - ty|`。
2. 若 `dist <= rangei` 且 `dist <` 当前最小距离，则更新最小距离和答案索引（因为按索引从小到大遍历，严格小于保证平局时保留最小索引）。
3. 遍历结束返回答案，初始为 -1（表示无可达无人机）。

时间复杂度 O(n)，空间复杂度 O(1)。
