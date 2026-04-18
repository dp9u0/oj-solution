# [3720] Lexicographically Smallest Permutation Greater Than Target

## Description

[LeetCode Problem Description](https://leetcode.com/problems/lexicographically-smallest-permutation-greater-than-target/description/)

* algorithms
* Medium (26.62%)
* Likes:    115
* Dislikes: 7
* Testcase Example:  '"abc"\n"bba"'

```md
You are given two strings s and target, both having length n, consisting of lowercase English letters.
Return the lexicographically smallest permutation of s that is strictly greater than target. If no permutation of s is lexicographically strictly greater than target, return an empty string.
A string a is lexicographically strictly greater than a string b (of the same length) if in the first position where a and b differ, string a has a letter that appears later in the alphabet than the corresponding letter in b.

Example 1:

Input: s = 'abc', target = 'bba'
Output: 'bca'
Explanation:

The permutations of s (in lexicographical order) are 'abc', 'acb', 'bac', 'bca', 'cab', and 'cba'.
The lexicographically smallest permutation that is strictly greater than target is 'bca'.


Example 2:

Input: s = 'leet', target = 'code'
Output: 'eelt'
Explanation:

The permutations of s (in lexicographical order) are 'eelt', 'eetl', 'elet', 'elte', 'etel', 'etle', 'leet', 'lete', 'ltee', 'teel', 'tele', and 'tlee'.
The lexicographically smallest permutation that is strictly greater than target is 'eelt'.


Example 3:

Input: s = 'baba', target = 'bbaa'
Output: ''
Explanation:

The permutations of s (in lexicographical order) are 'aabb', 'abab', 'abba', 'baab', 'baba', and 'bbaa'.
None of them is lexicographically strictly greater than target. Therefore, the answer is ''.



Constraints:

1 <= s.length == target.length <= 300
s and target consist of only lowercase English letters.


```

## 中文翻译

给定两个等长字符串 s 和 target，找到 s 的字典序最小排列，使得该排列严格大于 target。若不存在则返回空串。

## 解题思路

**贪心匹配 + 回溯**

先尝试逐位匹配 target 的前缀。若某位无法匹配且找不到更大的字符，则回溯到之前某位，放置比 target 该位更大的最小字符，剩余位置用最小字符填充。复杂度 O(n * 26)。

## Solution

[SourceCode](./solution.js)
