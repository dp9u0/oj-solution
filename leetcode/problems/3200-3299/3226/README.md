# [3226] Number of Bit Changes to Make Two Integers Equal

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/description/)

* algorithms
* Easy (63.45%)
* Likes:    103
* Dislikes: 7
* Testcase Example:  '13\n4'

```md
You are given two positive integers n and k.
You can choose any bit in the binary representation of n that is equal to 1 and change it to 0.
Return the number of changes needed to make n equal to k. If it is impossible, return -1.

Example 1:

Input: n = 13, k = 4
Output: 2
Explanation:
Initially, the binary representations of n and k are n = (1101)2 and k = (0100)2.
We can change the first and fourth bits of n. The resulting integer is n = (0100)2 = k.

Example 2:

Input: n = 21, k = 21
Output: 0
Explanation:
n and k are already equal, so no changes are needed.

Example 3:

Input: n = 14, k = 13
Output: -1
Explanation:
It is not possible to make n equal to k.


Constraints:

1 <= n, k <= 106


```

## 题目翻译

给定两个正整数 n 和 k，只能将 n 中为 1 的位改为 0。求使 n 等于 k 的最少修改次数，不可能则返回 -1。

## 解题思路

如果 k 中有某位为 1 而 n 中该位为 0，则不可能（不能把 0 变成 1），返回 -1。否则统计 n 中为 1 且 k 中为 0 的位数，即 `popcount(n & ~k)`。

时间复杂度：O(1)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
