# [1044] Longest Duplicate Substring

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-duplicate-substring/description/)

* algorithms
* Hard (31.09%)
* Likes:    2350
* Dislikes: 397
* Testcase Example:  '"banana"'

```md
Given a string s, consider all duplicated substrings: (contiguous) substrings of s that occur 2 or more times.The occurrencesmay overlap.
Return any duplicatedsubstring that has the longest possible length.If s does not have a duplicated substring, the answer is ''.

Example 1:
Input: s = "banana"
Output: "ana"
Example 2:
Input: s = "abcd"
Output: ""


Constraints:

2 <= s.length <= 3 * 104
s consists of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定字符串 s，找出最长的出现至少两次的重复子串（允许重叠）。如果不存在，返回空字符串。

## Approach

二分查找 + Rabin-Karp 滚动哈希。

- 二分查找可能的重复子串长度 mid。
- 对每个 mid，用 Rabin-Karp 计算所有长度为 mid 的子串的哈希值，检查是否有重复。
- 哈希冲突处理：用双哈希（两个不同的 base/mod 组合）降低冲突概率。

时间复杂度 O(n log n)，空间复杂度 O(n)。
