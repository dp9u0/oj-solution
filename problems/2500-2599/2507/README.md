# [2507] Smallest Value After Replacing With Sum of Prime Factors

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/description/)

* algorithms
* Medium (49.85%)
* Likes:    459
* Dislikes: 29
* Testcase Example:  '15'

```md
You are given a positive integer n.
Continuously replace n with the sum of its prime factors.

Note that if a prime factor divides n multiple times, it should be included in the sum as many times as it divides n.

Return the smallest value n will take on.

Example 1:

Input: n = 15
Output: 5
Explanation: Initially, n = 15.
15 = 3 * 5, so replace n with 3 + 5 = 8.
8 = 2 * 2 * 2, so replace n with 2 + 2 + 2 = 6.
6 = 2 * 3, so replace n with 2 + 3 = 5.
5 is the smallest value n will take on.

Example 2:

Input: n = 3
Output: 3
Explanation: Initially, n = 3.
3 is the smallest value n will take on.


Constraints:

2 <= n <= 105


```

## 题目翻译

给定正整数 n，不断将 n 替换为其所有质因数之和（含重复），返回 n 能取到的最小值。

## 解题思路

模拟。反复分解质因数求和，直到 n 为质数（无法继续分解）或新值 >= 旧值（不会更小）时停止。

时间复杂度 O(sqrt(n) per step)

## Solution

[SourceCode](./solution.js)
