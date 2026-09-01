# [523] Continuous Subarray Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/continuous-subarray-sum/description/)

* algorithms
* Medium (31.29%)
* Likes:    6963
* Dislikes: 718
* Testcase Example:  '[23,2,4,6,7]\n6'

```md
Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.
A good subarray is a subarray where:

its length is at least two, and
the sum of the elements of the subarray is a multiple of k.

Note that:

A subarray is a contiguous part of the array.
An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.


Example 1:

Input: nums = [23,2,4,6,7], k = 6
Output: true
Explanation: [2, 4] is a continuous subarray of size 2 whose elements sum up to 6.

Example 2:

Input: nums = [23,2,6,4,7], k = 6
Output: true
Explanation: [23, 2, 6, 4, 7] is an continuous subarray of size 5 whose elements sum up to 42.
42 is a multiple of 6 because 42 = 7 * 6 and 7 is an integer.

Example 3:

Input: nums = [23,2,6,4,7], k = 13
Output: false


Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 109
0 <= sum(nums[i]) <= 231 - 1
1 <= k <= 231 - 1


```

## Solution

[SourceCode](./solution.js)

## 中文翻译

给定整数数组 `nums` 和整数 `k`，判断是否存在一个长度至少为 2 的连续子数组，其元素之和是 k 的倍数。0 也是 k 的倍数。

**示例 1：** nums = [23,2,4,6,7], k = 6 → true（子数组 [2,4] 和为 6）
**示例 2：** nums = [23,2,6,4,7], k = 6 → true（整个数组和 42 是 6 的倍数）
**示例 3：** nums = [23,2,6,4,7], k = 13 → false

**约束：** 1 <= nums.length <= 10^5, 1 <= k <= 2^31-1

## Approach

前缀和 + 哈希表（同余定理）。

核心：(prefixSum[j] - prefixSum[i]) % k === 0 等价于 prefixSum[j] % k === prefixSum[i] % k。

- 用 Map 存储每个余数首次出现的前缀和下标
- 初始放入 {0: -1} 处理从开头开始的子数组
- 遍历计算前缀和余数，如果该余数已存在且距离 >= 2，返回 true
- 否则记录该余数的下标（只记录首次出现，保证最长距离）

时间复杂度 O(n)，空间复杂度 O(min(n, k))。
