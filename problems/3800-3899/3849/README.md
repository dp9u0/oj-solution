# [3849] Maximum Bitwise XOR After Rearrangement

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-bitwise-xor-after-rearrangement/description/)

* algorithms
* Medium (71.14%)
* Testcase Example:  '"101"\n"011"'

```md
You are given two binary strings s and t​​​​​​​, each of length n.
You may rearrange the characters of t in any order, but s must remain unchanged.
Return a binary string of length n representing the maximum integer value obtainable by taking the bitwise XOR of s and rearranged t.

Example 1:
Input: s = "101", t = "011"
Output: "110"
Explanation:
One optimal rearrangement of t is "011".
The bitwise XOR of s and rearranged t is "101" XOR "011" = "110", which is the maximum possible.
Example 2:
Input: s = "0110", t = "1110"
Output: "1101"
Explanation:
One optimal rearrangement of t is "1011".
The bitwise XOR of s and rearranged t is "0110" XOR "1011" = "1101", which is the maximum possible.
Example 3:
Input: s = "0101", t = "1001"
Output: "1111"
Explanation:
One optimal rearrangement of t is "1010".
The bitwise XOR of s and rearranged t is "0101" XOR "1010" = "1111", which is the maximum possible.

Constraints:
1
s[i] and t[i] are either '0' or '1'.

```

## Solution

[SourceCode](./solution.js)

---

## 题目翻译

给定两个长度为 n 的二进制字符串 s 和 t。
可以任意重排 t 的字符，但 s 不能改变。
返回 s 与重排后的 t 进行按位异或能得到的最大整数值（以二进制字符串表示）。

**示例 1：** s="101", t="011" → "110"
**示例 2：** s="0110", t="1110" → "1101"
**示例 3：** s="0101", t="1001" → "1111"

## Approach (解题思路)

**贪心**

从高位到低位遍历 s，每一步尝试使 XOR 结果为 1：
- 如果 s[i]='0'，需要 t 中放一个 '1'（使 XOR=1）
- 如果 s[i]='1'，需要 t 中放一个 '0'（使 XOR=1）

维护 t 中 0 和 1 的计数，从左到右贪心选择：优先让高位为 1。

**时间复杂度：** O(n)
**空间复杂度：** O(n)
