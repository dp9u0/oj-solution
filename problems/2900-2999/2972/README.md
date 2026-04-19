# [2972] Count the Number of Incremovable Subarrays II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-ii/description/)

* algorithms
* Hard (40.15%)
* Likes:    245
* Dislikes: 20
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

1 <= nums.length <= 105
1 <= nums[i] <= 109


```

## 翻译

给定正整数数组 nums。一个子数组是"incremovable"的当且仅当删除它后剩余部分严格递增（空数组也算）。求 incremovable 子数组总数。

## 解题思路

找最长严格递增前缀 [0..endPre] 和后缀 [startSuf..n-1]。枚举子数组左端 l（0 到 endPre+1），用双指针维护右端 r 的最小值。需满足：前缀严格递增、后缀严格递增、且桥接条件 nums[l-1] < nums[r+1]。时间 O(n)。

## Solution

[SourceCode](./solution.js)
