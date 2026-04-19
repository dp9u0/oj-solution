# [2414] Length of the Longest Alphabetical Continuous Substring

## Description

[LeetCode Problem Description](https://leetcode.com/problems/length-of-the-longest-alphabetical-continuous-substring/description/)

* algorithms
* Medium (60.50%)
* Likes:    553
* Dislikes: 38
* Testcase Example:  '"abacaba"'

```md
An alphabetical continuous string is a string consisting of consecutive letters in the alphabet. In other words, it is any substring of the string 'abcdefghijklmnopqrstuvwxyz'.

For example, 'abc' is an alphabetical continuous string, while 'acb' and 'za' are not.

Given a string s consisting of lowercase letters only, return the length of the longest alphabetical continuous substring.

Example 1:

Input: s = 'abacaba'
Output: 2
Explanation: There are 4 distinct continuous substrings: 'a', 'b', 'c' and 'ab'.
'ab' is the longest continuous substring.

Example 2:

Input: s = 'abcde'
Output: 5
Explanation: 'abcde' is the longest continuous substring.


Constraints:

1 <= s.length <= 105
s consists of only English lowercase letters.


```

## 翻译

给定小写字母字符串，求最长字母连续子串的长度（即子串中每个字符是前一个字符的下一个字母）。

## Approach

遍历字符串，维护当前连续长度。如果当前字符是前一个字符的下一个字母（charCode 差 1），则长度 +1，否则重置为 1。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
