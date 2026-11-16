# [1271] 十六进制魔术数字

## Description


```md
https://leetcode.cn/problems/hexspeak/description/
* algorithms
* Easy (47.78%)
* Likes:    14
* Dislikes: -
* Testcase Example:  '"257"'
你有一个十进制数字，请按照此规则将它变成「十六进制魔术数字」：首先将它变成字母大写的十六进制字符串，然后将所有的数字 0 变成字母 O ，将数字 1  变成字母 I 。
如果一个数字在转换后只包含 {"A", "B", "C", "D", "E", "F", "I", "O"} ，那么我们就认为这个转换是有效的。
给你一个字符串 num ，它表示一个十进制数 N，如果它的十六进制魔术数字转换是有效的，请返回转换后的结果，否则返回 "ERROR" 。

示例 1：
输入：num = "257"
输出："IOI"
解释：257 的十六进制表示是 101 。
示例 2：
输入：num = "3"
输出："ERROR"

提示：
1 <= N <= 10^12
给定字符串不会有前导 0 。
结果中的所有字母都应该是大写字母。
Hint 1: Convert the given number to hexadecimal.
Hint 2: Replace all 0 and 1 with 'O' and 'I'.
Hint 3: Check if the final string has any numerical digits.

```

## Solution

[SourceCode](./solution.js)

## Description (English)

Convert a decimal number (given as string `num`) to an uppercase hexadecimal string, then replace digit 0 with 'O' and digit 1 with 'I'. If the result contains only characters from {A, B, C, D, E, F, I, O}, the conversion is valid — return it; otherwise return "ERROR".

**Example 1:**
num = "257" → hex "101" → "IOI"

**Constraints:**
- 1 <= N <= 10^12, no leading zeros

## Approach

Number 转十六进制(N ≤ 10^12 在双精度精确范围内)大写后逐字符映射:0→O、1→I、2-9→ERROR、其余字母直接保留。

时间 O(log N),空间 O(log N)。
