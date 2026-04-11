# [1347] Minimum Number of Steps to Make Two Strings Anagram

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/description/)

* algorithms
* Medium (82.48%)
* Likes:    2825
* Dislikes: 122
* Testcase Example:  '"bab"\n"aba"'

```md
You are given two strings of the same length s and t. In one step you can choose any character of t and replace it with another character.
Return the minimum number of steps to make t an anagram of s.
An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

Example 1:

Input: s = 'bab', t = 'aba'
Output: 1
Explanation: Replace the first &#39;a&#39; in t with b, t = 'bba' which is anagram of s.

Example 2:

Input: s = 'leetcode', t = 'practice'
Output: 5
Explanation: Replace &#39;p&#39;, &#39;r&#39;, &#39;a&#39;, &#39;i&#39; and &#39;c&#39; from t with proper characters to make t anagram of s.

Example 3:

Input: s = 'anagram', t = 'mangaar'
Output: 0
Explanation: 'anagram' and 'mangaar' are anagrams.


Constraints:

1 <= s.length <= 5 * 104
s.length == t.length
s and t consist of lowercase English letters only.


```

## 翻译

给定等长字符串 `s` 和 `t`，每步可将 `t` 中任意字符替换为另一个字符。返回使 `t` 成为 `s` 的字母异位词的最少步数。

## Approach

**字符计数。** 统计 s 和 t 中每个字符的频率差。t 中多出来的字符数量之和即为需要替换的步数。具体地：计算 `count[c] = freq_s[c] - freq_t[c]`，t 中缺少的字符总数 = 所有 `count[c] > 0` 的和。

时间复杂度：O(n)，空间复杂度：O(26) = O(1)

## Solution

[SourceCode](./solution.js)
