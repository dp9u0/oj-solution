# [1446] Consecutive Characters

## Description

[LeetCode Problem Description](https://leetcode.com/problems/consecutive-characters/description/)

* algorithms
* Easy (60.34%)
* Likes:    1856
* Dislikes: 35
* Testcase Example:  '"leetcode"'

```md
The power of the string is the maximum length of a non-empty substring that contains only one unique character.
Given a string s, return the power of s.

Example 1:

Input: s = 'leetcode'
Output: 2
Explanation: The substring 'ee' is of length 2 with the character &#39;e&#39; only.

Example 2:

Input: s = 'abbcccddddeeeeedcba'
Output: 5
Explanation: The substring 'eeeee' is of length 5 with the character &#39;e&#39; only.


Constraints:

1 <= s.length <= 500
s consists of only lowercase English letters.


```

## 题目翻译

字符串的"能量"定义为最长的只含一种字符的非空子串长度。返回字符串 s 的能量值。

## 解题思路

一次遍历，统计连续相同字符的长度，取最大值。

## Solution

[SourceCode](./solution.js)
