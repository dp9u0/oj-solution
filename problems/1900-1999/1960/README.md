# [1960] Maximum Product of the Length of Two Palindromic Substrings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-substrings/description/)

* algorithms
* Hard (30.89%)
* Likes:    257
* Dislikes: 43
* Testcase Example:  '"ababbb"'

```md
You are given a 0-indexed string s and are tasked with finding two non-intersecting palindromic substrings of odd length such that the product of their lengths is maximized.
More formally, you want to choose four integers i, j, k, l such that 0 <= i <= j < k <= l < s.length and both the substrings s[i...j] and s[k...l] are palindromes and have odd lengths. s[i...j] denotes a substring from index i to index j inclusive.
Return the maximum possible product of the lengths of the two non-intersecting palindromic substrings.
A palindrome is a string that is the same forward and backward. A substring is a contiguous sequence of characters in a string.

Example 1:

Input: s = 'ababbb'
Output: 9
Explanation: Substrings 'aba' and 'bbb' are palindromes with odd length. product = 3 * 3 = 9.

Example 2:

Input: s = 'zaaaxbbby'
Output: 9
Explanation: Substrings 'aaa' and 'bbb' are palindromes with odd length. product = 3 * 3 = 9.


Constraints:

2 <= s.length <= 105
s consists of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定字符串 s（n ≤ 10^5），找两个不相交的奇数长度回文子串，使长度乘积最大。

## 解题思路

Manacher 求每个中心的最长奇回文半径 d[i]。然后用扫描线：从左到右维护活跃中心的最小值，计算每个位置结尾的最大回文长度 maxEndAt[e]；从右到左类似求 maxStartAt[s]。再前缀/后缀 max 得到 leftBest 和 rightBest。枚举分割点求最大乘积。总 O(n)。
