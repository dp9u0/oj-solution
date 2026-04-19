# [1910] Remove All Occurrences of a Substring

## Description

[LeetCode Problem Description](https://leetcode.com/problems/remove-all-occurrences-of-a-substring/description/)

* algorithms
* Medium (78.46%)
* Likes:    2621
* Dislikes: 90
* Testcase Example:  '"daabcbaabcbc"\n"abc"'

```md
Given two strings s and part, perform the following operation on s until all occurrences of the substring part are removed:

Find the leftmost occurrence of the substring part and remove it from s.

Return s after removing all occurrences of part.
A substring is a contiguous sequence of characters in a string.

Example 1:

Input: s = 'daabcbaabcbc', part = 'abc'
Output: 'dab'
Explanation: The following operations are done:
- s = 'daabcbaabcbc', remove 'abc' starting at index 2, so s = 'dabaabcbc'.
- s = 'dabaabcbc', remove 'abc' starting at index 4, so s = 'dababc'.
- s = 'dababc', remove 'abc' starting at index 3, so s = 'dab'.
Now s has no occurrences of 'abc'.

Example 2:

Input: s = 'axxxxyyyyb', part = 'xy'
Output: 'ab'
Explanation: The following operations are done:
- s = 'axxxxyyyyb', remove 'xy' starting at index 4 so s = 'axxxyyyb'.
- s = 'axxxyyyb', remove 'xy' starting at index 3 so s = 'axxyyb'.
- s = 'axxyyb', remove 'xy' starting at index 2 so s = 'axyb'.
- s = 'axyb', remove 'xy' starting at index 1 so s = 'ab'.
Now s has no occurrences of 'xy'.


Constraints:

1 <= s.length <= 1000
1 <= part.length <= 1000
s​​​​​​ and part consists of lowercase English letters.


```

## 中文翻译

给定字符串 s 和 part，反复删除 s 中最左边的 part 子串，直到不存在。返回最终字符串。

## 解题思路

栈模拟。遍历 s，每个字符入栈，入栈后检查栈顶是否匹配 part，匹配则弹出 len(part) 个字符。

## Solution

[SourceCode](./solution.js)
