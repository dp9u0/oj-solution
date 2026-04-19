# [2119] A Number After a Double Reversal

## Description

[LeetCode Problem Description](https://leetcode.com/problems/a-number-after-a-double-reversal/description/)

* algorithms
* Easy (82.10%)
* Likes:    801
* Dislikes: 49
* Testcase Example:  '526'

```md
Reversing an integer means to reverse all its digits.

For example, reversing 2021 gives 1202. Reversing 12300 gives 321 as the leading zeros are not retained.

Given an integer num, reverse num to get reversed1, then reverse reversed1 to get reversed2. Return true if reversed2 equals num. Otherwise return false.

Example 1:

Input: num = 526
Output: true
Explanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.

Example 2:

Input: num = 1800
Output: false
Explanation: Reverse num to get 81, then reverse 81 to get 18, which does not equal num.

Example 3:

Input: num = 0
Output: true
Explanation: Reverse num to get 0, then reverse 0 to get 0, which equals num.


Constraints:

0 <= num <= 106


```

## 中文翻译

反转一个整数得到 reversed1，再反转 reversed1 得到 reversed2。判断 reversed2 是否等于 num。

## 解题思路

双反转等于原数当且仅当数字不以 0 结尾（或数字本身就是 0）。

## Solution

[SourceCode](./solution.js)
