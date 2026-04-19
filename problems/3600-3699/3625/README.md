# [3625] Count Number of Trapezoids II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-number-of-trapezoids-ii/description/)

* algorithms
* Hard (40.01%)
* Likes:    262
* Dislikes: 98
* Testcase Example:  '[[-3,2],[3,0],[2,3],[3,2],[2,-3]]'

```md
You are given a 2D integer array points where points[i] = [xi, yi] represents the coordinates of the ith point on the Cartesian plane.
Return the number of unique trapezoids that can be formed by choosing any four distinct points from points.
A trapezoid is a convex quadrilateral with at least one pair of parallel sides. Two lines are parallel if and only if they have the same slope.

Example 1:

Input: points = [[-3,2],[3,0],[2,3],[3,2],[2,-3]]
Output: 2
Explanation:

There are two distinct ways to pick four points that form a trapezoid:

The points [-3,2], [2,3], [3,2], [2,-3] form one trapezoid.
The points [2,3], [3,2], [3,0], [2,-3] form another trapezoid.


Example 2:

Input: points = [[0,0],[1,0],[0,1],[2,1]]
Output: 1
Explanation:

There is only one trapezoid which can be formed.


Constraints:

4 <= points.length <= 500
&ndash;1000 <= xi, yi <= 1000
All points are pairwise distinct.


```

## 题目翻译

给定平面上 n 个点，求从中选 4 个不同点组成梯形的方案数。梯形定义：凸四边形，至少有一组对边平行。

## 解题思路

**按斜率分组 + 中点去重**

1. **按斜率和直线分组**：枚举所有点对，计算归一化斜率 (dy/g, dx/g)，以及直线标识 key = ndy*x - ndx*y。按斜率分组，再按直线分组。
2. **计数平行线对**：对每个斜率，若有 ≥ 2 条直线各有 ≥ 2 个点，则跨直线选 2 点 × 2 点 = 一组平行边。公式：((ΣC(g_i,2))² - ΣC(g_i,2)²) / 2。
3. **减去平行四边形**：平行四边形有两组平行边（不同斜率），会被计算两次。通过中点计数：两对点有相同中点 → 平行四边形。答案 = T - P。

关键证明：两条不同平行线上各取 2 点，4 点必构成凸四边形（无三点共线）。

时间 O(n²)，空间 O(n²)。

## Solution

[SourceCode](./solution.js)
