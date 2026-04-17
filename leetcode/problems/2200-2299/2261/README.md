# [2261] K Divisible Elements Subarrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/k-divisible-elements-subarrays/description/)

* algorithms
* Medium (54.86%)
* Likes:    740
* Dislikes: 162
* Testcase Example:  '[2,3,3,2,2]\n2\n2'

```md
Given an integer array nums and two integers k and p, return the number of distinct subarrays, which have at most k elements that are divisible by p.
Two arrays nums1 and nums2 are said to be distinct if:

They are of different lengths, or
There exists at least one index i where nums1[i] != nums2[i].

A subarray is defined as a non-empty contiguous sequence of elements in an array.

Example 1:

Input: nums = [2,3,3,2,2], k = 2, p = 2
Output: 11
Explanation:
The elements at indices 0, 3, and 4 are divisible by p = 2.
The 11 distinct subarrays which have at most k = 2 elements divisible by 2 are:
[2], [2,3], [2,3,3], [2,3,3,2], [3], [3,3], [3,3,2], [3,3,2,2], [3,2], [3,2,2], and [2,2].
Note that the subarrays [2] and [3] occur more than once in nums, but they should each be counted only once.
The subarray [2,3,3,2,2] should not be counted because it has 3 elements that are divisible by 2.

Example 2:

Input: nums = [1,2,3,4], k = 4, p = 1
Output: 10
Explanation:
All element of nums are divisible by p = 1.
Also, every subarray of nums will have at most 4 elements that are divisible by 1.
Since all subarrays are distinct, the total number of subarrays satisfying all the constraints is 10.


Constraints:

1 <= nums.length <= 200
1 <= nums[i], p <= 200
1 <= k <= nums.length


Follow up:
Can you solve this problem in O(n2) time complexity?

```

## 题目翻译

给定数组 nums 和整数 k、p，返回不同子数组的数量，要求每个子数组中至多有 k 个元素能被 p 整除。两个子数组不同当且仅当长度不同或某个位置元素不同。

## 解题思路

**枚举 + Set 去重**

n <= 200，直接枚举所有子数组。对每个左端点 l，向右扩展 r，同时维护可被 p 整除的元素个数。超过 k 则停止扩展。将子数组序列化为字符串放入 Set 去重。总时间 O(n^2)（字符串拼接均摊）。

## Solution

[SourceCode](./solution.js)
