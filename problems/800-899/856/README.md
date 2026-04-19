# [856] Score of Parentheses

## Description

[LeetCode Problem Description](https://leetcode.com/problems/score-of-parentheses/description/)

* algorithms
* Medium (63.61%)
* Likes:    5607
* Dislikes: 236
* Testcase Example:  '"()"'

```md
Given a balanced parentheses string s, return the score of the string.
The score of a balanced parentheses string is based on the following rule:

'()' has score 1.
AB has score A + B, where A and B are balanced parentheses strings.
(A) has score 2 * A, where A is a balanced parentheses string.


Example 1:

Input: s = '()'
Output: 1

Example 2:

Input: s = '(())'
Output: 2

Example 3:

Input: s = '()()'
Output: 2


Constraints:

2 <= s.length <= 50
s consists of only &#39;(&#39; and &#39;)&#39;.
s is a balanced parentheses string.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个平衡括号字符串 s，计算其分数。规则：
- "()" 的分数为 1
- AB 的分数为 A + B（拼接）
- (A) 的分数为 2 * A（嵌套）

## 解题思路

**栈**

用栈模拟括号嵌套深度。遍历字符串：
- 遇到 '(' 时压入 0（占位）
- 遇到 ')' 时弹出栈顶：如果弹出的是 0，说明是 "()"，贡献 1；否则是嵌套的子表达式，贡献 2 * value。将结果加到新的栈顶上。

最终栈中只剩一个元素即答案。

时间复杂度 O(n)，空间复杂度 O(n)。
