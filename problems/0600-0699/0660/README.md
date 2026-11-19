# [660] 移除 9

## Description


```md
https://leetcode.cn/problems/remove-9/description/
* algorithms
* Hard (59.07%)
* Likes:    34
* Dislikes: -
* Testcase Example:  '9'
从 1 开始，移除包含数字 9 的所有整数，例如 9，19，29，……
这样就获得了一个新的整数数列：1，2，3，4，5，6，7，8，10，11，……
给你一个整数 n，请你返回新数列中第 n 个数字是多少（下标从 1 开始）。

示例 1：
输入：n = 9
输出：10
示例 2：
输入：n = 10
输出：11

提示：
1 <= n <= 8 * 108

```

## Solution

[SourceCode](./solution.js)

## Translation

Sequence of all positive integers containing no digit 9: 1,2,...,8,10,11,... Return the n-th element (1-based). n up to 8·10^8.

- Example: n = 9 → `10`; n = 10 → `11`

## Approach

**九进制映射**。不含数字 9 的十进制数按大小排序,与"把 n 写成九进制的数字串按十进制读出"一一对应(九进制数字 0–8 恰好是无 9 数字,且进位规律一致)。所以答案 = n 的九进制表示按十进制读。O(log₉n)。
