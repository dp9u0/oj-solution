# [516] Longest Palindromic Subsequence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-palindromic-subsequence/description/)

* algorithms
* Medium (65.27%)
* Likes:    10379
* Dislikes: 345
* Testcase Example:  '"bbbab"'

```md
Given a string s, find the longest palindromic subsequence&#39;s length in s.
A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.

Example 1:

Input: s = 'bbbab'
Output: 4
Explanation: One possible longest palindromic subsequence is 'bbbb'.

Example 2:

Input: s = 'cbbd'
Output: 2
Explanation: One possible longest palindromic subsequence is 'bb'.


Constraints:

1 <= s.length <= 1000
s consists only of lowercase English letters.


```

## 翻译

给定字符串 s，找出其中最长回文子序列的长度。子序列可以通过删除某些字符（不改变剩余字符顺序）得到。

## Approach

经典区间 DP。dp[i][j] = s[i..j] 中最长回文子序列的长度。

转移方程：
- 若 s[i] == s[j]：dp[i][j] = dp[i+1][j-1] + 2
- 若 s[i] != s[j]：dp[i][j] = max(dp[i+1][j], dp[i][j-1])
- 边界：dp[i][i] = 1

使用滚动数组优化空间到 O(n)。

时间复杂度 O(n²)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
