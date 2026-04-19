# [1827] Minimum Operations to Make the Array Increasing

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-make-the-array-increasing/description/)

* algorithms
* Easy (81.94%)
* Likes:    1319
* Dislikes: 68
* Testcase Example:  '[1,1,1]'

```md
You are given an integer array nums (0-indexed). In one operation, you can choose an element of the array and increment it by 1.

For example, if nums = [1,2,3], you can choose to increment nums[1] to make nums = [1,3,3].

Return the minimum number of operations needed to make nums strictly increasing.
An array nums is strictly increasing if nums[i] < nums[i+1] for all 0 <= i < nums.length - 1. An array of length 1 is trivially strictly increasing.

Example 1:

Input: nums = [1,1,1]
Output: 3
Explanation: You can do the following operations:
1) Increment nums[2], so nums becomes [1,1,2].
2) Increment nums[1], so nums becomes [1,2,2].
3) Increment nums[2], so nums becomes [1,2,3].

Example 2:

Input: nums = [1,5,2,4,1]
Output: 14

Example 3:

Input: nums = [8]
Output: 0


Constraints:

1 <= nums.length <= 5000
1 <= nums[i] <= 104


```

## 中文翻译

给你一个整数数组 `nums`。每次操作可以选择一个元素并将其加 1。

返回使数组严格递增所需的最少操作次数。

严格递增：对所有 `i`，`nums[i] < nums[i+1]`。

## 解题思路

**贪心**：从左到右遍历，如果当前元素 ≤ 前一个元素，则需要将其增加到 `prev + 1`，累加操作次数。

时间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
