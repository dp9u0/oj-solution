# [3349] Adjacent Increasing Subarrays Detection I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/adjacent-increasing-subarrays-detection-i/description/)

* algorithms
* Easy (47.98%)
* Likes:    486
* Dislikes: 59
* Testcase Example:  '[2,5,7,8,9,2,3,4,3,1]\n3'

```md
Given an array nums of n integers and an integer k, determine whether there exist two adjacent subarrays of length k such that both subarrays are strictly increasing. Specifically, check if there are two subarrays starting at indices a and b (a < b), where:

Both subarrays nums[a..a + k - 1] and nums[b..b + k - 1] are strictly increasing.
The subarrays must be adjacent, meaning b = a + k.

Return true if it is possible to find two such subarrays, and false otherwise.

Example 1:

Input: nums = [2,5,7,8,9,2,3,4,3,1], k = 3
Output: true
Explanation:

The subarray starting at index 2 is [7, 8, 9], which is strictly increasing.
The subarray starting at index 5 is [2, 3, 4], which is also strictly increasing.
These two subarrays are adjacent, so the result is true.


Example 2:

Input: nums = [1,2,3,4,4,4,4,5,6,7], k = 5
Output: false


Constraints:

2 <= nums.length <= 100
1 < 2 * k <= nums.length
-1000 <= nums[i] <= 1000


```

## 翻译

给定数组nums和整数k，判断是否存在两个相邻（第二个起点=第一个起点+k）的长度为k的严格递增子数组。

## 解题思路

预处理每个位置开始的最长严格递增长度inc[i]，然后检查是否存在i使得inc[i]>=k且inc[i+k]>=k。

## Solution

[SourceCode](./solution.js)
