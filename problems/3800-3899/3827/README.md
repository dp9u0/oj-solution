# [3827] Count Monobit Integers

## Description

[LeetCode Problem Description](https://leetcode.com/problems/count-monobit-integers/description/)

* algorithms
* Easy (66.32%)
* Likes:    53
* Dislikes: 1
* Testcase Example:  '1'

```md
You are given an integer n.
An integer is called Monobit if all bits in its binary representation are the same.
Return the count of Monobit integers in the range [0, n] (inclusive).

Example 1:

Input: n = 1
Output: 2
Explanation:

The integers in the range [0, 1] have binary representations '0' and '1'.
Each representation consists of identical bits. Thus, the answer is 2.


Example 2:

Input: n = 4
Output: 3
Explanation:

The integers in the range [0, 4] include binaries '0', '1', '10', '11', and '100'.
Only 0, 1 and 3 satisfy the Monobit condition. Thus, the answer is 3.



Constraints:

0 <= n <= 1000


```

## 题目翻译

给定整数 n。如果整数的二进制表示中所有位都相同，则称为 Monobit 整数。返回 [0, n] 范围内 Monobit 整数的个数。

## 解题思路

直接枚举所有 Monobit 整数，统计 <= n 的个数。

Monobit 整数包括：0，以及所有位的二进制数全为 1 的数（即 2^k - 1，k >= 1）。由于 n <= 1000，最多枚举到 2^10 - 1 = 1023 即可。

## Solution

[SourceCode](./solution.js)
