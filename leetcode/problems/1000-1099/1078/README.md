# [1078] Occurrences After Bigram

## Description

[LeetCode Problem Description](https://leetcode.com/problems/occurrences-after-bigram/description/)

* algorithms
* Easy (63.85%)
* Likes:    531
* Dislikes: 371
* Testcase Example:  '"alice is a good girl she is a good student"\n"a"\n"good"'

```md
Given two strings first and second, consider occurrences in some text of the form 'first second third', where second comes immediately after first, and third comes immediately after second.
Return an array of all the words third for each occurrence of 'first second third'.

Example 1:
Input: text = "alice is a good girl she is a good student", first = "a", second = "good"
Output: ["girl","student"]
Example 2:
Input: text = "we will we will rock you", first = "we", second = "will"
Output: ["we","rock"]


Constraints:

1 <= text.length <= 1000
text consists of lowercase English letters and spaces.
All the words in text are separated by a single space.
1 <= first.length, second.length <= 10
first and second consist of lowercase English letters.
text will not have any leading or trailing spaces.


```

## 翻译

给定text和两个词first、second，找出所有"first second third"模式中third的词。

## 解题思路

分割单词，遍历检查连续三个词是否匹配first和second。

## Solution

[SourceCode](./solution.js)
