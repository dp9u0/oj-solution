# [面试题 05.06] 整数转换

## Description


```md
https://leetcode.cn/problems/convert-integer-lcci/description/
* lcci
* Easy (51.54%)
* Likes:    63
* Dislikes: -
* Testcase Example:  '29\n15'
整数转换。编写一个函数，确定需要改变几个位才能将整数 A 转成整数 B。
示例 1：
输入：A = 29 （或者 0b11101）, B = 15（或者 0b01111）
输出：2
示例 2：
输入：A = 1，B = 2
输出：2
提示:
A，B范围在[-2147483648, 2147483647]之间
Hint 1: 你要怎样计算两个数字之间有多少位不同？
Hint 2: 想想异或表示什么。如果你把a异或b，那么结果中哪里是1？哪里是0？

```

## Description (English)

Convert Integer. Write a function that determines the number of bits you would have to flip to convert integer A to integer B.

Example 1:
Input: A = 29 (or 0b11101), B = 15 (or 0b01111)
Output: 2

Example 2:
Input: A = 1, B = 2
Output: 2

Note:
A and B are in the range [-2147483648, 2147483647].

## 思路

A 与 B 需要翻转的位，恰好是两者二进制表示中不同的位，而 `A ^ B` 正是"不同位为 1"的掩码，所以答案就是 `popcount(A ^ B)`。

JS 位运算按 32 位有符号处理，负数参与异或时结果为负，逐位统计必须用**无符号右移 `>>>`**，否则负数永远非零会死循环，且符号位也能被正确计入（如 A = -1, B = 0 时 32 位全不同，答案 32）。

时间 O(32) = O(1)，空间 O(1)。

## Solution

[SourceCode](./solution.js)
