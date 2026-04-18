# [3753] Total Waviness of Numbers in Range II

## Description

[LeetCode Problem Description](https://leetcode.com/problems/total-waviness-of-numbers-in-range-ii/description/)

* algorithms
* Hard (25.70%)
* Likes:    39
* Dislikes: 2
* Testcase Example:  '120\n130'

```md
You are given two integers num1 and num2 representing an inclusive range [num1, num2].
The waviness of a number is defined as the total count of its peaks and valleys:

A digit is a peak if it is strictly greater than both of its immediate neighbors.
A digit is a valley if it is strictly less than both of its immediate neighbors.
The first and last digits of a number cannot be peaks or valleys.
Any number with fewer than 3 digits has a waviness of 0.

Return the total sum of waviness for all numbers in the range [num1, num2].

Example 1:

Input: num1 = 120, num2 = 130
Output: 3
Explanation:
In the range [120, 130]:

120: middle digit 2 is a peak, waviness = 1.
121: middle digit 2 is a peak, waviness = 1.
130: middle digit 3 is a peak, waviness = 1.
All other numbers in the range have a waviness of 0.

Thus, total waviness is 1 + 1 + 1 = 3.

Example 2:

Input: num1 = 198, num2 = 202
Output: 3
Explanation:
In the range [198, 202]:

198: middle digit 9 is a peak, waviness = 1.
201: middle digit 0 is a valley, waviness = 1.
202: middle digit 0 is a valley, waviness = 1.
All other numbers in the range have a waviness of 0.

Thus, total waviness is 1 + 1 + 1 = 3.

Example 3:

Input: num1 = 4848, num2 = 4848
Output: 2
Explanation:
Number 4848: the second digit 8 is a peak, and the third digit 4 is a valley, giving a waviness of 2.


Constraints:

1 <= num1 <= num2 <= 1015​​​​​​​


```

## 题目翻译

给定范围 [num1, num2]，统计所有数字的"波动度"之和。波动度 = 峰值数 + 谷值数，峰值指严格大于两侧邻居的数字位，谷值指严格小于两侧的数字位。首尾位不计。

## 解题思路

**数位DP**

solve(n) 返回 [1, n] 内所有数字的波动度之和，答案 = solve(num2) - solve(num1-1)。DP 状态 (pos, tight, started, last, secondLast)，处理每位数字时判断上一位是否构成峰/谷。last 和 secondLast 各 11 种值（-1到9），tight=false 时记忆化。用 BigInt 累加计数和波动度。O(16 * 2 * 11 * 11 * 10) 状态。

## Solution

[SourceCode](./solution.js)
