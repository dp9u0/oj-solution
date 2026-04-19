# [2443] Sum of Number and Its Reverse

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-number-and-its-reverse/description/)

* algorithms
* Medium (49.44%)
* Likes:    279
* Dislikes: 306
* Testcase Example:  '443'

```md
Given a non-negative integer num, return true if num can be expressed as the sum of any non-negative integer and its reverse, or false otherwise.

Example 1:

Input: num = 443
Output: true
Explanation: 172 + 271 = 443 so we return true.

Example 2:

Input: num = 63
Output: false
Explanation: 63 cannot be expressed as the sum of a non-negative integer and its reverse so we return false.

Example 3:

Input: num = 181
Output: true
Explanation: 140 + 041 = 181 so we return true. Note that when a number is reversed, there may be leading zeros.


Constraints:

0 <= num <= 105


```

## 中文翻译

给定非负整数 num，判断是否存在一个非负整数 x 使得 x + reverse(x) = num。

## 解题思路

**枚举**：由于 num ≤ 10^5，直接枚举 x 从 0 到 num，检查 x + reverse(x) 是否等于 num。

时间复杂度：O(n * log n)

## Solution

[SourceCode](./solution.js)
