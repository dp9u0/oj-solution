# [3380] Maximum Area Rectangle With Point Constraints I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-area-rectangle-with-point-constraints-i/description/)

* algorithms
* Medium (51.50%)
* Likes:    80
* Dislikes: 20
* Testcase Example:  '[[1,1],[1,3],[3,1],[3,3]]'

```md
You are given an array points where points[i] = [xi, yi] represents the coordinates of a point on an infinite plane.
Your task is to find the maximum area of a rectangle that:

Can be formed using four of these points as its corners.
Does not contain any other point inside or on its border.
Has its edgesparallel to the axes.

Return the maximum area that you can obtain or -1 if no such rectangle is possible.

Example 1:

Input: points = [[1,1],[1,3],[3,1],[3,3]]
Output: 4
Explanation:

We can make a rectangle with these 4 points as corners and there is no other point that lies inside or on the border. Hence, the maximum possible area would be 4.

Example 2:

Input: points = [[1,1],[1,3],[3,1],[3,3],[2,2]]
Output: -1
Explanation:

There is only one rectangle possible is with points [1,1], [1,3], [3,1] and [3,3] but [2,2] will always lie inside it. Hence, returning -1.

Example 3:

Input: points = [[1,1],[1,3],[3,1],[3,3],[1,2],[3,2]]
Output: 2
Explanation:

The maximum area rectangle is formed by the points [1,3], [1,2], [3,2], [3,3], which has an area of 2. Additionally, the points [1,1], [1,2], [3,1], [3,2] also form a valid rectangle with the same area.


Constraints:

1 <= points.length <= 10
points[i].length == 2
0 <= xi, yi <= 100
All the given points are unique.


```

## 题目翻译

给定点数组，找最大面积的轴对齐矩形，满足：四个角是给定点，且矩形内部和边界上不含其他给定点。返回最大面积或 -1。

## 解题思路

**枚举四点组合**。

- n <= 10，可以枚举所有 C(n,4) 个四点组合（最多 210 种）。
- 对于每组 4 个点，检查是否能形成轴对齐矩形（恰好两对 x 坐标、两对 y 坐标）。
- 检查矩形内部和边界上是否没有其他点。
- 记录最大面积。

## Solution

[SourceCode](./solution.js)
