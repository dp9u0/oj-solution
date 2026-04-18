# [2407] Longest Increasing Subsequence II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-increasing-subsequence-ii/description/)

* algorithms
* Hard (26.18%)
* Likes:    959
* Dislikes: 41
* Testcase Example:  '[4,2,1,4,3,4,5,8,15]\n3'

```md
You are given an integer array nums and an integer k.
Find the longest subsequence of nums that meets the following requirements:

The subsequence is strictly increasing and
The difference between adjacent elements in the subsequence is at most k.

Return the length of the longest subsequence that meets the requirements.
A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

Example 1:

Input: nums = [4,2,1,4,3,4,5,8,15], k = 3
Output: 5
Explanation:
The longest subsequence that meets the requirements is [1,3,4,5,8].
The subsequence has a length of 5, so we return 5.
Note that the subsequence [1,3,4,5,8,15] does not meet the requirements because 15 - 8 = 7 is larger than 3.

Example 2:

Input: nums = [7,4,5,1,8,12,4,7], k = 5
Output: 4
Explanation:
The longest subsequence that meets the requirements is [4,5,8,12].
The subsequence has a length of 4, so we return 4.

Example 3:

Input: nums = [1,5], k = 1
Output: 1
Explanation:
The longest subsequence that meets the requirements is [1].
The subsequence has a length of 1, so we return 1.


Constraints:

1 <= nums.length <= 105
1 <= nums[i], k <= 105


```

## 中文翻译

给定数组 nums 和整数 k，找最长严格递增子序列，且相邻元素差不超过 k。

约束：n <= 10^5, nums[i], k <= 10^5

## 解题思路

**线段树优化 DP**

1. dp[v] = 以值 v 结尾的最长子序列长度。
2. 对每个 nums[i]，dp[nums[i]] = max(dp[nums[i]-k..nums[i]-1]) + 1。
3. 直接枚举是 O(nk)，用线段树查询区间最大值，O(n log V)。
4. 值域 [1, maxV]，线段树维护区间 max。

## Solution

[SourceCode](./solution.js)
