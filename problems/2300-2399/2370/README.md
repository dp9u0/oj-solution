# [2370] Longest Ideal Subsequence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-ideal-subsequence/description/)

* algorithms
* Medium (46.65%)
* Likes:    1534
* Dislikes: 82
* Testcase Example:  '"acfgbd"\n2'

```md
You are given a string s consisting of lowercase letters and an integer k. We call a string t ideal if the following conditions are satisfied:

t is a subsequence of the string s.
The absolute difference in the alphabet order of every two adjacent letters in t is less than or equal to k.

Return the length of the longest ideal string.
A subsequence is a string that can be derived from another string by deleting some or no characters without changing the order of the remaining characters.
Note that the alphabet order is not cyclic. For example, the absolute difference in the alphabet order of &#39;a&#39; and &#39;z&#39; is 25, not 1.

Example 1:

Input: s = 'acfgbd', k = 2
Output: 4
Explanation: The longest ideal string is 'acbd'. The length of this string is 4, so 4 is returned.
Note that 'acfgbd' is not ideal because &#39;c&#39; and &#39;f&#39; have a difference of 3 in alphabet order.
Example 2:

Input: s = 'abcd', k = 3
Output: 4
Explanation: The longest ideal string is 'abcd'. The length of this string is 4, so 4 is returned.


Constraints:

1 <= s.length <= 105
0 <= k <= 25
s consists of lowercase English letters.


```

## 翻译

给定字符串 s 和整数 k，找最长的理想子序列：子序列中每两个相邻字母的字母表顺序差绝对值 <= k。返回最长长度。

## Approach

DP：dp[c] 表示以字母 c 结尾的最长理想子序列长度。遍历 s 的每个字符 ch，dp[ch] = 1 + max(dp[c'])，其中 c' 在 [ch-k, ch+k] 范围内。维护最大值。

## Solution

[SourceCode](./solution.js)
