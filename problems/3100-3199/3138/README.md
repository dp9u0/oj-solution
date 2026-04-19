# [3138] Minimum Length of Anagram Concatenation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-length-of-anagram-concatenation/description/)

* algorithms
* Medium (39.79%)
* Likes:    203
* Dislikes: 104
* Testcase Example:  '"abba"'

```md
You are given a string s, which is known to be a concatenation of anagrams of some string t.
Return the minimum possible length of the string t.
An anagram is formed by rearranging the letters of a string. For example, 'aab', 'aba', and, 'baa' are anagrams of 'aab'.

Example 1:

Input: s = 'abba'
Output: 2
Explanation:
One possible string t could be 'ba'.

Example 2:

Input: s = 'cdef'
Output: 4
Explanation:
One possible string t could be 'cdef', notice that t can be equal to s.

Example 2:

Input: s = 'abcbcacabbaccba'
Output: 3


Constraints:

1 <= s.length <= 105
s consist only of lowercase English letters.


```

## 题目翻译

给定字符串 s，已知 s 是某字符串 t 的若干 anagram 的拼接。求 t 的最小可能长度。

## 解题思路

**枚举长度 + 字符计数验证**

t 的长度 L 必须整除 |s|（因为 s 由若干个长度为 L 的 anagram 拼接而成）。枚举 |s| 的所有因子 L（从小到大），将 s 按 L 分块，检查所有块的字符频率是否相同。第一个满足的 L 即为答案。

复杂度：O(d(n) × |s|)，d(n) 为 n 的因子数，最大约 128。

## Solution

[SourceCode](./solution.js)
