# [1092] Shortest Common Supersequence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/shortest-common-supersequence/description/)

* algorithms
* Hard (61.84%)
* Likes:    5951
* Dislikes: 101
* Testcase Example:  '"abac"\n"cab"'

```md
Given two strings str1 and str2, return the shortest string that has both str1 and str2 as subsequences. If there are multiple valid strings, return any of them.
A string s is a subsequence of string t if deleting some number of characters from t (possibly 0) results in the string s.

Example 1:

Input: str1 = 'abac', str2 = 'cab'
Output: 'cabac'
Explanation:
str1 = 'abac' is a subsequence of 'cabac' because we can delete the first 'c'.
str2 = 'cab' is a subsequence of 'cabac' because we can delete the last 'ac'.
The answer provided is the shortest such string that satisfies these properties.

Example 2:

Input: str1 = 'aaaaaaaa', str2 = 'aaaaaaaa'
Output: 'aaaaaaaa'


Constraints:

1 <= str1.length, str2.length <= 1000
str1 and str2 consist of lowercase English letters.


```

## 翻译

给定两个字符串 str1 和 str2，返回以两者为子序列的最短字符串。如果有多个，返回任意一个。

## Approach

先求 LCS（最长公共子序列），再根据 LCS 回溯构造 SCS（最短公共超序列）。

1. 用 DP 求 LCS 的 dp 表：dp[i][j] = str1[0..i-1] 和 str2[0..j-1] 的 LCS 长度
2. 回溯构造结果：从 dp[m][n] 出发
   - 若 str1[i-1] == str2[j-1]：该字符属于 LCS，只添加一次，i--, j--
   - 否则：取 dp 值较大的方向，添加跳过的字符
3. 最后添加两个字符串剩余的字符

时间复杂度 O(m×n)，空间复杂度 O(m×n)。

## Solution

[SourceCode](./solution.js)
