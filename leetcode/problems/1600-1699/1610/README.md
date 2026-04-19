# [1610] Maximum Number of Visible Points

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-visible-points/description/)

* algorithms
* Hard (38.06%)
* Likes:    627
* Dislikes: 767
* Testcase Example:  '[[2,1],[2,2],[3,3]]\n90\n[1,1]'

```md
You are given an array points, an integer angle, and your location, where location = [posx, posy] and points[i] = [xi, yi] both denote integral coordinates on the X-Y plane.
Initially, you are facing directly east from your position. You cannot move from your position, but you can rotate. In other words, posx and posy cannot be changed. Your field of view in degrees is represented by angle, determining how wide you can see from any given view direction. Let d be the amount in degrees that you rotate counterclockwise. Then, your field of view is the inclusive range of angles [d - angle/2, d + angle/2].

Your browser does not support the video tag or this video format.

You can see some set of points if, for each point, the angle formed by the point, your position, and the immediate east direction from your position is in your field of view.
There can be multiple points at one coordinate. There may be points at your location, and you can always see these points regardless of your rotation. Points do not obstruct your vision to other points.
Return the maximum number of points you can see.

Example 1:


Input: points = [[2,1],[2,2],[3,3]], angle = 90, location = [1,1]
Output: 3
Explanation: The shaded region represents your field of view. All points can be made visible in your field of view, including [3,3] even though [2,2] is in front and in the same line of sight.

Example 2:

Input: points = [[2,1],[2,2],[3,4],[1,1]], angle = 90, location = [1,1]
Output: 4
Explanation: All points can be made visible in your field of view, including the one at your location.

Example 3:


Input: points = [[1,0],[2,1]], angle = 13, location = [1,1]
Output: 1
Explanation: You can only see one of the two points, as shown above.


Constraints:

1 <= points.length <= 105
points[i].length == 2
location.length == 2
0 <= angle < 360
0 <= posx, posy, xi, yi <= 100


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定 points 数组、视角 angle 和位置 location，你站在 location 面朝东，可以旋转但不可移动。视野范围是 [d - angle/2, d + angle/2]（d 为逆时针旋转角度）。求旋转后最多能看到多少个点。与 location 重合的点始终可见。

## 解题思路

1. 计算每个点相对 location 的极角（atan2），排序后得到角度数组。
2. 与 location 重合的点直接计数，不参与角度计算。
3. 将排序后的角度数组复制一份并加上 360（处理跨 0°/360° 的情况），用滑动窗口找最大覆盖。
4. angle=0 时特判（只看同一方向的点）。
