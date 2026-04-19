# [3821] Find Nth Smallest Integer With K One Bits

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-nth-smallest-integer-with-k-one-bits/description/)

* algorithms
* Hard (34.66%)
* Likes:    69
* Dislikes: 2
* Testcase Example:  '4\n2'

```md
You are given two positive integers n and k.
Return an integer denoting the nth smallest positive integer that has exactly k ones in its binary representation. It is guaranteed that the answer is strictly less than 250.

Example 1:

Input: n = 4, k = 2
Output: 9
Explanation:
The 4 smallest positive integers that have exactly k = 2 ones in their binary representations are:

3 = 112
5 = 1012
6 = 1102
9 = 10012


Example 2:

Input: n = 3, k = 1
Output: 4
Explanation:
The 3 smallest positive integers that have exactly k = 1 one in their binary representations are:

1 = 12
2 = 102
4 = 1002



Constraints:

1 <= n <= 250
1 <= k <= 50
The answer is strictly less than 250.


```

## 中文翻译

给定正整数 n 和 k，求二进制中恰好有 k 个 1 的第 n 小正整数。保证答案 < 2^50。

约束：n <= 250, k <= 50

## 解题思路

**二分答案 + 组合计数**

1. 二分答案 X，计算 [1, X] 中恰好有 k 个 1 的整数个数。
2. 计数方法：从高位到低位扫描 X 的二进制，遇到 1 时可选择设为 0，则剩余 i 位中选 need = k - ones 个 1，贡献 C(i, need)。
3. 预处理组合数 C[0..50][0..50]。
4. 二分范围 [1, 2^50 - 1]，注意用 BigInt 处理位运算。

## Solution

[SourceCode](./solution.js)
