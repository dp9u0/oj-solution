# [1248] Count Number of Nice Subarrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-number-of-nice-subarrays/description/)

* algorithms
* Medium (74.95%)
* Likes:    5430
* Dislikes: 147
* Testcase Example:  '[1,1,2,1,1]\n3'

```md
Given an array of integers nums and an integer k. A continuous subarray is called nice if there are k odd numbers on it.
Return the number of nice sub-arrays.

Example 1:

Input: nums = [1,1,2,1,1], k = 3
Output: 2
Explanation: The only sub-arrays with 3 odd numbers are [1,1,2,1] and [1,2,1,1].

Example 2:

Input: nums = [2,4,6], k = 1
Output: 0
Explanation: There are no odd numbers in the array.

Example 3:

Input: nums = [2,2,2,1,2,2,1,2,2,2], k = 2
Output: 16


Constraints:

1 <= nums.length <= 50000
1 <= nums[i] <= 10^5
1 <= k <= nums.length


```

## 翻译

给定一个整数数组 `nums` 和一个整数 `k`。如果一个连续子数组中恰好有 `k` 个奇数，则称为"漂亮子数组"。返回漂亮子数组的个数。

## Approach

**前缀和 + 哈希表。** 将每个元素转换为奇偶性（0 或 1），问题转化为：求有多少个子数组的奇数个数等于 `k`，即子数组和为 `k`。

与 LeetCode 560 (Subarray Sum Equals K) 相同思路：用哈希表记录前缀和出现次数，对于当前前缀和 `sum`，查找 `sum - k` 的出现次数。

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
