# [1238] Circular Permutation in Binary Representation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/circular-permutation-in-binary-representation/description/)

* algorithms
* Medium (72.61%)
* Likes:    441
* Dislikes: 195
* Testcase Example:  '2\n3'

```md
Given 2 integers n and start. Your task is return any permutation pof (0,1,2.....,2^n -1) such that :

p[0] = start
p[i] and p[i+1]differ by only one bit in their binary representation.
p[0] and p[2^n -1]must also differ by only one bit in their binary representation.


Example 1:

Input: n = 2, start = 3
Output: [3,2,0,1]
Explanation: The binary representation of the permutation is (11,10,00,01).
All the adjacent element differ by one bit. Another valid permutation is [3,1,0,2]

Example 2:

Input: n = 3, start = 2
Output: [2,6,7,5,4,0,1,3]
Explanation: The binary representation of the permutation is (010,110,111,101,100,000,001,011).


Constraints:

1 <= n <= 16
0 <= start<2 ^ n


```

## 翻译

给定整数 n 和 start，返回 0 到 2^n-1 的一个排列，使得 p[0]=start，相邻元素二进制恰好差一位，首尾也差一位（即格雷码循环排列）。

## Approach

格雷码。标准格雷码 g(i) = i ^ (i >> 1)。先生成标准格雷码序列，然后找到 start 的位置，从该位置旋转数组。

时间复杂度 O(2^n)，空间复杂度 O(2^n)。

## Solution

[SourceCode](./solution.js)
