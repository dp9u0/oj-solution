# [1362] Closest Divisors

## Description

[LeetCode Problem Description](https://leetcode.com/problems/closest-divisors/description/)

* algorithms
* Medium (62.10%)
* Likes:    339
* Dislikes: 101
* Testcase Example:  '8'

```md
Given an integer num, find the closest two integers in absolute difference whose product equalsnum + 1or num + 2.
Return the two integers in any order.

Example 1:

Input: num = 8
Output: [3,3]
Explanation: For num + 1 = 9, the closest divisors are 3 &amp; 3, for num + 2 = 10, the closest divisors are 2 &amp; 5, hence 3 &amp; 3 is chosen.

Example 2:

Input: num = 123
Output: [5,25]

Example 3:

Input: num = 999
Output: [40,25]


Constraints:

1 <= num <= 10^9


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定整数 num，找两个整数其乘积等于 num+1 或 num+2，且差的绝对值最小。

## 解题思路

**Approach: 枚举因子**

1. 对 num+1 和 num+2 分别找最接近的因子对
2. 从 sqrt(x) 向下枚举，第一个能整除的就是差最小的因子对
3. 取两者中更优的
4. 复杂度 O(sqrt(num))
