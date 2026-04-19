# [713] Subarray Product Less Than K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/subarray-product-less-than-k/description/)

* algorithms
* Medium (54.16%)
* Likes:    7545
* Dislikes: 236
* Testcase Example:  '[10,5,2,6]\n100'

```md
Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

Example 1:

Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.

Example 2:

Input: nums = [1,2,3], k = 0
Output: 0


Constraints:

1 <= nums.length <= 3 * 104
1 <= nums[i] <= 1000
0 <= k <= 106


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个整数数组 nums 和一个整数 k，返回乘积严格小于 k 的连续子数组的个数。

## 解题思路

**滑动窗口（双指针）**

维护一个窗口 [left, right]，窗口内元素的乘积 < k。每次 right 右移时，乘积乘以 nums[right]，然后缩小 left 直到乘积 < k。此时以 nums[right] 结尾的满足条件的子数组个数为 right - left + 1。

关键点：当窗口 [left, right] 的乘积 < k 时，以 right 结尾的新增子数组为 [right], [right-1, right], ..., [left, right]，共 right - left + 1 个。

特判：k <= 1 时直接返回 0（因为 nums[i] >= 1，乘积至少为 1）。

时间复杂度 O(n)，空间复杂度 O(1)。
