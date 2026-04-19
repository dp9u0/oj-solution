# [1611] Minimum One Bit Operations to Make Integers Zero

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-one-bit-operations-to-make-integers-zero/description/)

* algorithms
* Hard (78.41%)
* Likes:    1212
* Dislikes: 1208
* Testcase Example:  '3'

```md
Given an integer n, you must transform it into 0 using the following operations any number of times:

Change the rightmost (0th) bit in the binary representation of n.
Change the ith bit in the binary representation of n if the (i-1)th bit is set to 1 and the (i-2)th through 0th bits are set to 0.

Return the minimum number of operations to transform n into 0.

Example 1:

Input: n = 3
Output: 2
Explanation: The binary representation of 3 is '11'.
'11' -> '01' with the 2nd operation since the 0th bit is 1.
'01' -> '00' with the 1st operation.

Example 2:

Input: n = 6
Output: 4
Explanation: The binary representation of 6 is '110'.
'110' -> '010' with the 2nd operation since the 1st bit is 1 and 0th through 0th bits are 0.
'010' -> '011' with the 1st operation.
'011' -> '001' with the 2nd operation since the 0th bit is 1.
'001' -> '000' with the 1st operation.


Constraints:

0 <= n <= 109


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定整数 n，可以通过以下操作将其变为 0：(1) 翻转最低位；(2) 当第 i-1 位为 1 且第 i-2 到 0 位全为 0 时，翻转第 i 位。求最少操作次数。

## 解题思路

递推公式：设 k 为 n 的最高位，则 f(n) = 2^(k+1) - 1 - f(n - 2^k)。等价地，f(n) = n XOR (n>>1) XOR (n>>2) XOR ...，即 n 与其所有右移的异或。这实际上是 Gray 编码的逆变换。循环 O(log n) 即可。
