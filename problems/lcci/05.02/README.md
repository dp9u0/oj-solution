# [面试题 05.02] 二进制数转字符串

## Description


```md
https://leetcode.cn/problems/binary-number-to-string-lcci/description/
* lcci
* Medium (76.85%)
* Likes:    149
* Dislikes: -
* Testcase Example:  '0.625'
二进制数转字符串。给定一个介于 0 和 1 之间的实数（如 0.72），类型为 double，打印它的二进制表达式。如果该数字无法精确地用 32 位以内的二进制表示，则打印“ERROR”。
示例 1：
输入：0.625
输出："0.101"
示例 2：
输入：0.1
输出："ERROR"
提示：0.1 无法被二进制准确表示

提示：
32位包括输出中的 "0." 这两位。
题目保证输入用例的小数位数最多只有 6 位
Hint 1: 为了解决这个问题，试着想想如何用它来处理整数。
Hint 2: 像0.893这样的数字（以10为底），每个数字代表什么？那么以2为底的0.10 010中的每个数字代表什么？
Hint 3: 一个数字如0.893（以10为底）表示8×101 + 9×102 + 3×103。将此系统转换为以2为底。
Hint 4: 你将如何获得0.893中的第一个数字？如果乘以10，那么你会改变值得到8.93。如果乘以2，结果会是什么？
Hint 5: 想想那些不能用二进制精确表示的值会发生什么。

```

## Description (English)

Binary Number to String. Given a real number between 0 and 1 (e.g. 0.72) of type double, print its binary representation. If the number cannot be represented exactly in binary within 32 bits, print "ERROR".

Example 1:
Input: 0.625
Output: "0.101"

Example 2:
Input: 0.1
Output: "ERROR" (0.1 cannot be represented exactly in binary)

Notes: the 32 bits include the two characters "0."; inputs have at most 6 decimal places.

## 思路

乘 2 取整法：每轮 `num *= 2`，整数部分即当前二进制位，随后减去该位；num 变 0 即精确表示完成。32 位含 "0." 两个字符 → 小数最多 30 位，超限仍未归零则必然无法精确表示，返回 ERROR（如 0.1 这类二进制无限循环小数）。

## Solution

[SourceCode](./solution.js)
