# [1941] Check if All Characters Have Equal Number of Occurrences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/description/)

* algorithms
* Easy (79.43%)
* Likes:    1039
* Dislikes: 29
* Testcase Example:  '"abacbc"'

```md
Given a string s, return true if s is a good string, or false otherwise.
A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).

Example 1:

Input: s = 'abacbc'
Output: true
Explanation: The characters that appear in s are &#39;a&#39;, &#39;b&#39;, and &#39;c&#39;. All characters occur 2 times in s.

Example 2:

Input: s = 'aaabb'
Output: false
Explanation: The characters that appear in s are &#39;a&#39; and &#39;b&#39;.
&#39;a&#39; occurs 3 times while &#39;b&#39; occurs 2 times, which is not the same number of times.


Constraints:

1 <= s.length <= 1000
s consists of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定字符串 s，判断所有出现过的字符是否具有相同的出现频率。

## 解题思路

统计每个字符出现次数，用 Set 检查所有频率是否相同（Set size === 1）。
