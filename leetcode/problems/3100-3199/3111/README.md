# [3111] Minimum Rectangles to Cover Points

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-rectangles-to-cover-points/description/)

* algorithms
* Medium (63.67%)
* Likes:    111
* Dislikes: 8
* Testcase Example:  '[[2,1],[1,0],[1,4],[1,8],[3,5],[4,6]]\n1'

```md
You are given a 2D integer array points, where points[i] = [xi, yi]. You are also given an integer w. Your task is to cover all the given points with rectangles.
Each rectangle has its lower end at some point (x1, 0) and its upper end at some point (x2, y2), where x1 <= x2, y2 >= 0, and the condition x2 - x1 <= w must be satisfied for each rectangle.
A point is considered covered by a rectangle if it lies within or on the boundary of the rectangle.
Return an integer denoting the minimum number of rectangles needed so that each point is covered by at least one rectangle.
Note: A point may be covered by more than one rectangle.

Example 1:


border-color: var(--border-tertiary);
border-left-width: 2px;
color: var(--text-secondary);
font-size: .875rem;
margin-bottom: 1rem;
margin-top: 1rem;
overflow: visible;
padding-left: 1rem;
">
Input:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">points = [[2,1],[1,0],[1,4],[1,8],[3,5],[4,6]], w = 1
Output:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">2
Explanation:
The image above shows one possible placement of rectangles to cover the points:

A rectangle with a lower end at (1, 0) and its upper end at (2, 8)
A rectangle with a lower end at (3, 0) and its upper end at (4, 8)


Example 2:


border-color: var(--border-tertiary);
border-left-width: 2px;
color: var(--text-secondary);
font-size: .875rem;
margin-bottom: 1rem;
margin-top: 1rem;
overflow: visible;
padding-left: 1rem;
">
Input:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">points = [[0,0],[1,1],[2,2],[3,3],[4,4],[5,5],[6,6]], w = 2
Output:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">3
Explanation:
The image above shows one possible placement of rectangles to cover the points:

A rectangle with a lower end at (0, 0) and its upper end at (2, 2)
A rectangle with a lower end at (3, 0) and its upper end at (5, 5)
A rectangle with a lower end at (6, 0) and its upper end at (6, 6)


Example 3:


border-color: var(--border-tertiary);
border-left-width: 2px;
color: var(--text-secondary);
font-size: .875rem;
margin-bottom: 1rem;
margin-top: 1rem;
overflow: visible;
padding-left: 1rem;
">
Input:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">points = [[2,3],[1,2]], w = 0
Output:
font-family: Menlo,sans-serif;
font-size: 0.85rem;
">2
Explanation:
The image above shows one possible placement of rectangles to cover the points:

A rectangle with a lower end at (1, 0) and its upper end at (1, 2)
A rectangle with a lower end at (2, 0) and its upper end at (2, 3)



Constraints:

1 <= points.length <= 105
points[i].length == 2
0 <= xi == points[i][0] <= 109
0 <= yi == points[i][1] <= 109
0 <= w <= 109
All pairs (xi, yi) are distinct.


```

## 题目翻译

给定二维整数数组 points（points[i] = [xi, yi]）和整数 w。用矩形覆盖所有点。每个矩形的下端在 (x1, 0)，上端在 (x2, y2)，要求 x2 - x1 <= w。点在矩形内或边界上则视为被覆盖。求最少需要多少个矩形。

## 解题思路

关键观察：矩形可以覆盖任意高度（只需 y2 >= 被覆盖点的最大 y），因此 y 坐标不影响矩形数量。问题转化为：给定一组 x 坐标，用宽度为 w 的区间覆盖，最少需要几个区间。

贪心：提取所有唯一 x 坐标并排序，从最左边的未覆盖点开始，放置一个覆盖 [x, x+w] 的矩形，跳过所有被覆盖的点。

时间复杂度 O(n log n)，空间复杂度 O(n)

## Solution

[SourceCode](./solution.js)
