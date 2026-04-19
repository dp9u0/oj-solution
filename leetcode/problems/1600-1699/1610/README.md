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

## 题目翻译

给定一组点、视角 angle 和观察位置 location。你可以旋转但不能移动。求在任意旋转方向上，视角范围内最多能看到多少个点。与 location 重合的点始终可见。

## 解题思路

**极角排序 + 滑动窗口**

1. 计算每个点到 location 的极角（atan2），与 location 重合的点单独计数
2. 排序极角数组，复制一份加 360° 处理环绕
3. 滑动窗口找宽度 <= angle 的最大点数
4. 结果 = 窗口最大值 + 同位置点数

时间 O(n log n)，空间 O(n)。

## Solution

[SourceCode](./solution.js)
