# [689] Maximum Sum of 3 Non-Overlapping Subarrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/description/)

* algorithms
* Hard (59.75%)
* Likes:    2621
* Dislikes: 159
* Testcase Example:  '[1,2,1,2,6,7,5,1]\n2'

```md
Given an integer array nums and an integer k, find three non-overlapping subarrays of length k with maximum sum and return them.
Return the result as a list of indices representing the starting position of each interval (0-indexed). If there are multiple answers, return the lexicographically smallest one.

Example 1:

Input: nums = [1,2,1,2,6,7,5,1], k = 2
Output: [0,3,5]
Explanation: Subarrays [1, 2], [2, 6], [7, 5] correspond to the starting indices [0, 3, 5].
We could have also taken [2, 1], but an answer of [1, 3, 5] would be lexicographically larger.

Example 2:

Input: nums = [1,2,1,2,1,2,1,2,1], k = 2
Output: [0,2,4]


Constraints:

1 <= nums.length <= 2 * 104
1 <= nums[i] <216
1 <= k <= floor(nums.length / 3)


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定整数数组 nums 和整数 k，找到三个长度为 k 的不重叠子数组，使它们的和最大。返回三个子数组的起始下标（0-indexed），如果有多个答案返回字典序最小的。

## 解题思路

预计算所有长度为 k 的子数组和 sums[i]。然后预计算 left[i] 表示 [0..i] 范围内 sums 的最大值对应的最左下标，right[i] 表示 [i..n-k] 范围内 sums 的最大值对应的最左下标。枚举中间子数组的起点 j，则答案为 sums[left[j-k]] + sums[j] + sums[right[j+k]]，取最大值。
