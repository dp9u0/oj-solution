# [3755] Find Maximum Balanced XOR Subarray Length

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-maximum-balanced-xor-subarray-length/description/)

* algorithms
* Medium (50.82%)
* Likes:    109
* Dislikes: 6
* Testcase Example:  '[3,1,3,2,0]'

```md
Given an integer array nums, return the length of the longest subarray that has a bitwise XOR of zero and contains an equal number of even and odd numbers. If no such subarray exists, return 0.

Example 1:

Input: nums = [3,1,3,2,0]
Output: 4
Explanation:
The subarray [1, 3, 2, 0] has bitwise XOR 1 XOR 3 XOR 2 XOR 0 = 0 and contains 2 even and 2 odd numbers.

Example 2:

Input: nums = [3,2,8,5,4,14,9,15]
Output: 8
Explanation:
The whole array has bitwise XOR 0 and contains 4 even and 4 odd numbers.

Example 3:

Input: nums = [0]
Output: 0
Explanation:
No non-empty subarray satisfies both conditions.


Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 109


```

## 中文翻译

给定整数数组 nums，返回最长子数组的长度，要求该子数组的异或为0，且包含相等数量的奇数和偶数。不存在返回0。

## 解题思路

前缀异或+前缀奇偶差。令 xorPref[i] 为前i个元素的异或，oddPref[i] 为前i个元素中奇数个数减偶数个数的差。子数组 [j+1, i] 满足条件 <=> xorPref[i]==xorPref[j] 且 oddPref[i]==oddPref[j]。用 Map 以 (xorPref, oddPref) 为 key 记录最早出现位置。

## Solution

[SourceCode](./solution.js)
