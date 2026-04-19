# [939] Minimum Area Rectangle

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-area-rectangle/description/)

* algorithms
* Medium (55.37%)
* Likes:    2108
* Dislikes: 298
* Testcase Example:  '[[1,1],[1,3],[3,1],[3,3],[2,2]]'

```md
You are given an array of points in the X-Y plane points where points[i] = [xi, yi].
Return the minimum area of a rectangle formed from these points, with sides parallel to the X and Y axes. If there is not any such rectangle, return 0.

Example 1:


Input: points = [[1,1],[1,3],[3,1],[3,3],[2,2]]
Output: 4

Example 2:


Input: points = [[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]
Output: 2


Constraints:

1 <= points.length <= 500
points[i].length == 2
0 <= xi, yi <= 4 * 104
All the given points are unique.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 X-Y 平面上的点集，找边平行于坐标轴的最小面积矩形。不存在则返回 0。

## 解题思路

将所有点存入 Set。枚举任意两点作为矩形的对角，检查另外两个角点是否存在。若存在则计算面积，取最小值。

n ≤ 500，O(n^2) 枚举对角点对即可。
