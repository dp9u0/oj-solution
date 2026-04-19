# [3588] Find Maximum Area of a Triangle

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-maximum-area-of-a-triangle/description/)

* algorithms
* Medium (29.31%)
* Likes:    53
* Dislikes: 11
* Testcase Example:  '[[1,1],[1,2],[3,2],[3,3]]'

```md
You are given a 2D array coords of size n x 2, representing the coordinates of n points in an infinite Cartesian plane.
Find twice the maximum area of a triangle with its corners at any three elements from coords, such that at least one side of this triangle is parallel to the x-axis or y-axis. Formally, if the maximum area of such a triangle is A, return 2 * A.
If no such triangle exists, return -1.
Note that a triangle cannot have zero area.

Example 1:

Input: coords = [[1,1],[1,2],[3,2],[3,3]]
Output: 2
Explanation:

The triangle shown in the image has a base 1 and height 2. Hence its area is 1/2 * base * height = 1.

Example 2:

Input: coords = [[1,1],[2,2],[3,3]]
Output: -1
Explanation:
The only possible triangle has corners (1, 1), (2, 2), and (3, 3). None of its sides are parallel to the x-axis or the y-axis.


Constraints:

1 <= n == coords.length <= 105
1 <= coords[i][0], coords[i][1] <= 106
All coords[i] are unique.


```

## 中文翻译

给定 n 个点坐标，找三个点构成三角形，要求至少一条边平行于坐标轴，返回 2 倍最大面积（不存在返回 -1）。

## 解题思路

对每个 x 坐标，记录最小和最大 y；对每个 y 坐标，记录最小和最大 x。枚举每个 x 作为底边（需要至少两个同 x 的点），用全局最远 y 距离计算面积。同理枚举每个 y。注意底边上两点距离也要参与计算。

## Solution

[SourceCode](./solution.js)
