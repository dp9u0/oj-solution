# [858] Mirror Reflection

## Description

[LeetCode Problem Description](https://leetcode.com/problems/mirror-reflection/description/)

* algorithms
* Medium (61.90%)
* Likes:    1151
* Dislikes: 2561
* Testcase Example:  '2\n1'

```md
There is a special square room with mirrors on each of the four walls. Except for the southwest corner, there are receptors on each of the remaining corners, numbered 0, 1, and 2.
The square room has walls of length pand a laser ray from the southwest corner first meets the east wall at a distance q from the 0th receptor.
Given the two integers p and q, return the number of the receptor that the ray meets first.
The test cases are guaranteed so that the ray will meet a receptor eventually.

Example 1:


Input: p = 2, q = 1
Output: 2
Explanation: The ray meets receptor 2 the first time it gets reflected back to the left wall.

Example 2:

Input: p = 3, q = 1
Output: 1


Constraints:

1 <= q <= p <= 1000


```

## 题目翻译

正方形房间（边长 p），四面墙都是镜子。西南角发射激光，先在东墙距接收器 0 距离 q 处反射。三个角有接收器 0、1、2，求激光首次到达哪个接收器。

## 解题思路

展开法（unfold reflections）。将反射视为直线穿过无限网格，激光到达某个角格点时停止。令 g = gcd(p, q)，则 m = p/g，n = q/g 为首次到达角格点的房间数。

- m 奇 n 奇 → 接收器 1（东北角）
- m 奇 n 偶 → 接收器 0（东南角）
- m 偶 n 奇 → 接收器 2（西北角）

时间复杂度 O(log p)

## Solution

[SourceCode](./solution.js)
