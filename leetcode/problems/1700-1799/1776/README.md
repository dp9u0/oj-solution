# [1776] Car Fleet II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/car-fleet-ii/description/)

* algorithms
* Hard (57.82%)
* Likes:    968
* Dislikes: 41
* Testcase Example:  '[[1,2],[2,1],[4,3],[7,2]]'

```md
There are n cars traveling at different speeds in the same direction along a one-lane road. You are given an array cars of length n, where cars[i] = [positioni, speedi] represents:

positioni is the distance between the ith car and the beginning of the road in meters. It is guaranteed that positioni < positioni+1.
speedi is the initial speed of the ith car in meters per second.

For simplicity, cars can be considered as points moving along the number line. Two cars collide when they occupy the same position. Once a car collides with another car, they unite and form a single car fleet. The cars in the formed fleet will have the same position and the same speed, which is the initial speed of the slowest car in the fleet.
Return an array answer, where answer[i] is the time, in seconds, at which the ith car collides with the next car, or -1 if the car does not collide with the next car. Answers within 10-5 of the actual answers are accepted.

Example 1:

Input: cars = [[1,2],[2,1],[4,3],[7,2]]
Output: [1.00000,-1.00000,3.00000,-1.00000]
Explanation: After exactly one second, the first car will collide with the second car, and form a car fleet with speed 1 m/s. After exactly 3 seconds, the third car will collide with the fourth car, and form a car fleet with speed 2 m/s.

Example 2:

Input: cars = [[3,4],[5,4],[6,3],[9,1]]
Output: [2.00000,1.00000,1.50000,-1.00000]


Constraints:

1 <= cars.length <= 105
1 <= positioni, speedi <= 106
positioni < positioni+1


```

## 题目翻译

n 辆车在同方向单车道上行驶，cars[i] = [position_i, speed_i]。位置严格递增。两车碰撞后合并为一个车队，速度为最慢车的速度。返回 answer[i] 为第 i 辆车与下一辆车碰撞的时间，不碰撞则为 -1。

## 解题思路

单调栈，从右往左处理。栈保存"可见的"车辆索引。

对于车 i，计算与栈顶车辆 j 的碰撞时间 t = (pos[j]-pos[i]) / (speed[i]-speed[j])：
- 若 speed[i] <= speed[j]：i 永远追不上 j，弹出 j
- 若 t > answer[j] 且 answer[j] != -1：j 会先与前方车辆碰撞，弹出 j
- 否则 answer[i] = t，停止弹出

时间复杂度 O(n)，空间复杂度 O(n)

## Solution

[SourceCode](./solution.js)
