# [1546] Maximum Number of Non-Overlapping Subarrays With Sum Equals Target

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target/description/)

* algorithms
* Medium (48.86%)
* Likes:    1117
* Dislikes: 28
* Testcase Example:  '[1,1,1,1,1]\n2'

```md
Given an array nums and an integer target, return the maximum number of non-empty non-overlapping subarrays such that the sum of values in each subarray is equal to target.

Example 1:

Input: nums = [1,1,1,1,1], target = 2
Output: 2
Explanation: There are 2 non-overlapping subarrays [1,1,1,1,1] with sum equals to target(2).

Example 2:

Input: nums = [-1,3,5,1,4,2,-9], target = 6
Output: 2
Explanation: There are 3 subarrays with sum equal to 6.
([5,1], [4,2], [3,5,1,4,2,-9]) but only the first 2 are non-overlapping.


Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
0 <= target <= 106


```

## 题目翻译

给定数组 nums 和整数 target，求最多有多少个不重叠的子数组，每个子数组和等于 target。

## 解题思路

贪心 + 前缀和 + HashMap。从左到右遍历，用 HashMap 记录前缀和。当发现 prefixSum - target 在 map 中且该子数组不与已选的子数组重叠时，立即选取（贪心：尽早选取可为后面留更多空间）。

用一个变量 lastEnd 记录上一个选中子数组的右端点。当找到合法子数组时，更新 lastEnd 并清空 HashMap（因为前面的前缀和不再可用）。

时间复杂度 O(n)

## Solution

[SourceCode](./solution.js)
