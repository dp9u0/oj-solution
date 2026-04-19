# [2447] Number of Subarrays With GCD Equal to K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-subarrays-with-gcd-equal-to-k/description/)

* algorithms
* Medium (52.46%)
* Likes:    469
* Dislikes: 71
* Testcase Example:  '[9,3,1,2,6,3]\n3'

```md
Given an integer array nums and an integer k, return the number of subarrays of nums where the greatest common divisor of the subarray&#39;s elements is k.
A subarray is a contiguous non-empty sequence of elements within an array.
The greatest common divisor of an array is the largest integer that evenly divides all the array elements.

Example 1:

Input: nums = [9,3,1,2,6,3], k = 3
Output: 4
Explanation: The subarrays of nums where 3 is the greatest common divisor of all the subarray&#39;s elements are:
- [9,3,1,2,6,3]
- [9,3,1,2,6,3]
- [9,3,1,2,6,3]
- [9,3,1,2,6,3]

Example 2:

Input: nums = [4], k = 7
Output: 0
Explanation: There are no subarrays of nums where 7 is the greatest common divisor of all the subarray&#39;s elements.


Constraints:

1 <= nums.length <= 1000
1 <= nums[i], k <= 109


```

## 中文翻译

给定整数数组 nums 和整数 k，求 GCD 恰好等于 k 的子数组个数。

## 解题思路

以每个下标 i 为右端点，维护从 i 往左延伸的所有 GCD 值。由于 GCD 单调不增，不同值最多 O(log max) 个。用 Map 统计每种 GCD 的出现次数，每次加入新元素后更新。

## Solution

[SourceCode](./solution.js)
