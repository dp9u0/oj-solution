# [2478] Number of Beautiful Partitions

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-beautiful-partitions/description/)

* algorithms
* Hard (32.92%)
* Likes:    371
* Dislikes: 18
* Testcase Example:  '"23542185131"\n3\n2'

```md
You are given a string s that consists of the digits &#39;1&#39; to &#39;9&#39; and two integers k and minLength.
A partition of s is called beautiful if:

s is partitioned into k non-intersecting substrings.
Each substring has a length of at least minLength.
Each substring starts with a prime digit and ends with a non-prime digit. Prime digits are &#39;2&#39;, &#39;3&#39;, &#39;5&#39;, and &#39;7&#39;, and the rest of the digits are non-prime.

Return the number of beautiful partitions of s. Since the answer may be very large, return it modulo 109 + 7.
A substring is a contiguous sequence of characters within a string.

Example 1:

Input: s = '23542185131', k = 3, minLength = 2
Output: 3
Explanation: There exists three ways to create a beautiful partition:
'2354
218
5131'
'2354
21851
31'
'2354218
51
31'

Example 2:

Input: s = '23542185131', k = 3, minLength = 3
Output: 1
Explanation: There exists one way to create a beautiful partition: '2354
218
5131'.

Example 3:

Input: s = '3312958', k = 3, minLength = 1
Output: 1
Explanation: There exists one way to create a beautiful partition: '331
29
58'.


Constraints:

1 <= k, minLength <= s.length <= 1000
s consists of the digits &#39;1&#39; to &#39;9&#39;.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定由 '1'-'9' 组成的字符串 s，将其分成 k 个不重叠子串，每个子串长度 >= minLength，以质数数字（2,3,5,7）开头，以非质数数字结尾。求方案数，对 10^9+7 取模。

## 解题思路

**Approach: DP + 前缀和优化**

1. dp[j][i] = 前 i 个字符分成 j 段的方案数
2. 转移：dp[j][i] = sum(dp[j-1][t])，其中 t <= i - minLength，s[t] 是质数，s[i-1] 是非质数
3. 用前缀和优化：维护 dp[j-1] 的前缀和，O(1) 查询区间和
4. 时间 O(n*k)，空间 O(n*k)
