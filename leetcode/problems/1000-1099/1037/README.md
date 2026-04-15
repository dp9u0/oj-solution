# [1037] Valid Boomerang

## Description

[LeetCode Problem Description](https://leetcode.com/problems/valid-boomerang/description/)

* algorithms
* Easy (39.36%)
* Likes:    467
* Dislikes: 544
* Testcase Example:  '[[1,1],[2,3],[3,2]]'

```md
Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang.
A boomerang is a set of three points that are all distinct and not in a straight line.

Example 1:
Input: points = [[1,1],[2,3],[3,2]]
Output: true
Example 2:
Input: points = [[1,1],[2,2],[3,3]]
Output: false


Constraints:

points.length == 3
points[i].length == 2
0 <= xi, yi <= 100


```

## 题目翻译

给定三个点，判断它们是否互不相同且不共线（即是否构成"回旋镖"）。

## 解题思路

三点不共线 <=> 叉积不为零。检查 (p1-p0) × (p2-p0) ≠ 0。

时间复杂度 O(1)

## Solution

[SourceCode](./solution.js)
