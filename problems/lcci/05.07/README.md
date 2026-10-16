# [面试题 05.07] 配对交换

## Description


```md
https://leetcode.cn/problems/exchange-lcci/description/
* lcci
* Easy (71.34%)
* Likes:    98
* Dislikes: -
* Testcase Example:  '3'
配对交换。编写程序，交换某个整数的奇数位和偶数位，尽量使用较少的指令（也就是说，位 0 与位 1 交换，位 2 与位 3 交换，以此类推）。
示例 1：
输入：num = 2（或者 0b10）
输出：1 (或者 0b01)
示例 2：
输入：num = 3
输出：3
提示:
num 的范围在[0, 230 - 1]之间，不会发生整数溢出。
Hint 1: 交换每一对意味着把偶数位移到左边，奇数位移到右边。你能把这个问题分成几个部分吗？
Hint 2: 你能创建一个代表偶数位的数字吗？那么你可以将偶数位移过一位吗？
Hint 3: 二进制的1010等价于十进制的10，也相当于十六进制的0xA。那么二进制的101010...在十六进制中是什么？也就是说，你要如何表示1在奇数位上的1和0交替序列？如果反过来呢（1在偶数位）？
Hint 4: 尝试用掩码0xaaaaaaaa和0x55555555提取偶数位和奇数位。然后尝试移动偶数位和奇数位来创建正确的数字。

```

## Description (English)

Pairwise exchange. Write a program to swap the odd and even bits of an integer, using as few instructions as possible (bit 0 swapped with bit 1, bit 2 with bit 3, and so on).

Example 1:
Input: num = 2 (0b10)
Output: 1 (0b01)

Example 2:
Input: num = 3
Output: 3

Note: num is in [0, 2^30 - 1]; no integer overflow will occur.

## 思路

双掩码一步交换 O(1)：`0xAAAAAAAA`（1010…）取奇数位右移 1 位、`0x55555555`（0101…）取偶数位左移 1 位，按位或合并。num ≤ 2^30-1 保证两个中间值均在 31 位内，JS 位移安全。

## Solution

[SourceCode](./solution.js)
