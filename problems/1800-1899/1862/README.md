# [1862] Sum of Floored Pairs

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-floored-pairs/description/)

* algorithms
* Hard (30.78%)
* Likes:    466
* Dislikes: 39
* Testcase Example:  '[2,5,9]'

```md
Given an integer array nums, return the sum of floor(nums[i] / nums[j]) for all pairs of indices 0 <= i, j < nums.length in the array. Since the answer may be too large, return it modulo 109 + 7.
The floor() function returns the integer part of the division.

Example 1:

Input: nums = [2,5,9]
Output: 10
Explanation:
floor(2 / 5) = floor(2 / 9) = floor(5 / 9) = 0
floor(2 / 2) = floor(5 / 5) = floor(9 / 9) = 1
floor(5 / 2) = 2
floor(9 / 2) = 4
floor(9 / 5) = 1
We calculate the floor of the division for every pair of indices in the array then sum them up.

Example 2:

Input: nums = [7,7,7,7,7,7,7]
Output: 49


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105


```

## 翻译

给定数组 nums，求所有 pair (i,j) 的 floor(nums[i]/nums[j]) 之和对 10^9+7 取模。

## 解题思路

频数数组 + 前缀和。对每个除数 d（cnt[d]>0），枚举倍数 k，统计 [k*d, (k+1)*d-1] 范围内的元素个数 c，贡献为 k*c*cnt[d]。利用调和级数 O(M log M)，M=maxVal。

## Solution

[SourceCode](./solution.js)
