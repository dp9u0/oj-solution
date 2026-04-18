# [3295] Report Spam Message

## Description

[LeetCode Problem Description](https://leetcode.com/problems/report-spam-message/description/)

* algorithms
* Medium (48.59%)
* Likes:    100
* Dislikes: 25
* Testcase Example:  '["hello","world","leetcode"]\n["world","hello"]'

```md
You are given an array of strings message and an array of strings bannedWords.
An array of words is considered spam if there are at least two words in it that exactly match any word in bannedWords.
Return true if the array message is spam, and false otherwise.

Example 1:

Input: message = ['hello','world','leetcode'], bannedWords = ['world','hello']
Output: true
Explanation:
The words 'hello' and 'world' from the message array both appear in the bannedWords array.

Example 2:

Input: message = ['hello','programming','fun'], bannedWords = ['world','programming','leetcode']
Output: false
Explanation:
Only one word from the message array ('programming') appears in the bannedWords array.


Constraints:

1 <= message.length, bannedWords.length <= 105
1 <= message[i].length, bannedWords[i].length <= 15
message[i] and bannedWords[i] consist only of lowercase English letters.


```

## 翻译

给定消息数组和禁用词数组，消息中至少2个词在禁用词中出现则为垃圾信息。

## 解题思路

Set存禁用词，遍历消息计数匹配数，>=2返回true。

## Solution

[SourceCode](./solution.js)
