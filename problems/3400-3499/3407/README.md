# [3407] Substring Matching Pattern

## Description

[LeetCode Problem Description](https://leetcode.com/problems/substring-matching-pattern/description/)

* algorithms
* Easy (28.57%)
* Likes:    119
* Dislikes: 53
* Testcase Example:  '"leetcode"\n"ee*e"'

```md
You are given a string s and a pattern string p, where p contains exactly one &#39;*&#39; character.
The &#39;*&#39; in p can be replaced with any sequence of zero or more characters.
Return true if p can be made a substring of s, and false otherwise.

Example 1:

Input: s = 'leetcode', p = 'ee*e'
Output: true
Explanation:
By replacing the &#39;*&#39; with 'tcod', the substring 'eetcode' matches the pattern.

Example 2:

Input: s = 'car', p = 'c*v'
Output: false
Explanation:
There is no substring matching the pattern.

Example 3:

Input: s = 'luck', p = 'u*'
Output: true
Explanation:
The substrings 'u', 'uc', and 'uck' match the pattern.


Constraints:

1 <= s.length <= 50
1 <= p.length <= 50
s contains only lowercase English letters.
p contains only lowercase English letters and exactly one &#39;*&#39;


```

## 中文翻译

给定字符串 s 和模式串 p（恰好含一个 '*'），'*' 可匹配任意字符序列。判断 p 能否匹配 s 的某个子串。

## 解题思路

将 p 按 '*' 分为前缀 pre 和后缀 suf。在 s 中找 pre 的最早出现位置，再在其后找 suf 的出现位置即可。

## Solution

[SourceCode](./solution.js)
