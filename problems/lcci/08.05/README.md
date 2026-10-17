# [面试题 08.05] 递归乘法

## Description


```md
https://leetcode.cn/problems/recursive-mulitply-lcci/description/
* lcci
* Medium (65.24%)
* Likes:    126
* Dislikes: -
* Testcase Example:  '1\n10'
递归乘法。 写一个递归函数，不使用 * 运算符， 实现两个正整数的相乘。可以使用加号、减号、位移，但要吝啬一些。
示例 1：
输入：A = 1, B = 10
输出：10
示例 2：
输入：A = 3, B = 4
输出：12
提示：
保证乘法范围不会溢出
Hint 1: 考虑将8乘以9看作是计算宽度为8、高度为9的矩阵中的单元数。
Hint 2: 如果你想计算8×9矩阵中的单元格数，可以先计算4×9矩阵中的单元格数，然后加倍。
Hint 3: 想想你如何处理奇数。
Hint 4: 如果不同的递归调用有重复的工作，你可以缓存它吗？
Hint 5: 如果你在做9×7（都是奇数），那么你可以换成4×7和5×7。
Hint 6: 或者，如果你在计算9×7，可以计算4×7，加倍，然后再加7。

```

## Description (English)

Recursive Multiply. Write a recursive function to multiply two positive integers without using the `*` operator. You may use +, -, and bit shifts, but keep them to a minimum.

Example 1:
Input: A = 1, B = 10
Output: 10

Example 2:
Input: A = 3, B = 4
Output: 12

Note: the product is guaranteed not to overflow.

## 思路

折半递归 O(log min)：较小者 A 折半——`A×B = (A>>1)×B << 1`，A 为奇数再补一次 `+B`；A ≤ 1 作基线。先交换使 A = min，递归深度仅 log(min(A,B))。

## Solution

[SourceCode](./solution.js)
