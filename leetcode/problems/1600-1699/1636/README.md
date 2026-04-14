# [1636] Sort Array by Increasing Frequency

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sort-array-by-increasing-frequency/description/)

* algorithms
* Easy (80.77%)
* Likes:    3723
* Dislikes: 180
* Testcase Example:  '[1,1,2,2,2,3]'

```md
Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.
Return the sorted array.

Example 1:

Input: nums = [1,1,2,2,2,3]
Output: [3,1,1,2,2,2]
Explanation: &#39;3&#39; has a frequency of 1, &#39;1&#39; has a frequency of 2, and &#39;2&#39; has a frequency of 3.

Example 2:

Input: nums = [2,3,1,3,2]
Output: [1,3,3,2,2]
Explanation: &#39;2&#39; and &#39;3&#39; both have a frequency of 2, so they are sorted in decreasing order.

Example 3:

Input: nums = [-1,1,-6,4,5,-6,1,4,1]
Output: [5,-1,4,4,-6,-6,1,1,1]

Constraints:

1 <= nums.length <= 100
-100 <= nums[i] <= 100


```

## 翻译

给定整数数组 nums，按值的频率升序排序。频率相同的值按降序排列。返回排序后的数组。

## Approach

统计频率后自定义排序：先按频率升序，频率相同按值降序。

时间复杂度 O(n log n)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
