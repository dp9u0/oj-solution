# [964] Least Operators to Express Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/least-operators-to-express-number/description/)

* algorithms
* Hard (48.51%)
* Likes:    328
* Dislikes: 70
* Testcase Example:  '3\n19'

```md
Given a single positive integer x, we will write an expression of the form x (op1) x (op2) x (op3) x ... where each operator op1, op2, etc. is either addition, subtraction, multiplication, or division (+, -, *, or /). For example, with x = 3, we might write 3 * 3 / 3 + 3 - 3 which is a value of 3.
When writing such an expression, we adhere to the following conventions:

The division operator (/) returns rational numbers.
There are no parentheses placed anywhere.
We use the usual order of operations: multiplication and division happen before addition and subtraction.
It is not allowed to use the unary negation operator (-). For example, 'x - x' is a valid expression as it only uses subtraction, but '-x + x' is not because it uses negation.

We would like to write an expression with the least number of operators such that the expression equals the given target. Return the least number of operators used.

Example 1:

Input: x = 3, target = 19
Output: 5
Explanation: 3 * 3 + 3 * 3 + 3 / 3.
The expression contains 5 operations.

Example 2:

Input: x = 5, target = 501
Output: 8
Explanation: 5 * 5 * 5 * 5 - 5 * 5 * 5 + 5 / 5.
The expression contains 8 operations.

Example 3:

Input: x = 100, target = 100000000
Output: 3
Explanation: 100 * 100 * 100 * 100.
The expression contains 3 operations.


Constraints:

2 <= x <= 100
1 <= target <= 2 * 108


```

## 中文翻译

给定正整数 x，用 x 和运算符 (+, -, *, /) 构成表达式（形式为 x op1 x op2 x ...），使其等于 target。求最少运算符数量。除法产生有理数，遵循标准运算优先级，不允许一元取负。

## 解题思路

将 target 表示为 x 进制。对于每一位，值为 d，可以用 d 个 x/x + ... 或用 x - (x-d) 个 x/x + ... 来表示。对每一位取 min(cost_pos, cost_neg)，用递归+记忆化求解。

对于 x^i 位的系数 d：正表示代价为 d * i（用 d 次 x^i 相加），负表示代价为 (x - d) * i（凑到 x^(i+1) 再减）。

## Solution

[SourceCode](./solution.js)
