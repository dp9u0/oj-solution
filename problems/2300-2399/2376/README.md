# [2376] Count Special Integers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-special-integers/description/)

* algorithms
* Hard (42.26%)
* Likes:    636
* Dislikes: 35
* Testcase Example:  '20'

```md
We call a positive integer special if all of its digits are distinct.
Given a positive integer n, return the number of special integers that belong to the interval [1, n].

Example 1:

Input: n = 20
Output: 19
Explanation: All the integers from 1 to 20, except 11, are special. Thus, there are 19 special integers.

Example 2:

Input: n = 5
Output: 5
Explanation: All the integers from 1 to 5 are special.

Example 3:

Input: n = 135
Output: 110
Explanation: There are 110 integers from 1 to 135 that are special.
Some of the integers that are not special are: 22, 114, and 131.

Constraints:

1 <= n <= 2 * 109


```

## 中文翻译

我们称一个正整数为"特殊整数"，如果它的所有数字都不相同。
给定一个正整数 n，返回区间 [1, n] 中特殊整数的个数。

示例 1：n = 20 → 输出 19（1-20中除11外都是特殊整数）
示例 2：n = 5 → 输出 5
示例 3：n = 135 → 输出 110

约束：1 <= n <= 2 * 10^9

## 解题思路

**数位 DP + 状态压缩**

核心思路：统计 [1, n] 中所有数字互不相同的整数个数。

1. **计算位数少于 n 的特殊数**：对于位数 k < len(n) 的数，从最高位开始选（不能选0），后续位从剩余数字中选，即 `9 * P(9, k-1)`。
2. **计算位数等于 n 的特殊数**：使用数位 DP，逐位确定，维护已使用的数字集合（用 bitmask 表示），逐位与 n 的对应位比较（限制/不限制上界）。
3. DP 状态：`(pos, mask, tight)` — 当前位置、已使用数字集合、是否受上界限制。

## Solution

[SourceCode](./solution.js)
