# [413] Arithmetic Slices

## Description

[LeetCode Problem Description](https://leetcode.com/problems/arithmetic-slices/description/)

* algorithms
* Medium (64.83%)
* Likes:    5635
* Dislikes: 306
* Testcase Example:  '[1,2,3,4]'

```md
An integer array is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

For example, [1,3,5,7,9], [7,7,7,7], and [3,-1,-5,-9] are arithmetic sequences.

Given an integer array nums, return the number of arithmetic subarrays of nums.
A subarray is a contiguous subsequence of the array.

Example 1:

Input: nums = [1,2,3,4]
Output: 3
Explanation: We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself.

Example 2:

Input: nums = [1]
Output: 0


Constraints:

1 <= nums.length <= 5000
-1000 <= nums[i] <= 1000


```

## 题目翻译

如果一个整数数组至少由三个元素组成，并且任意两个连续元素之间的差值相同，则称该数组为等差数列。

例如，[1,3,5,7,9]、[7,7,7,7] 和 [3,-1,-5,-9] 都是等差数列。

给定一个整数数组 `nums`，返回 `nums` 中等差子数组的个数。
子数组是数组的连续子序列。

**示例 1：**
输入：nums = [1,2,3,4]
输出：3
解释：有 3 个等差子数组：[1,2,3]、[2,3,4] 和 [1,2,3,4]。

**示例 2：**
输入：nums = [1]
输出：0

**约束：**
- 1 <= nums.length <= 5000
- -1000 <= nums[i] <= 1000

## 解题思路 (Approach)

使用动态规划。定义 dp[i] 为以 nums[i] 结尾的等差子数组个数。如果 nums[i] - nums[i-1] == nums[i-1] - nums[i-2]，则 dp[i] = dp[i-1] + 1（在之前所有等差子数组基础上各延伸一个元素，再加上新的三元组）。最终答案为所有 dp[i] 之和。

时间复杂度：O(n)，空间复杂度：O(1)（只需保存前一个 dp 值）。

## Solution

[SourceCode](./solution.js)
