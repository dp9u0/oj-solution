# [2587] Rearrange Array to Maximize Prefix Score

## Description

[LeetCode Problem Description](https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score/description/)

* algorithms
* Medium (42.66%)
* Likes:    310
* Dislikes: 53
* Testcase Example:  '[2,-1,0,1,-3,3,-3]'

```md
You are given a 0-indexed integer array nums. You can rearrange the elements of nums to any order (including the given order).
Let prefix be the array containing the prefix sums of nums after rearranging it. In other words, prefix[i] is the sum of the elements from 0 to i in nums after rearranging it. The score of nums is the number of positive integers in the array prefix.
Return the maximum score you can achieve.

Example 1:

Input: nums = [2,-1,0,1,-3,3,-3]
Output: 6
Explanation: We can rearrange the array into nums = [2,3,1,-1,-3,0,-3].
prefix = [2,5,6,5,2,2,-1], so the score is 6.
It can be shown that 6 is the maximum score we can obtain.

Example 2:

Input: nums = [-2,-3,0]
Output: 0
Explanation: Any rearrangement of the array will result in a score of 0.


Constraints:

1 <= nums.length <= 105
-106 <= nums[i] <= 106


```

## 中文翻译

给定整数数组 nums，可以任意重排。重排后计算前缀和数组，score 为前缀和数组中正整数的个数。返回最大 score。

## 解题思路

**贪心 - 降序排列：**

1. 从大到小排序，让正数先累加，前缀和尽可能长时间保持为正
2. 计算前缀和，统计正数个数

时间复杂度：O(n log n)

## Solution

[SourceCode](./solution.js)
