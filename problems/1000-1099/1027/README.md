# [1027] Longest Arithmetic Subsequence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-arithmetic-subsequence/description/)

* algorithms
* Medium (49.93%)
* Likes:    4919
* Dislikes: 220
* Testcase Example:  '[3,6,9,12]'

```md
Given an array nums of integers, return the length of the longest arithmetic subsequence in nums.
Note that:

A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.
A sequence seq is arithmetic if seq[i + 1] - seq[i] are all the same value (for 0 <= i < seq.length - 1).


Example 1:

Input: nums = [3,6,9,12]
Output: 4
Explanation:  The whole array is an arithmetic sequence with steps of length = 3.

Example 2:

Input: nums = [9,4,7,2,10]
Output: 3
Explanation:  The longest arithmetic subsequence is [4,7,10].

Example 3:

Input: nums = [20,1,15,3,10,5,8]
Output: 4
Explanation:  The longest arithmetic subsequence is [20,15,10,5].


Constraints:

2 <= nums.length <= 1000
0 <= nums[i] <= 500


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个整数数组 nums，返回其中最长等差子序列的长度。子序列是不改变元素顺序通过删除部分元素得到的数组，等差序列是指相邻元素差值相同的序列。

## 解题思路

**动态规划**

1. dp[i][d] 表示以 nums[i] 结尾、公差为 d 的等差子序列的最大长度
2. 由于 nums[i] 范围为 [0, 500]，公差 d 范围为 [-500, 500]，偏移 500 映射到 [0, 1000]
3. 对于每个 i，遍历 j < i，计算 d = nums[i] - nums[j]，则 dp[i][d] = dp[j][d] + 1
4. 最终取所有 dp[i][d] 的最大值 + 1（至少 2）

时间复杂度 O(n²)，空间复杂度 O(n * maxDiff)。
