# [1755] Closest Subsequence Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/closest-subsequence-sum/description/)

* algorithms
* Hard (43.48%)
* Likes:    1012
* Dislikes: 74
* Testcase Example:  '[5,-7,3,5]\n6'

```md
You are given an integer array nums and an integer goal.
You want to choose a subsequence of nums such that the sum of its elements is the closest possible to goal. That is, if the sum of the subsequence&#39;s elements is sum, then you want to minimize the absolute difference abs(sum - goal).
Return the minimum possible value of abs(sum - goal).
Note that a subsequence of an array is an array formed by removing some elements (possibly all or none) of the original array.

Example 1:

Input: nums = [5,-7,3,5], goal = 6
Output: 0
Explanation: Choose the whole array as a subsequence, with a sum of 6.
This is equal to the goal, so the absolute difference is 0.

Example 2:

Input: nums = [7,-9,15,-2], goal = -5
Output: 1
Explanation: Choose the subsequence [7,-9,-2], with a sum of -4.
The absolute difference is abs(-4 - (-5)) = abs(1) = 1, which is the minimum.

Example 3:

Input: nums = [1,2,3], goal = -7
Output: 7


Constraints:

1 <= nums.length <= 40
-107 <= nums[i] <= 107
-109 <= goal <= 109


```

## 题目翻译

给定数组 nums 和目标 goal，选一个子序列使其和尽可能接近 goal。返回最小的 |sum - goal|。

## 解题思路

**Meet in the Middle**

n ≤ 40 太大无法暴力。将数组分成两半，分别枚举所有子集和（各 2^20 ≈ 10^6）。排序右半部分的和，对左半每个子集和 s，在右半二分查找最接近 goal-s 的值。

O(2^(n/2) * n) 时间。

## Solution

[SourceCode](./solution.js)
