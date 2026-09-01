# [214] Shortest Palindrome

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shortest-palindrome/description/)

* algorithms
* Hard (29.27%)
* Testcase Example:  '"aacecaaa"'

```md
Given a string s, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.
Example 1:
Input: "aacecaaa"
Output: "aaacecaaa"
Example 2:
Input: "abcd"
Output: "dcbabcd"

```

## Solution

思路类似于 kmp 算法, 构建 lookup table 跳过已经对比过的字符

[SourceCode](./solution.js)
