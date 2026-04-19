# [3844] Longest Almost-Palindromic Substring

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-almost-palindromic-substring/description/)

* algorithms
* Medium (22.36%)
* Likes:    146
* Dislikes: 12
* Testcase Example:  '"abca"'

```md
You are given a string s consisting of lowercase English letters.
A substring is almost-palindromic if it becomes a palindrome after removing exactly one character from it.
Return an integer denoting the length of the longest almost-palindromic substring in s.

Example 1:

Input: s = 'abca'
Output: 4
Explanation:
Choose the substring 'abca'.

Remove 'abca'.
The string becomes 'aba', which is a palindrome.
Therefore, 'abca' is almost-palindromic.


Example 2:

Input: s = 'abba'
Output: 4
Explanation:
Choose the substring 'abba'.

Remove 'abba'.
The string becomes 'aba', which is a palindrome.
Therefore, 'abba' is almost-palindromic.


Example 3:

Input: s = 'zzabba'
Output: 5
Explanation:
Choose the substring 'zzabba'.

Remove 'zabba'.
The string becomes 'abba', which is a palindrome.
Therefore, 'zabba' is almost-palindromic.



Constraints:

2 <= s.length <= 2500
s consists of only lowercase English letters.


```

## 题目翻译

给定小写字母字符串 s，求最长子串使其在删除恰好一个字符后成为回文串。

## 解题思路

**区间 DP**

设 dp[l][r] = 使 s[l..r] 成为回文的最少删除次数。

- s[l]==s[r]: dp[l][r] = dp[l+1][r-1]（长度 ≤ 2 时为 0）
- s[l]!=s[r]: dp[l][r] = 1 + min(dp[l+1][r], dp[l][r-1])

子串 almost-palindromic 当且仅当 dp[l][r] ≤ 1（dp=0 的回文串长度 ≥ 2 时，删去中间字符仍为回文）。按长度递增枚举，O(n^2) 时空复杂度。

## Solution

[SourceCode](./solution.js)
