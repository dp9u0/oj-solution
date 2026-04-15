# [1614] Maximum Nesting Depth of the Parentheses

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/description/)

* algorithms
* Easy (84.83%)
* Likes:    2840
* Dislikes: 525
* Testcase Example:  '"(1+(2*3)+((8)/4))+1"'

```md
Given a valid parentheses string s, return the nesting depth of s. The nesting depth is the maximum number of nested parentheses.

Example 1:

Input: s = '(1+(2*3)+((8)/4))+1'
Output: 3
Explanation:
Digit 8 is inside of 3 nested parentheses in the string.

Example 2:

Input: s = '(1)+((2))+(((3)))'
Output: 3
Explanation:
Digit 3 is inside of 3 nested parentheses in the string.

Example 3:

Input: s = '()(())((()()))'
Output: 3


Constraints:

1 <= s.length <= 100
s consists of digits 0-9 and characters &#39;+&#39;, &#39;-&#39;, &#39;*&#39;, &#39;/&#39;, &#39;(&#39;, and &#39;)&#39;.
It is guaranteed that parentheses expression s is a VPS.


```

## 题目翻译

给定一个有效的括号字符串 `s`，返回 `s` 的嵌套深度。嵌套深度是指嵌套括号的最大层数。

## 解题思路

遍历字符串，遇到 `(` 时当前深度加 1，更新最大深度；遇到 `)` 时当前深度减 1。最终返回最大深度即可。

时间复杂度：O(n)，空间复杂度：O(1)。

## Solution

[SourceCode](./solution.js)
