# [1994] The Number of Good Subsets

## Description

[LeetCode Problem Description](https://leetcode.com/problems/the-number-of-good-subsets/description/)

* algorithms
* Hard (37.20%)
* Likes:    509
* Dislikes: 17
* Testcase Example:  '[1,2,3,4]'

```md
You are given an integer array nums. We call a subset of nums good if its product can be represented as a product of one or more distinct prime numbers.

For example, if nums = [1, 2, 3, 4]:

[2, 3], [1, 2, 3], and [1, 3] are good subsets with products 6 = 2*3, 6 = 2*3, and 3 = 3 respectively.
[1, 4] and [4] are not good subsets with products 4 = 2*2 and 4 = 2*2 respectively.



Return the number of different good subsets in nums modulo 109 + 7.
A subset of nums is any array that can be obtained by deleting some (possibly none or all) elements from nums. Two subsets are different if and only if the chosen indices to delete are different.

Example 1:

Input: nums = [1,2,3,4]
Output: 6
Explanation: The good subsets are:
- [1,2]: product is 2, which is the product of distinct prime 2.
- [1,2,3]: product is 6, which is the product of distinct primes 2 and 3.
- [1,3]: product is 3, which is the product of distinct prime 3.
- [2]: product is 2, which is the product of distinct prime 2.
- [2,3]: product is 6, which is the product of distinct primes 2 and 3.
- [3]: product is 3, which is the product of distinct prime 3.

Example 2:

Input: nums = [4,2,3,15]
Output: 5
Explanation: The good subsets are:
- [2]: product is 2, which is the product of distinct prime 2.
- [2,3]: product is 6, which is the product of distinct primes 2 and 3.
- [2,15]: product is 30, which is the product of distinct primes 2, 3, and 5.
- [3]: product is 3, which is the product of distinct prime 3.
- [15]: product is 15, which is the product of distinct primes 3 and 5.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 30


```

## 题目翻译

给定整数数组 nums，子集称为"好的"如果其乘积可以表示为一个或多个不同质数的乘积（即乘积的质因数分解中每个质数只出现一次）。

返回不同好子集的数量，对 10^9+7 取模。

## 解题思路

**状压 DP**

nums[i] <= 30，质数有 2,3,5,7,11,13,17,19,23,29 共 10 个，用 10 位 bitmask 表示。

1. 预处理：对 2-30 的每个数判断是否为"好数"（不含重复质因子），并计算其质因子 bitmask
2. 统计每个数的出现次数
3. DP：dp[mask] 表示质因子集合恰好为 mask 的子集数。对每个好数 v，用 0-1 背包方式更新
4. 答案 = sum(dp[mask>0]) × 2^(1的个数)，因为 1 可以自由加入任何好子集

复杂度 O(30 × 2^10)。

## Solution

[SourceCode](./solution.js)
