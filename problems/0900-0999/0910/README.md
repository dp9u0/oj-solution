# [910] Smallest Range II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-range-ii/description/)

* algorithms
* Medium (37.83%)
* Likes:    1715
* Dislikes: 468
* Testcase Example:  '[1]\n0'

```md
You are given an integer array nums and an integer k.
For each index i where 0 <= i < nums.length, change nums[i] to be either nums[i] + k or nums[i] - k.
The score of nums is the difference between the maximum and minimum elements in nums.
Return the minimum score of nums after changing the values at each index.

Example 1:

Input: nums = [1], k = 0
Output: 0
Explanation: The score is max(nums) - min(nums) = 1 - 1 = 0.

Example 2:

Input: nums = [0,10], k = 2
Output: 6
Explanation: Change nums to be [2, 8]. The score is max(nums) - min(nums) = 8 - 2 = 6.

Example 3:

Input: nums = [1,3,6], k = 3
Output: 3
Explanation: Change nums to be [4, 6, 3]. The score is max(nums) - min(nums) = 6 - 3 = 3.


Constraints:

1 <= nums.length <= 104
0 <= nums[i] <= 104
0 <= k <= 104


```

## 题目翻译

给定整数数组 nums 和整数 k，每个元素可以 +k 或 -k。求变换后数组最大值与最小值之差的最小值。

## 解题思路

排序后，最优方案一定存在一个分界点 i，左边都 +k，右边都 -k。枚举所有分界点 i，新数组的 max = max(nums[i]+k, nums[n-1]-k)，min = min(nums[0]+k, nums[i+1]-k)，取最小的 max-min。

## Solution

[SourceCode](./solution.js)
