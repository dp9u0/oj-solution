# [1999] 最小的仅由两个数组成的倍数

## Description


```md
https://leetcode.cn/problems/smallest-greater-multiple-made-of-two-digits/description/
* algorithms
* Medium (43.75%)
* Likes:    7
* Dislikes: -
* Testcase Example:  '2\n0\n2'
给你三个整数, k, digit1和 digit2, 你想要找到满足以下条件的 最小 整数：
大于k 且是 k 的倍数
仅由digit1 和 digit2 组成，即 每一位数 均是 digit1 或 digit2
请你返回 最小的满足这两个条件的整数，如果不存在这样的整数，或者最小的满足这两个条件的整数不在32位整数范围（0~231-1），就返回 -1 。

示例 1：
输入：k = 2, digit1 = 0, digit2 = 2
输出：20
解释：
20 是第一个仅有数字0和2组成的，比2大且是2的倍数的整数。
示例 2：
输入：k = 3, digit1 = 4, digit2 = 2
输出：24
解释：
24 是第一个仅有数字 2 和 4 组成的，比 3 大且是 3 的倍数的整数。
示例 3：
输入：k = 2, digit1 = 0, digit2 = 0
输出：-1
解释：
不存在仅由 0 组成的比 2 大且是 2 的倍数的整数，因此返回 -1 。

提示：
1 <= k <= 1000
0 <= digit1 <= 9
0 <= digit2 <= 9
Hint 1: Could you generate all the different numbers comprised of only digit1 and digit2 with the constraints?
Hint 2: Going from least to greatest, check if the number you generated is greater than k and a multiple of k.

```

## Solution

[SourceCode](./solution.js)

## English Translation

Given integers `k`, `digit1`, `digit2`, find the smallest integer that is:
- greater than `k` and a multiple of `k`, and
- composed only of the digits `digit1` and `digit2` (every digit is one of the two).

Return -1 if no such integer exists or it does not fit in a 32-bit integer range (0 to 2^31 - 1).

Example 1:
Input: k = 2, digit1 = 0, digit2 = 2
Output: 20

Example 2:
Input: k = 3, digit1 = 4, digit2 = 2
Output: 24

Example 3:
Input: k = 2, digit1 = 0, digit2 = 0
Output: -1

Constraints: 1 <= k <= 1000, 0 <= digit1, digit2 <= 9.

## Approach

Any candidate fitting in a 32-bit integer has at most 10 digits, and only two digit values exist, so the whole candidate space is at most ~2 x 2^10 numbers. Generate them level by level (by length, which keeps values non-decreasing across levels): start from the distinct non-zero digits (a leading zero is not allowed), then append either digit; prune values exceeding 2^31 - 1. Track the minimum value that is greater than k and divisible by k.

Time O(2^10) generations - effectively constant.
