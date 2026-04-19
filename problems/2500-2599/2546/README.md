# [2546] Apply Bitwise Operations to Make Strings Equal

## Description

[LeetCode Problem Description](https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/description/)

* algorithms
* Medium (42.61%)
* Likes:    263
* Dislikes: 101
* Testcase Example:  '"1010"\n"0110"'

```md
You are given two 0-indexed binary strings s and target of the same length n. You can do the following operation on s any number of times:

Choose two different indices i and j where 0 <= i, j < n.
Simultaneously, replace s[i] with (s[i] OR s[j]) and s[j] with (s[i] XOR s[j]).

For example, if s = '0110', you can choose i = 0 and j = 2, then simultaneously replace s[0] with (s[0] OR s[2] = 0 OR 1 = 1), and s[2] with (s[0] XOR s[2] = 0 XOR 1 = 1), so we will have s = '1110'.
Return true if you can make the string s equal to target, or false otherwise.

Example 1:

Input: s = '1010', target = '0110'
Output: true
Explanation: We can do the following operations:
- Choose i = 2 and j = 0. We have now s = '0010'.
- Choose i = 2 and j = 1. We have now s = '0110'.
Since we can make s equal to target, we return true.

Example 2:

Input: s = '11', target = '00'
Output: false
Explanation: It is not possible to make s equal to target with any number of operations.


Constraints:

n == s.length == target.length
2 <= n <= 105
s and target consist of only the digits 0 and 1.


```

## 翻译

给定两个等长 01 字符串 s 和 target，操作为选两个位置 i,j 同时令 s[i]=s[i]|s[j], s[j]=s[i]^s[j]。判断能否将 s 变为 target。

## Approach

分析操作对 (s[i],s[j]) 的影响：(0,1)→(1,1) 可创造 1；(1,0)→(1,1) 同理；(1,1)→(1,0) 可创造 0。只要 s 中有 1 就能扩散到任意位置，有至少两个 1 就能消除某个 1。因此关键条件：s 和 target 是否同时含有 1 或同时不含 1。

## Solution

[SourceCode](./solution.js)
