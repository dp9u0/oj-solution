# [3729] Count Distinct Subarrays Divisible by K in Sorted Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-distinct-subarrays-divisible-by-k-in-sorted-array/description/)

* algorithms
* Hard (27.71%)
* Likes:    61
* Dislikes: 3
* Testcase Example:  '[1,2,3]\n3'

```md
You are given an integer array nums sorted in non-descending order and a positive integer k.
A subarray of nums is good if the sum of its elements is divisible by k.
Return an integer denoting the number of distinct good subarrays of nums.
Subarrays are distinct if their sequences of values are. For example, there are 3 distinct subarrays in [1, 1, 1], namely [1], [1, 1], and [1, 1, 1].

Example 1:

Input: nums = [1,2,3], k = 3
Output: 3
Explanation:
The good subarrays are [1, 2], [3], and [1, 2, 3]. For example, [1, 2, 3] is good because the sum of its elements is 1 + 2 + 3 = 6, and 6 % k = 6 % 3 = 0.

Example 2:

Input: nums = [2,2,2,2,2,2], k = 6
Output: 2
Explanation:
The good subarrays are [2, 2, 2] and [2, 2, 2, 2, 2, 2]. For example, [2, 2, 2] is good because the sum of its elements is 2 + 2 + 2 = 6, and 6 % k = 6 % 6 = 0.
Note that [2, 2, 2] is counted only once.


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
nums is sorted in non-descending order.
1 <= k <= 109


```

## 题目翻译

给定非降序整数数组 nums 和正整数 k。子数组元素之和能被 k 整除则为好子数组。返回不同好子数组的数量（不同指值序列不同）。

## 解题思路

**后缀数组 + LCP + 前缀和余数二分**。

- 利用数组有序性质，O(n) 构造后缀数组：非末尾组正序，末尾组逆序。
- Kasai 算法 O(n) 计算 LCP 数组。
- 后缀数组中每个位置 SA[r] 贡献的新不同子串长度为 [LCP[r]+1, n-SA[r]]。
- 对前缀和 P 建余数→位置列表的映射。对每个后缀 SA[r]，二分统计 P[j] ≡ P[SA[r]] (mod k) 在范围 [SA[r]+LCP[r]+1, n] 内的位置数。
- 总复杂度 O(n log n)。
