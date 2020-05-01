# [132] Palindrome Partitioning II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/palindrome-partitioning-ii/description/)

* algorithms
* Hard (29.64%)
* Testcase Example:  '"aab"'

```md
Given a string s, partition s such that every substring of the partition is a palindrome.
Return the minimum cuts needed for a palindrome partitioning of s.
Example:
Input: "aab"
Output: 1
Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.

```

## Solution

dp 问题
ispal 记录 `s.slice(i,j+1)` 是否是回文

[SourceCode](./solution.js)
