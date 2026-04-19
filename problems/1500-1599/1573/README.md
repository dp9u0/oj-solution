# [1573] Number of Ways to Split a String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-ways-to-split-a-string/description/)

* algorithms
* Medium (34.59%)
* Likes:    770
* Dislikes: 88
* Testcase Example:  '"10101"'

```md
Given a binary string s, you can split s into 3 non-empty strings s1, s2, and s3 where s1 + s2 + s3 = s.
Return the number of ways s can be split such that the number of ones is the same in s1, s2, and s3. Since the answer may be too large, return it modulo 109 + 7.

Example 1:

Input: s = '10101'
Output: 4
Explanation: There are four ways to split s in 3 parts where each part contain the same number of letters &#39;1&#39;.
'1
010
1'
'1
01
01'
'10
10
1'
'10
1
01'

Example 2:

Input: s = '1001'
Output: 0

Example 3:

Input: s = '0000'
Output: 3
Explanation: There are three ways to split s in 3 parts.
'0
0
00'
'0
00
0'
'00
0
0'


Constraints:

3 <= s.length <= 105
s[i] is either &#39;0&#39; or &#39;1&#39;.


```

## 中文翻译

给定二进制字符串 s，将其分成 3 个非空子串，使得每个子串中 '1' 的数量相同。返回方案数 mod 10^9+7。

## 解题思路

统计总 1 的个数 total。若 total % 3 !== 0 则返回 0（total > 0 时）。若 total === 0，则在 n-1 个间隔中选 2 个，答案为 C(n-1,2)。若 total > 0，每段应有 total/3 个 1，找第 total/3 个 1 和第 2*total/3 个 1 的位置，两段之间的 0 的数量+1 的乘积即为答案。

## Solution

[SourceCode](./solution.js)
