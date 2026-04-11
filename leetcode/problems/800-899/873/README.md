# [873] Length of Longest Fibonacci Subsequence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/description/)

* algorithms
* Medium (57.53%)
* Likes:    2696
* Dislikes: 109
* Testcase Example:  '[1,2,3,4,5,6,7,8]'

```md
A sequence x1, x2, ..., xn is Fibonacci-like if:

n >= 3
xi + xi+1 == xi+2 for all i + 2 <= n

Given a strictly increasing array arr of positive integers forming a sequence, return the length of the longest Fibonacci-like subsequence of arr. If one does not exist, return 0.
A subsequence is derived from another sequence arr by deleting any number of elements (including none) from arr, without changing the order of the remaining elements. For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8].

Example 1:

Input: arr = [1,2,3,4,5,6,7,8]
Output: 5
Explanation: The longest subsequence that is fibonacci-like: [1,2,3,5,8].
Example 2:

Input: arr = [1,3,7,11,12,14,18]
Output: 3
Explanation: The longest subsequence that is fibonacci-like: [1,11,12], [3,11,14] or [7,11,18].

Constraints:

3 <= arr.length <= 1000
1 <= arr[i] < arr[i + 1] <= 109


```

## 翻译

给定一个严格递增的正整数数组 `arr`，返回最长类斐波那契子序列的长度。如果不存在则返回 0。

类斐波那契序列：长度 >= 3，且每个元素等于前两个元素之和。

## Approach

**动态规划 + 哈希表。** 用 `dp[i][j]` 表示以 `arr[i]`, `arr[j]` 为最后两个元素的最长类斐波那契子序列长度。

对于每对 `(i, j)`，检查 `arr[j] - arr[i]` 是否存在于数组中（在 `i` 之前）。设 `arr[k] = arr[j] - arr[i]`，则 `dp[i][j] = dp[k][i] + 1`。

用 Map 存储值到索引的映射以快速查找。初始 `dp[i][j] = 2`（任意两个数都可以作为起点）。

时间复杂度：O(n^2)，空间复杂度：O(n^2)

## Solution

[SourceCode](./solution.js)
