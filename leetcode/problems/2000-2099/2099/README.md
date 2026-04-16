# [2099] Find Subsequence of Length K With the Largest Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/description/)

* algorithms
* Easy (57.39%)
* Likes:    1761
* Dislikes: 184
* Testcase Example:  '[2,1,3,3]\n2'

```md
You are given an integer array nums and an integer k. You want to find a subsequence of nums of length k that has the largest sum.
Return any such subsequence as an integer array of length k.
A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

Example 1:

Input: nums = [2,1,3,3], k = 2
Output: [3,3]
Explanation:
The subsequence has the largest sum of 3 + 3 = 6.
Example 2:

Input: nums = [-1,-2,3,4], k = 3
Output: [-1,3,4]
Explanation:
The subsequence has the largest sum of -1 + 3 + 4 = 6.

Example 3:

Input: nums = [3,4,3,3], k = 2
Output: [3,4]
Explanation:
The subsequence has the largest sum of 3 + 4 = 7.
Another possible subsequence is [4, 3].


Constraints:

1 <= nums.length <= 1000
-105<= nums[i] <= 105
1 <= k <= nums.length


```

## 中文翻译

给定整数数组 nums 和整数 k，找长度为 k 的子序列使其和最大。返回任意一个满足条件的子序列。

## 解题思路

将元素按 (值, 索引) 排序，取最大的 k 个，再按原索引排序输出以保持原始顺序。

## Solution

[SourceCode](./solution.js)
