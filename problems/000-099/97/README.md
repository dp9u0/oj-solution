# [97] Interleaving String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/interleaving-string/description/)

* algorithms
* Hard (30.56%)
* Testcase Example:  '"aabcc"\n"dbbca"\n"aadbbcbcac"'

```md
Given s1, s2, s3, find whether s3 is formed by the interleaving of s1 and s2.
Example 1:
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true
Example 2:
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false

```

## Solution

考虑 s1 s2 的某个前缀能否形成 s3的前缀 动态规划

[SourceCode](./solution.js)
