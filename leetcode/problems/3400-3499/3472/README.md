# [3472] Longest Palindromic Subsequence After at Most K Operations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/longest-palindromic-subsequence-after-at-most-k-operations/description/)

* algorithms
* Medium (37.61%)
* Likes:    122
* Dislikes: 18
* Testcase Example:  '"abced"\n2'

```md
You are given a string s and an integer k.
In one operation, you can replace the character at any position with the next or previous letter in the alphabet (wrapping around so that &#39;a&#39; is after &#39;z&#39;). For example, replacing &#39;a&#39; with the next letter results in &#39;b&#39;, and replacing &#39;a&#39; with the previous letter results in &#39;z&#39;. Similarly, replacing &#39;z&#39; with the next letter results in &#39;a&#39;, and replacing &#39;z&#39; with the previous letter results in &#39;y&#39;.
Return the length of the longest palindromic subsequence of s that can be obtained after performing at most k operations.

Example 1:

Input: s = 'abced', k = 2
Output: 3
Explanation:

Replace s[1] with the next letter, and s becomes 'acced'.
Replace s[4] with the previous letter, and s becomes 'accec'.

The subsequence 'ccc' forms a palindrome of length 3, which is the maximum.

Example 2:

Input: s = 'aaazzz', k = 4
Output: 6
Explanation:

Replace s[0] with the previous letter, and s becomes 'zaazzz'.
Replace s[4] with the next letter, and s becomes 'zaazaz'.
Replace s[3] with the next letter, and s becomes 'zaaaaz'.

The entire string forms a palindrome of length 6.


Constraints:

1 <= s.length <= 200
1 <= k <= 200
s consists of only lowercase English letters.


```

## 翻译

给定字符串 s 和整数 k。每次操作可将某位置字符变为字母表中相邻字符（环形，a-z相邻）。最多 k 次操作后，求最长回文子序列的长度。

## 解题思路

区间 DP：dp[i][j][r] 表示 s[i..j] 中使用最多 r 次操作能得到的最长回文子序列。转移：不取 s[i]、不取 s[j]、或配对 s[i]和s[j]（需 cost 次操作使它们相同）。O(n²k)。

## Solution

[SourceCode](./solution.js)
