# [730] Count Different Palindromic Subsequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-different-palindromic-subsequences/description/)

* algorithms
* Hard (47.66%)
* Likes:    2007
* Dislikes: 103
* Testcase Example:  '"bccb"'

```md
Given a string s, return the number of different non-empty palindromic subsequences in s. Since the answer may be very large, return it modulo 109 + 7.
A subsequence of a string is obtained by deleting zero or more characters from the string.
A sequence is palindromic if it is equal to the sequence reversed.
Two sequences a1, a2, ... and b1, b2, ... are different if there is some i for which ai != bi.

Example 1:

Input: s = 'bccb'
Output: 6
Explanation: The 6 different non-empty palindromic subsequences are &#39;b&#39;, &#39;c&#39;, &#39;bb&#39;, &#39;cc&#39;, &#39;bcb&#39;, &#39;bccb&#39;.
Note that &#39;bcb&#39; is counted only once, even though it occurs twice.

Example 2:

Input: s = 'abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba'
Output: 104860361
Explanation: There are 3104860382 different non-empty palindromic subsequences, which is 104860361 modulo 109 + 7.


Constraints:

1 <= s.length <= 1000
s[i] is either &#39;a&#39;, &#39;b&#39;, &#39;c&#39;, or &#39;d&#39;.


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定字符串 s（仅含 a,b,c,d），返回不同非空回文子序列的个数，结果对 10^9+7 取模。

## 解题思路

区间 DP。只有 4 种字符，对每种字符 c，在 [i,j] 中找最左和最右的 c 位置 left、right。若 left==right 贡献 1，若 left<right 贡献 dp[left+1][right-1]+2（加上 "cc" 和 "c" 本身）。不同字符的外层回文不重叠，直接求和。预计算 nextPos/prevPos 实现 O(1) 查找。
