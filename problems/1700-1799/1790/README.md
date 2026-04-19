# [1790] Check if One String Swap Can Make Strings Equal

## Description

[LeetCode Problem Description](https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/description/)

* algorithms
* Easy (49.50%)
* Likes:    1710
* Dislikes: 87
* Testcase Example:  '"bank"\n"kanb"'

```md
You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.
Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.

Example 1:

Input: s1 = 'bank', s2 = 'kanb'
Output: true
Explanation: For example, swap the first character with the last character of s2 to make 'bank'.

Example 2:

Input: s1 = 'attack', s2 = 'defend'
Output: false
Explanation: It is impossible to make them equal with one string swap.

Example 3:

Input: s1 = 'kelb', s2 = 'kelb'
Output: true
Explanation: The two strings are already equal, so no string swap operation is required.


Constraints:

1 <= s1.length, s2.length <= 100
s1.length == s2.length
s1 and s2 consist of only lowercase English letters.


```

## 中文翻译

给定两个等长字符串 s1 和 s2。字符串交换操作是指选择字符串中的两个下标（可以相同），交换这两个位置的字符。如果对其中一个字符串最多执行一次交换操作就能使两字符串相等，返回 true，否则返回 false。

## 解题思路

遍历两个字符串，收集所有不同的位置。如果不同的位置数量为 0，直接返回 true；如果恰好为 2，检查交叉位置字符是否匹配（即 s1[i] === s2[j] 且 s1[j] === s2[i]）；否则返回 false。

## Solution

[SourceCode](./solution.js)
