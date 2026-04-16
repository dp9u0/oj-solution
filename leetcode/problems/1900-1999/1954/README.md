# [1954] Minimum Garden Perimeter to Collect Enough Apples

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-garden-perimeter-to-collect-enough-apples/description/)

* algorithms
* Medium (55.50%)
* Likes:    407
* Dislikes: 99
* Testcase Example:  '1'

```md
In a garden represented as an infinite 2D grid, there is an apple tree planted at every integer coordinate. The apple tree planted at an integer coordinate (i, j) has
i
+
j
apples growing on it.
You will buy an axis-aligned square plot of land that is centered at (0, 0).
Given an integer neededApples, return the minimum perimeter of a plot such that at least neededApples apples are inside or on the perimeter of that plot.
The value of
x
is defined as:

x if x >= 0
-x if x < 0


Example 1:


Input: neededApples = 1
Output: 8
Explanation: A square plot of side length 1 does not contain any apples.
However, a square plot of side length 2 has 12 apples inside (as depicted in the image above).
The perimeter is 2 * 4 = 8.

Example 2:

Input: neededApples = 13
Output: 16

Example 3:

Input: neededApples = 1000000000
Output: 5040


Constraints:

1 <= neededApples <= 1015


```

## 中文翻译

无限网格上每个坐标 (i,j) 有 |i|+|j| 个苹果。求以原点为中心的正方形的最小周长，使得区域内苹果数 >= neededApples。

## 解题思路

边长为 2n 的正方形内总苹果数为 2n(2n+1)(n+1)。二分查找最小的 n 使得该值 >= neededApples，周长为 8n。

## Solution

[SourceCode](./solution.js)
