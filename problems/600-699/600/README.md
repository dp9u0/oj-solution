# [600] Non-negative Integers without Consecutive Ones

## Description

[LeetCode Problem Description](https://leetcode.com/problems/non-negative-integers-without-consecutive-ones/description/)

* algorithms
* Hard (42.09%)
* Likes:    1635
* Dislikes: 138
* Testcase Example:  '5'

```md
Given a positive integer n, return the number of the integers in the range [0, n] whose binary representations do not contain consecutive ones.

Example 1:

Input: n = 5
Output: 5
Explanation:
Here are the non-negative integers <= 5 with their corresponding binary representations:
0 : 0
1 : 1
2 : 10
3 : 11
4 : 100
5 : 101
Among them, only integer 3 disobeys the rule (two consecutive ones) and the other 5 satisfy the rule.

Example 2:

Input: n = 1
Output: 2

Example 3:

Input: n = 2
Output: 3


Constraints:

1 <= n <= 109


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定正整数 n，返回 [0, n] 范围内二进制表示中不含连续 1 的整数个数。

## 解题思路

数位 DP。将 n 转为二进制，从高位到低位逐位处理。状态：dp[pos][prev_one][tight] = 从第 pos 位开始，前一位是否为 1，是否受 n 的约束。对每位，如果前一位是 1 则当前位不能选 1；如果 tight 则当前位不能超过 n 的对应位。记忆化搜索。
