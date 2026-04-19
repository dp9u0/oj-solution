# [629] K Inverse Pairs Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/k-inverse-pairs-array/description/)

* algorithms
* Hard (48.98%)
* Likes:    2781
* Dislikes: 331
* Testcase Example:  '3\n0'

```md
For an integer array nums, an inverse pair is a pair of integers [i, j] where 0 <= i < j < nums.length and nums[i] > nums[j].
Given two integers n and k, return the number of different arrays consisting of numbers from 1 to n such that there are exactly k inverse pairs. Since the answer can be huge, return it modulo 109 + 7.

Example 1:

Input: n = 3, k = 0
Output: 1
Explanation: Only the array [1,2,3] which consists of numbers from 1 to 3 has exactly 0 inverse pairs.

Example 2:

Input: n = 3, k = 1
Output: 2
Explanation: The array [1,3,2] and [2,1,3] have exactly 1 inverse pair.


Constraints:

1 <= n <= 1000
0 <= k <= 1000


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定 n 和 k，求由 1 到 n 组成的恰好有 k 个逆序对的排列数，对 10^9+7 取模。

## 解题思路

DP+前缀和优化。dp[i][j] 表示前 i 个数中恰好 j 个逆序对的排列数。转移：将 i 插入 i-1 个数的排列中，可产生 0 到 i-1 个新逆序对，即 dp[i][j] = sum(dp[i-1][j-t], t=0..i-1)。用前缀和 O(1) 转移。
