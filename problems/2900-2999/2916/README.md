# [2916] Subarrays Distinct Element Sum of Squares II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/subarrays-distinct-element-sum-of-squares-ii/description/)

* algorithms
* Hard (22.97%)
* Likes:    157
* Dislikes: 12
* Testcase Example:  '[1,2,1]'

```md
You are given a 0-indexed integer array nums.
The distinct count of a subarray of nums is defined as:

Let nums[i..j] be a subarray of nums consisting of all the indices from i to j such that 0 <= i <= j < nums.length. Then the number of distinct values in nums[i..j] is called the distinct count of nums[i..j].

Return the sum of the squares of distinct counts of all subarrays of nums.
Since the answer may be very large, return it modulo 109 + 7.
A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,2,1]
Output: 15
Explanation: Six possible subarrays are:
[1]: 1 distinct value
[2]: 1 distinct value
[1]: 1 distinct value
[1,2]: 2 distinct values
[2,1]: 2 distinct values
[1,2,1]: 2 distinct values
The sum of the squares of the distinct counts in all subarrays is equal to 12 + 12 + 12 + 22 + 22 + 22 = 15.

Example 2:

Input: nums = [2,2]
Output: 3
Explanation: Three possible subarrays are:
[2]: 1 distinct value
[2]: 1 distinct value
[2,2]: 1 distinct value
The sum of the squares of the distinct counts in all subarrays is equal to 12 + 12 + 12 = 3.

Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105


```

## 翻译

给定数组 nums，对所有子数组求"不同元素个数的平方"之和，模 10^9+7。

## 解题思路

用 BIT（树状数组）维护区间加 + 区间求和。d[i] 表示以 i 开头、当前 j 结尾的子数组的不同元素数。处理 nums[j] 时，对 [last[j]+1, j] 范围的 d[i] 加 1（last[j] 是 nums[j] 上次出现位置）。维护 sumDSq = Σd[i]²，每次更新：sumDSq += 2*sumD_in_range + len。用两个 BIT 实现区间加+区间求和，O(n log n)。

## Solution

[SourceCode](./solution.js)
