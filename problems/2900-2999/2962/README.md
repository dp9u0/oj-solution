# [2962] Count Subarrays Where Max Element Appears at Least K Times

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/description/)

* algorithms
* Medium (62.39%)
* Likes:    1718
* Dislikes: 82
* Testcase Example:  '[1,3,2,3,3]\n2'

```md
You are given an integer array nums and a positive integer k.
Return the number of subarrays where the maximum element of nums appears at least k times in that subarray.
A subarray is a contiguous sequence of elements within an array.

Example 1:

Input: nums = [1,3,2,3,3], k = 2
Output: 6
Explanation: The subarrays that contain the element 3 at least 2 times are: [1,3,2,3], [1,3,2,3,3], [3,2,3], [3,2,3,3], [2,3,3] and [3,3].

Example 2:

Input: nums = [1,4,2,1], k = 3
Output: 0
Explanation: No subarray contains the element 4 at least 3 times.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 106
1 <= k <= 105


```

## 中文翻译

给定整数数组 nums 和正整数 k，统计子数组中 nums 的最大元素在该子数组中出现至少 k 次的子数组个数。子数组是连续的。

## 解题思路

**收集最大值位置 + 枚举右端点**

1. 找到全局最大值 maxVal，记录所有 maxVal 出现的索引位置 positions
2. 遍历数组，当遇到 maxVal 时计数 count++，若 count >= k，则以当前位置 i 为右端点的合法子数组个数为 positions[count - k] + 1（左端点可以从 0 到 positions[count-k]）
3. 累加所有贡献

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
