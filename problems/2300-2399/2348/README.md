# [2348] Number of Zero-Filled Subarrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-zero-filled-subarrays/description/)

* algorithms
* Medium (70.09%)
* Likes:    2792
* Dislikes: 95
* Testcase Example:  '[1,3,0,0,2,0,0,4]'

```md
Given an integer array nums, return the number of subarrays filled with 0.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,3,0,0,2,0,0,4]
Output: 6
Explanation:
There are 4 occurrences of [0] as a subarray.
There are 2 occurrences of [0,0] as a subarray.
There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6.
Example 2:

Input: nums = [0,0,0,2,0,0]
Output: 9
Explanation:
There are 5 occurrences of [0] as a subarray.
There are 3 occurrences of [0,0] as a subarray.
There is 1 occurrence of [0,0,0] as a subarray.
There is no occurrence of a subarray with a size more than 3 filled with 0. Therefore, we return 9.

Example 3:

Input: nums = [2,10,2019]
Output: 0
Explanation: There is no subarray filled with 0. Therefore, we return 0.


Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 nums，返回全为 0 的子数组数量。

## 解题思路

**连续零计数**

遍历数组，统计连续 0 的长度 len。每遇到一个 0，以该位置结尾的全零子数组有 len 个（长度为 1, 2, ..., len 的各一个）。非零元素时 len 重置为 0。

答案 = sum(每个连续 0 段的 len * (len + 1) / 2)，或等价地逐个累加。

时间复杂度 O(n)，空间复杂度 O(1)。
