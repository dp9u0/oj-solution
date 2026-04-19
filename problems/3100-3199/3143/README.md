# [3143] Maximum Points Inside the Square

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-points-inside-the-square/description/)

* algorithms
* Medium (39.33%)
* Likes:    175
* Dislikes: 24
* Testcase Example:  '[[2,2],[-1,-2],[-4,4],[-3,1],[3,-3]]\n"abdca"'

```md
You are given a 2D array points and a string s where, points[i] represents the coordinates of point i, and s[i] represents the tag of point i.
A valid square is a square centered at the origin (0, 0), has edges parallel to the axes, and does not contain two points with the same tag.
Return the maximum number of points contained in a valid square.
Note:

A point is considered to be inside the square if it lies on or within the square&#39;s boundaries.
The side length of the square can be zero.


Example 1:


Input: points = [[2,2],[-1,-2],[-4,4],[-3,1],[3,-3]], s = 'abdca'
Output: 2
Explanation:
The square of side length 4 covers two points points[0] and points[1].

Example 2:


Input: points = [[1,1],[-2,-2],[-2,2]], s = 'abb'
Output: 1
Explanation:
The square of side length 2 covers one point, which is points[0].

Example 3:

Input: points = [[1,1],[-1,-1],[2,-2]], s = 'ccd'
Output: 0
Explanation:
It&#39;s impossible to make any valid squares centered at the origin such that it covers only one point among points[0] and points[1].


Constraints:

1 <= s.length, points.length <= 105
points[i].length == 2
-109 <= points[i][0], points[i][1] <= 109
s.length == points.length
points consists of distinct coordinates.
s consists only of lowercase English letters.


```

## 中文翻译

给定二维点数组 points 和标签字符串 s。以原点为中心、边平行于坐标轴的正方形中，不能包含两个相同标签的点。求合法正方形内最多包含多少个点。

## 解题思路

每个点到原点的"正方形距离" d = max(|x|, |y|)。按 d 排序后依次加入，用 Set 跟踪已见标签。同一 d 的所有点必须同时合法（不能重复标签），遇到冲突即停止。

## Solution

[SourceCode](./solution.js)
