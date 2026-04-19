# [2185] Counting Words With a Given Prefix

## Description

[LeetCode Problem Description](https://leetcode.com/problems/counting-words-with-a-given-prefix/description/)

* algorithms
* Easy (84.43%)
* Likes:    1131
* Dislikes: 38
* Testcase Example:  '["pay","attention","practice","attend"]\n"at"'

```md
You are given an array of strings words and a string pref.
Return the number of strings in words that contain pref as a prefix.
A prefix of a string s is any leading contiguous substring of s.

Example 1:

Input: words = ['pay','attention','practice','attend'], pref = 'at'
Output: 2
Explanation: The 2 strings that contain 'at' as a prefix are: 'attention' and 'attend'.

Example 2:

Input: words = ['leetcode','win','loops','success'], pref = 'code'
Output: 0
Explanation: There are no strings that contain 'code' as a prefix.


Constraints:

1 <= words.length <= 100
1 <= words[i].length, pref.length <= 100
words[i] and pref consist of lowercase English letters.


```

## 题目翻译

给定一个字符串数组 `words` 和一个字符串 `pref`，返回 `words` 中以 `pref` 为前缀的字符串个数。

前缀是指字符串的任意前导连续子串。

## 解题思路

遍历 words，使用 `startsWith` 判断每个单词是否以 pref 开头，计数即可。

## Solution

[SourceCode](./solution.js)
