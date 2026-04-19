# [2710] Remove Trailing Zeros From a String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/remove-trailing-zeros-from-a-string/description/)

* algorithms
* Easy (79.50%)
* Likes:    342
* Dislikes: 13
* Testcase Example:  '"51230100"'

```md
Given a positive integer num represented as a string, return the integer num without trailing zeros as a string.

Example 1:

Input: num = '51230100'
Output: '512301'
Explanation: Integer '51230100' has 2 trailing zeros, we remove them and return integer '512301'.

Example 2:

Input: num = '123'
Output: '123'
Explanation: Integer '123' has no trailing zeros, we return integer '123'.


Constraints:

1 <= num.length <= 1000
num consistsof only digits.
num doesn&#39;thave any leading zeros.


```

## 题目翻译

给定一个正整数的字符串表示 num，返回去掉末尾所有零后的字符串。

## 解题思路

**直接截断**

从末尾向前找到第一个非零字符的位置，截取子串。

## Solution

[SourceCode](./solution.js)
