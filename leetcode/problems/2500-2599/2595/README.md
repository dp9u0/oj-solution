# [2595] Number of Even and Odd Bits

## Description

[LeetCode Problem Description](https://leetcode.com/problems/number-of-even-and-odd-bits/description/)

* algorithms
* Easy (73.49%)
* Likes:    374
* Dislikes: 118
* Testcase Example:  '50'

```md
You are given a positive integer n.
Let even denote the number of even indices in the binary representation of n with value 1.
Let odd denote the number of odd indices in the binary representation of n with value 1.
Note that bits are indexed from right to left in the binary representation of a number.
Return the array [even, odd].

Example 1:

Input: n = 50
Output: [1,2]
Explanation:
The binary representation of 50 is 110010.
It contains 1 on indices 1, 4, and 5.

Example 2:

Input: n = 2
Output: [0,1]
Explanation:
The binary representation of 2 is 10.
It contains 1 only on index 1.


Constraints:

1 <= n <= 1000


```

## 中文翻译

给定正整数 n，统计其二进制中偶数位和奇数位上的 1 的个数（从右往左编号），返回 [even, odd]。

## 解题思路

用位掩码分别统计：偶数位用 0x5555（二进制 0101...），奇数位用 0xAAAA（二进制 1010...），与 n 做 AND 后数 1 的个数。

## Solution

[SourceCode](./solution.js)
