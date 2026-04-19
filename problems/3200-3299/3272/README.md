# [3272] Find the Count of Good Integers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-count-of-good-integers/description/)

* algorithms
* Hard (69.36%)
* Likes:    469
* Dislikes: 112
* Testcase Example:  '3\n5'

```md
You are given two positive integers n and k.
An integer x is called k-palindromic if:

x is a palindrome.
x is divisible by k.

An integer is called good if its digits can be rearranged to form a k-palindromic integer. For example, for k = 2, 2020 can be rearranged to form the k-palindromic integer 2002, whereas 1010 cannot be rearranged to form a k-palindromic integer.
Return the count of good integers containing n digits.
Note that any integer must not have leading zeros, neither before nor after rearrangement. For example, 1010 cannot be rearranged to form 101.

Example 1:

Input: n = 3, k = 5
Output: 27
Explanation:
Some of the good integers are:

551 because it can be rearranged to form 515.
525 because it is already k-palindromic.


Example 2:

Input: n = 1, k = 4
Output: 2
Explanation:
The two good integers are 4 and 8.

Example 3:

Input: n = 5, k = 6
Output: 2468


Constraints:

1 <= n <= 10
1 <= k <= 9


```

## 题目翻译

给定正整数 n 和 k。一个整数 x 是 k-回文的，如果 x 是回文数且能被 k 整除。一个整数是"好的"，如果它的数字可以重排成一个 k-回文数（不能有前导零）。返回 n 位好整数的个数。

## 解题思路

**枚举回文 + 排列计数**

1. 枚举所有 n 位回文数：只需枚举前半部分（ceil(n/2) 位），镜像得到完整回文
2. 检查是否能被 k 整除
3. 对每个合法回文，计算其数字频率，用 Set 去重（相同频率对应相同的好整数集合）
4. 对每种频率，计算有效排列数 = n!/(c0!*c1!*...*c9!) - 前导零的排列数

时间复杂度 O(10^(n/2) * n)，空间复杂度 O(10^(n/2))。

## Solution

[SourceCode](./solution.js)
