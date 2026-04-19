# [2250] Count Number of Rectangles Containing Each Point

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-number-of-rectangles-containing-each-point/description/)

* algorithms
* Medium (37.51%)
* Likes:    554
* Dislikes: 141
* Testcase Example:  '[[1,2],[2,3],[2,5]]\n[[2,1],[1,4]]'

```md
You are given a 2D integer array rectangles where rectangles[i] = [li, hi] indicates that ith rectangle has a length of li and a height of hi. You are also given a 2D integer array points where points[j] = [xj, yj] is a point with coordinates (xj, yj).
The ith rectangle has its bottom-left corner point at the coordinates (0, 0) and its top-right corner point at (li, hi).
Return an integer array count of length points.length where count[j] is the number of rectangles that contain the jth point.
The ith rectangle contains the jth point if 0 <= xj <= li and 0 <= yj <= hi. Note that points that lie on the edges of a rectangle are also considered to be contained by that rectangle.

Example 1:


Input: rectangles = [[1,2],[2,3],[2,5]], points = [[2,1],[1,4]]
Output: [2,1]
Explanation:
The first rectangle contains no points.
The second rectangle contains only the point (2, 1).
The third rectangle contains the points (2, 1) and (1, 4).
The number of rectangles that contain the point (2, 1) is 2.
The number of rectangles that contain the point (1, 4) is 1.
Therefore, we return [2, 1].

Example 2:


Input: rectangles = [[1,1],[2,2],[3,3]], points = [[1,3],[1,1]]
Output: [1,3]
Explanation:
The first rectangle contains only the point (1, 1).
The second rectangle contains only the point (1, 1).
The third rectangle contains the points (1, 3) and (1, 1).
The number of rectangles that contain the point (1, 3) is 1.
The number of rectangles that contain the point (1, 1) is 3.
Therefore, we return [1, 3].


Constraints:

1 <= rectangles.length, points.length <= 5 * 104
rectangles[i].length == points[j].length == 2
1 <= li, xj <= 109
1 <= hi, yj <= 100
All the rectangles are unique.
All the points are unique.


```

## 题目翻译

给定矩形数组 `rectangles`（每个矩形 [li, hi] 从原点 (0,0) 到 (li, hi)），以及点数组 `points`。
返回每个点被多少个矩形包含。点 (xj, yj) 被矩形包含当 `0 <= xj <= li` 且 `0 <= yj <= hi`。

## 解题思路

关键约束：`1 <= hi, yj <= 100`，高度范围很小。

- 按高度分组：对每个高度 h，收集所有该高度的矩形的长度列表并排序。
- 对于每个查询点 (xj, yj)，遍历所有 h >= yj 的高度组，二分查找有多少个矩形的长度 li >= xj。
- 由于高度最多 100，每个查询最多遍历 100 次，每次二分 O(log n)。

时间复杂度 O(n log n + q * 100 * log n)。

## Solution

[SourceCode](./solution.js)
