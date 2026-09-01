# [891] Sum of Subsequence Widths

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-subsequence-widths/description/)

* algorithms
* Hard (41.19%)
* Likes:    743
* Dislikes: 173
* Testcase Example:  '[2,1,3]'

```md
The width of a sequence is the difference between the maximum and minimum elements in the sequence.
Given an array of integers nums, return the sum of the widths of all the non-empty subsequences of nums. Since the answer may be very large, return it modulo 109 + 7.
A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

Example 1:

Input: nums = [2,1,3]
Output: 6
Explanation: The subsequences are [1], [2], [3], [2,1], [2,3], [1,3], [2,1,3].
The corresponding widths are 0, 0, 0, 1, 1, 2, 2.
The sum of these widths is 6.

Example 2:

Input: nums = [2]
Output: 0


Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 105


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

序列的**宽度** = 最大元素 − 最小元素。给定整数数组 `nums`，返回其所有**非空子序列**的宽度之和，模 1e9+7。

示例 1：`[2,1,3]` → `6`；示例 2：`[2]` → `0`

约束：`n ≤ 10^5`，`nums[i] ≤ 10^5`

## 解题思路

宽度之和与子序列顺序无关，只与元素集合有关 → **排序 + 贡献法**：排序后下标 i 的元素作为最大值出现在 2^i 个子序列中、作为最小值出现在 2^(n−1−i) 个中（左侧任选/右侧任选）。答案 = `Σ nums[i]·(2^i − 2^(n−1−i)) mod 1e9+7`。

预处理 2 的幂模数组，逐项累加（乘积 ≤ 10^5×(10^9+7) < 2^53 安全）。O(n log n)。

验证 [2,1,3]：排序 [1,2,3]，贡献 −3 + 0 + 9 = 6 ✓
