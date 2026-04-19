# [306] Additive Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/additive-number/description/)

* algorithms
* Medium (32.10%)
* Likes:    1205
* Dislikes: 811
* Testcase Example:  '"112358"'

```md
An additive number is a string whose digits can form an additive sequence.
A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.
Given a string containing only digits, return true if it is an additive number or false otherwise.
Note: Numbers in the additive sequence cannot have leading zeros, so sequence 1, 2, 03 or 1, 02, 3 is invalid.

Example 1:

Input: '112358'
Output: true
Explanation:
The digits can form an additive sequence: 1, 1, 2, 3, 5, 8.
1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8

Example 2:

Input: '199100199'
Output: true
Explanation:
The additive sequence is: 1, 99, 100, 199.
1 + 99 = 100, 99 + 100 = 199


Constraints:

1 <= num.length <= 35
num consists only of digits.


Follow up: How would you handle overflow for very large input integers?

```

## 中文题目描述

累加数是一个字符串，其数字可以形成累加序列。

一个有效的累加序列必须至少包含 3 个数。除了最开始的两个数以外，序列中的每个后续数字必须是它之前两个数字之和。

给定一个只包含数字的字符串，如果它是累加数则返回 true，否则返回 false。

注意：累加序列中的数字不能有前导零，所以序列 1, 2, 03 或 1, 02, 3 是无效的。

示例 1：
输入：'112358'
输出：true
解释：
数字可以形成累加序列：1, 1, 2, 3, 5, 8
1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8

示例 2：
输入：'199100199'
输出：true
解释：
累加序列为：1, 99, 100, 199
1 + 99 = 100, 99 + 100 = 199

约束条件：
1. 字符串长度在 1 到 35 之间
2. 字符串只包含数字

进阶问题：
对于非常大的输入整数，你将如何处理溢出问题？

## Solution

[SourceCode](./solution.js)
