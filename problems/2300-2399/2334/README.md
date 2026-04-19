# [2334] Subarray With Elements Greater Than Varying Threshold

## Description

[LeetCode Problem Description](https://leetcode.com/problems/subarray-with-elements-greater-than-varying-threshold/description/)

* algorithms
* Hard (45.36%)
* Likes:    615
* Dislikes: 11
* Testcase Example:  '[1,3,4,3,1]\n6'

```md
You are given an integer array nums and an integer threshold.
Find any subarray of nums of length k such that every element in the subarray is greater than threshold / k.
Return the size of any such subarray. If there is no such subarray, return -1.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,3,4,3,1], threshold = 6
Output: 3
Explanation: The subarray [3,4,3] has a size of 3, and every element is greater than 6 / 3 = 2.
Note that this is the only valid subarray.

Example 2:

Input: nums = [6,5,6,5,8], threshold = 7
Output: 1
Explanation: The subarray [8] has a size of 1, and 8 > 7 / 1 = 7. So 1 is returned.
Note that the subarray [6,5] has a size of 2, and every element is greater than 7 / 2 = 3.5.
Similarly, the subarrays [6,5,6], [6,5,6,5], [6,5,6,5,8] also satisfy the given conditions.
Therefore, 2, 3, 4, or 5 may also be returned.

Constraints:

1 <= nums.length <= 105
1 <= nums[i], threshold <= 109


```

## 翻译

给定数组 nums 和 threshold，找长度为 k 的子数组使得每个元素都大于 threshold/k。返回任意满足条件的 k，不存在返回 -1。

## 解题思路

单调栈求每个元素作为最小值的最大子数组。对每个 nums[i]，找 left[i]（左边第一个小于它的）和 right[i]（右边第一个小于它的），最大子数组长度 k = right[i] - left[i] - 1。若 nums[i] * k > threshold 则 k 合法。时间 O(n)。

## Solution

[SourceCode](./solution.js)
