# [2801] Count Stepping Numbers in Range

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-stepping-numbers-in-range/description/)

* algorithms
* Hard (28.07%)
* Likes:    360
* Dislikes: 11
* Testcase Example:  '"1"\n"11"'

```md
Given two positive integers low and high represented as strings, find the count of stepping numbers in the inclusive range [low, high].
A stepping number is an integer such that all of its adjacent digits have an absolute difference of exactly 1.
Return an integer denoting the count of stepping numbers in the inclusive range [low, high].
Since the answer may be very large, return it modulo 109 + 7.
Note: A stepping number should not have a leading zero.

Example 1:

Input: low = '1', high = '11'
Output: 10
Explanation: The stepping numbers in the range [1,11] are 1, 2, 3, 4, 5, 6, 7, 8, 9 and 10. There are a total of 10 stepping numbers in the range. Hence, the output is 10.
Example 2:

Input: low = '90', high = '101'
Output: 2
Explanation: The stepping numbers in the range [90,101] are 98 and 101. There are a total of 2 stepping numbers in the range. Hence, the output is 2.

Constraints:

1 <= int(low) <= int(high) < 10100
1 <= low.length, high.length <= 100
low and high consist of only digits.
low and high don&#39;t have any leading zeros.


```

## 翻译

给定字符串表示的正整数 low 和 high（最多 100 位），求 [low, high] 范围内 stepping number 的数量。Stepping number 指相邻数位差的绝对值恰好为 1，且无前导零。结果模 10^9+7。

## 解题思路

数位 DP。设 count(s) 为 [1, s] 中 stepping number 的个数，答案 = count(high) - count(low) + (low 是否为 stepping number)。

DP 状态：dp[started][tight][lastDigit] 表示当前填到第 i 位，是否已开始（放过非零数字）、是否仍紧贴上界、上一位数字。转移时枚举当前位数字 d，若未开始且 d=0 则继续跳过；若未开始且 d>0 则开始；若已开始则需 |d-lastDigit|=1。O(100 × 10 × 10) = O(n)。

## Solution

[SourceCode](./solution.js)
