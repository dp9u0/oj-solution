# [540] Single Element in a Sorted Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/single-element-in-a-sorted-array/description/)

* algorithms
* Medium (59.25%)
* Likes:    13022
* Dislikes: 248
* Testcase Example:  '[1,1,2,3,3,4,4,8,8]'

```md
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.
Return the single element that appears only once.
Your solution must run in O(log n) time and O(1) space.

Example 1:
Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:
Input: nums = [3,3,7,7,10,11,11]
Output: 10


Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 105


```

## 中文翻译

有序数组中每个元素恰好出现两次，唯有一个出现一次，找该元素。要求 O(log n) 时间 O(1) 空间。

## 解题思路

**二分查找**

关键观察：单一元素之前，成对元素的第一个在下标偶数位置（0,2,4...）；单一元素之后，第一个在下标奇数位置。

- mid 为偶数：若 nums[mid] == nums[mid+1]，单一元素在 mid 右边（lo = mid+2）；否则在 mid 或左边（hi = mid）
- mid 为奇数：若 nums[mid] == nums[mid-1]，单一元素在 mid 右边（lo = mid+1）；否则在 mid 或左边（hi = mid）

时间复杂度：O(log n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
