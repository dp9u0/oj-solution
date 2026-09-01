# [446] Arithmetic Slices II - Subsequence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/arithmetic-slices-ii-subsequence/description/)

* algorithms
* Hard (55.23%)
* Likes:    3547
* Dislikes: 165
* Testcase Example:  '[2,4,6,8,10]'

```md
Given an integer array nums, return the number of all the arithmetic subsequences of nums.
A sequence of numbers is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.

For example, [1, 3, 5, 7, 9], [7, 7, 7, 7], and [3, -1, -5, -9] are arithmetic sequences.
For example, [1, 1, 2, 5, 7] is not an arithmetic sequence.

A subsequence of an array is a sequence that can be formed by removing some elements (possibly none) of the array.

For example, [2,5,10] is a subsequence of [1,2,1,2,4,1,5,10].

The test cases are generated so that the answer fits in 32-bit integer.

Example 1:

Input: nums = [2,4,6,8,10]
Output: 7
Explanation: All arithmetic subsequence slices are:
[2,4,6]
[4,6,8]
[6,8,10]
[2,4,6,8]
[4,6,8,10]
[2,4,6,8,10]
[2,6,10]

Example 2:

Input: nums = [7,7,7,7,7]
Output: 16
Explanation: Any subsequence of this array is arithmetic.


Constraints:

1 <= nums.length <= 1000
-231 <= nums[i] <= 231 - 1


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

返回数组中所有**长度 ≥ 3 的等差子序列**个数（元素可不相邻，按原顺序取）。

示例 1：`[2,4,6,8,10]` → `7`；示例 2：`[7,7,7,7,7]` → `16`

约束：答案 fits 32-bit；数值可达 ±2×10^9（差要用 number 容纳）

## 解题思路

经典 DP：`dp[i][d]` = 以 i 结尾、公差 d 的**长度 ≥ 2** 的弱等差子序列个数。对每对 j < i：`d = nums[i] − nums[j]`，`dp[i][d] += dp[j][d] + 1`，同时 `ans += dp[j][d]`（把 j 处每个长 ≥2 的延长为长 ≥3）。Map 按下标存，O(n²)。
