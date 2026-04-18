# [2939] Maximum Xor Product

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-xor-product/description/)

* algorithms
* Medium (29.68%)
* Likes:    274
* Dislikes: 74
* Testcase Example:  '12\n5\n4'

```md
Given three integers a, b, and n, return the maximum value of (a XOR x) * (b XOR x) where 0 <= x < 2n.
Since the answer may be too large, return it modulo 109 + 7.
Note that XOR is the bitwise XOR operation.

Example 1:

Input: a = 12, b = 5, n = 4
Output: 98
Explanation: For x = 2, (a XOR x) = 14 and (b XOR x) = 7. Hence, (a XOR x) * (b XOR x) = 98.
It can be shown that 98 is the maximum value of (a XOR x) * (b XOR x) for all 0 <= x < 2n.

Example 2:

Input: a = 6, b = 7 , n = 5
Output: 930
Explanation: For x = 25, (a XOR x) = 31 and (b XOR x) = 30. Hence, (a XOR x) * (b XOR x) = 930.
It can be shown that 930 is the maximum value of (a XOR x) * (b XOR x) for all 0 <= x < 2n.
Example 3:

Input: a = 1, b = 6, n = 3
Output: 12
Explanation: For x = 5, (a XOR x) = 4 and (b XOR x) = 3. Hence, (a XOR x) * (b XOR x) = 12.
It can be shown that 12 is the maximum value of (a XOR x) * (b XOR x) for all 0 <= x < 2n.


Constraints:

0 <= a, b < 250
0 <= n <= 50


```

## 题目翻译

给定三个整数 a、b、n，求 (a XOR x) * (b XOR x) 在 0 <= x < 2^n 范围内的最大值。结果对 10^9 + 7 取模。

## 解题思路

**贪心 + 逐位构造**

x 只有低 n 位可以自由选择（高于 n 的位 x 为 0）。从最高位到最低位逐位决定 x 的值。设 ax = a XOR x, bx = b XOR x。

对于第 i 位（0-indexed，i < n）：
- 如果 a 和 b 在第 i 位相同，XOR 后一个变 1 一个变 0（或都变），所以 x 第 i 位设为 1 时 ax 和 bx 的该位互补，设为 0 时也互补，应该让两个数尽量接近，选让较大的那个数该位变 0、较小的变 1 的那个设置。
- 如果 a 和 b 在第 i 位不同，设 x 第 i 位使得较小的数该位变 1（增大较小的数），使乘积最大化。

具体实现：维护 ax、bx，从高位到低位遍历。若 ax >= bx，对于第 i 位：
- a 的第 i 位和 b 的第 i 位相同时：设 x 第 i 位为 1，两个数该位都翻转
- 不同时：让较大的 ax 该位变 1（即如果 a 第 i 位为 0，设 x 第 i 位为 1）

由于 a, b < 2^50，需要用 BigInt 计算。

## Solution

[SourceCode](./solution.js)
