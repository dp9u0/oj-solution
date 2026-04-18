# [2014] Longest Subsequence Repeated k Times

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-subsequence-repeated-k-times/description/)

* algorithms
* Hard (71.23%)
* Likes:    826
* Dislikes: 117
* Testcase Example:  '"letsleetcode"\n2'

```md
You are given a string s of length n, and an integer k. You are tasked to find the longest subsequence repeated k times in string s.
A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.
A subsequence seq is repeated k times in the string s if seq * k is a subsequence of s, where seq * k represents a string constructed by concatenating seq k times.

For example, 'bba' is repeated 2 times in the string 'bababcba', because the string 'bbabba', constructed by concatenating 'bba' 2 times, is a subsequence of the string 'bababcba'.

Return the longest subsequence repeated k times in string s. If multiple such subsequences are found, return the lexicographically largest one. If there is no such subsequence, return an empty string.

Example 1:


Input: s = 'letsleetcode', k = 2
Output: 'let'
Explanation: There are two longest subsequences repeated 2 times: 'let' and 'ete'.
'let' is the lexicographically largest one.

Example 2:

Input: s = 'bb', k = 2
Output: 'b'
Explanation: The longest subsequence repeated 2 times is 'b'.

Example 3:

Input: s = 'ab', k = 2
Output: ''
Explanation: There is no subsequence repeated 2 times. Empty string is returned.


Constraints:

n == s.length
2 <= k <= 2000
2 <= n < min(2001, k * 8)
s consists of lowercase English letters.


```

## 翻译

给定字符串 s 和整数 k，求最长子序列 seq 使得 seq 重复 k 次后是 s 的子序列。若有多个，返回字典序最大的。

## 解题思路

n < k*8，故答案长度 <= 7。预处理 nextPos 数组加速子序列匹配。从长到短枚举长度 L，用 DFS+回溯贪心构造字典序最大的子序列：每层从 'z' 到 'a' 尝试，用 nextPos 匹配 prefix*k，配合剩余空间剪枝。

## Solution

[SourceCode](./solution.js)
