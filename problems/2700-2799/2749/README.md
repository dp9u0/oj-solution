# [2749] Minimum Operations to Make the Integer Zero

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-make-the-integer-zero/description/)

* algorithms
* Medium (58.19%)
* Likes:    769
* Dislikes: 376
* Testcase Example:  '3\n-2'

```md
You are given two integers num1 and num2.
In one operation, you can choose integer i in the range [0, 60] and subtract 2i + num2 from num1.
Return the integer denoting the minimum number of operations needed to make num1 equal to 0.
If it is impossible to make num1 equal to 0, return -1.

Example 1:

Input: num1 = 3, num2 = -2
Output: 3
Explanation: We can make 3 equal to 0 with the following operations:
- We choose i = 2 and subtract 22 + (-2) from 3, 3 - (4 + (-2)) = 1.
- We choose i = 2 and subtract 22+ (-2) from 1, 1 - (4 + (-2)) = -1.
- We choose i = 0 and subtract 20+ (-2) from -1, (-1) - (1 + (-2)) = 0.
It can be proven, that 3 is the minimum number of operations that we need to perform.

Example 2:

Input: num1 = 5, num2 = 7
Output: -1
Explanation: It can be proven, that it is impossible to make 5 equal to 0 with the given operation.


Constraints:

1 <= num1 <= 109
-109<= num2 <= 109


```

## 题目翻译

给定 num1 和 num2，每次操作选 i∈[0,60]，从 num1 减去 2^i+num2。最少多少次操作使 num1=0？不可能返回 -1。

## 解题思路

**数学：枚举操作次数 k**

k 次操作后 num1=0 意味着 num1-k*num2 = sum of k powers of 2（即 target）。

target 可表示为恰好 k 个 2 的幂之和 ⟺ popcount(target) ≤ k ≤ target。

因为 target < 2^30（num2≥0时）或 target 增长但 popcount ≤ 60（num2<0时），答案 k ≤ 60。枚举 k=1..60 即可。

## Solution

[SourceCode](./solution.js)
