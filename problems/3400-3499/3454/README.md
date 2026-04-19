# [3454] Separate Squares II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/separate-squares-ii/description/)

* algorithms
* Hard (59.75%)
* Likes:    273
* Dislikes: 66
* Testcase Example:  '[[0,0,1],[2,2,1]]'

```md
You are given a 2D integer array squares. Each squares[i] = [xi, yi, li] represents the coordinates of the bottom-left point and the side length of a square parallel to the x-axis.
Find the minimum y-coordinate value of a horizontal line such that the total area covered by squares above the line equals the total area covered by squares below the line.
Answers within 10-5 of the actual answer will be accepted.
Note: Squares may overlap. Overlapping areas should be counted only once in this version.

Example 1:

Input: squares = [[0,0,1],[2,2,1]]
Output: 1.00000
Explanation:

Any horizontal line between y = 1 and y = 2 results in an equal split, with 1 square unit above and 1 square unit below. The minimum y-value is 1.

Example 2:

Input: squares = [[0,0,2],[1,1,1]]
Output: 1.00000
Explanation:

Since the blue square overlaps with the red square, it will not be counted again. Thus, the line y = 1 splits the squares into two equal parts.


Constraints:

1 <= squares.length <= 5 * 104
squares[i] = [xi, yi, li]
squares[i].length == 3
0 <= xi, yi <= 109
1 <= li <= 109
The total area of all the squares will not exceed 1015.


```

## 翻译

给定一组正方形（底边平行于 x 轴），正方形可能重叠且重叠区域只计一次。求一条水平线使得线上方和线下方的覆盖面积相等，返回最小的 y 坐标值。

## 解题思路

扫描线 + 线段树。对 x 坐标离散化，每个正方形产生底边（+1）和顶边（-1）两个事件。按 y 排序扫描，用线段树维护当前 x 方向覆盖总长度。一次扫描记录所有条带（yStart, height, coverLen），先算总面积再找面积过半的条带，在条带内插值得到精确 y。O(n log n)。

## Solution

[SourceCode](./solution.js)
