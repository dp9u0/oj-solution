# [678] Valid Parenthesis String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/valid-parenthesis-string/description/)

* algorithms
* Medium (39.96%)
* Likes:    6997
* Dislikes: 222
* Testcase Example:  '"()"'

```md
Given a string s containing only three types of characters: &#39;(&#39;, &#39;)&#39; and &#39;*&#39;, return true if s is valid.
The following rules define a valid string:

Any left parenthesis &#39;(&#39; must have a corresponding right parenthesis &#39;)&#39;.
Any right parenthesis &#39;)&#39; must have a corresponding left parenthesis &#39;(&#39;.
Left parenthesis &#39;(&#39; must go before the corresponding right parenthesis &#39;)&#39;.
&#39;*&#39; could be treated as a single right parenthesis &#39;)&#39; or a single left parenthesis &#39;(&#39; or an empty string ''.


Example 1:
Input: s = "()"
Output: true
Example 2:
Input: s = "(*)"
Output: true
Example 3:
Input: s = "(*))"
Output: true


Constraints:

1 <= s.length <= 100
s[i] is &#39;(&#39;, &#39;)&#39; or &#39;*&#39;.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定只包含 '('、')' 和 '*' 的字符串 s，'*' 可以当作 '(' 或 ')' 或空字符串，判断 s 是否能成为有效的括号字符串。

## 解题思路

**贪心 - 范围追踪**

维护未匹配左括号的可能数量范围 [lo, hi]：
- 遇到 '('：lo++, hi++
- 遇到 ')'：lo--, hi--
- 遇到 '*'：lo--（当右括号）, hi++（当左括号）

如果 hi < 0，说明右括号太多，返回 false。lo 用 max(lo, 0) 保证不小于 0。

最终 lo == 0 说明可以匹配成功。

时间复杂度 O(n)，空间复杂度 O(1)。
