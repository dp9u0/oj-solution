# [1638] Count Substrings That Differ by One Character

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-substrings-that-differ-by-one-character/description/)

* algorithms
* Medium (72.27%)
* Likes:    1204
* Dislikes: 357
* Testcase Example:  '"aba"\n"baba"'

```md
Given two strings s and t, find the number of ways you can choose a non-empty substring of s and replace a single character by a different character such that the resulting substring is a substring of t. In other words, find the number of substrings in s that differ from some substring in t by exactly one character.
For example, the underlined substrings in 'computer' and 'computation' only differ by the &#39;e&#39;/&#39;a&#39;, so this is a valid way.
Return the number of substrings that satisfy the condition above.
A substring is a contiguous sequence of characters within a string.

Example 1:

Input: s = 'aba', t = 'baba'
Output: 6
Explanation: The following are the pairs of substrings from s and t that differ by exactly 1 character:
('aba', 'baba')
('aba', 'baba')
('aba', 'baba')
('aba', 'baba')
('aba', 'baba')
('aba', 'baba')
The underlined portions are the substrings that are chosen from s and t.

​​Example 2:

Input: s = 'ab', t = 'bb'
Output: 3
Explanation: The following are the pairs of substrings from s and t that differ by 1 character:
('ab', 'bb')
('ab', 'bb')
('ab', 'bb')
​​​​The underlined portions are the substrings that are chosen from s and t.


Constraints:

1 <= s.length, t.length <= 100
s and t consist of lowercase English letters only.


```

## 翻译

给定两个字符串 s 和 t，找出 s 中有多少个子串可以通过恰好替换一个字符变成 t 的某个子串。等价于：找出所有 (s的子串, t的子串) 对，它们恰好相差一个字符。

## Approach

枚举所有对齐起点 (i, j)，其中 i 是 s 的起点，j 是 t 的起点。对于每对起点，向右扩展，统计相同字符数和不同字符数。

用 `same` 记录连续相同字符数，`diff` 记录是否恰好有一个不同。当遇到第二个不同字符时停止。对于每个恰好有一个不同的位置，贡献数为 min(左边相同延伸数, 1) * (右边继续相同的长度 + 1)。

更简洁的方法：对每对起点 (i, j)，向右扫描，维护 `same`（当前连续相同长度）。遇到第一个不同时，答案加上 same + 1（可以选左边 0~same 个相同字符）。遇到第二个不同时，更新 same 为上一个不同到当前位置的距离减1。

时间复杂度 O(m×n×min(m,n))，空间复杂度 O(1)。由于 m,n <= 100，完全可行。

## Solution

[SourceCode](./solution.js)
