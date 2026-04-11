# [1218] Longest Arithmetic Subsequence of Given Difference

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/description/)

* algorithms
* Medium (54.32%)
* Likes:    3383
* Dislikes: 92
* Testcase Example:  '[1,2,3,4]\n1'

```md
Given an integer array arr and an integer difference, return the length of the longest subsequence in arr which is an arithmetic sequence such that the difference between adjacent elements in the subsequence equals difference.
A subsequence is a sequence that can be derived from arr by deleting some or no elements without changing the order of the remaining elements.

Example 1:

Input: arr = [1,2,3,4], difference = 1
Output: 4
Explanation: The longest arithmetic subsequence is [1,2,3,4].
Example 2:

Input: arr = [1,3,5,7], difference = 1
Output: 1
Explanation: The longest arithmetic subsequence is any single element.

Example 3:

Input: arr = [1,5,7,8,5,3,4,2,1], difference = -2
Output: 4
Explanation: The longest arithmetic subsequence is [7,5,3,1].


Constraints:

1 <= arr.length <= 105
-104 <= arr[i], difference <= 104


```

## 翻译

给定整数数组 `arr` 和差值 `difference`，返回最长等差子序列的长度，该子序列相邻元素之差等于 `difference`。

## Approach

**动态规划 + 哈希表。** 用 Map 记录以每个值结尾的最长等差子序列长度。遍历 arr，对于每个元素 `arr[i]`，查找 `arr[i] - difference` 的长度，当前长度 = 前驱长度 + 1。

dp[arr[i]] = dp[arr[i] - difference] + 1

时间复杂度：O(n)，空间复杂度：O(n)

## Solution

[SourceCode](./solution.js)
