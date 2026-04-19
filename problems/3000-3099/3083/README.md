# [3083] Existence of a Substring in a String and Its Reverse

## Description

[LeetCode Problem Description](https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/description/)

* algorithms
* Easy (66.45%)
* Likes:    112
* Dislikes: 1
* Testcase Example:  '"leetcode"'

```md
Given a string s, find any substring of length 2 which is also present in the reverse of s.
Return true if such a substring exists, and false otherwise.

Example 1:

Input: s = 'leetcode'
Output: true
Explanation: Substring 'ee' is of length 2 which is also present in reverse(s) == 'edocteel'.

Example 2:

Input: s = 'abcba'
Output: true
Explanation: All of the substrings of length 2 'ab', 'bc', 'cb', 'ba' are also present in reverse(s) == 'abcba'.

Example 3:

Input: s = 'abcd'
Output: false
Explanation: There is no substring of length 2 in s, which is also present in the reverse of s.


Constraints:

1 <= s.length <= 100
s consists only of lowercase English letters.


```

## 题目翻译

给定字符串s，判断是否存在长度为2的子串同时出现在s的反转字符串中。

## 解题思路

收集s中所有长度2子串，检查s的反转中是否包含任意一个。用Set存储反转串的长度2子串，遍历s的子串查找。

## Solution

[SourceCode](./solution.js)
