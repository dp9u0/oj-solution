# [面试题 05.03] 翻转数位

## Description


```md
https://leetcode.cn/problems/reverse-bits-lcci/description/
* lcci
* Easy (38.29%)
* Likes:    124
* Dislikes: -
* Testcase Example:  '0'
给定一个32位整数 num，你可以将一个数位从0变为1。请编写一个程序，找出你能够获得的最长的一串1的长度。
示例 1：
输入: num = 1775(110111011112)
输出: 8
示例 2：
输入: num = 7(01112)
输出: 4
Hint 1: 先试试蛮力解法。你能尝试一切可能性吗？
Hint 2: 把0翻转到1可以合并两个1 的序列，但只有在这两个序列仅被一个0分隔时才可以。
Hint 3: 每个序列都可以通过与邻近的序列合并或者直接翻转紧挨着的0来增加其长度。你只需要找到最好的选择。
Hint 4: 尝试用线性时间、单次扫描和O(1) 空间完成它。

```

## Description (English)

Given a 32-bit integer num, you may flip exactly one digit from 0 to 1. Write a program to find the longest sequence of 1s you could obtain.

Example 1:
Input: num = 1775 (11011101111₂)
Output: 8

Example 2:
Input: num = 7 (0111₂)
Output: 4

## 思路

单次扫描 O(32)/O(1)：维护 `cur`（当前 1 串长）与 `prev`（最近一个 0 之前的 1 串长，初值 -1 表示尚未遇到 0）。翻转那个 0 可合并 `prev + 1 + cur`；`prev = -1` 时该式恰好退化为 `cur`，天然覆盖全 1（-1）无需翻转的情形。`>>>` 无符号取位保证负数输入正确。

## Solution

[SourceCode](./solution.js)
