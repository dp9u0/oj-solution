# [1763] Longest Nice Substring

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-nice-substring/description/)

* algorithms
* Easy (64.01%)
* Likes:    1518
* Dislikes: 979
* Testcase Example:  '"YazaAay"'

```md
A string s is nice if, for every letter of the alphabet that s contains, it appears both in uppercase and lowercase. For example, 'abABB' is nice because &#39;A&#39; and &#39;a&#39; appear, and &#39;B&#39; and &#39;b&#39; appear. However, 'abA' is not because &#39;b&#39; appears, but &#39;B&#39; does not.
Given a string s, return the longest substring of s that is nice. If there are multiple, return the substring of the earliest occurrence. If there are none, return an empty string.

Example 1:

Input: s = 'YazaAay'
Output: 'aAa'
Explanation: 'aAa' is a nice string because &#39;A/a&#39; is the only letter of the alphabet in s, and both &#39;A&#39; and &#39;a&#39; appear.
'aAa' is the longest nice substring.

Example 2:

Input: s = 'Bb'
Output: 'Bb'
Explanation: 'Bb' is a nice string because both &#39;B&#39; and &#39;b&#39; appear. The whole string is a substring.

Example 3:

Input: s = 'c'
Output: ''
Explanation: There are no nice substrings.


Constraints:

1 <= s.length <= 100
s consists of uppercase and lowercase English letters.


```

## 中文翻译

一个字符串 s 是 nice 的，如果其中每个字母都同时出现大小写形式。返回 s 的最长 nice 子串。

## 解题思路

分治法：如果某个字符只出现大写或小写，则以该字符为分割点，递归左右两部分。n <= 100，直接暴力枚举所有子串也可以。

## Solution

[SourceCode](./solution.js)
