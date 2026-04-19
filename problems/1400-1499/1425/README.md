# [1425] Constrained Subsequence Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/constrained-subsequence-sum/description/)

* algorithms
* Hard (56.39%)
* Likes:    2252
* Dislikes: 109
* Testcase Example:  '[10,2,-10,5,20]\n2'

```md
Given an integer array nums and an integer k, return the maximum sum of a non-empty subsequence of that array such that for every two consecutive integers in the subsequence, nums[i] and nums[j], where i < j, the condition j - i <= k is satisfied.
A subsequence of an array is obtained by deleting some number of elements (can be zero) from the array, leaving the remaining elements in their original order.

Example 1:

Input: nums = [10,2,-10,5,20], k = 2
Output: 37
Explanation: The subsequence is [10, 2, 5, 20].

Example 2:

Input: nums = [-1,-2,-3], k = 1
Output: -1
Explanation: The subsequence must be non-empty, so we choose the largest number.

Example 3:

Input: nums = [10,-2,-10,-5,20], k = 2
Output: 23
Explanation: The subsequence is [10, -2, -5, 20].


Constraints:

1 <= k <= nums.length <= 105
-104 <= nums[i] <= 104


```

## 中文翻译

给定数组和整数 k，返回最大子序列和，使得子序列中相邻两个元素的索引差 <= k。

## 解题思路

DP + 单调队列。
- dp[i] = 以 i 结尾的最大有效子序列和 = nums[i] + max(0, max(dp[j])) 其中 j ∈ [i-k, i-1]
- 用单调递减队列维护窗口内的最大 dp 值，O(n) 时间

## Solution

[SourceCode](./solution.js)
