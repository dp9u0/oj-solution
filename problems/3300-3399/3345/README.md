# [3345] Smallest Divisible Digit Product I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-divisible-digit-product-i/description/)

* algorithms
* Easy (64.35%)
* Likes:    72
* Dislikes: 12
* Testcase Example:  '10\n2'

```md
You are given two integers n and t. Return the smallest number greater than or equal to n such that the product of its digits is divisible by t.

Example 1:

Input: n = 10, t = 2
Output: 10
Explanation:
The digit product of 10 is 0, which is divisible by 2, making it the smallest number greater than or equal to 10 that satisfies the condition.

Example 2:

Input: n = 15, t = 3
Output: 16
Explanation:
The digit product of 16 is 6, which is divisible by 3, making it the smallest number greater than or equal to 15 that satisfies the condition.


Constraints:

1 <= n <= 100
1 <= t <= 10


```

## 翻译

给定整数n和t，返回大于等于n的最小数，使得其各位数字之积能被t整除。注意包含0的数字之积为0，可被任何t整除。

## 解题思路

从n开始逐个检查数字积是否能被t整除。约束范围小(n<=100)，直接枚举。

## Solution

[SourceCode](./solution.js)
