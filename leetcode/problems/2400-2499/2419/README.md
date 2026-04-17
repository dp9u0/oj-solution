# [2419] Longest Subarray With Maximum Bitwise AND

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and/description/)

* algorithms
* Medium (65.37%)
* Likes:    1319
* Dislikes: 110
* Testcase Example:  '[1,2,3,3,2,2]'

```md
You are given an integer array nums of size n.
Consider a non-empty subarray from nums that has the maximum possible bitwise AND.

In other words, let k be the maximum value of the bitwise AND of any subarray of nums. Then, only subarrays with a bitwise AND equal to k should be considered.

Return the length of the longest such subarray.
The bitwise AND of an array is the bitwise AND of all the numbers in it.
A subarray is a contiguous sequence of elements within an array.

Example 1:

Input: nums = [1,2,3,3,2,2]
Output: 2
Explanation:
The maximum possible bitwise AND of a subarray is 3.
The longest subarray with that value is [3,3], so we return 2.

Example 2:

Input: nums = [1,2,3,4]
Output: 1
Explanation:
The maximum possible bitwise AND of a subarray is 4.
The longest subarray with that value is [4], so we return 1.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 106


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定整数数组 nums，找到按位与值最大的子数组中最长的一个的长度。

## 解题思路

关键性质：子数组的按位与 ≤ 数组中的最大元素，而单个最大元素自身的 AND 就等于它自己。因此最大 AND 值就是数组最大值。要使子数组 AND 等于最大值，子数组中每个元素都必须等于最大值。所以答案就是数组中最大值的最长连续出现长度。
