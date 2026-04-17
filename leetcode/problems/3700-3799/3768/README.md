# [3768] Minimum Inversion Count in Subarrays of Fixed Length

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-inversion-count-in-subarrays-of-fixed-length/description/)

* algorithms
* Hard (42.66%)
* Likes:    49
* Dislikes: 4
* Testcase Example:  '[3,1,2,5,4]\n3'

```md
You are given an integer array nums of length n and an integer k.
An inversion is a pair of indices (i, j) from nums such that i < j and nums[i] > nums[j].
The inversion count of a subarray is the number of inversions within it.
Return the minimum inversion count among all subarrays of nums with length k.

Example 1:

Input: nums = [3,1,2,5,4], k = 3
Output: 0
Explanation:
We consider all subarrays of length k = 3 (indices below are relative to each subarray):

[3, 1, 2] has 2 inversions: (0, 1) and (0, 2).
[1, 2, 5] has 0 inversions.
[2, 5, 4] has 1 inversion: (1, 2).

The minimum inversion count among all subarrays of length 3 is 0, achieved by subarray [1, 2, 5].

Example 2:

Input: nums = [5,3,2,1], k = 4
Output: 6
Explanation:
There is only one subarray of length k = 4: [5, 3, 2, 1].
Within this subarray, the inversions are: (0, 1), (0, 2), (0, 3), (1, 2), (1, 3), and (2, 3).
Total inversions is 6, so the minimum inversion count is 6.

Example 3:

Input: nums = [2,1], k = 1
Output: 0
Explanation:
All subarrays of length k = 1 contain only one element, so no inversions are possible.
The minimum inversion count is therefore 0.


Constraints:

1 <= n == nums.length <= 105
1 <= nums[i] <= 109
1 <= k <= n


```

## 翻译

给定一个长度为 n 的整数数组 nums 和一个整数 k。逆序对是指满足 i < j 且 nums[i] > nums[j] 的索引对 (i, j)。子数组的逆序数是该子数组内逆序对的数量。返回所有长度为 k 的子数组中最小的逆序数。

## 解题思路

滑动窗口 + Fenwick Tree（树状数组）维护。先做坐标压缩，然后用 BIT 维护窗口内元素的出现次数。

当窗口从 [l, r] 滑到 [l+1, r+1] 时：
- 移除 nums[l]：减去窗口中比它小的元素个数（即 query(rank-1)）
- 添加 nums[r+1]：加上窗口中比它大的元素个数（即 window_size - query(rank)）

每次操作 O(log n)，总时间复杂度 O(n log n)。

## Solution

[SourceCode](./solution.js)
