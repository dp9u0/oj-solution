# [面试题 16.07] 最大数值

## Description


```md
https://leetcode.cn/problems/maximum-lcci/description/
* lcci
* Easy (74.78%)
* Likes:    160
* Dislikes: -
* Testcase Example:  '2147483647\n-2147483648'
编写一个方法，找出两个数字a和b中最大的那一个。不得使用if-else或其他比较运算符。
示例：
输入： a = 1, b = 2
输出： 2
Hint 1: 如果a > b，则k为1，否则为0。如果给定k，你能返回最大值吗（没有比较或if-else逻辑）？
Hint 2: 如果当a > b时，k等于1，那么当k等于0时则相反，然后你可以返回a*k + b* (非k)。但你如何创建k？
Hint 3: 当a > b时，a – b > 0。你能得到a – b的符号位吗？
Hint 4: 你考虑过如何处理a – b中的整数溢出吗？

```

## Description (English)

Write a method to find the maximum of two numbers a and b. Do not use if-else or any comparison operator.

Example:
Input: a = 1, b = 2
Output: 2

Note: values span the full 32-bit integer range (e.g. 2147483647 and -2147483648).

## 思路

d = a − b；JS 双精度下 |d| < 2³² 精确无溢出，但直接对 d 取符号位会经 int32 回绕出错。先 `Math.floor(d / 2)` 缩半（符号不变，范围落入 int32）再 `>> 31 & 1` 得符号 k，答案 `a − k·d`——d<0 时 k=1 返回 b，否则返回 a。无 if-else、无比较运算符。

## Solution

[SourceCode](./solution.js)
