# [2543] Check if Point Is Reachable

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-point-is-reachable/description/)

* algorithms
* Hard (44.90%)
* Likes:    263
* Dislikes: 52
* Testcase Example:  '6\n9'

```md
There exists an infinitely large grid. You are currently at point (1, 1), and you need to reach the point (targetX, targetY) using a finite number of steps.
In one step, you can move from point (x, y) to any one of the following points:

(x, y - x)
(x - y, y)
(2 * x, y)
(x, 2 * y)

Given two integers targetX and targetY representing the X-coordinate and Y-coordinate of your final position, return true if you can reach the point from (1, 1) using some number of steps, and false otherwise.

Example 1:

Input: targetX = 6, targetY = 9
Output: false
Explanation: It is impossible to reach (6,9) from (1,1) using any sequence of moves, so false is returned.

Example 2:

Input: targetX = 4, targetY = 7
Output: true
Explanation: You can follow the path (1,1) -> (1,2) -> (1,4) -> (1,8) -> (1,7) -> (2,7) -> (4,7).


Constraints:

1 <= targetX, targetY<= 109


```

## 翻译

从 (1,1) 出发，每步可做四种操作：(x,y-x), (x-y,y), (2x,y), (x,2y)。判断能否到达 (targetX, targetY)。

## 解题思路

关键不变量：gcd(x,y) 在减法操作下不变（类辗转相减），在倍乘操作下最多乘 2。从 gcd(1,1)=1 出发，gcd 只能是 2 的幂。反过来，若 gcd(targetX, targetY) 是 2 的幂，则可通过逆向（除 2 + 辗转相减）归约到 (1,1)。故充要条件：gcd(targetX, targetY) 是 2 的幂次。

## Solution

[SourceCode](./solution.js)
