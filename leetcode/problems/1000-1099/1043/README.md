# [1043] Partition Array for Maximum Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/partition-array-for-maximum-sum/description/)

* algorithms
* Medium (77.34%)
* Likes:    5064
* Dislikes: 439
* Testcase Example:  '[1,15,7,9,2,5,10]\n3'

```md
Given an integer array arr, partition the array into (contiguous) subarrays of length at most k. After partitioning, each subarray has their values changed to become the maximum value of that subarray.
Return the largest sum of the given array after partitioning. Test cases are generated so that the answer fits in a 32-bit integer.

Example 1:

Input: arr = [1,15,7,9,2,5,10], k = 3
Output: 84
Explanation: arr becomes [15,15,15,9,10,10,10]

Example 2:

Input: arr = [1,4,1,5,7,3,6,1,9,9,3], k = 4
Output: 83

Example 3:

Input: arr = [1], k = 1
Output: 1


Constraints:

1 <= arr.length <= 500
0 <= arr[i] <= 109
1 <= k <= arr.length


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个整数数组 arr，将其分成若干连续子数组，每个子数组长度最多为 k。分区后，每个子数组中的所有值变为该子数组的最大值。返回分区后数组的最大和。

## Approach

动态规划。dp[i] 表示前 i 个元素分区后的最大和。

对于位置 i，枚举最后一个子数组的长度 j（1 到 k）：子数组为 arr[i-j+1..i]，其贡献为 max(arr[i-j+1..i]) * j，加上 dp[i-j]。

dp[i] = max(dp[i-j] + max(arr[i-j+1..i]) * j)，其中 1 <= j <= k。

时间复杂度 O(n*k)，空间 O(n)。
