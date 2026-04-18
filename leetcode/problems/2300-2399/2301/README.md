# [2301] Match Substring After Replacement

## Description

[LeetCode Problem Description](https://leetcode.com/problems/match-substring-after-replacement/description/)

* algorithms
* Hard (43.27%)
* Likes:    394
* Dislikes: 81
* Testcase Example:  '"fool3e7bar"\n"leet"\n[["e","3"],["t","7"],["t","8"]]'

```md
You are given two strings s and sub. You are also given a 2D character array mappings where mappings[i] = [oldi, newi] indicates that you may perform the following operation any number of times:

Replace a character oldi of sub with newi.

Each character in sub cannot be replaced more than once.
Return true if it is possible to make sub a substring of s by replacing zero or more characters according to mappings. Otherwise, return false.
A substring is a contiguous non-empty sequence of characters within a string.

Example 1:

Input: s = 'fool3e7bar', sub = 'leet', mappings = [['e','3'],['t','7'],['t','8']]
Output: true
Explanation: Replace the first &#39;e&#39; in sub with &#39;3&#39; and &#39;t&#39; in sub with &#39;7&#39;.
Now sub = 'l3e7' is a substring of s, so we return true.
Example 2:

Input: s = 'fooleetbar', sub = 'f00l', mappings = [['o','0']]
Output: false
Explanation: The string 'f00l' is not a substring of s and no replacements can be made.
Note that we cannot replace &#39;0&#39; with &#39;o&#39;.

Example 3:

Input: s = 'Fool33tbaR', sub = 'leetd', mappings = [['e','3'],['t','7'],['t','8'],['d','b'],['p','b']]
Output: true
Explanation: Replace the first and second &#39;e&#39; in sub with &#39;3&#39; and &#39;d&#39; in sub with &#39;b&#39;.
Now sub = 'l33tb' is a substring of s, so we return true.


Constraints:

1 <= sub.length <= s.length <= 5000
0 <= mappings.length <= 1000
mappings[i].length == 2
oldi != newi
s and sub consist of uppercase and lowercase English letters and digits.
oldi and newi are either uppercase or lowercase English letters or digits.


```

## 题目翻译

给定字符串s、sub和映射mappings。可用mappings将sub中字符替换（每个字符最多替换一次）。判断是否能通过替换使sub成为s的子串。

## 解题思路

对每个s中长度等于sub的起始位置，逐一比较sub[j]与s[i+j]。若相等则OK，否则检查是否存在mapping将sub[j]映射为s[i+j]。用Set或Map预处理mappings加速查找。

## Solution

[SourceCode](./solution.js)
