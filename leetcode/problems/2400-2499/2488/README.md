# [2488] Count Subarrays With Median K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-subarrays-with-median-k/description/)

* algorithms
* Hard (48.54%)
* Likes:    657
* Dislikes: 17
* Testcase Example:  '[3,2,1,4,5]\n4'

```md
You are given an array nums of size n consisting of distinct integers from 1 to n and a positive integer k.
Return the number of non-empty subarrays in nums that have a median equal to k.
Note:

The median of an array is the middle element after sorting the array in ascending order. If the array is of even length, the median is the left middle element.

For example, the median of [2,3,1,4] is 2, and the median of [8,4,3,5,1] is 4.


A subarray is a contiguous part of an array.


Example 1:

Input: nums = [3,2,1,4,5], k = 4
Output: 3
Explanation: The subarrays that have a median equal to 4 are: [4], [4,5] and [1,4,5].

Example 2:

Input: nums = [2,3,1], k = 3
Output: 1
Explanation: [3] is the only subarray that has a median equal to 3.


Constraints:

n == nums.length
1 <= n <= 105
1 <= nums[i], k <= n
The integers in nums are distinct.


```

## 翻译

给定由 1 到 n 的不同整数组成的数组 nums 和正整数 k。返回中位数等于 k 的非空子数组数量。偶数长度取左中位数。

## 解题思路

将数组转化为相对 k 的符号：nums[i] > k → +1，nums[i] < k → -1，nums[i] = k → 0。k 必须在子数组中。

中位数等于 k 的条件：子数组包含 k，且大于 k 的元素数与小于 k 的元素数之差为 0（奇数长度）或 1（偶数长度，即左中位数，所以大于的比小于的恰好多1个）。

即子数组中 +1 的个数减 -1 的个数 = 0 或 1。

用前缀和 + 哈希表统计：找到 k 的位置 pos，遍历 pos 左侧的前缀和，然后在右侧查找满足条件的配对。

## Solution

[SourceCode](./solution.js)
