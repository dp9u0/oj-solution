# [1185] Day of the Week

## Description

[LeetCode Problem Description](https://leetcode.com/problems/day-of-the-week/description/)

* algorithms
* Easy (59.08%)
* Likes:    457
* Dislikes: 2563
* Testcase Example:  '31\n8\n2019'

```md
Given a date, return the corresponding day of the week for that date.
The input is given as three integers representing the day, month and year respectively.
Return the answer as one of the following values{'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'}.
Note: January 1, 1971 was a Friday.

Example 1:

Input: day = 31, month = 8, year = 2019
Output: 'Saturday'

Example 2:

Input: day = 18, month = 7, year = 1999
Output: 'Sunday'

Example 3:

Input: day = 15, month = 8, year = 1993
Output: 'Sunday'


Constraints:

The given dates are valid dates between the years 1971 and 2100.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个日期，返回该日期对应的星期几。输入为三个整数，分别表示日、月、年。返回值为以下之一：`"Sunday"`, `"Monday"`, `"Tuesday"`, `"Wednesday"`, `"Thursday"`, `"Friday"`, `"Saturday"`。

注意：1971年1月1日是星期五。

**约束条件：** 给定日期为 1971 年到 2100 年之间的有效日期。

## 解题思路

利用 JavaScript 内置的 `Date` 对象，直接根据年月日创建日期，然后通过 `getDay()` 方法获取星期几。`getDay()` 返回 0（周日）到 6（周六），映射到对应的字符串即可。该方法简洁高效，且 JS 的 Date 对象完全支持 1971-2100 的日期范围。
