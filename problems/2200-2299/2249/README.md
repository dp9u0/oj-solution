# [2249] Count Lattice Points Inside a Circle

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-lattice-points-inside-a-circle/description/)

* algorithms
* Medium (56.55%)
* Likes:    255
* Dislikes: 223
* Testcase Example:  '[[2,2,1]]'

```md
Given a 2D integer array circles where circles[i] = [xi, yi, ri] represents the center (xi, yi) and radius ri of the ith circle drawn on a grid, return the number of lattice points that are present inside at least one circle.
Note:

A lattice point is a point with integer coordinates.
Points that lie on the circumference of a circle are also considered to be inside it.


Example 1:


Input: circles = [[2,2,1]]
Output: 5
Explanation:
The figure above shows the given circle.
The lattice points present inside the circle are (1, 2), (2, 1), (2, 2), (2, 3), and (3, 2) and are shown in green.
Other points such as (1, 1) and (1, 3), which are shown in red, are not considered inside the circle.
Hence, the number of lattice points present inside at least one circle is 5.
Example 2:


Input: circles = [[2,2,2],[3,4,1]]
Output: 16
Explanation:
The figure above shows the given circles.
There are exactly 16 lattice points which are present inside at least one circle.
Some of them are (0, 2), (2, 0), (2, 4), (3, 2), and (4, 4).


Constraints:

1 <= circles.length <= 200
circles[i].length == 3
1 <= xi, yi <= 100
1 <= ri <= min(xi, yi)


```

## 翻译

给定圆的列表 circles，每个圆由 [x, y, r] 表示。返回至少被一个圆覆盖（含边界）的格点（整数坐标点）数量。

## 解题思路

由于坐标范围有限（0~200），用 Set 记录所有被覆盖的格点。对每个圆，枚举其外接正方形内的所有整数坐标，判断是否在圆内（(x-xi)^2 + (y-yi)^2 <= ri^2）。时间复杂度 O(circles * r^2)。

## Solution

[SourceCode](./solution.js)
