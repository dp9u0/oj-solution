# [940] Distinct Subsequences II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/distinct-subsequences-ii/description/)

* algorithms
* Hard (44.10%)
* Likes:    1833
* Dislikes: 40
* Testcase Example:  '"abc"'

```md
Given a string s, return the number of distinct non-empty subsequences of s. Since the answer may be very large, return it modulo 109 + 7.
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., 'ace' is a subsequence of 'abcde' while 'aec' is not.

Example 1:

Input: s = 'abc'
Output: 7
Explanation: The 7 distinct subsequences are 'a', 'b', 'c', 'ab', 'ac', 'bc', and 'abc'.

Example 2:

Input: s = 'aba'
Output: 6
Explanation: The 6 distinct subsequences are 'a', 'b', 'ab', 'aa', 'ba', and 'aba'.

Example 3:

Input: s = 'aaa'
Output: 3
Explanation: The 3 distinct subsequences are 'a', 'aa' and 'aaa'.


Constraints:

1 <= s.length <= 2000
s consists of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定字符串 s，返回 s 的不同非空子序列数量，结果对 10^9+7 取模。

## 解题思路

DP。维护当前所有不同子序列的总数 total。遍历 s，对于字符 c：
- 新增的子序列数 = total（在所有已有子序列后追加 c）+ 1（单独 c）
- 但要减去上次遇到 c 时已经计算的子序列数（去重）
- 用 last[c] 记录每个字符上次新增的子序列数
