# [1682] 最长回文子序列 II

## Description


```md
https://leetcode.cn/problems/longest-palindromic-subsequence-ii/description/
* algorithms
* Medium (56.87%)
* Likes:    21
* Dislikes: -
* Testcase Example:  '"bbabab"'
字符串 s 的某个子序列符合下列条件时，称为“好的回文子序列”：
它是 s 的子序列。
它是回文序列（反转后与原序列相等）。
长度为偶数。
除中间的两个字符外，其余任意两个连续字符不相等。
例如，若 s = "abcabcabb"，则 "abba" 可称为“好的回文子序列”，而 "bcb" （长度不是偶数）和 "bbbb" （含有相等的连续字符）不能称为“好的回文子序列”。
给定一个字符串 s， 返回 s 的最长“好的回文子序列”的长度。

示例 1:
输入: s = "bbabab"
输出: 4
解释: s 的最长“好的回文子序列”是 "baab"。
示例 2:
输入: s = "dcbccacdb"
输出: 4
解释: s 的最长“好的回文子序列”是 "dccd"。

提示:
1 <= s.length <= 250
s 包含小写英文字母。
Hint 1: As with any good dp problem that uses palindromes, try building the palindrome from the edges
Hint 2: The prime point is to check that no two adjacent characters are equal, so save the past character while building the palindrome.

```

## Solution

[SourceCode](./solution.js)

## Translation

Longest "good" palindromic subsequence: even length; adjacent characters unequal EXCEPT the middle pair.

## Approach

**区间 DP + 外层字符记忆**。dp(i, j, last) = s[i..j] 内、外层字符不等于 last 的最长好回文。转移:跳边(i+1/j−1);s[i]==s[j] 且 != last 时成对,内层新约束 last=s[i],+2。哨兵 last=26 起步。记忆化 O(n²·27),深 ≤250 安全。
