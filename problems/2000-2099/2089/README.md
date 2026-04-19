# [2089] Find Target Indices After Sorting Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-target-indices-after-sorting-array/description/)

* algorithms
* Easy (77.93%)
* Likes:    1963
* Dislikes: 106
* Testcase Example:  '[1,2,5,2,3]\n2'

```md
You are given a 0-indexed integer array nums and a target element target.
A target index is an index i such that nums[i] == target.
Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

Example 1:

Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.

Example 2:

Input: nums = [1,2,5,2,3], target = 3
Output: [3]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 3 is 3.

Example 3:

Input: nums = [1,2,5,2,3], target = 5
Output: [4]
Explanation: After sorting, nums is [1,2,2,3,5].
The index where nums[i] == 5 is 4.


Constraints:

1 <= nums.length <= 100
1 <= nums[i], target <= 100


```

## 题目翻译

给定一个 0-indexed 整数数组 nums 和一个目标元素 target。目标索引是满足 nums[i] == target 的索引 i。返回将 nums 按非递减顺序排序后的所有目标索引列表。如果没有目标索引，返回空列表。返回的列表必须按递增顺序排列。

## 解题思路

排序后找所有等于 target 的索引。更优的做法是不排序：统计比 target 小的元素个数（less）和等于 target 的元素个数（equal），则结果为 [less, less+1, ..., less+equal-1]。

时间复杂度 O(n)，空间复杂度 O(1)

## Solution

[SourceCode](./solution.js)
