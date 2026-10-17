# [面试题 16.26] 计算器

## Description


```md
https://leetcode.cn/problems/calculator-lcci/description/
* lcci
* Medium (40.93%)
* Likes:    119
* Dislikes: -
* Testcase Example:  '"3+2*2"'
给定一个包含正整数、加(+)、减(-)、乘(*)、除(/)的算数表达式(括号除外)，计算其结果。
表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格  。 整数除法仅保留整数部分。
示例 1：
输入："3+2*2"
输出：7
示例 2：
输入：" 3/2 "
输出：1
示例 3：
输入：" 3+5 / 2 "
输出：5
说明：
你可以假设所给定的表达式都是有效的。
请不要使用内置的库函数 eval。
Hint 1: 我们可以从左到右处理表达式吗？为什么会失败？
Hint 2: 乘法和除法是优先级较高的运算。在3*4 + 5*9/2 + 3这样的表达式中，乘法和除法部分需要组合在一起。
Hint 3: 把它想成当你遇到乘法或除法时，跳至一个单独的“进程”来计算该结果。
Hint 4: 你还可以维护两个栈，一个用于操作符，另一个用于数字。每次看到一个数字，就把它压入栈。那么操作符呢？什么时候从栈中取出操作符并将它们与数字进行计算？

```

## Description (English)

Given an arithmetic expression containing non-negative integers, +, -, * and / (no parentheses), compute its result. The expression contains only non-negative integers, the four operators and spaces. Integer division keeps only the integer part. Do not use eval.

Example 1: "3+2*2" → 7
Example 2: " 3/2 " → 1
Example 3: " 3+5 / 2 " → 5

The expression is guaranteed valid.

## 思路

单栈一趟 O(n)：扫描中 `op` 记录待施加于当前 num 的前驱运算符——遇运算符/串尾即结算：`+`/`-` 压 ±num（延迟求和），`*`/`/` 弹栈顶立即结算后压回（优先级即此体现），除法 `Math.trunc` 向零取整。末尾求和。

## Solution

[SourceCode](./solution.js)
