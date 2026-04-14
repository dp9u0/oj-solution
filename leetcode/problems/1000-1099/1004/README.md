# [1004] Max Consecutive Ones III

## Description

[LeetCode Problem Description](https://leetcode.com/problems/max-consecutive-ones-iii/description/)

* algorithms
* Medium (64.73%)
* Likes:    8990
* Dislikes: 152
* Testcase Example:  '[1,1,1,0,0,0,1,1,1,1,0]\n2'

```md
Given a binary array nums and an integer k, return the maximum number of consecutive 1&#39;s in the array if you can flip at most k 0&#39;s.

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.


Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length


```

## 题目翻译

给定 01 数组 nums 和整数 k，最多翻转 k 个 0 为 1，求最长的连续 1 的子数组长度。

## 解题思路

滑动窗口：维护窗口内 0 的个数不超过 k。右指针扩展，若 0 超过 k 则左指针收缩。过程中记录最大窗口长度。

## Solution

[SourceCode](./solution.js)
