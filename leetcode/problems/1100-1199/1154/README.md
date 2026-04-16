# [1154] Day of the Year

## Description

[LeetCode Problem Description](https://leetcode.com/problems/day-of-the-year/description/)

* algorithms
* Easy (49.82%)
* Likes:    510
* Dislikes: 496
* Testcase Example:  '"2019-01-09"'

```md
Given a string date representing a Gregorian calendar date formatted as YYYY-MM-DD, return the day number of the year.

Example 1:

Input: date = '2019-01-09'
Output: 9
Explanation: Given date is the 9th day of the year in 2019.

Example 2:

Input: date = '2019-02-10'
Output: 41


Constraints:

date.length == 10
date[4] == date[7] == &#39;-&#39;, and all other date[i]&#39;s are digits
date represents a calendar date between Jan 1st, 1900 and Dec 31st, 2019.


```

## 中文翻译

给定一个格式为 YYYY-MM-DD 的日期字符串，返回该日期是该年中的第几天。

## 解题思路

直接模拟。解析年月日，累加之前每个月的天数，再加日。闰年判断：能被400整除，或能被4整除但不能被100整除。

## Solution

[SourceCode](./solution.js)
