# [1401] Circle and Rectangle Overlapping

## Description

[LeetCode Problem Description](https://leetcode.com/problems/circle-and-rectangle-overlapping/description/)

* algorithms
* Medium (49.94%)
* Likes:    406
* Dislikes: 85
* Testcase Example:  '1\n0\n0\n1\n-1\n3\n1'

```md
You are given a circle represented as (radius, xCenter, yCenter) and an axis-aligned rectangle represented as (x1, y1, x2, y2), where (x1, y1) are the coordinates of the bottom-left corner, and (x2, y2) are the coordinates of the top-right corner of the rectangle.
Return true if the circle and rectangle are overlapped otherwise return false. In other words, check if there is any point (xi, yi) that belongs to the circle and the rectangle at the same time.

Example 1:


Input: radius = 1, xCenter = 0, yCenter = 0, x1 = 1, y1 = -1, x2 = 3, y2 = 1
Output: true
Explanation: Circle and rectangle share the point (1,0).

Example 2:

Input: radius = 1, xCenter = 1, yCenter = 1, x1 = 1, y1 = -3, x2 = 2, y2 = -1
Output: false

Example 3:


Input: radius = 1, xCenter = 0, yCenter = 0, x1 = -1, y1 = 0, x2 = 0, y2 = 1
Output: true


Constraints:

1 <= radius <= 2000
-104 <= xCenter, yCenter <= 104
-104 <= x1 < x2 <= 104
-104 <= y1 < y2 <= 104


```

## 翻译

给定圆 (radius, xCenter, yCenter) 和轴对齐矩形 (x1, y1, x2, y2)。判断圆和矩形是否有重叠。

## 解题思路

找圆心到矩形的最近距离，若该距离 <= radius 则重叠。最近点的 x 坐标 = clamp(xCenter, x1, x2)，y 坐标 = clamp(yCenter, y1, y2)。判断距离平方 <= radius^2。O(1)。

## Solution

[SourceCode](./solution.js)
