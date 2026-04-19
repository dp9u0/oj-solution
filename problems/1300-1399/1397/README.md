# [1397] Find All Good Strings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-all-good-strings/description/)

* algorithms
* Hard (45.25%)
* Likes:    535
* Dislikes: 130
* Testcase Example:  '2\n"aa"\n"da"\n"b"'

```md
Given the strings s1 and s2 of size n and the string evil, return the number of good strings.
A good string has size n, it is alphabetically greater than or equal to s1, it is alphabetically smaller than or equal to s2, and it does not contain the string evil as a substring. Since the answer can be a huge number, return this modulo 109 + 7.

Example 1:

Input: n = 2, s1 = 'aa', s2 = 'da', evil = 'b'
Output: 51
Explanation: There are 25 good strings starting with &#39;a&#39;: 'aa','ac','ad',...,'az'. Then there are 25 good strings starting with &#39;c&#39;: 'ca','cc','cd',...,'cz' and finally there is one good string starting with &#39;d&#39;: 'da'.

Example 2:

Input: n = 8, s1 = 'leetcode', s2 = 'leetgoes', evil = 'leet'
Output: 0
Explanation: All strings greater than or equal to s1 and smaller than or equal to s2 start with the prefix 'leet', therefore, there is not any good string.

Example 3:

Input: n = 2, s1 = 'gx', s2 = 'gz', evil = 'x'
Output: 2


Constraints:

s1.length == n
s2.length == n
s1 <= s2
1 <= n <= 500
1 <= evil.length <= 50
All strings consist of lowercase English letters.


```

## 翻译

给定长度 n、字符串 s1、s2 和 evil，统计长度为 n 且在 [s1, s2] 范围内、不包含 evil 子串的字符串数量，模 10^9+7。

## 解题思路

数位 DP + KMP 自动机。用 count_le(bound) 统计 <= bound 且不含 evil 的串数，答案 = count_le(s2) - count_le(s1) + (s1 是否合法)。DP 状态：(位置, KMP匹配状态, 是否紧贴上界)，预处理 KMP 的 next 转移表。O(n * m * 26)。

## Solution

[SourceCode](./solution.js)
