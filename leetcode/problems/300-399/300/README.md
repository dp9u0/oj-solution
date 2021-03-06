# [300] Longest Increasing Subsequence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-increasing-subsequence/description/)

* algorithms
* Medium (43.61%)
* Testcase Example:  '[10,9,2,5,3,7,101,18]'

```md
Given an integer array nums, return the length of the longest strictly increasing subsequence.
A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].

Example 1:
Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.
Example 2:
Input: nums = [0,1,0,3,2,3]
Output: 4
Example 3:
Input: nums = [7,7,7,7,7,7,7]
Output: 1

Constraints:
1 <= nums.length <= 2500
-10^4 <= nums[i] <= 10^4

Follow up:
Could you come up with the O(n^2) solution?
Could you improve it to O(n log(n)) time complexity?

```

## Solution

1. `dp[j]=Math.max(dp[j],dp[k]+1)` 其中 `nums[k]<nums[j],0<=k<j` 复杂度 `O(n^2)`
2. 复杂度 达到 O(nlog(n)) 可以考虑优化查找 `dp[k]+1` 逻辑 实际上 dp[k] 满足一定范围内的递增 考虑 二分查找法 定满足条件的 最大的 `dp[k]+1`

[SourceCode](./solution.js)
