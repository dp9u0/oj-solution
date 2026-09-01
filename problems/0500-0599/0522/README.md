# [522] Longest Uncommon Subsequence II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-uncommon-subsequence-ii/description/)

* algorithms
* Medium (44.68%)
* Likes:    559
* Dislikes: 1394
* Testcase Example:  '["aba","cdc","eae"]'

```md
Given an array of strings strs, return the length of the longest uncommon subsequence between them. If the longest uncommon subsequence does not exist, return -1.
An uncommon subsequence between an array of strings is a string that is a subsequence of one string but not the others.
A subsequence of a string s is a string that can be obtained after deleting any number of characters from s.

For example, 'abc' is a subsequence of 'aebdc' because you can delete the underlined characters in 'aebdc' to get 'abc'. Other subsequences of 'aebdc' include 'aebdc', 'aeb', and '' (empty string).


Example 1:
Input: strs = ["aba","cdc","eae"]
Output: 3
Example 2:
Input: strs = ["aaa","aaa","aa"]
Output: -1


Constraints:

2 <= strs.length <= 50
1 <= strs[i].length <= 10
strs[i] consists of lowercase English letters.


```

## 中文翻译

给定字符串数组 strs，求最长非公共子序列的长度。非公共子序列是某个字符串的子序列但不是其他字符串的子序列。

## 解题思路

按长度从长到短排序。对每个字符串，检查它是否是其他字符串的子序列。如果某个字符串不是任何其他字符串的子序列，它的长度就是答案（因为它本身是最长的候选）。用哈希表统计频率，频率 > 1 的字符串不可能成为非公共子序列。

## Solution

[SourceCode](./solution.js)
