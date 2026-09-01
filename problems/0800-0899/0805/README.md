# [805] Split Array With Same Average

## Description

[LeetCode Problem Description](https://leetcode.com/problems/split-array-with-same-average/description/)

* algorithms
* Hard (27.50%)
* Likes:    1372
* Dislikes: 143
* Testcase Example:  '[1,2,3,4,5,6,7,8]'

```md
You are given an integer array nums.
You should move each element of nums into one of the two arrays A and B such that A and B are non-empty, and average(A) == average(B).
Return true if it is possible to achieve that and false otherwise.
Note that for an array arr, average(arr) is the sum of all the elements of arr over the length of arr.

Example 1:
Input: nums = [1,2,3,4,5,6,7,8]
Output: true
Explanation: We can split the array into [1,4,5,8] and [2,3,6,7], and both of them have an average of 4.5.
Example 2:
Input: nums = [3,1]
Output: false

Constraints:
1 <= nums.length <= 30
0 <= nums[i] <= 104

```

## Solution

[SourceCode](./solution.js)

## 题目翻译（中文）

给定一个整数数组 `nums`。你需要把 `nums` 的每个元素移动到两个数组 A 和 B 中的一个，使得 A 和 B 都非空，且 average(A) == average(B)。

如果能做到返回 `true`，否则返回 `false`。

注意：数组 `arr` 的平均 average(arr) 是其所有元素之和除以长度。

示例 1：
输入：nums = [1,2,3,4,5,6,7,8]
输出：true
解释：可以拆成 [1,4,5,8] 和 [2,3,6,7]，两者平均值都是 4.5。

示例 2：
输入：nums = [3,1]
输出：false

约束：
1 <= nums.length <= 30
0 <= nums[i] <= 10^4

## 解题思路

**关键洞察**：若 avg(A) == avg(B) = x，则 total = sum(A)+sum(B) = x·(|A|+|B|) = x·n，所以 x = total/n，即两个子数组的平均值都必须等于整体平均值。

问题转化为：是否存在非空真子集 A（1 <= |A| <= n-1），满足 sum(A)·n = total·|A|，即 sum(A) = total·k/n（k = |A|，须为整数）。

**算法（按个数的子集和 DP + BigInt 位集）**：

1. 设 dp[k] 为"恰好选 k 个元素"可达的和的位集（BigInt，第 s 位为 1 表示和 s 可达）。
2. 0/1 背包转移：对每个元素 num，k 从大到小更新 `dp[k] |= dp[k-1] << num`（从大到小保证每个元素只用一次）。
3. 对每个 k ∈ [1, n-1]，若 `total*k % n == 0` 且 `dp[k]` 的第 `total*k/n` 位为 1，返回 true。

由于 n <= 30、元素 <= 10^4，最大和为 3×10^5，位集约 37.5KB，总共约 900 次位运算，非常快。

复杂度：时间 O(n² · maxSum / 64)，空间 O(n · maxSum / 8)。
