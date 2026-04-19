# [1016] Binary String With Substrings Representing 1 To N

## Description

[LeetCode Problem Description](https://leetcode.com/problems/binary-string-with-substrings-representing-1-to-n/description/)

* algorithms
* Medium (58.48%)
* Likes:    387
* Dislikes: 540
* Testcase Example:  '"0110"\n3'

```md
Given a binary string s and a positive integer n, return true if the binary representation of all the integers in the range [1, n] are substrings of s, or false otherwise.
A substring is a contiguous sequence of characters within a string.

Example 1:
Input: s = "0110", n = 3
Output: true
Example 2:
Input: s = "0110", n = 4
Output: false


Constraints:

1 <= s.length <= 1000
s[i] is either &#39;0&#39; or &#39;1&#39;.
1 <= n <= 109


```

## 题目翻译

给定二进制字符串 s 和正整数 n，判断 [1, n] 中每个整数的二进制表示是否都是 s 的子串。

## 解题思路

**枚举子串值**。

- s 长度 <= 1000，n 的二进制最多 30 位。
- 枚举 s 所有长度不超过 30 的子串，转换为整数值，加入集合。
- 最终检查集合大小是否等于 n（即包含 1 到 n 所有值）。
- O(s.length * 30)。
