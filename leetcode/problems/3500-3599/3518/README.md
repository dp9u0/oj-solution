# [3518] Smallest Palindromic Rearrangement II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-palindromic-rearrangement-ii/description/)

* algorithms
* Hard (14.45%)
* Likes:    73
* Dislikes: 7
* Testcase Example:  '"abba"\n2'

```md
You are given a palindromic string s and an integer k.
Return the k-th lexicographically smallest palindromic permutation of s. If there are fewer than k distinct palindromic permutations, return an empty string.
Note: Different rearrangements that yield the same palindromic string are considered identical and are counted once.

Example 1:

Input: s = 'abba', k = 2
Output: 'baab'
Explanation:

The two distinct palindromic rearrangements of 'abba' are 'abba' and 'baab'.
Lexicographically, 'abba' comes before 'baab'. Since k = 2, the output is 'baab'.


Example 2:

Input: s = 'aa', k = 2
Output: ''
Explanation:

There is only one palindromic rearrangement: 'aa'.
The output is an empty string since k = 2 exceeds the number of possible rearrangements.


Example 3:

Input: s = 'bacab', k = 1
Output: 'abcba'
Explanation:

The two distinct palindromic rearrangements of 'bacab' are 'abcba' and 'bacab'.
Lexicographically, 'abcba' comes before 'bacab'. Since k = 1, the output is 'abcba'.



Constraints:

1 <= s.length <= 104
s consists of lowercase English letters.
s is guaranteed to be palindromic.
1 <= k <= 106


```

## 题目翻译

给定回文串 s 和整数 k，返回第 k 小的回文排列。若不足 k 个则返回空串。

## 解题思路

**BigInt 多项式系数 + 逐位贪心**

取左半字符的频率 cnt[26]，问题等价于找第 k 个多重集排列。

用 BigInt 维护当前多重集排列数 M = multinomial(rem; cnt[0..25])。每位从 'a' 到 'z' 尝试：放置字符 c 后剩余排列数 trial = M * cnt[c] / rem。若 trial >= k 则提交，否则 k -= trial。

初始 M 用顺序二项式系数（C(placed+cnt[i], cnt[i])）逐个计算，BigInt 保证精确。

## Solution

[SourceCode](./solution.js)
