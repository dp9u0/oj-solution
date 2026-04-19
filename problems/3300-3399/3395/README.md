# [3395] Subsequences with a Unique Middle Mode I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/subsequences-with-a-unique-middle-mode-i/description/)

* algorithms
* Hard (21.13%)
* Likes:    24
* Dislikes: 25
* Testcase Example:  '[1,1,1,1,1,1]'

```md
Given an integer array nums, find the number of subsequences of size 5 ofnums with a unique middle mode.
Since the answer may be very large, return it modulo 109 + 7.
A mode of a sequence of numbers is defined as the element that appears the maximum number of times in the sequence.
A sequence of numbers contains a unique mode if it has only one mode.
A sequence of numbers seq of size 5 contains a unique middle mode if the middle element (seq[2]) is a unique mode.

Example 1:

Input: nums = [1,1,1,1,1,1]
Output: 6
Explanation:
[1, 1, 1, 1, 1] is the only subsequence of size 5 that can be formed, and it has a unique middle mode of 1. This subsequence can be formed in 6 different ways, so the output is 6.

Example 2:

Input: nums = [1,2,2,3,3,4]
Output: 4
Explanation:
[1, 2, 2, 3, 4] and [1, 2, 3, 3, 4]each have a unique middle mode because the number at index 2 has the greatest frequency in the subsequence. [1, 2, 2, 3, 3] does not have a unique middle mode because 2 and 3 appear twice.

Example 3:

Input: nums = [0,1,2,3,4,5,6,7,8]
Output: 0
Explanation:
There is no subsequence of length 5 with a unique middle mode.


Constraints:

5 <= nums.length <= 1000
-109 <= nums[i] <= 109


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定数组 nums（n ≤ 1000），求长度为 5 的子序列中，seq[2]（中间元素）是唯一众数的个数。众数指出频次最高的元素，唯一众数指只有一个元素频次最高。答案 mod 10^9+7。

## 解题思路

枚举中间位置 j，设 m = nums[j]。维护左右频次数组。按 freq(m) = 2,3,4,5 分类计数：
- freq ≥ 3 时非 m 元素不可能超过 m 频次，直接组合计算。
- freq = 2 时需 3 个非 m 值互不相同，用 sameL/sameR（同值对数）辅助去重。对每个 j 做 O(V) 遍历，总 O(n^2)。
