# [2930] Number of Strings Which Can Be Rearranged to Contain Substring

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-strings-which-can-be-rearranged-to-contain-substring/description/)

* algorithms
* Medium (56.88%)
* Likes:    191
* Dislikes: 76
* Testcase Example:  '4'

```md
You are given an integer n.
A string s is called good if it contains only lowercase English characters and it is possible to rearrange the characters of s such that the new string contains 'leet' as a substring.
For example:

The string 'lteer' is good because we can rearrange it to form 'leetr' .
'letl' is not good because we cannot rearrange it to contain 'leet' as a substring.

Return the total number of good strings of length n.
Since the answer may be large, return it modulo 109 + 7.
A substring is a contiguous sequence of characters within a string.


Example 1:

Input: n = 4
Output: 12
Explanation: The 12 strings which can be rearranged to have 'leet' as a substring are: 'eelt', 'eetl', 'elet', 'elte', 'etel', 'etle', 'leet', 'lete', 'ltee', 'teel', 'tele', and 'tlee'.

Example 2:

Input: n = 10
Output: 83943898
Explanation: The number of strings with length 10 which can be rearranged to have 'leet' as a substring is 526083947580. Hence the answer is 526083947580 % (109 + 7) = 83943898.


Constraints:

1 <= n <= 105


```

## 中文翻译

给定整数 n，求长度为 n 的小写字母字符串中，能通过重排包含 "leet" 作为子串的字符串数量。结果对 10^9+7 取模。

## 解题思路

能重排含 "leet" 意味着字符串至少含 1个'l'、2个'e'、1个't'。用容斥原理：
- 总数 = 26^n
- A=缺'l'=25^n, B=至多1个'e'=25^n+n·25^(n-1), C=缺't'=25^n
- 用容斥：answer = 26^n - 3·25^n - n·25^(n-1) + 3·24^n + 2n·24^(n-1) - 23^n - n·23^(n-1)
- 需要快速幂 + BigInt 避免精度丢失

## Solution

[SourceCode](./solution.js)
