# [1800] Maximum Ascending Subarray Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-ascending-subarray-sum/description/)

* algorithms
* Easy (66.29%)
* Likes:    1296
* Dislikes: 43
* Testcase Example:  '[10,20,30,5,10,50]'

```md
Given an array of positive integers nums, return the maximum possible sum of an strictly increasing subarray in nums.
A subarray is defined as a contiguous sequence of numbers in an array.

Example 1:

Input: nums = [10,20,30,5,10,50]
Output: 65
Explanation: [5,10,50] is the ascending subarray with the maximum sum of 65.

Example 2:

Input: nums = [10,20,30,40,50]
Output: 150
Explanation: [10,20,30,40,50] is the ascending subarray with the maximum sum of 150.

Example 3:

Input: nums = [12,17,15,13,10,11,12]
Output: 33
Explanation: [10,11,12] is the ascending subarray with the maximum sum of 33.


Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100


```

## 翻译

给定正整数数组，返回严格递增子数组的最大和。

## Approach

一次遍历。维护当前递增子数组的和 curSum。如果 nums[i] > nums[i-1]，则 curSum += nums[i]；否则重置 curSum = nums[i]。过程中记录最大值。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
