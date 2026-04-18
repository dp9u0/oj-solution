# [3770] Largest Prime from Consecutive Prime Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/largest-prime-from-consecutive-prime-sum/description/)

* algorithms
* Medium (39.07%)
* Likes:    64
* Dislikes: 4
* Testcase Example:  '20'

```md
You are given an integer n.
Return the largest prime number less than or equal to n that can be expressed as the sum of one or more consecutive prime numbers starting from 2. If no such number exists, return 0.

Example 1:

Input: n = 20
Output: 17
Explanation:
The prime numbers less than or equal to n = 20 which are consecutive prime sums are:


2 = 2


5 = 2 + 3


17 = 2 + 3 + 5 + 7


The largest is 17, so it is the answer.

Example 2:

Input: n = 2
Output: 2
Explanation:
The only consecutive prime sum less than or equal to 2 is 2 itself.


Constraints:

1 <= n <= 5 * 105


```

## 题目翻译

给定整数n，返回<=n的最大素数，该素数可以表示为从2开始的一个或多个连续素数之和。不存在则返回0。

## 解题思路

筛法求素数，然后计算从2开始的连续素数前缀和，用滑动窗口枚举所有连续素数和，检查是否为素数且<=n，取最大值。

## Solution

[SourceCode](./solution.js)
