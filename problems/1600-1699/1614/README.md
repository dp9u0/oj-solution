# [1614] 括号的最大嵌套深度

## Description


```md
https://leetcode.cn/problems/maximum-nesting-depth-of-the-parentheses/description/
* algorithms
* Easy (81.40%)
* Likes:    163
* Dislikes: -
* Testcase Example:  '"(1+(2*3)+((8)/4))+1"'
给定 有效括号字符串 s，返回 s 的 嵌套深度。嵌套深度是嵌套括号的 最大 数量。

示例 1：
输入：s = "(1+(2*3)+((8)/4))+1"
输出：3
解释：数字 8 在嵌套的 3 层括号中。
示例 2：
输入：s = "(1)+((2))+(((3)))"
输出：3
解释：数字 3 在嵌套的 3 层括号中。
示例 3：
输入：s = "()(())((()()))"
输出：3

提示：
1 <= s.length <= 100
s 由数字 0-9 和字符 '+'、'-'、'*'、'/'、'('、')' 组成
题目数据保证括号字符串 s 是 有效的括号字符串
Hint 1: The depth of any character in the VPS is the ( number of left brackets before it ) - ( number of right brackets before it )

```

## Description (English)

Given a valid parentheses string `s`, return the nesting depth of `s`. The nesting depth is the maximum number of nested parentheses.

Example 1:
Input: s = "(1+(2*3)+((8)/4))+1"
Output: 3
Explanation: The digit 8 is inside 3 nested parentheses.

Example 2:
Input: s = "(1)+((2))+(((3)))"
Output: 3
Explanation: The digit 3 is inside 3 nested parentheses.

Example 3:
Input: s = "()(())((()()))"
Output: 3

Constraints:
- 1 <= s.length <= 100
- s consists of digits 0-9 and the characters '+', '-', '*', '/', '(' and ')'
- It is guaranteed that s is a valid parentheses string (VPS)

Hint 1: The depth of any character in the VPS is the (number of left brackets before it) - (number of right brackets before it).

## Approach

遍历字符串，用一个计数器 `cur` 维护当前括号深度：
- 遇到 `(`：`cur++`，并用 `cur` 更新最大深度 `max`
- 遇到 `)`：`cur--`
- 其他字符（数字、运算符）不影响深度

由于题目保证 `s` 是有效括号字符串，无需校验合法性。无需真正的栈，计数器即可模拟栈的嵌套层数。

时间复杂度 O(n)，空间复杂度 O(1)。

## Solution

[SourceCode](./solution.js)
