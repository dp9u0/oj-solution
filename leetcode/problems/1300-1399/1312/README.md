# [1312] Minimum Insertion Steps to Make a String Palindrome

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/description/)

* algorithms
* Hard (73.80%)
* Likes:    5598
* Dislikes: 76
* Testcase Example:  '"zzazz"'

```md
Given a string s. In one step you can insert any character at any index of the string.
Return the minimum number of steps to make spalindrome.
APalindrome Stringis one that reads the same backward as well as forward.

Example 1:

Input: s = 'zzazz'
Output: 0
Explanation: The string 'zzazz' is already palindrome we do not need any insertions.

Example 2:

Input: s = 'mbadm'
Output: 2
Explanation: String can be 'mbdadbm' or 'mdbabdm'.

Example 3:

Input: s = 'leetcode'
Output: 5
Explanation: Inserting 5 characters the string becomes 'leetcodocteel'.


Constraints:

1 <= s.length <= 500
s consists of lowercase English letters.


```

## 翻译

给定字符串 s，每步可在任意位置插入一个字符。返回使 s 成为回文串的最少插入次数。

## Approach

答案 = n - LCS(s, reverse(s))，即字符串长度减去它与自身逆序的最长公共子序列长度。LCS 中的字符不需要插入，其余字符需要配对。

用滚动数组优化 DP 计算 LCS。

时间复杂度 O(n^2)，空间复杂度 O(n)。

## Solution

[SourceCode](./solution.js)
