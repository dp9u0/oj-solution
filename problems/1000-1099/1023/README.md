# [1023] Camelcase Matching

## Description

[LeetCode Problem Description](https://leetcode.com/problems/camelcase-matching/description/)

* algorithms
* Medium (65.19%)
* Likes:    985
* Dislikes: 350
* Testcase Example:  '["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"]\n"FB"'

```md
Given an array of strings queries and a string pattern, return a boolean array answer where answer[i] is true if queries[i] matches pattern, and false otherwise.
A query word queries[i] matches pattern if you can insert lowercase English letters into the pattern so that it equals the query. You may insert a character at any position in pattern or you may choose not to insert any characters at all.

Example 1:

Input: queries = ['FooBar','FooBarTest','FootBall','FrameBuffer','ForceFeedBack'], pattern = 'FB'
Output: [true,false,true,true,false]
Explanation: 'FooBar' can be generated like this 'F' + 'oo' + 'B' + 'ar'.
'FootBall' can be generated like this 'F' + 'oot' + 'B' + 'all'.
'FrameBuffer' can be generated like this 'F' + 'rame' + 'B' + 'uffer'.

Example 2:

Input: queries = ['FooBar','FooBarTest','FootBall','FrameBuffer','ForceFeedBack'], pattern = 'FoBa'
Output: [true,false,true,false,false]
Explanation: 'FooBar' can be generated like this 'Fo' + 'o' + 'Ba' + 'r'.
'FootBall' can be generated like this 'Fo' + 'ot' + 'Ba' + 'll'.

Example 3:

Input: queries = ['FooBar','FooBarTest','FootBall','FrameBuffer','ForceFeedBack'], pattern = 'FoBaT'
Output: [false,true,false,false,false]
Explanation: 'FooBarTest' can be generated like this 'Fo' + 'o' + 'Ba' + 'r' + 'T' + 'est'.


Constraints:

1 <= pattern.length, queries.length <= 100
1 <= queries[i].length <= 100
queries[i] and pattern consist of English letters.


```

## 中文翻译

给定字符串数组 queries 和模式串 pattern。query 匹配 pattern 是指可以在 pattern 中插入小写字母使其等于 query。返回每个 query 是否匹配。

## 解题思路

双指针匹配。对每个 query，用指针 j 遍历 pattern：若 query[i] === pattern[j] 则 j++；否则 query[i] 必须是小写字母。最后若 j 走完 pattern 则匹配成功。

## Solution

[SourceCode](./solution.js)
