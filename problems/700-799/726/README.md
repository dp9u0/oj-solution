# [726] Number of Atoms

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-atoms/description/)

* algorithms
* Hard (65.25%)
* Likes:    1998
* Dislikes: 414
* Testcase Example:  '"H2O"'

```md
Given a string formula representing a chemical formula, return the count of each atom.
The atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name.
One or more digits representing that element&#39;s count may follow if the count is greater than 1. If the count is 1, no digits will follow.

For example, 'H2O' and 'H2O2' are possible, but 'H1O2' is impossible.

Two formulas are concatenated together to produce another formula.

For example, 'H2O2He3Mg4' is also a formula.

A formula placed in parentheses, and a count (optionally added) is also a formula.

For example, '(H2O2)' and '(H2O2)3' are formulas.

Return the count of all elements as a string in the following form: the first name (in sorted order), followed by its count (if that count is more than 1), followed by the second name (in sorted order), followed by its count (if that count is more than 1), and so on.
The test cases are generated so that all the values in the output fit in a 32-bit integer.

Example 1:

Input: formula = 'H2O'
Output: 'H2O'
Explanation: The count of elements are {&#39;H&#39;: 2, &#39;O&#39;: 1}.

Example 2:

Input: formula = 'Mg(OH)2'
Output: 'H2MgO2'
Explanation: The count of elements are {&#39;H&#39;: 2, &#39;Mg&#39;: 1, &#39;O&#39;: 2}.

Example 3:

Input: formula = 'K4(ON(SO3)2)2'
Output: 'K4N2O14S4'
Explanation: The count of elements are {&#39;K&#39;: 4, &#39;N&#39;: 2, &#39;O&#39;: 14, &#39;S&#39;: 4}.


Constraints:

1 <= formula.length <= 1000
formula consists of English letters, digits, &#39;(&#39;, and &#39;)&#39;.
formula is always valid.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

解析化学式（元素 = 大写字母 + 若干小写；可带 >1 的计数；括号可嵌套并可带倍数），按元素名排序输出 `名+数量(>1 才写)`。

示例：`'H2O'` → `'H2O'`；`'Mg(OH)2'` → `'H2MgO2'`；`'K4(ON(SO3)2)2'` → `'K4N2O14S4'`

## 解题思路

经典**栈式解析**：栈存放每层括号的 Map<元素, 数量>；遇 `(` 压入空表，遇 `)` 弹出并乘以后缀数字合并到上层；否则读元素名 + 计数加入栈顶。最后栈底 Map 排序输出。O(len)。
