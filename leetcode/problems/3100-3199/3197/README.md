# [3197] Find the Minimum Area to Cover All Ones II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-ii/description/)

* algorithms
* Hard (63.50%)
* Likes:    402
* Dislikes: 68
* Testcase Example:  '[[1,0,1],[1,1,1]]'

```md
You are given a 2D binary array grid. You need to find 3 non-overlapping rectangles having non-zero areas with horizontal and vertical sides such that all the 1&#39;s in grid lie inside these rectangles.
Return the minimum possible sum of the area of these rectangles.
Note that the rectangles are allowed to touch.

Example 1:

Input: grid = [[1,0,1],[1,1,1]]
Output: 5
Explanation:


The 1&#39;s at (0, 0) and (1, 0) are covered by a rectangle of area 2.
The 1&#39;s at (0, 2) and (1, 2) are covered by a rectangle of area 2.
The 1 at (1, 1) is covered by a rectangle of area 1.


Example 2:

Input: grid = [[1,0,1,0],[0,1,0,1]]
Output: 5
Explanation:


The 1&#39;s at (0, 0) and (0, 2) are covered by a rectangle of area 3.
The 1 at (1, 1) is covered by a rectangle of area 1.
The 1 at (1, 3) is covered by a rectangle of area 1.



Constraints:

1 <= grid.length, grid[i].length <= 30
grid[i][j] is either 0 or 1.
The input is generated such that there are at least three 1&#39;s in grid.


```

## 中文翻译

给定 30x30 的 01 矩阵，用 3 个不重叠的矩形覆盖所有 1，最小化矩形面积之和。矩形可接触。

## 解题思路

枚举 6 种分割方式（两条水平、两条垂直、先横后竖上下、先竖后横左右），对每种方式枚举切割位置，每个区域计算包围所有 1 的最小矩形面积。

时间复杂度：O(n^4)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
