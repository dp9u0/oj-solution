# [3623] Count Number of Trapezoids I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-number-of-trapezoids-i/description/)

* algorithms
* Medium (48.06%)
* Likes:    398
* Dislikes: 50
* Testcase Example:  '[[1,0],[2,0],[3,0],[2,2],[3,2]]'

```md
You are given a 2D integer array points, where points[i] = [xi, yi] represents the coordinates of the ith point on the Cartesian plane.
A horizontal trapezoid is a convex quadrilateral with at least one pair of horizontal sides (i.e. parallel to the x-axis). Two lines are parallel if and only if they have the same slope.
Return the  number of unique horizontal trapezoids that can be formed by choosing any four distinct points from points.
Since the answer may be very large, return it modulo 109 + 7.

Example 1:

Input: points = [[1,0],[2,0],[3,0],[2,2],[3,2]]
Output: 3
Explanation:

There are three distinct ways to pick four points that form a horizontal trapezoid:

Using points [1,0], [2,0], [3,2], and [2,2].
Using points [2,0], [3,0], [3,2], and [2,2].
Using points [1,0], [3,0], [3,2], and [2,2].


Example 2:

Input: points = [[0,0],[1,0],[0,1],[2,1]]
Output: 1
Explanation:

There is only one horizontal trapezoid that can be formed.


Constraints:

4 <= points.length <= 105
&ndash;108 <= xi, yi <= 108
All points are pairwise distinct.


```

## 翻译

从点集中选4个不同点组成水平梯形（至少一对水平平行边）。求方案数模 10^9+7。

## 解题思路

按 y 坐标分组，每组取 2 个点作为一条水平边。两组不同 y 的配对数 = pairs(y1) * pairs(y2)。总和 = ((sum_pairs)^2 - sum(pairs^2)) / 2。

## Solution

[SourceCode](./solution.js)
