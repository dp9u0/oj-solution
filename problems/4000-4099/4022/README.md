# [4022] K-th Digit in Infinite String

## Description

[LeetCode Problem Description](https://leetcode.com/problems/k-th-digit-in-infinite-string/description/)

* algorithms
* Medium (35.34%)
* Likes:    47
* Dislikes: 10
* Testcase Example:  '4\r'

```md
You are given an integer k.
An infinite string is formed by concatenating the decimal representations of the positive integers, without separators.
For every nonnegative integer b, block b contains the positive integers from 10 * b through 10 * b + 9. The integers in each block are appended as follows:

If b is even, append the integers in increasing order.
If b is odd, append the integers in decreasing order.

Therefore, the string starts with the integers 1 through 9, followed by 19 through 10, then 20 through 29, then 39 through 30, and so on.
Return the kth digit (1-indexed) of this string.

Example 1:

Input: k = 4
Output: 4
Explanation:
The string begins as '123456789..'. The 4th digit is &#39;4&#39;.

Example 2:

Input: k = 15
Output: 7
Explanation:
The string begins as '123456789191817..'. The 15th digit is &#39;7&#39;.

Example 3:

Input: k = 11
Output: 9
Explanation:
The string begins as '12345678919..'. The 11th digit is &#39;9&#39;.


Constraints:

1 <= k <= 1015


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

无限字符串由正整数的十进制表示依次拼接而成，按"块"组织：块 b 包含整数 `10b .. 10b+9`；b 偶则升序拼接，b 奇则降序拼接。于是串以 `1..9`（块 0），`19..10`（块 1），`20..29`（块 2），`39..30`（块 3）… 开始。返回第 `k` 位数字（1 起下标）。

示例：k=4 → 4；k=15 → 7；k=11 → 9

约束：`1 <= k <= 10^15`

## 解题思路

按数字位数 L 分组定位，全部 O(log k)：

- **L=1**：仅块 0，即 "123456789"，9 位（k ≤ 9 直接返回）；
- **L ≥ 2**：块 b 的 10 个数位数均为 L（`10b` 决定）⇔ `b ∈ [10^(L-2), 10^(L-1)-1]`，共 `9·10^(L-2)` 块，每组 `90·L·10^(L-2)` 位。

先扣掉 L=1 与逐组的位数定出 L；组内 `块号 = ⌈剩余/(10L)⌉`，块内偏移定位到第 m 个数与第 digitPos 位：b 偶取 `10b+m`（升序），b 奇取 `10b+9−m`（降序），取其十进制串的第 digitPos 个字符。

数值均 ≤ ~1.4×10^16 < 2^53，双精度安全。

验证 k=15：扣 9 位后剩 6，块 b=1（奇、降序），m=2 → 数 17，取第 2 位 = 7 ✓
