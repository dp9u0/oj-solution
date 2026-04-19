# [1250] Check If It Is a Good Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-it-is-a-good-array/description/)

* algorithms
* Hard (63.61%)
* Likes:    574
* Dislikes: 386
* Testcase Example:  '[12,5,7,23]'

```md
Given an array nums ofpositive integers. Your task is to select some subset of nums, multiply each element by an integer and add all these numbers.The array is said to begoodif you can obtain a sum of1from the array by any possible subset and multiplicand.
ReturnTrueif the array is goodotherwisereturnFalse.

Example 1:

Input: nums = [12,5,7,23]
Output: true
Explanation: Pick numbers 5 and 7.
5*3 + 7*(-2) = 1

Example 2:

Input: nums = [29,6,10]
Output: true
Explanation: Pick numbers 29, 6 and 10.
29*1 + 6*(-3) + 10*(-1) = 1

Example 3:

Input: nums = [3,6]
Output: false


Constraints:

1 <= nums.length <= 10^5
1 <= nums[i] <= 10^9


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定正整数数组 nums，能否选出子集，每个元素乘以任意整数后求和等于 1。

## 解题思路

贝祖定理：整数 a, b 的线性组合 ax + by 能表示的最小正整数就是 gcd(a, b)。扩展到多个数：能表示 1 当且仅当所有数的 GCD 为 1。
