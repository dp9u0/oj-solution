# [3291] Minimum Number of Valid Strings to Form Target I

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-i/description/)

* algorithms
* Medium (21.80%)
* Likes:    179
* Dislikes: 17
* Testcase Example:  '["abc","aaaaa","bcdef"]\n"aabcdabc"'

```md
You are given an array of strings words and a string target.
A string x is called valid if x is a prefix of any string in words.
Return the minimum number of valid strings that can be concatenated to form target. If it is not possible to form target, return -1.

Example 1:

Input: words = ['abc','aaaaa','bcdef'], target = 'aabcdabc'
Output: 3
Explanation:
The target string can be formed by concatenating:

Prefix of length 2 of words[1], i.e. 'aa'.
Prefix of length 3 of words[2], i.e. 'bcd'.
Prefix of length 3 of words[0], i.e. 'abc'.


Example 2:

Input: words = ['abababab','ab'], target = 'ababaababa'
Output: 2
Explanation:
The target string can be formed by concatenating:

Prefix of length 5 of words[0], i.e. 'ababa'.
Prefix of length 5 of words[0], i.e. 'ababa'.


Example 3:

Input: words = ['abcdef'], target = 'xyz'
Output: -1


Constraints:

1 <= words.length <= 100
1 <= words[i].length <= 5 * 103
The input is generated such that sum(words[i].length) <= 105.
words[i] consists only of lowercase English letters.
1 <= target.length <= 5 * 103
target consists only of lowercase English letters.


```

## 题目翻译

给定字符串数组 words 和字符串 target。如果 x 是 words 中某个字符串的前缀，则称 x 为有效字符串。返回拼接有效字符串组成 target 所需的最少数量。如果无法组成 target，返回 -1。

## 解题思路

**Trie + 贪心跳跃游戏**

1. 用 Trie 存储 words 中所有字符串的前缀
2. 对 target 的每个位置 i，用 Trie 找出从位置 i 开始的最长有效前缀长度 maxLen[i]
3. 问题转化为跳跃游戏 II：从位置 0 出发，每次从位置 i 可跳到 [i, i+maxLen[i]]，求最少跳跃次数到达 n

## Solution

[SourceCode](./solution.js)
