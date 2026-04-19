# [712] Minimum ASCII Delete Sum for Two Strings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings/description/)

* algorithms
* Medium (70.95%)
* Likes:    4542
* Dislikes: 128
* Testcase Example:  '"sea"\n"eat"'

```md
Given two strings s1 ands2, return the lowest ASCII sum of deleted characters to make two strings equal.

Example 1:

Input: s1 = 'sea', s2 = 'eat'
Output: 231
Explanation: Deleting 's' from 'sea' adds the ASCII value of 's' (115) to the sum.
Deleting 't' from 'eat' adds 116 to the sum.
At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.

Example 2:

Input: s1 = 'delete', s2 = 'leet'
Output: 403
Explanation: Deleting 'dee' from 'delete' to turn the string into 'let',
adds 100[d] + 101[e] + 101[e] to the sum.
Deleting 'e' from 'leet' adds 101[e] to the sum.
At the end, both strings are equal to 'let', and the answer is 100+101+101+101 = 403.
If instead we turned both strings into 'lee' or 'eet', we would get answers of 433 or 417, which are higher.


Constraints:

1 <= s1.length, s2.length <= 1000
s1 and s2 consist of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定两个字符串 s1 和 s2，返回使两个字符串相等所需删除字符的最小 ASCII 码值之和。

## Approach

经典动态规划，类似编辑距离 / LCS。

定义 dp[i][j] 为使 s1[0..i-1] 和 s2[0..j-1] 相等的最小删除 ASCII 和。

- 若 s1[i-1] === s2[j-1]：dp[i][j] = dp[i-1][j-1]（无需删除）
- 否则：dp[i][j] = min(dp[i-1][j] + s1.charCodeAt(i-1), dp[i][j-1] + s2.charCodeAt(j-1))

边界：dp[0][j] = dp[0][j-1] + s2.charCodeAt(j-1)，dp[i][0] = dp[i-1][0] + s1.charCodeAt(i-1)

时间复杂度 O(m*n)，空间可用滚动数组优化到 O(n)。
