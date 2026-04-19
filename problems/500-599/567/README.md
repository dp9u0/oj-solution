# [567] Permutation in String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/permutation-in-string/description/)

* algorithms
* Medium (48.67%)
* Likes:    13027
* Dislikes: 522
* Testcase Example:  '"ab"\n"eidbaooo"'

```md
Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
In other words, return true if one of s1&#39;s permutations is the substring of s2.

Example 1:

Input: s1 = 'ab', s2 = 'eidbaooo'
Output: true
Explanation: s2 contains one permutation of s1 ('ba').

Example 2:

Input: s1 = 'ab', s2 = 'eidboaoo'
Output: false


Constraints:

1 <= s1.length, s2.length <= 104
s1 and s2 consist of lowercase English letters.


```

## 翻译

给定两个字符串 `s1` 和 `s2`，判断 `s2` 是否包含 `s1` 的某个排列作为子串。

## Approach

固定大小滑动窗口 + 频率计数。窗口大小为 `s1.length`，统计 s1 的字符频率，在 s2 上滑动窗口维护当前窗口的字符频率，当两者完全匹配时返回 true。

用 `matches` 计数器优化：每次滑动时只更新左右两端字符的频率变化，维护匹配的字符数，避免每次比较整个频率数组。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
