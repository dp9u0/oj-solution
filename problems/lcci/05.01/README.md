# [面试题 05.01] 插入

## Description


```md
https://leetcode.cn/problems/insert-into-bits-lcci/description/
* lcci
* Easy (52.47%)
* Likes:    88
* Dislikes: -
* Testcase Example:  '1024\n19\n2\n6'
给定两个整型数字 N 与 M，以及表示比特位置的 i 与 j（i <= j，且从 0 位开始计算）。
编写一种方法，使 M 对应的二进制数字插入 N 对应的二进制数字的第 i ~ j 位区域，不足之处用 0 补齐。具体插入过程如图所示。
题目保证从 i 位到 j 位足以容纳 M， 例如： M = 10011，则 i～j 区域至少可容纳 5 位。

示例 1：
输入：N = 1024(10000000000), M = 19(10011), i = 2, j = 6
输出：N = 1100(10001001100)
示例 2：
输入：N = 0, M = 31(11111), i = 0, j = 4
输出：N = 31(11111)
Hint 1: 把这个分成几个部分。先将精力放在清除适当的位上。
Hint 2: 要清除这些位，创建一个看起来像是一系列1，然后是0，然后是1的“位掩码”。
Hint 3: 在开始或结束时很容易创建一个0的位掩码。但是，有一堆0时，你如何在中间创建一个零位掩码？简单的做法是，为左侧创建一个位掩码，然后为右侧创建一个位掩码。然后你可以合并两边。

```

## Description (English)

Given two integers N and M, and bit positions i and j (i <= j, counting from bit 0), write a method to insert M into N such that M occupies bits i through j of N (padding with 0 as needed). It is guaranteed that bits i..j are wide enough for M.

Example 1:
Input: N = 1024 (10000000000), M = 19 (10011), i = 2, j = 6
Output: N = 1100 (10001001100)

Example 2:
Input: N = 0, M = 31 (11111), i = 0, j = 4
Output: N = 31 (11111)

## 思路

三步位操作：构造掩码清空 N 的 i..j 位（高位段 `~0 << (j+1)`、低位段 `(1<<i)-1` 拼接），再或上 `M << i`。JS 移位量取模 32——`j = 31` 时 `<< 32` 会原地不动，需特判置 0。

## Solution

[SourceCode](./solution.js)
