# [672] Bulb Switcher II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/bulb-switcher-ii/description/)

* algorithms
* Medium (50.03%)
* Likes:    199
* Dislikes: 246
* Testcase Example:  '1\n1'

```md
There is a room with n bulbs labeled from 1 to n that all are turned on initially, and four buttons on the wall. Each of the four buttons has a different functionality where:

Button 1: Flips the status of all the bulbs.
Button 2: Flips the status of all the bulbs with even labels (i.e., 2, 4, ...).
Button 3: Flips the status of all the bulbs with odd labels (i.e., 1, 3, ...).
Button 4: Flips the status of all the bulbs with a label j = 3k + 1 where k = 0, 1, 2, ... (i.e., 1, 4, 7, 10, ...).

You must make exactly presses button presses in total. For each press, you may pick any of the four buttons to press.
Given the two integers n and presses, return the number of different possible statuses after performing all presses button presses.

Example 1:

Input: n = 1, presses = 1
Output: 2
Explanation: Status can be:
- [off] by pressing button 1
- [on] by pressing button 2

Example 2:

Input: n = 2, presses = 1
Output: 3
Explanation: Status can be:
- [off, off] by pressing button 1
- [on, off] by pressing button 2
- [off, on] by pressing button 3

Example 3:

Input: n = 3, presses = 1
Output: 4
Explanation: Status can be:
- [off, off, off] by pressing button 1
- [on, off, on] by pressing button 2
- [off, on, off] by pressing button 3
- [off, on, on] by pressing button 4


Constraints:

1 <= n <= 1000
0 <= presses <= 1000


```

## 翻译

n个灯泡初始全亮，4个按钮分别翻转：全部、偶数位、奇数位、3k+1位。恰好按presses次，返回可能的不同状态数。

## 解题思路

枚举16种按钮组合（每个按钮按或不按），检查是否可在presses次内实现（总按次数 ≤ presses 且奇偶性匹配，多余次数可两两抵消）。灯泡模式周期为6，只模拟前min(n,6)个即可。用Set去重计数。

## Solution

[SourceCode](./solution.js)
