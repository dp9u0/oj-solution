# [1390] Four Divisors

## Description

[LeetCode Problem Description](https://leetcode.com/problems/four-divisors/description/)

* algorithms
* Medium (56.62%)
* Likes:    892
* Dislikes: 223
* Testcase Example:  '[21,4,7]'

```md
Given an integer array nums, return the sum of divisors of the integers in that array that have exactly four divisors. If there is no such integer in the array, return 0.

Example 1:

Input: nums = [21,4,7]
Output: 32
Explanation:
21 has 4 divisors: 1, 3, 7, 21
4 has 3 divisors: 1, 2, 4
7 has 2 divisors: 1, 7
The answer is the sum of divisors of 21 only.

Example 2:

Input: nums = [21,21]
Output: 64

Example 3:

Input: nums = [1,2,3,4,5]
Output: 0


Constraints:

1 <= nums.length <= 104
1 <= nums[i] <= 105


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 nums，返回其中恰好有四个因子的整数的所有因子之和。如果没有这样的整数，返回 0。

## 解题思路

对每个数枚举因子。一个数恰好有四个因子，当且仅当它可以写成 p³（p 为质数，因子为 1,p,p²,p³）或 p×q（p,q 为不同质数，因子为 1,p,q,pq）。
直接枚举每个数的因子，枚举到 √n 即可，收集所有因子。若恰好有 4 个则累加其和。O(n√m)。
