# [391] Perfect Rectangle

## Description

[LeetCode Problem Description](https://leetcode.com/problems/perfect-rectangle/description/)

* algorithms
* Hard (39.01%)
* Likes:    969
* Dislikes: 120
* Testcase Example:  '[[1,1,3,3],[3,1,4,2],[3,2,4,4],[1,3,2,4],[2,3,3,4]]'

```md
Given an array rectangles where rectangles[i] = [xi, yi, ai, bi] represents an axis-aligned rectangle. The bottom-left point of the rectangle is (xi, yi) and the top-right point of it is (ai, bi).
Return true if all the rectangles together form an exact cover of a rectangular region.

Example 1:


Input: rectangles = [[1,1,3,3],[3,1,4,2],[3,2,4,4],[1,3,2,4],[2,3,3,4]]
Output: true
Explanation: All 5 rectangles together form an exact cover of a rectangular region.

Example 2:


Input: rectangles = [[1,1,2,3],[1,3,2,4],[3,1,4,2],[3,2,4,4]]
Output: false
Explanation: Because there is a gap between the two rectangular regions.

Example 3:


Input: rectangles = [[1,1,3,3],[3,1,4,2],[1,3,2,4],[2,2,4,4]]
Output: false
Explanation: Because two of the rectangles overlap with each other.


Constraints:

1 <= rectangles.length <= 2 * 104
rectangles[i].length == 4
-105 <= xi < ai <= 105
-105 <= yi < bi <= 105


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一组轴对齐矩形 `[x, y, a, b]`（左下/右上）。判断它们是否恰好铺成一个矩形区域（无缝、无重叠）。

示例 1：五块拼成 → `true`；示例 2：有缝隙 → `false`；示例 3：有重叠 → `false`

## 解题思路

经典两个必要充分条件：

1. **面积和** = 包围盒面积；
2. **角点奇偶**：所有矩形四个角做异或翻转（出现奇数次的角点集合）恰为包围盒的 4 个角。

重叠/有缝都会破坏角点奇偶或面积。O(n)。