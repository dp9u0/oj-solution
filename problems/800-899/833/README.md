# [833] Find And Replace in String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-and-replace-in-string/description/)

* algorithms
* Medium (50.85%)
* Likes:    1250
* Dislikes: 1050
* Testcase Example:  '"abcd"\n[0, 2]\n["a", "cd"]\n["eee", "ffff"]'

```md
You are given a 0-indexed string s that you must perform k replacement operations on. The replacement operations are given as three 0-indexed parallel arrays, indices, sources, and targets, all of length k.
To complete the ith replacement operation:

Check if the substring sources[i] occurs at index indices[i] in the original string s.
If it does not occur, do nothing.
Otherwise if it does occur, replace that substring with targets[i].

For example, if s = 'abcd', indices[i] = 0, sources[i] = 'ab', and targets[i] = 'eee', then the result of this replacement will be 'eeecd'.
All replacement operations must occur simultaneously, meaning the replacement operations should not affect the indexing of each other. The testcases will be generated such that the replacements will not overlap.

For example, a testcase with s = 'abc', indices = [0, 1], and sources = ['ab','bc'] will not be generated because the 'ab' and 'bc' replacements overlap.

Return the resulting string after performing all replacement operations on s.
A substring is a contiguous sequence of characters in a string.

Example 1:


Input: s = 'abcd', indices = [0, 2], sources = ['a', 'cd'], targets = ['eee', 'ffff']
Output: 'eeebffff'
Explanation:
'a' occurs at index 0 in s, so we replace it with 'eee'.
'cd' occurs at index 2 in s, so we replace it with 'ffff'.

Example 2:


Input: s = 'abcd', indices = [0, 2], sources = ['ab','ec'], targets = ['eee','ffff']
Output: 'eeecd'
Explanation:
'ab' occurs at index 0 in s, so we replace it with 'eee'.
'ec' does not occur at index 2 in s, so we do nothing.


Constraints:

1 <= s.length <= 1000
k == indices.length == sources.length == targets.length
1 <= k <= 100
0 <= indexes[i] < s.length
1 <= sources[i].length, targets[i].length <= 50
s consists of only lowercase English letters.
sources[i] and targets[i] consist of only lowercase English letters.


```

## 中文翻译

给定字符串 s 和多个替换操作（indices、sources、targets），对每个操作检查 s 中 indices[i] 位置是否匹配 sources[i]，若匹配则替换为 targets[i]。所有操作同时进行，不会重叠。

## 解题思路

将操作按 index 排序，从左到右遍历字符串，检查每个位置是否有匹配的替换操作。用 Map 记录每个 index 对应的 source 和 target。

时间复杂度：O(n + k log k)，空间复杂度：O(n + k)

## Solution

[SourceCode](./solution.js)
