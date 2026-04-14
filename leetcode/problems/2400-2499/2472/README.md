# [2472] Maximum Number of Non-overlapping Palindrome Substrings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings/description/)

* algorithms
* Hard (44.53%)
* Likes:    512
* Dislikes: 11
* Testcase Example:  '"abaccdbbd"\n3'

```md
You are given a string s and a positive integer k.
Select a set of non-overlapping substrings from the string s that satisfy the following conditions:

The length of each substring is at least k.
Each substring is a palindrome.

Return the maximum number of substrings in an optimal selection.
A substring is a contiguous sequence of characters within a string.

Example 1:

Input: s = 'abaccdbbd', k = 3
Output: 2
Explanation: We can select the substrings underlined in s = 'abaccdbbd'. Both 'aba' and 'dbbd' are palindromes and have a length of at least k = 3.
It can be shown that we cannot find a selection with more than two valid substrings.

Example 2:

Input: s = 'adbcda', k = 2
Output: 0
Explanation: There is no palindrome substring of length at least 2 in the string.


Constraints:

1 <= k <= s.length <= 2000
s consists of lowercase English letters.


```

## 题目翻译

给定字符串 s 和正整数 k，选择一组不重叠的子串，每个子串长度至少 k 且为回文串。返回最多可选子串数。

## 解题思路

**贪心**

只需检查长度为 k 和 k+1 的回文：若存在长度 ≥ k+2 的回文 s[i..j]，则内部 s[i+1..j-1] 长度 ≥ k 也为回文，会在下一位置被检测到。

从左到右扫描，对每个位置 i（在 lastEnd 之后），检查 s[i..i+k-1] 和 s[i..i+k] 是否为回文，找到就取。

## Solution

[SourceCode](./solution.js)
