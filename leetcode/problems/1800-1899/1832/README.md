# [1832] Check if the Sentence Is Pangram

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-the-sentence-is-pangram/description/)

* algorithms
* Easy (84.16%)
* Likes:    3029
* Dislikes: 67
* Testcase Example:  '"thequickbrownfoxjumpsoverthelazydog"'

```md
A pangram is a sentence where every letter of the English alphabet appears at least once.
Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.

Example 1:

Input: sentence = 'thequickbrownfoxjumpsoverthelazydog'
Output: true
Explanation: sentence contains at least one of every letter of the English alphabet.

Example 2:

Input: sentence = 'leetcode'
Output: false


Constraints:

1 <= sentence.length <= 1000
sentence consists of lowercase English letters.


```

## 中文翻译

给定只含小写字母的字符串 sentence，判断它是否是全字母句（26个英文字母每个至少出现一次）。

## 解题思路

用 Set 统计不同字符数，等于26即为全字母句。

## Solution

[SourceCode](./solution.js)
