# [2481] Minimum Cuts to Divide a Circle

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-cuts-to-divide-a-circle/description/)

* algorithms
* Easy (56.14%)
* Likes:    329
* Dislikes: 63
* Testcase Example:  '4'

```md
A valid cut in a circle can be:

A cut that is represented by a straight line that touches two points on the edge of the circle and passes through its center, or
A cut that is represented by a straight line that touches one point on the edge of the circle and its center.

Some valid and invalid cuts are shown in the figures below.

Given the integer n, return the minimum number of cuts needed to divide a circle into n equal slices.

Example 1:


Input: n = 4
Output: 2
Explanation:
The above figure shows how cutting the circle twice through the middle divides it into 4 equal slices.

Example 2:


Input: n = 3
Output: 3
Explanation:
At least 3 cuts are needed to divide the circle into 3 equal slices.
It can be shown that less than 3 cuts cannot result in 3 slices of equal size and shape.
Also note that the first cut will not divide the circle into distinct parts.


Constraints:

1 <= n <= 100


```

## 中文翻译

给定整数 n，返回将圆分成 n 个相等切片所需的最少切割次数。每刀是过圆心的直线。

## 解题思路

n=1 时不需要切。偶数 n 每刀产生 2 片，需要 n/2 刀。奇数 n 每刀只产生 1 片（因为不能沿同一刀再切），需要 n 刀。

## Solution

[SourceCode](./solution.js)
