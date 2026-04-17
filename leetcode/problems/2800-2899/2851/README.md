# [2851] String Transformation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/string-transformation/description/)

* algorithms
* Hard (26.92%)
* Likes:    183
* Dislikes: 49
* Testcase Example:  '"abcd"\n"cdab"\n2'

```md
You are given two strings s and t of equal length n. You can perform the following operation on the string s:

Remove a suffix of s of length l where 0 < l < n and append it at the start of s.
For example, let s = &#39;abcd&#39; then in one operation you can remove the suffix &#39;cd&#39; and append it in front of s making s = &#39;cdab&#39;.

You are also given an integer k. Return the number of ways in which s can be transformed into t in exactly k operations.
Since the answer can be large, return it modulo 109 + 7.

Example 1:

Input: s = 'abcd', t = 'cdab', k = 2
Output: 2
Explanation:
First way:
In first operation, choose suffix from index = 3, so resulting s = 'dabc'.
In second operation, choose suffix from index = 3, so resulting s = 'cdab'.
Second way:
In first operation, choose suffix from index = 1, so resulting s = 'bcda'.
In second operation, choose suffix from index = 1, so resulting s = 'cdab'.

Example 2:

Input: s = 'ababab', t = 'ababab', k = 1
Output: 2
Explanation:
First way:
Choose suffix from index = 2, so resulting s = 'ababab'.
Second way:
Choose suffix from index = 4, so resulting s = 'ababab'.


Constraints:

2 <= s.length <= 5 * 105
1 <= k <= 1015
s.length == t.length
s and t consist of only lowercase English alphabets.


```

## 翻译

给定等长字符串 s, t 和整数 k。每次操作将 s 的后缀（长度 1~n-1）移到前面。求恰好 k 次操作后 s 变成 t 的方案数，对 10^9+7 取模。

## 解题思路

用 KMP 在 s+s 中找 t 出现的次数 c（即旋转 s 等于 t 的数量）。将状态分为"匹配"和"不匹配"两类，转移矩阵为 2x2 矩阵 [[c-1, c], [n-c, n-1-c]]。用矩阵快速幂 O(log k) 求解。

## Solution

[SourceCode](./solution.js)
