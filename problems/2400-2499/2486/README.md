# [2486] Append Characters to String to Make Subsequence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/description/)

* algorithms
* Medium (73.02%)
* Likes:    1194
* Dislikes: 90
* Testcase Example:  '"coaching"\n"coding"'

```md
You are given two strings s and t consisting of only lowercase English letters.
Return the minimum number of characters that need to be appended to the end of s so that t becomes a subsequence of s.
A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.

Example 1:

Input: s = 'coaching', t = 'coding'
Output: 4
Explanation: Append the characters 'ding' to the end of s so that s = 'coachingding'.
Now, t is a subsequence of s ('coachingding').
It can be shown that appending any 3 characters to the end of s will never make t a subsequence.

Example 2:

Input: s = 'abcde', t = 'a'
Output: 0
Explanation: t is already a subsequence of s ('abcde').

Example 3:

Input: s = 'z', t = 'abcde'
Output: 5
Explanation: Append the characters 'abcde' to the end of s so that s = 'zabcde'.
Now, t is a subsequence of s ('zabcde').
It can be shown that appending any 4 characters to the end of s will never make t a subsequence.


Constraints:

1 <= s.length, t.length <= 105
s and t consist only of lowercase English letters.


```

## 翻译

给定字符串 s 和 t，求最少需要在 s 末尾追加多少字符使 t 成为 s 的子序列。

## Approach

双指针贪心匹配：在 s 中尽量匹配 t 的前缀。匹配了多少字符，t 剩下的字符数就是答案。

时间复杂度 O(n+m)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
