# [1637] Widest Vertical Area Between Two Points Containing No Points

## Description

[LeetCode Problem Description](https://leetcode.com/problems/widest-vertical-area-between-two-points-containing-no-points/description/)

* algorithms
* Easy (87.12%)
* Likes:    987
* Dislikes: 1789
* Testcase Example:  '[[8,7],[9,9],[7,4],[9,7]]'

```md
Given n points on a 2D plane where points[i] = [xi, yi], Returnthe widest vertical area between two points such that no points are inside the area.
A vertical area is an area of fixed-width extending infinitely along the y-axis (i.e., infinite height). The widest vertical area is the one with the maximum width.
Note that points on the edge of a vertical area are not considered included in the area.

Example 1:
​

Input: points = [[8,7],[9,9],[7,4],[9,7]]
Output: 1
Explanation: Both the red and the blue area are optimal.

Example 2:

Input: points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]]
Output: 3


Constraints:

n == points.length
2 <= n <= 105
points[i].length == 2
0 <= xi, yi<= 109


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给定二维平面上的 n 个点 `points[i] = [xi, yi]`，返回不包含任何点的最宽垂直区域宽度。垂直区域是沿 y 轴无限延伸的固定宽度区域。边缘上的点不计入区域内。

**示例 1：** points = [[8,7],[9,9],[7,4],[9,7]] → 1
**示例 2：** points = [[3,1],[9,0],[1,0],[1,4],[5,3],[8,8]] → 3

**约束：** 2 <= n <= 10^5

## Approach

排序 x 坐标，找相邻 x 的最大差值。

- 提取所有 x 坐标并排序
- 遍历相邻差值，取最大

时间复杂度 O(n log n)，空间复杂度 O(n)。
