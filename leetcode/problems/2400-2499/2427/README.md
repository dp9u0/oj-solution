# [2427] Number of Common Factors

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-common-factors/description/)

* algorithms
* Easy (80.05%)
* Likes:    686
* Dislikes: 13
* Testcase Example:  '12\n6'

```md
Given two positive integers a and b, return the number of common factors of a and b.
An integer x is a common factor of a and b if x divides both a and b.

Example 1:

Input: a = 12, b = 6
Output: 4
Explanation: The common factors of 12 and 6 are 1, 2, 3, 6.

Example 2:

Input: a = 25, b = 30
Output: 2
Explanation: The common factors of 25 and 30 are 1, 5.


Constraints:

1 <= a, b <= 1000


```

## 翻译

给定两个正整数 a 和 b，返回它们的公因数个数。公因数是同时整除 a 和 b 的整数。

## Approach

先求 a 和 b 的最大公约数 g = gcd(a, b)，然后统计 g 的因数个数。遍历 1 到 sqrt(g)，若 i 整除 g，则计数加 2（i 和 g/i）；若 i == g/i，只加 1。

时间复杂度 O(log(min(a,b)) + sqrt(g))，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
