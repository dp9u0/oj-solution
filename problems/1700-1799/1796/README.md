# [1796] Second Largest Digit in a String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/second-largest-digit-in-a-string/description/)

* algorithms
* Easy (54.15%)
* Likes:    601
* Dislikes: 133
* Testcase Example:  '"dfa12321afd"'

```md
Given an alphanumeric string s, return the second largest numerical digit that appears in s, or -1 if it does not exist.
An alphanumeric string is a string consisting of lowercase English letters and digits.

Example 1:

Input: s = 'dfa12321afd'
Output: 2
Explanation: The digits that appear in s are [1, 2, 3]. The second largest digit is 2.

Example 2:

Input: s = 'abc1111'
Output: -1
Explanation: The digits that appear in s are [1]. There is no second largest digit.


Constraints:

1 <= s.length <= 500
s consists of only lowercase English letters and digits.


```

## 中文翻译

给定字母数字字符串 s，返回其中出现的第二大的数字，若不存在返回 -1。

## 解题思路

遍历字符串，用 Set 收集所有数字，排序后返回倒数第二个。

## Solution

[SourceCode](./solution.js)
