# [1344] Angle Between Hands of a Clock

## Description

[LeetCode Problem Description](https://leetcode.com/problems/angle-between-hands-of-a-clock/description/)

* algorithms
* Medium (64.42%)
* Likes:    1376
* Dislikes: 248
* Testcase Example:  '12\n30'

```md
Given two numbers, hour and minutes, return the smaller angle (in degrees) formed between the hour and the minute hand.
Answers within 10-5 of the actual value will be accepted as correct.

Example 1:


Input: hour = 12, minutes = 30
Output: 165

Example 2:


Input: hour = 3, minutes = 30
Output: 75

Example 3:


Input: hour = 3, minutes = 15
Output: 7.5


Constraints:

1 <= hour <= 12
0 <= minutes <= 59


```

## 题目翻译

给定小时 hour 和分钟 minutes，返回时针和分针之间较小的角度（度数）。

## 解题思路

**数学**

时针角度 = (hour % 12) * 30 + minutes * 0.5，分针角度 = minutes * 6。两角之差取绝对值，与 360-差 取较小值。

## Solution

[SourceCode](./solution.js)
