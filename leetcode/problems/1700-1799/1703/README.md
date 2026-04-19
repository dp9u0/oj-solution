# [1703] Minimum Adjacent Swaps for K Consecutive Ones

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones/description/)

* algorithms
* Hard (42.20%)
* Likes:    744
* Dislikes: 29
* Testcase Example:  '[1,0,0,1,0,1]\n2'

```md
You are given an integer array, nums, and an integer k. nums comprises of only 0&#39;s and 1&#39;s. In one move, you can choose two adjacent indices and swap their values.
Return the minimum number of moves required so that nums has k consecutive 1&#39;s.

Example 1:

Input: nums = [1,0,0,1,0,1], k = 2
Output: 1
Explanation: In 1 move, nums could be [1,0,0,0,1,1] and have 2 consecutive 1&#39;s.

Example 2:

Input: nums = [1,0,0,0,0,0,1,1], k = 3
Output: 5
Explanation: In 5 moves, the leftmost 1 can be shifted right until nums = [0,0,0,0,0,1,1,1].

Example 3:

Input: nums = [1,1,0,1], k = 2
Output: 0
Explanation: nums already has 2 consecutive 1&#39;s.


Constraints:

1 <= nums.length <= 105
nums[i] is 0 or 1.
1 <= k <= sum(nums)


```

## 翻译

给定 0-1 数组，求最少相邻交换次数使数组中出现 k 个连续的 1。

## 解题思路

提取所有 1 的位置 pos[]，对每个长度为 k 的窗口，将其中心化到连续位置。令 q[i]=pos[i]-i，问题转为求窗口内 q 的"到中位数距离之和"。用前缀和 O(1) 算每个窗口代价，滑窗取最小。总体 O(n)。

## Solution

[SourceCode](./solution.js)
