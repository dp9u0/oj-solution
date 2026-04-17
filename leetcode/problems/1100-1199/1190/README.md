# [1190] Reverse Substrings Between Each Pair of Parentheses

## Description

[LeetCode Problem Description](https://leetcode.com/problems/reverse-substrings-between-each-pair-of-parentheses/description/)

* algorithms
* Medium (71.97%)
* Likes:    2944
* Dislikes: 131
* Testcase Example:  '"(abcd)"'

```md
You are given a string s that consists of lower case English letters and brackets.
Reverse the strings in each pair of matching parentheses, starting from the innermost one.
Your result should not contain any brackets.

Example 1:

Input: s = '(abcd)'
Output: 'dcba'

Example 2:

Input: s = '(u(love)i)'
Output: 'iloveu'
Explanation: The substring 'love' is reversed first, then the whole string is reversed.

Example 3:

Input: s = '(ed(et(oc))el)'
Output: 'leetcode'
Explanation: First, we reverse the substring 'oc', then 'etco', and finally, the whole string.


Constraints:

1 <= s.length <= 2000
s only contains lower case English characters and parentheses.
It is guaranteed that all parentheses are balanced.


```

## 翻译

给定一个由小写字母和括号组成的字符串 s，从最内层开始，反转每对匹配括号中的子串。结果不包含括号。

## 解题思路

用栈模拟。遍历字符串，遇到左括号压入当前位置，遇到右括号弹出栈顶位置，将该区间内的字符反转。最后拼接所有非括号字符。时间复杂度 O(n^2)，空间 O(n)。

## Solution

[SourceCode](./solution.js)
