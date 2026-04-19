# [2518] Number of Great Partitions

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-great-partitions/description/)

* algorithms
* Hard (33.46%)
* Likes:    494
* Dislikes: 12
* Testcase Example:  '[1,2,3,4]\n4'

```md
You are given an array nums consisting of positive integers and an integer k.
Partition the array into two ordered groups such that each element is in exactly one group. A partition is called great if the sum of elements of each group is greater than or equal to k.
Return the number of distinct great partitions. Since the answer may be too large, return it modulo 109 + 7.
Two partitions are considered distinct if some element nums[i] is in different groups in the two partitions.

Example 1:

Input: nums = [1,2,3,4], k = 4
Output: 6
Explanation: The great partitions are: ([1,2,3], [4]), ([1,3], [2,4]), ([1,4], [2,3]), ([2,3], [1,4]), ([2,4], [1,3]) and ([4], [1,2,3]).

Example 2:

Input: nums = [3,3,3], k = 4
Output: 0
Explanation: There are no great partitions for this array.

Example 3:

Input: nums = [6,6], k = 2
Output: 2
Explanation: We can either put nums[0] in the first partition or in the second partition.
The great partitions will be ([6], [6]) and ([6], [6]).


Constraints:

1 <= nums.length, k <= 1000
1 <= nums[i] <= 109


```

## 题目翻译

给定正整数数组 nums 和整数 k。将数组分成两个有序组，每个元素恰好属于一个组。如果两个组的元素和都 >= k，则称为"好分割"。返回不同的好分割数量，对 10^9+7 取模。

## 解题思路

**容斥原理 + 0-1 背包 DP**。

- 总分割数 = 2^n（每个元素选组 A 或组 B）。
- 好分割 = 总分割 - 至少一个组和 < k 的分割。
- 由容斥原理：好分割 = 2^n - 2 * (组 A 和 < k 的分割数)。
  - 因为两组对称，"组 A 和 < k"与"组 B 和 < k"的分割数相同。
  - 不可能两个组同时 < k（因为 total = sum(nums)，如果两个组都 < k 则 total < 2k，但 total >= 2k 是前提条件，否则答案为 0）。
- 组 A 和 < k 的分割数：用 0-1 背包 DP 求，从 nums 中选子集使和 < k 的方案数。
- dp[s] = 选若干元素使和恰好为 s 的方案数，dp[0] = 1。
- 答案 = (2^n - 2 * sum(dp[0..k-1])) % MOD。
- 特判：如果 total < 2k，返回 0。

## Solution

[SourceCode](./solution.js)
