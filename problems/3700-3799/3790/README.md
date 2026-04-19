# [3790] Smallest All-Ones Multiple

## Description

[LeetCode Problem Description](https://leetcode.com/problems/smallest-all-ones-multiple/description/)

* algorithms
* Medium (47.02%)
* Likes:    95
* Dislikes: 6
* Testcase Example:  '3'

```md
You are given a positive integer k.
Find the smallest integer n divisible by k that consists of only the digit 1 in its decimal representation (e.g., 1, 11, 111, ...).
Return an integer denoting the number of digits in the decimal representation of n. If no such n exists, return -1.

Example 1:

Input: k = 3
Output: 3
Explanation:
n = 111 because 111 is divisible by 3, but 1 and 11 are not. The length of n = 111 is 3.

Example 2:

Input: k = 7
Output: 6
Explanation:
n = 111111. The length of n = 111111 is 6.

Example 3:

Input: k = 2
Output: -1
Explanation:
There does not exist a valid n that is a multiple of 2.


Constraints:

2 <= k <= 105


```

## 翻译

给定正整数 k，找到最小的由全 1 组成的十进制数 n（如 1, 11, 111...）使得 n 能被 k 整除。返回 n 的位数，若不存在则返回 -1。

## 解题思路

从 remainder = 1 开始，逐步构建 11, 111, ... 的余数。每次 remainder = (remainder * 10 + 1) % k。如果在 k 步内余数变为 0，返回当前位数；若余数重复（出现循环）则返回 -1。由于余数只有 k 种可能，最多 k 步即可判定。时间复杂度 O(k)。

## Solution

[SourceCode](./solution.js)
