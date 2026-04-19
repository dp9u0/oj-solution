# [1175] Prime Arrangements

## Description

[LeetCode Problem Description](https://leetcode.com/problems/prime-arrangements/description/)

* algorithms
* Easy (60.90%)
* Likes:    450
* Dislikes: 539
* Testcase Example:  '5'

```md
Return the number of permutations of 1 to n so that prime numbers are at prime indices (1-indexed.)
(Recall that an integeris prime if and only if it is greater than 1, and cannot be written as a product of two positive integersboth smaller than it.)
Since the answer may be large, return the answer modulo 10^9 + 7.

Example 1:

Input: n = 5
Output: 12
Explanation: For example [1,2,5,4,3] is a valid permutation, but [5,2,3,4,1] is not because the prime number 5 is at index 1.

Example 2:

Input: n = 100
Output: 682289015


Constraints:

1 <= n <= 100


```

## 题目翻译

求 1 到 n 的排列中，质数放在质数位置（1-indexed）的方案数，模 10^9+7。

## 解题思路

**质数计数 + 阶乘**

质数有 c 个，可任意排列于 c 个质数位置：c! 种。非质数有 n-c 个，排列于 n-c 个非质数位置：(n-c)! 种。答案 = c! * (n-c)! mod 10^9+7。

用筛法计数质数，预计算阶乘。n ≤ 100。

## Solution

[SourceCode](./solution.js)
