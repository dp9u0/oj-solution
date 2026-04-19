# [3704] Count No-Zero Pairs That Sum to N

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-no-zero-pairs-that-sum-to-n/description/)

* algorithms
* Hard (14.47%)
* Likes:    54
* Dislikes: 3
* Testcase Example:  '2'

```md
A no-zero integer is a positive integer that does not contain the digit 0 in its decimal representation.
Given an integer n, count the number of pairs (a, b) where:

a and b are no-zero integers.
a + b = n

Return an integer denoting the number of such pairs.

Example 1:

Input: n = 2
Output: 1
Explanation:
The only pair is (1, 1).

Example 2:

Input: n = 3
Output: 2
Explanation:
The pairs are (1, 2) and (2, 1).

Example 3:

Input: n = 11
Output: 8
Explanation:
The pairs are (2, 9), (3, 8), (4, 7), (5, 6), (6, 5), (7, 4), (8, 3), and (9, 2). Note that (1, 10) and (10, 1) do not satisfy the conditions because 10 contains 0 in its decimal representation.


Constraints:

2 <= n <= 1015


```

## 翻译

给定 n，统计满足 a+b=n 且 a、b 均不含数字 0 的正整数对 (a,b) 的数量。n ≤ 10^15。

## 解题思路

数位 DP，从低位到高位逐位选择 a 和 b 的数字，满足加法进位约束。状态：(位置, 进位, a是否已出现0, b是否已出现0)。每位 a 的最低位必须非零，一旦出现0后续必须全0（等同于 a 的实际位数结束）。O(k * 2 * 2 * 2 * 10 * 10)，k≤16。

## Solution

[SourceCode](./solution.js)
