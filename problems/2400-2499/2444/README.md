# [2444] Count Subarrays With Fixed Bounds

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/description/)

* algorithms
* Hard (69.22%)
* Likes:    3773
* Dislikes: 97
* Testcase Example:  '[1,3,5,2,7,5]\n1\n5'

```md
You are given an integer array nums and two integers minK and maxK.
A fixed-bound subarray of nums is a subarray that satisfies the following conditions:

The minimum value in the subarray is equal to minK.
The maximum value in the subarray is equal to maxK.

Return the number of fixed-bound subarrays.
A subarray is a contiguous part of an array.

Example 1:

Input: nums = [1,3,5,2,7,5], minK = 1, maxK = 5
Output: 2
Explanation: The fixed-bound subarrays are [1,3,5] and [1,3,5,2].

Example 2:

Input: nums = [1,1,1,1], minK = 1, maxK = 1
Output: 10
Explanation: Every subarray of nums is a fixed-bound subarray. There are 10 possible subarrays.


Constraints:

2 <= nums.length <= 105
1 <= nums[i], minK, maxK <= 106


```

## 翻译

给定数组 nums 和整数 minK、maxK。统计满足以下条件的子数组个数：子数组的最小值等于 minK，最大值等于 maxK。

## Approach

滑动窗口 + 记录最近位置。遍历数组，维护：
- leftBound：最近一个不在 [minK, maxK] 范围内的位置（越界位置）
- lastMin：最近一个 minK 出现的位置
- lastMax：最近一个 maxK 出现的位置

对于每个右端点 i，有效的左端点范围是 (leftBound, min(lastMin, lastMax)]，个数为 min(lastMin, lastMax) - leftBound。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
