# [992] Subarrays with K Different Integers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/subarrays-with-k-different-integers/description/)

* algorithms
* Hard (67.91%)
* Likes:    6966
* Dislikes: 121
* Testcase Example:  '[1,2,1,2,3]\n2'

```md
Given an integer array nums and an integer k, return the number of good subarrays of nums.
A good array is an array where the number of different integers in that array is exactly k.

For example, [1,2,3,1,2] has 3 different integers: 1, 2, and 3.

A subarray is a contiguous part of an array.

Example 1:

Input: nums = [1,2,1,2,3], k = 2
Output: 7
Explanation: Subarrays formed with exactly 2 different integers: [1,2], [2,1], [1,2], [2,3], [1,2,1], [2,1,2], [1,2,1,2]

Example 2:

Input: nums = [1,2,1,3,4], k = 3
Output: 3
Explanation: Subarrays formed with exactly 3 different integers: [1,2,1,3], [2,1,3], [1,3,4].


Constraints:

1 <= nums.length <= 2 * 104
1 <= nums[i], k <= nums.length


```

## 中文翻译

给定整数数组 nums 和整数 k，求恰好包含 k 个不同整数的子数组个数。

## 解题思路

经典滑动窗口技巧：恰好 K 个 = 至多 K 个 - 至多 K-1 个。用滑动窗口统计"至多 K 个不同整数"的子数组数量，固定右端点时，合法左端点范围为 [left, right]，贡献 right - left + 1。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
