# [1808] Maximize Number of Nice Divisors

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-number-of-nice-divisors/description/)

* algorithms
* Hard (35.75%)
* Likes:    234
* Dislikes: 172
* Testcase Example:  '5'

```md
You are given a positive integer primeFactors. You are asked to construct a positive integer n that satisfies the following conditions:

The number of prime factors of n (not necessarily distinct) is at most primeFactors.
The number of nice divisors of n is maximized. Note that a divisor of n is nice if it is divisible by every prime factor of n. For example, if n = 12, then its prime factors are [2,2,3], then 6 and 12 are nice divisors, while 3 and 4 are not.

Return the number of nice divisors of n. Since that number can be too large, return it modulo 109 + 7.
Note that a prime number is a natural number greater than 1 that is not a product of two smaller natural numbers. The prime factors of a number n is a list of prime numbers such that their product equals n.

Example 1:

Input: primeFactors = 5
Output: 6
Explanation: 200 is a valid value of n.
It has 5 prime factors: [2,2,2,5,5], and it has 6 nice divisors: [10,20,40,50,100,200].
There is not other value of n that has at most 5 prime factors and more nice divisors.

Example 2:

Input: primeFactors = 8
Output: 18


Constraints:

1 <= primeFactors <= 109


```

## 中文翻译

给定 primeFactors，构造正整数 n（质因子个数 ≤ primeFactors），使得"好因子"个数最大化。好因子指能被 n 的每个质因子整除的因子。

返回最大好因子数对 10^9+7 取模。

## 解题思路

**整数拆分 + 快速幂**：

1. 若 n = p1^a1 * ... * pk^ak（sum(ai) = primeFactors），好因子数 = a1 * ... * ak
2. 问题转化为：将 primeFactors 拆分成若干 ≥1 的整数，使乘积最大
3. 经典结论：尽量用 3，余 1 时把一个 3+1 换成 2+2
4. 用快速幂计算结果对 10^9+7 取模

时间复杂度：O(log primeFactors)

## Solution

[SourceCode](./solution.js)
