# [1392] Longest Happy Prefix

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-happy-prefix/description/)

* algorithms
* Hard (52.61%)
* Likes:    1589
* Dislikes: 48
* Testcase Example:  '"level"'

```md
A string is called a happy prefix if is a non-empty prefix which is also a suffix (excluding itself).
Given a string s, return the longest happy prefix of s. Return an empty string '' if no such prefix exists.

Example 1:

Input: s = 'level'
Output: 'l'
Explanation: s contains 4 prefix excluding itself ('l', 'le', 'lev', 'leve'), and suffix ('l', 'el', 'vel', 'evel'). The largest prefix which is also suffix is given by 'l'.

Example 2:

Input: s = 'ababab'
Output: 'abab'
Explanation: 'abab' is the largest prefix which is also suffix. They can overlap in the original string.


Constraints:

1 <= s.length <= 105
s contains only lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

一个字符串的"快乐前缀"是指既是非空前缀又是后缀（不包含自身）的子串。给定字符串 s，返回最长的快乐前缀。

## 解题思路

经典 KMP 前缀函数问题。π[i] 表示 s[0..i] 中最长公共前后缀长度。最终答案为 π[n-1]，即 s.substring(0, π[n-1])。

KMP 前缀函数：对每个位置 i，通过回退 j = π[j-1] 来匹配。时间复杂度 O(n)。
