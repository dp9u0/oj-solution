# [3456] Find Special Substring of Length K

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-special-substring-of-length-k/description/)

* algorithms
* Easy (35.13%)
* Likes:    67
* Dislikes: 10
* Testcase Example:  '"aaabaaa"\n3'

```md
You are given a string s and an integer k.
Determine if there exists a substring of length exactly k in s that satisfies the following conditions:

The substring consists of only one distinct character (e.g., 'aaa' or 'bbb').
If there is a character immediately before the substring, it must be different from the character in the substring.
If there is a character immediately after the substring, it must also be different from the character in the substring.

Return true if such a substring exists. Otherwise, return false.

Example 1:

Input: s = 'aaabaaa', k = 3
Output: true
Explanation:
The substring s[4..6] == 'aaa' satisfies the conditions.

It has a length of 3.
All characters are the same.
The character before 'aaa' is &#39;b&#39;, which is different from &#39;a&#39;.
There is no character after 'aaa'.


Example 2:

Input: s = 'abc', k = 2
Output: false
Explanation:
There is no substring of length 2 that consists of one distinct character and satisfies the conditions.


Constraints:

1 <= k <= s.length <= 100
s consists of lowercase English letters only.


```

## 中文翻译

判断字符串 s 中是否存在长度恰好为 k 的子串，满足：由同一字符组成，且前后相邻字符（若有）与该字符不同。

## 解题思路

统计每个字符的连续运行（run）长度。若某 run 长度恰好为 k，则返回 true。

## Solution

[SourceCode](./solution.js)
