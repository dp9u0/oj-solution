# [583] Delete Operation for Two Strings

## Description

[LeetCode Problem Description](https://leetcode.com/problems/delete-operation-for-two-strings/description/)

* algorithms
* Medium (65.44%)
* Likes:    6161
* Dislikes: 93
* Testcase Example:  '"sea"\n"eat"'

```md
Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same.
In one step, you can delete exactly one character in either string.

Example 1:

Input: word1 = 'sea', word2 = 'eat'
Output: 2
Explanation: You need one step to make 'sea' to 'ea' and another step to make 'eat' to 'ea'.

Example 2:

Input: word1 = 'leetcode', word2 = 'etco'
Output: 4


Constraints:

1 <= word1.length, word2.length <= 500
word1 and word2 consist of only lowercase English letters.


```

## 题目翻译

给定两个字符串 `word1` 和 `word2`，返回使它们相同所需的最少操作步数。每步可以删除任一字符串中的一个字符。

**示例 1：** word1 = "sea", word2 = "eat" → 2（"sea"→"ea"，"eat"→"ea"）
**示例 2：** word1 = "leetcode", word2 = "etco" → 4

**约束：**
- 1 <= word1.length, word2.length <= 500
- 只包含小写英文字母

## 解题思路 (Approach)

转化为最长公共子序列（LCS）问题。最少删除步数 = word1.length + word2.length - 2 * LCS(word1, word2)。

使用 DP 求 LCS：dp[i][j] 表示 word1[0..i-1] 和 word2[0..j-1] 的 LCS 长度。如果 word1[i-1] == word2[j-1]，dp[i][j] = dp[i-1][j-1] + 1；否则 dp[i][j] = max(dp[i-1][j], dp[i][j-1])。

时间复杂度：O(m*n)，空间复杂度：O(m*n)。

## Solution

[SourceCode](./solution.js)
