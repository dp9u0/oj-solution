# [2232] Minimize Result by Adding Parentheses to Expression

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimize-result-by-adding-parentheses-to-expression/description/)

* algorithms
* Medium (68.17%)
* Likes:    226
* Dislikes: 345
* Testcase Example:  '"247+38"'

```md
You are given a 0-indexed string expression of the form '<num1>+<num2>' where <num1> and <num2> represent positive integers.
Add a pair of parentheses to expression such that after the addition of parentheses, expression is a valid mathematical expression and evaluates to the smallest possible value. The left parenthesis must be added to the left of &#39;+&#39; and the right parenthesis must be added to the right of &#39;+&#39;.
Return expression after adding a pair of parentheses such that expression evaluates to the smallest possible value. If there are multiple answers that yield the same result, return any of them.
The input has been generated such that the original value of expression, and the value of expression after adding any pair of parentheses that meets the requirements fits within a signed 32-bit integer.

Example 1:

Input: expression = '247+38'
Output: '2(47+38)'
Explanation: The expression evaluates to 2 * (47 + 38) = 2 * 85 = 170.
Note that '2(4)7+38' is invalid because the right parenthesis must be to the right of the &#39;+&#39;.
It can be shown that 170 is the smallest possible value.

Example 2:

Input: expression = '12+34'
Output: '1(2+3)4'
Explanation: The expression evaluates to 1 * (2 + 3) * 4 = 1 * 5 * 4 = 20.

Example 3:

Input: expression = '999+999'
Output: '(999+999)'
Explanation: The expression evaluates to 999 + 999 = 1998.


Constraints:

3 <= expression.length <= 10
expression consists of digits from &#39;1&#39; to &#39;9&#39; and &#39;+&#39;.
expression starts and ends with digits.
expression contains exactly one &#39;+&#39;.
The original value of expression, and the value of expression after adding any pair of parentheses that meets the requirements fits within a signed 32-bit integer.


```

## 中文翻译

给定形如 "num1+num2" 的表达式，在 '+' 左右各加一个括号，使结果最小。左括号在 '+' 左侧某位置，右括号在 '+' 右侧某位置，括号外的部分作为乘法因子。

## 解题思路

暴力枚举：左括号放在 num1 的每个分割位置，右括号放在 num2 的每个分割位置。表达式变为 a*(b+c)*d，取最小值。

## Solution

[SourceCode](./solution.js)
