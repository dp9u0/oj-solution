# [1828] Queries on Number of Points Inside a Circle

## Description

[LeetCode Problem Description](https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/description/)

* algorithms
* Medium (86.77%)
* Likes:    1197
* Dislikes: 90
* Testcase Example:  '[[1,3],[3,3],[5,3],[2,2]]\n[[2,3,1],[4,3,1],[1,1,2]]'

```md
You are given an array points where points[i] = [xi, yi] is the coordinates of the ith point on a 2D plane. Multiple points can have the same coordinates.
You are also given an array queries where queries[j] = [xj, yj, rj] describes a circle centered at (xj, yj) with a radius of rj.
For each query queries[j], compute the number of points inside the jth circle. Points on the border of the circle are considered inside.
Return an array answer, where answer[j] is the answer to the jth query.

Example 1:


Input: points = [[1,3],[3,3],[5,3],[2,2]], queries = [[2,3,1],[4,3,1],[1,1,2]]
Output: [3,2,2]
Explanation: The points and circles are shown above.
queries[0] is the green circle, queries[1] is the red circle, and queries[2] is the blue circle.

Example 2:


Input: points = [[1,1],[2,2],[3,3],[4,4],[5,5]], queries = [[1,2,2],[2,2,2],[4,3,2],[4,3,3]]
Output: [2,3,2,4]
Explanation: The points and circles are shown above.
queries[0] is green, queries[1] is red, queries[2] is blue, and queries[3] is purple.


Constraints:

1 <= points.length <= 500
points[i].length == 2
0 <= x​​​​​​i, y​​​​​​i <= 500
1 <= queries.length <= 500
queries[j].length == 3
0 <= xj, yj <= 500
1 <= rj <= 500
All coordinates are integers.


Follow up: Could you find the answer for each query in better complexity than O(n)?

```

## 题目翻译

给定一个点数组 points 和一个圆的查询数组 queries，每个 query 包含圆心坐标和半径。对每个查询，计算有多少个点在该圆内（含边界）。返回每个查询的结果数组。

## 解题思路

暴力枚举：对每个查询圆，遍历所有点，判断点到圆心的距离平方是否 ≤ 半径平方。约束小（500×500），O(m·n) 可过。

## Solution

[SourceCode](./solution.js)
