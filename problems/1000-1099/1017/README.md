# [1017] Convert to Base -2

## Description

[LeetCode Problem Description](https://leetcode.com/problems/convert-to-base-2/description/)

* algorithms
* Medium (61.84%)
* Likes:    574
* Dislikes: 309
* Testcase Example:  '2'

```md
Given an integer n, return a binary string representing its representation in base -2.
Note that the returned string should not have leading zeros unless the string is '0'.

Example 1:

Input: n = 2
Output: '110'
Explantion: (-2)2 + (-2)1 = 2

Example 2:

Input: n = 3
Output: '111'
Explantion: (-2)2 + (-2)1 + (-2)0 = 3

Example 3:

Input: n = 4
Output: '100'
Explantion: (-2)2 = 4


Constraints:

0 <= n <= 109


```

## 中文翻译

给定整数 n，返回其 -2 进制的字符串表示。

## 解题思路

类比进制转换。n 除以 -2 取余，余数一定为 0 或 1。若余数为负则调整为正：余数加 2，商加 1。重复直到商为 0。

## Solution

[SourceCode](./solution.js)
