# [1771] Maximize Palindrome Length From Subsequences

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-palindrome-length-from-subsequences/description/)

* algorithms
* Hard (38.36%)
* Likes:    567
* Dislikes: 18
* Testcase Example:  '"cacb"\n"cbba"'

```md
You are given two strings, word1 and word2. You want to construct a string in the following manner:

Choose some non-empty subsequence subsequence1 from word1.
Choose some non-empty subsequence subsequence2 from word2.
Concatenate the subsequences: subsequence1 + subsequence2, to make the string.

Return the length of the longest palindrome that can be constructed in the described manner. If no palindromes can be constructed, return 0.
A subsequence of a string s is a string that can be made by deleting some (possibly none) characters from s without changing the order of the remaining characters.
A palindrome is a string that reads the same forwardas well as backward.

Example 1:

Input: word1 = 'cacb', word2 = 'cbba'
Output: 5
Explanation: Choose 'ab' from word1 and 'cba' from word2 to make 'abcba', which is a palindrome.
Example 2:

Input: word1 = 'ab', word2 = 'ab'
Output: 3
Explanation: Choose 'ab' from word1 and 'a' from word2 to make 'aba', which is a palindrome.
Example 3:

Input: word1 = 'aa', word2 = 'bb'
Output: 0
Explanation: You cannot construct a palindrome from the described method, so return 0.

Constraints:

1 <= word1.length, word2.length <= 1000
word1 and word2 consist of lowercase English letters.


```

## 题目翻译

给定两个字符串 word1 和 word2，要求：
1. 从 word1 中选择一个非空子序列 subsequence1
2. 从 word2 中选择一个非空子序列 subsequence2
3. 拼接 subsequence1 + subsequence2

返回能构造的最长回文串的长度。如果无法构造回文串则返回 0。

## 解题思路

**区间 DP - 最长回文子序列 (LPS)**

将 word1 和 word2 拼接成 s = word1 + word2，在 s 上做 LPS 区间 DP：
- `dp[i][j]` 表示 s[i..j] 的最长回文子序列长度
- 若 `s[i] == s[j]`，则 `dp[i][j] = dp[i+1][j-1] + 2`
- 否则 `dp[i][j] = max(dp[i+1][j], dp[i][j-1])`

最后遍历所有满足 i < n1 <= j 且 s[i] == s[j] 的位置对，取 dp[i][j] 的最大值。

时间复杂度 O(n²)，空间复杂度 O(n²)。

## Solution

[SourceCode](./solution.js)
