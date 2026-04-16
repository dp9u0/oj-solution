# [3438] Find Valid Pair of Adjacent Digits in String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-valid-pair-of-adjacent-digits-in-string/description/)

* algorithms
* Easy (60.75%)
* Likes:    85
* Dislikes: 8
* Testcase Example:  '"2523533"'

```md
You are given a string s consisting only of digits. A valid pair is defined as two adjacent digits in s such that:

The first digit is not equal to the second.
Each digit in the pair appears in s exactly as many times as its numeric value.

Return the first valid pair found in the string s when traversing from left to right. If no valid pair exists, return an empty string.

Example 1:

Input: s = '2523533'
Output: '23'
Explanation:
Digit &#39;2&#39; appears 2 times and digit &#39;3&#39; appears 3 times. Each digit in the pair '23' appears in s exactly as many times as its numeric value. Hence, the output is '23'.

Example 2:

Input: s = '221'
Output: '21'
Explanation:
Digit &#39;2&#39; appears 2 times and digit &#39;1&#39; appears 1 time. Hence, the output is '21'.

Example 3:

Input: s = '22'
Output: ''
Explanation:
There are no valid adjacent pairs.


Constraints:

2 <= s.length <= 100
s only consists of digits from &#39;1&#39; to &#39;9&#39;.


```

## 中文翻译

给定数字字符串 s，找第一个有效的相邻对：两个数字不同，且每个数字在 s 中出现的次数等于其数值。

## 解题思路

先统计每个数字出现次数，然后从左到右遍历相邻对，检查两个数字不同且各自计数等于其数值。

## Solution

[SourceCode](./solution.js)
