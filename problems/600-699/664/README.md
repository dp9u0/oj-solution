# [664] Strange Printer

## Description

[LeetCode Problem Description](https://leetcode.com/problems/strange-printer/description/)

* algorithms
* Hard (60.90%)
* Likes:    2774
* Dislikes: 291
* Testcase Example:  '"aaabbb"'

```md
There is a strange printer with the following two special properties:

The printer can only print a sequence of the same character each time.
At each turn, the printer can print new characters starting from and ending at any place and will cover the original existing characters.

Given a string s, return the minimum number of turns the printer needed to print it.

Example 1:

Input: s = 'aaabbb'
Output: 2
Explanation: Print 'aaa' first and then print 'bbb'.

Example 2:

Input: s = 'aba'
Output: 2
Explanation: Print 'aaa' first and then print 'b' from the second place of the string, which will cover the existing character &#39;a&#39;.


Constraints:

1 <= s.length <= 100
s consists of lowercase English letters.


```

## 中文翻译

一台打印机每次只能打印连续的相同字符序列，且可以覆盖已有字符。求打印给定字符串 s 的最少轮次。

## 解题思路

区间 DP。先压缩连续相同字符（不影响答案）。dp[i][j] = 打印 s[i..j] 的最少轮次。转移：dp[i][j] = dp[i][j-1]+1（单独打印 s[j]）；若 s[k]==s[j]，则 dp[i][j] = min(dp[i][j], dp[i][k]+dp[k+1][j-1])（s[k] 和 s[j] 同一轮打印）。

## Solution

[SourceCode](./solution.js)
