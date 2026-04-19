# [1143] Longest Common Subsequence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-common-subsequence/description/)

* algorithms
* Medium (59.04%)
* Likes:    15079
* Dislikes: 250
* Testcase Example:  '"abcde"\n"ace"'

```md
Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.
A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, 'ace' is a subsequence of 'abcde'.

A common subsequence of two strings is a subsequence that is common to both strings.

Example 1:

Input: text1 = 'abcde', text2 = 'ace'
Output: 3
Explanation: The longest common subsequence is 'ace' and its length is 3.

Example 2:

Input: text1 = 'abc', text2 = 'abc'
Output: 3
Explanation: The longest common subsequence is 'abc' and its length is 3.

Example 3:

Input: text1 = 'abc', text2 = 'def'
Output: 0
Explanation: There is no such common subsequence, so the result is 0.


Constraints:

1 <= text1.length, text2.length <= 1000
text1 and text2 consist of only lowercase English characters.


```

## 翻译

给定两个字符串，返回最长公共子序列的长度。

## Approach

经典 DP。dp[i][j] 表示 text1 前 i 个字符与 text2 前 j 个字符的 LCS 长度。若 text1[i-1]==text2[j-1] 则 dp[i][j]=dp[i-1][j-1]+1，否则 dp[i][j]=max(dp[i-1][j], dp[i][j-1])。用一维数组滚动优化空间。

## Solution

[SourceCode](./solution.js)
