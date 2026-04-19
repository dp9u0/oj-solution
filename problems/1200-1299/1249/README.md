# [1249] Minimum Remove to Make Valid Parentheses

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/description/)

* algorithms
* Medium (71.37%)
* Likes:    7401
* Dislikes: 167
* Testcase Example:  '"lee(t(c)o)de)"'

```md
Given a string s of &#39;(&#39; , &#39;)&#39; and lowercase English characters.
Your task is to remove the minimum number of parentheses ( &#39;(&#39; or &#39;)&#39;, in any positions ) so that the resulting parentheses string is valid and return any valid string.
Formally, a parentheses string is valid if and only if:

It is the empty string, contains only lowercase characters, or
It can be written as AB (A concatenated with B), where A and B are valid strings, or
It can be written as (A), where A is a valid string.


Example 1:

Input: s = 'lee(t(c)o)de)'
Output: 'lee(t(c)o)de'
Explanation: 'lee(t(co)de)' , 'lee(t(c)ode)' would also be accepted.

Example 2:

Input: s = 'a)b(c)d'
Output: 'ab(c)d'

Example 3:

Input: s = '))(('
Output: ''
Explanation: An empty string is also valid.


Constraints:

1 <= s.length <= 105
s[i] is either&#39;(&#39; , &#39;)&#39;, or lowercase English letter.


```

## 翻译

给定包含 '('、')' 和小写字母的字符串，删除最少数量的括号使结果字符串的括号有效。返回任意一个有效结果。

## Approach

用栈标记需要删除的括号：遍历字符串，遇到 '(' 压入索引，遇到 ')' 时如果栈非空则弹出（匹配），否则标记该 ')' 为待删除。遍历结束后栈中剩余的 '(' 也标记为待删除。最后拼接未被标记的字符。

## Solution

[SourceCode](./solution.js)
