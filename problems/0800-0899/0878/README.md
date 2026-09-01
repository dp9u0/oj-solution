# [878] Nth Magical Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/nth-magical-number/description/)

* algorithms
* Hard (36.57%)
* Likes:    1340
* Dislikes: 171
* Testcase Example:  '1\n2\n3'

```md
A positive integer is magical if it is divisible by either a or b.
Given the three integers n, a, and b, return the nth magical number. Since the answer may be very large, return it modulo 109 + 7.

Example 1:

Input: n = 1, a = 2, b = 3
Output: 2

Example 2:

Input: n = 4, a = 2, b = 3
Output: 6


Constraints:

1 <= n <= 109
2 <= a, b <= 4 * 104


```

## 中文翻译

能被 a 或 b 整除的正整数为神奇数。给定 n、a、b，返回第 n 个神奇数，结果对 10^9+7 取模。

## 解题思路

二分查找 + 容斥原理。对于 mid，计算 [1, mid] 中神奇数的个数 = floor(mid/a) + floor(mid/b) - floor(mid/lcm(a,b))。二分找最小 mid 使计数 >= n。

与题目 1201 类似，只是只有两个除数。

时间复杂度：O(log(n * max(a,b)))，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
