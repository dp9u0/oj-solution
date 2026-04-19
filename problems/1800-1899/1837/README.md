# [1837] Sum of Digits in Base K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-digits-in-base-k/description/)

* algorithms
* Easy (78.60%)
* Likes:    566
* Dislikes: 50
* Testcase Example:  '34\n6'

```md
Given an integer n (in base 10) and a base k, return the sum of the digits of n after converting n from base 10 to base k.
After converting, each digit should be interpreted as a base 10 number, and the sum should be returned in base 10.

Example 1:

Input: n = 34, k = 6
Output: 9
Explanation: 34 (base 10) expressed in base 6 is 54. 5 + 4 = 9.

Example 2:

Input: n = 10, k = 10
Output: 1
Explanation: n is already in base 10. 1 + 0 = 1.


Constraints:

1 <= n <= 100
2 <= k <= 10


```

## 题目翻译

给定一个十进制整数 n 和一个进制 k，将 n 转换为 k 进制后，返回其各位数字之和。

## 解题思路

直接进行进制转换，不断取余求和。

## Solution

[SourceCode](./solution.js)
