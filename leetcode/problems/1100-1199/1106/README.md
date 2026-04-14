# [1106] Parsing A Boolean Expression

## Description

[LeetCode Problem Description](https://leetcode.com/problems/parsing-a-boolean-expression/description/)

* algorithms
* Hard (69.80%)
* Likes:    1930
* Dislikes: 86
* Testcase Example:  '"&(

```md
(f))"'
A boolean expression is an expression that evaluates to either true or false. It can be in one of the following shapes:

&#39;t&#39; that evaluates to true.
&#39;f&#39; that evaluates to false.
&#39;!(subExpr)&#39; that evaluates to the logical NOT of the inner expression subExpr.
&#39;&amp;(subExpr1, subExpr2, ..., subExprn)&#39; that evaluates to the logical AND of the inner expressions subExpr1, subExpr2, ..., subExprn where n >= 1.
&#39;
(subExpr1, subExpr2, ..., subExprn)&#39; that evaluates to the logical OR of the inner expressions subExpr1, subExpr2, ..., subExprn where n >= 1.

Given a string expression that represents a boolean expression, return the evaluation of that expression.
It is guaranteed that the given expression is valid and follows the given rules.

Example 1:

Input: expression = '&amp;(
(f))'
Output: false
Explanation:
First, evaluate
(f) --> f. The expression is now '&amp;(f)'.
Then, evaluate &amp;(f) --> f. The expression is now 'f'.
Finally, return false.

Example 2:

Input: expression = '
(f,f,f,t)'
Output: true
Explanation: The evaluation of (false OR false OR false OR true) is true.

Example 3:

Input: expression = '!(&amp;(f,t))'
Output: true
Explanation:
First, evaluate &amp;(f,t) --> (false AND true) --> false --> f. The expression is now '!(f)'.
Then, evaluate !(f) --> NOT false --> true. We return true.


Constraints:

1 <= expression.length <= 2 * 104
expression[i] is one following characters: &#39;(&#39;, &#39;)&#39;, &#39;&amp;&#39;, &#39;
&#39;, &#39;!&#39;, &#39;t&#39;, &#39;f&#39;, and &#39;,&#39;.


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

解析布尔表达式。支持 't'(true)、'f'(false)、'!'(NOT)、'&'(AND)、'|'(OR) 操作符。表达式格式为运算符后跟括号内的子表达式（逗号分隔）。返回表达式的求值结果。

## 解题思路

用栈模拟。遍历表达式，遇到操作符压入操作符栈，遇到 't'/'f' 压入值栈。遇到 ')' 时，从值栈弹出当前括号内所有值，根据操作符栈顶的运算符计算结果，将结果压回值栈。O(n)。
