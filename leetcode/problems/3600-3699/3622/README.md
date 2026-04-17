# [3622] Check Divisibility by Digit Sum and Product

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-divisibility-by-digit-sum-and-product/description/)

* algorithms
* Easy (69.57%)
* Likes:    55
* Dislikes: -
* Testcase Example:  '99'

```md
You are given a positive integer n. Determine whether n is divisible by the sum of the following two values:


The digit sum of n (the sum of its digits).


The digit product of n (the product of its digits).


Return true if n is divisible by this sum; otherwise, return false.

Example 1:

Input: n = 99
Output: true
Explanation:
Since 99 is divisible by the sum (9 + 9 = 18) plus product (9 * 9 = 81) of its digits (total 99), the output is true.

Example 2:

Input: n = 23
Output: false
Explanation:
Since 23 is not divisible by the sum (2 + 3 = 5) plus product (2 * 3 = 6) of its digits (total 11), the output is false.


Constraints:

1 <= n <= 106


```

## 题目翻译

给定正整数 n，判断 n 是否能被其各位数字之和与各位数字之积的和整除。

## 解题思路

**模拟**

逐位提取数字，计算 sum 和 product，检查 n % (sum + product) === 0。

## Solution

[SourceCode](./solution.js)
