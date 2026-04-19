# [996] Number of Squareful Arrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-squareful-arrays/description/)

* algorithms
* Hard (51.34%)
* Likes:    1040
* Dislikes: 49
* Testcase Example:  '[1,17,8]'

```md
An array is squareful if the sum of every pair of adjacent elements is a perfect square.
Given an integer array nums, return the number of permutations of nums that are squareful.
Two permutations perm1 and perm2 are different if there is some index i such that perm1[i] != perm2[i].

Example 1:

Input: nums = [1,17,8]
Output: 2
Explanation: [1,8,17] and [17,8,1] are the valid permutations.

Example 2:

Input: nums = [2,2,2]
Output: 1


Constraints:

1 <= nums.length <= 12
0 <= nums[i] <= 109


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定整数数组 nums，求满足"每对相邻元素之和是完全平方数"的排列个数。n ≤ 12。

## 解题思路

排序后回溯枚举全排列。用 visited 数组标记已用元素，相同位置跳过重复值（nums[i]==nums[i-1] 且 i-1 未使用则跳过）。每步检查当前元素与前一个元素之和是否为完全平方数。
