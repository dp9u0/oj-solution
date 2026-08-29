# [718] Maximum Length of Repeated Subarray

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-length-of-repeated-subarray/description/)

* algorithms
* Medium (51.55%)
* Likes:    7128
* Dislikes: 182
* Testcase Example:  '[1,2,3,2,1]\n[3,2,1,4,7]'

```md
Given two integer arrays nums1 and nums2, return the maximum length of a subarray that appears in both arrays.

Example 1:

Input: nums1 = [1,2,3,2,1], nums2 = [3,2,1,4,7]
Output: 3
Explanation: The repeated subarray with maximum length is [3,2,1].

Example 2:

Input: nums1 = [0,0,0,0,0], nums2 = [0,0,0,0,0]
Output: 5
Explanation: The repeated subarray with maximum length is [0,0,0,0,0].


Constraints:

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 100


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定两个整数数组，返回**同时出现在两个数组中**的子数组（连续）的最大长度。

示例 1：`[1,2,3,2,1]` 与 `[3,2,1,4,7]` → `3`（`[3,2,1]`）
示例 2：全 0 的两个长度 5 数组 → `5`

约束：长度 ≤ 1000，值 ∈ [0,100]

## 解题思路

经典 DP（最长公共子串）：`dp[i][j]` = 以 `nums1[i-1]`、`nums2[j-1]` 结尾的最长公共后缀：相等则 `dp[i-1][j-1]+1`，否则 0。答案为全局最大。滚动一维数组，O(mn) 时间、O(n) 空间。
