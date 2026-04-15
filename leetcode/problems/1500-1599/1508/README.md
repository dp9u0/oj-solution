# [1508] Range Sum of Sorted Subarray Sums

## Description

[LeetCode Problem Description](https://leetcode.com/problems/range-sum-of-sorted-subarray-sums/description/)

* algorithms
* Medium (63.06%)
* Likes:    1605
* Dislikes: 269
* Testcase Example:  '[1,2,3,4]\n4\n1\n5'

```md
You are given the array nums consisting of n positive integers. You computed the sum of all non-empty continuous subarrays from the array and then sorted them in non-decreasing order, creating a new array of n * (n + 1) / 2 numbers.
Return the sum of the numbers from index left to index right (indexed from 1), inclusive, in the new array. Since the answer can be a huge number return it modulo 109 + 7.

Example 1:

Input: nums = [1,2,3,4], n = 4, left = 1, right = 5
Output: 13
Explanation: All subarray sums are 1, 3, 6, 10, 2, 5, 9, 3, 7, 4. After sorting them in non-decreasing order we have the new array [1, 2, 3, 3, 4, 5, 6, 7, 9, 10]. The sum of the numbers from index le = 1 to ri = 5 is 1 + 2 + 3 + 3 + 4 = 13.

Example 2:

Input: nums = [1,2,3,4], n = 4, left = 3, right = 4
Output: 6
Explanation: The given array is the same as example 1. We have the new array [1, 2, 3, 3, 4, 5, 6, 7, 9, 10]. The sum of the numbers from index le = 3 to ri = 4 is 3 + 3 = 6.

Example 3:

Input: nums = [1,2,3,4], n = 4, left = 1, right = 10
Output: 50


Constraints:

n == nums.length
1 <= nums.length <= 1000
1 <= nums[i] <= 100
1 <= left <= right <= n * (n + 1) / 2


```

## 中文翻译

给定正整数数组 nums，计算所有非空连续子数组的和，排序后取第 left 到第 right 个（1-indexed）元素的和，对 10^9+7 取模。

## 解题思路

暴力枚举所有子数组和，排序后求和。n <= 1000，子数组共 n*(n+1)/2 <= 500500 个，直接生成、排序即可。

时间复杂度：O(n^2 log n)，空间复杂度：O(n^2)

## Solution

[SourceCode](./solution.js)
