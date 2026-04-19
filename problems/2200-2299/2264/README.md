# [2264] Largest 3-Same-Digit Number in String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/largest-3-same-digit-number-in-string/description/)

* algorithms
* Easy (72.69%)
* Likes:    1391
* Dislikes: 55
* Testcase Example:  '"6777133339"'

```md
You are given a string num representing a large integer. An integer is good if it meets the following conditions:

It is a substring of num with length 3.
It consists of only one unique digit.

Return the maximum good integer as a string or an empty string '' if no such integer exists.
Note:

A substring is a contiguous sequence of characters within a string.
There may be leading zeroes in num or a good integer.


Example 1:

Input: num = '6777133339'
Output: '777'
Explanation: There are two distinct good integers: '777' and '333'.
'777' is the largest, so we return '777'.

Example 2:

Input: num = '2300019'
Output: '000'
Explanation: '000' is the only good integer.

Example 3:

Input: num = '42352338'
Output: ''
Explanation: No substring of length 3 consists of only one unique digit. Therefore, there are no good integers.


Constraints:

3 <= num.length <= 1000
num only consists of digits.


```

## 翻译

给定数字字符串 num，找到长度为 3 且由同一数字组成的子串中最大的那个，返回该子串。如果不存在则返回空字符串。

## Approach

从 '999' 到 '000' 依次检查是否是 num 的子串，返回第一个匹配的。

时间复杂度 O(10*n) = O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
