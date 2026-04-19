# [3734] Lexicographically Smallest Palindromic Permutation Greater Than Target

## Description

[LeetCode Problem Description](https://leetcode.com/problems/lexicographically-smallest-palindromic-permutation-greater-than-target/description/)

* algorithms
* Hard (25.01%)
* Likes:    40
* Dislikes: 4
* Testcase Example:  '"baba"\n"abba"'

```md
You are given two strings s and target, each of length n, consisting of lowercase English letters.
Return the lexicographically smallest string that is both a palindromic permutation of s and strictly greater than target. If no such permutation exists, return an empty string.

Example 1:

Input: s = 'baba', target = 'abba'
Output: 'baab'
Explanation:

The palindromic permutations of s (in lexicographical order) are 'abba' and 'baab'.
The lexicographically smallest permutation that is strictly greater than target is 'baab'.


Example 2:

Input: s = 'baba', target = 'bbaa'
Output: ''
Explanation:

The palindromic permutations of s (in lexicographical order) are 'abba' and 'baab'.
None of them is lexicographically strictly greater than target. Therefore, the answer is ''.


Example 3:

Input: s = 'abc', target = 'abb'
Output: ''
Explanation:
s has no palindromic permutations. Therefore, the answer is ''.

Example 4:

Input: s = 'aac', target = 'abb'
Output: 'aca'
Explanation:

The only palindromic permutation of s is 'aca'.
'aca' is strictly greater than target. Therefore, the answer is 'aca'.



Constraints:

1 <= n == s.length == target.length <= 300
s and target consist of only lowercase English letters.


```

## 翻译

给定两个长度为 n 的字符串 s 和 target，由小写英文字母组成。
返回 s 的所有回文排列中，字典序严格大于 target 的最小回文串。如果不存在，返回空字符串。

## 解题思路

贪心匹配 + 回溯。只需求回文的前半部分，后半部分由前半部分反转得到。

1. 统计 s 中字符频率，检查是否能构成回文（最多一个奇数字符）
2. 计算半数频率（每个字符用 count/2 次构成前半部分）
3. 贪心匹配 target 前半部分：逐位尝试放置 target 对应字符，若不可行则尝试更大的字符，并用最小字符填充剩余位置
4. 若完全匹配 target 前半部分，构建完整回文并比较；若不大于 target，则回溯找下一个更大的前半部分

## Solution

[SourceCode](./solution.js)
