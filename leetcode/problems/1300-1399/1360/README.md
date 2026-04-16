# [1360] Number of Days Between Two Dates

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-days-between-two-dates/description/)

* algorithms
* Easy (52.54%)
* Likes:    437
* Dislikes: 1325
* Testcase Example:  '"2019-06-29"\n"2019-06-30"'

```md
Write a program to count the number of days between two dates.
The two dates are given as strings, their format is YYYY-MM-DDas shown in the examples.

Example 1:
Input: date1 = "2019-06-29", date2 = "2019-06-30"
Output: 1
Example 2:
Input: date1 = "2020-01-15", date2 = "2019-12-31"
Output: 15


Constraints:

The given dates are validdates between the years 1971 and 2100.


```

## 中文翻译

给定两个日期字符串（YYYY-MM-DD 格式），计算它们之间相差的天数。

## 解题思路

将每个日期转换为从某个基准点（如公元1年1月1日）开始的天数，然后取差值绝对值。注意闰年判断：能被4整除且不能被100整除，或能被400整除。

## Solution

[SourceCode](./solution.js)
