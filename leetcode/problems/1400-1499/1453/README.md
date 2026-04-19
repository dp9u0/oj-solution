# [1453] Maximum Number of Darts Inside of a Circular Dartboard

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-darts-inside-of-a-circular-dartboard/description/)

* algorithms
* Hard (40.54%)
* Likes:    160
* Dislikes: 277
* Testcase Example:  '[[-2,0],[2,0],[0,2],[0,-2]]\n2'

```md
Alice is throwing n darts on a very large wall. You are given an array darts where darts[i] = [xi, yi] is the position of the ith dart that Alice threw on the wall.
Bob knows the positions of the n darts on the wall. He wants to place a dartboard of radius r on the wall so that the maximum number of darts that Alice throws lieon the dartboard.
Given the integer r, return the maximum number of darts that can lie on the dartboard.

Example 1:


Input: darts = [[-2,0],[2,0],[0,2],[0,-2]], r = 2
Output: 4
Explanation: Circle dartboard with center in (0,0) and radius = 2 contain all points.

Example 2:


Input: darts = [[-3,0],[3,0],[2,6],[5,4],[0,9],[7,8]], r = 5
Output: 5
Explanation: Circle dartboard with center in (0,4) and radius = 5 contain all points except the point (7,8).


Constraints:

1 <= darts.length <= 100
darts[i].length == 2
-104 <= xi, yi <= 104
All the dartsare unique
1 <= r <= 5000


```

## 翻译

给定 n 个点的坐标和圆的半径 r，找一个半径为 r 的圆，使得被圆覆盖（含边界）的点数最多，返回最大点数。

## 解题思路

关键观察：最优圆的边界上至少经过 2 个点（否则可以平移多覆盖一个）。对每对距离 <= 2r 的点，计算它们对应的两个圆心（几何求交），然后对每个圆心统计覆盖点数。O(n^3)，n<=100 足够。

## Solution

[SourceCode](./solution.js)
