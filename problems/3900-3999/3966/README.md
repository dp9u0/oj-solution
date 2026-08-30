# [3966] Count Good Integers in a Range

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-good-integers-in-a-range/description/)

* algorithms
* Hard (52.31%)
* Likes:    41
* Dislikes: 2
* Testcase Example:  '10\n15\n1'

```md
You are given three integers l, r and k.
A number is considered good if the absolute difference between every pair of adjacent digits is at most k.
Return the number of good integers in the range [l, r] (inclusive).
The absolute difference between values x and y is defined as abs(x - y).

Example 1:

Input: l = 10, r = 15, k = 1
Output: 3
Explanation:

The good integers in the range are 10, 11, and 12.
For 10, abs(1 - 0) = 1.
For 11, abs(1 - 1) = 0.
For 12, abs(1 - 2) = 1.
All these differences are at most k = 1. Thus, the answer is 3.


Example 2:

Input: l = 201, r = 204, k = 2
Output: 2
Explanation:

The good integers in the range are 201 and 202.
For 201, abs(2 - 0) = 2 and abs(0 - 1) = 1.
For 202, abs(2 - 0) = 2 and abs(0 - 2) = 2.
Thus, the answer is 2.



Constraints:

10 <= l <= r <= 1015
0 <= k <= 9


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定三个整数 l、r 和 k。
如果一个数每一对相邻数字的绝对差都不超过 k，则称其为"好数"。
返回区间 [l, r]（含端点）内好数的个数。
x 和 y 的绝对差定义为 abs(x - y)。

示例 1：l = 10, r = 15, k = 1，输出 3（好数为 10、11、12）。
示例 2：l = 201, r = 204, k = 2，输出 2（好数为 201、202）。

约束：10 <= l <= r <= 10^15，0 <= k <= 9。

## 解题思路

数位 DP（digit DP）。定义 f(n) 为 [0, n] 中好数的个数，则答案为 f(r) - f(l - 1)。

从高位到低位逐位构造数字，状态为 (pos, prev, tight, started)：
- pos：当前处理到的位数；
- prev：上一位实际填的数字（用于约束相邻差）；
- tight：是否仍贴着 n 的前缀（是则当前位上限为 n 的该位，否则为 9）；
- started：是否已经开始填非零数字（处理前导零，前导零不构成相邻位约束）。

转移：若未开始且填 0，则继续保持未开始状态；一旦开始，新数字 d 必须满足 abs(d - prev) <= k。
数位全部填完计 1 种方案。

状态数 O(位数 × 10 × 2 × 2) ≈ 16 × 10 × 4，对每个数字记忆化搜索一次，总复杂度极低。
