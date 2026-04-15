# [3280] Convert Date to Binary

## Description

[LeetCode Problem Description](https://leetcode.com/problems/convert-date-to-binary/description/)

* algorithms
* Easy (88.77%)
* Likes:    159
* Dislikes: 11
* Testcase Example:  '"2080-02-29"'

```md
You are given a string date representing a Gregorian calendar date in the yyyy-mm-dd format.
date can be written in its binary representation obtained by converting year, month, and day to their binary representations without any leading zeroes and writing them down in year-month-day format.
Return the binary representation of date.

Example 1:

Input: date = '2080-02-29'
Output: '100000100000-10-11101'
Explanation:
100000100000, 10, and 11101 are the binary representations of 2080, 02, and 29 respectively.

Example 2:

Input: date = '1900-01-01'
Output: '11101101100-1-1'
Explanation:
11101101100, 1, and 1 are the binary representations of 1900, 1, and 1 respectively.


Constraints:

date.length == 10
date[4] == date[7] == &#39;-&#39;, and all other date[i]&#39;s are digits.
The input is generated such that date represents a valid Gregorian calendar date between Jan 1st, 1900 and Dec 31st, 2100 (both inclusive).


```

## 中文翻译

给定 yyyy-mm-dd 格式的日期字符串，将年、月、日分别转为无前导零的二进制表示，用 - 连接返回。

## 解题思路

按 - 分割，对每部分转为二进制（toString(2)），用 - 连接。

## Solution

[SourceCode](./solution.js)
