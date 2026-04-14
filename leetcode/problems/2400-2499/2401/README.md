# [2401] Longest Nice Subarray

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-nice-subarray/description/)

* algorithms
* Medium (64.80%)
* Likes:    2095
* Dislikes: 62
* Testcase Example:  '[1,3,8,48,10]'

```md
You are given an array nums consisting of positive integers.
We call a subarray of nums nice if the bitwise AND of every pair of elements that are in different positions in the subarray is equal to 0.
Return the length of the longest nice subarray.
A subarray is a contiguous part of an array.
Note that subarrays of length 1 are always considered nice.

Example 1:

Input: nums = [1,3,8,48,10]
Output: 3
Explanation: The longest nice subarray is [3,8,48]. This subarray satisfies the conditions:
- 3 AND 8 = 0.
- 3 AND 48 = 0.
- 8 AND 48 = 0.
It can be proven that no longer nice subarray can be obtained, so we return 3.
Example 2:

Input: nums = [3,1,5,11,13]
Output: 1
Explanation: The length of the longest nice subarray is 1. Any subarray of length 1 can be chosen.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109


```

## 翻译

给定正整数数组 nums。"nice" 子数组中每对不同位置的元素按位 AND 为 0。返回最长 nice 子数组的长度。

## Approach

滑动窗口 + 位掩码。维护窗口内所有元素的 OR 值 mask。加入新元素时，如果 mask & nums[right] != 0，说明有公共位，需要收缩左边界直到兼容。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
