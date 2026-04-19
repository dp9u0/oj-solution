# [3714] Longest Balanced Substring II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-balanced-substring-ii/description/)

* algorithms
* Medium (41.97%)
* Likes:    572
* Dislikes: 136
* Testcase Example:  '"abbac"'

```md
You are given a string s consisting only of the characters &#39;a&#39;, &#39;b&#39;, and &#39;c&#39;.
A substring of s is called balanced if all distinct characters in the substring appear the same number of times.
Return the length of the longest balanced substring of s.

Example 1:

Input: s = 'abbac'
Output: 4
Explanation:
The longest balanced substring is 'abba' because both distinct characters &#39;a&#39; and &#39;b&#39; each appear exactly 2 times.

Example 2:

Input: s = 'aabcc'
Output: 3
Explanation:
The longest balanced substring is 'abc' because all distinct characters &#39;a&#39;, &#39;b&#39; and &#39;c&#39; each appear exactly 1 time.

Example 3:

Input: s = 'aba'
Output: 2
Explanation:
One of the longest balanced substrings is 'ab' because both distinct characters &#39;a&#39; and &#39;b&#39; each appear exactly 1 time. Another longest balanced substring is 'ba'.


Constraints:

1 <= s.length <= 105
s contains only the characters &#39;a&#39;, &#39;b&#39;, and &#39;c&#39;.


```

## 翻译

给定仅含a、b、c的字符串s，求最长平衡子串（所有出现的不同字符出现次数相同）的长度。

## 解题思路

分情况处理：单字符最长连续串；两字符平衡用前缀差+哈希（diff_x_y相同且排除字符前缀和相同）；三字符平衡用两个前缀差做key。三种取最大。

## Solution

[SourceCode](./solution.js)
