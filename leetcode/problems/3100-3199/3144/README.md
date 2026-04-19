# [3144] Minimum Substring Partition of Equal Character Frequency

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-substring-partition-of-equal-character-frequency/description/)

* algorithms
* Medium (40.09%)
* Likes:    177
* Dislikes: 36
* Testcase Example:  '"fabccddg"'

```md
Given a string s, you need to partition it into one or more balanced substrings. For example, if s == 'ababcc' then ('abab', 'c', 'c'), ('ab', 'abc', 'c'), and ('ababcc') are all valid partitions, but ('a', 'bab', 'cc'), ('aba', 'bc', 'c'), and ('ab', 'abcc') are not. The unbalanced substrings are bolded.
Return the minimum number of substrings that you can partition s into.
Note: A balanced string is a string where each character in the string occurs the same number of times.

Example 1:

Input: s = 'fabccddg'
Output: 3
Explanation:
We can partition the string s into 3 substrings in one of the following ways: ('fab, 'ccdd', 'g'), or ('fabc', 'cd', 'dg').

Example 2:

Input: s = 'abababaccddb'
Output: 2
Explanation:
We can partition the string s into 2 substrings like so: ('abab', 'abaccddb').


Constraints:

1 <= s.length <= 1000
s consists only of English lowercase letters.


```

## 题目翻译

给定字符串 s，将其分割为若干平衡子字符串（每个字符出现次数相同），返回最少分割数。

## 解题思路

DP: dp[i] 表示 s[0..i-1] 的最少分割数。对每个 i，枚举 j，检查 s[j..i-1] 是否平衡（所有字符频率相同），dp[i] = min(dp[j] + 1)。用频率数组判断平衡：最大频率 × 出现种类数 == 子串长度。

## Solution

[SourceCode](./solution.js)
