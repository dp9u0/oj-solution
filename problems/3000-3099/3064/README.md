# [3064] 使用按位查询猜测数字 I

## Description


```md
https://leetcode.cn/problems/guess-the-number-using-bitwise-questions-i/description/
* algorithms
* Medium (27.99%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '31'
你需要找到一个数字 n。
这里有一个预定义的 API int commonSetBits(int num)，它返回 n 和 num 在二进制表示的同一位置上都是 1 的位数。换句话说，它返回 n & num 的 设置位 数量，其中 & 是按位 AND 运算符。
返回数字 n。

示例 1：
输入：n = 31
输出：31
解释：能够证明使用给定的 API 找到 31 是可能的。
示例 2：
输入：n = 33
输出：33
解释：能够证明使用给定的 API 找到 33 是可能的。

提示：
1 <= n <= 230 - 1
0 <= num <= 230 - 1
如果你查询的 num 超出了给定的范围，输出就不可靠。
Hint 1: Ask 2i for 0 <= i < 30.
Hint 2: If the result is greater than zero for some i, this bit is a set bit in n.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Interactive: guess hidden n (1 <= n < 2^30) using commonSetBits(num) = popcount(n & num). 

Approach: query 1 << i for i in 0..29; a positive result means bit i of n is set. 30 queries. O(1)-ish.
