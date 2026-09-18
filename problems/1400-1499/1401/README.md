# [1401] 圆和矩形是否有重叠

## Description


```md
https://leetcode.cn/problems/circle-and-rectangle-overlapping/description/
* algorithms
* Medium (52.02%)
* Likes:    117
* Dislikes: -
* Testcase Example:  '1\n0\n0\n1\n-1\n3\n1'
给你一个以 (radius, xCenter, yCenter) 表示的圆和一个与坐标轴平行的矩形 (x1, y1, x2, y2) ，其中 (x1, y1) 是矩形左下角的坐标，而 (x2, y2) 是右上角的坐标。
如果圆和矩形有重叠的部分，请你返回 true ，否则返回 false 。
换句话说，请你检测是否 存在 点 (xi, yi) ，它既在圆上也在矩形上（两者都包括点落在边界上的情况）。

示例 1 ：
输入：radius = 1, xCenter = 0, yCenter = 0, x1 = 1, y1 = -1, x2 = 3, y2 = 1
输出：true
解释：圆和矩形存在公共点 (1,0) 。
示例 2 ：
输入：radius = 1, xCenter = 1, yCenter = 1, x1 = 1, y1 = -3, x2 = 2, y2 = -1
输出：false
示例 3 ：
输入：radius = 1, xCenter = 0, yCenter = 0, x1 = -1, y1 = 0, x2 = 0, y2 = 1
输出：true

提示：
1 <= radius <= 2000
-104 <= xCenter, yCenter <= 104
-104 <= x1 < x2 <= 104
-104 <= y1 < y2 <= 104
Hint 1: Locate the closest point of the square to the circle, you can then find the distance from this point to the center of the circle and check if this is less than or equal to the radius.

```

## Description (English)

```md
You are given a circle represented as (radius, xCenter, yCenter) and an axis-aligned
rectangle represented as (x1, y1, x2, y2), where (x1, y1) is the bottom-left coordinate
and (x2, y2) is the top-right coordinate of the rectangle.

Return true if the circle and rectangle are overlapping, otherwise return false.

In other words, check if there exists a point (xi, yi) that belongs to the circle and
the rectangle (points on the boundary are included in both).

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
-10^4 <= xCenter, yCenter <= 10^4
-10^4 <= x1 < x2 <= 10^4
-10^4 <= y1 < y2 <= 10^4
```

## Approach

关键在于找到矩形上离圆心最近的点，然后判断该点到圆心的距离是否不超过半径。

1. 最近点：将圆心坐标分别向矩形范围钳制（clamp）：
   - `closestX = min(max(xCenter, x1), x2)`
   - `closestY = min(max(yCenter, y1), y2)`
2. 圆心在矩形内部时，最近点即圆心本身，此时必然重叠。
3. 计算 `(closestX, closestY)` 到圆心的距离平方，与 `radius^2` 比较：
   - `<= radius^2` 则存在重叠点（边界相切也算重叠），返回 `true`。

为避免浮点误差，全程使用整数平方距离比较，不开根号。

时间复杂度 O(1)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
