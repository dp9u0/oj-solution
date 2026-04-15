# [3105] Longest Strictly Increasing or Strictly Decreasing Subarray

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray/description/)

* algorithms
* Easy (64.92%)
* Likes:    665
* Dislikes: 34
* Testcase Example:  '[1,4,3,3,2]'

```md
You are given an array of integers nums. Return the length of the longest subarray of nums which is either strictly increasing or strictly decreasing.

Example 1:

Input: nums = [1,4,3,3,2]
Output: 2
Explanation:
The strictly increasing subarrays of nums are [1], [2], [3], [3], [4], and [1,4].
The strictly decreasing subarrays of nums are [1], [2], [3], [3], [4], [3,2], and [4,3].
Hence, we return 2.

Example 2:

Input: nums = [3,3,3,3]
Output: 1
Explanation:
The strictly increasing subarrays of nums are [3], [3], [3], and [3].
The strictly decreasing subarrays of nums are [3], [3], [3], and [3].
Hence, we return 1.

Example 3:

Input: nums = [3,2,1]
Output: 3
Explanation:
The strictly increasing subarrays of nums are [3], [2], and [1].
The strictly decreasing subarrays of nums are [3], [2], [1], [3,2], [2,1], and [3,2,1].
Hence, we return 3.


Constraints:

1 <= nums.length <= 50
1 <= nums[i] <= 50


```

## 中文翻译

给定整数数组 nums，返回最长严格递增或严格递减子数组的长度。

## 解题思路

**一次遍历**

维护 incLen（当前递增长度）和 decLen（当前递减长度），遍历比较相邻元素：
- nums[i] > nums[i-1]：incLen++, decLen = 1
- nums[i] < nums[i-1]：decLen++, incLen = 1
- 相等：incLen = decLen = 1

取 max(incLen, decLen) 的最大值。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
