# [1896] Minimum Cost to Change the Final Value of Expression

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-cost-to-change-the-final-value-of-expression/description/)

* algorithms
* Hard (50.54%)
* Likes:    248
* Dislikes: 43
* Testcase Example:  '"1&(0

```md
1)"'
You are given a valid boolean expression as a string expression consisting of the characters &#39;1&#39;,&#39;0&#39;,&#39;&amp;&#39; (bitwise AND operator),&#39;
&#39; (bitwise OR operator),&#39;(&#39;, and &#39;)&#39;.

For example, '()1
1' and '(1)&amp;()' are not valid while '1', '(((1))
(0))', and '1
(0&amp;(1))' are valid expressions.

Return the minimum cost to change the final value of the expression.

For example, if expression = '1
1
(0&amp;0)&amp;1', its value is 1
1
(0&amp;0)&amp;1 = 1
1
0&amp;1 = 1
0&amp;1 = 1&amp;1 = 1. We want to apply operations so that the new expression evaluates to 0.

The cost of changing the final value of an expression is the number of operations performed on the expression. The types of operations are described as follows:

Turn a &#39;1&#39; into a &#39;0&#39;.
Turn a &#39;0&#39; into a &#39;1&#39;.
Turn a &#39;&amp;&#39; into a &#39;
&#39;.
Turn a &#39;
&#39; into a &#39;&amp;&#39;.

Note: &#39;&amp;&#39; does not take precedence over &#39;
&#39; in the order of calculation. Evaluate parentheses first, then in left-to-right order.

Example 1:

Input: expression = '1&amp;(0
1)'
Output: 1
Explanation: We can turn '1&amp;(0
1)' into '1&amp;(0&amp;1)' by changing the &#39;
&#39; to a &#39;&amp;&#39; using 1 operation.
The new expression evaluates to 0.

Example 2:

Input: expression = '(0&amp;0)&amp;(0&amp;0&amp;0)'
Output: 3
Explanation: We can turn '(0&amp;0)&amp;(0&amp;0&amp;0)' into '(0
1)
(0&amp;0&amp;0)' using 3 operations.
The new expression evaluates to 1.

Example 3:

Input: expression = '(0
(1
0&amp;1))'
Output: 1
Explanation: We can turn '(0
(1
0&amp;1))' into '(0
(0
0&amp;1))' using 1 operation.
The new expression evaluates to 0.

Constraints:

1 <= expression.length <= 105
expressiononly contains&#39;1&#39;,&#39;0&#39;,&#39;&amp;&#39;,&#39;
&#39;,&#39;(&#39;, and&#39;)&#39;
All parenthesesare properly matched.
There will be no empty parentheses (i.e:'()'is not a substring ofexpression).


```

## 翻译

给定一个合法的布尔表达式，包含 '0','1','&','|','(',')'。操作包括：翻转一个数字（0↔1，代价1）或翻转一个运算符（&↔|，代价1）。返回使表达式最终值改变的最小操作数。

## 解题思路

用栈模拟表达式求值，每个子表达式维护 [value, cost_to_flip]。
- 叶子 '0' → [0, 1]，'1' → [1, 1]
- 合并 a op b 时，根据 a,b 的值和 op 分情况讨论翻转结果的最小代价：
  - 可以翻转操作数（代价为其 cost）
  - 可以翻转运算符（代价 1）
  - 可以同时翻转运算符和操作数
- 对每种 (va, vb, op) 组合枚举所有方案取最小值
- 括号用栈处理，遇到 ')' 时弹出并求值

## Solution

[SourceCode](./solution.js)
