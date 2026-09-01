# [866] Prime Palindrome

## Description

[LeetCode Problem Description](https://leetcode.com/problems/prime-palindrome/description/)

* algorithms
* Medium (28.05%)
* Likes:    521
* Dislikes: 845
* Testcase Example:  '6'

```md
Given an integer n, return the smallest prime palindrome greater than or equal to n.
An integer is prime if it has exactly two divisors: 1 and itself. Note that 1 is not a prime number.

For example, 2, 3, 5, 7, 11, and 13 are all primes.

An integer is a palindrome if it reads the same from left to right as it does from right to left.

For example, 101 and 12321 are palindromes.

The test cases are generated so that the answer always exists and is in the range [2, 2 * 108].

Example 1:
Input: n = 6
Output: 7
Example 2:
Input: n = 8
Output: 11
Example 3:
Input: n = 13
Output: 101


Constraints:

1 <= n <= 108


```

## 题目翻译

给定整数 n，返回大于等于 n 的最小素数回文数。

## 解题思路

关键性质：除 11 外，所有偶数长度的回文数都能被 11 整除。因此只需生成奇数长度的回文数并检查素数。从 n 开始枚举，用「构造回文」的方式生成候选：取一个数的前半部分，镜像生成奇数长度回文，然后检查素数。

## Solution

[SourceCode](./solution.js)
