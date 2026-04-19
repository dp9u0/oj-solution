# [3303] Find the Occurrence of First Almost Equal Substring

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-occurrence-of-first-almost-equal-substring/description/)

* algorithms
* Hard (15.45%)
* Likes:    75
* Dislikes: 9
* Testcase Example:  '"abcdefg"\n"bcdffg"'

```md
You are given two strings s and pattern.
A string x is called almost equal to y if you can change at most one character in x to make it identical to y.
Return the smallest starting index of a substring in s that is almost equal to pattern. If no such index exists, return -1.
A substring is a contiguous non-empty sequence of characters within a string.

Example 1:

Input: s = 'abcdefg', pattern = 'bcdffg'
Output: 1
Explanation:
The substring s[1..6] == 'bcdefg' can be converted to 'bcdffg' by changing s[4] to 'f'.

Example 2:

Input: s = 'ababbababa', pattern = 'bacaba'
Output: 4
Explanation:
The substring s[4..9] == 'bababa' can be converted to 'bacaba' by changing s[6] to 'c'.

Example 3:

Input: s = 'abcd', pattern = 'dba'
Output: -1

Example 4:

Input: s = 'dde', pattern = 'd'
Output: 0


Constraints:

1 <= pattern.length < s.length <= 105
s and pattern consist only of lowercase English letters.


Follow-up: Could you solve the problem if at most k consecutive characters can be changed?

```

## 翻译

给定 s 和 pattern，找 s 中最小起始下标 i，使得 s[i..i+m-1] 与 pattern 最多差一个字符。

## 解题思路

正反 Z-function。前向 Z 给出 s[i..] 与 pattern 的最长公共前缀；反向 Z（对 reverse 串求）给出最长公共后缀。若 prefix+suffix >= m-1 则最多一个失配，返回 i。O(n+m)。

## Solution

[SourceCode](./solution.js)
