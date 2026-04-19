# [1752] Check if Array Is Sorted and Rotated

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/description/)

* algorithms
* Easy (55.92%)
* Likes:    4956
* Dislikes: 292
* Testcase Example:  '[3,4,5,1,2]'

```md
Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.
There may be duplicates in the original array.
Note: An array A rotated by x positions results in an array B of the same length such that B[i] == A[(i+x) % A.length] for every valid index i.

Example 1:

Input: nums = [3,4,5,1,2]
Output: true
Explanation: [1,2,3,4,5] is the original sorted array.
You can rotate the array by x = 2 positions to begin on the element of value 3: [3,4,5,1,2].

Example 2:

Input: nums = [2,1,3,4]
Output: false
Explanation: There is no sorted array once rotated that can make nums.

Example 3:

Input: nums = [1,2,3]
Output: true
Explanation: [1,2,3] is the original sorted array.
You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.


Constraints:

1 <= nums.length <= 100
1 <= nums[i] <= 100


```

## 中文翻译

判断数组是否是一个非递减排序数组旋转若干位置后的结果。

## 解题思路

统计 nums[i] > nums[(i+1) % n] 的次数，若 <= 1 则为旋转有序数组。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
