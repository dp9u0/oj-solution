# [3409] Longest Subsequence With Decreasing Adjacent Difference

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-subsequence-with-decreasing-adjacent-difference/description/)

* algorithms
* Medium (16.78%)
* Likes:    150
* Dislikes: 25
* Testcase Example:  '[16,6,3]'

```md
You are given an array of integers nums.
Your task is to find the length of the longest subsequence seq of nums, such that the absolute differences between consecutive elements form a non-increasing sequence of integers. In other words, for a subsequence seq0, seq1, seq2, ..., seqm of nums,
seq1 - seq0
>=
seq2 - seq1
>= ... >=
seqm - seqm - 1
.
Return the length of such a subsequence.

Example 1:

Input: nums = [16,6,3]
Output: 3
Explanation:
The longest subsequence is [16, 6, 3] with the absolute adjacent differences [10, 3].

Example 2:

Input: nums = [6,5,3,4,2,1]
Output: 4
Explanation:
The longest subsequence is [6, 4, 2, 1] with the absolute adjacent differences [2, 2, 1].

Example 3:

Input: nums = [10,20,10,19,10,20]
Output: 5
Explanation:
The longest subsequence is [10, 20, 10, 19, 10] with the absolute adjacent differences [10, 10, 9, 9].


Constraints:

2 <= nums.length <= 104
1 <= nums[i] <= 300


```

## 中文翻译

给定整数数组 nums，找到最长子序列使得相邻元素的绝对差非递增。即 |seq[1]-seq[0]| >= |seq[2]-seq[1]| >= ...。

## 解题思路

**DP + 后缀最大值**

利用值域只有 1-300 的特性。dp[v][d] 表示以值 v 结尾、最后差为 d 的最长子序列长度。d=301 表示长度为1的子序列（无差约束）。对每个元素 x，枚举所有可能的上一值 v（1-300），计算新差 new_diff=|x-v|，用后缀最大值 sfx[v][new_diff] 在 O(1) 内查询 v 的最优转移。处理完 x 后重算 sfx[x]。总复杂度 O(n * 300)。

## Solution

[SourceCode](./solution.js)
