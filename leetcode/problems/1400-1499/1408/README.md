# [1408] String Matching in an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/string-matching-in-an-array/description/)

* algorithms
* Easy (69.76%)
* Likes:    1503
* Dislikes: 131
* Testcase Example:  '["mass","as","hero","superhero"]'

```md
Given an array of string words, return all strings in words that are a substring of another word. You can return the answer in any order.

Example 1:

Input: words = ['mass','as','hero','superhero']
Output: ['as','hero']
Explanation: 'as' is substring of 'mass' and 'hero' is substring of 'superhero'.
['hero','as'] is also a valid answer.

Example 2:

Input: words = ['leetcode','et','code']
Output: ['et','code']
Explanation: 'et', 'code' are substring of 'leetcode'.

Example 3:

Input: words = ['blue','green','bu']
Output: []
Explanation: No string of words is substring of another string.


Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 30
words[i] contains only lowercase English letters.
All the strings of words are unique.


```

## 中文翻译

给定字符串数组 words，返回所有是其他字符串子串的字符串。

## 解题思路

按长度排序，对每个短字符串，检查是否是某个更长字符串的子串。用 includes 即可。

## Solution

[SourceCode](./solution.js)
