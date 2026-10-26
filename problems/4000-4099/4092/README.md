# [4092] 二进制位得分

## Description


```md
https://leetcode.cn/problems/binary-digit-score/description/
* algorithms
* Easy (77.34%)
* Likes:    1
* Dislikes: -
* Testcase Example:  '14\r\n6\r'
给你两个整数 a 和 b。
设 s1 和 s2 分别为 a 和 b 的二进制表示中置位的数量。
这两个整数的得分定义如下：
如果 s1 >= s2，则得分为 s1 * s2。
否则，得分为 s2 / s1，其中除法采用整数除法。
返回一个整数，表示 a 和 b 的得分。
置位是指数的二进制表示中值为 1 的位。

示例 1：
输入： a = 14, b = 6
输出： 6
解释：
a = 14 的二进制表示为 "1110"，因此 s1 = 3。
b = 6 的二进制表示为 "110"，因此 s2 = 2。
由于 s1 > s2，a 和 b 的得分为 s1 * s2 = 3 * 2 = 6。
示例 2：
输入： a = 5, b = 15
输出： 2
解释：
a = 5 的二进制表示为 "101"，因此 s1 = 2。
b = 15 的二进制表示为 "1111"，因此 s2 = 4。
由于 s1 < s2，a 和 b 的得分为 s2 / s1 = 4 / 2 = 2。
示例 3：
输入： a = 10, b = 12
输出： 4
解释：
a = 10 的二进制表示为 "1010"，因此 s1 = 2。
b = 12 的二进制表示为 "1100"，因此 s2 = 2。
由于 s1 == s2，a 和 b 的得分为 s1 * s2 = 2 * 2 = 4。

提示：
1 <= a, b <= 100

```

## Description (EN)

You are given two integers `a` and `b`. Let `s1` and `s2` be the number of set bits (popcount) in the binary representations of `a` and `b`. The score is defined as: if `s1 >= s2`, the score is `s1 * s2`; otherwise, the score is `s2 / s1` using integer division. Return the score.

Example 1: a=14 ("1110" → s1=3), b=6 ("110" → s2=2) → 3*2 = 6.

## 思路

直接按定义：先算两个 popcount，再按 s1 ≥ s2 分支返回乘积或整除。O(log max(a,b))。

## Solution

[SourceCode](./solution.js)
