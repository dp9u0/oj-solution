# [3578] Count Partitions With Max-Min Difference at Most K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-partitions-with-max-min-difference-at-most-k/description/)

* algorithms
* Medium (58.73%)
* Likes:    531
* Dislikes: 135
* Testcase Example:  '[9,4,1,3,7]\n4'

```md
You are given an integer array nums and an integer k. Your task is to partition nums into one or more non-empty contiguous segments such that in each segment, the difference between its maximum and minimum elements is at most k.
Return the total number of ways to partition nums under this condition.
Since the answer may be too large, return it modulo 109 + 7.

Example 1:

Input: nums = [9,4,1,3,7], k = 4
Output: 6
Explanation:
There are 6 valid partitions where the difference between the maximum and minimum elements in each segment is at most k = 4:

[[9], [4], [1], [3], [7]]
[[9], [4], [1], [3, 7]]
[[9], [4], [1, 3], [7]]
[[9], [4, 1], [3], [7]]
[[9], [4, 1], [3, 7]]
[[9], [4, 1, 3], [7]]


Example 2:

Input: nums = [3,3,4], k = 0
Output: 2
Explanation:
There are 2 valid partitions that satisfy the given conditions:

[[3], [3], [4]]
[[3, 3], [4]]



Constraints:

2 <= nums.length <= 5 * 104
1 <= nums[i] <= 109
0 <= k <= 109


```

## 翻译

将数组分成若干连续段，每段max-min<=k。求分割方案数，对1e9+7取模。

## 解题思路

DP+单调队列+前缀和。dp[i]=nums[0..i-1]的方案数。dp[i]=sum(dp[j])，j从l到i-1，l是最小左端点使得nums[l..i-1]的max-min<=k。用两个单调队列维护窗口max和min，前缀和优化区间求和。

## Solution

[SourceCode](./solution.js)
