# [2180] Count Integers With Even Digit Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-integers-with-even-digit-sum/description/)

* algorithms
* Easy (70.00%)
* Likes:    715
* Dislikes: 44
* Testcase Example:  '4'

```md
Given a positive integer num, return the number of positive integers less than or equal to num whose digit sums are even.
The digit sum of a positive integer is the sum of all its digits.

Example 1:

Input: num = 4
Output: 2
Explanation:
The only integers less than or equal to 4 whose digit sums are even are 2 and 4.

Example 2:

Input: num = 30
Output: 14
Explanation:
The 14 integers less than or equal to 30 whose digit sums are even are
2, 4, 6, 8, 11, 13, 15, 17, 19, 20, 22, 24, 26, and 28.


Constraints:

1 <= num <= 1000


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定正整数 num，返回小于等于 num 的正整数中，各位数字之和为偶数的个数。

## 解题思路

遍历 1 到 num，计算每个数的各位数字之和，判断是否为偶数。可以用数学方法优化：每连续两个数中恰好一个数字和为偶数，但考虑到进位情况，直接遍历更简洁。O(n)。
