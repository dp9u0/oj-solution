# [1641] Count Sorted Vowel Strings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-sorted-vowel-strings/description/)

* algorithms
* Medium (79.20%)
* Likes:    3933
* Dislikes: 93
* Testcase Example:  '1'

```md
Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted.
A string s is lexicographically sorted if for all valid i, s[i] is the same as or comes before s[i+1] in the alphabet.

Example 1:

Input: n = 1
Output: 5
Explanation: The 5 sorted strings that consist of vowels only are ['a','e','i','o','u'].

Example 2:

Input: n = 2
Output: 15
Explanation: The 15 sorted strings that consist of vowels only are
['aa','ae','ai','ao','au','ee','ei','eo','eu','ii','io','iu','oo','ou','uu'].
Note that 'ea' is not a valid string since &#39;e&#39; comes after &#39;a&#39; in the alphabet.

Example 3:

Input: n = 33
Output: 66045


Constraints:

1 <= n <= 50


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个整数 n，返回长度为 n 的、仅由元音字母 (a, e, i, o, u) 组成且按字典序排列的字符串数量。

字典序排列意味着字符串中每个字符 s[i] 都不大于 s[i+1]。

## Approach

这是一个经典的组合数学问题。由于字符串必须按字典序排列（非递减），问题等价于：从 5 种元音中有重复地选取 n 个位置，即"隔板法"（Stars and Bars）。

公式为 C(n+4, 4) = (n+1)(n+2)(n+3)(n+4) / 24

验证：
- n=1: C(5,4) = 5 ✓
- n=2: C(6,4) = 15 ✓
- n=33: C(37,4) = 66045 ✓

时间复杂度 O(1)，空间复杂度 O(1)。
