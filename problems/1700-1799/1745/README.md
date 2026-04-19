# [1745] Palindrome Partitioning IV

## Description

[LeetCode Problem Description](https://leetcode.com/problems/palindrome-partitioning-iv/description/)

* algorithms
* Hard (45.23%)
* Likes:    967
* Dislikes: 31
* Testcase Example:  '"abcbdd"'

```md
Given a string s, return true if it is possible to split the string s into three non-empty palindromic substrings. Otherwise, return false.​​​​​
A string is said to be palindrome if it the same string when reversed.

Example 1:

Input: s = 'abcbdd'
Output: true
Explanation: 'abcbdd' = 'a' + 'bcb' + 'dd', and all three substrings are palindromes.

Example 2:

Input: s = 'bcbddxy'
Output: false
Explanation: s cannot be split into 3 palindromes.


Constraints:

3 <= s.length <= 2000
s​​​​​​ consists only of lowercase English letters.


```

## 中文翻译

给定字符串 s，判断是否能将其分成三个非空回文子串。

## 解题思路

先用区间 DP 预处理所有子串是否为回文（isPal[i][j]），然后枚举两个分割点 i、j，检查三段是否都是回文。

时间复杂度：O(n^2)，空间复杂度：O(n^2)

## Solution

[SourceCode](./solution.js)
