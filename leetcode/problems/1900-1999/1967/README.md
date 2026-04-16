# [1967] Number of Strings That Appear as Substrings in Word

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/description/)

* algorithms
* Easy (82.48%)
* Likes:    759
* Dislikes: 43
* Testcase Example:  '["a","abc","bc","d"]\n"abc"'

```md
Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.
A substring is a contiguous sequence of characters within a string.

Example 1:

Input: patterns = ['a','abc','bc','d'], word = 'abc'
Output: 3
Explanation:
- 'a' appears as a substring in 'abc'.
- 'abc' appears as a substring in 'abc'.
- 'bc' appears as a substring in 'abc'.
- 'd' does not appear as a substring in 'abc'.
3 of the strings in patterns appear as a substring in word.

Example 2:

Input: patterns = ['a','b','c'], word = 'aaaaabbbbb'
Output: 2
Explanation:
- 'a' appears as a substring in 'aaaaabbbbb'.
- 'b' appears as a substring in 'aaaaabbbbb'.
- 'c' does not appear as a substring in 'aaaaabbbbb'.
2 of the strings in patterns appear as a substring in word.

Example 3:

Input: patterns = ['a','a','a'], word = 'ab'
Output: 3
Explanation: Each of the patterns appears as a substring in word 'ab'.


Constraints:

1 <= patterns.length <= 100
1 <= patterns[i].length <= 100
1 <= word.length <= 100
patterns[i] and word consist of lowercase English letters.


```

## 翻译

给定字符串数组 patterns 和字符串 word，返回 patterns 中有多少个字符串是 word 的子串。

## 解题思路

直接遍历 patterns，用 includes 检查每个 pattern 是否是 word 的子串。

## Solution

[SourceCode](./solution.js)
