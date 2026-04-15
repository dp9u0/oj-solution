# [1507] Reformat Date

## Description

[LeetCode Problem Description](https://leetcode.com/problems/reformat-date/description/)

* algorithms
* Easy (68.38%)
* Likes:    506
* Dislikes: 441
* Testcase Example:  '"20th Oct 2052"'

```md
Given a date string in the formDay Month Year, where:

Dayis in the set {'1st', '2nd', '3rd', '4th', ..., '30th', '31st'}.
Monthis in the set {'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'}.
Yearis in the range [1900, 2100].

Convert the date string to the format YYYY-MM-DD, where:

YYYY denotes the 4 digit year.
MM denotes the 2 digit month.
DD denotes the 2 digit day.


Example 1:

Input: date = '20th Oct 2052'
Output: '2052-10-20'

Example 2:

Input: date = '6th Jun 1933'
Output: '1933-06-06'

Example 3:

Input: date = '26th May 1960'
Output: '1960-05-26'


Constraints:

The given dates are guaranteed to be valid, so no error handling is necessary.


```

## 中文翻译

将日期字符串从 "Day Month Year" 格式（如 "20th Oct 2052"）转为 "YYYY-MM-DD" 格式。Day 带序数后缀，Month 为三字母缩写。

## 解题思路

**字符串解析**

直接 split 拆分三部分，解析日（去掉后缀）、月（映射表）、年，用 padStart 补零。

时间复杂度：O(1)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
