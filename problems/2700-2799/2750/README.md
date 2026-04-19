# [2750] Ways to Split Array Into Good Subarrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/ways-to-split-array-into-good-subarrays/description/)

* algorithms
* Medium (34.96%)
* Likes:    474
* Dislikes: 14
* Testcase Example:  '[0,1,0,0,1]'

```md
You are given a binary array nums.
A subarray of an array is good if it contains exactly one element with the value 1.
Return an integer denoting the number of ways to split the array nums into good subarrays. As the number may be too large, return it modulo 109 + 7.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [0,1,0,0,1]
Output: 3
Explanation: There are 3 ways to split nums into good subarrays:
- [0,1] [0,0,1]
- [0,1,0] [0,1]
- [0,1,0,0] [1]

Example 2:

Input: nums = [0,1,0]
Output: 1
Explanation: There is 1 way to split nums into good subarrays:
- [0,1,0]


Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 1


```

## 翻译

给定一个二进制数组nums，求将其分割成若干"好子数组"的方法数。好子数组指恰好包含一个1的连续子数组。结果对10^9+7取模。

## 解题思路

找到所有1的位置。相邻两个1之间的分割点有 gap 种选择（gap = 位置差）。总方法数为所有相邻1之间间隔的乘积。若没有1返回0，只有一个1返回1。

## Solution

[SourceCode](./solution.js)
