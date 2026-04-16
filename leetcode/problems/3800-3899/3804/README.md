# [3804] Number of Centered Subarrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-centered-subarrays/description/)

* algorithms
* Medium (67.07%)
* Likes:    75
* Dislikes: 1
* Testcase Example:  '[-1,1,0]'

```md
You are given an integer array nums.
A subarray of nums is called centered if the sum of its elements is equal to at least one element within that same subarray.
Return the number of centered subarrays of nums.

Example 1:

Input: nums = [-1,1,0]
Output: 5
Explanation:

All single-element subarrays ([-1], [1], [0]) are centered.
The subarray [1, 0] has a sum of 1, which is present in the subarray.
The subarray [-1, 1, 0] has a sum of 0, which is present in the subarray.
Thus, the answer is 5.


Example 2:

Input: nums = [2,-3]
Output: 2
Explanation:
Only single-element subarrays ([2], [-3]) are centered.


Constraints:

1 <= nums.length <= 500
-105 <= nums[i] <= 105


```

## 中文翻译

给定整数数组 nums，一个子数组称为 centered 如果其元素和等于该子数组中至少一个元素。返回 centered 子数组的数量。

## 解题思路

n≤500，可用 O(n²)。对每个起始位置 i，逐步扩展 j，维护前缀和和元素集合，每次检查 sum 是否在集合中。

## Solution

[SourceCode](./solution.js)
