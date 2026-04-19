# [3370] Smallest Number With All Set Bits

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-number-with-all-set-bits/description/)

* algorithms
* Easy (80.33%)
* Likes:    373
* Dislikes: 15
* Testcase Example:  '5'

```md
You are given a positive number n.
Return the smallest number x greater than or equal to n, such that the binary representation of x contains only set bits

Example 1:

Input: n = 5
Output: 7
Explanation:
The binary representation of 7 is '111'.

Example 2:

Input: n = 10
Output: 15
Explanation:
The binary representation of 15 is '1111'.

Example 3:

Input: n = 3
Output: 3
Explanation:
The binary representation of 3 is '11'.


Constraints:

1 <= n <= 1000


```

## 中文翻译

给定正整数 n，返回 >= n 的最小数 x，使得 x 的二进制表示全为 1。

## 解题思路

全 1 二进制数为 1, 3, 7, 15, 31, ... 即 (1 << k) - 1。从 k=1 开始枚举，找到第一个 >= n 的值。

## Solution

[SourceCode](./solution.js)
