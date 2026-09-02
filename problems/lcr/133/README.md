# [LCR 133] 位 1 的个数

## Description


```md
https://leetcode.cn/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/description/
* algorithms
* Easy (76.30%)
* Likes:    350
* Dislikes: -
* Testcase Example:  '00000000000000000000000000001011'
编写一个函数，输入是一个无符号整数（以二进制串的形式），返回其二进制表达式中数字位数为 '1' 的个数（也被称为 汉明重量).）。

提示：
请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。
在 Java 中，编译器使用 二进制补码 记法来表示有符号整数。因此，在上面的 示例 3 中，输入表示有符号整数 -3。

示例 1：
输入：n = 11 (控制台输入 00000000000000000000000000001011)
输出：3
解释：输入的二进制串 00000000000000000000000000001011 中，共有三位为 '1'。
示例 2：
输入：n = 128 (控制台输入 00000000000000000000000010000000)
输出：1
解释：输入的二进制串 00000000000000000000000010000000 中，共有一位为 '1'。
示例 3：
输入：n = 4294967293 (控制台输入 11111111111111111111111111111101，部分语言中 n = -3）
输出：31
解释：输入的二进制串 11111111111111111111111111111101 中，共有 31 位为 '1'。

提示：
输入必须是长度为 32 的 二进制串 。

注意：本题与主站 191 题相同：https://leetcode.cn/problems/number-of-1-bits/

```

## Solution

[SourceCode](./solution.js)

---

## English Translation

Write a function that takes an **unsigned integer** (as a binary string) and returns the number of `'1'` bits in its binary representation (also known as the **Hamming weight**).

**Note:** Some languages lack unsigned int; input/output may be given as signed, which doesn't affect the implementation since the underlying bit representation is identical. Java uses two's complement for signed ints, so e.g. input representing signed `-3` is `...11111101` (29 ones → example gives 31 bits? example 3 = 31 ones).

**Example 1:** `n = 11` (`...01011`) → `3`
**Example 2:** `n = 128` → `1`
**Example 3:** `n = 4294967293` (`...11101`, `-3` signed) → `31`

**Constraints:** input is a 32-bit binary string.

Note: same as LeetCode 191.

---

## Approach

Use the classic trick `n = n & (n - 1)`, which clears the lowest set bit. Count how many times we can apply it until `n == 0`.

Complexity: `O(number of set bits)`, `O(1)` space.
