# [525] Contiguous Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/contiguous-array/description/)

* algorithms
* Medium (51.09%)
* Likes:    8824
* Dislikes: 448
* Testcase Example:  '[0,1]'

```md
Given a binary array nums, return the maximum length of a contiguous subarray with an equal number of 0 and 1.

Example 1:

Input: nums = [0,1]
Output: 2
Explanation: [0, 1] is the longest contiguous subarray with an equal number of 0 and 1.

Example 2:

Input: nums = [0,1,0]
Output: 2
Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.

Example 3:

Input: nums = [0,1,1,1,1,1,0,0,0]
Output: 6
Explanation: [1,1,1,0,0,0] is the longest contiguous subarray with equal number of 0 and 1.


Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.


```

## 翻译

给定二进制数组 `nums`，返回含有相同数量 0 和 1 的最长连续子数组长度。

## Approach

**前缀和 + 哈希表。** 将 0 视为 -1，1 视为 +1。问题转化为找前缀和相同的最远两个位置（前缀和相同说明中间的子数组 0 和 1 数量相等）。

用 Map 记录每个前缀和值首次出现的位置。前缀和为 0 时，从开头到当前位置都是合法的。初始化 `map.set(0, -1)`。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
