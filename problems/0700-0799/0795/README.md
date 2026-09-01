# [795] Number of Subarrays with Bounded Maximum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/description/)

* algorithms
* Medium (54.86%)
* Likes:    2456
* Dislikes: 136
* Testcase Example:  '[2,1,4,3]\n2\n3'

```md
Given an integer array nums and two integers left and right, return the number of contiguous non-empty subarrays such that the value of the maximum array element in that subarray is in the range [left, right].
The test cases are generated so that the answer will fit in a 32-bit integer.

Example 1:

Input: nums = [2,1,4,3], left = 2, right = 3
Output: 3
Explanation: There are three subarrays that meet the requirements: [2], [2, 1], [3].

Example 2:

Input: nums = [2,9,2,5,6], left = 2, right = 8
Output: 7


Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 109
0 <= left <= right <= 109


```

## 题目翻译

给定整数数组 nums 和两个整数 left, right，返回最大值在 [left, right] 范围内的连续非空子数组个数。

## 解题思路

转化为：count(max <= right) - count(max <= left-1)。对 count(max <= k)，遍历数组，每当遇到 nums[i] > k 时重置，否则累加当前段长度。一次遍历 O(n)。

## Solution

[SourceCode](./solution.js)
