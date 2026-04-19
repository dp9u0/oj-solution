# [1736] Latest Time by Replacing Hidden Digits

## Description

[LeetCode Problem Description](https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/description/)

* algorithms
* Easy (43.73%)
* Likes:    406
* Dislikes: 188
* Testcase Example:  '"2?:?0"'

```md
You are given a string time in the form of  hh:mm, where some of the digits in the string are hidden (represented by ?).
The valid times are those inclusively between 00:00 and 23:59.
Return the latest valid time you can get from time by replacing the hidden digits.

Example 1:

Input: time = '2?:?0'
Output: '23:50'
Explanation: The latest hour beginning with the digit &#39;2&#39; is 23 and the latest minute ending with the digit &#39;0&#39; is 50.

Example 2:

Input: time = '0?:3?'
Output: '09:39'

Example 3:

Input: time = '1?:22'
Output: '19:22'


Constraints:

time is in the format hh:mm.
It is guaranteed that you can produce a valid time from the given string.


```

## 翻译

给定hh:mm格式的时间字符串（含?），替换?为数字使时间合法且最大，返回结果。

## 解题思路

逐位贪心：h1若?则看h2是否>=4（是则1否则2），h2若?则看h1是否2（是则3否则9），m1若?则5，m2若?则9。

## Solution

[SourceCode](./solution.js)
