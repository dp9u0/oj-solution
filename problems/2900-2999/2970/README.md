# [2970] Count the Number of Incremovable Subarrays I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i/description/)

* algorithms
* Easy (56.36%)
* Likes:    202
* Dislikes: 127
* Testcase Example:  '[1,2,3,4]'

```md
You are given a 0-indexed array of positive integers nums.
A subarray of nums is called incremovable if nums becomes strictly increasing on removing the subarray. For example, the subarray [3, 4] is an incremovable subarray of [5, 3, 4, 6, 7] because removing this subarray changes the array [5, 3, 4, 6, 7] to [5, 6, 7] which is strictly increasing.
Return the total number of incremovable subarrays of nums.
Note that an empty array is considered strictly increasing.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,2,3,4]
Output: 10
Explanation: The 10 incremovable subarrays are: [1], [2], [3], [4], [1,2], [2,3], [3,4], [1,2,3], [2,3,4], and [1,2,3,4], because on removing any one of these subarrays nums becomes strictly increasing. Note that you cannot select an empty subarray.

Example 2:

Input: nums = [6,5,7,8]
Output: 7
Explanation: The 7 incremovable subarrays are: [5], [6], [5,7], [6,5], [5,7,8], [6,5,7] and [6,5,7,8].
It can be shown that there are only 7 incremovable subarrays in nums.

Example 3:

Input: nums = [8,7,6,6]
Output: 3
Explanation: The 3 incremovable subarrays are: [8,7,6], [7,6,6], and [8,7,6,6]. Note that [8,7] is not an incremovable subarray because after removing [8,7] nums becomes [6,6], which is sorted in ascending order but not strictly increasing.


Constraints:

1 <= nums.length <= 50
1 <= nums[i] <= 50


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定正整数数组 nums。一个子数组如果移除后数组变成严格递增的，则称为"可移除子数组"。返回可移除子数组的总数。空数组视为严格递增。子数组是连续非空序列。

## 解题思路

n ≤ 50，直接暴力枚举所有子数组 [i, j]，检查移除后剩余数组是否严格递增。

剩余数组由 nums[0..i-1] 和 nums[j+1..n-1] 拼接而成，需要三部分检查：
1. 左半部分严格递增
2. 右半部分严格递增
3. 两部分都非空时，左半最后一个元素 < 右半第一个元素

时间复杂度 O(n^3)。
