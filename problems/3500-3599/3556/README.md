# [3556] Sum of Largest Prime Substrings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-largest-prime-substrings/description/)

* algorithms
* Medium (37.90%)
* Likes:    55
* Dislikes: 11
* Testcase Example:  '"12234"'

```md
Given a string s, find the sum of the 3 largest unique prime numbers that can be formed using any of its substrings.
Return the sum of the three largest unique prime numbers that can be formed. If fewer than three exist, return the sum of all available primes. If no prime numbers can be formed, return 0.
Note: Each prime number should be counted only once, even if it appears in multiple substrings. Additionally, when converting a substring to an integer, any leading zeros are ignored.

Example 1:

Input: s = '12234'
Output: 1469
Explanation:

The unique prime numbers formed from the substrings of '12234' are 2, 3, 23, 223, and 1223.
The 3 largest primes are 1223, 223, and 23. Their sum is 1469.


Example 2:

Input: s = '111'
Output: 11
Explanation:

The unique prime number formed from the substrings of '111' is 11.
Since there is only one prime number, the sum is 11.



Constraints:

1 <= s.length <= 10
s consists of only digits.


```

## 中文翻译

给定数字字符串 s，找出其所有子串能组成的去重质数，返回最大 3 个质数之和。

## 解题思路

枚举所有子串，转为数字后判断是否为质数，用 Set 去重，排序取最大的 3 个求和。s 长度 <= 10，子串数最多 55，数字最大 10^10，用 BigInt 判断质数。

## Solution

[SourceCode](./solution.js)
