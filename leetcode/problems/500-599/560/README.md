# [560] Subarray Sum Equals K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/subarray-sum-equals-k/description/)

* algorithms
* Medium (47.12%)
* Likes:    25080
* Dislikes: 852
* Testcase Example:  '[1,1,1]\n2'

```md
Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:
Input: nums = [1,1,1], k = 2
Output: 2
Example 2:
Input: nums = [1,2,3], k = 3
Output: 2


Constraints:

1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107


```

## 翻译

给定一个整数数组 `nums` 和一个整数 `k`，返回和为 `k` 的子数组（连续非空序列）的总数。

## Approach

**前缀和 + 哈希表。** 遍历数组，维护前缀和 `sum`。用哈希表记录每个前缀和出现的次数。

对于当前位置，如果 `sum - k` 在哈希表中出现过 `count` 次，说明有 `count` 个子数组的和为 `k`。

初始时哈希表中 `{0: 1}`，表示前缀和为 0 出现 1 次。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
