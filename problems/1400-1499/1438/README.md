# [1438] Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/description/)

* algorithms
* Medium (57.55%)
* Likes:    4518
* Dislikes: 229
* Testcase Example:  '[8,2,4,7]\n4'

```md
Given an array of integers nums and an integer limit, return the size of the longest non-empty subarray such that the absolute difference between any two elements of this subarray is less than or equal to limit.

Example 1:

Input: nums = [8,2,4,7], limit = 4
Output: 2
Explanation: All subarrays are:
[8] with maximum absolute diff
8-8
= 0 <= 4.
[8,2] with maximum absolute diff
8-2
= 6 > 4.
[8,2,4] with maximum absolute diff
8-2
= 6 > 4.
[8,2,4,7] with maximum absolute diff
8-2
= 6 > 4.
[2] with maximum absolute diff
2-2
= 0 <= 4.
[2,4] with maximum absolute diff
2-4
= 2 <= 4.
[2,4,7] with maximum absolute diff
2-7
= 5 > 4.
[4] with maximum absolute diff
4-4
= 0 <= 4.
[4,7] with maximum absolute diff
4-7
= 3 <= 4.
[7] with maximum absolute diff
7-7
= 0 <= 4.
Therefore, the size of the longest subarray is 2.

Example 2:

Input: nums = [10,1,2,4,7,2], limit = 5
Output: 4
Explanation: The subarray [2,4,7,2] is the longest since the maximum absolute diff is
2-7
= 5 <= 5.

Example 3:

Input: nums = [4,2,2,2,4,4,2,2], limit = 0
Output: 3


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
0 <= limit <= 109


```

## 翻译

给定整数数组 `nums` 和整数 `limit`，返回最长非空子数组的长度，使得子数组中任意两个元素的绝对差不超过 `limit`。

## Approach

滑动窗口 + 单调双端队列。维护两个单调队列：`maxQ`（递减）追踪窗口最大值，`minQ`（递增）追踪窗口最小值。当 `maxQ[0] - minQ[0] > limit` 时收缩左指针，移除出界的队首元素。

时间复杂度 O(n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
