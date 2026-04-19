# [2437] Number of Valid Clock Times

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-valid-clock-times/description/)

* algorithms
* Easy (47.98%)
* Likes:    309
* Dislikes: 247
* Testcase Example:  '"?5:00"'

```md
You are given a string of length 5 called time, representing the current time on a digital clock in the format 'hh:mm'. The earliest possible time is '00:00' and the latest possible time is '23:59'.
In the string time, the digits represented by the ?symbol are unknown, and must be replaced with a digit from 0 to 9.
Return an integer answer, the number of valid clock times that can be created by replacing every ?with a digit from 0 to 9.

Example 1:

Input: time = '?5:00'
Output: 2
Explanation: We can replace the ? with either a 0 or 1, producing '05:00' or '15:00'. Note that we cannot replace it with a 2, since the time '25:00' is invalid. In total, we have two choices.

Example 2:

Input: time = '0?:0?'
Output: 100
Explanation: Each ? can be replaced by any digit from 0 to 9, so we have 100 total choices.

Example 3:

Input: time = '??:??'
Output: 1440
Explanation: There are 24 possible choices for the hours, and 60 possible choices for the minutes. In total, we have 24 * 60 = 1440 choices.


Constraints:

time is a valid string of length 5 in the format 'hh:mm'.
'00' <= hh <= '23'
'00' <= mm <= '59'
Some of the digits might be replaced with &#39;?&#39; and need to be replaced with digits from 0 to 9.


```

## 中文翻译

给定格式为 'hh:mm' 的时间字符串，其中 '?' 表示未知数字。求用 0-9 替换 '?' 后能得到多少个合法时间（00:00 到 23:59）。

## 解题思路

枚举所有可能的小时（0-23）和分钟（0-59），统计与 time 格式匹配的方案数。

## Solution

[SourceCode](./solution.js)
