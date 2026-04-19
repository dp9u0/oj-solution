# [2223] Sum of Scores of Built Strings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/sum-of-scores-of-built-strings/description/)

* algorithms
* Hard (47.67%)
* Likes:    302
* Dislikes: 190
* Testcase Example:  '"babab"'

```md
You are building a string s of length n one character at a time, prepending each new character to the front of the string. The strings are labeled from 1 to n, where the string with length i is labeled si.

For example, for s = 'abaca', s1 == 'a', s2 == 'ca', s3 == 'aca', etc.

The score of si is the length of the longest common prefix between si and sn (Note that s == sn).
Given the final string s, return the sum of the score of every si.

Example 1:

Input: s = 'babab'
Output: 9
Explanation:
For s1 == 'b', the longest common prefix is 'b' which has a score of 1.
For s2 == 'ab', there is no common prefix so the score is 0.
For s3 == 'bab', the longest common prefix is 'bab' which has a score of 3.
For s4 == 'abab', there is no common prefix so the score is 0.
For s5 == 'babab', the longest common prefix is 'babab' which has a score of 5.
The sum of the scores is 1 + 0 + 3 + 0 + 5 = 9, so we return 9.
Example 2:

Input: s = 'azbazbzaz'
Output: 14
Explanation:
For s2 == 'az', the longest common prefix is 'az' which has a score of 2.
For s6 == 'azbzaz', the longest common prefix is 'azb' which has a score of 3.
For s9 == 'azbazbzaz', the longest common prefix is 'azbazbzaz' which has a score of 9.
For all other si, the score is 0.
The sum of the scores is 2 + 3 + 9 = 14, so we return 14.


Constraints:

1 <= s.length <= 105
s consists of lowercase English letters.


```

## 中文翻译

逐步在字符串前面添加字符构建长度为 n 的字符串 s。s_i 是长度为 i 的前缀字符串（即 s 的后缀 s[n-i:]）。score(s_i) = LCP(s_i, s_n) 的长度。求所有 score 之和。

## 解题思路

等价于计算 Z-function：Z[i] = s[i:] 与 s[0:] 的最长公共前缀长度。答案 = sum(Z[0..n-1])，其中 Z[0] = n。

Z-function 线性算法：维护 [l, r) 为当前最远匹配区间，对新位置 i 利用已知信息加速，均摊 O(n)。

## Solution

[SourceCode](./solution.js)
