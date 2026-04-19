# [780] Reaching Points

## Description

[LeetCode Problem Description](https://leetcode.com/problems/reaching-points/description/)

* algorithms
* Hard (34.31%)
* Likes:    1586
* Dislikes: 239
* Testcase Example:  '1\n1\n3\n5'

```md
Given four integers sx, sy, tx, and ty, return true if it is possible to convert the point (sx, sy) to the point (tx, ty) through some operations, or false otherwise.
The allowed operation on some point (x, y) is to convert it to either (x, x + y) or (x + y, y).

Example 1:

Input: sx = 1, sy = 1, tx = 3, ty = 5
Output: true
Explanation:
One series of moves that transforms the starting point to the target is:
(1, 1) -> (1, 2)
(1, 2) -> (3, 2)
(3, 2) -> (3, 5)

Example 2:

Input: sx = 1, sy = 1, tx = 2, ty = 2
Output: false

Example 3:

Input: sx = 1, sy = 1, tx = 1, ty = 1
Output: true


Constraints:

1 <= sx, sy, tx, ty <= 109


```

## 中文翻译

给定起点 (sx, sy) 和终点 (tx, ty)，每次操作可将 (x, y) 变为 (x, x+y) 或 (x+y, y)。判断是否能从起点到达终点。

## 解题思路

逆向操作：从 (tx, ty) 倒推回 (sx, sy)。每次将较大值减去较小值（取模加速）。若 tx > ty，则 tx %= ty；反之 ty %= tx。当 tx 或 ty 缩小到 sx 或 sy 附近时，检查剩余差值是否可整除。

时间复杂度：O(log(max(tx,ty)))，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
