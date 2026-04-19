# [2283] Check if Number Has Equal Digit Count and Digit Value

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-number-has-equal-digit-count-and-digit-value/description/)

* algorithms
* Easy (73.11%)
* Likes:    679
* Dislikes: 101
* Testcase Example:  '"1210"'

```md
You are given a 0-indexed string num of length n consisting of digits.
Return true if for every index i in the range 0 <= i < n, the digit i occurs num[i] times in num, otherwise return false.

Example 1:

Input: num = '1210'
Output: true
Explanation:
num[0] = &#39;1&#39;. The digit 0 occurs once in num.
num[1] = &#39;2&#39;. The digit 1 occurs twice in num.
num[2] = &#39;1&#39;. The digit 2 occurs once in num.
num[3] = &#39;0&#39;. The digit 3 occurs zero times in num.
The condition holds true for every index in '1210', so return true.

Example 2:

Input: num = '030'
Output: false
Explanation:
num[0] = &#39;0&#39;. The digit 0 should occur zero times, but actually occurs twice in num.
num[1] = &#39;3&#39;. The digit 1 should occur three times, but actually occurs zero times in num.
num[2] = &#39;0&#39;. The digit 2 occurs zero times in num.
The indices 0 and 1 both violate the condition, so return false.


Constraints:

n == num.length
1 <= n <= 10
num consists of digits.


```

## 中文翻译

给定由数字组成的字符串 num，判断对于每个下标 i，数字 i 在 num 中出现的次数是否等于 num[i]。

## 解题思路

统计每个数字的出现次数，然后逐位验证。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
