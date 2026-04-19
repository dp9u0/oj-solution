# [1278] Palindrome Partitioning III

## Description

[LeetCode Problem Description](https://leetcode.com/problems/palindrome-partitioning-iii/description/)

* algorithms
* Hard (62.23%)
* Likes:    1213
* Dislikes: 19
* Testcase Example:  '"abc"\n2'

```md
You are given a string s containing lowercase letters and an integer k. You need to :

First, change some characters of s to other lowercase English letters.
Then divide s into k non-empty disjoint substrings such that each substring is a palindrome.

Return the minimal number of characters that you need to change to divide the string.

Example 1:

Input: s = 'abc', k = 2
Output: 1
Explanation:You can split the string into 'ab' and 'c', and change 1 character in 'ab' to make it palindrome.

Example 2:

Input: s = 'aabbc', k = 3
Output: 0
Explanation:You can split the string into 'aa', 'bb' and 'c', all of them are palindrome.
Example 3:

Input: s = 'leetcode', k = 8
Output: 0


Constraints:

1 <= k <= s.length <= 100.
s only contains lowercase English letters.


```

## 题目翻译

给定字符串 s 和整数 k，将 s 分成 k 个非空子串，修改最少字符使每个子串都是回文。

## 解题思路

**区间 DP**

1. 预处理 cost[l][r]：将 s[l..r] 变为回文的最少修改次数，用区间 DP 递推。
2. dp[i][j]：将 s[0..i] 分成 j 个回文子串的最少修改。转移：枚举最后一个分界点 t。

O(n^2 * k) 时间。

## Solution

[SourceCode](./solution.js)
