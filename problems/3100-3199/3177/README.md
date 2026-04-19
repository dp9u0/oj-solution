# [3177] Find the Maximum Length of a Good Subsequence II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-ii/description/)

* algorithms
* Hard (25.17%)
* Likes:    142
* Dislikes: 10
* Testcase Example:  '[1,2,1,1,3]\n2'

```md
You are given an integer array nums and a non-negative integer k. A sequence of integers seq is called good if there are at most k indices i in the range [0, seq.length - 2] such that seq[i] != seq[i + 1].
Return the maximum possible length of a good subsequence of nums.

Example 1:

Input: nums = [1,2,1,1,3], k = 2
Output: 4
Explanation:
The maximum length subsequence is [1,2,1,1,3].

Example 2:

Input: nums = [1,2,3,4,5,1], k = 0
Output: 2
Explanation:
The maximum length subsequence is [1,2,3,4,5,1].


Constraints:

1 <= nums.length <= 5 * 103
1 <= nums[i] <= 109
0 <= k <= min(50, nums.length)


```

## 翻译

给定数组 nums 和非负整数 k。一个好子序列是指相邻元素不同的位置不超过 k 个。求最长的"好"子序列长度。

## 解题思路

DP。dp[v][j] 表示以值 v 结尾、已使用 j 次变化的子序列最大长度。转移：对每个 nums[i]，可以接在相同值 v 后面（不消耗变化），也可以接在不同值后面（消耗一次变化）。用全局最优来优化：维护 top[j] = 所有 dp[·][j] 的最大值。转移时：dp[v][j] = max(dp[v][j] + 1, top[j-1] + 1)（前者同值延续，后者异值切换）。O(nk)。

## Solution

[SourceCode](./solution.js)
