# [3202] Find the Maximum Length of Valid Subsequence II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-ii/description/)

* algorithms
* Medium (57.19%)
* Likes:    651
* Dislikes: 54
* Testcase Example:  '[1,2,3,4,5]\n2'

```md
You are given an integer array nums and a positive integer k.
A subsequence sub of nums with length x is called valid if it satisfies:

(sub[0] + sub[1]) % k == (sub[1] + sub[2]) % k == ... == (sub[x - 2] + sub[x - 1]) % k.

Return the length of the longest valid subsequence of nums.

Example 1:

Input: nums = [1,2,3,4,5], k = 2
Output: 5
Explanation:
The longest valid subsequence is [1, 2, 3, 4, 5].

Example 2:

Input: nums = [1,4,2,3,1,4], k = 3
Output: 4
Explanation:
The longest valid subsequence is [1, 4, 1, 4].


Constraints:

2 <= nums.length <= 103
1 <= nums[i] <= 107
1 <= k <= 103


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数数组 nums 和正整数 k。子序列 sub 合法当且仅当相邻元素之和 mod k 都相等，即 (sub[i] + sub[i+1]) % k 恒为某个常数。返回最长合法子序列的长度。

## Approach

设相邻和 mod k 的目标值为 r。对于合法子序列，如果 sub[i] % k = a，则 sub[i+1] % k = (r - a + k) % k。因此子序列的每个元素 mod k 值在两个值之间交替。

枚举所有可能的余数 r (0..k-1)，用 dp[r][a] 表示以余数 a 结尾、目标和为 r 的最长子序列长度。遍历 nums，对于每个 num 计算余数 a = num % k，更新 dp[r][(r-a+k)%k] + 1。

时间复杂度 O(n * k)，空间 O(k^2)。
