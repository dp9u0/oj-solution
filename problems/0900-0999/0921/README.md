# [921] Minimum Add to Make Parentheses Valid

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/description/)

* algorithms
* Medium (74.40%)
* Likes:    4953
* Dislikes: 249
* Testcase Example:  '"())"'

```md
A parentheses string is valid if and only if:

It is the empty string,
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.

You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.

For example, if s = '()))', you can insert an opening parenthesis to be '(()))' or a closing parenthesis to be '())))'.

Return the minimum number of moves required to make s valid.

Example 1:

Input: s = '())'
Output: 1

Example 2:

Input: s = '((('
Output: 3


Constraints:

1 <= s.length <= 1000
s[i] is either &#39;(&#39; or &#39;)&#39;.


```

## 翻译

给定一个只含 `(` 和 `)` 的字符串 `s`，每次可以在任意位置插入一个括号。返回使字符串有效的最少插入次数。

## Approach

计数法：维护 `open` 记录未匹配的左括号数。遇到 `(` 则 open++，遇到 `)` 则 open--（若 open > 0）或需要补一个 `(`（result++）。最终还需要补 open 个 `)`。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
