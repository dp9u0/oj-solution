# [1256] 加密数字

## Description


```md
https://leetcode.cn/problems/encode-number/description/
* algorithms
* Medium (66.45%)
* Likes:    23
* Dislikes: -
* Testcase Example:  '23'
给你一个非负整数 num ，返回它的「加密字符串」。
加密的过程是把一个整数用某个未知函数进行转化，你需要从下表推测出该转化函数：

示例 1：
输入：num = 23
输出："1000"
示例 2：
输入：num = 107
输出："101100"

提示：
0 <= num <= 10^9
Hint 1: Try to find the number of binary digits returned by the function.
Hint 2: The pattern is to start counting from zero after determining the number of binary digits.

```

## Solution

[SourceCode](./solution.js)

## Translation

Infer the encoding from samples: f(num) = binary of (num+1) with the leading '1' removed. num=0 → "" (binary "1" stripped bare).

- Example: 23 → 24 = 11000₂ → `"1000"`; 107 → 108 = 1101100₂ → `"101100"`

## Approach

**规律直译**。加密 = (num+1) 的二进制去掉首位 1(每组定长 d 的数从 0 计数,恰为 num+1 的二进制表示切掉首位)。一行:`(num+1).toString(2).slice(1)`。O(log num)。
