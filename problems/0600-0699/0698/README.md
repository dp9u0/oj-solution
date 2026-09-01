# [698] Partition to K Equal Sum Subsets

## Description

[LeetCode Problem Description](https://leetcode.com/problems/partition-to-k-equal-sum-subsets/description/)

* algorithms
* Medium (38.53%)
* Likes:    7557
* Dislikes: 556
* Testcase Example:  '[4,3,2,3,5,2,1]\n4'

```md
Given an integer array nums and an integer k, return true if it is possible to divide this array into k non-empty subsets whose sums are all equal.

Example 1:

Input: nums = [4,3,2,3,5,2,1], k = 4
Output: true
Explanation: It is possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.

Example 2:

Input: nums = [1,2,3,4], k = 3
Output: false


Constraints:

1 <= k <= nums.length <= 16
1 <= nums[i] <= 104
The frequency of each element is in the range [1, 4].


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 nums 和整数 k，判断是否能将数组分成 k 个非空子集，每个子集的和相等。

## 解题思路

**状态压缩 DP**

用 bitmask 表示哪些元素已被使用。target = sum / k，如果 sum 不能被 k 整除则返回 false。

dp[mask] 表示在已使用 mask 中元素的情况下，当前子集已填的和为 dp[mask]（对 target 取模）。如果 dp[mask] == 0 说明当前子集填满，可以开始填下一个子集。

转移：对每个未使用的元素 i，如果 dp[mask] + nums[i] <= target，则可以放入当前子集。

关键优化：按降序排序，优先放大的元素，减少搜索空间。

时间复杂度 O(n * 2^n)，空间复杂度 O(2^n)。
