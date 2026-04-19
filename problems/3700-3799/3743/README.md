# [3743] Maximize Cyclic Partition Score

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-cyclic-partition-score/description/)

* algorithms
* Hard (12.92%)
* Likes:    52
* Dislikes: 7
* Testcase Example:  '[1,3,4]\n2'

```md
You are given a cyclic array nums and an integer k.
Partition nums into at most k subarrays. As nums is cyclic, these subarrays may wrap around from the end of the array back to the beginning.
The range of a subarray is the difference between its maximum and minimum values. The score of a partition is the sum of subarray ranges.
Return the maximum possible score among all cyclic partitions.

Example 1:

Input: nums = [1,2,3,3], k = 2
Output: 3
Explanation:

Partition nums into [2, 3] and [3, 1] (wrapped around).
The range of [2, 3] is max(2, 3) - min(2, 3) = 3 - 2 = 1.
The range of [3, 1] is max(3, 1) - min(3, 1) = 3 - 1 = 2.
The score is 1 + 2 = 3.


Example 2:

Input: nums = [1,2,3,3], k = 1
Output: 2
Explanation:

Partition nums into [1, 2, 3, 3].
The range of [1, 2, 3, 3] is max(1, 2, 3, 3) - min(1, 2, 3, 3) = 3 - 1 = 2.
The score is 2.


Example 3:

Input: nums = [1,2,3,3], k = 4
Output: 3
Explanation:
Identical to Example 1, we partition nums into [2, 3] and [3, 1]. Note that nums may be partitioned into fewer than k subarrays.


Constraints:

1 <= nums.length <= 1000
1 <= nums[i] <= 109
1 <= k <= nums.length


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定循环数组 nums 和整数 k，将数组分成至多 k 个循环子数组。每个子数组的得分 = max - min。求最大总得分。

## 解题思路

最优分割一定把全局最小值放在分割边界上。因此只需尝试两种旋转起点：全局最小值位置 i 和 i+1。对每种旋转，转化为线性数组的分割问题，等价于至多 k 次股票交易。用 DP：`dp[j]` 表示前 j 个元素用若干次交易的最大得分，用 `x = max(dp[j] - nums[j])` 和 `y = max(dp[j] + nums[j])` 优化到 O(nk)。
