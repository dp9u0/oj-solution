# [3713] Longest Balanced Substring I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-balanced-substring-i/description/)

* algorithms
* Medium (69.69%)
* Likes:    419
* Dislikes: 35
* Testcase Example:  '"abbac"'

```md
You are given a string s consisting of lowercase English letters.
A substring of s is called balanced if all distinct characters in the substring appear the same number of times.
Return the length of the longest balanced substring of s.

Example 1:

Input: s = 'abbac'
Output: 4
Explanation:
The longest balanced substring is 'abba' because both distinct characters &#39;a&#39; and &#39;b&#39; each appear exactly 2 times.

Example 2:

Input: s = 'zzabccy'
Output: 4
Explanation:
The longest balanced substring is 'zabc' because the distinct characters &#39;z&#39;, &#39;a&#39;, &#39;b&#39;, and &#39;c&#39; each appear exactly 1 time.​​​​​​​

Example 3:

Input: s = 'aba'
Output: 2
Explanation:
​​​​​​​One of the longest balanced substrings is 'ab' because both distinct characters &#39;a&#39; and &#39;b&#39; each appear exactly 1 time. Another longest balanced substring is 'ba'.


Constraints:

1 <= s.length <= 1000
s consists of lowercase English letters.


```

## 中文翻译

给定小写字母字符串 s，平衡子串定义为其所有不同字符出现次数相同。返回最长平衡子串的长度。

## 解题思路

枚举 + 滑窗。最多 26 种字符，枚举目标不同字符数 k（1 到 26），用滑窗维护恰好有 k 种字符且每种出现次数相同的子串。维护 count Map、满足条件的字符数 valid。当 distinct > k 时收缩左边界。

## Solution

[SourceCode](./solution.js)
