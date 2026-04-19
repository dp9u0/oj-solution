# [1952] Three Divisors

## Description

[LeetCode Problem Description](https://leetcode.com/problems/three-divisors/description/)

* algorithms
* Easy (64.10%)
* Likes:    640
* Dislikes: 37
* Testcase Example:  '2'

```md
Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.
An integer m is a divisor of n if there exists an integer k such that n = k * m.

Example 1:

Input: n = 2
Output: false
Explantion: 2 has only two divisors: 1 and 2.

Example 2:

Input: n = 4
Output: true
Explantion: 4 has three divisors: 1, 2, and 4.


Constraints:

1 <= n <= 104


```

## 题目翻译

给定整数 n，判断它是否恰好有 3 个正因子。

## 解题思路

一个数恰好有 3 个因子当且仅当它是某个素数的平方（即 p²，因子为 1, p, p²）。检查 sqrt(n) 是否为整数且为素数。

## Solution

[SourceCode](./solution.js)
