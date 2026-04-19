# [2484] Count Palindromic Subsequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-palindromic-subsequences/description/)

* algorithms
* Hard (41.09%)
* Likes:    618
* Dislikes: 31
* Testcase Example:  '"103301"'

```md
Given a string of digits s, return the number of palindromic subsequences of s having length 5. Since the answer may be very large, return it modulo 109 + 7.
Note:

A string is palindromic if it reads the same forward and backward.
A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.


Example 1:

Input: s = '103301'
Output: 2
Explanation:
There are 6 possible subsequences of length 5: '10330','10331','10301','10301','13301','03301'.
Two of them (both equal to '10301') are palindromic.

Example 2:

Input: s = '0000000'
Output: 21
Explanation: All 21 subsequences are '00000', which is palindromic.

Example 3:

Input: s = '9999900000'
Output: 2
Explanation: The only two palindromic subsequences are '99999' and '00000'.


Constraints:

1 <= s.length <= 104
s consists of digits.


```

## 题目翻译

给定数字字符串 s，返回长度为 5 的回文子序列的数量，对 10^9+7 取模。

## 解题思路

**前后缀对计数 + 枚举中间位置**

长度为 5 的回文形如 abcba，由首对数字 (a,b) 和中间字符 c 决定。

对每个中间位置 k：
- 左侧贡献 left[a][b]：位置对 (i,j) 满足 i < j < k，s[i]=a，s[j]=b 的数量
- 右侧贡献 right[b][a]：位置对 (l,m) 满足 k < l < m，s[l]=b，s[m]=a 的数量
- 该位置贡献 = sum over (a,b) of left[a][b] × right[b][a]

从右向左预计算 right[k] 数组（含 10×10 = 100 个值），从左向右增量维护 left 数组并累加答案。

复杂度 O(n × 100)。

## Solution

[SourceCode](./solution.js)
