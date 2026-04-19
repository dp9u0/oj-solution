# [2299] Strong Password Checker II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/strong-password-checker-ii/description/)

* algorithms
* Easy (55.38%)
* Likes:    386
* Dislikes: 41
* Testcase Example:  '"IloveLe3tcode!"'

```md
A password is said to be strong if it satisfies all the following criteria:

It has at least 8 characters.
It contains at least one lowercase letter.
It contains at least one uppercase letter.
It contains at least one digit.
It contains at least one special character. The special characters are the characters in the following string: '!@#$%^&amp;*()-+'.
It does not contain 2 of the same character in adjacent positions (i.e., 'aab' violates this condition, but 'aba' does not).

Given a string password, return true if it is a strong password. Otherwise, return false.

Example 1:

Input: password = 'IloveLe3tcode!'
Output: true
Explanation: The password meets all the requirements. Therefore, we return true.

Example 2:

Input: password = 'Me+You--IsMyDream'
Output: false
Explanation: The password does not contain a digit and also contains 2 of the same character in adjacent positions. Therefore, we return false.

Example 3:

Input: password = '1aB!'
Output: false
Explanation: The password does not meet the length requirement. Therefore, we return false.

Constraints:

1 <= password.length <= 100
password consists of letters, digits, and special characters: '!@#$%^&amp;*()-+'.


```

## 中文翻译

检查密码是否满足：>=8字符、包含小写、大写、数字、特殊字符(!@#$%^&*()-+)、无相邻相同字符。

## 解题思路

遍历字符串，用正则或字符类别检查各条件。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
