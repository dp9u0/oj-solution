# [3292] Minimum Number of Valid Strings to Form Target II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii/description/)

* algorithms
* Hard (20.50%)
* Likes:    85
* Dislikes: 10
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
1 <= words[i].length <= 5 * 104
The input is generated such that sum(words[i].length) <= 105.
words[i] consists only of lowercase English letters.
1 <= target.length <= 5 * 104
target consists only of lowercase English letters.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定字符串数组 words 和目标字符串 target。"有效字符串"定义为 words 中任意字符串的前缀。求拼接出 target 所需的最少有效字符串数量，若无法构成则返回 -1。

## 解题思路

**Z 函数 + 贪心跳跃**

问题分两步：

1. **计算每个位置的最大匹配长度**：对每个 word，构造 `word + '#' + target`，用 Z 函数求出 target 每个位置与该 word 前缀的最长公共前缀。对所有 word 取最大值，得到 maxLen[i]。

2. **贪心覆盖**：maxLen[i] 表示从位置 i 出发可以覆盖 [i, i+maxLen[i])。转化为经典的跳跃游戏问题，用贪心策略求最小跳跃次数。

时间复杂度 O(sum(|word|) + |words| × |target|)。
