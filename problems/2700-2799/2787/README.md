# [2787] Ways to Express an Integer as Sum of Powers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers/description/)

* algorithms
* Medium (49.83%)
* Likes:    845
* Dislikes: 41
* Testcase Example:  '10\n2'

```md
Given two positive integers n and x.
Return the number of ways n can be expressed as the sum of the xth power of unique positive integers, in other words, the number of sets of unique integers [n1, n2, ..., nk] where n = n1x + n2x + ... + nkx.
Since the result can be very large, return it modulo 109 + 7.
For example, if n = 160 and x = 3, one way to express n is n = 23 + 33 + 53.

Example 1:

Input: n = 10, x = 2
Output: 1
Explanation: We can express n as the following: n = 32 + 12 = 10.
It can be shown that it is the only way to express 10 as the sum of the 2nd power of unique integers.

Example 2:

Input: n = 4, x = 1
Output: 2
Explanation: We can express n in the following ways:
- n = 41 = 4.
- n = 31 + 11 = 4.


Constraints:

1 <= n <= 300
1 <= x <= 5


```

## 中文翻译

给定正整数 n 和 x，求将 n 表示为不同正整数的 x 次幂之和的方案数。结果对 10^9+7 取模。

## 解题思路

01 背包 DP：枚举所有 i^x <= n 的正整数 i，dp[s] 表示凑出和为 s 的方案数。每个 i 只能用一次，倒序更新。

## Solution

[SourceCode](./solution.js)
