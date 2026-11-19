# [772] 基本计算器 III

## Description


```md
https://leetcode.cn/problems/basic-calculator-iii/description/
* algorithms
* Hard (53.91%)
* Likes:    195
* Dislikes: -
* Testcase Example:  '"1+1"'
实现一个基本的计算器来计算简单的表达式字符串。
表达式字符串只包含非负整数，算符 +、-、*、/ ，左括号 ( 和右括号 ) 。整数除法需要 向下截断 。
你可以假定给定的表达式总是有效的。所有的中间结果的范围均满足 [-231, 231 - 1] 。
注意：你不能使用任何将字符串作为表达式求值的内置函数，比如 eval() 。

示例 1：
输入：s = "1+1"
输出：2
示例 2：
输入：s = "6-4/2"
输出：4
示例 3：
输入：s = "2*(5+5*2)/3+(6/2+8)"
输出：21

提示：
1 <= s <= 104
s 由整数、'+'、'-'、'*'、'/'、'(' 和 ')' 组成
s 是一个 有效的 表达式

```

## Solution

[SourceCode](./solution.js)

## Translation

Implement a basic calculator evaluating an expression string containing non-negative integers, `+ - * /`, parentheses. Division truncates. No eval(). Intermediate results fit in 32-bit int. Expression is valid.

- Example: "2*(5+5*2)/3+(6/2+8)" → `21`

## Approach

**递归下降 + 符号栈**。单次扫描遇 `(` 递归取子表达式值。每个操作数就绪时按前置算符结算:`+` 压 num,`-` 压 -num,`*` `/` 弹栈顶立即结算后压回(关键:`-` 必须压 -num 而非与栈顶合并,否则 `a-b*c` 会算成 `(a-b)*c`)。结束对栈求和。除法 Math.trunc 向零截断。O(n)。
