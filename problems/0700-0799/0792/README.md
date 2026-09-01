# [792] Number of Matching Subsequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-matching-subsequences/description/)

* algorithms
* Medium (50.61%)
* Likes:    5816
* Dislikes: 249
* Testcase Example:  '"abcde"\n["a","bb","acd","ace"]'

```md
Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.
A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, 'ace' is a subsequence of 'abcde'.


Example 1:

Input: s = 'abcde', words = ['a','bb','acd','ace']
Output: 3
Explanation: There are three strings in words that are a subsequence of s: 'a', 'acd', 'ace'.

Example 2:

Input: s = 'dsahjpjauf', words = ['ahjpjau','ja','ahbwzgqnuk','tnmlanowax']
Output: 2


Constraints:

1 <= s.length <= 5 * 104
1 <= words.length <= 5000
1 <= words[i].length <= 50
s and words[i] consist of only lowercase English letters.


```

## 题目翻译

给定字符串 s 和字符串数组 words，返回 words 中是 s 子序列的字符串个数。

## 解题思路

预处理 next[i][c]：s 中位置 i 之后字符 c 最早出现的位置。对每个 word，用指针从 -1 开始，依次查 next[pos][char] 判断能否匹配。用 Map 缓存相同 word 的结果避免重复计算。

## Solution

[SourceCode](./solution.js)
