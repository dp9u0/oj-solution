# [3503] Longest Palindrome After Substring Concatenation I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-palindrome-after-substring-concatenation-i/description/)

* algorithms
* Medium (43.82%)
* Likes:    84
* Dislikes: 6
* Testcase Example:  '"a"\n"a"'

```md
You are given two strings, s and t.
You can create a new string by selecting a substring from s (possibly empty) and a substring from t (possibly empty), then concatenating them in order.
Return the length of the longest palindrome that can be formed this way.

Example 1:

Input: s = 'a', t = 'a'
Output: 2
Explanation:
Concatenating 'a' from s and 'a' from t results in 'aa', which is a palindrome of length 2.

Example 2:

Input: s = 'abc', t = 'def'
Output: 1
Explanation:
Since all characters are different, the longest palindrome is any single character, so the answer is 1.

Example 3:

Input: s = 'b', t = 'aaaa'
Output: 4
Explanation:
Selecting 'aaaa' from t is the longest palindrome, so the answer is 4.

Example 4:

Input: s = 'abcde', t = 'ecdba'
Output: 5
Explanation:
Concatenating 'abc' from s and 'ba' from t results in 'abcba', which is a palindrome of length 5.


Constraints:

1 <= s.length, t.length <= 30
s and t consist of lowercase English letters.


```

## 翻译

给定s和t，从s选子串（可空）和t选子串（可空）拼接，求能形成的最长回文串长度。

## 解题思路

数据范围小(s,t<=30)，暴力枚举。枚举s的所有子串和t的所有子串，拼接后检查是否回文，记录最长长度。

## Solution

[SourceCode](./solution.js)
