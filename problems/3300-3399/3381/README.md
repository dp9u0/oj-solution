# [3381] Maximum Subarray Sum With Length Divisible by K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-subarray-sum-with-length-divisible-by-k/description/)

* algorithms
* Medium (49.62%)
* Likes:    691
* Dislikes: 40
* Testcase Example:  '[1,2]\n1'

```md
You are given an array of integers nums and an integer k.
Return the maximum sum of a subarray of nums, such that the size of the subarray is divisible by k.

Example 1:

Input: nums = [1,2], k = 1
Output: 3
Explanation:
The subarray [1, 2] with sum 3 has length equal to 2 which is divisible by 1.

Example 2:

Input: nums = [-1,-2,-3,-4,-5], k = 4
Output: -10
Explanation:
The maximum sum subarray is [-1, -2, -3, -4] which has length equal to 4 which is divisible by 4.

Example 3:

Input: nums = [-5,1,2,-3,4], k = 2
Output: 4
Explanation:
The maximum sum subarray is [1, 2, -3, 4] which has length equal to 4 which is divisible by 2.


Constraints:

1 <= k <= nums.length <= 2 * 105
-109 <= nums[i] <= 109


```

## 题目翻译

给定整数数组 nums 和整数 k，返回长度能被 k 整除的子数组的最大和。

## 解题思路

**前缀和 + 按 k 分组维护最小值**

对于下标 i，子数组 [j, i) 的长度为 i-j，要求 (i-j) % k == 0，即 i%k == j%k。维护前缀和 prefix[i]，对于每个 i，只需找同余组中最小的 prefix[j]（j%k == i%k），则 prefix[i] - prefix[j] 为候选答案。O(n) 时间。

## Solution

[SourceCode](./solution.js)
